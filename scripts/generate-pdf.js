#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/generate-pdf.js
// Puppeteer headless renderer for the Clear Skies zine (print.html).
//
// Usage (from project root):
//   node scripts/generate-pdf.js
//   node scripts/generate-pdf.js --month april --year 2026
//   node scripts/generate-pdf.js --month may   --year 2026
//
// The script navigates to print.html?data=[month]-[year] as a file:// URL.
// No HTML patching needed — print.html reads the ?data= param dynamically.
//
// Output: output/clear-skies-[month]-[year].pdf
// ─────────────────────────────────────────────────────────────────────────────

'use strict';

const puppeteer = require('puppeteer');
const qrcode    = require('qrcode');
const path      = require('path');
const fs        = require('fs');

// QR code target — fixed for every edition
const QR_URL = 'https://clearskies.starstucklab.com';

// ── 1. Parse CLI arguments ────────────────────────────────────────────────────

const args = process.argv.slice(2);

function getArg(flag, fallback) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return fallback;
}

// Default to current month/year if no args provided
const now          = new Date();
const MONTH_NAMES  = ['january','february','march','april','may','june',
                      'july','august','september','october','november','december'];

const month = getArg('--month', MONTH_NAMES[now.getMonth()]).toLowerCase();
const year  = getArg('--year',  String(now.getFullYear()));

console.log(`[generate-pdf] Target: ${month} ${year}`);

// ── 2. Verify the data file exists ────────────────────────────────────────────

const projectRoot  = path.resolve(__dirname, '..');
const dataFile     = path.join(projectRoot, `data-${month}-${year}.js`);
const pagedJsVendor= path.join(projectRoot, 'vendor', 'paged.polyfill.js');
const outputDir    = path.join(projectRoot, 'output');
const outputFile   = path.join(outputDir, `clear-skies-${month}-${year}.pdf`);
const printHtml    = path.join(projectRoot, 'print.html');

if (!fs.existsSync(dataFile)) {
  console.error(`[generate-pdf] ERROR: Data file not found: ${dataFile}`);
  console.error(`  Expected: data-${month}-${year}.js in project root.`);
  process.exit(1);
}

if (!fs.existsSync(printHtml)) {
  console.error(`[generate-pdf] ERROR: print.html not found at: ${printHtml}`);
  process.exit(1);
}

if (!fs.existsSync(pagedJsVendor)) {
  console.error(`[generate-pdf] ERROR: Paged.js not found at: ${pagedJsVendor}`);
  console.error('  Run: cd scripts && npm install && npm run copy-pagedjs');
  process.exit(1);
}

// ── 3. Ensure output directory exists ─────────────────────────────────────────

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`[generate-pdf] Created output directory: ${outputDir}`);
}

// ── 4. Build the file:// URL ──────────────────────────────────────────────────

// Puppeteer needs an absolute file:// URL.
// We append ?data=month-year so print.html knows which data file to load.
const fileUrl = `file://${printHtml}?data=${month}-${year}`;
console.log(`[generate-pdf] Loading: ${fileUrl}`);

// ── 5. Main render function ───────────────────────────────────────────────────

async function generatePdf() {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        // Required for file:// URLs to load local scripts without CORS errors
        '--allow-file-access-from-files',
        '--disable-web-security',
        // Stability
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // Ensure accurate print rendering
        '--font-render-hinting=none',
      ],
    });

    const page = await browser.newPage();

    // Capture console output from the page (useful for debugging)
    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      if (type === 'error') {
        console.error(`  [page:error] ${text}`);
      } else if (type === 'warn') {
        console.warn(`  [page:warn]  ${text}`);
      } else {
        console.log(`  [page:log]   ${text}`);
      }
    });

    page.on('pageerror', err => {
      console.error(`  [page:pageerror] ${err.message}`);
    });

    // ── Generate QR code SVG and inject before page scripts run ────────────
    // evaluateOnNewDocument runs before any page JS, so window.SKY_QR_SVG is
    // available when buildCover() is called inside renderZine().
    const qrSvgString = await qrcode.toString(QR_URL, {
      type:   'svg',
      width:  80,
      margin: 0,
      color:  { dark: '#1a1a2a', light: '#ffffff00' }, // dark marks, transparent bg
    });
    await page.evaluateOnNewDocument((svg) => {
      window.SKY_QR_SVG = svg;
    }, qrSvgString);
    console.log(`[generate-pdf] QR code generated for: ${QR_URL}`);

    // Navigate to print.html
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // ── 6. Wait for Paged.js to finish rendering ────────────────────────────
    // Paged.js fires a 'after' event on its Previewer and also adds
    // .pagedjs_pages to the DOM when complete. We poll for both.

    console.log('[generate-pdf] Waiting for Paged.js to render pages…');

    await page.waitForFunction(
      () => {
        // Check 1: Paged.js has added its page wrapper to the DOM
        const pages = document.querySelector('.pagedjs_pages');
        if (!pages) return false;
        // Check 2: At least one rendered page exists
        const rendered = document.querySelectorAll('.pagedjs_page');
        return rendered.length > 0;
      },
      { timeout: 90000, polling: 500 }
    );

    // Small extra delay to let any final paint/layout settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Count pages for reporting
    const pageCount = await page.evaluate(() => {
      return document.querySelectorAll('.pagedjs_page').length;
    });

    console.log(`[generate-pdf] Paged.js rendered ${pageCount} page(s).`);

    // ── 7. Generate the PDF ─────────────────────────────────────────────────
    console.log(`[generate-pdf] Generating PDF…`);

    await page.pdf({
      path:            outputFile,
      format:          'A5',
      printBackground: true,   // Essential for dark cover background
      margin: {                // Paged.js handles margins via @page rules
        top:    '0',
        bottom: '0',
        left:   '0',
        right:  '0',
      },
      // Prefer CSS @page size declaration
      preferCSSPageSize: true,
    });

    // ── 8. Report results ───────────────────────────────────────────────────
    const stats    = fs.statSync(outputFile);
    const sizeKB   = (stats.size / 1024).toFixed(1);
    const sizeMB   = (stats.size / 1024 / 1024).toFixed(2);
    const sizeStr  = stats.size > 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`;

    console.log('');
    console.log('╔═══════════════════════════════════════════════════╗');
    console.log('║  Clear Skies PDF — Generation Complete            ║');
    console.log('╠═══════════════════════════════════════════════════╣');
    console.log(`║  File:   ${path.relative(projectRoot, outputFile).padEnd(42)}║`);
    console.log(`║  Pages:  ${String(pageCount).padEnd(42)}║`);
    console.log(`║  Size:   ${sizeStr.padEnd(42)}║`);
    console.log('╚═══════════════════════════════════════════════════╝');
    console.log('');

  } catch (err) {
    console.error('[generate-pdf] FAILED:', err.message);
    if (err.message.includes('waitForFunction')) {
      console.error('  Hint: Paged.js did not finish rendering within 90s.');
      console.error('  Check that vendor/paged.polyfill.js exists and is valid.');
      console.error('  Check console output above for page errors.');
    }
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

generatePdf();
