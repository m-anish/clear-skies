// ─────────────────────────────────────────────────────────────────────────────
// data-july-2026.js
// Month-specific astronomical data for the Clear Skies PWA engine.
// The engine (app.js) never changes. Drop this file to update the app.
// ─────────────────────────────────────────────────────────────────────────────

window.SKY_DATA = {

  // ── IDENTITY ───────────────────────────────────────────────────────────────
  month:       'July',
  year:        2026,
  hemisphere:  'northern',
  title:       'July Skies',
  titleItalic: 'Skies',
  subtitle:    'Northern Hemisphere · Interactive Guide',

  // ── MONTH CHARACTER ────────────────────────────────────────────────────────
  season:             'summer',
  seasonAccent:       '#5ab89a',   // deep teal-green — Milky Way season
  coverConstellation: 'cygnus',    // the Northern Cross riding high in the east
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
  // Last Qtr Jul 7 · New Moon Jul 14 · First Qtr Jul 21 · Full Moon Jul 29 (Buck Moon)
  moonPhases: [
    '🌖','🌖','🌖','🌖','🌖','🌖','🌗','🌗','🌘','🌘',
    '🌘','🌘','🌘','🌑','🌑','🌒','🌒','🌒','🌒','🌒',
    '🌓','🌔','🌔','🌔','🌔','🌔','🌔','🌔','🌕','🌕',
    '🌖',
  ],
  newMoonDay:  14,
  moonEvents: {
    lastQtr:  'Jul 7',
    newMoon:  'Jul 14',
    firstQtr: 'Jul 21',
    full:     'Jul 29',
  },

  // ── MOON FEATURES ──────────────────────────────────────────────────────────
  moonFeatures: [
    {
      name: 'Mare Crisium',
      desc: 'The "Sea of Crises" — an isolated dark oval near the Moon\'s eastern limb, 555km across and ringed by mountains. Alone amid bright highlands, it is the first feature to catch the eye in the early crescent. At 36× the smooth floor and sharp rim stand out, foreshortened into a slim oval near the limb.',
      best: 'Best: Jul 16–18 · 25mm (36×)',
    },
    {
      name: 'Theophilus–Cyrillus–Catharina',
      desc: 'A chain of three great craters on the western edge of Mare Nectaris. Theophilus (100km) is youngest, with terraced walls and a central peak; it overlaps the older Cyrillus, which joins the battered Catharina. With the terminator across them the shadows are dramatic at 100× — a fine crater-trio.',
      best: 'Best: Jul 18–20 · 9mm (100×)',
    },
    {
      name: 'Montes Apenninus',
      desc: 'The Moon\'s grandest mountain range — a 600km arc along the southeastern shore of Mare Imbrium, with peaks over 5km. Near first quarter, sunrise lights the summits while the lowlands stay black and the range leaps into relief. Glorious at 36×; at 100× the peaks throw long shadows across the mare.',
      best: 'Best: Jul 20–22 · 25mm (36×)',
    },
    {
      name: 'Plato crater',
      desc: 'A 101km crater with a remarkably smooth, dark lava-flooded floor, ringed by the peaks of the lunar Alps on Mare Imbrium\'s north shore. Its flatness and dark tone make it unmistakable. Just after first quarter the low sun throws the rim\'s shadow across the floor; hunt the tiny craterlets within at 100×.',
      best: 'Best: Jul 21–24 · 9mm (100×)',
    },
  ],

  // ── PLANNER ────────────────────────────────────────────────────────────────
  planner: [
    {
      dates:   'Jul 1–6',
      targets: 'M13 overhead, M57, Albireo, M27 rising E',
      time:    '9:30pm–1am',
      note:    'Waning Moon rises late — dark early evening',
      type:    'normal',
    },
    {
      dates:   'Jul 9',
      targets: '★ Venus 1° from Regulus — low WNW at dusk',
      time:    '8–8:45pm',
      note:    'Brightest planet beside Leo\'s heart',
      type:    'best',
    },
    {
      dates:   'Jul 10–19',
      targets: '★ All deep sky — best dark skies of month',
      time:    '9:30pm–3am',
      note:    'New Moon Jul 14 — prime Milky Way window',
      type:    'best',
    },
    {
      dates:   'Jul 20–24',
      targets: 'M22, M11, M8 Sagittarius field, Moon (first quarter)',
      time:    '10pm–1am',
      note:    'First quarter Jul 21 — lunar terminator detail',
      type:    'normal',
    },
    {
      dates:   'Jul 25–28',
      targets: 'M27, Albireo, Saturn rising late, Moon',
      time:    '10pm–midnight',
      note:    'Brightening Moon limits faint deep sky',
      type:    'warn',
    },
    {
      dates:   'Jul 29–31',
      targets: 'Full Moon, Saturn, δ-Aquariid meteors (washed out)',
      time:    '10pm–midnight',
      note:    'Full Moon Jul 29 — skip faint targets',
      type:    'warn',
    },
  ],
  plannerFooter: 'M13 → high south & overhead after 9:30pm · M57/Albireo → near zenith by midnight · M8/M22 Sagittarius → due south, low, 11pm–12:30am · M11 → south by 11pm · M27 → high east, best after midnight · Venus → very low WNW at dusk (1° from Regulus Jul 9) · Saturn → rises ESE late evening, best after midnight',

  // ── PLANETS ────────────────────────────────────────────────────────────────
  planets: [
    {
      name: 'Venus',
      ease: 3,
      rows: [
        ['Constellation',    'Leo'],
        ['Visible',          'Dusk, very low WNW'],
        ['Sets after sunset','~1.5–2 hrs'],
        ['Brightness',       'mag −4.5'],
        ['At 36× (25mm)',   'Large thin crescent, ~45–55″'],
        ['At 100× (9mm)',   '~25–30% lit, thinning crescent'],
      ],
      note: 'Venus blazes in the WNW twilight as the brightest "star" in the sky, but it is dropping fast toward inferior conjunction in mid-August — sitting lower and thinner each evening. In the scope it is a large, dramatically thin crescent, obvious even at 36×. From Jul 4–14 it slides past Regulus, the heart of Leo, closest on Jul 9 at just 1.0° apart — a beautiful pairing of the brightest planet with a 1st-magnitude star. Catch it early in twilight from a clear western horizon before it sets.',
    },
    {
      name: 'Saturn',
      ease: 4,
      rows: [
        ['Constellation',    'Pisces'],
        ['Visible',          'Late evening → morning, rises ESE'],
        ['Rises after dark', '~11pm (Jul 1) → ~9:30pm (Jul 31)'],
        ['Brightness',       'mag +0.8'],
        ['At 36× (25mm)',   'Pale disc, Titan visible, ring as a line'],
        ['At 100× (9mm)',   'Rings only ~6–7° open — a slim bright ellipse'],
      ],
      note: 'Saturn is climbing back into the late-evening sky, brightening week by week toward its October opposition. But its rings — edge-on through 2025 — have reopened only to about 6–7° in 2026, so instead of the wide-open showpiece you see a slim bright ellipse hugging the disc, almost a line drawn through the planet. It is still unmistakable, and Titan is easy at 36×. The narrow tilt puts the Cassini Division out of reach this year. Best after midnight, once Saturn climbs clear of the eastern haze.',
    },
  ],

  // ── EVENTS ─────────────────────────────────────────────────────────────────
  events: [
    {
      type:  'best',
      title: '★ Venus meets Regulus — July 9',
      body:  'The brightest planet passes just 1.0° from Regulus, the blue-white heart of Leo, low in the WNW about 45 minutes after sunset. Both fit easily in the same 36× field — Venus a large, brilliant crescent, Regulus a steady point of light beside it. Naked eye they make a striking close pair in the fading twilight. You will need a clear, low western horizon and to look early, around 8–8:45pm, before the pair sets. The whole approach runs Jul 4–14.',
    },
    {
      type:  'info',
      title: 'Milky Way core at its best',
      body:  'Through July the galactic core in Sagittarius and Scorpius rides due south in the late evening — the richest, brightest stretch of our galaxy. From a dark site the Milky Way band is an obvious naked-eye river of light, and the region is packed with deep-sky targets: the Lagoon (M8), the great globular M22, and the dense star-swarm of M11 all lie within it. The New Moon window of Jul 10–19 is the prime time to sweep it with the 25mm eyepiece.',
    },
    {
      type:  'warn',
      title: 'Delta Aquariid & Capricornid meteors — peak Jul 30',
      body:  'Two overlapping showers — the Southern Delta Aquariids and Alpha Capricornids — peak together on the night of Jul 30–31, radiating from low in the south. Together they can deliver 15–25 meteors an hour from a dark sky, including the occasional slow, bright Capricornid fireball. The catch this year: the Full Moon of Jul 29 floods the sky at peak. The best views come in the moonless pre-dawn hours the week before — roughly Jul 20–28 — when the radiant is high after midnight and the Moon has set.',
    },
  ],

  // ── OBJECTS — ordered west to east ────────────────────────────────────────
  objects: [
    {
      id:       'm13',
      navLabel: 'M13',
      name:     'M13 — Great Hercules Cluster',
      type:     'Globular cluster · Hercules · mag 5.8 · 22,000 ly',
      ease:     5,
      warning:  null,
      meta: [
        ['Best dates', 'Jul 1–28'],
        ['Best time',  '9:30pm–1am'],
        ['Direction',  'Near the zenith, overhead'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky helps but not essential'],
      ],
      description: 'At 36× a large, obvious cotton-ball glow — big, bright, and unmistakable. At 100× the halo is rich and granular, the core blazes, and on a steady night the very edge of the halo breaks into individual star-points. In July M13 rides almost exactly overhead in the early evening — the best possible position, looking through the thinnest, steadiest column of air. The finest globular cluster in the northern sky and one of the best objects for any telescope. Show this first on any observing session.',
      finder:   'Find the Keystone of Hercules — four stars forming a slightly squashed rectangle, nearly overhead at nightfall in July. M13 sits on the western edge of the Keystone, one-third of the way down from the top star (Eta) toward the bottom (Zeta). On a dark night it is faintly naked-eye as a fuzzy "star". Centre it in the 25mm, then switch to 9mm for the texture.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m13', label: '9mm · 100×\nrich halo, resolved edge stars' },
      ],
    },

    {
      id:       'm8',
      navLabel: 'M8',
      name:     'M8 — Lagoon Nebula',
      type:     'Emission nebula + open cluster · Sagittarius · mag 6.0 · ~4,100 ly',
      ease:     3,
      warning:  '⚠ Low in the south — wait until it transits and the haze settles',
      meta: [
        ['Best dates', 'Jul 10–24'],
        ['Best time',  '10:30pm–12:30am (transit ~11:30pm)'],
        ['Direction',  'Due south, ~33° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky, clear southern horizon, no Moon'],
      ],
      description: 'One of the showpieces of the summer sky. At 36× a large, irregularly glowing cloud divided by a prominent dark lane — the "lagoon" that gives it its name — with the young star cluster NGC 6530 sprinkled across the eastern half. The overall extent is ~1.5° × 0.5°, so the 25mm field frames it comfortably. At 100× zoom into the embedded cluster and look for the bright knot of nebulosity near centre — the Hourglass region. Sitting at only ~33° altitude from 32°N, wait for it to transit due south for the steadiest, brightest view.',
      finder:   'Find the "Teapot" asterism in Sagittarius, low in the south. The lid star is Kaus Borealis (Lambda Sgr); M8 lies ~5° west-northwest of it, just above the spout. At 36× it is immediately obvious as a large, softly glowing cloud — far bigger than any globular, with visible extent at a glance. The dark lane is subtle but real on a transparent, moonless night.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m8', label: '25mm · 36×\nlarge glow, dark lane, star cluster' },
      ],
    },

    {
      id:       'm22',
      navLabel: 'M22',
      name:     'M22 — Sagittarius Globular',
      type:     'Globular cluster · Sagittarius · mag 5.1 · ~10,400 ly',
      ease:     4,
      warning:  '⚠ Low in the south — needs a clear horizon and transit timing',
      meta: [
        ['Best dates', 'Jul 10–26'],
        ['Best time',  '11pm–1am (transit ~12am)'],
        ['Direction',  'Due south, ~34° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Clear southern horizon, dark sky'],
      ],
      description: 'The brightest globular cluster easily visible from northern mid-latitudes, and one of the closest at ~10,400 light-years — only the far-southern Omega Centauri and 47 Tucanae outshine it. At mag 5.1 it is larger and looser than M13, and because it is so near, a 114mm resolves its outer halo into a swarm of star-points more readily than almost any other globular. At 36× it is a big, bright, slightly squashed glow; at 100× the granular edge breaks into individual suns on a steady night. The tragedy is its low altitude — only ~34° from 32°N — so wait for transit and a transparent sky to see it at its best.',
      finder:   'M22 sits just above the lid of the Sagittarius "Teapot". Find Kaus Borealis (Lambda Sgr), the top of the lid, then move ~2.5° to the northeast. M22 lies almost on the line between Kaus Borealis and the brighter Nunki, much closer to Kaus Borealis. At 36× sweep slowly for a large, soft round glow brighter than its low position would suggest — it is far easier than M8\'s nebulosity once you are on it.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m22', label: '9mm · 100×\nlarge, partly resolved halo' },
      ],
    },

    {
      id:       'm11',
      navLabel: 'M11',
      name:     'M11 — Wild Duck Cluster',
      type:     'Open cluster · Scutum · mag 6.3 · ~6,200 ly',
      ease:     4,
      warning:  null,
      meta: [
        ['Best dates', 'Jul 10–28'],
        ['Best time',  '10:30pm–1am (transit ~11pm)'],
        ['Direction',  'South, ~52° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky brings out the richness'],
      ],
      description: 'One of the richest and most compact open clusters in the sky — so dense it almost looks like a loose globular. Some 2,900 stars are packed into a tight fan, set against one of the brightest star-clouds of the Milky Way (the Scutum Star Cloud). At 36× it is a bright, compact, slightly triangular haze with a single brighter star at its leading edge — the "head of the flock" that gives the Wild Duck its name. At 100× it explodes into a glittering wedge of dozens of resolved stars against a misty backdrop of fainter ones. A wonderful contrast to the smooth globulars — here every point is a sun you can pick out individually.',
      finder:   'Follow the Milky Way south from Albireo down into the small constellation Scutum, just east of the Sagittarius Teapot. The cluster sits at the northern end of the bright Scutum Star Cloud. From the star Lambda Aquilae, hop ~3° southwest to a curving line of stars in Scutum; M11 lies at the end of that line. At 36× it is an obvious knot, denser and more concentrated than any other open cluster in the area.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m11', label: '9mm · 100×\ndense wedge, lead star at the head' },
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
        ['Best dates', 'Jul 1–28'],
        ['Best time',  '10pm–2am (near zenith by midnight)'],
        ['Direction',  'Overhead, high east'],
        ['Use',        '9mm (100×)'],
        ['Needs',      'Steady seeing, dark sky'],
        ['Central star','Not visible at 114mm'],
      ],
      description: 'The quintessential planetary nebula — the expelled shell of a dying star. At 100× it appears as a tiny, unmistakable grey-green smoke ring: a small oval distinctly darker at its centre. The central white dwarf is NOT visible at 114mm (it needs 200mm and up). The ring shape itself is clear and immediately satisfying. It is small — barely 1 arcminute across — so 100× is the minimum useful magnification. In July M57 rides high overhead through the late evening, giving the steadiest possible view; this is the best time of year to chase its delicate ring.',
      finder:   'Find Vega, the brilliant blue-white star almost overhead in the east. Lyra is the small parallelogram of stars hanging just south of Vega. M57 sits exactly halfway between the two southern stars of the parallelogram — Sheliak (Beta Lyrae) and Sulafat (Gamma Lyrae). At 100× look for the small out-of-focus smudge that will not sharpen, then look again for the darker centre — that is the ring.',
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
        ['Best dates',   'Jul 1–31'],
        ['Best time',    '10pm–3am (high overhead by midnight)'],
        ['Direction',    'High east, climbing to the zenith'],
        ['Use',          '25mm (36×) or 9mm (100×)'],
        ['Seeing',       'Any conditions — easy split at 34″'],
        ['Moon caution', 'Any phase fine — bright pair'],
      ],
      description: 'The most celebrated colour-contrast double star in the sky. At 36× two stars split cleanly — one a warm golden-amber (the primary K-type giant), the other a piercing ice-blue (a hotter B-type star). The colour contrast is vivid and unlike anything else at the eyepiece. With 34 arcseconds of separation the pair splits with room to spare even at 36×. Cygnus climbs high overhead through July evenings, so Albireo is beautifully placed all night — and gets better as it rises and the sky darkens. The single best object to show anyone who has never looked through a telescope.',
      finder:   'Find Vega blazing high in the east, then locate the large cross-shape of Cygnus — the Northern Cross — nearby, with bright Deneb at its top. Albireo is the star at the very foot of the cross, the "head of the swan". Naked eye it looks like a single faint star. Point the 25mm at it and prepare for the colour.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_albireo', label: '25mm · 36×\ngold + blue, vivid contrast' },
      ],
    },

    {
      id:       'm27',
      navLabel: 'M27',
      name:     'M27 — Dumbbell Nebula',
      type:     'Planetary nebula · Vulpecula · mag 7.4 · ~1,360 ly',
      ease:     4,
      warning:  null,
      meta: [
        ['Best dates', 'Jul 10–31'],
        ['Best time',  '11pm–3am (high by midnight)'],
        ['Direction',  'High east, near the zenith later'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky, averted vision'],
      ],
      description: 'The brightest and largest planetary nebula in the sky — and the easiest to see well in a small scope. Where M57 is a tiny ring, M27 is big and bold: at mag 7.4 and roughly 8 arcminutes across, it is obvious at 36× as a glowing grey patch. At 100× its distinctive shape emerges — a bright rectangular bar pinched in the middle like an apple core or a bow-tie, with fainter wings filling out the sides into the full "dumbbell". Averted vision swells it noticeably. No central star is visible at 114mm, but the structure itself is among the most rewarding deep-sky sights of summer. Climbing high in the east through July evenings, it is best after midnight near the zenith.',
      finder:   'Find Albireo at the foot of the Northern Cross, then drop ~8° south to the small arrow-shaped constellation Sagitta. M27 lies ~3° north of the arrow\'s tip (the star Gamma Sagittae), in neighbouring Vulpecula. At 36× sweep slowly north of Sagitta for a soft, sizeable grey glow — far larger and easier than M57. Once found, switch to 100× and use averted vision to tease out the pinched dumbbell waist.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m27', label: '9mm · 100×\nbright apple-core bar + faint wings' },
      ],
    },
  ],

  // ── GLOSSARY ───────────────────────────────────────────────────────────────
  glossary: [
    ['Magnitude (mag)',      'Brightness scale — lower is brighter. Sun −26, naked-eye limit ~6, your scope reaches ~12.'],
    ['Globular cluster',     'A tight spherical swarm of 100,000–1,000,000 ancient stars gravitationally bound together. M13 and M22 are both prime July targets.'],
    ['Open cluster',         'A loose, young group of dozens to a few thousand stars born from the same gas cloud, scattered along the Milky Way. M11 (Wild Duck) is an unusually rich example.'],
    ['Emission nebula',      'A gas cloud ionised by nearby hot young stars, glowing in its own light. M8 (Lagoon) is a classic summer example.'],
    ['Planetary nebula',     'The expelled outer shell of a dying star, briefly glowing before it fades. M57 (a tiny ring) and M27 (a big dumbbell) are the two finest — nothing to do with planets.'],
    ['Double star',          'Two stars close together in the eyepiece. Albireo is the showpiece, splitting into a vivid gold-and-blue colour-contrast pair.'],
    ['Averted vision',       'Looking slightly off-centre to use the eye\'s more sensitive rod cells. Essential for globular halo texture and the faint wings of M27.'],
    ['Seeing',               'Atmospheric steadiness. Poor seeing blurs fine detail and prevents globular resolution even under a dark sky.'],
    ['Transparency',         'Atmospheric clarity. Poor transparency dims faint nebulae and the low Sagittarius objects even when stars look sharp.'],
    ['Radiant',              'The point in the sky a meteor shower appears to stream from. The Delta Aquariid radiant sits low in the south, rising after midnight.'],
    ['Inferior conjunction', 'When Venus passes between Earth and the Sun, briefly becoming invisible. Venus races toward this in mid-August 2026.'],
    ['Milky Way core',       'The dense galactic centre in Sagittarius, visible as a bright cloudy band low in the south on dark July nights from 32°N.'],
  ],
  scopeLimitNote: 'Your 114mm f/7.9 reflector\'s limits: limiting magnitude ~12 under dark skies · max useful magnification ~230× (100× is the practical ceiling most nights) · 265× more light than the naked eye · resolving power ~1 arcsecond on the steadiest nights · M22\'s nearness makes it the most resolvable globular this month, while M13 shows a full granular halo but needs 150mm+ for complete stellar resolution. Saturn\'s rings are nearly edge-on in 2026, so the Cassini Division is beyond reach until they open wider in coming years.',

  // ── CONDITIONS ─────────────────────────────────────────────────────────────
  darkSkyWindow: 'Jul 10–19',

}; // end SKY_DATA
