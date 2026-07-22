export interface WeekNumberResult {
  weekNumber: number;
  isoYear: number;
  dayOfYear: number;
}

// Calculates the ISO 8601 week number: weeks start on Monday, and week 1 is the
// week containing the year's first Thursday.
export function calculateWeekNumber(dateISO: string): WeekNumberResult {
  const date = new Date(dateISO);

  if (Number.isNaN(date.getTime())) {
    throw new Error("Please enter a valid date.");
  }

  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = (target.getUTCDay() + 6) % 7; // Monday = 0 ... Sunday = 6
  target.setUTCDate(target.getUTCDate() - dayNum + 3); // Thursday of the current ISO week

  const isoYearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((target.getTime() - isoYearStart.getTime()) / 86400000 + 1) / 7);

  const startOfYear = new Date(Date.UTC(date.getFullYear(), 0, 1));
  const dayOfYear =
    Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - startOfYear.getTime()) / 86400000) +
    1;

  return {
    weekNumber,
    isoYear: target.getUTCFullYear(),
    dayOfYear,
  };
}
