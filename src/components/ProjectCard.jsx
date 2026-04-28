import { motion } from 'framer-motion';

function MiniMockup({ type }) {
  if (type === 'pipeline') {
    return (
      <div className="mockup-panel grid grid-cols-3 items-center gap-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-10 rounded-lg border border-sky-300/20 bg-slate-950/60" />
        ))}
        <div className="col-span-3 h-px bg-gradient-to-r from-blue via-cyan to-lime" />
        {[0, 1, 2].map((item) => (
          <div key={`b-${item}`} className="h-8 rounded-lg border border-lime/20 bg-lime/10" />
        ))}
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="mockup-panel grid grid-cols-5 gap-2">
        <div className="col-span-3 rounded-lg bg-slate-950/70 p-2">
          <div className="h-20 rounded bg-[radial-gradient(circle_at_45%_45%,rgba(34,211,238,.45),transparent_30%)]" />
        </div>
        <div className="col-span-2 space-y-2">
          <div className="h-9 rounded bg-cyan/20" />
          <div className="h-9 rounded bg-lime/20" />
        </div>
      </div>
    );
  }

  return (
    <div className="mockup-panel">
      <div className="mb-3 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-blue" />
        <span className="h-2 w-2 rounded-full bg-cyan" />
        <span className="h-2 w-2 rounded-full bg-lime" />
      </div>
      <div className="rounded-lg border border-sky-300/15 bg-slate-950/70 p-4">
        {type === 'api' ? (
          <>
            <div className="mb-2 h-4 w-4/5 rounded bg-cyan/20" />
            <div className="h-16 rounded border border-blue/20 bg-blue/10" />
          </>
        ) : (
          <div className="flex h-24 items-end gap-2">
            {[34, 52, 40, 68, 48, 78, 62, 88].map((height) => (
              <span key={height} className="flex-1 rounded-t bg-gradient-to-t from-blue to-cyan" style={{ height: `${height}%` }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({ item, index }) {
  return (
    <motion.article
      className="flex h-full flex-col rounded-2xl border border-sky-300/18 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:border-cyan/45"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <span className="w-fit rounded-lg border border-cyan/20 bg-cyan/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cyan">
        {item.badge}
      </span>
      <h3 className="mt-5 text-xl font-semibold leading-tight text-slate-100">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
      <p className="mt-5 text-xs text-slate-400">Tecnologias</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {tech}
          </span>
        ))}
      </div>
      <MiniMockup type={item.mockup} />
    </motion.article>
  );
}
