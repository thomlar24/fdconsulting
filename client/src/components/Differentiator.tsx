import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'Why Work With Us',
    content: 'We combine technical expertise in data analysis with deep knowledge of accounting and quality management. Our integrated approach ensures that every recommendation is practical, implementable, and tailored to the specific needs of small and medium-sized businesses in Colombia and beyond.',
  },
  es: {
    title: 'Por Qué Trabajar con Nosotros',
    content: 'Combinamos experiencia técnica en análisis de datos con profundo conocimiento de contabilidad y gestión de calidad. Nuestro enfoque integrado garantiza que cada recomendación sea práctica, implementable y adaptada a las necesidades específicas de pequeñas y medianas empresas en Colombia y más allá.',
  },
};

export default function Differentiator() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Card className="p-12 text-center border-2 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.content}
          </p>
        </Card>
      </div>
    </section>
  );
}
