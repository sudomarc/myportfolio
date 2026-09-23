# Web Project Baseline

| Surface | État | Décision |
|---|---|---|
| Architecture de l'information | APPLICABLE | Homepage + études de cas + pages légales |
| Shell partagé | REQUIRED | Header + skip link + footer |
| Source de contenu | REQUIRED | data/projects.ts + lib/site.ts |
| Formulaire | DEFERRED | Aucun formulaire avant choix du canal de contact |
| Cookies / storage | REQUIRED audit | Aucun stockage applicatif prévu au stade initial |
| Consentement | NOT APPLICABLE (initial) | Aucun tracking non essentiel implémenté |
| Pages légales | REQUIRED | Placeholder explicite jusqu'à finalisation |
| SEO | REQUIRED | Metadata + robots + sitemap |
| Accessibilité | REQUIRED | Sémantique native + clavier + focus + reduced motion |
| Responsive | REQUIRED | Mobile-first, tablette, desktop |
| Motion | APPLICABLE | Reveals + parallaxe hero, kinetic défini, reduced motion |
| 3D / WebGL | APPLICABLE | Scène 3D CSS (transforms) + particules canvas, zéro WebGL/asset, `aria-hidden`, fallback statique, cut reduced-motion |
| Assets tiers | APPLICABLE | Provenance/licence à documenter |
| Sécurité navigateur | REQUIRED | Headers de base + absence de secrets client |
| Performance | REQUIRED | Mesure avant optimisation |
| Loading/empty/error/success | DEFERRED | Ajoutés lorsqu'une fonctionnalité dynamique apparaît |
| Hébergement | DEFERRED | Vercel prévu, non encore vérifié en production |
| Browser QA | REQUIRED before release | À exécuter sur le site local puis public |
| Release evidence | REQUIRED | Documenter vérifications et éléments non vérifiés |

## Routes initiales

- / : présenter l'identité et les preuves principales.
- /work/[slug] : documenter un projet.
- /mentions-legales : informations légales.
- /confidentialite : traitement des données.
- /cookies : inventaire et politique de cookies.
- 404 : récupération après URL invalide.

## Current technical inventory

Aucun analytics, pixel, session replay, localStorage, sessionStorage, IndexedDB, service worker ou embed tiers n'est prévu dans le squelette initial.

Cette affirmation devra être revérifiée au moment de chaque intégration.