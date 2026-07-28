export interface BudgetResult {
  needsBudget: number;
  wantsBudget: number;
  savingsBudget: number;
  surplusOrDeficit: number | string;
}

export function calculateBudget(monthlyIncome: number, actualMonthlyExpenses: number): BudgetResult {
  const needsBudget = monthlyIncome * 0.5;
  const wantsBudget = monthlyIncome * 0.3;
  const savingsBudget = monthlyIncome * 0.2;
  const surplusOrDeficit = actualMonthlyExpenses > 0 ? Number((monthlyIncome - actualMonthlyExpenses).toFixed(2)) : "N/A";

  return {
    needsBudget: Number(needsBudget.toFixed(2)),
    wantsBudget: Number(wantsBudget.toFixed(2)),
    savingsBudget: Number(savingsBudget.toFixed(2)),
    surplusOrDeficit,
  };
}
