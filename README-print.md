# Clear Skies — Print Pipeline

Generate a print-ready A5 zine PDF from the Clear Skies PWA data files.

---

## What it produces

A **14-page A5 portrait PDF** (148 × 210 mm) — suitable for home printing and saddle-stitch binding:

| Page | Content |
|------|---------|
| 1 | Cover — light season-tinted background, month title, constellation watermark, QR code, quote |
| 2 | Sky Planner — moon quarters + full observing schedule table |
| 3 | The Moon — 30-day phase calendar + 4 feature cards |
| 4 | Planets & Events — planet data cards + event/alert cards |
| 5–11 | Objects — one page per deep-sky object with inverted sketch |
| 12 | Observing Conditions & pre-session checklist |
| 13 | Glossary, scope limit note, credits |
| 14 | My Notes — ruled blank page for field writing |

> April 2026 has 7 objects → 4 fixed pages + 7 object pages + 2 end pages + 1 notes = **14 pages** (saddle-stitch friendly: multiple of 4). ✓

---

## Prerequisites

- **Node.js 18+** (tested on Node 20)
- Internet connection for first install (Puppeteer downloads Chromium)

---

## First-time setup

Run this once from the project root:

```bash
cd scripts
npm install
npm run copy-pagedjs
```

This does three things:
1. Installs **Puppeteer** (downloads a local Chromium ~200 MB)
2. Installs **Paged.js** (`pagedjs` npm package)
3. Copies `node_modules/pagedjs/dist/paged.polyfill.js` → `vendor/paged.polyfill.js`

The `vendor/paged.polyfill.js` file is referenced by `print.html` via a relative path. It must be present before running the PDF generator. The `vendor/` directory is committed to the repo so CI doesn't need to run `copy-pagedjs` — only local first-time setup does.

---

## Generating the PDF

### From the `scripts/` directory:

```bash
# April 2026 (explicit)
node generate-pdf.js --month april --year 2026

# May 2026
node generate-pdf.js --month may --year 2026

# Current month/year (auto-detected)
node generate-pdf.js
```

### From the project root:

```bash
node scripts/generate-pdf.js --month april --year 2026
```

### Using npm scripts:

```bash
cd scripts
npm run pdf:april     # april 2026
npm run pdf:may       # may 2026
npm run pdf           # current month
```

---

## Output

PDFs are saved to `output/` in the project root:

```
output/
└── clear-skies-april-2026.pdf
```

The output directory is created automatically if it doesn't exist.

---

## File map

```
clear-skies/
├── print.html              ← Standalone zine renderer (Paged.js + renderZine())
├── print.css               ← A5 print styles, dark-to-light colour inversion
├── vendor/
│   └── paged.polyfill.js   ← Paged.js bundle (local copy for file:// compat)
├── output/                 ← Generated PDFs (gitignored or committed, your choice)
├── scripts/
│   ├── generate-pdf.js     ← Puppeteer render script
│   └── package.json        ← puppeteer + pagedjs dependencies
└── .github/workflows/
    └── generate-pdf.yml    ← CI: auto-generate PDF on data file push
```

---

## How it works

### `print.html`

- Loads the same JS registries as the PWA (`sketches.js`, `constellations.js`, `quotes.js`, `objects-db.js`) but **not** `app.js`, `loader.js`, `log.js`, or `log-ui.js`
- Reads `?data=month-year` from the URL query string and injects the correct `data-*.js` file via `document.write()`
- Calls `renderZine()` on `DOMContentLoaded` which builds 14 `<div class="page">` elements from `window.SKY_DATA`
- Paged.js intercepts the `.page` divs and lays them out as paginated A5 pages

### SVG sketch inversion

The sketches in `sketches.js` are designed for dark screens. `invertSketchForPrint()` in `print.html` transforms them for light paper:

- Dark circle backgrounds → white (`#0a0a14` → `#ffffff`)
- White star dots → near-black (`#fff` → `#1a1a2a`)
- Coloured nebula fills → greyscale equivalents
- Adds a visible grey border circle (replaces the invisible white-on-white border)

### `scripts/generate-pdf.js`

1. Validates that `data-[month]-[year].js` and `vendor/paged.polyfill.js` exist
2. Launches Puppeteer with `--allow-file-access-from-files` (required for `file://` URL loading of local scripts)
3. Navigates to `file:///path/to/print.html?data=april-2026`
4. Polls for `.pagedjs_pages` in the DOM (Paged.js signals completion by adding this element)
5. Calls `page.pdf()` with `format: 'A5'`, `printBackground: true`, zero margins (Paged.js handles margins via `@page`)
6. Reports file size and page count

---

## Adding a new month

1. Drop `data-[month]-[year].js` in the project root
2. Run: `node scripts/generate-pdf.js --month [month] --year [year]`
3. Check `output/clear-skies-[month]-[year].pdf`

The CI workflow runs automatically when you push the new data file to `main`.

---

## GitHub Actions CI

The workflow at `.github/workflows/generate-pdf.yml` triggers on any push to `main` that changes a `data-*.js` file.

