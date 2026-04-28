import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { icons } from './iconMap';

const tone = {
  blue: 'from-blue/22 via-slate-900/70 to-slate-950 border-blue/35 text-blue',
  cyan: 'from-cyan/20 via-slate-900/70 to-slate-950 border-cyan/35 text-cyan',
  lime: 'from-lime/18 via-slate-900/70 to-slate-950 border-lime/35 text-lime',
};

export default function ValueCard({ item, index }) {
  const Icon = icons[item.icon];
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      className="value-flip h-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.01 }}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${item.title}: ${flipped ? 'mostrar resumo' : 'mostrar detalhes'}`}
        className={`value-flip-button kinetic-card relative min-h-[310px] w-full overflow-hidden rounded-2xl border bg-gradient-to-br text-left ${tone[item.tone]} ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((current) => !current)}
      >
        <span className="value-flip-inner">
          <span className="value-face value-face-front p-6">
            <span className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(248,250,252,.18),transparent_28%),linear-gradient(135deg,transparent_0_45%,rgba(34,211,238,.1)_45%_46%,transparent_46%)]" />
            <span className="relative">
              <span className="mb-5 flex items-center gap-4">
                <motion.span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-current/15"
                  animate={{ boxShadow: ['0 0 0 rgba(34,211,238,0)', '0 0 28px rgba(34,211,238,.2)', '0 0 0 rgba(34,211,238,0)'] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
                >
                  <Icon size={30} />
                </motion.span>
                <span className="text-xl font-semibold leading-tight text-slate-100">{item.title}</span>
              </span>
              <dl className="space-y-3 text-sm">
                <span className="flex gap-4">
                  <dt className="w-20 shrink-0 text-slate-100">Contexto</dt>
                  <dd className="text-slate-300">{item.context}</dd>
                </span>
                <span className="flex gap-4">
                  <dt className="w-20 shrink-0 text-slate-100">Entrega</dt>
                  <dd className="text-slate-300">{item.delivery}</dd>
                </span>
                <span className="flex gap-4">
                  <dt className="w-20 shrink-0 text-slate-100">Impacto</dt>
                  <dd className="text-slate-300">{item.impact}</dd>
                </span>
              </dl>
              <span className="mt-5 flex flex-wrap gap-2 rounded-xl border border-white/10 bg-slate-950/35 p-3">
                {item.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 + tagIndex * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </span>
            </span>
          </span>

          <span className="value-face value-face-back p-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-current">Detalhes da atuação</span>
            <span className="mt-3 block text-xl font-semibold leading-tight text-slate-100">{item.title}</span>
            <span className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {item.details.map((detail) => (
                <span key={detail} className="block">
                  {detail}
                </span>
              ))}
            </span>
            <span className="mt-4 block text-sm font-semibold text-slate-100">Principais entregas</span>
            <span className="mt-2 grid gap-2 text-sm leading-5 text-slate-300">
              {item.deliverables.map((deliverable) => (
                <span key={deliverable} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                  {deliverable}
                </span>
              ))}
            </span>
            <span className="mt-4 block text-sm font-semibold text-slate-100">Tecnologias aplicadas</span>
            <span className="mt-1 block text-sm leading-6 text-slate-300">{item.technologies}</span>
            <span className="mt-auto grid h-10 w-10 place-items-center rounded-full border border-current/55 bg-slate-950/45 text-current shadow-glow">
              <ArrowRight size={18} className="rotate-180" />
            </span>
          </span>
        </span>
      </button>
    </motion.article>
  );
}
