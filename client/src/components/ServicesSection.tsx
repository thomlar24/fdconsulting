import { Card } from '@/components/ui/card';
import { Database, BarChart3, Target, Settings, Calculator, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: 'Servicios',
      dataTitle: 'Análisis de Datos',
      financeTitle: 'Contabilidad y Finanzas',
      dataServices: [
        { icon: Database, title: 'Normalización y depuración de bases de datos', desc: 'Organizamos y limpiamos sus datos para mayor confiabilidad' },
        { icon: BarChart3, title: 'Creación de tableros de control', desc: 'Power BI, Excel, Google Suite' },
        { icon: Target, title: 'Diseño e implementación de KPI', desc: 'Indicadores de gestión para medir el desempeño' },
        { icon: Settings, title: 'Consultoría en procesos administrativos', desc: 'Optimización y gestión de calidad' }
      ],
      financeServices: [
        { icon: Calculator, title: 'Asesoría contable y financiera integral', desc: 'Apoyo completo en la gestión contable' },
        { icon: TrendingUp, title: 'Análisis financiero y proyección de resultados', desc: 'Planeación financiera basada en datos' },
        { icon: Shield, title: 'Implementación de controles', desc: 'Controles contables y presupuestales' }
      ]
    },
    en: {
      title: 'Services',
      dataTitle: 'Data Analysis',
      financeTitle: 'Accounting & Finance',
      dataServices: [
        { icon: Database, title: 'Database normalization and cleaning', desc: 'We organize and clean your data for better reliability' },
        { icon: BarChart3, title: 'Dashboard creation', desc: 'Power BI, Excel, Google Suite' },
        { icon: Target, title: 'KPI design and implementation', desc: 'Performance indicators to measure success' },
        { icon: Settings, title: 'Administrative process consulting', desc: 'Optimization and quality management' }
      ],
      financeServices: [
        { icon: Calculator, title: 'Comprehensive accounting and financial consulting', desc: 'Complete support in accounting management' },
        { icon: TrendingUp, title: 'Financial analysis and forecasting', desc: 'Data-driven financial planning' },
        { icon: Shield, title: 'Control implementation', desc: 'Accounting and budget controls' }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          {t.title}
        </h2>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            {t.dataTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.dataServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-data-service-${index}`}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            {t.financeTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.financeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-finance-service-${index}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {service.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
