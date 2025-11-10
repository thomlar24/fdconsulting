import { useLanguage } from '@/contexts/LanguageContext';

export default function PowerBIDashboardSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: '¿Qué son los dashboards de Power BI?',
      description: 'Los dashboards de Power BI son herramientas visuales interactivas que transforman datos complejos en información clara y accionable. Permiten a las empresas tomar decisiones informadas basadas en análisis en tiempo real.',
      benefits: [
        'Visualización interactiva de datos en tiempo real',
        'Análisis de múltiples fuentes de información',
        'Indicadores clave de desempeño (KPIs) personalizables',
        'Reportes automatizados y compartibles'
      ]
    },
    en: {
      title: 'What are Power BI Dashboards?',
      description: 'Power BI dashboards are interactive visual tools that transform complex data into clear and actionable insights. They enable businesses to make informed decisions based on real-time analysis.',
      benefits: [
        'Interactive real-time data visualization',
        'Multi-source data analysis',
        'Customizable key performance indicators (KPIs)',
        'Automated and shareable reports'
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.description}
          </p>
        </div>

        <div className="mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg bg-card border mx-auto" style={{ maxWidth: '1140px' }}>
            <div className="aspect-video w-full">
              <iframe 
                title="dashboard webpage" 
                width="100%" 
                height="100%" 
                src="https://app.powerbi.com/view?r=eyJrIjoiMzBlYjZjNWEtMjY1ZS00YjVhLWIwMGYtNzIwNzIzYjQ3YTZiIiwidCI6IjFhOTgyMmY5LTNhNjQtNGY2MC1hZDBmLWUyZjNmOTYzNTk2NCIsImMiOjR9" 
                frameBorder="0" 
                allowFullScreen={true}
                className="w-full h-full"
                data-testid="iframe-powerbi-dashboard"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3" data-testid={`benefit-item-${index}`}>
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <p className="text-foreground">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
