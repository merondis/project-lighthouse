export interface CarLoanAffordabilityResult {
  maxMonthlyPayment: number;
  maxLoanAmount: number;
  maxAffordableCarPrice: number;
  totalInterestPaid: number;
}

// Estimates how much car you can afford, the inverse of a standard auto
// loan payment calculator. Instead of computing a monthly payment from a
// known loan amount, this starts from your gross monthly income and a
// target share of income to spend on a car payment, then solves the loan
// annuity formula backwards for the maximum loan amount that payment could
// support, and adds your down payment/trade-in to get a maximum car price.
export function calculateCarLoanAffordability(
  grossMonthlyIncome: number,
  maxPercentOfIncome: number,
  downPayment: number,
  tradeInValue: number,
  annualInterestRatePercent: number,
  loanTermMonths: number
): CarLoanAffordabilityResult {
  if (
    [grossMonthlyIncome, maxPercentOfIncome, downPayment, tradeInValue, annualInterestRatePercent, loanTermMonths].some(
      (v) => Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (grossMonthlyIncome <= 0) {
    throw new Error("Gross monthly income must be greater than zero.");
  }
  if (maxPercentOfIncome <= 0 || maxPercentOfIncome > 100) {
    throw new Error("Percent of income must be between 0 and 100.");
  }
  if (downPayment < 0 || tradeInValue < 0) {
    throw new Error("Down payment and trade-in value cannot be negative.");
  }
  if (annualInterestRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }
  if (!Number.isInteger(loanTermMonths) || loanTermMonths <= 0) {
    throw new Error("Loan term must be a whole number of months greater than zero.");
  }

  const maxMonthlyPayment = grossMonthlyIncome * (maxPercentOfIncome / 100);
  const monthlyRate = annualInterestRatePercent / 100 / 12;

  let maxLoanAmount: number;
  if (monthlyRate === 0) {
    maxLoanAmount = maxMonthlyPayment * loanTermMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, loanTermMonths);
    maxLoanAmount = (maxMonthlyPayment * (factor - 1)) / (monthlyRate * factor);
  }

  const totalInterestPaid = maxMonthlyPayment * loanTermMonths - maxLoanAmount;
  const maxAffordableCarPrice = maxLoanAmount + downPayment + tradeInValue;

  return {
    maxMonthlyPayment: roundTo(maxMonthlyPayment, 2),
    maxLoanAmount: roundTo(maxLoanAmount, 2),
    maxAffordableCarPrice: roundTo(maxAffordableCarPrice, 2),
    totalInterestPaid: roundTo(totalInterestPaid, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
