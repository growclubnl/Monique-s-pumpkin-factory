import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

type HeroPumpkinProps = {
  sad: boolean;
  alt: string;
};

export function HeroPumpkin({ sad, alt }: HeroPumpkinProps) {
  return (
    <Image
      src={sad ? FIGMA_ASSETS.heroPumpkinSad : FIGMA_ASSETS.heroPumpkin}
      alt={alt}
      fill
      className="object-contain"
      priority
    />
  );
}
