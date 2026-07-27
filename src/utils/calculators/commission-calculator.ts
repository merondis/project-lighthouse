export interface CommissionResult {
  baseCommission: number;
  bonusCommission: number;
  totalCommission: number;
  totalEarnings: number;
}

// Calculates sales commission with an optional accelerator tier: a flat
// commission rate applies to all sales, and if sales exceed an optional
// quota threshold, an additional bonus rate applies only to the portion of
// sales above that threshold, mirroring how many real-world tiered
// commission plans reward exceeding a target rather than paying the same
// flat rate on every dollar sold.
export function calculateCommission(
  salesAmount: number,
  commissionRatePercent: number,
  baseSalary: number,
  bonusThreshold: number,
  bonusRatePercent: number
): CommissionResult {
  if (
    [salesAmount, commissionRatePercent, baseSalary, bonusThreshold, bonusRatePercent].some((v) =>
      Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (salesAmount < 0) {
    throw new Error("Sales amount cannot be negative.");
  }
  if (commissionRatePercent < 0 || bonusRatePercent < 0) {
    throw new Error("Commission and bonus rates cannot be negative.");
  }
  if (baseSalary < 0) {
    throw new Error("Base salary cannot be negative.");
  }
  if (bonusThreshold < 0) {
    throw new Error("Bonus threshold cannot be negative.");
  }

  const baseCommission = salesAmount * (commissionRatePercent / 100);
  const bonusCommission =
    bonusThreshold > 0 && salesAmount > bonusThreshold
      ? (salesAmount - bonusThreshold) * (bonusRatePercent / 100)
      : 0;
  const totalCommission = baseCommission + bonusCommission;
  const totalEarnings = baseSalary + totalCommission;

  return {
    baseCommission: roundTo(baseCommission, 2),
    bonusCommission: roundTo(bonusCommission, 2),
    totalCommission: roundTo(totalCommission, 2),
    totalEarnings: roundTo(totalEarnings, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
