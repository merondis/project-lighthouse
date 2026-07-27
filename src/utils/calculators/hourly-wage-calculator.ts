export interface HourlyWageResult {
  regularWeeklyPay: number;
  overtimeWeeklyPay: number;
  totalWeeklyPay: number;
  annualPay: number;
  effectiveHourlyRate: number;
}

// Calculates gross pay from an hourly rate, splitting regular and overtime
// hours and applying an overtime multiplier (1.5x by default, "time and a
// half") to the overtime portion, then annualizes the result across a given
// number of paid weeks per year. This is the reverse direction and a
// different real-world question from the Annual Income Calculator: that
// tool converts a known rate across pay frequencies with no overtime,
// while this one builds a paycheck up from hours actually worked, overtime
// included.
export function calculateHourlyWage(
  hourlyRate: number,
  regularHoursPerWeek: number,
  overtimeHoursPerWeek: number,
  overtimeMultiplier: number,
  weeksPerYear: number
): HourlyWageResult {
  if (
    [hourlyRate, regularHoursPerWeek, overtimeHoursPerWeek, overtimeMultiplier, weeksPerYear].some((v) =>
      Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (hourlyRate <= 0) {
    throw new Error("Hourly rate must be greater than zero.");
  }
  if (regularHoursPerWeek < 0 || overtimeHoursPerWeek < 0) {
    throw new Error("Hours worked cannot be negative.");
  }
  if (overtimeMultiplier < 1) {
    throw new Error("Overtime multiplier must be at least 1.");
  }
  if (weeksPerYear <= 0 || weeksPerYear > 52) {
    throw new Error("Weeks per year must be greater than zero and no more than 52.");
  }

  const regularWeeklyPay = hourlyRate * regularHoursPerWeek;
  const overtimeWeeklyPay = hourlyRate * overtimeMultiplier * overtimeHoursPerWeek;
  const totalWeeklyPay = regularWeeklyPay + overtimeWeeklyPay;
  const annualPay = totalWeeklyPay * weeksPerYear;
  const totalHours = regularHoursPerWeek + overtimeHoursPerWeek;
  const effectiveHourlyRate = totalHours > 0 ? totalWeeklyPay / totalHours : 0;

  return {
    regularWeeklyPay: roundTo(regularWeeklyPay, 2),
    overtimeWeeklyPay: roundTo(overtimeWeeklyPay, 2),
    totalWeeklyPay: roundTo(totalWeeklyPay, 2),
    annualPay: roundTo(annualPay, 2),
    effectiveHourlyRate: roundTo(effectiveHourlyRate, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
