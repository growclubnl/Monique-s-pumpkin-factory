"use client";

import Image from "next/image";
import { useState } from "react";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { HTML_LANG, UI } from "@/lib/i18n";
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

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (ch) => ESCAPE_MAP[ch] ?? ch);
}

function buildRecipeHtml(
  recipe: Recipe,
  logoSvg: string,
  opts: {
    lang: string;
    htmlServings: string;
    htmlTime: string;
    htmlIngredients: string;
    htmlMethod: string;
    htmlFooter: string;
  },
): string {
  const ingredientItems = recipe.ingredients
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("\n        ");
  const stepItems = recipe.steps
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("\n        ");

  return `<!doctype html>
<html lang="${opts.lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(recipe.name)} — Monique&#39;s Pumpkin Factory</title>
<style>
  :root {
    --cream: #ffefe1;
    --orange: #ff8c00;
    --green-dark: #114421;
    --body: #224127;
    --line: #d8c6b3;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--cream); color: var(--body); }
  body {
    font-family: "Anonymous Pro", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    line-height: 1.6;
    padding: 48px 32px;
  }
  .sheet {
    max-width: 760px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #000;
    border-radius: 28px;
    padding: 48px 44px;
    box-shadow: 0 20px 40px rgba(17, 68, 33, 0.08);
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  .header svg {
    width: 220px;
    height: auto;
    display: block;
  }
  .tag {
    display: inline-block;
    font-family: "Bakbak One", Impact, sans-serif;
    font-size: 13px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 8px;
  }
  h1 {
    font-family: "Gasoek One", Impact, sans-serif;
    color: var(--green-dark);
    font-size: 44px;
    line-height: 1.05;
    margin: 0 0 16px 0;
  }
  .description {
    font-size: 16px;
    color: #4a5d4e;
    margin: 0 0 24px 0;
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    border-top: 1px dashed var(--line);
    border-bottom: 1px dashed var(--line);
    padding: 14px 0;
    margin-bottom: 28px;
  }
  .meta div { flex: 1 1 140px; }
  .meta .label {
    font-family: "Bakbak One", Impact, sans-serif;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--orange);
  }
  .meta .value { font-size: 18px; color: var(--green-dark); }
  h2 {
    font-family: "Gasoek One", Impact, sans-serif;
    color: var(--orange);
    font-size: 26px;
    margin: 28px 0 12px 0;
  }
  ul, ol { padding-left: 22px; margin: 0; }
  ul li { margin-bottom: 6px; }
  ol li { margin-bottom: 12px; padding-left: 6px; }
  .footer {
    margin-top: 36px;
    padding-top: 18px;
    border-top: 1px dashed var(--line);
    text-align: center;
    font-size: 13px;
    color: #6a7a6e;
  }
  .footer strong { color: var(--green-dark); }
  @media print {
    body { background: #fff; padding: 0; }
    .sheet { box-shadow: none; border: none; padding: 24px; }
  }
</style>
</head>
<body>
  <article class="sheet">
    <div class="header">${logoSvg}</div>
    <span class="tag">${escapeHtml(recipe.tag)}</span>
    <h1>${escapeHtml(recipe.name)}</h1>
    <p class="description">${escapeHtml(recipe.description)}</p>
    <div class="meta">
      <div>
        <div class="label">${escapeHtml(opts.htmlServings)}</div>
        <div class="value">${escapeHtml(recipe.servings)}</div>
      </div>
      <div>
        <div class="label">${escapeHtml(opts.htmlTime)}</div>
        <div class="value">${escapeHtml(recipe.time)}</div>
      </div>
    </div>
    <h2>${escapeHtml(opts.htmlIngredients)}</h2>
    <ul>
        ${ingredientItems}
    </ul>
    <h2>${escapeHtml(opts.htmlMethod)}</h2>
    <ol>
        ${stepItems}
    </ol>
    <div class="footer">
      ${opts.htmlFooter}
    </div>
  </article>
</body>
</html>`;
}

async function fetchLogoSvg(): Promise<string> {
  try {
    const res = await fetch(FIGMA_ASSETS.logoFooter);
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { locale } = useLanguage();
  const ui = UI[locale].recipe;
  const [open, setOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const logoSvg = await fetchLogoSvg();
      const html = buildRecipeHtml(recipe, logoSvg, {
        lang: HTML_LANG[locale],
        htmlServings: ui.htmlServings,
        htmlTime: ui.htmlTime,
        htmlIngredients: ui.htmlIngredients,
        htmlMethod: ui.htmlMethod,
        htmlFooter: ui.htmlFooter,
      });
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `recept-${slugify(recipe.name)}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
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

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-bakbak inline-flex h-10 items-center justify-center rounded-full border border-pumpkin-green-dark px-5 text-sm tracking-wide text-pumpkin-green-dark transition hover:bg-pumpkin-green-dark hover:text-white"
          aria-expanded={open}
        >
          {open ? ui.hideRecipe : ui.showRecipe}
        </button>
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="font-bakbak inline-flex h-10 items-center justify-center gap-2 rounded-full bg-pumpkin-orange px-5 text-sm tracking-wide text-white transition hover:bg-orange-500 disabled:opacity-60"
        >
          <Image
            src={FIGMA_ASSETS.chevron}
            alt=""
            width={14}
            height={12}
            className="-rotate-90 brightness-0 invert"
            aria-hidden
          />
          {downloading ? ui.busy : ui.downloadRecipe}
        </button>
      </div>

      <p className="mt-auto pt-4 text-[11px] text-neutral-500">
        {ui.downloadHint}
      </p>
    </article>
  );
}
