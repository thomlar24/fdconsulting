import { Card } from '@/components/ui/card';
import { Heart, DollarSign, Award, GitMerge } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ValuePropositionSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: 'Nuestro Diferencial',
      values: [
        { icon: Heart, title: 'Atención personalizada', subtitle: 'Personalized attention' },
        { icon: DollarSign, title: 'Tarifas flexibles y justas', subtitle: 'Fair and flexible pricing' },
        { icon: Award, title: 'Experiencia práctica', subtitle: 'Hands-on experience in data, quality & finance' },
        { icon: GitMerge, title: 'Enfoque integral', subtitle: 'Integrated operational & financial approach' }
      ]
    },
    en: {
      title: 'Our Value Proposition',
      values: [
        { icon: Heart, title: 'Personalized attention', subtitle: 'Atención personalizada' },
        { icon: DollarSign, title: 'Fair and flexible pricing', subtitle: 'Tarifas flexibles y justas' },
        { icon: Award, title: 'Hands-on experience', subtitle: 'Experiencia práctica en datos, calidad y finanzas' },
        { icon: GitMerge, title: 'Integrated approach', subtitle: 'Enfoque integral entre lo operativo y lo financiero' }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-value-${index}`}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  {value.subtitle}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
