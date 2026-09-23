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
