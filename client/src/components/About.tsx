import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'About Us',
    paragraph1: 'We are a multidisciplinary team of professionals specialized in data analysis, accounting, quality management, and administrative processes.',
    paragraph2: 'We help small and medium-sized businesses organize their information, optimize processes, and strengthen their financial management, ensuring compliance and enabling data-driven strategic decisions.',
  },
  es: {
    title: 'Quiénes Somos',
    paragraph1: 'Somos un equipo multidisciplinario de profesionales en análisis de datos, contabilidad, gestión de calidad y procesos administrativos.',
    paragraph2: 'Apoyamos a pequeñas y medianas empresas a organizar su información, optimizar sus procesos y fortalecer su gestión financiera, garantizando el cumplimiento normativo y facilitando decisiones estratégicas basadas en datos.',
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          {t.title}
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
