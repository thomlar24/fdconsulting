import { Card } from '@/components/ui/card';
import { Users, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: '¿Quiénes Somos?',
      description: 'Somos un equipo multidisciplinario de profesionales en análisis de datos, contabilidad, gestión de calidad y procesos administrativos.',
      mission: 'Apoyamos a pequeñas y medianas empresas a organizar su información, optimizar sus procesos y fortalecer su gestión financiera, garantizando el cumplimiento normativo y facilitando decisiones estratégicas basadas en datos.',
      features: [
        { icon: Users, title: 'Equipo Multidisciplinario', desc: 'Profesionales en datos, finanzas y calidad' },
        { icon: Target, title: 'Enfoque PYME', desc: 'Soluciones adaptadas a pequeñas y medianas empresas' },
        { icon: TrendingUp, title: 'Resultados Medibles', desc: 'Decisiones estratégicas basadas en datos' }
      ]
    },
    en: {
      title: 'About Us',
      description: 'We are a multidisciplinary team of professionals specialized in data analysis, accounting, quality management, and administrative processes.',
      mission: 'We help small and medium-sized businesses organize their information, optimize processes, and strengthen their financial management, ensuring compliance and enabling data-driven strategic decisions.',
      features: [
        { icon: Users, title: 'Multidisciplinary Team', desc: 'Experts in data, finance, and quality' },
        { icon: Target, title: 'SME Focus', desc: 'Solutions tailored for small and medium businesses' },
        { icon: TrendingUp, title: 'Measurable Results', desc: 'Data-driven strategic decisions' }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground mb-6">
            {t.description}
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            {t.mission}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-feature-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
