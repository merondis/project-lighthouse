export interface BreakevenResult {
  breakevenUnits: number;
  breakevenRevenue: number;
}

export function calculateBreakeven(
  fixedCosts: number,
  pricePerUnit: number,
  variableCostPerUnit: number
): BreakevenResult {
  if ([fixedCosts, pricePerUnit, variableCostPerUnit].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (fixedCosts <= 0) {
    throw new Error("Fixed costs must be greater than zero.");
  }
  if (pricePerUnit <= variableCostPerUnit) {
    throw new Error("Price per unit must be greater than variable cost per unit.");
  }

  const contributionMargin = pricePerUnit - variableCostPerUnit;
  const breakevenUnits = fixedCosts / contributionMargin;
  const breakevenRevenue = breakevenUnits * pricePerUnit;

  return {
    breakevenUnits: Math.ceil(breakevenUnits),
    breakevenRevenue: Math.round(breakevenRevenue * 100) / 100,
  };
}