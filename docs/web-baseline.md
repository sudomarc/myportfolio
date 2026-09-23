# Web Project Baseline

| Surface | État | Décision |
|---|---|---|
| Architecture de l'information | APPLICABLE | Homepage + études de cas + pages légales |
| Shell partagé | REQUIRED | Header + skip link + footer |
| Source de contenu | REQUIRED | data/projects.ts + lib/site.ts |
| Formulaire | DEFERRED | Aucun formulaire avant choix du canal de contact |
| Cookies / storage | REQUIRED audit | localStorage pour thème, langue et fermeture du bandeau ; aucun cookie du portfolio |
| Consentement | NOT APPLICABLE | Bandeau informatif uniquement ; aucun tracking non essentiel implémenté |
| Pages légales | REQUIRED | Placeholder explicite jusqu'à finalisation |
| SEO | REQUIRED | Metadata + robots + sitemap |
| Accessibilité | REQUIRED | Sémantique native + clavier + focus + reduced motion |
| Responsive | REQUIRED | Mobile-first, tablette, desktop |
| Motion | APPLICABLE | Reveals + parallaxe hero, kinetic défini, reduced motion |
| 3D / WebGL | APPLICABLE | Scène 3D CSS (transforms) + particules canvas, zéro WebGL/asset, `aria-hidden`, fallback statique, cut reduced-motion |
| Assets tiers | APPLICABLE | Aperçus de projets via iframes GitHub Pages ; provenance/licence à documenter |
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

Aucun analytics, pixel, session replay, cookie, sessionStorage, IndexedDB ou service worker n'est implémenté. Le site utilise localStorage pour le thème, la langue et l'état de fermeture du bandeau informatif. Les aperçus de projets visibles sur la page d'accueil sont chargés depuis des sites externes dans des iframes.

Cette affirmation devra être revérifiée au moment de chaque intégration.