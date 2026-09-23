# Personal Portfolio

Portfolio personnel orienté **preuve de travail, crédibilité et contact**.

Le site doit présenter :
- une identité claire ;
- des projets réels et des démos ;
- des études de cas lisibles ;
- les compétences et le parcours sans survente ;
- un contact direct, notamment via WhatsApp lorsque le numéro est configuré.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Déploiement cible : Vercel

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner les valeurs nécessaires.

## Structure

```
app/                 # routes et métadonnées Next.js
components/          # composants réutilisables
data/                # contenu structuré
docs/                # décisions, contenu et templates
lib/                 # utilitaires/configuration
public/              # assets statiques
```

## Gouvernance

Lire [AGENTS.md](./AGENTS.md) avant toute modification importante.

La roadmap active est dans [ROADMAP.md](./ROADMAP.md).

## État initial

Le dépôt contient actuellement le squelette du produit. Le design final, les contenus définitifs, les vrais assets et les URLs de production restent à compléter.

## Principes

1. Ne jamais inventer une expérience, un client, une métrique ou un résultat.
2. Chaque projet montré doit être vérifiable ou explicitement présenté comme une démo/concept.
3. Mobile-first.
4. Performance et accessibilité avant les effets décoratifs.
5. Les animations doivent renforcer la hiérarchie visuelle, jamais la remplacer.
