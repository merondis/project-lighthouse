export interface OvulationResult {
  ovulationDate: string;
  fertileWindowStart: string;
  fertileWindowEnd: string;
  nextPeriodDate: string;
}

export function calculateOvulation(lastPeriodDateISO: string, cycleLength: number): OvulationResult {
  const lastPeriod = new Date(lastPeriodDateISO);

  if (Number.isNaN(lastPeriod.getTime())) {
    throw new Error("Please enter a valid date for your last period.");
  }
  if (Number.isNaN(cycleLength)) {
    throw new Error("Please enter a valid number for cycle length.");
  }
  if (cycleLength < 21 || cycleLength > 45) {
    throw new Error("Cycle length should be between 21 and 45 days.");
  }

  const today = new Date();
  if (lastPeriod.getTime() > today.getTime()) {
    throw new Error("The last period date cannot be in the future.");
  }

  // Ovulation typically occurs 14 days before the next period, regardless of cycle length.
  const ovulationDate = new Date(lastPeriod);
  ovulationDate.setDate(ovulationDate.getDate() + (cycleLength - 14));

  // Fertile window: up to 5 days before ovulation (sperm survival) through 1 day after (egg survival).
  const fertileWindowStart = new Date(ovulationDate);
  fertileWindowStart.setDate(fertileWindowStart.getDate() - 5);

  const fertileWindowEnd = new Date(ovulationDate);
  fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 1);

  const nextPeriodDate = new Date(lastPeriod);
  nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

  return {
    ovulationDate: formatDate(ovulationDate),
    fertileWindowStart: formatDate(fertileWindowStart),
    fertileWindowEnd: formatDate(fertileWindowEnd),
    nextPeriodDate: formatDate(nextPeriodDate),
  };
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
