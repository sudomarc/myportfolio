import Link from "next/link";
import type { Project } from "@/data/projects";

const statusLabel = {
  real: "Projet réel",
  demo: "Démo",
  concept: "Concept",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group surface overflow-hidden rounded-[28px] transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-6">
        <div className="flex h-full items-end">
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            {statusLabel[project.status]}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>
          <span className="text-xs text-zinc-500">{project.year}</span>
        </div>

        <p className="text-sm leading-6 text-zinc-400">{project.summary}</p>

        <Link
          href={`/work/${project.slug}`}
          className="focus-ring inline-flex text-sm font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-white"
        >
          Voir l’étude de cas →
        </Link>
      </div>
    </article>
  );
}
