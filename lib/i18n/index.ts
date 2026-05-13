import type { Locale } from "./types";
import type { Recipe } from "@/components/RecipeCard";
import { RECIPES_NL } from "./recipe-nl";
import { RECIPES_EN } from "./recipe-en";
import { RECIPES_DE } from "./recipe-de";
import { RECIPES_FR } from "./recipe-fr";
import { RECIPES_ES } from "./recipe-es";
import { RECIPES_IT } from "./recipe-it";

const BY_LOCALE: Record<Locale, Recipe[]> = {
  nl: RECIPES_NL,
  en: RECIPES_EN,
  de: RECIPES_DE,
  fr: RECIPES_FR,
  es: RECIPES_ES,
  it: RECIPES_IT,
};

export function getRecipes(locale: Locale): Recipe[] {
  return BY_LOCALE[locale];
}

export type { Locale, FaqItem } from "./types";
export { LOCALES, HTML_LANG } from "./types";
export type { UiCopy } from "./copy";
export { UI, FAQ } from "./copy";
