# Verification Log

## Static site verification (2026-09-23)

### Automated checks

- `node scripts/verify.mjs` — **PASS** (8 pages HTML, 17 internal links checked,
  no framework artifacts, no inline styles, no inline scripts, CSP present)
- Route checker (`serve-and-check.mjs`) — **15/15 OK** (all routes 200/404 as expected,
  `/script.js` served, `/styles.css` served, `/icon.svg` served, `/robots.txt` served)

### CSP audit

- Strict `script-src 'self'` — all scripts are external (`/theme.js`, `/script.js`).
  Theme FOUC prevention is handled by blocking `<script src="/theme.js">` in `<head>`.
- Strict `style-src 'self'` — zero inline `style=` attributes (stagger delays use CSS
  `:nth-child()` rules instead).
- Zero `<script>` without `src`; zero `javascript:` URIs; zero external links.

### Feature verification (needs browser, see list below)

- Theme toggle (dark/light) persists in localStorage.
- Language switch (FR/EN) persists in localStorage and sets `lang` attribute.
- Scroll reveals fire on entry (IntersectionObserver).
- View Transitions work on Chrome 126+/Safari 18.2+/Firefox 147+.
- Reduced motion disables reveals and View Transitions.
- Navigation works without JS (static links).
- Mobile menu (native `<details>`) works without JS.
- Focus-visible states visible.
- Skip link works.
- WhatsApp links activate when number is configured.

Do not mark a check VERIFIED until it has been executed and its result observed.