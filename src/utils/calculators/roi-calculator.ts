export interface RoiResult {
  netProfit: number;
  roiPercent: number;
}

export function calculateRoi(initialInvestment: number, finalValue: number): RoiResult {
  if (Number.isNaN(initialInvestment) || Number.isNaN(finalValue)) {
    throw new Error("Please enter valid numbers for both fields.");
  }
  if (initialInvestment <= 0) {
    throw new Error("Initial investment must be greater than zero.");
  }

  const netProfit = finalValue - initialInvestment;
  const roiPercent = (netProfit / initialInvestment) * 100;

  return {
    netProfit: roundTo(netProfit, 2),
    roiPercent: roundTo(roiPercent, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}