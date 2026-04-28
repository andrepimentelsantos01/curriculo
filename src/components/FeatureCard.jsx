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

  return (
    <motion.article
      className={`group rounded-2xl border border-sky-300/20 bg-slate-900/55 p-7 backdrop-blur-xl transition ${tones[item.tone]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <Icon size={46} strokeWidth={1.6} />
      <h3 className="mt-5 text-2xl font-semibold text-slate-100">{item.title}</h3>
      <p className="mt-2 min-h-16 text-sm leading-6 text-slate-300">{item.description}</p>
      <button className="mt-5 grid h-10 w-10 place-items-center rounded-full border border-sky-300/20 bg-slate-950/45 text-slate-200 transition group-hover:border-current group-hover:text-current">
        <ArrowRight size={18} />
      </button>
    </motion.article>
  );
}
