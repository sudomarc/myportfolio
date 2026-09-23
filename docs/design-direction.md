# Design Direction

## Thesis

Portfolio éditorial sombre, précis et documentaire — maîtrisé, sans effet
décoratif qui n'explique rien.

Le site doit ressembler davantage à un carnet de projets / studio numérique
qu'à un template de freelance.

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
- Une seule idée distinctive dans le hero : le panneau éditorial des projets
  (index panel), choix assumé et conservé comme unique signature visuelle.
- Numérotation et métadonnées monospace pour l'identité éditoriale.
- Motion brève, fonctionnelle, jamais permanente ni pointer-tracking.

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
- View Transitions natives (`@view-transition { navigation: auto }`) en
  amélioration progressive.
- Micro-interactions : hover/active sur liens et boutons CNL state-meaningful.
- Durées centralisées dans les tokens (aucune valeur magique).

## Responsive priorities

- Contenu et CTA immédiatement visibles sur mobile.
- Navigation compacte (menu `<details>` natif, zéro JS requis).
- Projets lisibles sans scroll horizontal.
- Sections 2 colonnes dès 768px, capabilities 3 colonnes à 1024px, process
  5 colonnes à 768px.
- Aucun effet visuel ne doit devenir une condition d'utilisation.

## Anti-vibe gate

Revue anti-vibe (`.ai/skills/anti-vibe-design`) appliquée sur la surface
modifiée : aucun pattern tendance empilé (pas de gradient, pas de
glassmorphism de masse, pas de duo de polices tendance, pas de pointer FX,
pas de grain/noise). Les deux effets retenus (blur du header, reveals) ont une
justification fonctionnelle documentée et un état `prefers-reduced-motion`.

## Content principle

Une affirmation publique doit être vraie et vérifiable, ou explicitement
marquée Demo / Concept / Placeholder.