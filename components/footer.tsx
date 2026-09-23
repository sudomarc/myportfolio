export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Marco Polo. Tous droits réservés.</p>
        <nav className="flex flex-wrap gap-4" aria-label="Liens légaux">
          <a className="focus-ring hover:text-white" href="/mentions-legales">
            Mentions légales
          </a>
          <a className="focus-ring hover:text-white" href="/confidentialite">
            Confidentialité
          </a>
          <a className="focus-ring hover:text-white" href="/cookies">
            Cookies
          </a>
        </nav>
      </div>
    </footer>
  );
}
