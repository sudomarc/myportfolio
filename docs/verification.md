# Verification Log

## Refonte contrôlée — système motion / thème / langue (2026-09-23)

### Automated checks (exécutés)

- `node scripts/verify.mjs` — **PASS** (8 pages HTML, 18 liens internes,
  aucun artefact framework, zéro style inline, zéro script inline, CSP
  présente, reveal fail-safe présent, no eval, no fetch).
- Contrôle i18n (script éphémère) : **0 clé manquante** — chaque
  `data-i18n*` référencé dans les pages existe dans le dictionnaire FR et EN.
- Contrôle contraste (script éphémère, WCAG relative luminance) :
  **AA ≥ 4.5:1** sur les couples texte/fond principaux (texte, texte-2,
  accent sur fond), en sombre comme en clair (dont 5.49:1 pour
  `--accent` clair sur fond clair).
- Route checker (serveur statique éphémère) : **14/14 routes → 200**
  (pages, assets, robots, favicon).

### Dark mode fix (2026-09-23)

Problème réel identifié : sur première visite **sans valeur `localStorage`**,
`theme.js` (bloqueur FOUC dans `<head>`) ne posait aucune `data-theme`, donc le
rendu initial restait sur `:root` (sombre) **même quand le système préfère le
clair** ; en plus, `init()` appelait `applyTheme(tryLocal("theme"))` →
`applyTheme(null)` supprimait l'attribut et verrouillait le thème sombre par
défaut au lieu du thème système.

Correctifs :

- `theme.js` : pose désormais `data-theme="dark|light"` d'après
  `prefers-color-scheme` quand `localStorage.theme` est absent.
- `script.js` `init()` : `applyTheme(effectiveTheme())` (préférence stockée OU
  système) au lieu de `applyTheme(tryLocal("theme"))` (null-able).
- Vérifié en navigateur headless (Edge) : sans localStorage + système clair →
  `<html data-theme="light">`. Le toggle manuel et la persistance suivent les
  chemins changés depuis (logique inchangée, déjà testée à la refonte).

### Hero 3D — implémentation & statique (2026-09-23)

- `hero.js` : parallaxe pointer/scroll, particules canvas, MutationObserver
  sur `data-theme`, gating `prefers-reduced-motion`. Vérifié `node --check`
  + chargement réel en headless : **les 6 wrappers `.h-layer` reçoivent un
  `transform` (boucle rAF active)** et **le canvas est dimensionné**.
- CSS : tous les keyframes référencés sont définis, toutes les `var(--*)`
  utilisées existent dans les tokens, aucune ressource distante, toutes les
  classes du HTML héros sont stylées (hors hooks JS documentés).
- CSP : `hero.js` est un module externe same-origin, autorisé par
  `script-src 'self'` ; aucun `style=` inline (les animations sont en CSS).

### Browser verification (exécutée)

- Edge headless (`--dump-dom`, `--virtual-time-budget`) sur `/` :
  - `html lang="fr"`, `data-theme` posé, `motion-ready` actif,
  - bouton thème avec aria-label traduit, h1 unique,
  - textes i18n appliqués (aucun placeholder `{...}` restant),
  - scene/orbit/content présents, transforms JS présents.

### Feature verification — restant à exécuter (non exécuté ici)

- Toggle thème manuel (clic) → bascule + persistance localStorage + resample
  des particules (MutationObserver), dans les deux langues.
- Langue : boutons FR/EN → swap complet, persiste, `<html lang>` à jour.
- Parallaxe perceptible selon profondeur sur 1440px / tablette / mobile ;
  entrance stagger visible sans clignotement ; script 3D absent sur les pages
  hors accueil (ce qui est voulu — la scène n'existe que sur `/`).
- `prefers-reduced-motion` : rAF coupé, canvas masqué, animations neutralisées.
- Console sans erreur au chargement (à confirmer dans un navigateur interactif).

Ne pas marquer une vérification VERIFIED tant qu'elle n'a pas été exécutée et
son résultat observé.

## Vérification statique initiale (2026-09-23)

- `node scripts/verify.mjs` — **PASS** (mêmes critères ci-dessus).
- Route checker (`serve-and-check.mjs`) — **15/15 OK**.

## Pré-publication — contenu et cohérence (2026-09-23)

### Sources consultées
- Dépôt sudomarc/myportfolio.
- Dépôts projet sudomarc/amplio-web, sudomarc/Interact-Conakry et sudomarc/CrazyCook.
- Pages Notion liées aux projets et au parcours technique.

### Corrections appliquées
- Profil public : sudomarc · étudiant en informatique · Web Dev · Conakry, Guinée.
- WhatsApp configuré : +224 628 016 9479.
- GitHub public : github.com/sudomarc.
- Les anciens case studies fictifs ont été remplacés par Interact-Conakry et CrazyCook.
- Contexte, contraintes, décisions, solutions et absence de métriques renseignés selon les éléments disponibles.
- Stack Amplio corrigée d’après le dépôt réel : HTML, CSS, JavaScript, Three.js.
- Thème : la préférence système claire n’écrase plus un data-theme explicite.

### État de vérification de cette passe
- Contrôle par lecture des fichiers GitHub : effectué.
- Cohérence des clés data-i18n* contre le dictionnaire script.js : 0 clé manquante sur les fichiers contrôlés.
- Aucun placeholder éditorial actif dans les fichiers contrôlés.
- Les anciens case studies fictifs ne sont plus présents dans les fichiers courants.
- node scripts/verify.mjs après ces derniers changements : NON EXÉCUTÉ dans cet environnement.
- Vérification navigateur interactive après ces derniers changements : NON EXÉCUTÉE.
- Vérification des URLs de production des projets : NON VÉRIFIÉE.
- Captures réelles des case studies : NON INTÉGRÉES.
- Informations juridiques complètes et URL de production du portfolio : À VÉRIFIER AVANT PUBLICATION.

Ne pas considérer la release comme publiée ou complètement vérifiée tant que les points NON EXÉCUTÉ / NON VÉRIFIÉ ci-dessus ne sont pas traités.