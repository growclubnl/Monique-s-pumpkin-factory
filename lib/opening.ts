/**
 * Hero opening moment: Monday 14 September 2026, 08:00 Europe/Amsterdam (CEST = UTC+2).
 * Typical opening hours that day for the calendar block: through 20:00 local (18:00 UTC same day).
 */
export const OPENING_TIMESTAMP_MS = Date.UTC(2026, 8, 14, 6, 0, 0);
export const OPENING_DAY_END_TIMESTAMP_MS = Date.UTC(2026, 8, 14, 18, 0, 0);

export const OPENING_CALENDAR_LOCATION =
  "Akervoorderlaan 1, 2161 DP Lisse, Netherlands";

export const SHOP_TIMEZONE = "Europe/Amsterdam";
export const DAILY_OPEN_HOUR = 8;
export const DAILY_CLOSE_HOUR = 20;

function amsterdamHourMinute(nowMs: number): { hour: number; minute: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: SHOP_TIMEZONE,
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date(nowMs));
  return {
    hour: Number(parts.find((part) => part.type === "hour")?.value ?? 0),
    minute: Number(parts.find((part) => part.type === "minute")?.value ?? 0),
  };
}

function amsterdamMinutes(nowMs: number): number {
  const { hour, minute } = amsterdamHourMinute(nowMs);
  return hour * 60 + minute;
}

/** Daily hours 08:00–20:00 in Europe/Amsterdam (20:00 is closed). */
export function isWithinDailyHours(nowMs: number): boolean {
  const minutes = amsterdamMinutes(nowMs);
  return minutes >= DAILY_OPEN_HOUR * 60 && minutes < DAILY_CLOSE_HOUR * 60;
}

/** True after midnight and before 08:00 — next opening is later today. */
export function isBeforeDailyOpen(nowMs: number): boolean {
  return amsterdamMinutes(nowMs) < DAILY_OPEN_HOUR * 60;
}

export function hasSeasonStarted(nowMs: number): boolean {
  return nowMs >= OPENING_TIMESTAMP_MS;
}

export function isShopOpen(nowMs: number): boolean {
  return hasSeasonStarted(nowMs) && isWithinDailyHours(nowMs);
}
