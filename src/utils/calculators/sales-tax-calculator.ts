export interface SalesTaxResult {
  taxAmount: number;
  totalPrice: number;
}

export function calculateSalesTax(price: number, taxRatePercent: number): SalesTaxResult {
  if (Number.isNaN(price) || Number.isNaN(taxRatePercent)) {
    throw new Error("Please enter valid numbers for price and tax rate.");
  }
  if (price < 0 || taxRatePercent < 0) {
    throw new Error("Values cannot be negative.");
  }

  const taxAmount = roundTo((price * taxRatePercent) / 100, 2);
  const totalPrice = roundTo(price + taxAmount, 2);

  return { taxAmount, totalPrice };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}