/* ============================================================
   PORTFOLIO — Progressive enhancement engine
   Theme · Language · Motion · Navigation states
   Zero dependencies. Static site. Content-first, JS enhances.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- i18n dictionary ----------
     FR is the default (visible without JavaScript).
     EN swaps textContent of every [data-i18n] element,
     aria-labels via [data-i18n-aria], meta description via
     [data-i18n-desc]. <title> is translated as a [data-i18n] node. */
  var dict = {
    fr: {
      /* a11y */
      "a11y.menu.open": "Ouvrir le menu",
      "controls.theme.on": "Activer le mode clair",
      "controls.theme.off": "Activer le mode sombre",
      "controls.lang.fr": "Passer en français",
      "controls.lang.en": "Passer en anglais",
      "status.real.aria": "Statut : projet réel",
      "status.demo.aria": "Statut : démo",
      "status.concept.aria": "Statut : concept",
      /* navigation */
      "nav.home": "Accueil",
      "nav.projects": "Projets",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      /* hero */
      "hero.eyebrow": "Web design · Front-end",
      "hero.meta.aria": "Localisation et disponibilité",
      "hero.index.aria": "Sélection de travaux",
      "hero.meta.location": "Conakry · Guinée",
      "hero.meta.availability": "Disponible pour des projets web",
      "hero.title": "Je conçois et développe des interfaces web claires, utiles et soignées.",
      "hero.lead": "Sites web, interfaces et projets publiés — avec le travail, les choix et les détails visibles.",
      "hero.cta.contact": "Me contacter",
      "hero.cta.work": "Voir les projets",
      "hero.index.series": "Sélection",
      "hero.index.count": "3 projets",
      "hero.index.items.0.sub": "Site vitrine · services, portfolio, contact",
      "hero.index.items.1.sub": "Site du club · activités, actions, contact",
      "hero.index.items.2.sub": "Démo restaurant · menu, galerie, panier",
      /* sections */
      "section.work.eyebrow": "Sélection",
      "section.work.title": "Les projets avant les promesses.",
      "section.work.desc": "Chaque réalisation est documentée comme une étude de cas : contexte, décisions, interface et éléments vérifiables. Les concepts et démos restent explicitement marqués.",
      "section.work.projects.0.summary": "Projet principal en cours : démonstration réelle de direction artistique, de structure produit et d'intégration front-end.",
      "section.work.projects.1.summary": "Site web réalisé pour présenter Interact-Conakry, ses activités et ses moyens de contact. Objectif principal : améliorer la visibilité du club.",
      "section.work.projects.2.summary": "Démo personnelle d’un site restaurant statique, créée pour travailler le front-end, le responsive et le déploiement.",
      "section.about.eyebrow": "À propos",
      "section.about.title": "Court, concret, honnête.",
      "section.about.desc": "Pas de CV interminable : l'essentiel pour comprendre comment je travaille.",
      "section.about.rows.0.title": "Qui je suis",
      "section.about.rows.0.text": "Étudiant en informatique à Conakry, je construis des projets web avec une attention particulière portée à l’interface, à la clarté et à la qualité de réalisation.",
      "section.about.rows.1.title": "Ce que je pratique",
      "section.about.rows.1.text": "Développement front-end, responsive design, systèmes d’interface, performance et accessibilité — appliqués à des projets publiés et documentés.",
      "section.about.rows.2.title": "Ce que je construis",
      "section.about.rows.2.text": "Interfaces web, sites vitrines et projets personnels documentés. Amplio Web et Interact-Conakry sont présentés comme projets réels ; CrazyCook comme démo personnelle.",
      "section.about.rows.3.title": "Comment je travaille",
      "section.about.rows.3.text": "Découvrir, cadrer, construire, vérifier, déployer : une méthode courte pour livrer un résultat public et vérifiable.",
      "section.capabilities.eyebrow": "Capacités",
      "section.capabilities.title": "Ce que je sais construire.",
      "section.capabilities.desc": "Liste courte : les capacités présentées ici sont rattachées à des projets visibles dans ce portfolio.",
      "section.capabilities.items.0.name": "Web development",
      "section.capabilities.items.0.desc": "HTML · CSS · JavaScript",
      "section.capabilities.items.1.name": "UI implementation",
      "section.capabilities.items.1.desc": "Interface réelle à partir d'une direction",
      "section.capabilities.items.2.name": "Responsive design",
      "section.capabilities.items.2.desc": "Mobile-first, tablette, desktop",
      "section.capabilities.items.3.name": "Front-end",
      "section.capabilities.items.3.desc": "Intégration et rendu côté navigateur",
      "section.capabilities.items.4.name": "Web performance",
      "section.capabilities.items.4.desc": "Poids, timing, assets, runtime minimal",
      "section.capabilities.items.5.name": "Digital projects",
      "section.capabilities.items.5.desc": "Mini-sites et concepts documentés",
      "section.capabilities.items.6.name": "Git / GitHub",
      "section.capabilities.items.6.desc": "Versionning, CI, revue de diff",
      "section.capabilities.items.7.name": "Three.js",
      "section.capabilities.items.7.desc": "Utilisé sur Amplio Web pour la scène 3D",
      "section.capabilities.items.8.name": "Static web",
      "section.capabilities.items.8.desc": "HTML · CSS · JavaScript sans framework",
      "section.process.eyebrow": "Méthode",
      "section.process.title": "Un processus court et reproductible.",
      "section.process.steps.0.title": "Discover",
      "section.process.steps.0.desc": "Cadrer le besoin réel et les contraintes avant d'écrire du code.",
      "section.process.steps.1.title": "Design",
      "section.process.steps.1.desc": "Hiérarchie, typographie, composition et interaction.",
      "section.process.steps.2.title": "Build",
      "section.process.steps.2.desc": "HTML, CSS, JavaScript — propre, léger, progressif.",
      "section.process.steps.3.title": "Verify",
      "section.process.steps.3.desc": "Responsive, accessibilité, sécurité, SEO, navigateur.",
      "section.process.steps.4.title": "Deploy",
      "section.process.steps.4.desc": "Publication avec headers, robots et preuves de release.",
      "section.contact.eyebrow": "Contact",
      "section.contact.title": "Un projet à construire ?",
      "section.contact.lead": "Parlons de votre projet, de l’interface à construire ou simplement du besoin à résoudre. Le premier échange se fait sur WhatsApp.",
      "section.contact.cta": "Ouvrir WhatsApp",
      "section.contact.channels.whatsapp": "WhatsApp",
      "section.contact.channels.github": "GitHub",
      "section.contact.channels.whatsapp.value": "+224 628 069 479",
      "section.contact.channels.github.value": "github.com/sudomarc",
      "section.contact.legal": "Informations légales",
      /* footer */
      "footer.brand": "sudomarc",
      "footer.tagline": "Web development & UI — interfaces simples, claires et crédibles.",
      "footer.nav.title": "Navigation",
      "footer.legal.title": "Légal",
      "footer.legal.mentions": "Mentions légales",
      "footer.legal.privacy": "Confidentialité",
      "footer.legal.cookies": "Cookies",
      "footer.copyright": "© 2026 sudomarc. Tous droits réservés.",
      
      /* status */
      "status.real": "Projet réel",
      "status.demo": "Démo",
      "status.concept": "Concept",
      /* work meta */
      "work.amplio-web.meta": "Web design · Développement",
      "work.interact-conakry.meta": "Site web · Présentation du club",
      "work.crazycook.meta": "Restaurant · Démo personnelle",
      "work.amplio-web.stack.0": "HTML",
      "work.amplio-web.stack.1": "CSS",
      "work.amplio-web.stack.2": "JavaScript",
      "work.interact-conakry.stack.0": "HTML",
      "work.interact-conakry.stack.1": "CSS",
      "work.interact-conakry.stack.2": "JavaScript",
      "work.crazycook.stack.0": "HTML",
      "work.crazycook.stack.1": "CSS",
      "work.crazycook.stack.2": "JavaScript",
      /* project preview controls */
      "project.preview": "Aperçu",
      "project.open": "Ouvrir le site ↗",
      "project.view": "Voir le projet ↗",
      "project.preview.unavailable": "Aperçu non disponible",

      /* case labels */
      "case.context.label": "Contexte",
      "case.problem.label": "Problème",
      "case.constraints.label": "Contraintes",
      "case.decisions.label": "Décisions",
      "case.solution.label": "Solution",
      "case.interface.label": "Interface",
      "case.stack.label": "Stack",
      "case.results.label": "Résultats",
      "case.limits.label": "Limites",
      /* case body — amplio */
      "case.amplio.context": "Projet réalisé pour quelqu’un afin d’améliorer sa visibilité en ligne et de faciliter la prise de contact.",
      "case.amplio.problem": "Créer une présence web crédible qui présente clairement l’activité et oriente les visiteurs vers le contact.",
      "case.amplio.constraint": "Architecture légère et périmètre technique maîtrisé.",
      "case.amplio.decision": "Privilégier une architecture légère, des outils accessibles et une vérification régulière plutôt que dépendre d’une génération automatisée complète.",
      "case.amplio.solution": "Conception, développement, intégration des interactions, tests et déploiement ont été réalisés de bout en bout par moi.",
      "case.result.unmeasured": "Non mesuré",
      "case.result.measured": "Projet accessible publiquement ; aucune métrique de trafic, conversion ou performance n’est revendiquée à ce stade.",
      "case.limits.text": "Aucune métrique de trafic, de conversion ou de performance n’est revendiquée tant qu’elle n’est pas réellement mesurée.",
      /* legacy case body removed */
      /* legacy case body removed */
      /* case body — interact-conakry */
      "case.interact-conakry.context": "Projet réalisé pour l’Interact de ma ville afin de présenter le club et renforcer sa visibilité.",
      "case.interact-conakry.problem": "Donner au club une présence web claire expliquant son identité, ses activités et ses moyens de contact.",
      "case.interact-conakry.constraint": "Présentation claire du club, de ses activités et de ses moyens de contact.",
      "case.interact-conakry.decision": "Construire une interface claire et accessible, avec la présentation du club et la visibilité comme priorités.",
      "case.interact-conakry.solution": "Conception, développement, tests et déploiement réalisés de bout en bout par moi.",
      /* case body — crazycook */
      "case.crazycook.context": "Démo personnelle créée pour travailler la réalisation d’un site restaurant statique et tester un flux de développement complet.",
      "case.crazycook.problem": "Explorer une structure de site restaurant crédible tout en travaillant le front-end, le responsive et le déploiement.",
      "case.crazycook.constraint": "Architecture statique et déploiement simple.",
      "case.crazycook.decision": "Rester sur une approche statique avec HTML, CSS et JavaScript et tester le projet sur un vrai pipeline de publication.",
      "case.crazycook.solution": "Template de site restaurant statique développé, testé et préparé pour GitHub Pages.",
      /* media labels */
      /* page generic */
      "page.back": "Retour aux projets",
      "page.back.home": "Retour à l'accueil",
      "project.case.link": "Étude de cas",
      "page.notfound.code": "404",
      "page.notfound.title": "Page introuvable.",
      "page.notfound.desc": "L'adresse demandée n'existe pas ou a été déplacée.",
      "page.notfound.home": "Retour à l'accueil",
      "page.notfound.work": "Voir les projets",
      /* document */
      "doc.home.title": "sudomarc — Portfolio web & interfaces",
      "doc.home.desc": "Portfolio personnel : projets web et interfaces développés par sudomarc, documentés par ce qui a réellement été construit.",
      "doc.amplio.title": "Amplio Web — Étude de cas | sudomarc",
      "doc.amplio.desc": "Étude de cas d'Amplio Web : projet web principal servant de démonstration de direction artistique, de structure produit et d'intégration front-end.",
      "doc.interact-conakry.title": "Interact-Conakry — Étude de cas | sudomarc",
      "doc.interact-conakry.desc": "Étude de cas d’Interact-Conakry : site web réalisé pour présenter le club et améliorer sa visibilité.",
      "doc.crazycook.title": "CrazyCook — Étude de cas | sudomarc",
      "doc.crazycook.desc": "Étude de cas de CrazyCook : démo personnelle d’un template de site restaurant statique.",
      "doc.mentions.title": "Mentions légales | sudomarc",
      "doc.mentions.desc": "Mentions légales du portfolio de sudomarc.",
      "doc.privacy.title": "Politique de confidentialité | sudomarc",
      "doc.privacy.desc": "Politique de confidentialité du portfolio de sudomarc.",
      "doc.cookies.title": "Cookies | sudomarc",
      "doc.cookies.desc": "Inventaire des cookies et technologies de stockage du portfolio de sudomarc.",
      /* legal */
      "legal.label": "Légal",
      "legal.editor": "Éditeur du site",
      "legal.editor.text": "Nom public : sudomarc",
      "legal.editor.address": "Conakry, Guinée",
      "legal.editor.email": "Contact public : GitHub — github.com/sudomarc",
      "legal.site": "Site publié à l'adresse",
      "legal.site.url": "URL de production : à confirmer avant publication",
      "legal.hosting": "Hébergement",
      "legal.hosting.text": "Vercel — cible d’hébergement ; connexion et informations de production à vérifier avant publication.",
      "legal.ip": "Propriété intellectuelle",
      "legal.ip.text": "Les contenus et éléments graphiques publiés doivent respecter les droits d’utilisation applicables. Les éléments tiers seront documentés au besoin.",
      /* privacy */
      "privacy.hero.eyebrow": "Confidentialité",
      "privacy.hero.title": "Votre vie privée, clairement.",
      "privacy.hero.intro": "Cette page décrit le fonctionnement actuel du portfolio : les données qu’il peut traiter, les usages du stockage local et le rôle des services externes.",
      "privacy.updated": "Dernière mise à jour : 23 septembre 2026",
      "privacy.scope": "Périmètre",
      "privacy.scope.text": "Cette politique concerne ce portfolio personnel et ses pages publiques. Elle décrit ce que le site contrôle directement et ce qui relève de services externes accessibles depuis le portfolio.",
      "privacy.data": "Données traitées",
      "privacy.data.text": "Le portfolio ne comporte pas de formulaire de contact intégré, d’outil d’analytics, de pixel publicitaire ou de session replay. Il ne demande pas de compte et ne collecte pas volontairement de données personnelles par un formulaire.",
      "privacy.storage": "Stockage local",
      "privacy.storage.text": "Le navigateur peut conserver localement trois préférences d’interface : le thème, la langue et l’état de fermeture du bandeau de confidentialité. Ces informations restent sur votre appareil et ne sont pas envoyées par le portfolio à un serveur.",
      "privacy.external": "Services et contenus externes",
      "privacy.external.text": "Certaines réalisations sont affichées dans des aperçus intégrés depuis GitHub Pages. Lorsque vous chargez ces aperçus, votre navigateur contacte directement les sites concernés ; ils peuvent traiter des données techniques selon leurs propres règles et politiques. Les liens WhatsApp et GitHub sont également des services externes utilisés uniquement lorsque vous choisissez de les ouvrir.",
      "privacy.purpose": "Finalités",
      "privacy.purpose.text": "Le traitement local sert uniquement à conserver vos préférences d’interface et à éviter de réafficher le bandeau après sa fermeture. Les échanges avec les services externes résultent de votre choix de consulter un aperçu ou d’ouvrir un lien.",
      "privacy.retention": "Conservation",
      "privacy.retention.text": "Les préférences stockées dans le navigateur restent jusqu’à leur suppression par vous ou au nettoyage du stockage du site. Les données techniques éventuellement présentes dans les journaux de l’hébergeur relèvent des pratiques de l’hébergeur ; aucune durée précise n’est revendiquée ici sans vérification de sa politique.",
      "privacy.rights": "Vos demandes",
      "privacy.rights.text": "Pour toute demande concernant les informations contrôlées directement par ce portfolio, vous pouvez utiliser le canal de contact public indiqué ci-dessous. Les demandes concernant un service externe doivent être adressées au service concerné.",
      "privacy.contact": "Responsable et contact",
      "privacy.contact.text": "Responsable public du site : sudomarc, Conakry, Guinée. Contact public :",
      "privacy.external.link": "GitHub — github.com/sudomarc",
      "privacy.updates": "Mises à jour",
      "privacy.updates.text": "Cette politique sera revue lorsqu’une nouvelle fonctionnalité, un nouvel hébergement, un outil de mesure ou une nouvelle intégration externe modifiera le traitement des données.",
      "privacy.cookies.link": "Consulter aussi la politique cookies →",
/* cookie/privacy notice */
      "cookie.banner.title": "Confidentialité & cookies",
      "cookie.banner.text": "Ce portfolio ne dépose aucun cookie publicitaire ou de suivi. Il mémorise seulement certaines préférences dans votre navigateur. Les aperçus de projets externes peuvent, eux, suivre les règles de leurs propres sites.",
      "cookie.banner.privacy": "Confidentialité",
      "cookie.banner.cookies": "Cookies",
      "cookie.banner.dismiss": "Compris",
      "cookie.banner.aria": "Avis sur la confidentialité et les cookies",
/* cookie/privacy notice */
      "cookie.banner.title": "Privacy & cookies",
      "cookie.banner.text": "This portfolio does not set advertising or tracking cookies. It only stores a few preferences in your browser. External project previews may follow the rules of the sites that host them.",
      "cookie.banner.privacy": "Privacy",
      "cookie.banner.cookies": "Cookies",
      "cookie.banner.dismiss": "Got it",
      "cookie.banner.aria": "Privacy and cookie notice",
      /* cookies */
      "cookies.heading": "Inventaire actuel",
      "cookies.inventory": "Le site ne dépose pas de cookie publicitaire, analytique ou de suivi. Il utilise uniquement localStorage pour mémoriser le thème, la langue et l’état de fermeture du bandeau de confidentialité. Les aperçus de projets affichés dans des iframes proviennent de sites externes et peuvent utiliser leurs propres mécanismes.",
      "cookies.banner": "Bandeau d’information",
      "cookies.banner.text": "Le bandeau affiché sur le site est informatif : il explique le fonctionnement actuel du stockage et renvoie vers cette page et la politique de confidentialité. Il ne sert pas de mécanisme de consentement pour des cookies non essentiels, car le portfolio n’en dépose pas actuellement.",
      "cookies.external": "Aperçus externes",
      "cookies.external.text": "Les pages de projets peuvent être chargées depuis GitHub Pages dans des aperçus intégrés. Ces sites externes sont distincts du portfolio et peuvent déposer leurs propres cookies ou utiliser leur propre stockage selon leur configuration.",
      "cookies.evolution": "Évolution",
      "cookies.evolution.text": "Si une intégration ajoute un cookie, un stockage ou un outil de mesure non strictement nécessaire, l’inventaire sera mis à jour avant l’implémentation et la stratégie de consentement sera réévaluée selon les règles applicables.",
      "theme.label": "Thème",
      "lang.label": "Langue"
    },
    en: {
      /* a11y */
      "a11y.menu.open": "Open menu",
      "controls.theme.on": "Switch to light mode",
      "controls.theme.off": "Switch to dark mode",
      "controls.lang.fr": "Switch to French",
      "controls.lang.en": "Switch to English",
      "status.real.aria": "Status: real project",
      "status.demo.aria": "Status: demo",
      "status.concept.aria": "Status: concept",
      /* navigation */
      "nav.home": "Home",
      "nav.projects": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      /* hero */
      "hero.eyebrow": "Web design · Front-end",
      "hero.meta.aria": "Location and availability",
      "hero.index.aria": "Selected work",
      "hero.meta.location": "Conakry · Guinea",
      "hero.meta.availability": "Available for web projects",
      "hero.title": "I design and build clear, useful, considered web interfaces.",
      "hero.lead": "Websites, interfaces, and published projects — with the work, decisions, and details made visible.",
      "hero.cta.contact": "Contact me",
      "hero.cta.work": "View projects",
      "hero.index.series": "Selection",
      "hero.index.count": "3 projects",
      "hero.index.items.0.sub": "Showcase site · services, portfolio, contact",
      "hero.index.items.1.sub": "Club site · activities, actions, contact",
      "hero.index.items.2.sub": "Restaurant demo · menu, gallery, cart",
      /* sections */
      "section.work.eyebrow": "Selected work",
      "section.work.title": "Projects before promises.",
      "section.work.desc": "Each work is documented as a case study: context, decisions, interface, and verifiable elements. Concepts and demos remain explicitly marked.",
      "section.work.projects.0.summary": "Main project in progress: a real demonstration of art direction, product structure, and front-end integration.",
      "section.work.projects.1.summary": "Mobile-first landing page concept to present an offer and generate contacts. No client or commercial result is presented as real.",
      "section.work.projects.2.summary": "Brand direction and content hierarchy exploration to present services, a gallery, and a booking. No client data claimed.",
      "section.about.eyebrow": "About",
      "section.about.title": "Short, concrete, honest.",
      "section.about.desc": "No endless résumé: the essentials to understand how I work.",
      "section.about.rows.0.title": "Who I am",
      "section.about.rows.0.text": "Computer science student in Conakry. I build web projects with a strong focus on interface, clarity, and quality of execution.",
      "section.about.rows.1.title": "What I practice",
      "section.about.rows.1.text": "Front-end development, responsive design, interface systems, performance and accessibility — applied to published, documented projects.",
      "section.about.rows.2.title": "What I build",
      "section.about.rows.2.text": "Web interfaces, showcase sites and personal projects. Amplio Web and Interact-Conakry are presented as real projects; CrazyCook is a personal demo.",
      "section.about.rows.3.title": "How I work",
      "section.about.rows.3.text": "Discover, scope, build, verify, deploy: a short method for shipping a public, verifiable result.",
      "section.capabilities.eyebrow": "Capabilities",
      "section.capabilities.title": "What I can build.",
      "section.capabilities.desc": "Short list: the capabilities shown here are tied to projects visible in this portfolio.",
      "section.capabilities.items.0.name": "Web development",
      "section.capabilities.items.0.desc": "HTML · CSS · JavaScript",
      "section.capabilities.items.1.name": "UI implementation",
      "section.capabilities.items.1.desc": "Real interface from a direction",
      "section.capabilities.items.2.name": "Responsive design",
      "section.capabilities.items.2.desc": "Mobile-first, tablet, desktop",
      "section.capabilities.items.3.name": "Front-end",
      "section.capabilities.items.3.desc": "Integration and browser rendering",
      "section.capabilities.items.4.name": "Web performance",
      "section.capabilities.items.4.desc": "Weight, timing, assets, minimal runtime",
      "section.capabilities.items.5.name": "Digital projects",
      "section.capabilities.items.5.desc": "Mini-sites and documented concepts",
      "section.capabilities.items.6.name": "Git / GitHub",
      "section.capabilities.items.6.desc": "Versioning, CI, diff review",
      "section.capabilities.items.7.name": "Three.js",
      "section.capabilities.items.7.desc": "Used on Amplio Web for the 3D scene",
      "section.capabilities.items.8.name": "Static web",
      "section.capabilities.items.8.desc": "HTML · CSS · JavaScript without a framework",
      "section.process.eyebrow": "Process",
      "section.process.title": "A short, repeatable process.",
      "section.process.steps.0.title": "Discover",
      "section.process.steps.0.desc": "Scope the real need and constraints before writing code.",
      "section.process.steps.1.title": "Design",
      "section.process.steps.1.desc": "Hierarchy, typography, composition, interaction.",
      "section.process.steps.2.title": "Build",
      "section.process.steps.2.desc": "HTML, CSS, JavaScript — clean, lightweight, progressive.",
      "section.process.steps.3.title": "Verify",
      "section.process.steps.3.desc": "Responsive, accessibility, security, SEO, browser.",
      "section.process.steps.4.title": "Deploy",
      "section.process.steps.4.desc": "Shipping with headers, robots, and release evidence.",
      "section.contact.eyebrow": "Contact",
      "section.contact.title": "A project to build?",
      "section.contact.lead": "Tell me about the project, the interface you need, or simply the problem to solve. The first conversation happens on WhatsApp.",
      "section.contact.cta": "Open WhatsApp",
      "section.contact.channels.whatsapp": "WhatsApp",
      "section.contact.channels.github": "GitHub",
      "section.contact.channels.whatsapp.value": "+224 628 069 479",
      "section.contact.channels.github.value": "github.com/sudomarc",
      "section.contact.legal": "Legal information",
      /* footer */
      "footer.brand": "sudomarc",
      "footer.tagline": "Web development & UI — simple, clear, and credible interfaces.",
      "footer.nav.title": "Navigation",
      "footer.legal.title": "Legal",
      "footer.legal.mentions": "Legal notice",
      "footer.legal.privacy": "Privacy",
      "footer.legal.cookies": "Cookies",
      "footer.copyright": "© 2026 sudomarc. All rights reserved.",
      
      /* status */
      "status.real": "Real project",
      "status.demo": "Demo",
      "status.concept": "Concept",
      /* work meta */
      "work.amplio-web.meta": "Web design · Development",
      "work.interact-conakry.meta": "Site web · Présentation du club",
      "work.amplio-web.stack.0": "HTML",
      "work.amplio-web.stack.1": "CSS",
      "work.amplio-web.stack.2": "JavaScript",
      "work.interact-conakry.stack.0": "HTML",
      "work.interact-conakry.stack.1": "CSS",
      "work.interact-conakry.stack.2": "JavaScript",
      "work.crazycook.stack.0": "HTML",
      "work.crazycook.stack.1": "CSS",
      "work.crazycook.stack.2": "JavaScript",
      /* project preview controls */
      "project.preview": "Preview",
      "project.open": "Open site ↗",
      "project.view": "View project ↗",
      "project.preview.unavailable": "Preview unavailable",

      /* case labels */
      "case.context.label": "Context",
      "case.problem.label": "Problem",
      "case.constraints.label": "Constraints",
      "case.decisions.label": "Decisions",
      "case.solution.label": "Solution",
      "case.interface.label": "Interface",
      "case.stack.label": "Stack",
      "case.results.label": "Results",
      "case.limits.label": "Limits",
      /* case body — amplio */
      "case.amplio.context": "Main project of this portfolio: a real showcase combining artistic direction, content structure, and front-end integration.",
      "case.amplio.problem": "Build a credible web presence that clearly presents the activity and guides visitors toward contact.",
      "case.amplio.constraint": "Lightweight architecture and a controlled technical scope.",
      "case.amplio.decision": "Favor a lightweight architecture, accessible tools and regular verification instead of depending on full automated generation.",
      "case.amplio.solution": "I handled the design, front-end development, interactions, testing and deployment end to end.",
      "case.interface.note": "Real captures to integrate. Placeholder blocks until assets are available.",
      "case.result.unmeasured": "Not measured",
      "case.result.measured": "The project is publicly accessible; no traffic, conversion or performance metric is claimed at this stage.",
      "case.limits.text": "No traffic, conversion, or performance metric is claimed until it is actually measured.",
      /* legacy case body removed */
      /* legacy case body removed */
      /* case body — interact-conakry */
      "case.interact-conakry.context": "Project built for the Interact club in my city to present the club and improve its visibility.",
      "case.interact-conakry.problem": "Give the club a clear web presence explaining who it is, what it does and how to get in touch.",
      "case.interact-conakry.constraint": "Clear presentation of the club, its activities, and contact options.",
      "case.interact-conakry.decision": "Keep the interface clear and accessible, with club presentation and visibility as the priorities.",
      "case.interact-conakry.solution": "I handled the design, development, testing and deployment end to end.",
      /* case body — crazycook */
      "case.crazycook.context": "Personal demo created to practice building a static restaurant website and test an end-to-end development workflow.",
      "case.crazycook.problem": "Explore a credible restaurant-site structure while practicing front-end, responsive work and deployment.",
      "case.crazycook.constraint": "Static architecture and straightforward deployment.",
      "case.crazycook.decision": "Stay with a static HTML/CSS/JavaScript approach and test the project on a real publishing pipeline.",
      "case.crazycook.solution": "A static restaurant template developed, tested and prepared for GitHub Pages.",
      /* media labels */
      "case.media": "Visual coming",
      "case.media.desktop": "Desktop capture",
      "case.media.mobile": "Mobile capture",
      /* page generic */
      "page.back": "Back to projects",
      "page.back.home": "Back to home",
      "project.case.link": "Case study",
      "page.notfound.code": "404",
      "page.notfound.title": "Page not found.",
      "page.notfound.desc": "The requested address does not exist or has moved.",
      "page.notfound.home": "Back to home",
      "page.notfound.work": "View projects",
      /* document */
      "doc.home.title": "sudomarc — Web portfolio & interfaces",
      "doc.home.desc": "Personal portfolio: web projects, interfaces, digital experiences, and case studies — documented by proof, not promises.",
      "doc.amplio.title": "Amplio Web — Case study | sudomarc",
      "doc.amplio.desc": "Amplio Web case study: the main web project serving as a demonstration of art direction, product structure, and front-end integration.",
      "doc.mentions.title": "Legal notice | sudomarc",
      "doc.mentions.desc": "Legal notice for the sudomarc portfolio.",
      "doc.privacy.title": "Privacy policy | sudomarc",
      "doc.privacy.desc": "Privacy policy for the sudomarc portfolio.",
      "doc.cookies.title": "Cookies | sudomarc",
      "doc.cookies.desc": "Cookie and storage inventory for the sudomarc portfolio.",
      /* legal */
      "legal.label": "Legal",
      "legal.editor": "Site editor",
      "legal.editor.text": "Public name: sudomarc",
      "legal.editor.address": "Conakry, Guinea",
      "legal.editor.email": "Contact public : GitHub — github.com/sudomarc",
      "legal.site": "Site published at",
      "legal.site.url": "Production URL: to be confirmed before publication",
      "legal.hosting": "Hosting",
      "legal.hosting.text": "Vercel — Vercel — hosting target; production connection and hosting information to be verified before publication.",
      "legal.ip": "Intellectual property",
      "legal.ip.text": "Published content and graphic elements must respect applicable usage rights. Third-party assets will be documented when relevant.",
      /* privacy */
      "privacy.hero.eyebrow": "Privacy",
      "privacy.hero.title": "Your privacy, clearly.",
      "privacy.hero.intro": "This page describes how the portfolio currently works: the data it may process, the use of browser storage, and the role of external services.",
      "privacy.updated": "Last updated: September 23, 2026",
      "privacy.scope": "Scope",
      "privacy.scope.text": "This policy covers this personal portfolio and its public pages. It describes what the site controls directly and what belongs to external services accessed from the portfolio.",
      "privacy.data": "Data processed",
      "privacy.data.text": "The portfolio has no built-in contact form, analytics tool, advertising pixel, or session replay. It does not require an account and does not intentionally collect personal data through a form.",
      "privacy.storage": "Local storage",
      "privacy.storage.text": "Your browser may locally store three interface preferences: theme, language, and whether the privacy notice has been dismissed. These values stay on your device and are not sent by this portfolio to a server.",
      "privacy.external": "External services and content",
      "privacy.external.text": "Some projects are displayed through embedded previews hosted on GitHub Pages. When you load these previews, your browser contacts the relevant sites directly; they may process technical data under their own rules and policies. WhatsApp and GitHub links are also external services used only when you choose to open them.",
      "privacy.purpose": "Purposes",
      "privacy.purpose.text": "Local storage is used only to keep your interface preferences and avoid showing the notice again after dismissal. Requests to external services result from your choice to view a preview or open a link.",
      "privacy.retention": "Retention",
      "privacy.retention.text": "Browser preferences remain until you delete them or clear the site's storage. Any technical data present in hosting logs is governed by the host's practices; no specific retention period is claimed here without verifying its policy.",
      "privacy.rights": "Your requests",
      "privacy.rights.text": "For requests concerning information directly controlled by this portfolio, use the public contact channel below. Requests concerning an external service should be addressed to that service.",
      "privacy.contact": "Operator and contact",
      "privacy.contact.text": "Public site operator: sudomarc, Conakry, Guinea. Public contact:",
      "privacy.external.link": "GitHub — github.com/sudomarc",
      "privacy.updates": "Updates",
      "privacy.updates.text": "This policy will be reviewed when a new feature, hosting setup, measurement tool, or external integration changes the data flow.",
      "privacy.cookies.link": "Also read the cookie policy →",
      /* cookies */
      "cookies.heading": "Current inventory",
      "cookies.inventory": "The site does not set advertising, analytics, or tracking cookies. It uses localStorage only to remember the theme, language, and whether the privacy notice has been dismissed. Project previews shown in iframes come from external sites and may use their own mechanisms.",
      "cookies.banner": "Information banner",
      "cookies.banner.text": "The banner shown on the site is informational: it explains the current storage behavior and links to this page and the privacy policy. It is not a consent mechanism for non-essential cookies because the portfolio does not currently set any.",
      "cookies.external": "External previews",
      "cookies.external.text": "Project pages may be loaded from GitHub Pages inside embedded previews. These external sites are separate from the portfolio and may set their own cookies or use their own storage depending on their configuration.",
      "cookies.evolution": "Evolution",
      "cookies.evolution.text": "If an integration adds a cookie, storage, or measurement tool that is not strictly necessary, the inventory will be updated before implementation and the consent strategy will be reassessed under the applicable rules.",
      "theme.label": "Theme",
      "lang.label": "Language"
    }
  };

  /* ---------- Theme icons ---------- */
  var ICONS = {
    sun: '<svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  };

  /* ---------- Helpers ---------- */
  function tryLocal(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  function getLang() {
    return tryLocal("lang") || "fr";
  }

  /* ---------- Theme ---------- */
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function effectiveTheme() {
    return tryLocal("theme") || getSystemTheme();
  }

  function applyTheme(theme) {
    if (!theme) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    updateThemeButton();
  }

  function updateThemeButton() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var isDark = effectiveTheme() === "dark";
    var labelKey = isDark ? "controls.theme.on" : "controls.theme.off";
    var d = dict[getLang()] || dict.fr;
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    btn.setAttribute("aria-label", d[labelKey]);
    btn.setAttribute("title", d[labelKey]);
  }

  function toggleTheme() {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    tryLocal("theme", next);
    applyTheme(next);
  }

  /* ---------- Language ---------- */
  function applyLang(lang) {
    document.documentElement.lang = lang;
    var d = dict[lang] || dict.fr;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var text = d[key];
      if (text !== undefined) el.textContent = text;
    });
    document.querySelectorAll("[data-i18n-desc]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-desc");
      var text = d[key];
      if (text !== undefined) el.setAttribute("content", text);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var text = d[key];
      if (text !== undefined) el.setAttribute("aria-label", text);
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateThemeButton();
  }

  function setLang(lang) {
    tryLocal("lang", lang);
    applyLang(lang);
  }

  /* ---------- Controls wiring (static markup, progressive) ---------- */
  function wireControls() {
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ---------- WhatsApp links ---------- */
  var SITE_CONFIG = {
    whatsappNumber: "+224 628069479",
    whatsappMessage:
      "Bonjour Marco, je viens de voir votre portfolio et je souhaite discuter d'un projet."
  };
  function initWhatsAppLinks() {
    var links = document.querySelectorAll("[data-whatsapp]");
    var digits = String(SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    if (digits.length === 0) {
      links.forEach(function (link) {
        link.removeAttribute("data-whatsapp");
      });
      return;
    }
    var url =
      "https://wa.me/" +
      digits +
      "?text=" +
      encodeURIComponent(SITE_CONFIG.whatsappMessage);
    links.forEach(function (link) {
      link.setAttribute("href", url);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noreferrer");
      link.removeAttribute("data-whatsapp");
    });
  }

  /* ---------- Privacy / cookie notice ---------- */
  var COOKIE_NOTICE_KEY = "sudomarc:cookie-note-dismissed";

  function initCookieNotice() {
    if (document.getElementById("cookie-note")) return;

    var note = document.createElement("aside");
    note.id = "cookie-note";
    note.className = "cookie-note";
    note.setAttribute("role", "region");
    note.setAttribute("aria-label", "Avis sur la confidentialité et les cookies");
    note.innerHTML =
      '<div class="cookie-note__content">' +
      '<p class="cookie-note__title" data-i18n="cookie.banner.title">Confidentialité &amp; cookies</p>' +
      '<p class="cookie-note__text" data-i18n="cookie.banner.text">Ce portfolio ne dépose aucun cookie publicitaire ou de suivi. Il mémorise seulement certaines préférences dans votre navigateur. Les aperçus de projets externes peuvent, eux, suivre les règles de leurs propres sites.</p>' +
      '</div>' +
      '<div class="cookie-note__actions">' +
      '<a class="cookie-note__link" href="/confidentialite.html" data-i18n="cookie.banner.privacy">Confidentialité</a>' +
      '<a class="cookie-note__link" href="/cookies.html" data-i18n="cookie.banner.cookies">Cookies</a>' +
      '<button class="cookie-note__dismiss" type="button" data-cookie-note-dismiss><span data-i18n="cookie.banner.dismiss">Compris</span><span aria-hidden="true">→</span></button>' +
      '</div>';

    document.body.appendChild(note);

    if (tryLocal(COOKIE_NOTICE_KEY) === "1") {
      note.hidden = true;
      return;
    }

    document.body.classList.add("cookie-note-open");

    var dismiss = note.querySelector("[data-cookie-note-dismiss]");
    function close() {
      note.hidden = true;
      document.body.classList.remove("cookie-note-open");
      tryLocal(COOKIE_NOTICE_KEY, "1");
    }

    if (dismiss) dismiss.addEventListener("click", close);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !note.hidden) close();
    });
  }

  /* ---------- Active nav (IntersectionObserver) ---------- */
  function initActiveNav() {
    var navLinks = document.querySelectorAll("[data-nav]");
    if (navLinks.length === 0) return;
    var visible = {};
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          visible[e.target.id] = e.isIntersecting;
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(function (link) {
      var id = link.getAttribute("data-nav");
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    var ticking = false;
    function update() {
      ticking = false;
      var active = null;
      var best = -Infinity;
      Object.keys(visible).forEach(function (id) {
        if (!visible[id]) return;
        var top = document.getElementById(id).getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.5 && top > best) {
          best = top;
          active = id;
        }
      });
      navLinks.forEach(function (link) {
        var on = link.getAttribute("data-nav") === active;
        link.classList.toggle("is-active", on);
        if (on) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          update();
        });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  /* ---------- Reveal (IntersectionObserver, fail-safe) ----------
     `.motion-ready` is added only here: if this code never runs,
     every `.reveal` stays visible. If reduced motion is preferred,
     the class is skipped and content stays visible (CSS already
     forces the visible state). */
  function initReveals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var items = document.querySelectorAll(".reveal, [data-reveal]");
    if (items.length === 0) return;
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initCookieNotice();
    applyTheme(effectiveTheme());
    applyLang(getLang());
    wireControls();
    initWhatsAppLinks();
    initActiveNav();
    initReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();