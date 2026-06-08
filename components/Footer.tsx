import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl tracking-tight">
            Zaki Ul Hassan<span className="text-accent">.</span>
          </p>
          <p className="text-muted text-sm mt-4 max-w-xs">
            Brand & Product Designer helping ambitious teams turn unclear ideas
            into clear, trusted, memorable digital products.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-muted uppercase tracking-widest text-xs mb-2">Navigate</span>
          <Link href="/work" className="hover:text-accent transition-colors w-fit">Work</Link>
          <Link href="/thinking" className="hover:text-accent transition-colors w-fit">Thinking</Link>
          <Link href="/services" className="hover:text-accent transition-colors w-fit">Services</Link>
          <Link href="/about" className="hover:text-accent transition-colors w-fit">About</Link>
          <Link href="/start-a-project" className="hover:text-accent transition-colors w-fit">Start a Project</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="text-muted uppercase tracking-widest text-xs mb-2">Connect</span>
          <a href="mailto:zakihassan555@gmail.com" className="hover:text-accent transition-colors w-fit">
            zakihassan555@gmail.com
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors w-fit">
            LinkedIn
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors w-fit">
            Behance
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors w-fit">
            Twitter / X
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted">
        <p>© {new Date().getFullYear()} Zaki Ul Hassan. All rights reserved.</p>
        <p>Designed &amp; built with intent — clarity over decoration.</p>
      </div>
    </footer>
  );
}
