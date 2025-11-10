import { Card } from '@/components/ui/card';
import { Database, BarChart3, Target, FileCheck, Calculator, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    title: 'Services',
    dataServices: {
      title: 'Data Analysis & Management',
      items: [
        'Normalization and cleaning of databases',
        'Dashboard creation (Power BI, Excel, Google Suite)',
        'Design and implementation of performance indicators (KPIs)',
        'Consulting in administrative and quality management processes',
      ],
    },
    financeServices: {
      title: 'Accounting & Finance',
      items: [
        'Comprehensive accounting and financial consulting',
        'Financial analysis and forecasting',
        'Implementation of accounting and budget controls',
      ],
    },
  },
  es: {
    title: 'Servicios',
    dataServices: {
      title: 'Análisis y Gestión de Datos',
      items: [
        'Normalización y depuración de bases de datos',
        'Creación de tableros de control (Power BI, Excel, Google Suite)',
        'Diseño e implementación de indicadores de gestión (KPI)',
        'Consultoría en procesos administrativos y de gestión de calidad',
      ],
    },
    financeServices: {
      title: 'Contabilidad y Finanzas',
      items: [
        'Asesoría contable y financiera integral',
        'Análisis financiero y proyección de resultados',
        'Implementación de controles contables y presupuestales',
      ],
    },
  },
};

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Database,
      title: t.dataServices.title,
      items: t.dataServices.items,
    },
    {
      icon: Calculator,
      title: t.financeServices.title,
      items: t.financeServices.items,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 border-l-4 border-l-primary hover:-translate-y-2 transition-transform duration-300 shadow-lg min-h-[350px] flex flex-col"
                data-testid={`card-service-${index}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
