export interface SavingsInterestResult {
  endingBalance: number;
  totalContributions: number;
  totalInterestEarned: number;
  totalTaxPaid: number;
  netInterestAfterTax: number;
}

// Models a typical savings account: an initial deposit plus optional monthly
// deposits, compounding monthly. Unlike a pure compound interest projection,
// this also accounts for the fact that interest earned in a taxable savings
// account is generally taxed as ordinary income each year, not deferred like
// growth in a retirement account, so a tax rate can be applied to the
// interest earned in each calendar year, reducing the balance that continues
// compounding forward (a simplified assumption that tax is paid from the
// account itself, rather than from outside funds).
export function calculateSavingsInterest(
  initialDeposit: number,
  monthlyDeposit: number,
  annualInterestRatePercent: number,
  years: number,
  taxRatePercent: number
): SavingsInterestResult {
  if (
    [initialDeposit, monthlyDeposit, annualInterestRatePercent, years, taxRatePercent].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (initialDeposit < 0 || monthlyDeposit < 0) {
    throw new Error("Initial deposit and monthly deposit cannot be negative.");
  }
  if (annualInterestRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }
  if (years <= 0) {
    throw new Error("Number of years must be greater than zero.");
  }
  if (taxRatePercent < 0 || taxRatePercent > 100) {
    throw new Error("Tax rate must be between 0 and 100.");
  }

  const totalMonths = Math.round(years * 12);
  const monthlyRate = annualInterestRatePercent / 100 / 12;

  let balance = initialDeposit;
  let basisForYear = initialDeposit;
  let totalContributions = 0;
  let totalTaxPaid = 0;
  let totalInterestEarned = 0;

  for (let month = 0; month < totalMonths; month++) {
    const interestThisMonth = balance * monthlyRate;
    balance += interestThisMonth + monthlyDeposit;
    totalInterestEarned += interestThisMonth;
    totalContributions += monthlyDeposit;
    basisForYear += monthlyDeposit;

    const isYearEnd = (month + 1) % 12 === 0 || month === totalMonths - 1;
    if (isYearEnd && taxRatePercent > 0) {
      const gainThisYear = balance - basisForYear;
      if (gainThisYear > 0) {
        const taxOwed = gainThisYear * (taxRatePercent / 100);
        balance -= taxOwed;
        totalTaxPaid += taxOwed;
      }
      basisForYear = balance;
    }
  }

  const netInterestAfterTax = totalInterestEarned - totalTaxPaid;

  return {
    endingBalance: roundTo(balance, 2),
    totalContributions: roundTo(initialDeposit + totalContributions, 2),
    totalInterestEarned: roundTo(totalInterestEarned, 2),
    totalTaxPaid: roundTo(totalTaxPaid, 2),
    netInterestAfterTax: roundTo(netInterestAfterTax, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
