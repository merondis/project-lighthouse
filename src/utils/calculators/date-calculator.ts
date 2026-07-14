export interface DateDiffResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
}

export function calculateDateDifference(startDateISO: string, endDateISO: string): DateDiffResult {
  const start = new Date(startDateISO);
  const end = new Date(endDateISO);

  if (Number.isNaN(start.getTime())) {
    throw new Error("Please enter a valid start date.");
  }
  if (Number.isNaN(end.getTime())) {
    throw new Error("Please enter a valid end date.");
  }

  const [earlier, later] = start.getTime() <= end.getTime() ? [start, end] : [end, start];

  let years = later.getFullYear() - earlier.getFullYear();
  let months = later.getMonth() - earlier.getMonth();
  let days = later.getDate() - earlier.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(later.getFullYear(), later.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msDiff = later.getTime() - earlier.getTime();
  const totalDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks: Math.floor(totalDays / 7),
    totalMonths: years * 12 + months,
  };
}