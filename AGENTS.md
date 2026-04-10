# Clear Skies — AI Agent Context

> **For AI coding agents.** Read this before touching any file in this repo.
> Keep this document updated whenever architecture changes.

---

## 1. What This Project Is

**Clear Skies** is a static, offline-capable Progressive Web App (PWA) — a monthly night-sky guide for an amateur astronomer using a **114 mm f/7.9 Newtonian reflector** from Northern India (~32°N latitude).

- No build step. No bundler. No framework. No Node. Pure vanilla JS + CSS.
- Deployed as a set of static files served from any web server (or GitHub Pages).
- Works fully offline after first load via a Service Worker cache.
- A new "edition" is published each month by dropping one new data file on the server. The engine never changes.

**Observer:** Anish Mangal · Location: Northern India, ~32°N · Telescope: 114mm f/7.9 Newtonian, eyepieces 25mm (36×) and 9mm (100×).

---

## 2. File Map

```
clear-skies/
├── index.html                  # HTML shell — barely changes month to month
├── styles.css                  # Global stylesheet — never changes month to month
├── app.js                      # PWA engine — never changes month to month
├── loader.js                   # Data-file loader — never changes month to month
├── log.js                      # Observer's log storage engine — never changes
├── log-ui.js                   # Observer's log overlay UI — never changes
├── objects-db.js               # Autocomplete catalogue — append-only
├── sketches.js                 # SVG sketch registry — append-only
├── constellations.js           # Cover constellation SVG registry — append-only
├── quotes.js                   # Quote registry — append-only
├── sw.js                       # Service Worker — 2 lines change per month
├── manifest.json               # PWA manifest — never changes
├── data-april-2026.js          # Monthly data file (one per month)
├── data-may-2026.js            # Next month's data file (preview-ready)
├── icon-192.png                # PWA icons
├── icon-512.png
├── PROMPT_generate_monthly_edition.md  # AI prompt for producing new editions
└── AGENTS.md                   # This file
```

### Change frequency summary

| File | Changes? |
|---|---|
| `data-[month]-[year].js` | **Every month** — the only content file |
| `sw.js` | **2 lines per month** (cache name + data filename) |
| `index.html` | **1 line per month** (data script tag) |
| `objects-db.js` | **Append-only** — add objects, never remove or rename |
| `sketches.js` | **Append-only** — add SVG sketches, never modify existing |
| `constellations.js` | **Append-only** — add constellation paths, never modify |
| `quotes.js` | **Append-only** — add quotes, never modify |
| Everything else | **Never changes** |

---

## 3. Script Load Order

Defined in `index.html` — **order is critical**:

```
loader.js         → dynamically injects the data-[month]-[year].js script
sketches.js       → window.SKY_SKETCHES  (SVG registry, set synchronously)
constellations.js → window.SKY_CONSTELLATIONS (set synchronously)
quotes.js         → window.SKY_QUOTE  (set synchronously)
objects-db.js     → window.SKY_OBJECTS_DB  (set synchronously)
log.js            → window.SkyLog  (storage API, set synchronously)
log-ui.js         → injects observer log button + overlay (IIFE, runs on DOMContentLoaded)
app.js            → window.SKY_INIT  (set synchronously but called by loader.js asynchronously)
```

`loader.js` dynamically injects the data file, then polls for `window.SKY_INIT` and calls it once available. This avoids race conditions between the async data load and `app.js` parsing.

---

## 4. Global Variables Contract

| Variable | Set by | Consumed by | Shape |
|---|---|---|---|
| `window.SKY_DATA` | `data-[month]-[year].js` | `app.js`, `log.js`, `log-ui.js` | See §5 |
| `window.SKY_INIT` | `app.js` | `loader.js` | `function()` |
| `window.SKY_NEXT` | `loader.js` | `app.js` | `{src, month, year}` or `undefined` |
| `window.SKY_RENDER_NEXT_TEASER` | `app.js` | `loader.js` | `function()` |
| `window.SKY_SKETCHES` | `sketches.js` | `app.js` | `{ [svgId]: svgInnerHTML }` |
| `window.SKY_CONSTELLATIONS` | `constellations.js` | `app.js` | `{ [key]: svgPathsHTML }` |
| `window.SKY_QUOTE` | `quotes.js` | `app.js` | `{ q: string, a: string }` |
| `window.SKY_OBJECTS_DB` | `objects-db.js` | `log-ui.js` | `Array<{id, name, cat, type}>` |
| `window.SkyLog` | `log.js` | `log-ui.js` | API object (see §8) |
| `window.SKY_LOADED_FILE` | `loader.js` | (debugging) | `string` |
| `window.SKY_LOADED_MONTH` | `loader.js` | (debugging) | `{monthIndex, year}` |

