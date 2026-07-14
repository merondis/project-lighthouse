import { calculateEmi } from "./emi-calculator";

export interface LoanResult {
  monthlyPayment: number;
  totalInterest: number;
  totalRepayment: number;
  tenureMonths: number;
}

export function calculateLoan(
  principal: number,
  annualRatePercent: number,
  tenureYears: number
): LoanResult {
  if (Number.isNaN(tenureYears) || tenureYears <= 0) {
    throw new Error("Loan tenure must be greater than zero.");
  }

  const tenureMonths = Math.round(tenureYears * 12);
  const emiResult = calculateEmi(principal, annualRatePercent, tenureMonths);

  return {
    monthlyPayment: emiResult.monthlyEmi,
    totalInterest: emiResult.totalInterest,
    totalRepayment: emiResult.totalPayment,
    tenureMonths,
  };
}