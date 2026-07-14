export type GstMode = "add" | "remove";

export interface GstResult {
  baseAmount: number;
  gstAmount: number;
  totalAmount: number;
}

export function calculateGst(amount: number, gstRate: number, mode: GstMode): GstResult {
  if (Number.isNaN(amount) || Number.isNaN(gstRate)) {
    throw new Error("Please enter valid numbers for amount and GST rate.");
  }
  if (amount < 0 || gstRate < 0) {
    throw new Error("Values cannot be negative.");
  }

  if (mode === "add") {
    const gstAmount = roundTo((amount * gstRate) / 100, 2);
    const totalAmount = roundTo(amount + gstAmount, 2);
    return { baseAmount: roundTo(amount, 2), gstAmount, totalAmount };
  }

  // remove: amount is GST-inclusive, extract base
  const baseAmount = roundTo(amount / (1 + gstRate / 100), 2);
  const gstAmount = roundTo(amount - baseAmount, 2);
  return { baseAmount, gstAmount, totalAmount: roundTo(amount, 2) };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}