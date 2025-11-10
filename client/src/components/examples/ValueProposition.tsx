import ValueProposition from '../ValueProposition';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ValuePropositionExample() {
  return (
    <LanguageProvider>
      <ValueProposition />
    </LanguageProvider>
  );
}
