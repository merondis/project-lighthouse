export interface DebtEntry {
  balance: number;
  minPayment: number;
}

export interface DebtConsolidationResult {
  totalBalance: number;
  currentTotalMonthlyPayment: number;
  newMonthlyPayment: number;
  monthlyPaymentChange: number;
  newTotalInterest: number;
}

export function calculateDebtConsolidation(
  debts: DebtEntry[],
  consolidationRatePercent: number,
  consolidationTermMonths: number
): DebtConsolidationResult {
  const valid = debts.filter((d) => d.balance > 0);
  const totalBalance = valid.reduce((sum, d) => sum + d.balance, 0);
  const currentTotalMonthlyPayment = valid.reduce((sum, d) => sum + d.minPayment, 0);

  const r = consolidationRatePercent / 100 / 12;
  const n = consolidationTermMonths;
  const newMonthlyPayment =
    totalBalance === 0 ? 0 : r === 0 ? totalBalance / n : (totalBalance * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const newTotalInterest = newMonthlyPayment * n - totalBalance;
  const monthlyPaymentChange = newMonthlyPayment - currentTotalMonthlyPayment;

  return {
    totalBalance: Number(totalBalance.toFixed(2)),
    currentTotalMonthlyPayment: Number(currentTotalMonthlyPayment.toFixed(2)),
    newMonthlyPayment: Number(newMonthlyPayment.toFixed(2)),
    monthlyPaymentChange: Number(monthlyPaymentChange.toFixed(2)),
    newTotalInterest: Number(newTotalInterest.toFixed(2)),
  };
}
