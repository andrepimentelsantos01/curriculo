import { BarChart3 } from 'lucide-react';
import { profile } from '../data/profileMock';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: profile.professional.linkedin, external: true },
];

export default function Navbar() {
  return (
    <header className="app-navbar fixed left-0 right-0 top-0 z-50 border-b border-sky-300/10 bg-ink/78 backdrop-blur-xl">
      <nav className="layout-shell flex min-h-[72px] items-center justify-between py-4">
        <a href="#topo" className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-100">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue/15 text-cyan ring-1 ring-cyan/25">
            <BarChart3 size={18} />
          </span>
          <span className="hidden sm:inline">
            DADOS <span className="text-lime">•</span> BI <span className="text-lime">•</span> ANALÍTICO
          </span>
          <span className="sm:hidden">DADOS BI</span>
        </a>
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
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
