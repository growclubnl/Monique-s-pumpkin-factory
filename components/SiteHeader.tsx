"use client";

import Image from "next/image";
import Link from "next/link";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { UI } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { useLanguage } from "@/components/LanguageProvider";

const FLAG_ORDER: { locale: Locale; src: string; label: string }[] = [
  { locale: "nl", src: FIGMA_ASSETS.flagNl, label: "Nederlands" },
  { locale: "en", src: FIGMA_ASSETS.flagGb, label: "English" },
  { locale: "de", src: FIGMA_ASSETS.flagDe, label: "Deutsch" },
  { locale: "fr", src: FIGMA_ASSETS.flagFr, label: "Français" },
  { locale: "es", src: FIGMA_ASSETS.flagEs, label: "Español" },
  { locale: "it", src: FIGMA_ASSETS.flagIt, label: "Italiano" },
];

export function SiteHeader() {
  const { locale, setLocale } = useLanguage();
  const ui = UI[locale];

  return (
    <header className="relative isolate flex flex-wrap items-center justify-between gap-4 py-4">
      <Link href="/" className="block shrink-0">
        <Image
          src={FIGMA_ASSETS.logoHeader}
          alt="Monique's Pumpkin Factory"
          width={243}
          height={138}
          priority
        />
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-4 sm:gap-8">
        <a
          href="mailto:info@pumpkinfactory.nl"
          className="font-bakbak text-xl tracking-wide text-pumpkin-green-dark hover:underline"
        >
          {ui.contact}
        </a>
        <Link
          href="https://maps.google.com/?q=Akervoorderlaan+1,+2161+DP+Lisse"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bakbak inline-flex h-11 min-w-[120px] items-center justify-center rounded-full bg-white px-6 text-xl text-pumpkin-green-dark transition hover:bg-neutral-100"
        >
          {ui.route}
        </Link>
        <div
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
          role="group"
          aria-label={ui.languageFlagsAria}
        >
          {FLAG_ORDER.map(({ locale: loc, src, label }) => (
            <button
              key={loc}
              type="button"
              onClick={() => setLocale(loc)}
              className={`cursor-pointer rounded p-0.5 transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pumpkin-green-dark ${
                locale === loc
                  ? "ring-2 ring-pumpkin-green-dark shadow-md"
                  : "ring-1 ring-black/10 hover:ring-pumpkin-orange/60"
              }`}
              aria-pressed={locale === loc}
              aria-label={label}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVGs; native img keeps click targets reliable */}
              <img
                src={src}
                alt=""
                width={36}
                height={27}
                className="block rounded-sm"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
