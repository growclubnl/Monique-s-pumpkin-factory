"use client";

import Image from "next/image";
import { HeroOpeningHero } from "@/components/HeroOpeningHero";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { RecipeCard } from "@/components/RecipeCard";
import { SiteHeader } from "@/components/SiteHeader";
import { UI, FAQ, getRecipes, type FaqItem } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

function FaqPill({ item }: { item: FaqItem }) {
  return (
    <details className="group rounded-[28px] border border-black bg-white open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 [&::-webkit-details-marker]:hidden">
        <span className="text-left text-base leading-snug text-black sm:text-lg">{item.q}</span>
        <Image
          src={FIGMA_ASSETS.chevron}
          alt=""
          width={23}
          height={20}
          className="shrink-0 rotate-180 transition-transform duration-200 group-open:rotate-0"
        />
      </summary>
      <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-neutral-700 sm:px-8 sm:text-base">
        {item.a}
      </div>
    </details>
  );
}

export function PumpkinLanding() {
  const { locale } = useLanguage();
  const ui = UI[locale];
  const faq = FAQ[locale];
  const dishes = getRecipes(locale);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-pumpkin-green py-2 text-center text-base text-white sm:text-lg">
        {ui.topNotice}
      </div>
      <section className="relative overflow-hidden bg-pumpkin-cream">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <Image
            src={FIGMA_ASSETS.heroBackdrop}
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1920px] px-4 pb-16 pt-4 sm:px-8 lg:px-16 lg:pb-24">
          {/* z-30 keeps flags/nav above the hero art, which uses large absolute layers that can overlap upward */}
          <div className="relative z-30">
            <SiteHeader />
          </div>
          <div className="relative z-0 mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-6 xl:gap-12">
            <div className="max-w-xl">
              <HeroOpeningHero ui={ui} />
            </div>
            <div className="pointer-events-none relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none lg:justify-self-end">
              <div className="absolute left-1/2 top-1/2 w-[85%] max-w-md -translate-x-1/2 -translate-y-1/2 rotate-[42deg] lg:w-[110%] lg:max-w-none">
                <div className="relative aspect-[636/693] w-full">
                  <Image src={FIGMA_ASSETS.heroBlob} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="relative z-[1] mx-auto w-[72%] max-w-sm lg:w-[80%] lg:max-w-md">
                <div
                  className="pointer-events-none absolute bottom-[2%] left-1/2 z-0 w-[58%] max-w-[220px] -translate-x-1/2 sm:bottom-[3%] sm:w-[52%] lg:bottom-[4%] lg:max-w-[260px]"
                  aria-hidden
                >
                  <div className="relative aspect-[2.4/1] w-full">
                    <Image
                      src={FIGMA_ASSETS.heroEllipse}
                      alt=""
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
                <div className="relative z-[1] aspect-[515/540] w-full">
                  <Image
                    src={FIGMA_ASSETS.heroPumpkin}
                    alt={ui.heroPumpkinAlt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative overflow-hidden bg-white pb-12 pt-10 sm:pb-16 lg:pb-20">
          <div className="mx-auto grid max-w-[1920px] gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-16">
            <div>
              <h2 className="font-gasoek text-4xl text-pumpkin-orange sm:text-5xl">
                {ui.howItWorksTitle}
              </h2>
              <div className="mt-8 space-y-6 text-base leading-[1.75] text-black sm:text-lg">
                <p>{ui.howItWorksP1}</p>
                <p>{ui.howItWorksP2}</p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none lg:justify-self-end">
              <div className="relative z-0 aspect-[743/502] w-full rotate-[4deg] overflow-hidden rounded-[26px] shadow-lg">
                <Image
                  src={FIGMA_ASSETS.photoTop}
                  alt={ui.photoTopAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <div className="relative z-[1] -mt-[32%] ml-[8%] aspect-[703/475] w-[92%] -rotate-1 overflow-hidden rounded-[26px] shadow-xl sm:-mt-[28%] lg:-mt-[30%]">
                <Image
                  src={FIGMA_ASSETS.photoBottom}
                  alt={ui.photoBottomAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 92vw"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 h-2 bg-pumpkin-accent-bar sm:mt-24" aria-hidden />
        </div>
      </section>
      <section className="bg-white px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <h2 className="font-gasoek text-center text-4xl text-pumpkin-orange sm:text-5xl">
          {ui.faqTitle}
        </h2>
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-5">
          <div className="flex flex-col gap-4 lg:gap-5">
            {faq.colA.map((item) => (
              <FaqPill key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            {faq.colB.map((item) => (
              <FaqPill key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-pumpkin-cream px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-gasoek text-4xl text-pumpkin-orange sm:text-5xl">
            {ui.recipesTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pumpkin-body sm:text-lg">
            {ui.recipesIntroStart}
            <span className="font-bakbak text-pumpkin-orange">{ui.recipesShowWord}</span>
            {ui.recipesIntroEnd}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <RecipeCard key={`${locale}-${i}-${dish.name}`} recipe={dish} />
          ))}
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-white px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto mb-6 flex max-w-[1920px] flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-gasoek text-2xl text-pumpkin-orange sm:text-3xl">
            {ui.instagramTitle}
          </h2>
          <a
            href="https://www.instagram.com/pumpkin.factory/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bakbak inline-flex items-center gap-2 rounded-full bg-pumpkin-orange px-6 py-3 text-base text-white transition hover:bg-orange-500"
          >
            @pumpkin.factory
          </a>
        </div>
        <div className="mx-auto grid max-w-[1920px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/pumpkin.factory/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ui.instagramGridAria}
              className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#d6249f] transition hover:opacity-90"
            >
              <Image
                src={FIGMA_ASSETS.socialInstagram}
                alt=""
                width={64}
                height={64}
                className="opacity-95 transition-transform duration-200 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </section>
      <footer id="contact" className="bg-pumpkin-orange px-4 py-14 text-center text-white sm:py-20">
        <div className="relative mx-auto h-28 w-48 sm:h-36 sm:w-60">
          <Image
            src={FIGMA_ASSETS.logoFooter}
            alt="Monique's Pumpkin Factory"
            fill
            className="object-contain"
          />
        </div>
        <p className="mt-8 text-lg sm:text-xl">Akervoorderlaan 1, 2161 DP Lisse</p>
        <div className="mt-4 space-y-1 text-base sm:text-lg">
          <p>
            <a href="tel:+31626102741" className="underline-offset-2 hover:underline">
              +31626102741
            </a>
          </p>
          <p>{ui.footerLine1}</p>
          <p>{ui.footerLine2}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/pumpkin.factory/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="Instagram"
          >
            <Image src={FIGMA_ASSETS.socialInstagram} alt="" width={35} height={35} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="Facebook"
          >
            <Image src={FIGMA_ASSETS.socialFacebook} alt="" width={34} height={35} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="TikTok"
          >
            <Image src={FIGMA_ASSETS.socialTiktok} alt="" width={37} height={37} />
          </a>
        </div>
      </footer>
    </div>
  );
}
