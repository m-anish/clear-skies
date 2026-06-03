// ─────────────────────────────────────────────────────────────────────────────
// data-august-2026.js
// Month-specific astronomical data for the Clear Skies PWA engine.
// The engine (app.js) never changes. Drop this file to update the app.
// ─────────────────────────────────────────────────────────────────────────────

window.SKY_DATA = {

  // ── IDENTITY ───────────────────────────────────────────────────────────────
  month:       'August',
  year:        2026,
  hemisphere:  'northern',
  title:       'August Skies',
  titleItalic: 'Skies',
  subtitle:    'Northern Hemisphere · Interactive Guide',

  // ── MONTH CHARACTER ────────────────────────────────────────────────────────
  season:             'summer',
  seasonAccent:       '#5ab89a',   // deep teal-green — Milky Way season
  coverConstellation: 'perseus',   // the Perseid radiant, rising NE before dawn
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
  // Last Qtr Aug 6 · New Moon Aug 12 · First Qtr Aug 20 · Full Moon Aug 28 (Sturgeon Moon)
  moonPhases: [
    '🌖','🌖','🌖','🌖','🌖','🌗','🌗','🌘','🌘','🌘',
    '🌘','🌑','🌑','🌒','🌒','🌒','🌒','🌒','🌒','🌓',
    '🌔','🌔','🌔','🌔','🌔','🌔','🌔','🌕','🌕','🌖',
    '🌖',
  ],
  newMoonDay:  12,
  moonEvents: {
    lastQtr:  'Aug 6',
    newMoon:  'Aug 12',
    firstQtr: 'Aug 20',
    full:     'Aug 28',
  },

  // ── MOON FEATURES ──────────────────────────────────────────────────────────
  moonFeatures: [
    {
      name: 'Ptolemaeus, Alphonsus & Arzachel',
      desc: 'A magnificent north–south chain of three large craters in the central highlands. Ptolemaeus (153km) has a smooth, dark flooded floor; Alphonsus shows a central peak and dark patches; Arzachel is deep with terraced walls. When the first-quarter terminator runs down the chain, the relief is breathtaking at 100×.',
      best: 'Best: Aug 19–21 · 9mm (100×)',
    },
    {
      name: 'Tycho crater',
      desc: 'The Moon\'s most famous crater — an 85km bowl in the southern highlands with sharp terraced walls and a bright central peak. A day or two after first quarter the low sun throws dramatic shadows; nearer full Moon its vast bright ray system erupts across the whole disc. Superb at 100×.',
      best: 'Best: Aug 21–24 · 9mm (100×)',
    },
    {
      name: 'Hyginus & Ariadaeus Rilles',
      desc: 'Two long, thin clefts cutting across the dark plains near the Moon\'s centre — among the few rilles a 114mm can show. The Hyginus Rille has a small crater at its kink; the Ariadaeus Rille runs dead straight for 250km. A rewarding challenge at 100× when the terminator is close around first quarter.',
      best: 'Best: Aug 19–21 · 9mm (100×)',
    },
    {
      name: 'Mare Serenitatis & Posidonius',
      desc: 'The smooth, round "Sea of Serenity" emerges from shadow just after first quarter. On its northeastern shore sits Posidonius (95km), a crater with a beautifully fractured floor crossed by fine rilles. The mare\'s ghostly wrinkle ridges catch the low light — lovely at 36×, intricate at 100×.',
      best: 'Best: Aug 20–23 · 25mm (36×)',
    },
  ],

  // ── PLANNER ────────────────────────────────────────────────────────────────
  planner: [
    {
      dates:   'Aug 1–5',
      targets: 'M13 overhead, M27, M11, Milky Way, Moon craters',
      time:    '9pm–1am',
      note:    'Waning Moon rises late — dark early evenings',
      type:    'normal',
    },
    {
      dates:   'Aug 8–11',
      targets: '★ All deep sky — best dark skies of month',
      time:    '9pm–3am',
      note:    'Moonless skies build toward New Moon Aug 12',
      type:    'best',
    },
    {
      dates:   'Aug 12–13',
      targets: '★ Perseid meteors — peak night, M31 rising',
      time:    'Midnight–dawn',
      note:    'New Moon Aug 12 — up to 90/hr, no Moon at all',
      type:    'best',
    },
    {
      dates:   'Aug 14–18',
      targets: 'Milky Way core, M17, M22, Venus low WNW at dusk',
      time:    '8:30pm–3am',
      note:    'Venus at greatest elongation Aug 15 (low, half-lit)',
      type:    'best',
    },
    {
      dates:   'Aug 19–24',
      targets: 'Moon terminator, M15, M31, Saturn rising late',
      time:    '9:30pm–1am',
      note:    'First quarter Aug 20 — fine crater detail',
      type:    'normal',
    },
    {
      dates:   'Aug 25–31',
      targets: 'Moon (full), Saturn, Albireo, bright doubles',
      time:    '9pm–midnight',
      note:    'Full Moon Aug 28 — skip faint deep sky',
      type:    'warn',
    },
  ],
  plannerFooter: 'M13 → high W & overhead after 9pm · M17/M11 → due south 9–11pm (low) · Coathanger/M27 → near the zenith 10pm–midnight · M15 → SE, high after 11pm · M31 → rising NE, best after midnight · Perseids → radiant NE, best after midnight Aug 12–13 · Venus → very low WNW dusk · Saturn → rises ESE late evening, best after midnight',

  // ── PLANETS ────────────────────────────────────────────────────────────────
  planets: [
    {
      name: 'Venus',
      ease: 2,
      rows: [
        ['Constellation',     'Leo → Virgo'],
        ['Visible',           'Dusk only, very low WNW'],
        ['Sets after sunset', '~1–1.5 hrs'],
        ['Brightness',        'mag −4.0'],
        ['At 36× (25mm)',    'Small, crisp half-lit disc, ~24″'],
        ['At 100× (9mm)',    'Clean "half-moon" phase (dichotomy)'],
      ],
      note: 'Venus reaches its greatest separation from the Sun on Aug 15 (46°) — yet this is a poor evening apparition for northern observers: the shallow late-summer ecliptic keeps it very low in the WNW, setting barely an hour after the Sun. It is still the dazzling "evening star", easily naked-eye in bright twilight. In the scope it shows a clean half-lit disc (dichotomy falls around Aug 12). It stays an evening object for months yet — inferior conjunction is not until late October. Catch it early from a flat western horizon.',
    },
    {
      name: 'Saturn',
      ease: 4,
      rows: [
        ['Constellation',     'Pisces'],
        ['Visible',           'Late evening → dawn, rises ESE'],
        ['Rises after dark',  '~10:30pm (Aug 1) → ~8:30pm (Aug 31)'],
        ['Brightness',        'mag +0.6, brightening'],
        ['At 36× (25mm)',    'Pale disc, Titan, rings as a thin line'],
        ['At 100× (9mm)',    'Rings ~7° open — a slim bright ellipse'],
      ],
      note: 'Saturn climbs into the late-evening sky through August, brightening steadily toward its 4 October opposition. Its rings remain nearly edge-on in 2026 — only about 7° open after the 2025 plane-crossing — so they appear as a slim bright ellipse, almost a line ruled through the disc, rather than the wide-open showpiece. Titan is an easy point of light at 36×. The narrow tilt keeps the Cassini Division out of reach this year. Best after midnight, once it lifts clear of the eastern murk.',
    },
  ],

  // ── EVENTS ─────────────────────────────────────────────────────────────────
  events: [
    {
      type:  'best',
      title: '★ Perseid meteor shower — peak Aug 12–13, no Moon',
      body:  'The year\'s best meteor shower peaks on the night of Aug 12–13, and 2026 is an exceptional year: the peak coincides almost exactly with New Moon (Aug 12), so the sky is completely dark. From a dark site expect 60–90+ meteors an hour — fast, bright streaks, many leaving glowing trains. The radiant lies in Perseus, low in the NE in the late evening and climbing high by dawn, so the richest hours are after midnight. No telescope needed: lie back, let your eyes dark-adapt for 20 minutes, and watch the whole sky. Active late July through Aug 24.',
    },
    {
      type:  'info',
      title: 'Milky Way core at its peak — New Moon Aug 8–18',
      body:  'August offers the darkest, richest view of our galaxy all year. The galactic core in Sagittarius and Scutum rides due south in the early-to-mid evening, a glowing river of starlight to the naked eye from a dark site. The moonless window of Aug 8–18 is prime: sweep the 25mm slowly through the star clouds and you will trip over the Lagoon (M8), the Swan (M17), the Wild Duck (M11), and the great globular M22 within a few degrees of one another.',
    },
    {
      type:  'info',
      title: 'Venus at greatest elongation — August 15',
      body:  'Venus reaches its farthest point from the Sun in the evening sky (46°) on Aug 15. Through a telescope it shows an exact half-phase — a tiny, crisp "half-moon" — which is always the signature of greatest elongation. The catch from 32°N is altitude: the low summer ecliptic pins it deep in the WNW twilight, setting little more than an hour after sunset. Look for the brilliant evening star low in the west about 30–40 minutes after sundown.',
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
        ['Best dates', 'Aug 1–24'],
        ['Best time',  '9–11:30pm'],
        ['Direction',  'High west, sinking from the zenith'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky helps but not essential'],
      ],
      description: 'At 36× a large, obvious cotton-ball glow — big, bright, and unmistakable. At 100× the halo is rich and granular, the core blazes, and on a steady night the very edge of the halo breaks into individual star-points. In August M13 starts the evening near the zenith and drifts into the west, so observe it early while it is still high. The finest globular cluster in the northern sky and one of the best objects for any telescope — show this first on any observing session.',
      finder:   'Find the Keystone of Hercules — four stars forming a slightly squashed rectangle, high overhead at nightfall. M13 sits on the western edge of the Keystone, one-third of the way down from the top star (Eta) toward the bottom (Zeta). On a dark night it is faintly naked-eye as a fuzzy "star". Centre it in the 25mm, then switch to 9mm for the texture.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m13', label: '9mm · 100×\nrich halo, resolved edge stars' },
      ],
    },

    {
      id:       'm17',
      navLabel: 'M17',
      name:     'M17 — Swan (Omega) Nebula',
      type:     'Emission nebula · Sagittarius · mag 6.0 · ~5,000 ly',
      ease:     3,
      warning:  '⚠ Low in the south — wait for it to transit and the haze to settle',
      meta: [
        ['Best dates', 'Aug 8–24'],
        ['Best time',  '9–11pm (transit ~9:30pm)'],
        ['Direction',  'Due south, ~42° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky, clear southern horizon, no Moon'],
      ],
      description: 'After the Lagoon, the finest emission nebula of the summer Milky Way — and arguably easier to "see the shape" of in a small scope. At 36× a striking bright bar of nebulosity floats in a rich star field; the bar, with a hooked extension curling off one end, traces the body and neck of a swan gliding on water (it is also called the Omega or Checkmark Nebula). At 100× the bar is brighter than M8\'s glow and the swan shape is unmistakable on a dark night. Higher in the sky than the Lagoon, so a touch steadier from 32°N. An OIII or UHC filter, if you have one, makes the nebula leap out.',
      finder:   'M17 lies in the Milky Way about 2.5° north of the Lagoon (M8) and just south of the small constellation Scutum. From the top of the Sagittarius "Teapot" lid, sweep slowly north along the bright star clouds. At 36× look for the horizontal bar of glow that stands out from the surrounding stars — once seen, the swan shape is obvious and hard to forget.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m17', label: '25mm · 36×\nbright bar + hooked swan neck' },
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
        ['Best dates', 'Aug 8–28'],
        ['Best time',  '9:30pm–midnight (transit ~9:40pm)'],
        ['Direction',  'South, ~52° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky brings out the richness'],
      ],
      description: 'One of the richest and most compact open clusters in the sky — so dense it almost looks like a loose globular. Some 2,900 stars are packed into a tight fan, set against the bright Scutum Star Cloud. At 36× it is a bright, compact, slightly triangular haze with a single brighter star at its leading edge — the "head of the flock" that gives the Wild Duck its name. At 100× it explodes into a glittering wedge of dozens of resolved stars over a misty backdrop of fainter ones. A wonderful contrast to the smooth globulars — here every point is a sun you can pick out.',
      finder:   'Follow the Milky Way down from Albireo into the small constellation Scutum, just east of the Sagittarius Teapot. The cluster sits at the northern end of the bright Scutum Star Cloud. From the star Lambda Aquilae, hop ~3° southwest to a curving line of stars in Scutum; M11 sits at the end of that line. At 36× it is an obvious knot, denser than any other open cluster nearby.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m11', label: '9mm · 100×\ndense wedge, lead star at the head' },
      ],
    },

    {
      id:       'coathanger',
      navLabel: 'Coathngr',
      name:     'The Coathanger — Brocchi\'s Cluster',
      type:     'Asterism (Cr 399) · Vulpecula · mag ~3.6 · ~10 stars',
      ease:     5,
      warning:  null,
      meta: [
        ['Best dates', 'Aug 1–31'],
        ['Best time',  '9pm–1am (high overhead)'],
        ['Direction',  'Near the zenith'],
        ['Use',        '25mm (36×) — or binoculars'],
        ['Seeing',     'Any — bright stars'],
        ['Moon caution','Any phase fine — bright pattern'],
      ],
      description: 'A delightful, instantly recognisable pattern: six 5th–7th-magnitude stars in a straight horizontal line forming the "bar", with four more stars hanging below the middle as the "hook". It really does look like an upside-down coathanger. Officially Collinder 399 (Brocchi\'s Cluster), it is now known to be a chance line-of-sight alignment rather than a true cluster. It is too large (~1.5°) for high power — the 25mm at 36× frames it perfectly, and it is even better in binoculars. A charming, low-effort target that never fails to raise a smile.',
      finder:   'The Coathanger sits in the Milky Way roughly a third of the way along the line from Albireo (foot of the Northern Cross) to Altair. Sweep the 25mm slowly through that region overhead and the straight bar-plus-hook pattern jumps out — unlike anything else in the sky. On a dark night it is a faint naked-eye smudge.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_coathanger', label: '25mm · 36×\nstraight bar + hanging hook' },
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
        ['Best dates', 'Aug 1–28'],
        ['Best time',  '9:30pm–1am (overhead by 11pm)'],
        ['Direction',  'Near the zenith'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky, averted vision'],
      ],
      description: 'The brightest and largest planetary nebula in the sky, and the easiest to see well in a small scope. Where M57 is a tiny ring, M27 is big and bold: at mag 7.4 and roughly 8 arcminutes across it is obvious at 36× as a glowing grey patch. At 100× its distinctive shape emerges — a bright rectangular bar pinched in the middle like an apple core or a bow-tie, with fainter wings filling out the sides into the full "dumbbell". Averted vision swells it noticeably. No central star shows at 114mm, but the structure is among the most rewarding deep-sky sights of summer. In August it rides almost overhead by mid-evening — ideal placement.',
      finder:   'Find Albireo at the foot of the Northern Cross, then drop ~8° south to the small arrow-shaped constellation Sagitta. M27 lies ~3° north of the arrow\'s tip (the star Gamma Sagittae), in neighbouring Vulpecula. At 36× sweep slowly north of Sagitta for a soft, sizeable grey glow — far larger and easier than M57. Then switch to 100× and use averted vision to tease out the pinched dumbbell waist.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m27', label: '9mm · 100×\nbright apple-core bar + faint wings' },
      ],
    },

    {
      id:       'm15',
      navLabel: 'M15',
      name:     'M15 — Pegasus Globular',
      type:     'Globular cluster · Pegasus · mag 6.2 · ~33,600 ly',
      ease:     4,
      warning:  null,
      meta: [
        ['Best dates', 'Aug 8–31'],
        ['Best time',  '11pm–2am (high in the SE→S)'],
        ['Direction',  'SE, climbing to ~70° altitude'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky, averted vision for the halo'],
      ],
      description: 'One of the most concentrated globulars in the sky — its core has collapsed into an extraordinarily dense, almost stellar blaze. At 36× it looks like a fuzzy star with a bright centre and a soft round halo. At 100× the contrast is striking: an intense, near-pin-point core surrounded by a granular haze that averted vision teases into faint outer star-points. It is more compact than M13 and the concentrated core is its signature. A fine autumn-preview target, well up in the east-southeast by late evening as the summer sky slides west.',
      finder:   'M15 is easy to locate: extend the line from Theta Pegasi through Enif (Epsilon Pegasi, the bright nose-star of Pegasus) about 4° further, and M15 sits just northwest of Enif — close enough to share a low-power field on a good night. At 36× it shows immediately as a bright, condensed fuzzy "star" that will not focus to a point.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m15', label: '9mm · 100×\nintense core, granular halo' },
      ],
    },

    {
      id:       'm31',
      navLabel: 'M31',
      name:     'M31 — Andromeda Galaxy',
      type:     'Spiral galaxy · Andromeda · mag 3.4 · ~2.5 million ly',
      ease:     3,
      warning:  '⚠ Low in the NE before midnight — best in the small hours',
      meta: [
        ['Best dates', 'Aug 15–31'],
        ['Best time',  'After midnight (rising NE)'],
        ['Direction',  'NE, climbing through the night'],
        ['Start with', '25mm (36×)'],
        ['Then try',   '9mm (100×)'],
        ['Needs',      'Dark sky essential, averted vision'],
      ],
      description: 'The most distant object the eye can see unaided — a whole spiral galaxy of a trillion stars, its light 2.5 million years old. At 36× it is a large, elongated oval of soft glow with a brighter condensed core, far bigger than the field suggests (the full extent runs several degrees, though only the bright central region shows in a small scope). The 25mm low-power view is best — it frames the glow and often catches the two small companion galaxies, M32 (a round knot just south of the core) and M110 (a fainter elongated smudge to the other side). Do not expect spiral arms; this is about the sheer scale and the thrill of looking across 2.5 million light-years. A taste of the autumn sky now climbing in the northeast.',
      finder:   'From the Great Square of Pegasus rising in the east, find the top-left star (Alpheratz) and step two stars left along Andromeda to Mirach (Beta Andromedae). Turn 90° "up" (north) past Mu And to Nu And; M31 is the fuzzy patch just beyond. On a dark night it is a naked-eye elongated smudge — the easiest galaxy to find. Use the 25mm and let your eye adapt; averted vision doubles its apparent size.',
      twoSketch: false,
      sketches: [
        { svgId: 'sk_m31', label: '25mm · 36×\nelongated glow, bright core, M32/M110' },
      ],
    },
  ],

  // ── GLOSSARY ───────────────────────────────────────────────────────────────
  glossary: [
    ['Magnitude (mag)',      'Brightness scale — lower is brighter. Sun −26, naked-eye limit ~6, your scope reaches ~12.'],
    ['Globular cluster',     'A tight spherical swarm of 100,000–1,000,000 ancient stars gravitationally bound together. M13 and M15 are both prime August targets.'],
    ['Open cluster',         'A loose, young group of dozens to a few thousand stars born from the same gas cloud. M11 (Wild Duck) is an unusually rich, compact example.'],
    ['Emission nebula',      'A gas cloud ionised by hot young stars, glowing in its own light. M17 (the Swan) is a bright, shapely summer example.'],
    ['Planetary nebula',     'The expelled outer shell of a dying star, briefly glowing before it fades. M27 (the Dumbbell) is the biggest and brightest — nothing to do with planets.'],
    ['Galaxy',               'A vast island of billions of stars far beyond the Milky Way. M31, the Andromeda Galaxy, is the nearest large one at 2.5 million light-years.'],
    ['Asterism',             'A recognisable star pattern that is not a true cluster or constellation. The Coathanger is a chance line-of-sight alignment of ten stars.'],
    ['Radiant',              'The point a meteor shower appears to stream from. The Perseid radiant is in Perseus, low in the NE late evening and high by dawn.'],
    ['Averted vision',       'Looking slightly off-centre to use the eye\'s more sensitive rod cells. Essential for galaxy and globular-halo detail.'],
    ['Greatest elongation',  'When a planet appears farthest from the Sun in our sky and shows an exact half-phase (dichotomy). Venus reaches it on Aug 15.'],
    ['Milky Way core',       'The dense galactic centre in Sagittarius, at its highest and best on dark August evenings from 32°N.'],
  ],
  scopeLimitNote: 'Your 114mm f/7.9 reflector\'s limits: limiting magnitude ~12 under dark skies · max useful magnification ~230× (100× is the practical ceiling most nights) · 265× more light than the naked eye · resolving power ~1 arcsecond on the steadiest nights · M13 and M15 show granular halos but need 150mm+ to resolve fully, and M15\'s collapsed core stays an unresolved blaze · M31\'s spiral arms are beyond a small scope — its glowing core and the companions M32/M110 are the realistic prizes.',

  // ── CONDITIONS ─────────────────────────────────────────────────────────────
  darkSkyWindow: 'Aug 8–18',

}; // end SKY_DATA
