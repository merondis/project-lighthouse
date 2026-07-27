export interface RothIraResult {
  rothBalance: number;
  totalContributions: number;
  totalGrowth: number;
  taxableAccountBalance: number;
  taxFreeAdvantage: number;
  yearsToRetirement: number;
}

// Projects a Roth IRA balance month by month, where contributions are made
// with after-tax money but all growth and qualified withdrawals are tax-free.
// To show the actual value of that tax treatment, this also simulates an
// equivalent taxable account making the same contributions and earning the
// same return, but where investment gains are taxed annually at the given
// comparison tax rate, a simplified but useful side-by-side comparison.
export function calculateRothIra(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  expectedAnnualReturnPercent: number,
  comparisonTaxRatePercent: number
): RothIraResult {
  if (
    [currentAge, retirementAge, currentBalance, annualContribution, expectedAnnualReturnPercent, comparisonTaxRatePercent].some(
      (v) => Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (currentAge <= 0 || retirementAge <= 0) {
    throw new Error("Ages must be greater than zero.");
  }
  if (retirementAge <= currentAge) {
    throw new Error("Retirement age must be greater than current age.");
  }
  if (currentBalance < 0 || annualContribution < 0) {
    throw new Error("Current balance and annual contribution cannot be negative.");
  }
  if (expectedAnnualReturnPercent < 0) {
    throw new Error("Expected annual return cannot be negative.");
  }
  if (comparisonTaxRatePercent < 0 || comparisonTaxRatePercent > 100) {
    throw new Error("Comparison tax rate must be between 0 and 100.");
  }

  const years = retirementAge - currentAge;
  const totalMonths = years * 12;
  const monthlyRate = expectedAnnualReturnPercent / 100 / 12;
  const monthlyContribution = annualContribution / 12;

  let rothBalance = currentBalance;
  let taxableBalance = currentBalance;
  let taxableBasis = currentBalance;
  let totalContributions = 0;

  for (let month = 0; month < totalMonths; month++) {
    rothBalance = rothBalance * (1 + monthlyRate) + monthlyContribution;
    taxableBalance = taxableBalance * (1 + monthlyRate) + monthlyContribution;
    taxableBasis += monthlyContribution;
    totalContributions += monthlyContribution;

    const isYearEnd = (month + 1) % 12 === 0;
    if (isYearEnd) {
      const gainThisYear = taxableBalance - taxableBasis;
      if (gainThisYear > 0) {
        const taxOwed = gainThisYear * (comparisonTaxRatePercent / 100);
        taxableBalance -= taxOwed;
        taxableBasis = taxableBalance;
      }
    }
  }

  const totalGrowth = rothBalance - currentBalance - totalContributions;
  const taxFreeAdvantage = rothBalance - taxableBalance;

  return {
    rothBalance: roundTo(rothBalance, 2),
    totalContributions: roundTo(totalContributions, 2),
    totalGrowth: roundTo(totalGrowth, 2),
    taxableAccountBalance: roundTo(taxableBalance, 2),
    taxFreeAdvantage: roundTo(taxFreeAdvantage, 2),
    yearsToRetirement: years,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
