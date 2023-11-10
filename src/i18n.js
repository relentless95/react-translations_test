import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
// detect user language
.use(LanguageDetector)
// pass the i18n instance to react-i18next.