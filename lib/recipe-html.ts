import type { Recipe } from "@/components/RecipeCard";

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

const RECIPE_STYLES = `<style>
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
  .sheet + .sheet { margin-top: 48px; }
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
    .sheet {
      box-shadow: none;
      border: none;
      border-radius: 0;
      padding: 24px;
      margin: 0 auto;
      page-break-after: always;
    }
    .sheet:last-of-type { page-break-after: auto; }
 }
</style>`;

export type RecipeHtmlLabels = {
  lang: string;
  htmlServings: string;
  htmlTime: string;
  htmlIngredients: string;
  htmlMethod: string;
  htmlFooter: string;
};

function buildRecipeArticleInner(recipe: Recipe, logoSvg: string, opts: RecipeHtmlLabels): string {
  const ingredientItems = recipe.ingredients
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("\n        ");
  const stepItems = recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("\n        ");

  return `
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
  </article>`;
}

export function buildStandaloneRecipeHtml(recipe: Recipe, logoSvg: string, opts: RecipeHtmlLabels): string {
  const inner = buildRecipeArticleInner(recipe, logoSvg, opts);
  return `<!doctype html>
<html lang="${opts.lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(recipe.name)} — Monique&#39;s Pumpkin Factory</title>
${RECIPE_STYLES}
</head>
<body>
  ${inner}
</body>
</html>`;
}

export function buildCombinedRecipesHtml(
  recipes: Recipe[],
  logoSvg: string,
  opts: RecipeHtmlLabels,
  documentTitle: string,
): string {
  const bodyInner = recipes.map((r) => buildRecipeArticleInner(r, logoSvg, opts)).join("\n");
  return `<!doctype html>
<html lang="${opts.lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(documentTitle)}</title>
${RECIPE_STYLES}
</head>
<body>
  ${bodyInner}
</body>
</html>`;
}

export function slugifyRecipeFilename(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
