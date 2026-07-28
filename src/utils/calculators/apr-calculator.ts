function monthlyPaymentFor(principal: number, monthlyRate: number, n: number): number {
  if (monthlyRate === 0) return principal / n;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}

function presentValueFor(payment: number, monthlyRate: number, n: number): number {
  if (monthlyRate === 0) return payment * n;
  return (payment * (1 - Math.pow(1 + monthlyRate, -n))) / monthlyRate;
}

export interface AprResult {
  monthlyPayment: number;
  apr: number;
}

export function calculateApr(
  loanAmount: number,
  statedAnnualRatePercent: number,
  termMonths: number,
  fees: number
): AprResult {
  const nominalMonthlyRate = statedAnnualRatePercent / 100 / 12;
  const monthlyPayment = monthlyPaymentFor(loanAmount, nominalMonthlyRate, termMonths);
  const netLoanAmount = loanAmount - fees;

  let low = 0;
  let high = 1;
  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2;
    const pv = presentValueFor(monthlyPayment, mid, termMonths);
    if (pv > netLoanAmount) {
      low = mid;
    } else {
      high = mid;
    }
  }
  const solvedMonthlyRate = (low + high) / 2;
  const apr = solvedMonthlyRate * 12 * 100;

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    apr: Number(apr.toFixed(3)),
  };
}
