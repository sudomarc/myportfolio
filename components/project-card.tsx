import Link from "next/link";
import type { Project } from "@/data/projects";

const statusLabel = {
  real: "Projet réel",
  demo: "Démo",
  concept: "Concept",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden">
      <Link
        href={`/work/${project.slug}`}
        className="focus-ring block"
        aria-label={`Voir l’étude de cas ${project.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-white/10 bg-zinc-950">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/80 via-zinc-950 to-black transition duration-500 group-hover:scale-[1.03]" />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              {statusLabel[project.status]}
            </span>
            <span className="font-mono text-xs text-zinc-500">{project.year}</span>
          </div>
        </div>
      </Link>

      <div className="pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
          {project.category}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">{project.summary}</p>
        <Link
          href={`/work/${project.slug}`}
          className="focus-ring mt-5 inline-flex text-sm font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-white"
        >
          Étude de cas →
        </Link>
      </div>
    </article>
  );
}
