import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/generated_images/Professional_consulting_office_workspace_e3956044.png';

const translations = {
  en: {
    title: 'Financial & Data Consulting',
    subtitle: 'We organize your data, we optimize your processes',
    description: 'Transform your business with expert consulting in data analysis, accounting, quality management, and administrative processes.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
  },
  es: {
    title: 'Financial & Data Consulting',
    subtitle: 'Organizamos sus datos, optimizamos sus procesos',
    description: 'Transforme su negocio con consultoría experta en análisis de datos, contabilidad, gestión de calidad y procesos administrativos.',
    ctaPrimary: 'Comenzar',
    ctaSecondary: 'Saber Más',
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,46%,20%)]/80 to-[hsl(215,46%,20%)]/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-2xl md:text-3xl text-[hsl(41,54%,60%)] mb-6 font-light italic">
          "{t.subtitle}"
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover-elevate active-elevate-2 min-w-[160px]"
            data-testid="button-hero-cta-primary"
          >
            {t.ctaPrimary}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAbout}
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm min-w-[160px]"
            data-testid="button-hero-cta-secondary"
          >
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
