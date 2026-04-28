import { motion } from 'framer-motion';
import { icons } from './iconMap';

const toneClass = {
  blue: 'border-blue/50 text-blue shadow-[0_0_34px_rgba(37,99,235,0.22)]',
  cyan: 'border-cyan/45 text-cyan shadow-[0_0_34px_rgba(34,211,238,0.2)]',
  lime: 'border-lime/45 text-lime shadow-[0_0_34px_rgba(132,204,22,0.2)]',
};

export default function FlowCard({ item, index }) {
  const Icon = icons[item.icon];

  return (
    <motion.div
      className={`relative grid min-h-32 w-32 place-items-center rounded-2xl border bg-slate-950/45 p-4 backdrop-blur ${toneClass[item.tone]}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, delay: index * 0.25, ease: 'easeInOut' }}
      whileHover={{ scale: 1.06, y: -8 }}
    >
      <Icon size={44} strokeWidth={1.65} />
      <p className="mt-3 text-base font-semibold text-slate-100">{item.title}</p>
    </motion.div>
  );
}
