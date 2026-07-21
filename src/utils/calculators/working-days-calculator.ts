export interface WorkingDaysResult {
  workingDays: number;
  totalDays: number;
  weekendDays: number;
}

export function calculateWorkingDays(startDateISO: string, endDateISO: string): WorkingDaysResult {
  const start = new Date(startDateISO);
  const end = new Date(endDateISO);

  if (Number.isNaN(start.getTime())) {
    throw new Error("Please enter a valid start date.");
  }
  if (Number.isNaN(end.getTime())) {
    throw new Error("Please enter a valid end date.");
  }

  const [earlier, later] = start.getTime() <= end.getTime() ? [start, end] : [end, start];

  let workingDays = 0;
  let weekendDays = 0;
  const current = new Date(earlier);

  while (current.getTime() <= later.getTime()) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      weekendDays++;
    } else {
      workingDays++;
    }
    current.setDate(current.getDate() + 1);
  }

  const totalDays = workingDays + weekendDays;

  return { workingDays, totalDays, weekendDays };
}