import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viTranslation from "../assets/lang/vi.json";
import enTranslation from "../assets/lang/en.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
};

type AppLanguage = "vi" | "en";

class TranslateService {
  private defaultLanguage: AppLanguage = "en";

  constructor() {
    i18n.use(initReactI18next).init({
      resources: resources,
      fallbackLng: this.defaultLanguage,
      debug: true,
      interpolation: {
        escapeValue: false,
      },
    });
  }

  get currentLanguage() {
    return i18n.language;
  }

  changeLanguage(lang: AppLanguage) {
    i18n.changeLanguage(lang);
  }
}

export const translateService = new TranslateService();
