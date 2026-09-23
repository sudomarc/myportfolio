import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { getWhatsAppUrl, site } from "@/lib/site";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main id="main-content">
      <section className="container-shell flex min-h-[calc(100vh-4rem)] items-center py-20 md:py-28">
        <div className="grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full border border-white/10 px-3 py-1">
                {site.location}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                {site.availability}
              </span>
            </div>

            <p className="text-sm text-zinc-500">Portfolio personnel</p>
            <h1 className="display mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] md:text-7xl lg:text-8xl">
              Je construis des expériences web simples, claires et crédibles.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Interfaces web, mini-sites et projets digitaux documentés par des
              preuves concrètes plutôt que par des promesses.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Me contacter
              </a>
              <a
                href="#work"
                className="focus-ring rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Voir les projets
              </a>
            </div>
          </div>

          <div className="surface rounded-[32px] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Ce portfolio
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-3xl font-semibold tracking-tight">01</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Une identité claire en quelques secondes.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-tight">02</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Des études de cas qui montrent réellement le travail.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-tight">03</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Un contact sans friction lorsque le visiteur est convaincu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="container-shell scroll-mt-24 py-20 md:py-28">
        <SectionHeading
          eyebrow="Sélection"
          title="Les projets avant les promesses."
          description="Chaque carte devra devenir une étude de cas avec contexte, décisions, interface et éléments vérifiables."
        />

        <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className="relative">
              <p className="mb-4 font-mono text-xs text-zinc-600">
                0{index + 1} / {featuredProjects.length.toString().padStart(2, "0")}
              </p>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="container-shell scroll-mt-24 py-20 md:py-28">
        <SectionHeading
          eyebrow="À propos"
          title="Un portfolio qui reste honnête sur le niveau et les preuves."
        />

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {[
            ["01", "Clarté", "Une présentation compréhensible sans jargon inutile."],
            ["02", "Exécution", "Des projets consultables plutôt qu’une liste de compétences."],
            ["03", "Évolution", "Le portfolio s’améliore avec les vrais projets et les vraies données."],
          ].map(([index, title, text]) => (
            <div key={title} className="grid gap-4 py-6 md:grid-cols-[64px_180px_1fr] md:items-baseline">
              <span className="font-mono text-xs text-zinc-600">{index}</span>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="max-w-xl text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container-shell scroll-mt-24 py-20 md:py-28">
        <div className="surface rounded-[32px] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Contact</p>
          <h2 className="display mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">
            Un projet à construire ?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Le canal principal sera ajouté ici. Le numéro WhatsApp reste vide
            tant qu’il n’est pas configuré dans l’environnement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl()}
              className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Ouvrir WhatsApp
            </a>
            <Link
              href="/mentions-legales"
              className="focus-ring rounded-full border border-white/15 px-5 py-3 text-sm text-white"
            >
              Informations légales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
