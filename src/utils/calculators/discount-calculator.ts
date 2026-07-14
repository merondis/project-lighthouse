export interface DiscountResult {
  discountAmount: number;
  finalPrice: number;
  youSave: number;
}

export function calculateDiscount(originalPrice: number, discountPercent: number): DiscountResult {
  if (Number.isNaN(originalPrice) || Number.isNaN(discountPercent)) {
    throw new Error("Please enter valid numbers for price and discount.");
  }
  if (originalPrice < 0 || discountPercent < 0) {
    throw new Error("Values cannot be negative.");
  }
  if (discountPercent > 100) {
    throw new Error("Discount percentage cannot exceed 100.");
  }

  const discountAmount = roundTo((originalPrice * discountPercent) / 100, 2);
  const finalPrice = roundTo(originalPrice - discountAmount, 2);

  return { discountAmount, finalPrice, youSave: discountAmount };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}