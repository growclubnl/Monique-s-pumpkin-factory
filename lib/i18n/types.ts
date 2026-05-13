export type Locale = "nl" | "en" | "de" | "fr" | "es" | "it";

export const LOCALES: Locale[] = ["nl", "en", "de", "fr", "es", "it"];

export const HTML_LANG: Record<Locale, string> = {
  nl: "nl",
  en: "en",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
};

export type FaqItem = { id: string; q: string; a: string };
