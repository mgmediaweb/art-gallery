import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.css';
// import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    detection: {
      order: [
        'path',
        'cookie',
        'htmlTag',
        'localStorage',
        'sessionStorage',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome_to_react')}</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
