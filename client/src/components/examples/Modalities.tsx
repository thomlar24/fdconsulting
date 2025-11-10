import Modalities from '../Modalities';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ModalitiesExample() {
  return (
    <LanguageProvider>
      <Modalities />
    </LanguageProvider>
  );
}
