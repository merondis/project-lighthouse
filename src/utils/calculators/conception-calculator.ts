export interface ConceptionResult {
  likelyConceptionDate: string;
  conceptionWindowStart: string;
  conceptionWindowEnd: string;
  lastPeriodDate: string;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function toISO(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function calculateConception(dueDateISO: string): ConceptionResult {
  const dueDate = new Date(dueDateISO);

  if (Number.isNaN(dueDate.getTime())) {
    throw new Error("Please enter a valid due date.");
  }

  const likelyConceptionDate = addDays(dueDate, -266);
  const conceptionWindowStart = addDays(dueDate, -268);
  const conceptionWindowEnd = addDays(dueDate, -264);
  const lastPeriodDate = addDays(dueDate, -280);

  return {
    likelyConceptionDate: toISO(likelyConceptionDate),
    conceptionWindowStart: toISO(conceptionWindowStart),
    conceptionWindowEnd: toISO(conceptionWindowEnd),
    lastPeriodDate: toISO(lastPeriodDate),
  };
}
