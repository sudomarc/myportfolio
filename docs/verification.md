# Verification Log

## Refonte contrôlée — système motion / thème / langue (2026-09-23)

### Automated checks (exécutés)

- `node scripts/verify.mjs` — **PASS** (8 pages HTML, 17 liens internes,
  aucun artefact framework, zéro style inline, zéro script inline, CSP
  présente, reveal fail-safe présent, no eval, no fetch).
- Contrôle i18n (script éphémère) : **0 clé manquante** — chaque
  `data-i18n*` référencé dans les pages existe dans le dictionnaire FR et EN.
- Contrôle contraste (script éphémère, WCAG relative luminance) :
  **14/14 paires ≥ 4.5:1** (AA), en sombre et en clair.
- Route checker (serveur statique éphémère) : **14/14 routes → 200**
  (pages, assets, robots, favicon).

### Changements de `scripts/verify.mjs` dans cette refonte

- Le regex du `<title>` accepte désormais un attribut
  (`<title data-i18n="...">`) — les titres sont traduits.
- Le garde-fou du sélecteur reveal attend la forme réelle
  `querySelectorAll(".reveal, [data-reveal]")` (sans backslashes littéraux,
  qui ne matchent aucun DOM). Cette correction est vérifiable dans
  `script.js` : la chaîne y figure telle quelle.

### CSP audit

- Strict `script-src 'self'` — tous les scripts sont externes
  (`/theme.js`, `/script.js`). FOUC évité par le blocant `<script src="/theme.js">`
  dans `<head>`.
- Strict `style-src 'self'` — zéro attribut `style=` inline (stagger via
  `:nth-child` ; les icônes du toggle sont des SVG inline CSP-safe fournis
  par `script.js`, pas du style inline).
- Zéro `<script>` sans `src` ; zéro URI `javascript:` ; zéro lien externe.
- Les icônes soleil/lune sont injectées via `innerHTML` par `updateThemeButton`
  (SVG inline dans `script.js`, autorisé par `script-src 'self'`).

### Feature verification — à exécuter en navigateur (non exécuté ici)

- Thème : toggle → bascule dark/light, persiste dans `localStorage`, icône et
  aria-label synchronisés dans la langue active.
- Langue : boutons FR/EN → swap complet, persiste, `<html lang>` mis à jour,
  bouton actif (segment accentué) et `aria-pressed` à jour.
- Reveals : se déclenchent à l'entrée (IntersectionObserver) ; rien ne se
  passe sans JS (contenu visible) ; `prefers-reduced-motion` les désactive.
- View Transitions : Chrome 126+/Safari 18.2+/Firefox 147+.
- Navigation sans JS (liens statiques), menu mobile `<details>` natif, skip
  link, focus-visible.
- WhatsApp : liens activés dès qu'un numéro est configuré.

Ne pas marquer une vérification VERIFIED tant qu'elle n'a pas été exécutée et
son résultat observé.

## Vérification statique initiale (2026-09-23)

- `node scripts/verify.mjs` — **PASS** (mêmes critères ci-dessus).
- Route checker (`serve-and-check.mjs`) — **15/15 OK**.