export interface NetWorthResult {
  netWorth: number;
  status: string;
}

export function calculateNetWorth(totalAssets: number, totalLiabilities: number): NetWorthResult {
  if (Number.isNaN(totalAssets) || Number.isNaN(totalLiabilities)) {
    throw new Error("Please enter valid numbers for assets and liabilities.");
  }
  if (totalAssets < 0 || totalLiabilities < 0) {
    throw new Error("Values cannot be negative.");
  }

  const netWorth = totalAssets - totalLiabilities;

  return {
    netWorth: Math.round(netWorth * 100) / 100,
    status: netWorth >= 0 ? "Positive" : "Negative",
  };
}