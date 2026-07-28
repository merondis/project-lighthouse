export interface HomeEquityLoanResult {
  availableEquity: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
}

export function calculateHomeEquityLoan(
  homeValue: number,
  mortgageBalance: number,
  loanAmount: number,
  annualRatePercent: number,
  termYears: number
): HomeEquityLoanResult {
  const availableEquity = homeValue - mortgageBalance;
  const n = termYears * 12;
  const r = annualRatePercent / 100 / 12;
  const monthlyPayment = r === 0 ? loanAmount / n : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - loanAmount;

  return {
    availableEquity: Number(availableEquity.toFixed(2)),
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
  };
}
