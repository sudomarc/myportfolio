export default function PrivacyPage() {
  return (
    <main className="container-shell max-w-3xl py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Légal</p>
      <h1 className="display mt-3 text-5xl font-semibold">
        Politique de confidentialité
      </h1>

      <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-400">
        <section>
          <h2 className="text-lg font-semibold text-white">Données collectées</h2>
          <p className="mt-2">
            [PLACEHOLDER — documenter uniquement les données réellement collectées.]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Finalités</h2>
          <p className="mt-2">[PLACEHOLDER — finalités réelles du traitement]</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-2">[PLACEHOLDER — email de contact]</p>
        </section>
      </div>
    </main>
  );
}
