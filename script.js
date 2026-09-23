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
      "hero.eyebrow": "Portfolio — Web development & UI",
      "hero.meta.aria": "Localisation et disponibilité",
      "hero.index.aria": "Sélection de travaux",
      "hero.meta.location": "Guinée · Remote",
      "hero.meta.availability": "Disponible pour des projets sélectionnés",
      "hero.title": "Je construis des expériences web simples, claires et crédibles.",
      "hero.lead": "Interfaces web, mini-sites et projets digitaux — documentés par des preuves concrètes plutôt que par des promesses.",
      "hero.cta.contact": "Me contacter",
      "hero.cta.work": "Voir les projets",
      "hero.index.series": "Sélection",
      "hero.index.count": "3 projets",
      "hero.index.items.0.sub": "Projet réel · Web design",
      "hero.index.items.1.sub": "Démo · Landing page",
      "hero.index.items.2.sub": "Concept · Direction visuelle",
      /* sections */
      "section.work.eyebrow": "Sélection",
      "section.work.title": "Les projets avant les promesses.",
      "section.work.desc": "Chaque réalisation est documentée comme une étude de cas : contexte, décisions, interface et éléments vérifiables. Les concepts et démos restent explicitement marqués.",
      "section.work.projects.0.summary": "Projet principal en cours : démonstration réelle de direction artistique, de structure produit et d'intégration front-end.",
      "section.work.projects.1.summary": "Concept de landing page mobile-first pour présenter une offre et générer des prises de contact. Aucun client ou résultat commercial n'est présenté comme réel.",
      "section.work.projects.2.summary": "Exploration de direction de marque et de hiérarchie de contenu pour présenter des prestations, une galerie et un rendez-vous. Aucune donnée client revendiquée.",
      "section.about.eyebrow": "À propos",
      "section.about.title": "Court, concret, honnête.",
      "section.about.desc": "Pas de CV interminable : l'essentiel pour comprendre comment je travaille.",
      "section.about.rows.0.title": "Qui je suis",
      "section.about.rows.0.text": "[PLACEHOLDER — courte bio à rédiger par Marco]",
      "section.about.rows.1.title": "Ce que j'apprends",
      "section.about.rows.1.text": "Web development, design systems, performance et accessibilité — documenté au fil des projets publiés dans ce portfolio.",
      "section.about.rows.2.title": "Ce que je construis",
      "section.about.rows.2.text": "Interfaces web, mini-sites et études de cas. Le projet principal (Amplio Web) est réel ; les autres sont des concepts ou démos, marqués comme tels.",
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
      "section.contact.channels.email": "Email",
      "section.contact.channels.formulaire": "Formulaire",
      "section.contact.channels.whatsapp.value": "[PLACEHOLDER — numéro à configurer dans script.js]",
      "section.contact.channels.email.value": "[PLACEHOLDER — email à configurer]",
      "section.contact.channels.formulaire.value": "À venir — après choix du fournisseur",
      "section.contact.legal": "Informations légales",
      /* footer */
      "footer.brand": "Marco Polo",
      "footer.tagline": "Web development & UI — interfaces simples, claires et crédibles.",
      "footer.nav.title": "Navigation",
      "footer.legal.title": "Légal",
      "footer.legal.mentions": "Mentions légales",
      "footer.legal.privacy": "Confidentialité",
      "footer.legal.cookies": "Cookies",
      "footer.copyright": "© 2026 Marco Polo. Tous droits réservés.",
      "footer.technical": "Fait main — HTML, CSS, JavaScript. Aucun cookie, aucun tracker.",
      /* status */
      "status.real": "Projet réel",
      "status.demo": "Démo",
      "status.concept": "Concept",
      /* work meta */
      "work.amplio-web.meta": "Web design · Développement",
      "work.le-patio.meta": "Restaurant · Landing page",
      "work.naya-beauty.meta": "Beauté · Direction visuelle",
      "work.amplio-web.stack.0": "Next.js",
      "work.amplio-web.stack.1": "TypeScript",
      "work.amplio-web.stack.2": "Tailwind CSS",
      "work.le-patio.stack.0": "HTML",
      "work.le-patio.stack.1": "CSS",
      "work.le-patio.stack.2": "JavaScript",
      "work.naya-beauty.stack.0": "UI design",
      "work.naya-beauty.stack.1": "Responsive",
      "work.naya-beauty.stack.2": "Content design",
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
      "case.amplio.context": "Projet principal de ce portfolio : une vitrine réelle regroupant direction artistique, structure de contenu et intégration front-end.",
      "case.amplio.problem": "[PLACEHOLDER — Décrire ici le problème initial et les contraintes réellement rencontrées.]",
      "case.amplio.constraint": "[PLACEHOLDER — contrainte réelle.]",
      "case.amplio.constraint2": "[PLACEHOLDER — contrainte réelle.]",
      "case.amplio.decision": "[PLACEHOLDER — décisions de design et d'implémentation à documenter, avec leurs raisons.]",
      "case.amplio.solution": "[PLACEHOLDER — Décrire ici la solution réellement implémentée.]",
      "case.interface.note": "Captures réelles à intégrer. Les cases restent des placeholders jusqu'à l'obtention des assets.",
      "case.result.unmeasured": "En attente",
      "case.result.measured": "[PLACEHOLDER] Résultat réellement mesuré ou observable.",
      "case.limits.text": "Aucune métrique de trafic, de conversion ou de performance n'est revendiquée tant qu'elle n'est pas réellement mesurée. Les éléments non documentés restent des placeholders.",
      "case.link.demo": "Démo — [PLACEHOLDER] URL une fois publiée et vérifiée",
      "case.link.code": "Code — [PLACEHOLDER] URL du dépôt GitHub",
      /* case body — le-patio */
      "case.le-patio.context": "Exploration réalisée pour le portfolio, sans client réel. Elle teste une structure simple orientée conversion.",
      "case.le-patio.problem": "Une activité locale a besoin d'une présence web simple, lisible et immédiatement orientée vers la prise de contact.",
      "case.le-patio.constraint": "Projet de démonstration, sans données réelles.",
      "case.le-patio.constraint2": "Une seule page, lecture rapide sur mobile.",
      "case.le-patio.decision": "Une page courte, structurée autour de l'offre, de la preuve visuelle, de la localisation et d'un CTA.",
      "case.le-patio.solution": "Une landing page mobile-first : présentation de l'offre, galerie, localisation et un seul chemin de contact. La hiérarchie guide le regard vers l'action.",
      /* case body — naya-beauty */
      "case.naya-beauty.context": "Exploration de design réalisée pour le portfolio, sans relation client. Elle teste une direction de marque et une hiérarchie de contenu pour une activité beauté.",
      "case.naya-beauty.problem": "Présenter une offre beauté de façon élégante sans cacher les informations utiles.",
      "case.naya-beauty.constraint": "Concept : aucun contenu ni donnée client réelle.",
      "case.naya-beauty.constraint2": "Priorité à la lecture mobile.",
      "case.naya-beauty.decision": "Hiérarchiser les prestations, la galerie et le contact avec une structure très mobile-first.",
      "case.naya-beauty.solution": "Une structure éditoriale légère : l'offre en tête, la galerie comme preuve, le rendez-vous comme action finale. Le design reste sobre et laisse la hiérarchie porter la lecture.",
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
      "doc.home.title": "Marco Polo — Portfolio web & interfaces",
      "doc.home.desc": "Portfolio personnel : projets web, interfaces, expériences digitales et études de cas — documentés par des preuves, pas par des promesses.",
      "doc.amplio.title": "Amplio Web — Étude de cas | Marco Polo",
      "doc.amplio.desc": "Étude de cas d'Amplio Web : projet web principal servant de démonstration de direction artistique, de structure produit et d'intégration front-end.",
      "doc.le-patio.title": "Le Patio — Étude de cas | Marco Polo",
      "doc.le-patio.desc": "Étude de cas du Patio : démo de landing page mobile-first pour présenter une offre et générer des prises de contact.",
      "doc.naya-beauty.title": "Naya Beauty — Étude de cas | Marco Polo",
      "doc.naya-beauty.desc": "Étude de cas de Naya Beauty : concept de mini-site pour organiser prestations, galerie et prise de rendez-vous.",
      "doc.mentions.title": "Mentions légales | Marco Polo",
      "doc.mentions.desc": "Mentions légales du portfolio de Marco Polo.",
      "doc.privacy.title": "Politique de confidentialité | Marco Polo",
      "doc.privacy.desc": "Politique de confidentialité du portfolio de Marco Polo.",
      "doc.cookies.title": "Cookies | Marco Polo",
      "doc.cookies.desc": "Inventaire des cookies et technologies de stockage du portfolio de Marco Polo.",
      /* legal */
      "legal.label": "Légal",
      "legal.editor": "Éditeur du site",
      "legal.editor.text": "[PLACEHOLDER — nom légal]",
      "legal.editor.address": "[PLACEHOLDER — adresse / siège]",
      "legal.editor.email": "[PLACEHOLDER — email]",
      "legal.site": "Site publié à l'adresse",
      "legal.site.url": "[PLACEHOLDER — URL de production à confirmer]",
      "legal.hosting": "Hébergement",
      "legal.hosting.text": "Vercel — [PLACEHOLDER — informations légales de l'hébergeur à compléter]",
      "legal.ip": "Propriété intellectuelle",
      "legal.ip.text": "[PLACEHOLDER — préciser les mentions utiles une fois les contenus et assets définitifs intégrés.]",
      /* privacy */
      "privacy.data": "Données collectées",
      "privacy.data.text": "[PLACEHOLDER — documenter uniquement les données réellement collectées. Sans formulaire actif ni outil de mesure, aucune donnée personnelle n'est traitée par ce site à ce stade.]",
      "privacy.purpose": "Finalités",
      "privacy.purpose.text": "[PLACEHOLDER — finalités réelles du traitement]",
      "privacy.contact": "Contact",
      "privacy.contact.text": "[PLACEHOLDER — email de contact]",
      /* cookies */
      "cookies.heading": "Inventaire actuel",
      "cookies.inventory": "À ce stade, ce site n'utilise aucun cookie, analytics, pixel, embed tiers, police distante ni script externe. Seul le stockage local du navigateur (localStorage) enregistre deux préférences utilisateur : le thème (sombre/clair) et la langue (FR/EN). Ces clés ne servent qu'à votre confort de lecture, restent sur votre appareil et ne sont ni lues ni transmises à un serveur.",
      "cookies.banner": "Aucune bannière de consentement n'est donc nécessaire : les seules données stockées sont des préférences strictement fonctionnelles, non publicitaires [PLACEHOLDER — revérifier cet inventaire à chaque intégration].",
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
      "hero.eyebrow": "Portfolio — Web development & UI",
      "hero.meta.aria": "Location and availability",
      "hero.index.aria": "Selected work",
      "hero.meta.location": "Guinea · Remote",
      "hero.meta.availability": "Available for selected projects",
      "hero.title": "I build simple, clear, and credible web experiences.",
      "hero.lead": "Web interfaces, mini-sites, and digital projects — documented by concrete proof rather than promises.",
      "hero.cta.contact": "Contact me",
      "hero.cta.work": "View projects",
      "hero.index.series": "Selection",
      "hero.index.count": "3 projects",
      "hero.index.items.0.sub": "Real project · Web design",
      "hero.index.items.1.sub": "Demo · Landing page",
      "hero.index.items.2.sub": "Concept · Visual direction",
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
      "section.about.rows.0.text": "[PLACEHOLDER — short bio to write]",
      "section.about.rows.1.title": "What I learn",
      "section.about.rows.1.text": "Web development, design systems, performance and accessibility — documented through the projects published in this portfolio.",
      "section.about.rows.2.title": "What I build",
      "section.about.rows.2.text": "Web interfaces, mini-sites, and case studies. The main project (Amplio Web) is real; the others are concepts or demos, marked as such.",
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
      "section.contact.channels.email": "Email",
      "section.contact.channels.formulaire": "Form",
      "section.contact.channels.whatsapp.value": "[PLACEHOLDER — configure the number in script.js]",
      "section.contact.channels.email.value": "[PLACEHOLDER — configure the email]",
      "section.contact.channels.formulaire.value": "Coming — after choosing the provider",
      "section.contact.legal": "Legal information",
      /* footer */
      "footer.brand": "Marco Polo",
      "footer.tagline": "Web development & UI — simple, clear, and credible interfaces.",
      "footer.nav.title": "Navigation",
      "footer.legal.title": "Legal",
      "footer.legal.mentions": "Legal notice",
      "footer.legal.privacy": "Privacy",
      "footer.legal.cookies": "Cookies",
      "footer.copyright": "© 2026 Marco Polo. All rights reserved.",
      "footer.technical": "Handmade — HTML, CSS, JavaScript. No cookies, no tracking.",
      /* status */
      "status.real": "Real project",
      "status.demo": "Demo",
      "status.concept": "Concept",
      /* work meta */
      "work.amplio-web.meta": "Web design · Development",
      "work.le-patio.meta": "Restaurant · Landing page",
      "work.naya-beauty.meta": "Beauty · Visual direction",
      "work.amplio-web.stack.0": "Next.js",
      "work.amplio-web.stack.1": "TypeScript",
      "work.amplio-web.stack.2": "Tailwind CSS",
      "work.le-patio.stack.0": "HTML",
      "work.le-patio.stack.1": "CSS",
      "work.le-patio.stack.2": "JavaScript",
      "work.naya-beauty.stack.0": "UI design",
      "work.naya-beauty.stack.1": "Responsive",
      "work.naya-beauty.stack.2": "Content design",
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
      "case.amplio.problem": "[PLACEHOLDER — Describe the initial problem and constraints actually encountered.]",
      "case.amplio.constraint": "[PLACEHOLDER — real constraint.]",
      "case.amplio.constraint2": "[PLACEHOLDER — real constraint.]",
      "case.amplio.decision": "[PLACEHOLDER — design and implementation decisions to document, with their reasons.]",
      "case.amplio.solution": "[PLACEHOLDER — Describe the solution actually implemented.]",
      "case.interface.note": "Real captures to integrate. Placeholder blocks until assets are available.",
      "case.result.unmeasured": "Pending",
      "case.result.measured": "[PLACEHOLDER] Result actually measured or observable.",
      "case.limits.text": "No traffic, conversion, or performance metric is claimed until it is actually measured. Undocumented elements remain placeholders.",
      "case.link.demo": "Demo — [PLACEHOLDER] URL once published and verified",
      "case.link.code": "Code — [PLACEHOLDER] URL of the GitHub repository",
      /* case body — le-patio */
      "case.le-patio.context": "Exploration made for the portfolio, without a real client. It tests a simple conversion-oriented structure.",
      "case.le-patio.problem": "A local business needs a simple, readable web presence immediately oriented toward contact.",
      "case.le-patio.constraint": "Demo project, no real data.",
      "case.le-patio.constraint2": "A single page, quick reading on mobile.",
      "case.le-patio.decision": "A short page structured around the offer, visual proof, location, and a CTA.",
      "case.le-patio.solution": "A mobile-first landing page: offer presentation, gallery, location, and a single path to contact. Hierarchy guides the eye toward the action.",
      /* case body — naya-beauty */
      "case.naya-beauty.context": "Design exploration made for the portfolio, without a client relationship. It tests a brand direction and content hierarchy for a beauty activity.",
      "case.naya-beauty.problem": "Present a beauty offer elegantly without hiding useful information.",
      "case.naya-beauty.constraint": "Concept: no real content or client data.",
      "case.naya-beauty.constraint2": "Priority to mobile reading.",
      "case.naya-beauty.decision": "Scope the services, gallery, and contact with a very mobile-first structure.",
      "case.naya-beauty.solution": "A lightweight editorial structure: the offer at the top, the gallery as proof, the appointment as the final action. The design stays sober and lets hierarchy carry the reading.",
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
      "doc.home.title": "Marco Polo — Web portfolio & interfaces",
      "doc.home.desc": "Personal portfolio: web projects, interfaces, digital experiences, and case studies — documented by proof, not promises.",
      "doc.amplio.title": "Amplio Web — Case study | Marco Polo",
      "doc.amplio.desc": "Amplio Web case study: the main web project serving as a demonstration of art direction, product structure, and front-end integration.",
      "doc.le-patio.title": "Le Patio — Case study | Marco Polo",
      "doc.le-patio.desc": "Le Patio case study: a mobile-first landing page demo for presenting an offer and generating contacts.",
      "doc.naya-beauty.title": "Naya Beauty — Case study | Marco Polo",
      "doc.naya-beauty.desc": "Naya Beauty case study: a mini-site concept structuring services, a gallery, and appointment booking.",
      "doc.mentions.title": "Legal notice | Marco Polo",
      "doc.mentions.desc": "Legal notice for the Marco Polo portfolio.",
      "doc.privacy.title": "Privacy policy | Marco Polo",
      "doc.privacy.desc": "Privacy policy for the Marco Polo portfolio.",
      "doc.cookies.title": "Cookies | Marco Polo",
      "doc.cookies.desc": "Cookie and storage inventory for the Marco Polo portfolio.",
      /* legal */
      "legal.label": "Legal",
      "legal.editor": "Site editor",
      "legal.editor.text": "[PLACEHOLDER — legal name]",
      "legal.editor.address": "[PLACEHOLDER — address / headquarters]",
      "legal.editor.email": "[PLACEHOLDER — email]",
      "legal.site": "Site published at",
      "legal.site.url": "[PLACEHOLDER — production URL to confirm]",
      "legal.hosting": "Hosting",
      "legal.hosting.text": "Vercel — [PLACEHOLDER — legal information about the host to complete]",
      "legal.ip": "Intellectual property",
      "legal.ip.text": "[PLACEHOLDER — specify the relevant notices once the final content and assets are integrated.]",
      /* privacy */
      "privacy.data": "Data collected",
      "privacy.data.text": "[PLACEHOLDER — document only the data actually collected. With no active form or measurement tool, no personal data is processed by this site at this stage.]",
      "privacy.purpose": "Purposes",
      "privacy.purpose.text": "[PLACEHOLDER — actual processing purposes]",
      "privacy.contact": "Contact",
      "privacy.contact.text": "[PLACEHOLDER — contact email]",
      /* cookies */
      "cookies.heading": "Current inventory",
      "cookies.inventory": "At this stage, this site uses no cookies, analytics, pixels, third-party embeds, remote fonts, or external scripts. Only browser local storage (localStorage) records two user preferences: the theme (dark/light) and the language (FR/EN). These keys serve only your reading comfort, stay on your device, and are neither read nor transmitted to any server.",
      "cookies.banner": "No consent banner is therefore necessary: the only stored data are strictly functional, non-advertising preferences [PLACEHOLDER — reverify this inventory with each integration].",
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
    whatsappNumber: "",
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