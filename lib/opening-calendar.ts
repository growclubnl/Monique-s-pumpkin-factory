import {
  OPENING_CALENDAR_LOCATION,
  OPENING_DAY_END_TIMESTAMP_MS,
  OPENING_TIMESTAMP_MS,
} from "@/lib/opening";

function icsUtc(dtMs: number): string {
  return new Date(dtMs).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function icsEscapeText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

/** Portable calendar invite (Apple, Google, Outlook) for opening day. */
export function buildOpeningIcsCopy(summary: string, description: string): string {
  const uid = "opening-20260914@moniques-pumpkin-factory.local";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Monique's Pumpkin Factory//opening//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${icsUtc(Date.now())}`,
    `DTSTART:${icsUtc(OPENING_TIMESTAMP_MS)}`,
    `DTEND:${icsUtc(OPENING_DAY_END_TIMESTAMP_MS)}`,
    `SUMMARY:${icsEscapeText(summary)}`,
    `DESCRIPTION:${icsEscapeText(description)}`,
    `LOCATION:${icsEscapeText(OPENING_CALENDAR_LOCATION)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}
