export interface RefinanceResult {
  currentMonthlyPayment: number;
  newMonthlyPayment: number;
  monthlySavings: number;
  breakEvenMonths: number;
  totalInterestSavings: number;
}

function calculateMonthlyPayment(principal: number, annualRatePercent: number, months: number): number {
  const monthlyRate = annualRatePercent / 12 / 100;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function calculateMortgageRefinance(
  remainingBalance: number,
  currentRatePercent: number,
  remainingMonths: number,
  newRatePercent: number,
  newTermMonths: number,
  closingCosts: number
): RefinanceResult {
  if (
    [remainingBalance, currentRatePercent, remainingMonths, newRatePercent, newTermMonths, closingCosts].some(
      (v) => Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (remainingBalance <= 0 || remainingMonths <= 0 || newTermMonths <= 0) {
    throw new Error("Balance and loan terms must be greater than zero.");
  }
  if (currentRatePercent < 0 || newRatePercent < 0 || closingCosts < 0) {
    throw new Error("Values cannot be negative.");
  }

  const currentMonthlyPayment = calculateMonthlyPayment(remainingBalance, currentRatePercent, remainingMonths);
  const newMonthlyPayment = calculateMonthlyPayment(remainingBalance, newRatePercent, newTermMonths);

  const monthlySavings = currentMonthlyPayment - newMonthlyPayment;

  const currentTotalRemaining = currentMonthlyPayment * remainingMonths;
  const newTotalPayment = newMonthlyPayment * newTermMonths;
  const totalInterestSavings = currentTotalRemaining - newTotalPayment - closingCosts;

  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : -1;

  return {
    currentMonthlyPayment: Math.round(currentMonthlyPayment * 100) / 100,
    newMonthlyPayment: Math.round(newMonthlyPayment * 100) / 100,
    monthlySavings: Math.round(monthlySavings * 100) / 100,
    breakEvenMonths,
    totalInterestSavings: Math.round(totalInterestSavings * 100) / 100,
  };
}