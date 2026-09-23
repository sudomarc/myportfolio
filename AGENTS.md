# AGENTS.md

## Mission

Construire un portfolio personnel crédible, rapide, accessible et orienté prise de contact.

## Règles de vérité

- Ne jamais inventer de client, mission, compétence, métrique, témoignage ou résultat.
- Toute réalisation fictive doit être explicitement marquée **Concept**, **Demo** ou **Exploration**.
- Ne pas transformer une intention en résultat mesuré.
- Les placeholders doivent rester visibles jusqu'à remplacement par une donnée réelle.

## Produit

Le portfolio sert trois objectifs dans cet ordre :

1. Comprendre immédiatement qui je suis et ce que je construis.
2. Voir des preuves concrètes de travail.
3. Me contacter avec un minimum de friction.

## Design

- Mobile-first.
- Hiérarchie visuelle forte.
- Peu de couleurs.
- Contrastes accessibles.
- Rayons et espacements cohérents.
- Animations brèves et fonctionnelles.
- Pas d'effets décoratifs permanents qui nuisent à la lecture.

## Ingénierie

- Next.js App Router.
- Server Components par défaut.
- Client Components uniquement lorsque l'interaction navigateur l'exige.
- Préférer les primitives CSS aux bibliothèques d'animation lourdes.
- Utiliser `next/image` pour les vraies images.
- Les URLs, textes et données de projets doivent rester séparés des composants.
- Toute modification importante doit conserver `npm run lint`, `npm run typecheck` et `npm run build` fonctionnels.

## Workflow

1. Lire la roadmap.
2. Identifier le plus petit changement utile.
3. Implémenter.
4. Vérifier lint + types + build.
5. Inspecter le diff.
6. Mettre à jour la documentation si le comportement ou l'architecture change.

## Git

Préférer des commits atomiques :

- `feat:` nouvelle fonctionnalité
- `fix:` correction
- `refactor:` restructuration sans changement fonctionnel
- `content:` contenu
- `design:` interface
- `docs:` documentation
- `chore:` outillage

## Ne pas faire

- Ne pas introduire une dépendance pour un effet facilement réalisable en CSS.
- Ne pas ajouter de faux témoignages.
- Ne pas afficher de prix ou métriques non validés.
- Ne pas supprimer un placeholder sans le remplacer par une donnée réelle.

## Mandatory Vibe Coding Instructions integration

This project **MUST use** the governance system from:

- Repository: https://github.com/sudomarc/vibe-coding-instructions
- Local project-specific copy, when vendored: `.ai/`
- Upstream project entry point: `AGENTS.md`

### Non-optional bootstrap

Before any development task that changes code, UI, configuration, content structure, dependencies, security, deployment, or architecture:

1. Read this `AGENTS.md`.
2. Load the applicable rules from **Vibe Coding Instructions**.
3. For public-web work, load the applicable web baseline and specialist skill(s), beginning with `.ai/skills/web-project-baseline/SKILL.md` when a local copy exists.
4. Inspect the repository state, relevant files, manifests and existing project evidence.
5. Plan the change according to the Vibe Coding Instructions operating loop.
6. Implement the smallest coherent change.
7. Run the required verification for the changed surface.
8. Review the final diff/status before reporting completion.

### Enforcement rule

Using Vibe Coding Instructions is a **development prerequisite**, not an optional recommendation.

If the applicable Vibe Coding Instructions context is unavailable, do **not** start substantive implementation. Stop after inspection and report exactly which required governance context is missing.

Do not replace the framework with a simplified personal workflow when the framework contains an applicable rule or skill.

### Required web-development routing

For substantial web work, follow this order unless a narrower task clearly makes a step inapplicable:

`BASELINE → DESIGN DIRECTION → ARCHITECTURE → IMPLEMENT → BROWSER VERIFY → SPECIALIST REVIEW → FINAL DIFF`

Use the narrowest applicable Vibe Coding Instructions skill(s), especially for:

- `.ai/skills/web-project-baseline/`
- `.ai/skills/design-direction/`
- `.ai/skills/design-system/`
- `.ai/skills/anti-vibe-design/`
- `.ai/skills/responsive-design/`
- `.ai/skills/interaction-motion/`
- `.ai/skills/accessibility/`
- `.ai/skills/seo-web/`
- `.ai/skills/web-security/`
- `.ai/skills/web-performance/`
- `.ai/skills/browser-qa/`
- `.ai/skills/legal-compliance/`
- `.ai/skills/nextjs/`

Do not load every skill by default. Route by changed surface and risk.

### Conflict and precedence

System, developer, and current user instructions take precedence over repository instructions. Within repository policy, this file and the applicable Vibe Coding Instructions rules must both be followed; the more specific applicable rule wins.

If a material conflict remains unresolved, do not guess. Surface the conflict.

### Evidence requirement

Never claim that Vibe Coding Instructions, tests, builds, browser checks, audits, or deployments were used or completed unless there is evidence that they actually were.

### Vendored governance

The applicable Vibe Coding Instructions skills are vendored under .ai/ in this repository. Prefer the vendored copy for development so governance is available offline and versioned with the project.

When a task affects a governed surface, read the relevant local .ai/skill before implementation. Changes to Vibe Coding governance itself require an explicit task and separate review.
