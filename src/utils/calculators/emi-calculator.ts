export interface EmiResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
}

export function calculateEmi(
  principal: number,
  annualRatePercent: number,
  tenureMonths: number
): EmiResult {
  if (Number.isNaN(principal) || Number.isNaN(annualRatePercent) || Number.isNaN(tenureMonths)) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (principal <= 0 || tenureMonths <= 0) {
    throw new Error("Loan amount and tenure must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }

  const monthlyRate = annualRatePercent / 12 / 100;

  let monthlyEmi: number;
  if (monthlyRate === 0) {
    monthlyEmi = principal / tenureMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, tenureMonths);
    monthlyEmi = (principal * monthlyRate * factor) / (factor - 1);
  }

  const totalPayment = monthlyEmi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return {
    monthlyEmi: roundTo(monthlyEmi, 2),
    totalInterest: roundTo(totalInterest, 2),
    totalPayment: roundTo(totalPayment, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}