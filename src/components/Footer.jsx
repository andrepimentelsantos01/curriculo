import { icons } from './iconMap';

export default function Footer({ links }) {
  return (
    <footer id="contato" className="layout-shell pb-8">
      <div className="flex flex-col gap-8 rounded-3xl border border-sky-300/14 bg-slate-900/55 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Vamos conversar?</p>
          <p className="mt-2 text-slate-300">Pronto para transformar dados em decisões melhores.</p>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {links.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-2 text-slate-200 transition hover:text-cyan"
              >
                <Icon size={22} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
