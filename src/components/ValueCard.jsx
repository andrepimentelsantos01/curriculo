import { motion } from 'framer-motion';
import { icons } from './iconMap';

const tone = {
  blue: 'from-blue/22 via-slate-900/70 to-slate-950 border-blue/35 text-blue',
  cyan: 'from-cyan/20 via-slate-900/70 to-slate-950 border-cyan/35 text-cyan',
  lime: 'from-lime/18 via-slate-900/70 to-slate-950 border-lime/35 text-lime',
};

export default function ValueCard({ item, index }) {
  const Icon = icons[item.icon];

  return (
    <motion.article
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-7 ${tone[item.tone]}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_20%_20%,rgba(248,250,252,.18),transparent_28%),linear-gradient(135deg,transparent_0_45%,rgba(34,211,238,.1)_45%_46%,transparent_46%)]" />
      <div className="relative">
        <div className="mb-5 flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-current/15">
            <Icon size={30} />
          </span>
          <h3 className="text-2xl font-semibold text-slate-100">{item.title}</h3>
        </div>
        <dl className="space-y-3 text-sm">
          <div className="flex gap-4">
            <dt className="w-20 text-slate-100">Contexto</dt>
            <dd className="text-slate-300">{item.context}</dd>
          </div>
          <div className="flex gap-4">
            <dt className="w-20 text-slate-100">Entrega</dt>
            <dd className="text-slate-300">{item.delivery}</dd>
          </div>
          <div className="flex gap-4">
            <dt className="w-20 text-slate-100">Impacto</dt>
            <dd className="text-slate-300">{item.impact}</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-wrap gap-3 rounded-xl border border-white/10 bg-slate-950/35 p-3">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
