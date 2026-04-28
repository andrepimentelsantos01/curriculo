import { motion } from 'framer-motion';
import { Eye, Linkedin } from 'lucide-react';
import FlowCard from './FlowCard';

export default function Hero({ profile, flow }) {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="hero-grid layout-shell grid min-h-[620px] items-start gap-10 pb-8 pt-16 lg:grid-cols-[0.86fr_1.14fr] lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan"
            whileHover={{ scale: 1.04 }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(34,211,238,.9)]"
              animate={{ scale: [1, 1.45, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {profile.role}
          </motion.span>
          <h1 className="mt-6 text-6xl font-bold leading-[0.95] text-slate-50 md:text-7xl">
            {profile.firstName}
            <span className="gradient-text-flow block bg-gradient-to-r from-blue via-cyan to-lime bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-200">{profile.summary}</p>
          <p className="mt-5 flex max-w-xl flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-slate-300">
            {profile.stack.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {item}
                {index < profile.stack.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
              </span>
            ))}
          </p>
          <blockquote className="mt-6 max-w-xl border-l-2 border-cyan pl-5 text-lg italic leading-8 text-slate-300">
            "{profile.quote}"
          </blockquote>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projetos" className="btn-primary">
              <Eye size={18} />
              Ver portfólio
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin size={18} />
              Entrar em contato
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[420px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_70%_22%,rgba(34,211,238,.2),transparent_28%),radial-gradient(circle_at_84%_58%,rgba(132,204,22,.18),transparent_24%)]" />
          <div className="hero-orbit hidden lg:block" />
          <div className="absolute left-0 top-28 hidden h-px w-full bg-gradient-to-r from-transparent via-cyan to-transparent lg:block" />
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-9 pt-8 lg:flex-nowrap lg:justify-end">
            {flow.map((item, index) => (
              <div key={item.title} className="relative">
                <FlowCard item={item} index={index} />
                {index < flow.length - 1 && (
                  <span className="flow-connector absolute -right-8 top-1/2 hidden h-px w-7 bg-gradient-to-r from-cyan to-lime lg:block">
                    <span className="absolute -right-1 -top-1 h-2 w-2 rotate-45 border-r border-t border-lime" />
                  </span>
                )}
              </div>
            ))}
          </div>
          <svg className="absolute bottom-16 left-0 right-0 h-48 w-full opacity-80" viewBox="0 0 760 220" fill="none">
            {Array.from({ length: 9 }).map((_, index) => (
              <motion.path
                key={index}
                d={`M0 ${120 + index * 6} C 160 ${30 + index * 10}, 280 ${210 - index * 10}, 440 ${120 + index * 4} S 650 ${70 + index * 8}, 760 ${95 + index * 7}`}
                stroke={index % 3 === 0 ? '#84CC16' : '#22D3EE'}
                strokeOpacity={0.16 + index * 0.025}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.8, delay: index * 0.08 }}
              />
            ))}
          </svg>
          <motion.div
            className="absolute bottom-16 right-8 rounded-2xl border border-lime/20 bg-slate-950/45 p-4 text-sm text-slate-300 backdrop-blur-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="font-semibold text-lime">Decisões mais consistentes</span>
            <br />
            com dados confiáveis
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
