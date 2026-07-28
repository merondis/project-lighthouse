export interface CollegeCostResult {
  projectedFirstYearCost: number;
  totalProjectedCost: number;
}

export function calculateCollegeCost(
  currentAnnualCost: number,
  yearsUntilEnrollment: number,
  inflationRatePercent: number,
  yearsInCollege: number
): CollegeCostResult {
  const rate = inflationRatePercent / 100;
  const projectedFirstYearCost = currentAnnualCost * Math.pow(1 + rate, yearsUntilEnrollment);

  let totalProjectedCost = 0;
  for (let i = 0; i < yearsInCollege; i++) {
    totalProjectedCost += currentAnnualCost * Math.pow(1 + rate, yearsUntilEnrollment + i);
  }

  return {
    projectedFirstYearCost: Number(projectedFirstYearCost.toFixed(2)),
    totalProjectedCost: Number(totalProjectedCost.toFixed(2)),
  };
}
