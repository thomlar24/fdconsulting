import About from '../About';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function AboutExample() {
  return (
    <LanguageProvider>
      <About />
    </LanguageProvider>
  );
}
