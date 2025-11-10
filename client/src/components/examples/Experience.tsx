import Experience from '../Experience';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ExperienceExample() {
  return (
    <LanguageProvider>
      <Experience />
    </LanguageProvider>
  );
}
