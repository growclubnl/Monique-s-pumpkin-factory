import { FIGMA_ASSETS } from "@/lib/figma-assets";

export async function fetchLogoSvg(): Promise<string> {
  try {
    const res = await fetch(FIGMA_ASSETS.logoFooter);
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}
