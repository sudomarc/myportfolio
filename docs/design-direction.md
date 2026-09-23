# Design Direction

## Thesis

Portfolio éditorial sombre, précis et documentaire — premium, cinématique,
maîtrisé.

Le site doit ressembler davantage à un carnet de projets / studio numérique
qu'à un template de freelance.

## Audience

Visiteur qui veut répondre rapidement à trois questions :
1. Qui est Marco ?
2. Qu'a-t-il réellement construit ?
3. Comment le contacter ?

## Visual language

- Fond presque noir (dark par défaut).
- Typographie sans serif neutre et expressive par la taille, pas par un duo
  de polices tendance.
- Micro-labels monospace réservés aux métadonnées techniques.
- Une seule couleur d'accent au besoin, jamais de rainbow gradient.
- Grandes zones de respiration.
- Grille éditoriale asymétrique lorsque cela améliore la hiérarchie.
- Bordures fines et surfaces sobres plutôt que glassmorphism systématique.
- Images de projets grandes et dominantes.
- Numérotation et métadonnées pour créer une identité éditoriale.
- Motion intentionnelle (reveals, transitions, micro-interactions).

## Theme (dark / light)

Système de tokens CSS custom properties sur `[data-theme="dark"]` et
`[data-theme="light"]`. `prefers-color-scheme` détermine le thème initial
lorsqu'aucun choix explicite n'existe. Le choix utilisateur est persisté dans
`localStorage` (`theme`). Le toggle se trouve dans le header.

Le thème clair est une véritable direction light (fonds chauds, accents
profonds), pas une simple inversion.

## Language (FR / EN)

Option A : même URL + préférence locale (`lang` dans localStorage).
FR est la langue par défaut quand JavaScript est désactivé.
Le switch se trouve dans le header (boutons FR/EN).
`document.documentElement.lang` est mis à jour.

## Motion

Motion doit expliquer une transition, une hiérarchie, un changement d'état
ou une continuité entre liste et étude de cas.

Durées : micro (120ms), fast (200ms), medium (350ms), slow (500ms).
Easing : `--ease-standard`, `--ease-soft`, `--ease-emphasis`.
Propriétés privilégiées : `transform`, `opacity`.

Toute animation possède un état `prefers-reduced-motion`.

## Responsive priorities

- Contenu et CTA immédiatement visibles sur mobile.
- Navigation compacte (menu `<details>`).
- Projets lisibles sans scroll horizontal.
- Métadonnées secondaires masquables avant le contenu principal.
- Aucun effet visuel ne doit devenir une condition d'utilisation.

## Content principle

Une affirmation publique doit être vraie et vérifiable, ou explicitement
marquée Demo / Concept / Placeholder.