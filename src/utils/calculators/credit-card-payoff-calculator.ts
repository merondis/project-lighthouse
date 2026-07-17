export interface CreditCardPayoffResult {
  monthsToPayoff: number;
  totalInterest: number;
  totalPaid: number;
}

export function calculateCreditCardPayoff(
  balance: number,
  annualAprPercent: number,
  monthlyPayment: number
): CreditCardPayoffResult {
  if ([balance, annualAprPercent, monthlyPayment].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (balance <= 0 || monthlyPayment <= 0) {
    throw new Error("Balance and monthly payment must be greater than zero.");
  }
  if (annualAprPercent < 0) {
    throw new Error("APR cannot be negative.");
  }

  const monthlyRate = annualAprPercent / 12 / 100;
  const minimumInterestOnly = balance * monthlyRate;

  if (monthlyRate > 0 && monthlyPayment <= minimumInterestOnly) {
    throw new Error(
      "This payment only covers interest (or less), the balance will never be paid off. Increase your monthly payment."
    );
  }

  let remaining = balance;
  let months = 0;
  let totalInterest = 0;
  const maxMonths = 1200;

  while (remaining > 0 && months < maxMonths) {
    const interestForMonth = remaining * monthlyRate;
    let principalPortion = monthlyPayment - interestForMonth;

    if (principalPortion > remaining) {
      principalPortion = remaining;
    }

    totalInterest += interestForMonth;
    remaining -= principalPortion;
    months += 1;
  }

  const totalPaid = balance + totalInterest;

  return {
    monthsToPayoff: months,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPaid: Math.round(totalPaid * 100) / 100,
  };
}