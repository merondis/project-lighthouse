export interface TraditionalIraResult {
  balanceAtRetirement: number;
  totalContributions: number;
  totalGrowth: number;
  currentYearTaxSavings: number;
  afterTaxWithdrawalValue: number;
}

export function calculateTraditionalIra(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  expectedReturnPercent: number,
  currentTaxRatePercent: number,
  retirementTaxRatePercent: number
): TraditionalIraResult {
  const years = Math.max(0, retirementAge - currentAge);
  const monthlyRate = expectedReturnPercent / 100 / 12;
  const months = years * 12;
  const monthlyContribution = annualContribution / 12;

  let balance = currentBalance;
  for (let m = 0; m < months; m++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
  }

  const totalContributions = currentBalance + annualContribution * years;
  const totalGrowth = balance - totalContributions;
  const currentYearTaxSavings = annualContribution * (currentTaxRatePercent / 100);
  const afterTaxWithdrawalValue = balance * (1 - retirementTaxRatePercent / 100);

  return {
    balanceAtRetirement: Number(balance.toFixed(2)),
    totalContributions: Number(totalContributions.toFixed(2)),
    totalGrowth: Number(totalGrowth.toFixed(2)),
    currentYearTaxSavings: Number(currentYearTaxSavings.toFixed(2)),
    afterTaxWithdrawalValue: Number(afterTaxWithdrawalValue.toFixed(2)),
  };
}
