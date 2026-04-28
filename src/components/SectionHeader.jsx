import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, align = 'center' }) {
  return (
    <motion.div
      className={align === 'left' ? 'mb-8 text-left' : 'mx-auto mb-8 max-w-2xl text-center'}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-100 md:text-4xl">{title}</h2>
    </motion.div>
  );
}