---

## 5. `SKY_DATA` Schema (Complete)

Every field below must be present in every data file. See `data-april-2026.js` for a complete working example.

```js
window.SKY_DATA = {

  // Identity
  month:       'April',         // Full month name string
  year:        2026,            // 4-digit number
  hemisphere:  'northern',      // always 'northern' for this observer
  title:       'April Skies',   // not currently rendered directly
  titleItalic: 'Skies',         // not currently rendered directly
  subtitle:    'Northern Hemisphere · Interactive Guide',

  // Visual personality — all optional (app.js has fallbacks)
  season:             'spring',     // 'winter'|'spring'|'summer'|'autumn'
  seasonAccent:       '#c8955a',    // CSS hex — used for cover year number + nav active
  coverConstellation: 'leo',        // key in window.SKY_CONSTELLATIONS
  starWarmBias:       0.52,         // 0.0 = cool blue-white, 1.0 = warm amber (default 0.35)

  // Telescope — copy verbatim every month, never change values
  scope: {
    aperture: 114, fRatio: 7.9, focalLength: 900,
    eyepieces: [
      { focal: 25, mag: 36,  trueFov: 1.44, afov: 52 },
      { focal:  9, mag: 100, trueFov: 0.52, afov: 52 },
    ],
    limitingMag: 12, maxUsefulMag: 230, lightGain: 265, resolution: 1,
    notes: 'Cannot fully resolve globular clusters — only granular halo texture at the edges.',
  },

  // Credits — copy verbatim every month
  credits: {
    author:       'Anish Mangal',
    contributors: ['Ishan Chrungoo', 'Sohail Lalani'],
  },

  // Moon — exactly 30 or 31 emoji matching the month's day count
  moonPhases:  [ /* 🌑🌒🌓🌔🌕🌖🌗🌘 — one per calendar day */ ],
  newMoonDay:  17,       // 1-indexed day of new moon (gets gold glow in UI)
  moonEvents: {
    full:     'Apr 2',   // string label only
    lastQtr:  'Apr 10',
    newMoon:  'Apr 17',
    firstQtr: 'Apr 24',
  },

  // Exactly 4 lunar features
  moonFeatures: [
    { name: '...', desc: '...', best: 'Best: [date range] · [eyepiece]' },
    // × 4 total
  ],

  // Planner — 6 to 9 rows
  // type: 'normal' | 'best' (teal highlight) | 'warn' (orange)
  planner: [
    { dates: '...', targets: '...', time: '...', note: '...', type: 'normal' },
  ],
  plannerFooter: '...',         // one-line constellation orientation note
  darkSkyWindow: 'Apr 12–22',   // date range of best dark-sky nights

  // Planets — only include those genuinely worth observing
  // ease: 1–5 (rendered as filled star icons)
  // rows: exactly 6 [label, value] pairs
  planets: [
    {
      name: 'Saturn', ease: 4,
      rows: [
        ['Constellation', 'Aquarius'],
        ['Visible',        'Pre-dawn, SE'],
        ['Sets/rises',     'Rises ~03:30'],
        ['Brightness',     'mag +1.1'],
        ['At 36× (25mm)',  '...'],
        ['At 100× (9mm)',  '...'],
      ],
      note: '...',
    },
  ],

  // Events — conjunctions, oppositions, meteor showers, etc.
  // type: 'info' (teal) | 'warn' (orange)
  events: [
    { type: 'info', title: '...', body: '...' },
  ],

  // Objects — 6 to 9, ordered west to east (natural observing sequence)
  objects: [
    {
      id:          'slug',       // used as slide id and DOM id — no spaces
      navLabel:    'M42',        // max ~8 chars — shown in sub-nav
      name:        'M42 — Orion Nebula',
      type:        'Emission nebula · Orion · mag 4.0 · 1,344 ly',
      ease:        5,            // 1 = very hard, 5 = trivial
      warning:     null,         // or '⚠ [actionable date constraint]'
      meta: [
        ['Best dates',  '...'],
        ['Best time',   '...'],
        ['Direction',   '...'],
        ['Start with',  '25mm (36×)'],
        ['Then try',    '9mm (100×)'],
        ['[6th label]', '...'],
      ],
      description: '...',        // low-mag first → high-mag → limits → tip
      finder:      '...',        // star-hop from naked-eye star
      twoSketch:   false,        // true only for pairs like M46/M47
      sketches: [
        { svgId: 'sk_m42', label: '25mm · 36×\nFan-shaped glow' },
      ],
    },
  ],

  // Glossary — 8 to 12 terms, tailored to this month's objects
  glossary: [
    ['Term', 'Definition'],
  ],

  // One sentence about this scope's limits, with month-specific example
  scopeLimitNote: 'Your 114mm f/7.9 reflector\'s limits: ...',

};
```

