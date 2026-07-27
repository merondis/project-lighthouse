export interface DueDateReverseResult {
  estimatedLmpDate: string;
  estimatedConceptionDate: string;
  trimester2StartDate: string;
  trimester3StartDate: string;
}

const FULL_TERM_DAYS = 280;
const CONCEPTION_OFFSET_DAYS = 14; // typical days from LMP to ovulation/conception
const TRIMESTER_2_START_DAYS = 13 * 7;
const TRIMESTER_3_START_DAYS = 27 * 7;

// Works backward from a known due date (for example, one given by a doctor
// or ultrasound dating, rather than calculated from a tracked LMP) to
// reconstruct the estimated pregnancy timeline: estimated last menstrual
// period date, estimated conception date, and the start dates of the
// second and third trimesters. Unlike a week-by-week tracker, this is a
// pure reference calculation and doesn't depend on today's date at all.
export function calculateDueDateReverse(dueDateISO: string): DueDateReverseResult {
  const dueDate = new Date(dueDateISO);
  if (Number.isNaN(dueDate.getTime())) {
    throw new Error("Please enter a valid due date.");
  }

  const lmp = new Date(dueDate);
  lmp.setDate(lmp.getDate() - FULL_TERM_DAYS);

  const conception = new Date(lmp);
  conception.setDate(conception.getDate() + CONCEPTION_OFFSET_DAYS);

  const trimester2Start = new Date(lmp);
  trimester2Start.setDate(trimester2Start.getDate() + TRIMESTER_2_START_DAYS);

  const trimester3Start = new Date(lmp);
  trimester3Start.setDate(trimester3Start.getDate() + TRIMESTER_3_START_DAYS);

  return {
    estimatedLmpDate: formatDate(lmp),
    estimatedConceptionDate: formatDate(conception),
    trimester2StartDate: formatDate(trimester2Start),
    trimester3StartDate: formatDate(trimester3Start),
  };
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
