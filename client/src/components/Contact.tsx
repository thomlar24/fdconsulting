import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const translations = {
  en: {
    title: 'Get In Touch',
    formTitle: 'Send Us a Message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Tell us about your project...',
    submitButton: 'Send Message',
    contactInfo: 'Contact Information',
    email: 'team.fdconsulting@gmail.com',
    location: 'Pereira, Colombia',
    phones: [
      '+57 310 2461590',
      '+57 312 7484606',
      '+57 304 4126727',
    ],
    successMessage: 'Message sent successfully! We\'ll be in touch soon.',
    errorMessage: 'Please fill in all fields.',
  },
  es: {
    title: 'Contacto',
    formTitle: 'Envíenos un Mensaje',
    namePlaceholder: 'Su Nombre',
    emailPlaceholder: 'Su Email',
    messagePlaceholder: 'Cuéntenos sobre su proyecto...',
    submitButton: 'Enviar Mensaje',
    contactInfo: 'Información de Contacto',
    email: 'team.fdconsulting@gmail.com',
    location: 'Pereira, Colombia',
    phones: [
      '+57 310 2461590',
      '+57 312 7484606',
      '+57 304 4126727',
    ],
    successMessage: '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',
    errorMessage: 'Por favor complete todos los campos.',
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: t.errorMessage,
        variant: 'destructive',
      });
      return;
    }
    console.log('Form submitted:', formData);
    toast({
      title: 'Success',
      description: t.successMessage,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="focus:ring-primary"
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="focus:ring-primary"
                  data-testid="input-email"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="focus:ring-primary resize-none"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground"
                data-testid="button-submit"
              >
                {t.submitButton}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{t.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{language === 'en' ? 'Location' : 'Ubicación'}</div>
                    <div className="text-muted-foreground">{t.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a
                      href={`mailto:${t.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      {t.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{language === 'en' ? 'Phone' : 'Teléfono'}</div>
                    <div className="space-y-1">
                      {t.phones.map((phone, index) => (
                        <div key={index}>
                          <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-phone-${index}`}
                          >
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
