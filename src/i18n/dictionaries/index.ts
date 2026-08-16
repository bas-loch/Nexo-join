import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "./types";
import fr from "./fr";
import en from "./en";
import de from "./de";

const dictionaries: Record<Locale, Dictionary> = { fr, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
