export interface DownPaymentResult {
  downPaymentAmount: number;
  loanAmount: number;
  downPaymentPercent: number;
}

export function calculateDownPayment(homePrice: number, downPaymentPercent: number): DownPaymentResult {
  const downPaymentAmount = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPaymentAmount;
  return {
    downPaymentAmount: Number(downPaymentAmount.toFixed(2)),
    loanAmount: Number(loanAmount.toFixed(2)),
    downPaymentPercent: Number(downPaymentPercent.toFixed(2)),
  };
}
