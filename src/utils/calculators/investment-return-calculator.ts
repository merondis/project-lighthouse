export interface InvestmentReturnResult {
  annualReturnPercent: number;
  totalContributions: number;
  totalGain: number;
}

// Projects the future value of an initial investment plus monthly contributions
// at a given annual rate of return, compounded monthly.
function projectedEndingBalance(
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  annualRatePercent: number
): number {
  const months = Math.round(years * 12);
  const monthlyRate = annualRatePercent / 100 / 12;

  const fvOfInitial = initialInvestment * Math.pow(1 + monthlyRate, months);
  const fvOfContributions =
    monthlyContribution === 0
      ? 0
      : monthlyRate === 0
      ? monthlyContribution * months
      : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  return fvOfInitial + fvOfContributions;
}

// Solves for the annualized rate of return (compounded monthly) that turns an
// initial investment plus monthly contributions into the given ending balance
// after the given number of years. Since the ending balance is a monotonically
// increasing function of the rate, this uses bisection search rather than a
// closed-form formula (which doesn't exist once monthly contributions are involved).
export function calculateInvestmentReturn(
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  endingBalance: number
): InvestmentReturnResult {
  if ([initialInvestment, monthlyContribution, years, endingBalance].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (initialInvestment < 0 || monthlyContribution < 0) {
    throw new Error("Initial investment and monthly contribution cannot be negative.");
  }
  if (years <= 0) {
    throw new Error("Time period must be greater than zero.");
  }
  if (endingBalance <= 0) {
    throw new Error("Ending balance must be greater than zero.");
  }

  const months = Math.round(years * 12);
  const totalContributions = initialInvestment + monthlyContribution * months;

  if (totalContributions <= 0) {
    throw new Error("Enter an initial investment or a monthly contribution greater than zero.");
  }

  let low = -0.99;
  let high = 10;

  const balanceAtLow = projectedEndingBalance(initialInvestment, monthlyContribution, years, low * 100);
  const balanceAtHigh = projectedEndingBalance(initialInvestment, monthlyContribution, years, high * 100);

  if (endingBalance < balanceAtLow || endingBalance > balanceAtHigh) {
    throw new Error("That ending balance is outside the range this calculator can solve for. Please double-check your inputs.");
  }

  for (let i = 0; i < 200; i++) {
    const mid = (low + high) / 2;
    const balanceAtMid = projectedEndingBalance(initialInvestment, monthlyContribution, years, mid * 100);
    if (balanceAtMid < endingBalance) {
      low = mid;
    } else {
      high = mid;
    }
  }

  const annualReturnPercent = ((low + high) / 2) * 100;
  const totalGain = endingBalance - totalContributions;

  return {
    annualReturnPercent: roundTo(annualReturnPercent, 2),
    totalContributions: roundTo(totalContributions, 2),
    totalGain: roundTo(totalGain, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
