export interface BusinessValuationResult {
  estimatedValue: number;
  adjustedEarnings: number;
}

export function calculateBusinessValuation(
  annualEarnings: number,
  multiple: number,
  addBackAssets: number
): BusinessValuationResult {
  const adjustedEarnings = annualEarnings + addBackAssets;
  const estimatedValue = annualEarnings * multiple + addBackAssets;
  return {
    estimatedValue: Number(estimatedValue.toFixed(2)),
    adjustedEarnings: Number(adjustedEarnings.toFixed(2)),
  };
}
