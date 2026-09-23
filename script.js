/* ============================================================
   PORTFOLIO — Progressive enhancement engine
   Theme · Language · Motion · Navigation · View Transitions
   Zero dependencies. Static site.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- i18n dictionary ----------
     FR is the default (visible without JavaScript).
     EN swaps textContent of every [data-i18n] element. */
  var dict = {
    fr: {
      /* navigation */
      "nav.home": "Accueil",
      "nav.projects": "Projets",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      /* hero */
      "hero.eyebrow": "Portfolio — Web development & UI",
      "hero.meta.location": "Guinée · Remote",
      "hero.meta.availability": "Disponible pour des projets sélectionnés",
      "hero.title": "Je construis des expériences web simples, claires et crédibles.",
      "hero.lead": "Interfaces web, mini-sites et projets digitaux — documentés par des preuves concrètes plutôt que par des promesses.",
      "hero.cta.contact": "Me contacter",
      "hero.cta.work": "Voir les projets",
      "hero.index.series": "Sélection",
      "hero.index.count": "3 projets",
      "hero.index.items.0.title": "Amplio Web",
      "hero.index.items.0.sub": "Projet réel · Web design",
      "hero.index.items.1.title": "Le Patio",
      "hero.index.items.1.sub": "Démo · Landing page",
      "hero.index.items.2.title": "Naya Beauty",
      "hero.index.items.2.sub": "Concept · Direction visuelle",
      /* sections */
      "section.work.title": "Les projets avant les promesses.",
      "section.work.desc": "Chaque réalisation est documentée comme une étude de cas : contexte, décisions, interface et éléments vérifiables. Les concepts et démos restent explicitement marqués.",
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
      "page.notfound.code": "404",
      "page.notfound.title": "Page introuvable.",
      "page.notfound.desc": "L'adresse demandée n'existe pas ou a été déplacée.",
      "page.notfound.home": "Retour à l'accueil",
      "page.notfound.work": "Voir les projets",
      /* legal */
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
      "cookies.inventory": "À ce stade, ce site n'utilise aucun cookie, localStorage, sessionStorage, IndexedDB, analytics, pixel, embed tiers, police distante ou script externe.",
      "cookies.banner": "Aucune bannière de consentement n'est donc nécessaire : il n'existe aucun stockage non essentiel à contrôler [PLACEHOLDER — revérifier cet inventaire à chaque intégration].",
      "cookies.evolution": "Évolution",
      "cookies.evolution.text": "Si une intégration ajoute un cookie, un stockage ou un outil de mesure, cet inventaire sera mis à jour avant l'implémentation, puis un contrôle de consentement sera évalué.",
      /* controls */
      "theme.label": "Thème",
      "lang.label": "Langue"
    },
    en: {
      /* navigation */
      "nav.home": "Home",
      "nav.projects": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      /* hero */
      "hero.eyebrow": "Portfolio — Web development & UI",
      "hero.meta.location": "Guinea · Remote",
      "hero.meta.availability": "Available for selected projects",
      "hero.title": "I build simple, clear, and credible web experiences.",
      "hero.lead": "Web interfaces, mini-sites, and digital projects — documented by concrete proof rather than promises.",
      "hero.cta.contact": "Contact me",
      "hero.cta.work": "View projects",
      "hero.index.series": "Selection",
      "hero.index.count": "3 projects",
      "hero.index.items.0.title": "Amplio Web",
      "hero.index.items.0.sub": "Real project · Web design",
      "hero.index.items.1.title": "Le Patio",
      "hero.index.items.1.sub": "Demo · Landing page",
      "hero.index.items.2.title": "Naya Beauty",
      "hero.index.items.2.sub": "Concept · Visual direction",
      /* sections */
      "section.work.title": "Projects before promises.",
      "section.work.desc": "Each work is documented as a case study: context, decisions, interface, and verifiable elements. Concepts and demos remain explicitly marked.",
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
      "page.notfound.code": "404",
      "page.notfound.title": "Page not found.",
      "page.notfound.desc": "The requested address does not exist or has moved.",
      "page.notfound.home": "Back to home",
      "page.notfound.work": "View projects",
      /* legal */
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
      "cookies.inventory": "At this stage, this site uses no cookies, localStorage, sessionStorage, IndexedDB, analytics, pixels, third-party embeds, remote fonts, or external scripts.",
      "cookies.banner": "No consent banner is therefore necessary: there is no non-essential storage to control [PLACEHOLDER — reverify this inventory with each integration].",
      "cookies.evolution": "Evolution",
      "cookies.evolution.text": "If an integration adds a cookie, storage, or measurement tool, this inventory will be updated before implementation, and a consent control will then be evaluated.",
      /* controls */
      "theme.label": "Theme",
      "lang.label": "Language"
    }
  };

  /* ---------- Icons ---------- */
  var moonIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var sunIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  /* ---------- Helpers ---------- */
  function tryLocal(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  /* ---------- Theme ---------- */
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
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
    var theme = tryLocal("theme") || getSystemTheme();
    var isDark = theme === "dark";
    btn.innerHTML = isDark ? sunIcon : moonIcon;
    btn.setAttribute("aria-label", isDark ? "Passer en mode clair" : "Passer en mode sombre");
    btn.setAttribute("title", isDark ? "Mode clair" : "Mode sombre");
  }
  function toggleTheme() {
    var current = tryLocal("theme") || getSystemTheme();
    var next = current === "dark" ? "light" : "dark";
    tryLocal("theme", next);
    applyTheme(next);
  }

  /* ---------- Language ---------- */
  function getLang() {
    return tryLocal("lang") || "fr";
  }
  function applyLang(lang) {
    document.documentElement.lang = lang;
    var d = dict[lang] || dict.fr;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var text = d[key];
      if (text) el.textContent = text;
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
  function setLang(lang) {
    tryLocal("lang", lang);
    applyLang(lang);
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

  /* ---------- Controls injection ---------- */
  function buildControls() {
    var inner = document.querySelector(".header-inner");
    if (!inner) return;
    var controls = document.createElement("div");
    controls.className = "header-controls";
    controls.innerHTML =
      '<button class="theme-toggle" id="theme-toggle" type="button" aria-label="Thème"></button>' +
      '<div class="lang-toggle" role="radiogroup" aria-label="Langue">' +
      '<button type="button" data-lang="fr" aria-pressed="true">FR</button>' +
      '<button type="button" data-lang="en" aria-pressed="false">EN</button>' +
      "</div>";
    inner.appendChild(controls);

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    controls.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
    updateThemeButton();
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
        link.setAttribute("aria-current", on ? "true" : "false");
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

  /* ---------- Reveal (IntersectionObserver) ---------- */
  function initReveals() {
    var items = document.querySelectorAll(".reveal, [data-reveal]");
    if (items.length === 0) return;
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

  /* ---------- Line reveals ---------- */
  function initLineReveals() {
    var items = document.querySelectorAll(".line-reveal");
    items.forEach(function (el) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    });
  }

  /* ---------- Navigation with View Transitions ---------- */
  function isSameOriginLink(href) {
    return href && (href.startsWith("/") || href.startsWith("#"));
  }
  function navigateTo(href) {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !document.startViewTransition) {
      location.href = href;
      return;
    }
    try {
      var tv = document.startViewTransition(function () {
        location.href = href;
      });
      tv.finally(function () {
        window.scrollTo(0, 0);
      });
    } catch (e) {
      location.href = href;
    }
  }
  function wireNav() {
    document.querySelectorAll('a[href^="/"]:not([target="_blank"]):not([download])').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href === "/") return;
        e.preventDefault();
        navigateTo(href);
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    applyTheme(tryLocal("theme"));
    applyLang(getLang());
    initWhatsAppLinks();
  buildControls();
    initActiveNav();
    initReveals();
    initLineReveals();
    wireNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();