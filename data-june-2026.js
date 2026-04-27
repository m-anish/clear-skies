// ─────────────────────────────────────────────────────────────────────────────
// data-june-2026.js
// Month-specific astronomical data for the Clear Skies PWA engine.
// The engine (app.js) never changes. Drop this file to update the app.
// ─────────────────────────────────────────────────────────────────────────────

window.SKY_DATA = {

  // ── IDENTITY ───────────────────────────────────────────────────────────────
  month:       'June',
  year:        2026,
  hemisphere:  'northern',
  title:       'June Skies',
  titleItalic: 'Skies',
  subtitle:    'Northern Hemisphere · Interactive Guide',

  // ── MONTH CHARACTER ────────────────────────────────────────────────────────
  season:             'summer',
  seasonAccent:       '#5ab89a',   // deep teal-green — Milky Way season
  coverConstellation: 'scorpius',  // Scorpius high in the south
  starWarmBias:       0.55,        // full summer warmth

  // ── TELESCOPE ──────────────────────────────────────────────────────────────
  scope: {
    aperture:     114,
    fRatio:       7.9,
    focalLength:  900,
    eyepieces: [
      { focal: 25, mag: 36,  trueFov: 1.44, afov: 52 },
      { focal:  9, mag: 100, trueFov: 0.52, afov: 52 },
    ],
    limitingMag:  12,
    maxUsefulMag: 230,
    lightGain:    265,
    resolution:   1,
    notes: 'Cannot fully resolve globular clusters — only granular halo texture at the edges.',
  },

  // ── CREDITS ────────────────────────────────────────────────────────────────
  credits: {
    author:       'Anish Mangal',
    contributors: ['Ishan Chrungoo', 'Sohail Lalani'],
  },

  // ── MOON PHASES ────────────────────────────────────────────────────────────
  // Last Qtr Jun 6 · New Moon Jun 14 · First Qtr Jun 21 · Full Moon Jun 29
  moonPhases: [
    '🌖','🌖','🌖','🌖','🌖','🌗','🌗','🌘','🌘','🌘',
    '🌘','🌘','🌘','🌑','🌑','🌒','🌒','🌒','🌒','🌒',
    '🌓','🌔','🌔','🌔','🌔','🌔','🌔','🌔','🌕','🌕',
  ],
  newMoonDay:  14,
  moonEvents: {
    lastQtr:  'Jun 6',
    newMoon:  'Jun 14',
    firstQtr: 'Jun 21',
    full:     'Jun 29',
  },

  // ── MOON FEATURES ──────────────────────────────────────────────────────────
  moonFeatures: [
    {
      name: 'Rupes Recta',
      desc: 'The "Straight Wall" — a fault scarp 110km long on the eastern edge of Mare Nubium. Near the first quarter it appears as a sharp dark line casting a blade-like shadow. Beautifully linear and unlike any other lunar feature. Best when the terminator bisects it.',
      best: 'Best: Jun 20–22 · 9mm (100×)',
    },
    {
      name: 'Copernicus crater',
      desc: 'A 93km impact crater with terraced inner walls and a multi-peaked central mountain. At 36× the surrounding ray ejecta is striking near the terminator; at 100× the terraced walls and central peak complex are visible on steady nights. One of the finest lunar craters.',
      best: 'Best: Jun 21–23 · 9mm (100×)',
    },
    {
      name: 'Sinus Iridum',
      desc: 'The "Bay of Rainbows" — a semi-circular embayment on the northwestern shore of Mare Imbrium. Its curved mountain wall (Montes Jura) is spectacular at 36× when sunlight catches the peaks while the bay floor is still in shadow — a jewelled arc.',
      best: 'Best: Jun 22–24 · 25mm (36×)',
    },
    {
      name: 'Clavius crater',
      desc: 'One of the largest craters on the Moon at 225km across. Look inside for the arc of progressively smaller craterlets — a classic chain-within-a-chain caused by secondary impacts. Best when the terminator bisects it; extraordinary at 100×.',
      best: 'Best: Jun 19–21 · 9mm (100×)',
    },
  ],

  // ── PLANNER ────────────────────────────────────────────────────────────────
  planner: [
    {
      dates:   'Jun 1–5',
      targets: 'Moon craters, M13 overhead, M5, M57 rising',
      time:    '10pm–2am',
      note:    'Moon clears midnight, M13 near zenith',
      type:    'normal',
    },
    {
      dates:   'Jun 9',
      targets: '★ Venus–Jupiter conjunction — low WNW at dusk',
      time:    '8:30–9:30pm',
      note:    'Under 0.5° apart — both in same field',
      type:    'best',
    },
    {
      dates:   'Jun 10–18',
      targets: '★ All objects — best dark skies of month',
      time:    '9:30pm–3am',
      note:    'New Moon Jun 14 — prime Milky Way window',
      type:    'best',
    },
    {
      dates:   'Jun 19–24',
      targets: 'M13, M57, Saturn, Moon (first quarter)',
      time:    '10pm–2am',
      note:    'First quarter Jun 21 · summer solstice',
      type:    'normal',
    },
    {
      dates:   'Jun 25–28',
      targets: 'Moon, Saturn, Venus low WNW',
      time:    '10pm–midnight',
      note:    'Brightening Moon limits deep sky',
      type:    'warn',
    },
    {
      dates:   'Jun 29–30',
      targets: 'Moon (full), Saturn rising SE',
      time:    '10pm–midnight',
      note:    'Full Moon — skip faint deep sky',
      type:    'warn',
    },
  ],
  plannerFooter: 'Venus/Jupiter → low WNW at dusk, Jun 9 conjunction · M5/M13 → high south after 10pm · Scorpius/M4 → due south 10–11pm · M10 → south by 11pm · M8 Lagoon → SSE, best after midnight · M57/Albireo → NE, high by 1am · Saturn → SE after 11pm',

  // ── PLANETS ────────────────────────────────────────────────────────────────
  planets: [
    {
      name: 'Venus',
      ease: 4,
      rows: [
        ['Constellation',    'Gemini → Cancer'],
        ['Visible',          'Evening, low WNW'],
        ['Sets after sunset','~2–2.5 hrs'],
        ['Brightness',       'mag −4.3 to −4.5'],
        ['At 36× (25mm)',   'Large crescent disc, ~35–45″'],
        ['At 100× (9mm)',   '~55→45% lit, swelling crescent'],
      ],
      note: 'Venus is stunning as a large, visibly crescent disc growing bigger and thinner as it tracks toward inferior conjunction in August. The crescent phase is obvious at 36×. On Jun 9 it passes within ~0.4° of Jupiter — both visible in the same low-power field.',
    },
    {
      name: 'Saturn',
      ease: 4,
      rows: [
        ['Constellation',    'Pisces'],
        ['Visible',          'Late evening, rises E/SE'],
        ['Rises after dark', '~11:30pm (Jun 1) → ~10pm (Jun 30)'],
        ['Brightness',       'mag +0.8'],
        ['At 36× (25mm)',   'Ringed disc, Titan visible'],
        ['At 100× (9mm)',   'Rings at ~20° tilt, Cassini gap hinted'],
      ],
      note: 'Saturn is returning to the summer evening sky. The rings at ~20° tilt are unmistakable even at 36×. Titan is easy. On a steady night 100× hints at the Cassini Division. Gets better each week as it rises earlier.',
    },
  ],

  // ── EVENTS ─────────────────────────────────────────────────────────────────
  events: [
    {
      type:  'best',
      title: '★ Venus–Jupiter great conjunction — June 9',
      body:  'The two brightest planets pass within ~0.4° of each other in the WNW sky shortly after sunset. Both fit comfortably in the same 36× eyepiece field — Jupiter\'s disc and four Galilean moons alongside Venus\'s large crescent. Naked eye they appear as a single dazzling point. Watch from a clear western horizon around 8:30–9:30pm. One of the finest planetary conjunctions in years.',
    },
    {
      type:  'info',
      title: 'Summer solstice — June 21',
      body:  'The Sun reaches its northernmost point at 03:31 UTC on June 21. The longest day of the year means the shortest night — but what night there is belongs to Scorpius, Hercules, and the Milky Way. The Sagittarius star fields and M8 are rising in the SSE after midnight.',
    },
    {
      type:  'info',
      title: 'Milky Way core season begins',
      body:  'From late June onward, the galactic core in Sagittarius is visible in the south after midnight. Even from suburban skies the Milky Way band is naked-eye on a dark night. The Lagoon Nebula (M8) sits in the richest section of the galactic plane — June through August is the best window for Sagittarius objects from 32°N.',
    },
  ],

  // ── OBJECTS — ordered west to east ────────────────────────────────────────
  objects: [
    {
      id:       'm5',
      navLabel: 'M5',
      name:     'M5 — Globular Cluster',
      type:     'Globular cluster · Serpens · mag 5.6 · 24,500 ly',
      ease:     4,
      warning:  null,
      meta: [
        ['Best dates', 'Jun 1–22'],
        ['Best time',  '10pm–midnight'],
        ['Direction',  'High south'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark skies'],
      ],
      description: 'One of the finest globulars in the northern sky, rivalling M13. At 36× a bright, slightly oval cotton-ball glow — noticeably more compact than the sprawling M13. At 100× the halo fills the field with granular texture, hinting at resolution at the very edges. The core blazes intensely white. Some observers find M5 marginally more concentrated than M13 — worth comparing in the same session. A 114mm cannot fully resolve either, but both reward patience and averted vision.',
      finder:   'Find Unukalhai (Alpha Serpentis), a 2.6-magnitude orange star high in the south — the brightest star in Serpens. M5 lies ~8° to the northwest. The nearest naked-eye marker is 5 Serpentis (mag 5.1) — M5 sits just 20 arcminutes northwest of it, easily in the same 36× field. Look for the fuzzy smudge that won\'t focus sharp.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m5', label: '9mm · 100×\nbright oval, granular halo' },
      ],
    },

    {
      id:       'm4',
      navLabel: 'M4',
      name:     'M4 — Globular Cluster',
      type:     'Globular cluster · Scorpius · mag 5.9 · 7,200 ly',
      ease:     4,
      warning:  '⚠ Best after 10pm when Scorpius clears the southern haze',
      meta: [
        ['Best dates', 'Jun 5–22'],
        ['Best time',  '10–11:30pm (transit ~10:30pm)'],
        ['Direction',  'Due south, ~30° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Clear southern horizon, dark sky'],
      ],
      description: 'The nearest globular cluster to Earth at just 7,200 light-years. Because of this proximity it appears large and loose compared to M13 — at 36× an obvious, softer round glow. At 100× M4 partially resolves into a mottled swarm of star-points more convincingly than M13 or M5. Look carefully for the faint "bar" of slightly brighter stars running through the core — M4\'s signature feature, unique among bright globulars. It sits only 1.3° west of Antares, making it trivially easy to find.',
      finder:   'Find Antares — the unmistakable red-orange star blazing in the south, the heart of Scorpius. Centre the 25mm on Antares, then nudge roughly one field-width (~1.4°) to the west. M4 appears as a round, softer glow just off-centre. On a good night you can simultaneously see both Antares and M4 at 36×.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m4', label: '9mm · 100×\nloose cluster, bar through core' },
      ],
    },

    {
      id:       'm13',
      navLabel: 'M13',
      name:     'M13 — Great Hercules Cluster',
      type:     'Globular cluster · Hercules · mag 5.8 · 22,000 ly',
      ease:     5,
      warning:  null,
      meta: [
        ['Best dates', 'Jun 1–25'],
        ['Best time',  '10pm–1am'],
        ['Direction',  'High south, nearly overhead'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky helps but not essential'],
      ],
      description: 'At 36× a large, obvious cotton-ball glow — noticeably bigger and brighter than M5. At 100× the halo is rich and granular, the core blazes, and on a steady night the very edge of the halo shows individual star-points. In June M13 is near the zenith — the best possible position for maximum contrast and atmospheric steadiness. The finest globular cluster in the northern sky and one of the best objects for any telescope. Show this first on any observing session.',
      finder:   'Find the Keystone of Hercules — four stars forming a slightly squashed rectangle, nearly overhead in June. M13 sits on the western edge of the Keystone, one-third of the way from the bottom star (Zeta) to the top (Eta). On a dark night it is naked-eye visible as a faint fuzzy star. Centre in the 25mm, then switch to 9mm for the texture.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m13', label: '9mm · 100×\nrich halo, resolved edge stars' },
      ],
    },

    {
      id:       'm10',
      navLabel: 'M10',
      name:     'M10 — Globular Cluster',
      type:     'Globular cluster · Ophiuchus · mag 6.6 · 14,300 ly',
      ease:     3,
      warning:  null,
      meta: [
        ['Best dates', 'Jun 5–25'],
        ['Best time',  '10:30pm–1am'],
        ['Direction',  'South, ~54° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark skies, averted vision'],
      ],
      description: 'One of the two finest globulars in Ophiuchus — the other being M12, just 3° to the northwest. At 36× a round, moderately concentrated glow, smaller than M13 but distinctly non-stellar and brightening toward the core. At 100× the halo shows clear granularity and the centre is compact and white. It won\'t overwhelm like M13, but M10 is a satisfying target in its own right. Worth sweeping slowly — M12 sits ~3° to the northwest and will fit in the same low-power field, giving you a direct comparison between two similar globulars.',
      finder:   'From Antares, move almost due north ~14° into the body of Ophiuchus. Look for Zeta Ophiuchi (~2.6 mag), a bright star to the north of Antares. M10 lies ~5° east-northeast of Zeta Oph. At 36× scan the area for a slightly softened glow that refuses to sharpen. M12 appears ~3° to the northwest — try to frame both in the same sweep.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m10', label: '9mm · 100×\ncompact core, granular halo' },
      ],
    },

    {
      id:       'm8',
      navLabel: 'M8',
      name:     'M8 — Lagoon Nebula',
      type:     'Emission nebula + open cluster · Sagittarius · mag 6.0 · ~4,100 ly',
      ease:     3,
      warning:  '⚠ Best after 11pm when Sagittarius clears the southern horizon haze',
      meta: [
        ['Best dates', 'Jun 10–22'],
        ['Best time',  '11pm–1:30am (transit ~12:30am)'],
        ['Direction',  'SSE, ~25–30° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky, clear southern horizon, no Moon'],
      ],
      description: 'One of the showpieces of the summer sky. At 36× a large, irregularly glowing cloud divided by a prominent dark lane — the "lagoon" that gives it its name — with the young star cluster NGC 6530 sprinkled across the eastern half. The overall extent is ~1.5° × 0.5°, so the 25mm field shows it comfortably. At 100× zoom into the embedded cluster stars and look for the bright knot of nebulosity near centre (the Hourglass region). Being at 25–30° altitude from 32°N, wait until transit for maximum brightness and steadiness.',
      finder:   'Find the "Teapot" asterism in Sagittarius — the lid star is Kaus Borealis (Lambda Sgr). M8 lies ~5° west-northwest of Kaus Borealis. Alternatively, scan ~15° west of the Scorpion\'s tail. At 36× M8 is immediately obvious as a large, softly glowing cloud — far larger than any globular, with visible extent even at a glance. The dark lane is subtle but real on good nights.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m8', label: '25mm · 36×\nlarge glow, dark lane, star cluster' },
      ],
    },

    {
      id:       'm57',
      navLabel: 'M57',
      name:     'M57 — Ring Nebula',
      type:     'Planetary nebula · Lyra · mag 8.8 · ~2,300 ly',
      ease:     3,
      warning:  null,
      meta: [
        ['Best dates', 'Jun 10–25'],
        ['Best time',  '11:30pm–3am (rising NE)'],
        ['Direction',  'NE, rising all night'],
        ['Use',        '9mm (100×)'],
        ['Needs',      'Steady seeing, dark sky'],
        ['Skip',       'Below ~30° before midnight'],
      ],
      description: 'The quintessential planetary nebula — the expelled shell of a dying star. At 100× it appears as a tiny, unmistakable grey-green smoke ring: a small oval distinctly darker at the centre. The central white dwarf is NOT visible at 114mm (requires 200mm+). The ring shape itself is clear and immediately satisfying. It is small — only 1 arcminute across — so 100× is the minimum useful magnification. In June M57 rises steadily through the night and is best from midnight onward. The sky darkens just enough for it by late June.',
      finder:   'Find Vega — the brilliant bluish-white star blazing in the NE, the brightest star in that part of the sky. Lyra is the small parallelogram of stars just below and to the left of Vega. M57 sits exactly halfway between the two bottom stars of the parallelogram (Beta Lyrae / Sheliak and Gamma Lyrae / Sulafat). At 100× look for the small out-of-focus smudge that won\'t sharpen — that is the ring.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m57', label: '9mm · 100×\ngrey-green smoke ring' },
      ],
    },

    {
      id:       'albireo',
      navLabel: 'Albireo',
      name:     'Albireo — β Cygni',
      type:     'Double star · Cygnus · mags 3.1 + 5.1 · sep 34″ · 430 ly',
      ease:     5,
      warning:  null,
      meta: [
        ['Best dates',   'Jun 1–30'],
        ['Best time',    '11pm–3am (high enough by midnight)'],
        ['Direction',    'NE, rising high through the night'],
        ['Use',          '25mm (36×) or 9mm (100×)'],
        ['Seeing',       'Any conditions — easy split at 34″'],
        ['Moon caution', 'Any phase fine — bright pair'],
      ],
      description: 'The most celebrated colour-contrast double star in the sky. At 36× two stars cleanly split — one a warm golden-amber (the primary K-type giant), the other a piercing ice-blue (a hotter B-type star). The colour contrast is vivid and striking, unlike anything else at the eyepiece. With 34 arcseconds of separation the pair splits easily at 36× with room to spare. Cygnus rises steadily in the NE through June evenings; Albireo gets better as the night progresses and the sky darkens. The single best object to show anyone who has never looked through a telescope.',
      finder:   'Find Vega blazing in the NE. Cygnus is the large cross-shape — the Northern Cross — nearby, with bright Deneb at the top of the cross. Albireo is the star at the very bottom tip of the cross, the "head of the swan." Naked eye it appears as a single faint star. Point the 25mm at it and prepare for the colour.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_albireo', label: '25mm · 36×\ngold + blue, vivid contrast' },
      ],
    },
  ],

  // ── GLOSSARY ───────────────────────────────────────────────────────────────
  glossary: [
    ['Magnitude (mag)',      'Brightness scale — lower is brighter. Sun −26, naked eye limit ~6, your scope reaches ~12.'],
    ['Globular cluster',     'A tight spherical swarm of 100,000–1,000,000 stars gravitationally bound. M13, M5, M4, and M10 are all prime June targets.'],
    ['Emission nebula',      'A gas cloud ionised by nearby hot young stars, glowing in its own light. M8 (Lagoon) is a classic summer example.'],
    ['Planetary nebula',     'The expelled outer shell of a dying star, briefly glowing before fading. M57 is a perfect ring-shaped example — nothing to do with planets.'],
    ['Averted vision',       'Looking slightly off-centre to use the eye\'s more sensitive rod cells. Essential for globular halo texture and faint nebulosity.'],
    ['Seeing',               'Atmospheric steadiness. Poor seeing blurs fine planetary detail and prevents globular resolution even in a dark sky.'],
    ['Transparency',         'Atmospheric clarity. Poor transparency dims faint nebulae even if stars look sharp.'],
    ['Conjunction',          'Two objects appearing close together in the sky. Venus and Jupiter meet in a spectacular sub-0.5° conjunction on June 9.'],
    ['Inferior conjunction', 'When Venus passes between Earth and the Sun, briefly becoming invisible. Venus approaches this in August 2026.'],
    ['Dark adaptation',      'The eye\'s sensitivity peaks after ~20 minutes in total darkness. One flash of white light resets the clock.'],
    ['Milky Way core',       'The dense galactic centre in Sagittarius, visible as a bright cloudy band after midnight in June–August from 32°N.'],
  ],
  scopeLimitNote: 'Your 114mm f/7.9 reflector\'s limits: limiting magnitude ~12 under dark skies · max useful magnification ~230× (100× practical ceiling most nights) · 265× more light than the naked eye · resolving power ~1 arcsecond on the best nights · M4\'s proximity makes it the most resolvable globular this month, but full stellar resolution of M13 and M10 requires 150mm+.',

  // ── CONDITIONS ─────────────────────────────────────────────────────────────
  darkSkyWindow: 'Jun 10–19',

}; // end SKY_DATA
