export type VatMode = "add" | "remove";

export interface VatResult {
  netAmount: number;
  vatAmount: number;
  grossAmount: number;
}

export function calculateVat(amount: number, vatRatePercent: number, mode: VatMode): VatResult {
  const rate = vatRatePercent / 100;
  if (mode === "add") {
    const netAmount = amount;
    const vatAmount = netAmount * rate;
    const grossAmount = netAmount + vatAmount;
    return {
      netAmount: Number(netAmount.toFixed(2)),
      vatAmount: Number(vatAmount.toFixed(2)),
      grossAmount: Number(grossAmount.toFixed(2)),
    };
  }
  const grossAmount = amount;
  const netAmount = grossAmount / (1 + rate);
  const vatAmount = grossAmount - netAmount;
  return {
    netAmount: Number(netAmount.toFixed(2)),
    vatAmount: Number(vatAmount.toFixed(2)),
    grossAmount: Number(grossAmount.toFixed(2)),
  };
}
