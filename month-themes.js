// ─────────────────────────────────────────────────────────────────────────────
// month-themes.js — Per-month visual identity (single source of truth).
//
// Every calendar month gets its own distinct accent colour and cover
// constellation, so a new edition automatically looks different without any
// hand-tuning. A data file MAY override either via SKY_DATA.seasonAccent /
// SKY_DATA.coverConstellation, but it never has to.
//
// • accent        → the --season accent colour used throughout the edition
//                   (online) and, lightened/darkened, the printed cover palette.
//                   Chosen to feel seasonal AND to be distinct from its neighbours.
// • constellation → key into constellations.js, drawn faint behind the cover
//                   title. Each is prominent in that month's evening sky.
//
// Both app.js and print.html read this; loaded before either runs.
// ─────────────────────────────────────────────────────────────────────────────

window.SKY_MONTH_THEMES = {
  january:   { accent: '#6aa6cf', constellation: 'orion'      }, // icy sky-blue — cold clear nights, Orion due south
  february:  { accent: '#7e84c8', constellation: 'gemini'     }, // periwinkle — late winter, Gemini high
  march:     { accent: '#cf8fb4', constellation: 'ursa_major' }, // blossom pink — early spring, the Plough climbs
  april:     { accent: '#c8955a', constellation: 'leo'        }, // warm amber-rose — Leo rides the meridian
  may:       { accent: '#8fba6a', constellation: 'virgo'      }, // fresh spring green — Virgo & galaxy season
  june:      { accent: '#5ab89a', constellation: 'scorpius'   }, // teal-green — Milky Way season, Scorpius low south
  july:      { accent: '#5277cc', constellation: 'cygnus'     }, // cobalt blue — deep high-summer night skies
  august:    { accent: '#9a72d2', constellation: 'perseus'    }, // amethyst violet — late-summer twilight & Perseids
  september: { accent: '#cf9b3e', constellation: 'cassiopeia' }, // harvest gold — early autumn, Cassiopeia rising
  october:   { accent: '#cc6f3a', constellation: 'pegasus'    }, // pumpkin orange — autumn, the Great Square
  november:  { accent: '#b1524e', constellation: 'andromeda'  }, // russet red — late autumn, Andromeda overhead
  december:  { accent: '#4f6fb0', constellation: 'taurus'     }, // midnight blue — the long nights, Taurus & the Pleiades
};
