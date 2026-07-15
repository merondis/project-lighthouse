export interface MarkupResult {
  sellingPrice: number;
  profit: number;
  marginPercent: number;
}

export function calculateMarkup(cost: number, markupPercent: number): MarkupResult {
  if (Number.isNaN(cost) || Number.isNaN(markupPercent)) {
    throw new Error("Please enter valid numbers for both fields.");
  }
  if (cost <= 0) {
    throw new Error("Cost must be greater than zero.");
  }
  if (markupPercent < 0) {
    throw new Error("Markup percentage cannot be negative.");
  }

  const profit = (cost * markupPercent) / 100;
  const sellingPrice = cost + profit;
  const marginPercent = (profit / sellingPrice) * 100;

  return {
    sellingPrice: roundTo(sellingPrice, 2),
    profit: roundTo(profit, 2),
    marginPercent: roundTo(marginPercent, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}