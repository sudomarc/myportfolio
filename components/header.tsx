import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="focus-ring text-sm font-semibold tracking-tight"
          aria-label={`${site.name}, accueil`}
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-400">
          <a className="focus-ring transition-colors hover:text-white" href="/#work">
            Projets
          </a>
          <a className="focus-ring transition-colors hover:text-white" href="/#about">
            À propos
          </a>
          <a className="focus-ring transition-colors hover:text-white" href="/#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
