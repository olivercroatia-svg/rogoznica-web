import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import hr from './locales/hr.json'
import en from './locales/en.json'
import de from './locales/de.json'
import sl from './locales/sl.json'
import it from './locales/it.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      hr: { translation: hr },
      en: { translation: en },
      de: { translation: de },
      sl: { translation: sl },
      it: { translation: it },
    },
    fallbackLng: 'hr',
    supportedLngs: ['hr', 'en', 'de', 'sl', 'it'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
