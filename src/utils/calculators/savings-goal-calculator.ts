export interface SavingsGoalResult {
  monthlyContribution: number;
  totalContributions: number;
  totalInterestEarned: number;
}

export function calculateSavingsGoal(
  targetAmount: number,
  currentSavings: number,
  months: number,
  annualRatePercent: number
): SavingsGoalResult {
  if ([targetAmount, currentSavings, months, annualRatePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (targetAmount <= 0 || months <= 0) {
    throw new Error("Target amount and months must be greater than zero.");
  }
  if (currentSavings < 0 || annualRatePercent < 0) {
    throw new Error("Values cannot be negative.");
  }
  if (currentSavings >= targetAmount) {
    throw new Error("Your current savings already meet or exceed your target amount.");
  }

  const monthlyRate = annualRatePercent / 12 / 100;
  const remainingGoal = targetAmount - currentSavings;

  let monthlyContribution: number;

  if (monthlyRate === 0) {
    monthlyContribution = remainingGoal / months;
  } else {
    // Future value of an annuity formula solved for payment
    const factor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    const futureValueOfCurrent = currentSavings * Math.pow(1 + monthlyRate, months);
    monthlyContribution = (targetAmount - futureValueOfCurrent) / factor;
  }

  monthlyContribution = Math.max(0, monthlyContribution);

  const totalContributions = monthlyContribution * months;
  const totalInterestEarned = targetAmount - currentSavings - totalContributions;

  return {
    monthlyContribution: Math.round(monthlyContribution * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterestEarned: Math.round(Math.max(0, totalInterestEarned) * 100) / 100,
  };
}