export type ProjectStatus = "real" | "demo" | "concept";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  year: string;
  stack: string[];
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  liveUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "amplio-web",
    title: "Amplio Web",
    category: "Web design · développement",
    summary:
      "Projet web principal servant de démonstration de direction artistique, de structure produit et d’intégration front-end.",
    status: "real",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    description:
      "Projet réel. La fiche devra être complétée avec les décisions de design, les contraintes et les éléments publiables réellement vérifiés.",
    problem:
      "[PLACEHOLDER] Décrire ici le problème initial et les contraintes réellement rencontrées.",
    solution:
      "[PLACEHOLDER] Décrire ici la solution réellement implémentée.",
    results: [
      "[PLACEHOLDER] Résultat vérifiable.",
      "[PLACEHOLDER] Résultat vérifiable.",
    ],
  },
  {
    slug: "le-patio",
    title: "Le Patio",
    category: "Restaurant · landing page",
    summary:
      "Concept de landing page mobile-first pensée pour présenter l’offre et générer des prises de contact.",
    status: "demo",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript"],
    featured: true,
    description:
      "Démo de portfolio. Aucun client ou résultat commercial ne doit être laissé entendre.",
    problem:
      "Une activité locale a besoin d’une présence web simple, lisible et immédiatement orientée vers la prise de contact.",
    solution:
      "Une page courte, structurée autour de l’offre, de la preuve visuelle, de la localisation et d’un CTA.",
    results: [
      "Projet de démonstration.",
      "Aucune métrique commerciale revendiquée.",
    ],
  },
  {
    slug: "naya-beauty",
    title: "Naya Beauty",
    category: "Beauté · direction visuelle",
    summary:
      "Concept de mini-site pour organiser prestations, galerie et prise de rendez-vous.",
    status: "concept",
    year: "2026",
    stack: ["UI design", "Responsive", "Content design"],
    featured: true,
    description:
      "Concept visuel destiné à explorer une direction de marque et une hiérarchie de contenu.",
    problem:
      "Présenter une offre beauté de façon élégante sans cacher les informations utiles.",
    solution:
      "Hiérarchiser les prestations, la galerie et le contact avec une structure très mobile-first.",
    results: [
      "Exploration de design.",
      "Aucune donnée client revendiquée.",
    ],
  },
];
