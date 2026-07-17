export interface PregnancyResult {
  dueDate: string;
  currentWeek: number;
  currentDay: number;
  trimester: number;
}

export function calculatePregnancyDueDate(lastPeriodDateISO: string): PregnancyResult {
  const lmp = new Date(lastPeriodDateISO);

  if (Number.isNaN(lmp.getTime())) {
    throw new Error("Please enter a valid date for your last menstrual period.");
  }

  const today = new Date();
  if (lmp.getTime() > today.getTime()) {
    throw new Error("The last menstrual period date cannot be in the future.");
  }

  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280);

  const msDiff = today.getTime() - lmp.getTime();
  const totalDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  const currentWeek = Math.floor(totalDays / 7);
  const currentDay = totalDays % 7;

  let trimester = 1;
  if (currentWeek >= 27) trimester = 3;
  else if (currentWeek >= 13) trimester = 2;

  return {
    dueDate: dueDate.toISOString().split("T")[0],
    currentWeek: Math.max(0, currentWeek),
    currentDay: Math.max(0, currentDay),
    trimester,
  };
}