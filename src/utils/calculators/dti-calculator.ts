export interface DtiResult {
  dtiRatio: number;
  category: string;
}

export function calculateDti(monthlyDebtPayments: number, grossMonthlyIncome: number): DtiResult {
  if (Number.isNaN(monthlyDebtPayments) || Number.isNaN(grossMonthlyIncome)) {
    throw new Error("Please enter valid numbers for both fields.");
  }
  if (grossMonthlyIncome <= 0) {
    throw new Error("Gross monthly income must be greater than zero.");
  }
  if (monthlyDebtPayments < 0) {
    throw new Error("Monthly debt payments cannot be negative.");
  }

  const dtiRatio = (monthlyDebtPayments / grossMonthlyIncome) * 100;
  const rounded = Math.round(dtiRatio * 10) / 10;

  let category: string;
  if (rounded <= 20) category = "Excellent";
  else if (rounded <= 36) category = "Good";
  else if (rounded <= 43) category = "Manageable";
  else category = "High Risk";

  return { dtiRatio: rounded, category };
}