export interface TimezoneResult {
  convertedTime: string;
  convertedDate: string;
}

const TIMEZONE_LIST = [
  "UTC",
  // North America
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Toronto",
  "America/Vancouver",
  "America/Mexico_City",
  // South America
  "America/Sao_Paulo",
  "America/Buenos_Aires",
  "America/Bogota",
  "America/Lima",
  "America/Santiago",
  // Atlantic Canada
  "America/Halifax",
  "America/St_Johns",
  // Europe
  "Europe/London",
  "Europe/Dublin",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Madrid",
  "Europe/Rome",
  "Europe/Amsterdam",
  "Europe/Zurich",
  "Europe/Moscow",
  "Europe/Istanbul",
  "Europe/Athens",
  "Europe/Warsaw",
  "Europe/Stockholm",
  // Africa
  "Africa/Cairo",
  "Africa/Lagos",
  "Africa/Johannesburg",
  "Africa/Nairobi",
  "Africa/Casablanca",
  // Middle East
  "Asia/Dubai",
  "Asia/Riyadh",
  "Asia/Tehran",
  "Asia/Jerusalem",
  "Asia/Qatar",
  "Asia/Kabul",
  // South & Central Asia
  "Asia/Kolkata",
  "Asia/Karachi",
  "Asia/Dhaka",
  "Asia/Kathmandu",
  "Asia/Tashkent",
  // East & Southeast Asia
  "Asia/Shanghai",
  "Asia/Hong_Kong",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Asia/Singapore",
  "Asia/Bangkok",
  "Asia/Jakarta",
  "Asia/Manila",
  "Asia/Kuala_Lumpur",
  "Asia/Ho_Chi_Minh",
  "Asia/Taipei",
  // Oceania
  "Australia/Sydney",
  "Australia/Melbourne",
  "Australia/Brisbane",
  "Australia/Perth",
  "Australia/Adelaide",
  "Pacific/Auckland",
  "Pacific/Fiji",
  "Pacific/Honolulu",
];

function parseFormattedAsUtcMs(formatted: string): number {
  const match = formatted.match(/(\d+)\/(\d+)\/(\d+),?\s*(\d+):(\d+)/);
  if (!match) {
    throw new Error("Unable to interpret date and time.");
  }
  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  return Date.UTC(year, month - 1, day, hour, minute);
}

function getUtcInstantForZonedTime(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string
): number {
  const target = Date.UTC(year, month - 1, day, hour, minute);
  let guess = target;

  for (let i = 0; i < 3; i++) {
    const formatted = new Date(guess).toLocaleString("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const displayed = parseFormattedAsUtcMs(formatted);
    const error = target - displayed;
    if (error === 0) break;
    guess += error;
  }

  return guess;
}

export function convertTimezone(
  dateTimeLocal: string,
  fromZone: string,
  toZone: string
): TimezoneResult {
  if (!dateTimeLocal) {
    throw new Error("Please enter a date and time.");
  }
  if (!TIMEZONE_LIST.includes(fromZone) || !TIMEZONE_LIST.includes(toZone)) {
    throw new Error("Please select valid time zones.");
  }

  const match = dateTimeLocal.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) {
    throw new Error("Please enter a valid date and time.");
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);

  const utcInstantMs = getUtcInstantForZonedTime(year, month, day, hour, minute, fromZone);
  const resultDate = new Date(utcInstantMs);

  const convertedTime = resultDate.toLocaleTimeString("en-US", {
    timeZone: toZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const convertedDate = resultDate.toLocaleDateString("en-US", {
    timeZone: toZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log("DEBUG:", {
    input: { year, month, day, hour, minute, fromZone, toZone },
    utcInstantMs,
    utcInstantISO: new Date(utcInstantMs).toISOString(),
  });
  return { convertedTime, convertedDate };
}

export const TIMEZONE_OPTIONS = TIMEZONE_LIST;