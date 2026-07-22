export interface RetirementResult {
  yearsToRetirement: number;
  retirementCorpus: number;
  totalContributions: number;
  totalGrowth: number;
  estimatedMonthlyIncome: number;
}

export function calculateRetirement(
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualRatePercent: number
): RetirementResult {
  if (
    [currentAge, retirementAge, currentSavings, monthlyContribution, annualRatePercent].some((v) =>
      Number.isNaN(v)
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
  if (currentSavings < 0 || monthlyContribution < 0) {
    throw new Error("Savings and contribution amounts cannot be negative.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Expected annual return cannot be negative.");
  }

  const years = retirementAge - currentAge;
  const months = years * 12;
  const monthlyRate = annualRatePercent / 100 / 12;

  const growthOfCurrentSavings =
    monthlyRate === 0 ? currentSavings : currentSavings * Math.pow(1 + monthlyRate, months);

  const growthOfContributions =
    monthlyRate === 0
      ? monthlyContribution * months
      : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const retirementCorpus = growthOfCurrentSavings + growthOfContributions;
  const totalContributions = currentSavings + monthlyContribution * months;
  const totalGrowth = retirementCorpus - totalContributions;

  // Estimated sustainable monthly income using the common 4% annual withdrawal rule.
  const estimatedMonthlyIncome = (retirementCorpus * 0.04) / 12;

  return {
    yearsToRetirement: years,
    retirementCorpus: roundTo(retirementCorpus, 2),
    totalContributions: roundTo(totalContributions, 2),
    totalGrowth: roundTo(totalGrowth, 2),
    estimatedMonthlyIncome: roundTo(estimatedMonthlyIncome, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