---

## 6. `app.js` — Engine Architecture

`app.js` exports a single function `window.SKY_INIT` that is called by `loader.js` after data is available. It is a **single large IIFE-style function** containing everything:

### Slides system
- `SLIDE_DEFS` — ordered array of all slide definitions (cover, planner, moon, planets, objects group + individual objects, conditions, glossary, credits)
- `RENDERABLE` — `SLIDE_DEFS` filtered to actual rendered slides (excludes the group header)
- Slides are rendered as `<div class="slide">` inside `#slide-track`
- Navigation uses CSS `translateX` — no DOM re-rendering on slide change

### Content builders
Each returns an HTML string:
- `buildCover()` — title, scope pills, constellation watermark, quote
- `buildPlanner()` — responsive table (desktop) + card list (mobile ≤600px)
- `buildMoon()` — 30/31-day phase strip grid + 2-column feature cards
- `buildPlanets()` — 2-column planet cards + event bonus cards
- `buildObject(o)` — single or two-sketch object card
- `buildConditions()` — static text with month-specific window from `SKY_DATA`
- `buildGlossary()` — 2-column grid + scope limit note + quote
- `buildCredits()` — centred credits layout

### Navigation
- Keyboard: `ArrowLeft`/`ArrowRight`/`Space` → `goTo()`. **Guard**: skipped if `document.activeElement` is `INPUT`, `TEXTAREA`, or `SELECT`.
- Touch: swipe gesture detection on `#slide-track` (horizontal vs vertical discrimination)
- Desktop: `#hint-prev` / `#hint-next` arrow buttons (hidden on mobile ≤600px)
- Top nav + sub-nav (objects only) click handlers

### Starfield
Seeded deterministic PRNG (`mulberry32`) — same star pattern every load. 180 stars, animated opacity. `starWarmBias` from `SKY_DATA` controls warm/cool colour ratio.

### Other features
- **Red-shift mode**: toggles `body.red-sky` class, remaps all CSS custom properties via the cascade
- **Service Worker**: registers `sw.js`, checks for updates on every load, shows update toast
- **Next-month teaser**: probes next month's data file via HEAD request; shows pill if it exists
- **Preview mode**: `?preview=may-2026` URL param loads that month's data file instead
- **Easter egg**: appears only on Easter Sunday, computed via Gregorian algorithm

---

## 7. CSS Architecture (`styles.css` + `log-ui.js`)

### Design tokens (`:root`)
```css
--bg, --card, --border, --border2      /* backgrounds and borders */
--text, --muted, --dim                 /* text hierarchy */
--gold, --gold2                        /* accent: nav active, cover year */
--teal                                 /* secondary accent: objects, log */
--purple, --warn                       /* conditions, warnings */
--sans                                 /* font stack */
--nav-h: 46px, --sub-h: 34px          /* layout measurements */
--season                               /* injected by app.js from SKY_DATA.seasonAccent */
```

All tokens are overridden wholesale under `body.red-sky` for red-shift mode.

### Layout pattern
- `#slide-track`: fixed-position horizontal flex strip, `width: N×100vw`, moved via `transform: translateX(-idx×100vw)`
- Each `.slide`: `flex: 0 0 100vw`, vertically scrollable
- Fixed-position overlapping UI layers: topnav (z:300), subnav (z:299), arrows (z:200), dots (z:200), bubbles (z:500), log overlay (z:800), log modal (z:1000)

### Responsive breakpoints
- `≤520px`: single-column grids (planets, moon, conditions, glossary)
- `≤600px`: hide desktop arrow buttons; mobile planner cards instead of table
- `≥900px`: scale-up block in both `styles.css` and `log-ui.js` — bumps font sizes ~20–30%

### Log UI styles
`log-ui.js` injects its own `<style>` block into `<head>` at runtime. It is completely self-contained and does not depend on `styles.css` classes (except CSS custom properties / tokens from `:root`). Never add log-related classes to `styles.css`.

---

## 8. Observer's Log — Architecture

