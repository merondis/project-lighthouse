export interface PeriodForecastResult {
  periods: string[];
}

export function calculatePeriodForecast(
  lastPeriodDateISO: string,
  cycleLength: number,
  numberOfCycles: number
): PeriodForecastResult {
  const lastPeriod = new Date(lastPeriodDateISO);

  if (Number.isNaN(lastPeriod.getTime())) {
    throw new Error("Please enter a valid date for your last period.");
  }
  if (!Number.isFinite(cycleLength) || cycleLength < 21 || cycleLength > 45) {
    throw new Error("Please enter a cycle length between 21 and 45 days.");
  }

  const safeCycles = Math.min(Math.max(Math.round(numberOfCycles) || 6, 1), 12);

  const periods: string[] = [];
  const cursor = new Date(lastPeriod);
  for (let i = 0; i < safeCycles; i++) {
    cursor.setDate(cursor.getDate() + cycleLength);
    periods.push(cursor.toISOString().split("T")[0]);
  }

  return { periods };
}
