# Clear Skies

A static, offline-capable PWA — a monthly night-sky guide for an amateur astronomer using a **114 mm f/7.9 Newtonian reflector** from Northern India (~32°N latitude).

Live at: **https://clearskies.starstucklab.com**

## What it is

Each month a new edition is published covering the best objects, planets, moon features, and events for that month. The app works fully offline after the first load.

- No build step, no bundler, no framework — pure vanilla JS + CSS
- Offline-capable via a Service Worker cache
- New edition = one new data file dropped on the server; the engine never changes
- Previous editions remain accessible via the `← / →` month navigation pills

## Editions

| Month | Data file |
|---|---|
| April 2026 | `data-april-2026.js` |
| May 2026 | `data-may-2026.js` |
| June 2026 | `data-june-2026.js` |

## For contributors / AI agents

See [`AGENTS.md`](AGENTS.md) for the full architecture, file map, global variable contract, and monthly publishing workflow.

See [`PROMPT_generate_monthly_edition.md`](PROMPT_generate_monthly_edition.md) for the AI prompt used to generate new monthly editions.

## Observer

**Anish Mangal** · Northern India, ~32°N · 114 mm f/7.9 Newtonian, eyepieces 25 mm (36×) and 9 mm (100×)
