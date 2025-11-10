import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import dashboardImage from '@assets/generated_images/Dashboard_analytics_visualization_ee6b142d.png';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: 'Experiencia',
      items: [
        'Creación de bases de datos y tableros de control para áreas administrativas, contables y operativas.',
        'Implementación de indicadores financieros y de gestión que mejoran la toma de decisiones.',
        'Acompañamiento en procesos de auditoría y cumplimiento normativo.'
      ]
    },
    en: {
      title: 'Experience',
      items: [
        'Development of databases and dashboards for administrative, accounting, and operational areas.',
        'Implementation of financial and management indicators that enhance decision-making.',
        'Support in audit processes and regulatory compliance.'
      ]
    }
  };

  const t = content[language];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {t.items.map((item, index) => (
              <div key={index} className="flex gap-4" data-testid={`experience-item-${index}`}>
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={dashboardImage} 
              alt="Dashboard Analytics" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
