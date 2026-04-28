import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { icons } from './iconMap';

const tones = {
  blue: 'hover:border-blue/70 text-blue',
  cyan: 'hover:border-cyan/70 text-cyan',
  lime: 'hover:border-lime/70 text-lime',
};

export default function FeatureCard({ item, index }) {
  const Icon = icons[item.icon];
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="feature-flip h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.015, rotateX: 1.5, rotateY: -1.5 }}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${item.title}: ${flipped ? 'mostrar descrição' : 'mostrar tecnologias'}`}
        className={`feature-flip-button kinetic-card group min-h-[250px] w-full rounded-2xl border border-sky-300/20 bg-slate-900/55 text-left backdrop-blur-xl transition focus:outline-none focus-visible:border-current focus-visible:ring-2 focus-visible:ring-current/35 ${tones[item.tone]} ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((current) => !current)}
      >
        <span className="feature-flip-inner">
          <span className="feature-face feature-face-front p-7">
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.18, ease: 'easeInOut' }}
            >
              <Icon size={46} strokeWidth={1.6} />
            </motion.span>
            <span className="mt-5 block text-2xl font-semibold text-slate-100">{item.title}</span>
            <span className="mt-2 block min-h-16 text-sm leading-6 text-slate-300">{item.description}</span>
            <span className="mt-5 grid h-10 w-10 place-items-center rounded-full border border-sky-300/20 bg-slate-950/45 text-slate-200 transition group-hover:border-current group-hover:text-current group-hover:shadow-glow">
              <ArrowRight size={18} />
            </span>
          </span>

          <span className="feature-face feature-face-back p-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-current">Tecnologias</span>
            <span className="mt-4 block text-2xl font-semibold text-slate-100">{item.title}</span>
            <span className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-current/35 bg-slate-950/45 px-3 py-2 text-sm font-semibold text-slate-100 shadow-glow"
                >
                  {technology}
                </span>
              ))}
            </span>
            <span className="mt-auto grid h-10 w-10 place-items-center rounded-full border border-current/55 bg-slate-950/45 text-current shadow-glow">
              <ArrowRight size={18} className="rotate-180" />
            </span>
          </span>
        </span>
      </button>
    </motion.div>
  );
}
