export interface DiscountStackResult {
  finalPrice: number;
  totalDiscountAmount: number;
  effectiveDiscountPercent: number;
}

export function calculateStackedDiscounts(
  originalPrice: number,
  discount1: number,
  discount2: number
): DiscountStackResult {
  if ([originalPrice, discount1, discount2].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (originalPrice < 0) {
    throw new Error("Price cannot be negative.");
  }
  if (discount1 < 0 || discount1 > 100 || discount2 < 0 || discount2 > 100) {
    throw new Error("Discount percentages must be between 0 and 100.");
  }

  const afterFirst = originalPrice * (1 - discount1 / 100);
  const afterSecond = afterFirst * (1 - discount2 / 100);

  const totalDiscountAmount = originalPrice - afterSecond;
  const effectiveDiscountPercent = originalPrice > 0 ? (totalDiscountAmount / originalPrice) * 100 : 0;

  return {
    finalPrice: roundTo(afterSecond, 2),
    totalDiscountAmount: roundTo(totalDiscountAmount, 2),
    effectiveDiscountPercent: roundTo(effectiveDiscountPercent, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}