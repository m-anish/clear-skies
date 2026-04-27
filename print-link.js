// ─────────────────────────────────────────────────────────────────────────────
// print-link.js — Clear Skies print edition download icon button
//
// Injects a 54px circle icon button (matching nightmode/log bubbles) when a
// PDF exists at ./output/clear-skies-[month]-[year].pdf. Positioned
// bottom-left above the ← prev-month pill. No text — tooltip on hover only.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  function waitForData(cb, elapsed) {
    elapsed = elapsed || 0;
    if (window.SKY_DATA) { cb(window.SKY_DATA); return; }
    if (elapsed > 6000)  { return; }
    setTimeout(function () { waitForData(cb, elapsed + 50); }, 50);
  }

  // ── Inject CSS ────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '#pdf-bubble {',
    '  position: fixed;',
    '  bottom: 110px;',
    '  right: 16px;',
    '  z-index: 500;',
    '  width: 54px;',
    '  height: 54px;',
    '  border-radius: 50%;',
    '  background: rgba(20,20,50,0.92);',
    '  backdrop-filter: blur(14px);',
    '  border: 2px solid rgba(64,192,160,0.45);',
    '  box-shadow: 0 2px 20px rgba(0,0,0,0.6);',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  cursor: pointer;',
    '  text-decoration: none;',
    '  color: rgba(64,192,160,0.85);',
    '  opacity: 0;',
    '  pointer-events: none;',
    '  transition: background .3s, border-color .3s, box-shadow .3s, transform .15s, opacity .3s;',
    '  -webkit-tap-highlight-color: transparent;',
    '  user-select: none;',
    '}',
    '#pdf-bubble.visible {',
    '  opacity: 1;',
    '  pointer-events: auto;',
    '}',
    '#pdf-bubble:hover  { transform: scale(1.1); border-color: rgba(64,192,160,0.8); }',
    '#pdf-bubble:active { transform: scale(0.92); }',
    '#pdf-bubble svg { display: block; }',
    '/* Tooltip — appears to the right since button is on the left edge */',
    '#pdf-bubble::after {',
    '  content: "Print edition";',
    '  position: absolute;',
    '  right: calc(100% + 10px);',
    '  top: 50%;',
    '  transform: translateY(-50%);',
    '  background: rgba(9,9,15,0.95);',
    '  border: 1px solid rgba(64,192,160,0.3);',
    '  border-radius: 6px;',
    '  padding: 5px 11px;',
    '  font-family: var(--sans, sans-serif);',
    '  font-size: 11px;',
    '  color: rgba(64,192,160,0.85);',
    '  letter-spacing: .04em;',
    '  white-space: nowrap;',
    '  opacity: 0;',
    '  pointer-events: none;',
    '  transition: opacity .2s;',
    '}',
    '#pdf-bubble:hover::after { opacity: 1; }',
    'body.red-sky #pdf-bubble {',
    '  background: rgba(60,8,0,0.94);',
    '  border-color: rgba(255,80,30,0.5);',
    '  box-shadow: 0 0 22px rgba(255,50,10,0.4), 0 2px 8px rgba(0,0,0,0.55);',
    '  color: rgba(255,100,60,0.85);',
    '}',
    'body.red-sky #pdf-bubble:hover { border-color: rgba(255,100,50,0.88); }',
    'body.red-sky #pdf-bubble::after {',
    '  border-color: rgba(255,80,30,0.35);',
    '  color: rgba(255,120,80,0.85);',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // ── Build circle button ───────────────────────────────────────────────────
  var btn = document.createElement('a');
  btn.id = 'pdf-bubble';
  btn.setAttribute('aria-label', 'Download print edition PDF');
  btn.title = 'Download print edition';

  // Document-with-fold + downward arrow — uses currentColor for theme/redshift
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" ' +
    'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ' +
    'stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" ' +
    'fill="currentColor" stroke="none" opacity=".3"/>' +
    '<polyline points="14 2 14 8 20 8"/>' +
    '<line x1="12" y1="10" x2="12" y2="16"/>' +
    '<polyline points="9.5 13.5 12 16 14.5 13.5"/>' +
    '</svg>';

  document.body.appendChild(btn);

  // ── Probe + show ─────────────────────────────────────────────────────────
  waitForData(function (d) {
    var month   = (d.month || '').toLowerCase();
    var year    = d.year  || '';
    var pdfPath = './output/clear-skies-' + month + '-' + year + '.pdf';

    btn.href     = pdfPath;
    btn.download = 'clear-skies-' + month + '-' + year + '.pdf';

    fetch(pdfPath, { method: 'HEAD' })
      .then(function (res) {
        if (res.ok) {
          btn.classList.add('visible');
          console.log('[print-link.js] PDF available:', pdfPath);
        }
      })
      .catch(function () {});
  });

})();
