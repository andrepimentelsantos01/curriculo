import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';
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
          {[44, 72, 54, 86, 62, 95].map((height, index) => (
            <motion.span
              key={height}
              style={{ height: `${height}%` }}
              initial={{ scaleY: 0.25, opacity: 0.45 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }}
            />
          ))}
        </div>
        <motion.div
          className="line-chart"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, delay: 0.22, ease: 'easeOut' }}
        />
        <motion.div className="donut" whileHover={{ scale: 1.08 }} />
        <div className="data-stack">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={{ x: [0, item % 2 ? -8 : 8, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: item * 0.22, ease: 'easeInOut' }}
            />
          ))}
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
            <h2 className="text-2xl font-semibold text-slate-100">Resumo profissional</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-300">{profile.professional.executive}</p>
        </motion.div>
        <DashboardIllustration />
      </div>
    </section>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';
  const Icon = isLight ? Moon : Sun;

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
      aria-pressed={isLight}
      onClick={onToggle}
    >
      <Icon size={20} strokeWidth={2.1} />
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const projectTrackRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const scrollProjects = (direction) => {
    projectTrackRef.current?.scrollBy({
      left: direction * 360,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`app-root min-h-screen overflow-x-hidden bg-ink text-slate-50 ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className="site-bg" />
      <ThemeToggle theme={theme} onToggle={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))} />
      <Navbar />
      <main className="pt-[72px]">
        <Hero profile={profile.professional} flow={profile.flow} />
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {profile.valueAreas.map((item, index) => (
              <ValueCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="projetos" className="layout-shell py-14">
          <SectionHeader eyebrow="Projetos e entregas" title="Soluções construídas" />
          <div className="project-carousel">
            <button type="button" className="project-nav project-nav-left" aria-label="Ver projetos anteriores" onClick={() => scrollProjects(-1)}>
              <ChevronLeft size={22} />
            </button>
            <div ref={projectTrackRef} className="project-scroll flex gap-5 overflow-x-auto px-4 py-7">
              {profile.projects.map((item, index) => (
                <ProjectCard key={item.title} item={item} index={index} />
              ))}
            </div>
            <button type="button" className="project-nav project-nav-right" aria-label="Ver mais projetos" onClick={() => scrollProjects(1)}>
              <ChevronRight size={22} />
            </button>
          </div>
        </section>

        <Differentiator items={profile.differentiators} />
        <Footer links={profile.socialLinks} />
      </main>
    </div>
  );
}

export default App;
