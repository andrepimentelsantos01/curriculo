import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      className="project-flip h-full shrink-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.01 }}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${item.title}: ${flipped ? 'mostrar resumo' : 'mostrar detalhes'}`}
        className={`project-flip-button kinetic-card relative min-h-[270px] w-[300px] overflow-hidden rounded-2xl border border-sky-300/18 bg-slate-900/60 p-5 text-left backdrop-blur-xl transition hover:border-cyan/45 sm:w-[315px] xl:w-[330px] ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((current) => !current)}
      >
        <span className="project-flip-inner">
          <span className="project-face project-face-front p-5">
            <span className="w-fit rounded-lg border border-cyan/20 bg-cyan/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cyan">
              {item.badge}
            </span>
            <span className="project-card-copy">
              <span className="mt-5 block text-xl font-semibold leading-tight text-slate-100">{item.title}</span>
              <span className="mt-3 block text-sm leading-6 text-slate-300">{item.description}</span>
              <span className="mt-5 block text-xs text-slate-400">Tecnologias</span>
              <span className="mt-2 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </span>
            </span>
          </span>

          <span className="project-face project-face-back p-5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Detalhes do projeto</span>
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
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {deliverable}
                </span>
              ))}
            </span>
            <span className="mt-4 block text-sm font-semibold text-slate-100">Impacto</span>
            <span className="mt-1 block text-sm leading-6 text-slate-300">{item.impact}</span>
            <span className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  {tag}
                </span>
              ))}
            </span>
            <span className="mt-auto grid h-10 w-10 place-items-center rounded-full border border-cyan/40 bg-slate-950/45 text-cyan shadow-glow">
              <ArrowRight size={18} className="rotate-180" />
            </span>
          </span>
        </span>
      </button>
    </motion.article>
  );
}
