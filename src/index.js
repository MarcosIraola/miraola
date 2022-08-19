import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import en from './lang/en.json'
import es from './lang/es.json'
import App from './App';
import { Suspense } from 'react';

const container = document.getElementById('root');
const root = createRoot(container);

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en:{ translation: en },
            es:{ translation: es },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    })

root.render(
    <Suspense fallback="Loading..">
        <Router>
            <App />
        </Router>
    </Suspense>
);
