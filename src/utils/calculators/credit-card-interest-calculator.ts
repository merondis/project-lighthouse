export interface CreditCardInterestResult {
  dailyPeriodicRate: number;
  monthlyInterestCharge: number;
  annualInterestIfUnpaid: number;
}

export function calculateCreditCardInterest(
  averageDailyBalance: number,
  annualPercentageRate: number,
  daysInBillingCycle: number
): CreditCardInterestResult {
  if ([averageDailyBalance, annualPercentageRate, daysInBillingCycle].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (averageDailyBalance <= 0 || daysInBillingCycle <= 0) {
    throw new Error("Balance and billing cycle days must be greater than zero.");
  }
  if (annualPercentageRate < 0) {
    throw new Error("APR cannot be negative.");
  }

  const dailyPeriodicRate = annualPercentageRate / 365 / 100;
  const monthlyInterestCharge = averageDailyBalance * dailyPeriodicRate * daysInBillingCycle;
  const annualInterestIfUnpaid = averageDailyBalance * (annualPercentageRate / 100);

  return {
    dailyPeriodicRate: Math.round(dailyPeriodicRate * 1000000) / 1000000,
    monthlyInterestCharge: Math.round(monthlyInterestCharge * 100) / 100,
    annualInterestIfUnpaid: Math.round(annualInterestIfUnpaid * 100) / 100,
  };
}