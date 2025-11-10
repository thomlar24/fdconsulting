import { Card } from '@/components/ui/card';
import { Zap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WorkModelsSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: 'Modalidades de Trabajo',
      models: [
        {
          icon: Zap,
          number: '1',
          title: 'Proyectos Puntuales',
          subtitle: 'One-time Projects',
          description: 'Soluciones específicas para necesidades concretas',
          example: 'Ejemplo: organización de una base de datos para generar reportes confiables.'
        },
        {
          icon: Calendar,
          number: '2',
          title: 'Acompañamiento Mensual',
          subtitle: 'Monthly Consulting',
          description: 'Soporte continuo y asesoría permanente',
          example: 'Ejemplo: soporte continuo en análisis de información y auditorías.'
        }
      ]
    },
    en: {
      title: 'Service Models',
      models: [
        {
          icon: Zap,
          number: '1',
          title: 'One-time Projects',
          subtitle: 'Proyectos Puntuales',
          description: 'Specific solutions for concrete needs',
          example: 'Example: organizing a database to generate reliable reports.'
        },
        {
          icon: Calendar,
          number: '2',
          title: 'Monthly Consulting',
          subtitle: 'Acompañamiento Mensual',
          description: 'Continuous support and permanent advisory',
          example: 'Example: ongoing support in data analysis and audits.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {t.models.map((model, index) => {
            const Icon = model.icon;
            return (
              <Card key={index} className="p-8 hover-elevate relative overflow-hidden" data-testid={`card-work-model-${index}`}>
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {model.number}
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {model.subtitle}
                </p>
                <p className="text-foreground mb-4">
                  {model.description}
                </p>
                <p className="text-muted-foreground text-sm">
                  {model.example}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
