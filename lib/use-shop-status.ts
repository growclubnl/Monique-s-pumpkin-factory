"use client";

import { useEffect, useState } from "react";
import { hasSeasonStarted, isBeforeDailyOpen, isShopOpen } from "@/lib/opening";

export function useShopStatus() {
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [tick, setTick] = useState<number | null>(null);

  useEffect(() => {
    const sync = () => {
      const n = Date.now();
      setNowMs(n);
      setTick(n);
    };
    sync();
    const id = window.setInterval(sync, 1000);
    return () => window.clearInterval(id);
  }, []);

  return {
    /** Client-only clock; null until mount so countdown digits do not hydrate-mismatch. */
    tick,
    seasonStarted: hasSeasonStarted(nowMs),
    isOpen: isShopOpen(nowMs),
    opensAgainToday: hasSeasonStarted(nowMs) && !isShopOpen(nowMs) && isBeforeDailyOpen(nowMs),
  };
}