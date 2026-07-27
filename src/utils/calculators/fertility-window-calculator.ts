export interface FertilityWindowResult {
  fertileWindowStart: string;
  fertileWindowEnd: string;
  earliestOvulationEstimate: string;
  latestOvulationEstimate: string;
}

// Uses the calendar (rhythm) method, which accounts for cycle-length
// variability by using your shortest and longest cycle over recent months,
// rather than assuming a single fixed average cycle length. This differs
// from our Ovulation Calculator, which projects a fertile window from one
// average cycle length, this method is generally considered more robust
// for people whose cycles vary noticeably from month to month:
// fertile window start = last period start + (shortest cycle − 18),
// fertile window end = last period start + (longest cycle − 11).
export function calculateFertilityWindow(
  lastPeriodDateISO: string,
  shortestCycleLength: number,
  longestCycleLength: number
): FertilityWindowResult {
  const lastPeriod = new Date(lastPeriodDateISO);
  if (Number.isNaN(lastPeriod.getTime())) {
    throw new Error("Please enter a valid date for your last period.");
  }
  if ([shortestCycleLength, longestCycleLength].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for your shortest and longest cycle length.");
  }
  if (shortestCycleLength < 21 || longestCycleLength > 45) {
    throw new Error("Cycle lengths should be between 21 and 45 days.");
  }
  if (shortestCycleLength > longestCycleLength) {
    throw new Error("Shortest cycle length cannot be greater than longest cycle length.");
  }

  const today = new Date();
  if (lastPeriod.getTime() > today.getTime()) {
    throw new Error("The last period date cannot be in the future.");
  }

  const fertileWindowStart = new Date(lastPeriod);
  fertileWindowStart.setDate(fertileWindowStart.getDate() + (shortestCycleLength - 18));

  const fertileWindowEnd = new Date(lastPeriod);
  fertileWindowEnd.setDate(fertileWindowEnd.getDate() + (longestCycleLength - 11));

  const earliestOvulation = new Date(lastPeriod);
  earliestOvulation.setDate(earliestOvulation.getDate() + (shortestCycleLength - 14));

  const latestOvulation = new Date(lastPeriod);
  latestOvulation.setDate(latestOvulation.getDate() + (longestCycleLength - 14));

  return {
    fertileWindowStart: formatDate(fertileWindowStart),
    fertileWindowEnd: formatDate(fertileWindowEnd),
    earliestOvulationEstimate: formatDate(earliestOvulation),
    latestOvulationEstimate: formatDate(latestOvulation),
  };
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
