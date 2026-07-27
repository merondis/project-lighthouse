export type PregnancyInputMode = "lmp" | "dueDate";

export interface PregnancyWeekResult {
  dueDate: string;
  currentWeek: number;
  currentDay: number;
  trimester: number;
  weeksRemaining: number;
}

const FULL_TERM_DAYS = 280;

// Calculates current pregnancy week, day and trimester relative to today,
// accepting either a last menstrual period (LMP) date or an already-known
// due date as the starting point, useful since not everyone tracking their
// pregnancy week by week knows their exact LMP date, some only have a due
// date from an ultrasound or their provider.
export function calculatePregnancyWeek(
  mode: PregnancyInputMode,
  dateISO: string
): PregnancyWeekResult {
  const inputDate = new Date(dateISO);
  if (Number.isNaN(inputDate.getTime())) {
    throw new Error("Please enter a valid date.");
  }

  let lmp: Date;
  let dueDate: Date;

  if (mode === "lmp") {
    const today = new Date();
    if (inputDate.getTime() > today.getTime()) {
      throw new Error("The last menstrual period date cannot be in the future.");
    }
    lmp = inputDate;
    dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + FULL_TERM_DAYS);
  } else {
    dueDate = inputDate;
    lmp = new Date(dueDate);
    lmp.setDate(lmp.getDate() - FULL_TERM_DAYS);
  }

  const today = new Date();
  const msDiff = today.getTime() - lmp.getTime();
  const totalDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  const currentWeek = Math.max(0, Math.floor(totalDays / 7));
  const currentDay = Math.max(0, totalDays % 7);

  let trimester = 1;
  if (currentWeek >= 27) trimester = 3;
  else if (currentWeek >= 13) trimester = 2;

  const weeksRemaining = Math.max(0, 40 - currentWeek);

  return {
    dueDate: formatDate(dueDate),
    currentWeek,
    currentDay,
    trimester,
    weeksRemaining,
  };
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
