import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      <div className="container mt-20 mx-auto px-6 sm:px-12 py-4 relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
