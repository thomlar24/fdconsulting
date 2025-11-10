import { Heart, DollarSign, Award, GitMerge } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'Our Value Proposition',
    values: [
      {
        icon: Heart,
        title: 'Personalized Attention',
        description: 'We work closely with each client to understand their unique needs and challenges.',
      },
      {
        icon: DollarSign,
        title: 'Fair and Flexible Pricing',
        description: 'Transparent, competitive rates adapted to the reality of small and medium businesses.',
      },
      {
        icon: Award,
        title: 'Hands-on Experience',
        description: 'Practical expertise in data, quality management, and finance that delivers real results.',
      },
      {
        icon: GitMerge,
        title: 'Integrated Approach',
        description: 'We bridge the gap between operational and financial aspects for holistic business improvement.',
      },
    ],
  },
  es: {
    title: 'Nuestro Diferencial',
    values: [
      {
        icon: Heart,
        title: 'Atención Personalizada',
        description: 'Trabajamos de cerca con cada cliente para entender sus necesidades y desafíos únicos.',
      },
      {
        icon: DollarSign,
        title: 'Tarifas Flexibles y Justas',
        description: 'Tarifas transparentes y competitivas adaptadas a la realidad de pequeñas y medianas empresas.',
      },
      {
        icon: Award,
        title: 'Experiencia Práctica',
        description: 'Experiencia práctica en datos, gestión de calidad y finanzas que entrega resultados reales.',
      },
      {
        icon: GitMerge,
        title: 'Enfoque Integral',
        description: 'Conectamos lo operativo y lo financiero para una mejora empresarial holística.',
      },
    ],
  },
};

export default function ValueProposition() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center" data-testid={`value-${index}`}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
