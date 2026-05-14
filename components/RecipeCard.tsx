"use client";

import Image from "next/image";
import { useState } from "react";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { HTML_LANG, UI } from "@/lib/i18n";
import { buildStandaloneRecipeHtml } from "@/lib/recipe-html";
import { fetchLogoSvg } from "@/lib/recipe-logo";
import { openHtmlPrintDialog } from "@/lib/recipe-print";
import { useLanguage } from "@/components/LanguageProvider";

export type Recipe = {
  tag: string;
  name: string;
  description: string;
  servings: string;
  time: string;
  ingredients: string[];
  steps: string[];
};

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { locale } = useLanguage();
  const ui = UI[locale].recipe;
  const [open, setOpen] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);

  const htmlLabels = {
    lang: HTML_LANG[locale],
    htmlServings: ui.htmlServings,
    htmlTime: ui.htmlTime,
    htmlIngredients: ui.htmlIngredients,
    htmlMethod: ui.htmlMethod,
    htmlFooter: ui.htmlFooter,
  };

  const handlePdf = async () => {
    setPdfBusy(true);
    try {
      const logoSvg = await fetchLogoSvg();
      const html = buildStandaloneRecipeHtml(recipe, logoSvg, htmlLabels);
      openHtmlPrintDialog(html);
    } finally {
      setPdfBusy(false);
    }
  };

  return (
    <article className="flex flex-col rounded-[28px] border border-black bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7">
      <p className="font-bakbak text-xs uppercase tracking-widest text-pumpkin-orange">
        {recipe.tag}
      </p>
      <h3 className="font-gasoek mt-3 text-2xl text-pumpkin-green-dark sm:text-3xl">
        {recipe.name}
      </h3>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600 sm:text-sm">
        <span>
          <span className="font-bakbak tracking-wider text-pumpkin-orange">{ui.servings} </span>
          {recipe.servings}
        </span>
        <span>
          <span className="font-bakbak tracking-wider text-pumpkin-orange">{ui.time} </span>
          {recipe.time}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
        {recipe.description}
      </p>

      {open ? (
        <div className="mt-5 space-y-5 border-t border-dashed border-neutral-300 pt-5">
          <div>
            <h4 className="font-bakbak text-xs uppercase tracking-widest text-pumpkin-orange">
              {ui.ingredients}
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-800 sm:text-base">
              {recipe.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bakbak text-xs uppercase tracking-widest text-pumpkin-orange">
              {ui.method}
            </h4>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-neutral-800 sm:text-base">
              {recipe.steps.map((step, i) => (
                <li key={`${recipe.name}-step-${i}`}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-bakbak inline-flex h-10 items-center justify-center rounded-full border border-pumpkin-green-dark px-4 text-sm tracking-wide text-pumpkin-green-dark transition hover:bg-pumpkin-green-dark hover:text-white sm:px-5"
          aria-expanded={open}
        >
          {open ? ui.hideRecipe : ui.showRecipe}
        </button>
        <button
          type="button"
          onClick={handlePdf}
          disabled={pdfBusy}
          className="font-bakbak inline-flex h-10 items-center justify-center gap-2 rounded-full bg-pumpkin-orange px-4 text-sm tracking-wide text-white transition hover:bg-orange-500 disabled:opacity-60 sm:px-5"
        >
          <Image
            src={FIGMA_ASSETS.chevron}
            alt=""
            width={14}
            height={12}
            className="-rotate-90 brightness-0 invert"
            aria-hidden
          />
          {pdfBusy ? ui.busy : ui.savePdf}
        </button>
      </div>

    </article>
  );
}
