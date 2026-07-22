export interface SipResult {
  maturityAmount: number;
  totalInvested: number;
  totalGains: number;
}

export function calculateSip(
  monthlyInvestment: number,
  annualRatePercent: number,
  years: number
): SipResult {
  if ([monthlyInvestment, annualRatePercent, years].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (monthlyInvestment <= 0 || years <= 0) {
    throw new Error("Monthly investment and time period must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Expected annual return cannot be negative.");
  }

  const months = Math.round(years * 12);
  const monthlyRate = annualRatePercent / 100 / 12;

  const maturityAmount =
    monthlyRate === 0
      ? monthlyInvestment * months
      : monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const totalInvested = monthlyInvestment * months;
  const totalGains = maturityAmount - totalInvested;

  return {
    maturityAmount: roundTo(maturityAmount, 2),
    totalInvested: roundTo(totalInvested, 2),
    totalGains: roundTo(totalGains, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
