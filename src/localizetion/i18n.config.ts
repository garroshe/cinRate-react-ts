import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Імпорт JSON-файлів з перекладами
import enTranslations from './locales/en/en.json';
import ukTranslations from './locales/uk/uk.json';

i18n
    .use(LanguageDetector)      // Автоматичне визначення мови браузера
    .use(initReactI18next)      // Підключення i18next до React
    .init({
        resources: {
            en: { translation: enTranslations },
            uk: { translation: ukTranslations }
        },
        fallbackLng: 'en',        // Мова за замовчуванням, якщо визначити не вдалося
        interpolation: { escapeValue: false },
        detection: {              // Налаштування детектора мови
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],  // Де зберігати вибір користувача
        },
    });

export default i18n;
