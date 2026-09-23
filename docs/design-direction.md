# Design Direction

## Thesis

Portfolio éditorial sombre, précis et documentaire — maîtrisé, sans effet
décoratif qui n'explique rien.

Le site doit ressembler davantage à un carnet de projets / studio numérique
qu'à un template de freelance. Le hero porte une scène 3D immersive
procédurale (CSS 3D transforms + particules canvas, zéro framework, zéro
asset) qui donne de la profondeur et une identité technique, sans dégrader
la lecture ni le contenu.

## Audience

Visiteur qui veut répondre rapidement à trois questions :
1. Qui est Marco ?
2. Qu'a-t-il réellement construit ?
3. Comment le contacter ?

## Visual language

- Fond presque noir (dark par défaut), thème clair comme vraie direction
  (fonds chauds, accents profonds), pas une simple inversion.
- Typographie système sans serif, expressive par la taille (échelle `display`
  clampée), pas par un duo de polices tendance. Aucune police distante (CSP).
- Micro-labels monospace (`--font-mono`) réservés aux métadonnées techniques.
- Une seule couleur d'accent (`--accent`) au besoin, jamais de rainbow gradient.
- Bordures fines uniformes (`--border` / `--border-strong`), surfaces sobres
  (`--surface-1`, `--surface-2`), pas de glassmorphism systématique (le seul
  `backdrop-filter` est fonctionnel : lisibilité du header sticky).
- Le hero combine deux signatures : la **scène 3D** (satellite orbital,
  anneaux, structures filaires, panneaux flottants, particules — toutes
  décoratives, `aria-hidden`, alimentées par tokens thème) et le **panneau
  éditorial des projets** (index panel), conservé comme signature de contenu.
- Numérotation et métadonnées monospace pour l'identité éditoriale.
- Motion : brève pour les changements d'état ; parallaxe pointer/scroll et
  animation ambiante confinées à la scène décorative du hero (jamais sur le
  contenu, jamais sur les contrôles).

## Tokens

Tout vit dans des Custom Properties de `styles.css` : rayons (8/14/22/pill),
spacing (0.25 → 6rem), échelle typographique, et 4 durées de motion
(`--dur-micro: 120ms`, `--dur-fast: 160ms`, `--dur-med: 320ms`,
`--dur-slow: 540ms`) avec 3 easings (`standard`, `soft`, `emphasis`).

Aucune valeur magique en dur dans les composants (durées, rayons, espacements,
contrastes) hors usage ponctuel justifié.

## Theme (dark / light)

Système de tokens `:root` (dark par défaut) surchargé par
`@media (prefers-color-scheme: light)` et par `[data-theme="light"]`. Le choix
utilisateur est persisté dans `localStorage` (`theme`). Sans choix explicite,
le thème suit le système (`theme.js` bloque le FOUC dans `<head>`).

Contrôles **statiques dans le HTML** de chaque page (pas d'injection JS) :
bouton thème réel (`<button id="theme-toggle">`) et commutateur FR/EN
segmenté (`aria-pressed`). Sans JavaScript, le thème système et le texte FR
s'appliquent ; les boutons restent présents mais inertes par défaut.

Contrastes vérifiés : tous les couples texte/fond principaux passent AA
(≥ 4.5:1) en sombre comme en clair, y compris `--text-3`, `--accent` sur fond,
et `--accent-fg` sur `--accent` (bouton de langue actif).

## Language (FR / EN)

Même URL + préférence locale (`lang` dans localStorage). FR est la langue par
défaut quand JavaScript est désactivé. Le switch (boutons FR/EN statiques) se
trouve dans le header. `document.documentElement.lang` est mis à jour, ainsi
que les `<title>`, meta descriptions, aria-labels et statuts (`data-i18n-*`).

## Motion

Règle : une animation doit expliquer une transition, une hiérarchie, un
changement d'état ou une continuité — jamais divertir.

- Reveals : opacité + translation 12px, `--dur-med`, stagger 50ms max
  (via `:nth-child`, pas de style inline). Fail-safe : le contenu est visible
  par défaut ; `.motion-ready` n'est ajouté par `script.js` que si
  IntersectionObserver est disponible. Désactivés sous
  `prefers-reduced-motion`.
- Hero 3D : parallaxe pointer/scroll (coefficients par profondeur, lerp,
  une seule boucle `requestAnimationFrame`), gérés par `hero.js` sur les
  wrappers `.h-layer` (le transform JS ne touche jamais les visuels).
  L'entrée (stagger `scene-in`) et l'ambiance (breathe / ring spin / float /
  drift / crosshair-pulse) sont en CSS animé uniquement sur les éléments
  décoratifs — fail-safe : toute la scène est `aria-hidden` et lisible sans JS.
  Couleurs partagées via tokens (`--accent`, `--core-high`, `--core-depth`) ;
  `hero.js` réécoute les changements de `data-theme` (MutationObserver) pour
  resampler la couleur des particules.
- View Transitions natives (`@view-transition { navigation: auto }`) en
  amélioration progressive.
- Micro-interactions : hover/active sur liens et boutons CNL state-meaningful.
- `prefers-reduced-motion` : stop de la boucle rAF, canvas masqué, animations
  CSS forcées à 0.01ms par la règle globale.
- Durées centralisées dans les tokens (aucune valeur magique).

## Hero 3D scene (architecture)

- `.hero-scene` (absolute, `z-index: -1`, isolé, `perspective`) héberge les
  wrappers `.h-layer` — transformés en JS (parallaxe).
- Chaque wrapper contient un visuel CSS : `hero-bg` (gradients + grille
  masquée), `hero-atmos` (halos), `hero-far` (anneau filaire + cube),
  `hero-mid` (panneaux), `hero-primary` (orbit : core + anneaux + crosshair),
  `hero-fore` (petites formes). Les `transform-style: preserve-3d` enchaînent
  les plans pour un vrai rendu 3D imbriqué.
- `.hero-particles` : canvas 2D, 60 particules, dérive + légère attraction au
  pointer, couleur lue dans `--accent` (thème-aware), DPR-aware.
- Contenu (`hero-grid` + `index-panel`) : `z-index: 1`, jamais animé au
  pointer. Sur mobile (<768px), la scène est réduite et repoussée en bordure
  pour laisser la priorité au texte.

## Responsive priorities

- Contenu et CTA immédiatement visibles sur mobile.
- Navigation compacte (menu `<details>` natif, zéro JS requis).
- Projets lisibles sans scroll horizontal.
- Sections 2 colonnes dès 768px, capabilities 3 colonnes à 1024px, process
  5 colonnes à 768px.
- Aucun effet visuel ne doit devenir une condition d'utilisation.

## Anti-vibe gate

Revue anti-vibe (`.ai/skills/anti-vibe-design`) appliquée sur la surface
modifiée : la scène 3D reste une seule idée cohérente en profondeur (jamais
d'empilement de patterns tendance — pas de glassmorphism de masse, pas de duo
de polices, pas de grain/noise, pas de cursor custom), limitée au hero et
clairement séparée du contenu. La parallaxe a une justification fonctionnelle
(cue de profondeur), l'ambiance CSS n'est jamais pointer-tracking et tout est
coupé sous `prefers-reduced-motion`. Le blur du header et les reveals gardent
leur justification documentée.

IMPROVE, pas REMOVE : la refonte 3D a étendu la direction éditoriale existante
(tokens uniques, panneaux éditoriaux, contraste AA) au lieu de la remplacer.

## Content principle

Une affirmation publique doit être vraie et vérifiable, ou explicitement
marquée Demo / Concept / Placeholder.