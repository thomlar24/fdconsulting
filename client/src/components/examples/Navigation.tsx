import Navigation from '../Navigation';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navigation />
      </LanguageProvider>
    </ThemeProvider>
  );
}
