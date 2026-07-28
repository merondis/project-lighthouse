export interface WorkingCapitalResult {
  workingCapital: number;
  currentRatio: number | string;
}

export function calculateWorkingCapital(currentAssets: number, currentLiabilities: number): WorkingCapitalResult {
  const workingCapital = currentAssets - currentLiabilities;
  const currentRatio = currentLiabilities !== 0 ? Number((currentAssets / currentLiabilities).toFixed(2)) : "N/A";
  return {
    workingCapital: Number(workingCapital.toFixed(2)),
    currentRatio,
  };
}
