import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only fixed left-4 top-4 z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only"
      >
        Aller au contenu
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="container-shell flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="focus-ring text-sm font-semibold tracking-tight"
            aria-label={`${site.name}, accueil`}
          >
            {site.name}
          </Link>

          <nav aria-label="Navigation principale">
            <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <a className="focus-ring transition-colors hover:text-white" href="/#work">
                Projets
              </a>
              <a className="focus-ring transition-colors hover:text-white" href="/#about">
                À propos
              </a>
              <a className="focus-ring transition-colors hover:text-white" href="/#contact">
                Contact
              </a>
            </div>

            <details className="relative md:hidden">
              <summary className="focus-ring cursor-pointer list-none rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300">
                Menu
              </summary>
              <div className="absolute right-0 top-12 w-48 rounded-2xl border border-white/10 bg-zinc-950 p-2 shadow-2xl">
                <a className="focus-ring block rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5" href="/#work">
                  Projets
                </a>
                <a className="focus-ring block rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5" href="/#about">
                  À propos
                </a>
                <a className="focus-ring block rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5" href="/#contact">
                  Contact
                </a>
              </div>
            </details>
          </nav>
        </div>
      </header>
    </>
  );
}
