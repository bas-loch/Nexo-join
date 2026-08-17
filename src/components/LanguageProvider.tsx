"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Locale, translations, locales } from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)["fr"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "caicco-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (locales as readonly string[]).includes(stored)) {
      setLocaleState(stored as Locale);
      return;
    }
    // Pas de préférence enregistrée : on propose une langue selon le
    // navigateur du visiteur si elle fait partie des langues disponibles,
    // sinon on reste sur le français par défaut.
    const browserLang = window.navigator.language.slice(0, 2);
    if ((locales as readonly string[]).includes(browserLang)) {
      setLocaleState(browserLang as Locale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
