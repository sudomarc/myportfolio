import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-[70vh] items-center py-20">
      <div>
        <p className="text-sm text-zinc-500">404</p>
        <h1 className="display mt-3 text-5xl font-semibold">Page introuvable.</h1>
        <Link href="/" className="mt-6 inline-flex text-sm underline underline-offset-4">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
