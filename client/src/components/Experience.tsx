import { Card } from '@/components/ui/card';
import { Database, Target, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'Experience',
    experiences: [
      {
        icon: Database,
        text: 'Development of databases and dashboards for administrative, accounting, and operational areas.',
      },
      {
        icon: Target,
        text: 'Implementation of financial and management indicators that enhance decision-making.',
      },
      {
        icon: FileCheck,
        text: 'Support in audit processes and regulatory compliance.',
      },
    ],
  },
  es: {
    title: 'Experiencia',
    experiences: [
      {
        icon: Database,
        text: 'Creación de bases de datos y tableros de control para áreas administrativas, contables y operativas.',
      },
      {
        icon: Target,
        text: 'Implementación de indicadores financieros y de gestión que mejoran la toma de decisiones.',
      },
      {
        icon: FileCheck,
        text: 'Acompañamiento en procesos de auditoría y cumplimiento normativo.',
      },
    ],
  },
};

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate"
                data-testid={`experience-${index}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">{experience.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
