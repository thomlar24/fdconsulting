import { useLanguage } from '@/contexts/LanguageContext';
import { SiLinkedin } from 'react-icons/si';
import logoImage from '@assets/ChatGPT Image 15 oct 2025, 10_26_49 p.m._1760902491222.png';

const translations = {
  en: {
    company: 'Company',
    about: 'About Us',
    contact: 'Contact',
    services: 'Services',
    dataAnalysis: 'Data Analysis',
    accounting: 'Accounting & Finance',
    modalities: 'Service Models',
    projects: 'One-time Projects',
    monthly: 'Monthly Consulting',
    tagline: 'We organize your data, we optimize your processes',
    location: 'Pereira, Colombia',
    copyright: '© 2025 F & D Consulting. All rights reserved.',
  },
  es: {
    company: 'Empresa',
    about: 'Nosotros',
    contact: 'Contacto',
    services: 'Servicios',
    dataAnalysis: 'Análisis de Datos',
    accounting: 'Contabilidad y Finanzas',
    modalities: 'Modalidades',
    projects: 'Proyectos Puntuales',
    monthly: 'Acompañamiento Mensual',
    tagline: 'Organizamos sus datos, optimizamos sus procesos',
    location: 'Pereira, Colombia',
    copyright: '© 2025 F & D Consulting. Todos los derechos reservados.',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="F&D Consulting Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4 italic">
              "{t.tagline}"
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {t.location}
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary hover-elevate active-elevate-2"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.services}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.dataAnalysis}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.accounting}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.modalities}</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  {t.projects}
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  {t.monthly}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
