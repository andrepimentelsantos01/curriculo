import { motion } from 'framer-motion';
import { icons } from './iconMap';

export default function Differentiator({ items }) {
  return (
    <section className="layout-shell py-14">
      <motion.div
        className="kinetic-card rounded-3xl border border-sky-300/25 bg-gradient-to-br from-blue/10 via-slate-900/70 to-cyan/10 p-6 text-center shadow-glow md:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Meu diferencial</p>
        <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-semibold leading-snug text-slate-100 md:text-3xl">
          Transformo processos operacionais confusos em sistemas analíticos claros, integrando dados, regras de
          negócio, APIs e interfaces para apoiar decisões reais.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, borderColor: 'rgba(132, 204, 22, 0.36)' }}
              >
                <motion.span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.25, ease: 'easeInOut' }}
                >
                  <Icon size={22} />
                </motion.span>
                <div>
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
