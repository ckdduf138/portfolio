import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';

function App() {
  const { progress } = useScrollProgress();

  return (
    <div className="font-pretendard">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 via-violet-500 to-cyan-400 z-[100] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
