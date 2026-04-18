import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import LearningSection from "./components/LearningSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ProcessSection from "./components/ProcessSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      <div className="container mt-20 mx-auto px-6 sm:px-12 py-4 relative z-10">
        <HeroSection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <SkillsSection />
        {/* <LearningSection /> */}
        {/* <ExperienceSection /> */}
        {/* <ProjectsSection /> */}
        <AchievementsSection />
        <ProcessSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
