export interface ExtraPaymentResult {
  originalMonths: number;
  newMonths: number;
  monthsSaved: number;
  interestSaved: number;
}

export function calculateExtraPaymentImpact(
  principal: number,
  annualRatePercent: number,
  originalMonthlyPayment: number,
  extraMonthlyPayment: number
): ExtraPaymentResult {
  if (
    [principal, annualRatePercent, originalMonthlyPayment, extraMonthlyPayment].some((v) =>
      Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (principal <= 0 || originalMonthlyPayment <= 0) {
    throw new Error("Loan amount and monthly payment must be greater than zero.");
  }
  if (annualRatePercent < 0 || extraMonthlyPayment < 0) {
    throw new Error("Values cannot be negative.");
  }

  const monthlyRate = annualRatePercent / 12 / 100;

  const minimumPayment = principal * monthlyRate;
  if (monthlyRate > 0 && originalMonthlyPayment <= minimumPayment) {
    throw new Error(
      "Your monthly payment is too low to ever pay off this loan at this interest rate. Increase the payment amount."
    );
  }

  function simulate(payment: number): { months: number; totalInterest: number } {
    let balance = principal;
    let months = 0;
    let totalInterest = 0;
    const maxMonths = 1200; // safety cap: 100 years

    while (balance > 0 && months < maxMonths) {
      const interestForMonth = balance * monthlyRate;
      let principalPortion = payment - interestForMonth;

      if (principalPortion > balance) {
        principalPortion = balance;
      }

      totalInterest += interestForMonth;
      balance -= principalPortion;
      months += 1;
    }

    return { months, totalInterest: roundTo(totalInterest, 2) };
  }

  const original = simulate(originalMonthlyPayment);
  const withExtra = simulate(originalMonthlyPayment + extraMonthlyPayment);

  return {
    originalMonths: original.months,
    newMonths: withExtra.months,
    monthsSaved: original.months - withExtra.months,
    interestSaved: roundTo(original.totalInterest - withExtra.totalInterest, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}