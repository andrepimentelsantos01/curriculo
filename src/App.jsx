import { motion } from 'framer-motion';
import Differentiator from './components/Differentiator';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionHeader from './components/SectionHeader';
import ValueCard from './components/ValueCard';
import { profile } from './data/profileMock';

function DashboardIllustration() {
  return (
    <motion.div
      className="dashboard-abstract"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65 }}
    >
      <div className="dashboard-slab">
        <div className="bars">
          {[44, 72, 54, 86, 62, 95].map((height) => (
            <span key={height} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="line-chart" />
        <div className="donut" />
        <div className="data-stack">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="floating-panel panel-one" />
      <div className="floating-panel panel-two" />
    </motion.div>
  );
}

function ExecutiveSummary() {
  return (
    <section id="sobre" className="layout-shell py-8">
      <div className="grid overflow-hidden rounded-3xl border border-sky-300/18 bg-slate-900/42 backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="p-7 md:p-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-4 w-4 rounded-full bg-blue shadow-[0_0_18px_rgba(37,99,235,.85)]" />
            <h2 className="text-2xl font-semibold text-slate-100">Resumo executivo</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300">{profile.professional.executive}</p>
        </motion.div>
        <DashboardIllustration />
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-50">
      <div className="site-bg" />
      <Navbar />
      <main className="pt-[72px]">
        <Hero profile={profile.professional} flow={profile.flow} />
        <Footer links={profile.socialLinks} />
        <ExecutiveSummary />

        <section className="layout-shell py-14">
          <SectionHeader eyebrow="O que eu faço" title="Atuação principal" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {profile.actingCards.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="experiencia" className="layout-shell py-14">
          <SectionHeader eyebrow="Experiência aplicada" title="Onde gera valor" />
          <div className="grid gap-5 lg:grid-cols-3">
            {profile.valueAreas.map((item, index) => (
              <ValueCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="projetos" className="layout-shell py-14">
          <SectionHeader eyebrow="Projetos e entregas" title="Soluções que geram resultado" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {profile.projects.map((item, index) => (
              <ProjectCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <Differentiator items={profile.differentiators} />
      </main>
    </div>
  );
}

export default App;
