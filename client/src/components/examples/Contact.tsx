import Contact from '../Contact';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';

export default function ContactExample() {
  return (
    <LanguageProvider>
      <Contact />
      <Toaster />
    </LanguageProvider>
  );
}
