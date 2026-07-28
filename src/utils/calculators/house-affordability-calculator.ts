export interface HouseAffordabilityResult {
  maxHomePrice: number;
  maxLoanAmount: number;
  estimatedMonthlyPayment: number;
}

export function calculateHouseAffordability(
  annualIncome: number,
  monthlyDebts: number,
  downPayment: number,
  annualRatePercent: number,
  loanTermYears: number,
  propertyTaxRatePercent: number,
  annualInsurance: number,
  maxDtiPercent: number
): HouseAffordabilityResult {
  const monthlyIncome = annualIncome / 12;
  const maxTotalMonthlyPayment = monthlyIncome * (maxDtiPercent / 100) - monthlyDebts;
  const monthlyInsurance = annualInsurance / 12;
  const n = loanTermYears * 12;
  const r = annualRatePercent / 100 / 12;

  const factor = r === 0 ? 1 / n : (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const taxFactor = propertyTaxRatePercent / 100 / 12;

  const numerator = maxTotalMonthlyPayment - monthlyInsurance - downPayment * taxFactor;
  const denominator = factor + taxFactor;

  const maxLoanAmount = denominator > 0 ? Math.max(0, numerator / denominator) : 0;
  const maxHomePrice = maxLoanAmount + downPayment;
  const estimatedMonthlyPayment = maxLoanAmount * factor + (maxHomePrice * taxFactor) + monthlyInsurance;

  return {
    maxHomePrice: Number(maxHomePrice.toFixed(2)),
    maxLoanAmount: Number(maxLoanAmount.toFixed(2)),
    estimatedMonthlyPayment: Number(estimatedMonthlyPayment.toFixed(2)),
  };
}
