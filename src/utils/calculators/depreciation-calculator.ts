export type DepreciationMethod = "straightLine" | "decliningBalance";

export interface DepreciationResult {
  firstYearDepreciation: number;
  annualDepreciation: number | string;
  bookValueAfterYear1: number;
  totalDepreciableAmount: number;
}

export function calculateDepreciation(
  assetCost: number,
  salvageValue: number,
  usefulLifeYears: number,
  method: DepreciationMethod
): DepreciationResult {
  const totalDepreciableAmount = Math.max(0, assetCost - salvageValue);

  if (method === "decliningBalance") {
    const rate = usefulLifeYears > 0 ? 2 / usefulLifeYears : 0;
    const firstYearDepreciation = Math.min(assetCost * rate, totalDepreciableAmount);
    const bookValueAfterYear1 = assetCost - firstYearDepreciation;
    return {
      firstYearDepreciation: Number(firstYearDepreciation.toFixed(2)),
      annualDepreciation: "Varies each year (declining balance)",
      bookValueAfterYear1: Number(bookValueAfterYear1.toFixed(2)),
      totalDepreciableAmount: Number(totalDepreciableAmount.toFixed(2)),
    };
  }

  const annualDepreciation = usefulLifeYears > 0 ? totalDepreciableAmount / usefulLifeYears : 0;
  const bookValueAfterYear1 = assetCost - annualDepreciation;
  return {
    firstYearDepreciation: Number(annualDepreciation.toFixed(2)),
    annualDepreciation: Number(annualDepreciation.toFixed(2)),
    bookValueAfterYear1: Number(bookValueAfterYear1.toFixed(2)),
    totalDepreciableAmount: Number(totalDepreciableAmount.toFixed(2)),
  };
}
