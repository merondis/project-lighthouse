export interface SimpleInterestResult {
  interestAmount: number;
  totalAmount: number;
}

export function calculateSimpleInterest(
  principal: number,
  annualRatePercent: number,
  years: number
): SimpleInterestResult {
  if ([principal, annualRatePercent, years].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (principal <= 0 || years <= 0) {
    throw new Error("Principal and time period must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }

  const interestAmount = (principal * annualRatePercent * years) / 100;
  const totalAmount = principal + interestAmount;

  return {
    interestAmount: roundTo(interestAmount, 2),
    totalAmount: roundTo(totalAmount, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}