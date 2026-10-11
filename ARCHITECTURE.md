# Architecture

## Principes

Site **100 % statique** : HTML, CSS et JavaScript vanilla.

- Aucun framework (Next.js, React, Vue, Svelte, Astro), aucune dépendance runtime, aucun bundler.
- Le contenu est versionné dans les pages HTML.
- Les améliorations JS n'ont jamais un rôle essentiel (progressive enhancement).
- Les chemins sont absolus à la racine (`/`, `/work/...`) : le site est servi à la racine d'un domaine.

## Routes

| URL | Fichier | Rôle |
|---|---|---|
| `/` | `index.html` | Page d'accueil : identité, projets, à propos, capacités, méthode, contact |
| `/work/amplio-web` | `work/amplio-web.html` | Étude de cas — Nova Web, projet réel (slug historique conservé) |
| `/work/interact-conakry` | `work/interact-conakry.html` | Étude de cas — projet réel |
| `/work/crazycook` | `work/crazycook.html` | Étude de cas — démo personnelle |
| `/mentions-legales` | `mentions-legales.html` | Page légale |
| `/confidentialite` | `confidentialite.html` | Page de confidentialité |
| `/cookies` | `cookies.html` | Inventaire cookies / stockage |
| 404 | `404.html` | Page introuvable (servie par Vercel) |

Les URLs sont référencées avec l'extension `.html` dans les liens (fonctionne partout).
Sur Vercel, `cleanUrls: true` rend aussi les URLs sans extension accessibles.

## Code

```
/
  index.html        — accueil (contenu éditorial principal)
  styles.css        — design system complet (tokens + composants)
  script.js         — améliorations progressives uniquement
  icon.svg          — favicon / app icon
  robots.txt        — directives de crawl + annonce du sitemap
  sitemap.xml       — routes éditoriales canoniques à soumettre à Google
  404.html          — page introuvable
  vercel.json       — headers de sécurité HTTPS/CSP côté Vercel
  mentions-legales.html
  confidentialite.html
  cookies.html
  work/             — études de cas
  images/           — futurs assets réels (convention y compris)
  scripts/
    verify.mjs      — vérificateur statique (Node, sans dépendance)
  docs/
  .ai/              — gouvernance Vibe Coding Instructions vendue
  .github/          — CI
```

### Content

Tout texte public important vit dans une page HTML, proche de l'endroit où il est rendu.
Le contenu métier n'est pas dupliqué entre CSS et JS.

### Interaction

`script.js` contient uniquement (progressive enhancement) :
- **Theme** : bascule dark/light, persisté dans `localStorage` (`theme`).
- **Language** : switch FR/EN, persisté dans `localStorage` (`lang`),
  mise à jour de `document.documentElement.lang` et texte via dictionnaire.
- **Motion** : IntersectionObserver pour les reveal et les lignes.
- **Navigation** : surlignage actif + View Transitions MPA (avec fallback).
- **Contact** : lien GitHub public ; aucun numéro personnel stocké dans le client.
- Fermeture du menu mobile + touche Échap.

Sans JavaScript, le site reste complet et navigable
(FR par défaut, thème système).

## Vérification

1. Serveur statique (ex. `npx serve` ou équivalent) ;
2. contrôle des routes ;
3. `node scripts/verify.mjs` (contrôles structurels sans dépendance) ;
4. revue du diff.

## SEO

- Domaine de production Vercel configuré : `https://myportfolio-weld-three-35.vercel.app/` (vérifié dans les domaines du projet Vercel).
- Canonical absolu sur l'accueil et les trois études de cas publiques, aligné sur les URLs sans extension de `cleanUrls: true`.
- `robots.txt` déclare `https://myportfolio-weld-three-35.vercel.app/sitemap.xml`.
- `sitemap.xml` liste uniquement l'accueil et les trois études de cas canoniques.
- La page d'accueil définit Open Graph/Twitter metadata et JSON-LD `Person` + `WebSite`, avec un lien `sameAs` vers le profil GitHub public.
- Les études de cas ont des titres, descriptions, canoniques et metadata de partage distincts.
- Le sitemap facilite la découverte ; il ne garantit pas l'indexation. L'accès public de la production et la validation HTTP doivent être vérifiés séparément.

## Sécurité

- Headers de sécurité via `vercel.json` (nosniff, clickjacking, Referrer-Policy, Permissions-Policy, CSP stricte `'self'`).
- Aucun secret dans le client.
- Aucun script, police ou embeds tiers.
- `localStorage` utilisé uniquement pour `theme` et `lang`
  (préférence utilisateur, aucune donnée personnelle).
- Aucun cookie, sessionStorage, IndexedDB ni tracking.

## Déploiement

Cible : Vercel. Le contenu étant statique, tout hébergeur statique peut servir le projet sans pas de build.