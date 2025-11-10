import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { language } = useLanguage();
  const content = {
    es: {
      title: 'Contacto',
      subtitle: 'Estamos listos para ayudarle a organizar sus datos y optimizar sus procesos',
      cta: 'Agenda una consulta gratuita',
      location: 'Ubicación',
      locationText: 'Pereira, Colombia',
      email: 'Correo Electrónico',
      phone: 'Teléfonos'
    },
    en: {
      title: 'Contact',
      subtitle: 'We are ready to help you organize your data and optimize your processes',
      cta: 'Schedule a free consultation',
      location: 'Location',
      locationText: 'Pereira, Colombia',
      email: 'Email',
      phone: 'Phone Numbers'
    }
  };

  const t = content[language];

  const phones = ['+57 310 2461590', '+57 312 7484606', '+57 304 4126727'];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.subtitle}
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full"
            onClick={() => window.location.href = 'mailto:team.fdconsulting@gmail.com'}
            data-testid="button-cta-contact"
          >
            {t.cta}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center" data-testid="card-location">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t.location}
            </h3>
            <p className="text-muted-foreground">
              {t.locationText}
            </p>
          </Card>

          <Card className="p-8 text-center" data-testid="card-email">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t.email}
            </h3>
            <a 
              href="mailto:team.fdconsulting@gmail.com" 
              className="text-primary hover:underline"
              data-testid="link-email"
            >
              team.fdconsulting@gmail.com
            </a>
          </Card>

          <Card className="p-8 text-center" data-testid="card-phones">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t.phone}
            </h3>
            <div className="space-y-1">
              {phones.map((phone, index) => (
                <a 
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '')}`} 
                  className="block text-primary hover:underline"
                  data-testid={`link-phone-${index}`}
                >
                  {phone}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
