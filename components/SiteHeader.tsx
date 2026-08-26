"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const localeDropdownRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const activeFlag = FLAG_ORDER.find((f) => f.locale === locale) ?? FLAG_ORDER[0];

  useEffect(() => {
    if (mobileOpen) setLocaleMenuOpen(false);
  }, [mobileOpen]);

  useEffect(() => {
    if (!localeMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLocaleMenuOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      const el = localeDropdownRef.current;
      if (el && !el.contains(e.target as Node)) setLocaleMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [localeMenuOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="relative isolate flex items-center justify-between gap-3 py-4 md:gap-4">
      <Link href="/" className="block shrink-0">
        <Image
          src={FIGMA_ASSETS.logoHeader}
          alt="Monique's Pumpkin Factory"
          width={243}
          height={138}
          priority
          className="h-auto w-[146px] md:w-[243px]"
        />
      </Link>

      <nav
        className="hidden flex-wrap items-center justify-end gap-4 sm:gap-8 md:flex"
        aria-label="Main"
      >
        <a
          href="mailto:kwekerijkweeklust@gmail.com"
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

      <div className="flex shrink-0 items-center gap-2 md:hidden">
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-lg text-pumpkin-green-dark transition hover:bg-black/5"
          aria-expanded={mobileOpen}
          aria-controls={panelId}
          aria-label={mobileOpen ? ui.navCloseMenu : ui.navOpenMenu}
          onClick={() => {
            setLocaleMenuOpen(false);
            setMobileOpen((o) => !o);
          }}
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
        <div className="relative shrink-0 md:hidden" ref={localeDropdownRef}>
          <button
            type="button"
            onClick={() => setLocaleMenuOpen((o) => !o)}
            aria-expanded={localeMenuOpen}
            aria-haspopup="listbox"
            aria-label={ui.languageFlagsAria}
            className="flex h-11 items-center gap-1 rounded-lg border border-black/15 bg-white px-2 shadow-sm transition hover:bg-neutral-50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeFlag.src}
              alt=""
              width={30}
              height={23}
              className="block rounded-sm"
              draggable={false}
            />
            <svg
              className={`h-4 w-4 shrink-0 text-pumpkin-green-dark transition-transform ${
                localeMenuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <polygon points="10,13 5,7 15,7" />
            </svg>
          </button>
          {localeMenuOpen ? (
            <ul
              className="absolute right-0 top-full z-[250] mt-1 min-w-[13.5rem] overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-lg"
              role="listbox"
              aria-label={ui.languageFlagsAria}
            >
              {FLAG_ORDER.map(({ locale: loc, src, label }) => (
                <li key={loc} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={locale === loc}
                    onClick={() => {
                      setLocale(loc);
                      setLocaleMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-pumpkin-cream ${
                      locale === loc ? "bg-pumpkin-cream/90" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      width={28}
                      height={21}
                      className="shrink-0 rounded-sm"
                      draggable={false}
                    />
                    <span className="text-sm text-pumpkin-green-dark">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[200] flex flex-col bg-pumpkin-cream md:hidden"
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label={ui.navOpenMenu}
        >
          <div className="flex items-center justify-end border-b border-black/10 px-4 py-3">
            <button
              type="button"
              onClick={closeMobile}
              className="font-bakbak px-3 py-2 text-sm uppercase tracking-widest text-pumpkin-green-dark underline-offset-4 hover:underline"
            >
              {ui.navCloseMenu}
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-10">
            <a
              href="mailto:kwekerijkweeklust@gmail.com"
              className="font-bakbak text-2xl tracking-wide text-pumpkin-green-dark"
              onClick={closeMobile}
            >
              {ui.contact}
            </a>
            <Link
              href="https://maps.google.com/?q=Akervoorderlaan+1,+2161+DP+Lisse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bakbak inline-flex h-12 w-fit items-center justify-center rounded-full bg-white px-8 text-xl text-pumpkin-green-dark shadow-sm"
              onClick={closeMobile}
            >
              {ui.route}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
