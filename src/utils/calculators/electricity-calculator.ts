export interface ElectricityCostResult {
  kwhPerDay: number;
  kwhPerMonth: number;
  kwhPerYear: number;
  costPerDay: number;
  costPerMonth: number;
  costPerYear: number;
}

export function calculateElectricityCost(
  watts: number,
  hoursPerDay: number,
  daysPerMonth: number,
  costPerKwh: number
): ElectricityCostResult {
  if (!Number.isFinite(watts) || watts <= 0) {
    throw new Error("Please enter a valid, positive wattage.");
  }
  if (!Number.isFinite(hoursPerDay) || hoursPerDay < 0 || hoursPerDay > 24) {
    throw new Error("Please enter hours per day between 0 and 24.");
  }
  if (!Number.isFinite(daysPerMonth) || daysPerMonth <= 0 || daysPerMonth > 31) {
    throw new Error("Please enter a valid number of days per month (1-31).");
  }
  if (!Number.isFinite(costPerKwh) || costPerKwh < 0) {
    throw new Error("Please enter a valid, non-negative cost per kWh.");
  }

  const kwhPerDay = (watts * hoursPerDay) / 1000;
  const kwhPerMonth = kwhPerDay * daysPerMonth;
  const kwhPerYear = kwhPerDay * 365;

  return {
    kwhPerDay: Math.round(kwhPerDay * 1000) / 1000,
    kwhPerMonth: Math.round(kwhPerMonth * 100) / 100,
    kwhPerYear: Math.round(kwhPerYear * 100) / 100,
    costPerDay: Math.round(kwhPerDay * costPerKwh * 100) / 100,
    costPerMonth: Math.round(kwhPerMonth * costPerKwh * 100) / 100,
    costPerYear: Math.round(kwhPerYear * costPerKwh * 100) / 100,
  };
}