### Storage (`log.js`)
- `window.SkyLog` API backed by `localStorage` key `'sky_log'`
- Entries are JSON arrays: `[{ id, month, year, date, timeStart, timeEnd, seeing, transparency, objects[], notes, createdAt }]`
- `month`/`year` are stamped from `window.SKY_DATA` at creation time for cross-month filtering
- **API**: `SkyLog.all()`, `SkyLog.forMonth(month, year)`, `SkyLog.getById(id)`, `SkyLog.count()`, `SkyLog.countForMonth()`, `SkyLog.create(fields)`, `SkyLog.update(id, fields)`, `SkyLog.delete(id)`, `SkyLog.exportJSON()`, `SkyLog.exportCSV()`
- Data never leaves the device — no network calls in `log.js`

### UI (`log-ui.js`)
- Floating `📓` button (fixed, bottom-right) → full-screen overlay → modal form
- Self-contained IIFE: injects its own CSS, builds DOM, binds all events
- **Two views**: "This month" (filtered by `SKY_DATA.month/year`) and "All sessions"
- **Form fields**: date, time start/end, seeing 1–5 (tap rating), transparency 1–5, objects (autocomplete from `SKY_OBJECTS_DB`), notes (textarea)
- **Autocomplete**: filters `window.SKY_OBJECTS_DB` by name/id/type; groups results by `cat`; supports keyboard navigation (ArrowUp/Down, Enter, Escape)
- **Export**: JSON (pretty-printed with metadata) and CSV download via `URL.createObjectURL`

