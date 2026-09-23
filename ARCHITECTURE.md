# Architecture

## Principes

Le site est principalement statique. Le contenu éditorial est versionné dans le dépôt.

## Routes

- `/` — homepage
- `/work/[slug]` — étude de cas
- `/mentions-legales` — informations légales
- `/confidentialite` — politique de confidentialité
- `/cookies` — politique cookies

## Code

```
app/
components/
data/
docs/
lib/
public/
```

### app/

Routing, metadata, styles globaux et fichiers spéciaux Next.js.

### components/

Composants visuels réutilisables.

### data/

Données éditoriales typées. Aucun texte métier important ne doit être enfoui dans une logique complexe.

### lib/

Configuration du site et utilitaires purs.

### public/

Assets statiques vérifiés.

## Rendering

Server Components par défaut. Un Client Component doit avoir une raison explicite : état local, événement navigateur, API Web ou interaction inaccessible autrement.

## SEO

Metadata globale dans `app/layout.tsx`, sitemap dans `app/sitemap.ts`, robots dans `app/robots.ts`.

## Déploiement

Cible : Vercel. Le projet ne dépend pas d'un serveur applicatif persistant.
