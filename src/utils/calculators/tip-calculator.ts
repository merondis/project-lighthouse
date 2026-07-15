export interface TipResult {
  tipAmount: number;
  totalAmount: number;
  amountPerPerson: number;
}

export function calculateTip(billAmount: number, tipPercent: number, numPeople: number): TipResult {
  if ([billAmount, tipPercent, numPeople].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (billAmount < 0 || tipPercent < 0) {
    throw new Error("Values cannot be negative.");
  }
  if (numPeople < 1) {
    throw new Error("Number of people must be at least 1.");
  }

  const tipAmount = roundTo((billAmount * tipPercent) / 100, 2);
  const totalAmount = roundTo(billAmount + tipAmount, 2);
  const amountPerPerson = roundTo(totalAmount / numPeople, 2);

  return { tipAmount, totalAmount, amountPerPerson };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}