It:
1. Checks out the repo
2. Installs Node 20 + dependencies
3. Copies Paged.js to `vendor/`
4. Detects which `data-*.js` changed and extracts month/year
5. Runs `node scripts/generate-pdf.js --month [month] --year [year]`
6. Uploads the PDF as a downloadable GitHub Actions artifact (retained 90 days)

### Optional: auto-commit PDF to repo

Uncomment the last step in the workflow (`Commit PDF to repo`) and enable **"Read and write permissions"** in repo Settings → Actions → General → Workflow permissions.

---

## Setting up GitHub Actions CI — step by step

This is a one-time setup. After it is done, every new data file you push automatically generates a PDF you can download from GitHub.

### Step 1 — Check the workflow file is in place

The file `.github/workflows/generate-pdf.yml` must exist in your repo. Confirm with:

```bash
ls .github/workflows/generate-pdf.yml
```

If you just created the repo or this is a fresh clone, it should already be there. If not, commit it.

### Step 2 — Enable Actions in your GitHub repository

1. Go to your repo on GitHub: `https://github.com/m-anish/clear-skies`
2. Click **Settings** → **Actions** → **General**
3. Under **"Actions permissions"**, select **"Allow all actions and reusable workflows"**
4. Click **Save**

### Step 3 — Verify the first run triggers correctly

Push any `data-*.js` file to `main`. For example:

```bash
git add data-may-2026.js
git commit -m "Add May 2026 data"
git push origin main
```

Go to **Actions** tab in GitHub → you should see a workflow run called **"Generate Clear Skies PDF"** start automatically.

### Step 4 — Download the PDF artifact

1. Click on the completed workflow run
2. Scroll to the bottom — you will see an **Artifacts** section
3. Download **`clear-skies-may-2026-pdf`** — it is a ZIP containing the PDF

Artifacts are retained for **90 days** by default. After 90 days they are auto-deleted by GitHub.

### Step 5 (optional) — Auto-commit PDFs back to the repo

If you want the PDF committed automatically every time a new edition is published:

1. Go to **Settings** → **Actions** → **General** → **Workflow permissions**
2. Select **"Read and write permissions"** → Save
3. Open `.github/workflows/generate-pdf.yml` and uncomment the last step block (the one labelled `# Commit PDF to repo`)
4. Commit and push this change

From then on, each run will commit the PDF to `output/clear-skies-[month]-[year].pdf` on `main`.

### What triggers the workflow?

The workflow is triggered by:

```yaml
on:
  push:
    branches: [main]
    paths: ['data-*.js']
```

**Only pushes to `main` that include a `data-*.js` file change** trigger it. Pushes that only change CSS, JS engine files, or other content do not trigger a PDF build. This is intentional — you wouldn't want a PDF regenerated just because you fixed a typo in `app.js`.

### Troubleshooting CI failures

| Symptom | Cause | Fix |
|---|---|---|
| Workflow never starts | File doesn't match `data-*.js` path filter | Rename the data file correctly (e.g. `data-may-2026.js`) |
| `npm install` fails | Network issue or Puppeteer version incompatible with CI runner | Pin `puppeteer` to `"22.x"` in `scripts/package.json` |
| `ERROR: Data file not found` | Month/year parse from filename failed | Check bash extraction in workflow: `data-may-2026.js` → `may` `2026` |
| PDF is 1 page | Paged.js race condition (old code) | Ensure `print.html` loads Paged.js **after** `renderZine()` |
| Artifacts tab is empty | Workflow failed before upload step | Check the step logs for the error |

---

## Troubleshooting

### `vendor/paged.polyfill.js` not found

```bash
cd scripts && npm install && npm run copy-pagedjs
```

### Puppeteer CORS errors with `file://` URLs

The script passes `--allow-file-access-from-files` and `--disable-web-security` to Chromium. These flags are required because `file://` pages cannot normally load other `file://` scripts (browser CORS policy). This is safe in a headless, isolated context.

### Paged.js never finishes (90s timeout)

- Check the console output for `[page:error]` lines above the timeout message
- Verify `window.SKY_DATA` loaded correctly: look for `[print.html] renderZine() complete — N pages built.`
- Verify `vendor/paged.polyfill.js` is a valid JS file (not empty or HTML 404 page)

### PDF is blank or pages are white

- Ensure `printBackground: true` is set in `page.pdf()` — required for coloured backgrounds
- Confirm `print.css` is loading (check for `[page:error]` about missing CSS)

### Sketches appear as empty circles

The `svgId` referenced in the data file may not exist in `sketches.js`. The script logs:
```
[page:warn] [print.html] Missing sketch: sk_xxx — add to sketches.js
```

---

## Local preview without PDF generation

Open `print.html` directly in Chrome/Firefox (not Safari — Paged.js needs a modern browser):

```
file:///path/to/clear-skies/print.html?data=april-2026
```

Paged.js renders a paginated preview in the browser. Use **File → Print → Save as PDF** for a quick manual export (though the Puppeteer script is more reliable for consistent output).

---

*Print pipeline added April 2026.*
