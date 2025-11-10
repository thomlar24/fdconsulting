import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PowerBIDashboardSection from '@/components/PowerBIDashboardSection';
import WorkModelsSection from '@/components/WorkModelsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background" id="home">
          <Navigation />
          <Hero />
          <AboutSection />
          <ServicesSection />
          <div id="powerbi">
            <PowerBIDashboardSection />
          </div>
          <WorkModelsSection />
          <ExperienceSection />
          <ValuePropositionSection />
          <ContactSection />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
