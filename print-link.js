// ─────────────────────────────────────────────────────────────────────────────
// print-link.js — Clear Skies PWA print edition download pill
//
// Self-contained IIFE (same pattern as log-ui.js). Injects a floating
// "📄 Print edition" pill button when a PDF exists at:
//   ./output/clear-skies-[month]-[year].pdf
//
// The pill appears on every slide, positioned bottom-left (opposite corner
// from the 📓 observer log button). It is hidden until the HEAD probe
// confirms the PDF is present on the server.
//
// Does nothing in offline mode — the HEAD fetch simply fails and no pill
// is shown. The PDF itself is not cached by the service worker (it can be
// large), so the download always comes from the network.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // ── Wait for SKY_DATA to be populated by loader.js ──────────────────────
  // loader.js calls window.SKY_INIT after data is ready, so by the time
  // DOMContentLoaded fires and log-ui.js runs, SKY_DATA is set.
  // We mirror that pattern: poll until SKY_DATA is available.

  function waitForData(cb, elapsed) {
    elapsed = elapsed || 0;
    if (window.SKY_DATA) { cb(window.SKY_DATA); return; }
    if (elapsed > 6000)  { return; }            // give up after 6 s
    setTimeout(function () { waitForData(cb, elapsed + 50); }, 50);
  }

  // ── Inject CSS ────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '.pdf-pill {',
    '  position: fixed;',
    '  bottom: 14px;',
    '  left: 14px;',
    '  z-index: 500;',
    '  display: flex;',
    '  align-items: center;',
    '  gap: 6px;',
    '  background: var(--card, #13131f);',
    '  border: 1px solid var(--border, rgba(255,255,255,0.1));',
    '  border-radius: 20px;',
    '  padding: 6px 13px 6px 10px;',
    '  font-family: var(--sans, sans-serif);',
    '  font-size: 12px;',
    '  color: var(--teal, #40c0a0);',
    '  text-decoration: none;',
    '  cursor: pointer;',
    '  transition: opacity 0.2s, transform 0.2s;',
    '  opacity: 0;',
    '  pointer-events: none;',
    '  transform: translateY(6px);',
    '}',
    '.pdf-pill.visible {',
    '  opacity: 1;',
    '  pointer-events: auto;',
    '  transform: translateY(0);',
    '}',
    '.pdf-pill:hover {',
    '  background: var(--teal, #40c0a0);',
    '  color: #000;',
    '  border-color: transparent;',
    '}',
    '.pdf-pill svg {',
    '  flex-shrink: 0;',
    '  width: 14px;',
    '  height: 14px;',
    '  fill: currentColor;',
    '}',
    '/* Red-sky mode: keep the pill readable */',
    'body.red-sky .pdf-pill {',
    '  background: #1a0000;',
    '  border-color: rgba(255,60,0,0.25);',
    '  color: #c03000;',
    '}',
    'body.red-sky .pdf-pill:hover {',
    '  background: #c03000;',
    '  color: #000;',
    '}',
    '/* Desktop: bump font size to match larger UI scale */',
    '@media (min-width: 900px) {',
    '  .pdf-pill { font-size: 13px; bottom: 18px; left: 18px; }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // ── Build pill DOM ────────────────────────────────────────────────────────
  var pill = document.createElement('a');
  pill.className = 'pdf-pill';
  pill.title     = 'Download print edition PDF';
  // Download icon (simple page-with-arrow SVG)
  pill.innerHTML =
    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6z" opacity="0.25"/>' +
      '<path d="M9 1v5h5"/>' +
      '<path d="M8 8v5M5.5 10.5 8 13l2.5-2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>' +
    'Print edition';

  // Force SVG paths to use fill=none/stroke as needed
  var svgPaths = pill.querySelectorAll('path');
  svgPaths[0].setAttribute('fill', 'currentColor');
  svgPaths[0].setAttribute('stroke', 'none');
  svgPaths[1].setAttribute('fill', 'none');
  svgPaths[1].setAttribute('stroke', 'currentColor');
  svgPaths[1].setAttribute('stroke-width', '1.5');
  svgPaths[2].setAttribute('fill', 'none');
  svgPaths[2].setAttribute('stroke', 'currentColor');
  svgPaths[2].setAttribute('stroke-width', '1.5');

  document.body.appendChild(pill);

  // ── Probe + show ─────────────────────────────────────────────────────────
  waitForData(function (d) {
    var month   = (d.month || '').toLowerCase();
    var year    = d.year  || '';
    var pdfPath = './output/clear-skies-' + month + '-' + year + '.pdf';

    pill.href     = pdfPath;
    pill.download = 'clear-skies-' + month + '-' + year + '.pdf';

    // HEAD probe — if the file exists on the server, show the pill
    fetch(pdfPath, { method: 'HEAD' })
      .then(function (res) {
        if (res.ok) {
          pill.classList.add('visible');
          console.log('[print-link.js] PDF available:', pdfPath);
        }
      })
      .catch(function () {
        // Network error or file not found — pill stays hidden
      });
  });

})();
