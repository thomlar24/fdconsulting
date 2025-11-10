import { Card } from '@/components/ui/card';
import { Zap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'Service Models',
    modalities: [
      {
        icon: Zap,
        title: 'One-time Projects',
        description: 'Specific, focused engagements designed to solve particular challenges.',
        example: 'Example: organizing a database to generate reliable reports.',
      },
      {
        icon: Calendar,
        title: 'Monthly Consulting',
        description: 'Ongoing partnership providing continuous support and strategic guidance.',
        example: 'Example: ongoing support in data analysis and audits.',
      },
    ],
  },
  es: {
    title: 'Modalidades de Trabajo',
    modalities: [
      {
        icon: Zap,
        title: 'Proyectos Puntuales',
        description: 'Compromisos específicos y enfocados diseñados para resolver desafíos particulares.',
        example: 'Ejemplo: organización de una base de datos para generar reportes confiables.',
      },
      {
        icon: Calendar,
        title: 'Acompañamiento Mensual',
        description: 'Asociación continua que proporciona soporte y orientación estratégica.',
        example: 'Ejemplo: soporte continuo en análisis de información y auditorías.',
      },
    ],
  },
};

export default function Modalities() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.modalities.map((modality, index) => {
            const Icon = modality.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate"
                data-testid={`card-modality-${index}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{modality.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{modality.description}</p>
                <p className="text-sm text-muted-foreground/80 italic">{modality.example}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