### Objects DB (`objects-db.js`)
`window.SKY_OBJECTS_DB` is a flat array of objects each with `{ id, name, cat, type }`:
- Categories: `'Solar System'`, `'Messier'`, `'NGC'`, `'Bright Star'`, `'Double Star'`
- Full Messier catalogue (M1–M110), 37 NGCs, 22 bright named stars, 13 double/multiple stars, 9 solar system objects
- **To add objects**: append entries to the relevant section. IDs must be unique. Never change existing `id` values (they may be stored in users' log entries).

---

## 9. Registries — Append-Only Files

### `sketches.js`
```js
window.SKY_SKETCHES = {
  sk_m42: `<defs>...</defs>...`,   // SVG inner content only, no <svg> wrapper
  sk_m51: `...`,
  // ...
};
```
- Key format: `sk_[object_id]` (e.g. `sk_m42`, `sk_algieba`)
- Value: single-line SVG inner content for `viewBox="0 0 140 140"` canvas
- The `app.js` `sketch()` helper wraps this in `<svg width="..." height="..." viewBox="0 0 140 140">...</svg>`
- Missing svgId logs a console warning: `[app.js] Missing sketch: sk_xxx — add it to sketches.js`

**Currently registered:** `sk_m42, sk_m46, sk_m47, sk_m44, sk_m3, sk_algieba, sk_leo, sk_m51`

### `constellations.js`
```js
window.SKY_CONSTELLATIONS = {
  leo: `<path .../>`,   // SVG path content for viewBox="0 0 400 300"
  // ...
};
```
- Used as a faint watermark on the cover slide (`cover-constellation` CSS class, opacity ~4.5%)
- **Currently registered:** `leo, virgo, scorpius, cygnus, cassiopeia, perseus, orion, ursa_major`
- `SKY_DATA.coverConstellation` references these keys

### `quotes.js`
```js
window.SKY_QUOTE = { q: 'Quote text', a: 'Attribution' };
```
- Single quote per month — displayed on cover, glossary, and credits slides
- Updated each month in the data generation workflow

---

## 10. Service Worker (`sw.js`)

- Cache-first strategy: all assets cached on install, served from cache, network only on miss
- **Two lines change per month**:
  1. `const CACHE = 'april-skies-v1';` → new slug-v1 (always reset to v1 for a new month)
  2. The data filename in the `ASSETS` array: `'./data-april-2026.js'` → new file
- Activation: old caches deleted, `clients.claim()` for immediate takeover
- Update flow: `app.js` calls `reg.update()` on every load; new SW triggers update toast; clicking toast posts `SKIP_WAITING` to activate immediately

---

## 11. Monthly Workflow (Producing a New Edition)

1. **Generate content** using `PROMPT_generate_monthly_edition.md` with an AI — produces:
   - `OUTPUT 1`: new `data-[month]-[year].js` (full file)
   - `OUTPUT 2`: updated `sketches.js` (existing + new SVGs appended)
   - `PATCH A`: updated `index.html` script tag (1 line)
   - `PATCH B`: updated `sw.js` (2 lines)

2. **Verify** moon phases against timeanddate.com or NASA (AI lunar calendars are unreliable).

3. **Deploy** all changed files. The new edition is live immediately. Previous month's file remains on the server — the `?preview=` mechanism and loader fallback use it.

4. **Check console** for any `[app.js] Missing sketch:` warnings → add SVGs to `sketches.js` if needed.

---

## 12. Key Patterns & Conventions

### Module isolation
Every JS file except `data-*.js` is an IIFE (`(function(){ 'use strict'; ... })()`). They communicate only via `window.*` globals — no imports, no exports.

### No runtime dependencies
Zero npm packages. Zero CDN links. Everything is vanilla JS and CSS. The only external resource is the browser's `fetch` API (for SW probe in `loader.js`).

### HTML is a shell
`index.html` contains almost no content — the app is entirely JS-rendered. The slide track, navigation, and all overlays are built by `app.js` and `log-ui.js` at runtime.

### CSS custom properties as the theming system
All colours are CSS variables. Red-shift mode overrides them all at `body.red-sky`. Month accent is injected as `--season` by `app.js` from `SKY_DATA.seasonAccent`. Never hardcode colours in JS-generated HTML if a CSS variable exists.

### Deterministic starfield
The `mulberry32` PRNG is seeded with a fixed constant (`0xdeadbeef`). The starfield is identical on every load — no randomness at init time.

---

## 13. Known Gotchas

| Gotcha | Details |
|---|---|
| **Space/arrow keys in forms** | `app.js` global `keydown` handler intercepts Space and arrow keys for slide navigation. Guard added: skipped if `document.activeElement` is `INPUT`, `TEXTAREA`, or `SELECT`. |
| **Log UI CSS is injected** | `log-ui.js` injects a `<style>` into `<head>` at runtime. Styles are not in `styles.css`. Don't look for `.f-input` or `.log-entry-card` in `styles.css`. |
| **`SKY_INIT` polling** | `loader.js` polls for `window.SKY_INIT` every 20ms (up to 5s). If `app.js` fails to load, this silently times out. |
| **Object IDs in log storage** | `objects-db.js` `id` values may be persisted in `localStorage` log entries. **Never rename or remove an existing object ID** — it will orphan stored entries. |
| **`svgId` in data files** | SVG sketches must exist in `sketches.js` before the data file references them. A missing `svgId` renders an empty box and logs a warning — it does not throw. |
| **`twoSketch: true`** | Changes the object card layout to a `two-sketch-row` grid. Both `sketches[]` entries are rendered side by side. Use only for naturally paired objects (e.g. M46 + M47). |
| **Preview mode** | `?preview=may-2026` bypasses the normal month detection entirely. Useful for QA before a new month begins. |
| **SW cache reset** | The SW cache name must be reset to `v1` each month (`may-skies-v1`, not `v2`). This ensures all users download fresh assets when the month changes. |
| **`moonPhases[]` length** | Must exactly match the number of days in the month (30 or 31). Off-by-one causes the phase strip to overflow or clip. |
| **`constellations.js` keys** | `coverConstellation` in `SKY_DATA` must match a key in `window.SKY_CONSTELLATIONS`. Missing key = no watermark (silent, not an error). |
| **`plannerFooter`** | Optional. If falsy, the paragraph is not rendered. Safe to omit. |
| **Font sizes in log UI** | Base sizes are set in the `log-ui.js` CSS block. A `@media (min-width: 900px)` block scales them up for desktop. Both must be updated together if adjusting typography. |

---

## 14. Adding a New Constellation Watermark

1. Open `constellations.js`
2. Add a new key to `window.SKY_CONSTELLATIONS`:
   ```js
   scorpius: `<g stroke="rgba(255,255,255,0.045)" ...>...</g>`,
   ```
3. The SVG content renders into `viewBox="0 0 400 300"`. Use `<line>`, `<circle>`, `<g>` elements. No `<svg>` wrapper.
4. Reference the key in the data file: `coverConstellation: 'scorpius'`

---

## 15. Adding Objects to the Log Autocomplete

Edit `objects-db.js`. Append to the relevant section:

```js
{ id: 'ngc_new', name: 'NGC XXXX — Nickname', cat: 'NGC', type: 'Type · Constellation' },
```

**Rules:**
- `id`: lowercase, no spaces, unique across the entire array. Use `_` as separator.
- `name`: used for display and stored in log entries. Never change after first deploy.
- `cat`: one of `'Solar System'`, `'Messier'`, `'NGC'`, `'Bright Star'`, `'Double Star'` (or a new category string — the UI will auto-group it).
- `type`: informational string shown in the dropdown. No length limit but keep it concise.

---

*Last updated: April 2026*
