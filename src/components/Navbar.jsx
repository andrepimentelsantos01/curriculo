import { FileText } from 'lucide-react';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  return (
    <header className="app-navbar fixed left-0 right-0 top-0 z-50 border-b border-sky-300/10 bg-ink/78 backdrop-blur-xl">
      <nav className="layout-shell flex min-h-[72px] items-center justify-between py-4">
        <a
          href="https://drive.google.com/file/d/19AHdVub660T8Qfm4oO5eZbpR50-9V-8h/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-100"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue/15 text-cyan ring-1 ring-cyan/25">
            <FileText size={18} />
          </span>
          <span>Currículo</span>
        </a>
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-xl border border-sky-300/30 px-4 py-2 text-sm text-slate-100 shadow-glow transition hover:border-cyan hover:bg-cyan/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
