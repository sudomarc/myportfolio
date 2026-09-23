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
      "hero.eyebrow": "Portfolio — Web Dev",
      "hero.meta.aria": "Localisation et disponibilité",
      "hero.index.aria": "Sélection de travaux",
      "hero.meta.location": "Conakry · Guinée",
      "hero.meta.availability": "Disponible pour des projets web",
      "hero.title": "Je construis des interfaces web et j’apprends en développant.",
      "hero.lead": "Sites web, interfaces et projets personnels — documentés par ce qui a réellement été construit.",
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
      "section.about.rows.0.text": "Étudiant en informatique à Conakry, je construis des projets web et j’apprends en développant, en testant et en déployant.",
      "section.about.rows.1.title": "Ce que j'apprends",
      "section.about.rows.1.text": "Web development, design systems, performance et accessibilité — documenté au fil des projets publiés dans ce portfolio.",
      "section.about.rows.2.title": "Ce que je construis",
      "section.about.rows.2.text": "Interfaces web, sites vitrines et projets personnels documentés. Amplio Web et Interact-Conakry sont présentés comme projets réels ; CrazyCook comme démo personnelle.",
      "section.about.rows.3.title": "Comment je travaille",
      "section.about.rows.3.text": "Découvrir, cadrer, construire, vérifier, déployer : une méthode courte pour livrer un résultat public et vérifiable.",
      "section.capabilities.eyebrow": "Capacités",
      "section.capabilities.title": "Ce que je sais construire.",
      "section.capabilities.desc": "Liste courte, chaque capacité étant démontrée ou démontrée en cours par les projets de ce portfolio.",
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
      "section.capabilities.items.7.name": "Next.js",
      "section.capabilities.items.7.desc": "Utilisé sur Amplio Web",
      "section.capabilities.items.8.name": "TypeScript",
      "section.capabilities.items.8.desc": "Utilisé sur Amplio Web",
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
      "section.contact.title": "Un projet à construire ?",
      "section.contact.lead": "Le canal principal est WhatsApp. Le lien s'active dès qu'un numéro est configuré ; le formulaire viendra lorsque le prestataire du formulaire sera choisi.",
      "section.contact.cta": "Ouvrir WhatsApp",
      "section.contact.channels.whatsapp": "WhatsApp",
      "section.contact.channels.github": "GitHub",
      "section.contact.channels.formulaire": "Formulaire",
      "section.contact.channels.whatsapp.value": "+224 628 069 479",
      "section.contact.channels.github.value": "github.com/sudomarc",
      "section.contact.channels.formulaire.value": "Non activé — aucun fournisseur de formulaire choisi",
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
      "footer.technical": "Fait main — HTML, CSS, JavaScript. Aucun cookie, aucun tracker.",
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
      "case.links.label": "Liens",
      /* case body — amplio */
      "case.amplio.context": "Projet réalisé pour quelqu’un afin d’améliorer sa visibilité en ligne et de faciliter la prise de contact.",
      "case.amplio.problem": "Créer une présence web crédible qui présente clairement l’activité et oriente les visiteurs vers le contact.",
      "case.amplio.constraint": "Ordinateur personnel aux performances limitées pour le développement.",
      "case.amplio.constraint2": "Accès limité aux modèles IA avancés faute d’abonnement.",
      "case.amplio.decision": "Privilégier une architecture légère, des outils accessibles et une vérification régulière plutôt que dépendre d’une génération automatisée complète.",
      "case.amplio.solution": "Conception, développement, intégration des interactions, tests et déploiement ont été réalisés de bout en bout par moi.",
      "case.interface.note": "Captures réelles à intégrer après ajout des assets.",
      "case.result.unmeasured": "Non mesuré",
      "case.result.measured": "Projet accessible publiquement ; aucune métrique de trafic, conversion ou performance n’est revendiquée à ce stade.",
      "case.limits.text": "Aucune métrique de trafic, de conversion ou de performance n’est revendiquée tant qu’elle n’est pas réellement mesurée.",
      "case.link.demo": "Démo — URL de production à inscrire après vérification finale",
      "case.link.code": "Code — github.com/sudomarc/amplio-web",
      /* legacy case body removed */
      /* legacy case body removed */
      /* case body — interact-conakry */
      "case.interact-conakry.context": "Projet réalisé pour l’Interact de ma ville afin de présenter le club et renforcer sa visibilité.",
      "case.interact-conakry.problem": "Donner au club une présence web claire expliquant son identité, ses activités et ses moyens de contact.",
      "case.interact-conakry.constraint": "Ordinateur personnel aux performances limitées pour le développement.",
      "case.interact-conakry.constraint2": "Accès limité aux modèles IA avancés faute d’abonnement.",
      "case.interact-conakry.decision": "Construire une interface claire et accessible, avec la présentation du club et la visibilité comme priorités.",
      "case.interact-conakry.solution": "Conception, développement, tests et déploiement réalisés de bout en bout par moi.",
      /* case body — crazycook */
      "case.crazycook.context": "Démo personnelle créée pour travailler la réalisation d’un site restaurant statique et tester un flux de développement complet.",
      "case.crazycook.problem": "Explorer une structure de site restaurant crédible tout en travaillant le front-end, le responsive et le déploiement.",
      "case.crazycook.constraint": "Ordinateur personnel aux performances limitées pour le développement.",
      "case.crazycook.constraint2": "Accès limité aux modèles IA avancés faute d’abonnement.",
      "case.crazycook.decision": "Rester sur une approche statique avec HTML, CSS et JavaScript et tester le projet sur un vrai pipeline de publication.",
      "case.crazycook.solution": "Template de site restaurant statique développé, testé et préparé pour GitHub Pages.",
      /* media labels */
      "case.media": "Visuel à venir",
      "case.media.desktop": "Capture desktop",
      "case.media.mobile": "Capture mobile",
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
      "doc.home.desc": "Portfolio personnel : projets web et interfaces développés par un étudiant en informatique à Conakry, documentés par ce qui a réellement été construit.",
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
      "privacy.data": "Données collectées",
      "privacy.data.text": "Le site ne comporte pas de formulaire actif ni d’outil d’analytics. Le navigateur peut conserver localement les préférences de thème et de langue via localStorage. Ces préférences restent dans le navigateur et ne sont pas envoyées par le site à un serveur.",
      "privacy.purpose": "Finalités",
      "privacy.purpose.text": "Les préférences locales servent uniquement à conserver le thème et la langue choisis pour les visites suivantes.",
      "privacy.contact": "Contact",
      "privacy.contact.text": "Pour contacter le responsable du site : github.com/sudomarc",
      /* cookies */
      "cookies.heading": "Inventaire actuel",
      "cookies.inventory": "À ce stade, ce site n'utilise aucun cookie, analytics, pixel, embed tiers, police distante ni script externe. Seul le stockage local du navigateur (localStorage) enregistre deux préférences utilisateur : le thème (sombre/clair) et la langue (FR/EN). Ces clés ne servent qu'à votre confort de lecture, restent sur votre appareil et ne sont ni lues ni transmises à un serveur.",
      "cookies.banner": "Aucune bannière de consentement n’est prévue à ce stade : le site utilise uniquement des préférences locales strictement fonctionnelles, sans publicité ni analytics. Cet inventaire sera revérifié à chaque ajout d’intégration externe.",
      "cookies.evolution": "Évolution",
      "cookies.evolution.text": "Si une intégration ajoute un cookie, un stockage ou un outil de mesure, cet inventaire sera mis à jour avant l'implémentation, puis un contrôle de consentement sera évalué.",
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
      "hero.eyebrow": "Portfolio — Web Dev",
      "hero.meta.aria": "Location and availability",
      "hero.index.aria": "Selected work",
      "hero.meta.location": "Conakry · Guinea",
      "hero.meta.availability": "Available for web projects",
      "hero.title": "I build web interfaces and learn by developing.",
      "hero.lead": "Websites, interfaces, and personal projects — documented by what was actually built.",
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
      "section.about.rows.0.text": "Computer science student in Conakry. I build web projects and learn by developing, testing and deploying.",
      "section.about.rows.1.title": "What I learn",
      "section.about.rows.1.text": "Web development, design systems, performance and accessibility — documented through the projects published in this portfolio.",
      "section.about.rows.2.title": "What I build",
      "section.about.rows.2.text": "Web interfaces, showcase sites and personal projects. Amplio Web and Interact-Conakry are presented as real projects; CrazyCook is a personal demo.",
      "section.about.rows.3.title": "How I work",
      "section.about.rows.3.text": "Discover, scope, build, verify, deploy: a short method for shipping a public, verifiable result.",
      "section.capabilities.eyebrow": "Capabilities",
      "section.capabilities.title": "What I can build.",
      "section.capabilities.desc": "Short list, each capability demonstrated or being demonstrated by the projects in this portfolio.",
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
      "section.capabilities.items.7.name": "Next.js",
      "section.capabilities.items.7.desc": "Used on Amplio Web",
      "section.capabilities.items.8.name": "TypeScript",
      "section.capabilities.items.8.desc": "Used on Amplio Web",
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
      "section.contact.title": "A project to build?",
      "section.contact.lead": "The main channel is WhatsApp. The link activates once a number is configured; the form will come after the form provider is chosen.",
      "section.contact.cta": "Open WhatsApp",
      "section.contact.channels.whatsapp": "WhatsApp",
      "section.contact.channels.github": "GitHub",
      "section.contact.channels.formulaire": "Form",
      "section.contact.channels.whatsapp.value": "+224 628 069 479",
      "section.contact.channels.github.value": "github.com/sudomarc",
      "section.contact.channels.formulaire.value": "Not active — no form provider selected",
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
      "footer.technical": "Handmade — HTML, CSS, JavaScript. No cookies, no tracking.",
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
      "case.links.label": "Links",
      /* case body — amplio */
      "case.amplio.context": "Main project of this portfolio: a real showcase combining artistic direction, content structure, and front-end integration.",
      "case.amplio.problem": "Build a credible web presence that clearly presents the activity and guides visitors toward contact.",
      "case.amplio.constraint": "A personal computer with limited development performance.",
      "case.amplio.constraint2": "Limited access to advanced AI models because of subscription constraints.",
      "case.amplio.decision": "Favor a lightweight architecture, accessible tools and regular verification instead of depending on full automated generation.",
      "case.amplio.solution": "I handled the design, front-end development, interactions, testing and deployment end to end.",
      "case.interface.note": "Real captures to integrate. Placeholder blocks until assets are available.",
      "case.result.unmeasured": "Not measured",
      "case.result.measured": "The project is publicly accessible; no traffic, conversion or performance metric is claimed at this stage.",
      "case.limits.text": "No traffic, conversion, or performance metric is claimed until it is actually measured.",
      "case.link.demo": "Demo — production URL to be added after final verification",
      "case.link.code": "Code — github.com/sudomarc/amplio-web",
      /* legacy case body removed */
      /* legacy case body removed */
      /* case body — interact-conakry */
      "case.interact-conakry.context": "Project built for the Interact club in my city to present the club and improve its visibility.",
      "case.interact-conakry.problem": "Give the club a clear web presence explaining who it is, what it does and how to get in touch.",
      "case.interact-conakry.constraint": "A personal computer with limited development performance.",
      "case.interact-conakry.constraint2": "Limited access to advanced AI models because of subscription constraints.",
      "case.interact-conakry.decision": "Keep the interface clear and accessible, with club presentation and visibility as the priorities.",
      "case.interact-conakry.solution": "I handled the design, development, testing and deployment end to end.",
      /* case body — crazycook */
      "case.crazycook.context": "Personal demo created to practice building a static restaurant website and test an end-to-end development workflow.",
      "case.crazycook.problem": "Explore a credible restaurant-site structure while practicing front-end, responsive work and deployment.",
      "case.crazycook.constraint": "A personal computer with limited development performance.",
      "case.crazycook.constraint2": "Limited access to advanced AI models because of subscription constraints.",
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
      "privacy.data": "Data collected",
      "privacy.data.text": "The site has no active form or analytics tool. The browser may locally store theme and language preferences through localStorage. These preferences stay in the browser and are not sent by this site to a server.",
      "privacy.purpose": "Purposes",
      "privacy.purpose.text": "Local preferences are used only to preserve the selected theme and language for later visits.",
      "privacy.contact": "Contact",
      "privacy.contact.text": "To contact the site operator: github.com/sudomarc",
      /* cookies */
      "cookies.heading": "Current inventory",
      "cookies.inventory": "At this stage, this site uses no cookies, analytics, pixels, third-party embeds, remote fonts, or external scripts. Only browser local storage (localStorage) records two user preferences: the theme (dark/light) and the language (FR/EN). These keys serve only your reading comfort, stay on your device, and are neither read nor transmitted to any server.",
      "cookies.banner": "No consent banner is planned at this stage: the site uses only strictly functional local preferences, with no advertising or analytics. This inventory must be reviewed whenever an external integration is added.",
      "cookies.evolution": "Evolution",
      "cookies.evolution.text": "If an integration adds a cookie, storage, or measurement tool, this inventory will be updated before implementation, and a consent control will then be evaluated.",
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