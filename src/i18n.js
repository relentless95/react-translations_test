import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // translations here
          description: {
            part1: "Edit <1>src/App.js<1> and save to reload.",
            part2: "Learn React",
          },
          counter_one: "Changed language just once",
          counter_other: "Changed language already {{count}} times",
        },
      },

      de: {
        translation: {
          description: {
            part1: "Andere <1>src/App.js</1> und speichere um neu zu laden.",
            part2: "Lerne React",
          },

          counter_one: "Die Sprache wurde erst ein mal gewechselt",
          counter_other: "Die Sprache wurde {{count}} mal gewechselt",
        },
      },
    },
  });

export default i18n;
