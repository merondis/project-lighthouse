export type TimestampConversionMode = "timestampToDate" | "dateToTimestamp";

export interface TimestampConversionResult {
  unixTimestampSeconds: number;
  unixTimestampMillis: number;
  isoDate: string;
  utcDate: string;
  localDate: string;
  relativeTime: string;
}

function formatRelativeTime(date: Date): string {
  const diffSec = Math.round((date.getTime() - Date.now()) / 1000);
  const abs = Math.abs(diffSec);
  const units: [string, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];
  for (const [name, secs] of units) {
    if (abs >= secs || name === "second") {
      const value = Math.round(diffSec / secs);
      if (value === 0) return "just now";
      return `${Math.abs(value)} ${name}${Math.abs(value) === 1 ? "" : "s"} ${value >= 0 ? "from now" : "ago"}`;
    }
  }
  return "just now";
}

function buildResult(date: Date): TimestampConversionResult {
  return {
    unixTimestampSeconds: Math.floor(date.getTime() / 1000),
    unixTimestampMillis: date.getTime(),
    isoDate: date.toISOString(),
    utcDate: date.toUTCString(),
    localDate: date.toString(),
    relativeTime: formatRelativeTime(date),
  };
}

// Converts between a Unix timestamp and a human-readable date, in either
// direction, using the native Date object only.
export function convertTimestamp(mode: TimestampConversionMode, timestampInput: string, dateInput: string): TimestampConversionResult {
  if (mode === "timestampToDate") {
    const trimmed = timestampInput.trim();
    if (!trimmed) throw new Error("Please enter a Unix timestamp.");
    const num = Number(trimmed);
    if (!Number.isFinite(num)) throw new Error("Please enter a valid numeric Unix timestamp.");
    // Accept both seconds and milliseconds: treat very large numbers as milliseconds.
    const ms = Math.abs(num) > 1e11 ? num : num * 1000;
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) throw new Error("That timestamp does not correspond to a valid date.");
    return buildResult(date);
  }

  const trimmedDate = dateInput.trim();
  if (!trimmedDate) throw new Error("Please enter a date.");
  const date = new Date(trimmedDate);
  if (Number.isNaN(date.getTime())) throw new Error("Please enter a valid date (e.g. 2026-07-28 or 2026-07-28T14:30:00).");
  return buildResult(date);
}
