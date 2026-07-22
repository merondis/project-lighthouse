const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export interface AddDaysResult {
  resultDate: string;
  dayOfWeek: string;
}

export function addDays(startDateISO: string, days: number): AddDaysResult {
  const start = new Date(startDateISO);

  if (Number.isNaN(start.getTime())) {
    throw new Error("Please enter a valid start date.");
  }
  if (Number.isNaN(days)) {
    throw new Error("Please enter a valid number of days.");
  }
  if (days < 0) {
    throw new Error("Number of days cannot be negative.");
  }

  const result = new Date(start);
  result.setDate(result.getDate() + Math.round(days));

  return {
    resultDate: formatDate(result),
    dayOfWeek: DAY_NAMES[result.getDay()],
  };
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
