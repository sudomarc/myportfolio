import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="container-shell py-16 md:py-24">
      <Link
        href="/#work"
        className="focus-ring text-sm text-zinc-400 transition hover:text-white"
      >
        ← Retour aux projets
      </Link>

      <div className="mt-10 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          {project.category} · {project.status}
        </p>
        <h1 className="display mt-3 text-5xl font-semibold md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="mt-12 aspect-[16/8] rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-800 via-zinc-950 to-black" />

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <section>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Problème</p>
          <p className="mt-3 text-base leading-7 text-zinc-300">{project.problem}</p>
        </section>
        <section>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Solution</p>
          <p className="mt-3 text-base leading-7 text-zinc-300">{project.solution}</p>
        </section>
      </div>

      <section className="mt-14">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          Résultats / état
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {project.results.map((result) => (
            <div key={result} className="surface rounded-2xl p-5 text-sm text-zinc-300">
              {result}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Stack</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            Voir le projet
          </a>
        ) : null}
        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full border border-white/15 px-5 py-3 text-sm"
          >
            Voir le code
          </a>
        ) : null}
      </div>

      <p className="mt-12 text-xs text-zinc-600">{site.name} · {site.url}</p>
    </main>
  );
}
