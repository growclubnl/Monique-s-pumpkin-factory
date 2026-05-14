"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { UiCopy } from "@/lib/i18n/copy";
import { buildOpeningIcsCopy } from "@/lib/opening-calendar";
import { OPENING_TIMESTAMP_MS } from "@/lib/opening";

function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

export function HeroOpeningHero({ ui }: { ui: UiCopy }) {
  const [tick, setTick] = useState<number | null>(null);

  useEffect(() => {
    setTick(Date.now());
    const id = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const saveOpeningCalendar = useCallback(() => {
    const ics = buildOpeningIcsCopy(ui.openingCalendarSummary, ui.openingCalendarDescription);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "moniques-pumpkin-factory-opening-2026.ics";
    a.click();
    URL.revokeObjectURL(url);
  }, [ui.openingCalendarDescription, ui.openingCalendarSummary]);

  const isOpen = tick !== null && tick >= OPENING_TIMESTAMP_MS;

  if (isOpen) {
    return (
      <>
        <h1 className="font-gasoek text-5xl leading-none text-pumpkin-orange sm:text-6xl lg:text-7xl xl:text-[96px]">
          {ui.heroTitle}
        </h1>
        <p className="mt-6 text-2xl leading-[1.35] text-pumpkin-body sm:text-3xl lg:text-4xl">
          {ui.heroLine1}
          <br />
          {ui.heroLine2}
        </p>
        <div className="mt-10">
          <Link
            href="https://maps.google.com/?q=Akervoorderlaan+1,+2161+DP+Lisse"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bakbak inline-flex h-14 min-w-[180px] items-center justify-center rounded-full bg-white px-10 text-xl text-black transition hover:bg-neutral-100"
          >
            {ui.route}
          </Link>
        </div>
      </>
    );
  }

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (tick !== null) {
    const remaining = Math.max(0, OPENING_TIMESTAMP_MS - tick);
    days = Math.floor(remaining / 86_400_000);
    hours = Math.floor((remaining % 86_400_000) / 3_600_000);
    minutes = Math.floor((remaining % 3_600_000) / 60_000);
    seconds = Math.floor((remaining % 60_000) / 1000);
  }

  const cells = [
    { key: "d", value: days, label: ui.countdownDays, pad: false },
    { key: "h", value: hours, label: ui.countdownHours, pad: true },
    { key: "m", value: minutes, label: ui.countdownMinutes, pad: true },
    { key: "s", value: seconds, label: ui.countdownSeconds, pad: true },
  ] as const;

  return (
    <>
      <h1 className="font-gasoek text-5xl leading-none text-pumpkin-orange sm:text-6xl lg:text-7xl xl:text-[96px]">
        {ui.heroCountdownTitle}
      </h1>
      <p className="mt-6 text-2xl leading-[1.35] text-pumpkin-body sm:text-3xl lg:text-4xl">
        {ui.heroCountdownSub}
      </p>
      <div
        className="mt-8 rounded-2xl border border-black/15 bg-white/80 px-2 py-4 shadow-sm backdrop-blur-sm sm:hidden"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="grid grid-cols-4 divide-x divide-black/10">
          {cells.map(({ key, value, label, pad }) => (
            <div key={key} className="min-w-0 px-1.5 text-center">
              <div
                className={`font-gasoek text-[clamp(1.35rem,6.2vw,2rem)] leading-none tabular-nums text-pumpkin-green-dark ${
                  tick === null ? "text-pumpkin-green-dark/40" : ""
                }`}
              >
                {tick === null ? "–" : pad ? pad2(value) : String(value)}
              </div>
              <div className="font-bakbak mt-1.5 text-[0.5625rem] uppercase leading-tight tracking-wider text-pumpkin-orange">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-8 hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-4 sm:gap-4"
        aria-live="polite"
        aria-atomic="true"
      >
        {cells.map(({ key, value, label, pad }) => (
          <div
            key={key}
            className="rounded-2xl border border-black/15 bg-white/80 px-3 py-4 text-center shadow-sm backdrop-blur-sm sm:px-4 sm:py-5"
          >
            <div
              className={`font-gasoek text-4xl tabular-nums text-pumpkin-green-dark sm:text-5xl ${
                tick === null ? "text-pumpkin-green-dark/40" : ""
              }`}
            >
              {tick === null ? "–" : pad ? pad2(value) : String(value)}
            </div>
            <div className="font-bakbak mt-2 text-[10px] uppercase tracking-widest text-pumpkin-orange sm:text-xs">
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button
          type="button"
          onClick={saveOpeningCalendar}
          className="font-bakbak inline-flex min-h-14 min-w-[180px] max-w-[22rem] cursor-pointer items-center justify-center rounded-full bg-white px-5 py-3 text-center text-base leading-snug text-black transition hover:bg-neutral-100 sm:px-8 sm:text-lg"
        >
          {ui.heroSaveCalendar}
        </button>
      </div>
    </>
  );
}
