export interface FireResult {
  fireNumber: number;
  yearsToFire: number;
  ageAtFire: number;
  projectedBalanceAtFire: number;
  totalContributions: number;
  totalGrowth: number;
}

const MAX_MONTHS = 1200; // 100 years, a practical cap to avoid an unbounded search

// FIRE (Financial Independence, Retire Early) planning centers on a target
// number: the portfolio size that can sustainably fund your annual expenses
// using a fixed withdrawal rate (commonly 4%, sometimes called the "25x
// rule" since 1 / 4% = 25). This calculator computes that target, then
// simulates monthly growth of your current savings plus contributions to
// find out how many years it actually takes to reach it.
export function calculateFire(
  currentAge: number,
  currentSavings: number,
  monthlyContribution: number,
  expectedAnnualReturnPercent: number,
  annualExpenses: number,
  withdrawalRatePercent: number
): FireResult {
  if (
    [currentAge, currentSavings, monthlyContribution, expectedAnnualReturnPercent, annualExpenses, withdrawalRatePercent].some(
      (v) => Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (currentAge <= 0) {
    throw new Error("Current age must be greater than zero.");
  }
  if (currentSavings < 0 || monthlyContribution < 0) {
    throw new Error("Current savings and monthly contribution cannot be negative.");
  }
  if (expectedAnnualReturnPercent < 0) {
    throw new Error("Expected annual return cannot be negative.");
  }
  if (annualExpenses <= 0) {
    throw new Error("Annual expenses must be greater than zero.");
  }
  if (withdrawalRatePercent <= 0 || withdrawalRatePercent > 20) {
    throw new Error("Withdrawal rate must be greater than zero and no more than 20%.");
  }

  const fireNumber = annualExpenses / (withdrawalRatePercent / 100);
  const monthlyRate = expectedAnnualReturnPercent / 100 / 12;

  let balance = currentSavings;
  let months = 0;
  let totalContributions = 0;

  while (balance < fireNumber && months < MAX_MONTHS) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    totalContributions += monthlyContribution;
    months++;
  }

  if (balance < fireNumber) {
    throw new Error("At this savings rate and return, your FIRE number isn't reachable within 100 years. Try increasing your contribution or expected return.");
  }

  const yearsToFire = months / 12;
  const totalGrowth = balance - currentSavings - totalContributions;

  return {
    fireNumber: roundTo(fireNumber, 2),
    yearsToFire: roundTo(yearsToFire, 2),
    ageAtFire: roundTo(currentAge + yearsToFire, 1),
    projectedBalanceAtFire: roundTo(balance, 2),
    totalContributions: roundTo(totalContributions, 2),
    totalGrowth: roundTo(totalGrowth, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
