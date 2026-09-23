import { site } from "@/lib/site";

export default function LegalPage() {
  return (
    <main className="container-shell max-w-3xl py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Légal</p>
      <h1 className="display mt-3 text-5xl font-semibold">Mentions légales</h1>

      <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-400">
        <section>
          <h2 className="text-lg font-semibold text-white">Éditeur</h2>
          <p className="mt-2">[PLACEHOLDER — nom légal]</p>
          <p>[PLACEHOLDER — adresse / siège]</p>
          <p>[PLACEHOLDER — email]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Site</h2>
          <p className="mt-2">{site.url}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Hébergement</h2>
          <p className="mt-2">Vercel — [PLACEHOLDER — informations légales à compléter]</p>
        </section>
      </div>
    </main>
  );
}
