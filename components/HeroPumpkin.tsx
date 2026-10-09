import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

type HeroPumpkinProps = {
  sad: boolean;
  sleeping?: boolean;
  alt: string;
};

export function HeroPumpkin({ sad, sleeping = false, alt }: HeroPumpkinProps) {
  const src = sleeping
    ? FIGMA_ASSETS.heroPumpkinSleeping
    : sad
      ? FIGMA_ASSETS.heroPumpkinSad
      : FIGMA_ASSETS.heroPumpkin;

  return <Image src={src} alt={alt} fill className="object-contain" priority />;
}
