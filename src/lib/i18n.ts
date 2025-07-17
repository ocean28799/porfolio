import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language files
import { en } from './locales/en';
import { vi } from './locales/vi';
import { ja } from './locales/ja';

// Translation resources
const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
  ja: {
    translation: ja,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Set default language explicitly
    debug: false, // Disable debug to prevent hydration issues
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    // Prevent hydration mismatches
    react: {
      useSuspense: false,
    },

    // Load translations synchronously to prevent hydration issues
    initImmediate: false,
  });

export default i18n;
