export type PayFrequency =
  | "hourly"
  | "daily"
  | "weekly"
  | "biweekly"
  | "semimonthly"
  | "monthly"
  | "annually";

export interface AnnualIncomeResult {
  hourly: number;
  daily: number;
  weekly: number;
  biweekly: number;
  semiMonthly: number;
  monthly: number;
  annual: number;
}

// Converts a pay rate at any frequency (hourly, daily, weekly, biweekly,
// semi-monthly, monthly, or annual) into its equivalent at every other
// frequency, based on a standard work schedule (hours per week and days per
// week). Everything is first normalized to a weekly figure, then expanded
// out to the rest, since weekly is the one frequency that converts cleanly
// in both directions (52 weeks per year, exactly).
export function calculateAnnualIncome(
  payRate: number,
  frequency: PayFrequency,
  hoursPerWeek: number,
  daysPerWeek: number
): AnnualIncomeResult {
  if ([payRate, hoursPerWeek, daysPerWeek].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (payRate <= 0) {
    throw new Error("Pay rate must be greater than zero.");
  }
  if (hoursPerWeek <= 0 || daysPerWeek <= 0) {
    throw new Error("Hours per week and days per week must be greater than zero.");
  }

  let weekly: number;
  switch (frequency) {
    case "hourly":
      weekly = payRate * hoursPerWeek;
      break;
    case "daily":
      weekly = payRate * daysPerWeek;
      break;
    case "weekly":
      weekly = payRate;
      break;
    case "biweekly":
      weekly = payRate / 2;
      break;
    case "semimonthly":
      weekly = (payRate * 24) / 52;
      break;
    case "monthly":
      weekly = (payRate * 12) / 52;
      break;
    case "annually":
      weekly = payRate / 52;
      break;
    default:
      throw new Error("Unknown pay frequency.");
  }

  const annual = weekly * 52;

  return {
    hourly: roundTo(weekly / hoursPerWeek, 2),
    daily: roundTo(weekly / daysPerWeek, 2),
    weekly: roundTo(weekly, 2),
    biweekly: roundTo(weekly * 2, 2),
    semiMonthly: roundTo(annual / 24, 2),
    monthly: roundTo(annual / 12, 2),
    annual: roundTo(annual, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
