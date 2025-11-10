import Differentiator from '../Differentiator';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function DifferentiatorExample() {
  return (
    <LanguageProvider>
      <Differentiator />
    </LanguageProvider>
  );
}
