# Personal Portfolio

Portfolio personnel orienté **preuve de travail, crédibilité et contact**.

Site **100 % statique** : HTML, CSS et JavaScript vanilla — aucun framework, aucune dépendance runtime.

## Stack

- HTML5 sémantique
- CSS natif (design tokens dans `styles.css`)
- JavaScript vanilla (progressive enhancement)
- Déploiement cible : Vercel

## Démarrage

Aucune installation requise.

Depuis la racine du projet :

```bash
npx serve .
```

Ou avec Python :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 (ou http://localhost:3000 selon l'outil).

## Gouvernance

Lire [AGENTS.md](./AGENTS.md) avant toute modification importante.

La roadmap active est dans [ROADMAP.md](./ROADMAP.md).

Le PIPE de développement obligatoire est décrit dans [AGENTS.md](./AGENTS.md) et doit être suivi pour tout travail substantiel.

## Documentation

- [Architecture](./ARCHITECTURE.md)
- [Roadmap](./ROADMAP.md)
- [Content plan](./docs/content-plan.md)
- [Case-study template](./docs/project-case-study-template.md)
- [Design direction](./docs/design-direction.md)
- [Web baseline](./docs/web-baseline.md)
- [Cookies / stockage](./docs/cookies-and-storage.md)
- [Vérification](./docs/verification.md)

## Vérification

```bash
node scripts/verify.mjs
```

Puis contrôle manuel des routes via un serveur statique (voir `docs/verification.md`).

## Contact

Aucun secret ni variable d'environnement n'est nécessaire.

Le numéro WhatsApp se configure directement dans `script.js` (`SITE_CONFIG.whatsappNumber`).