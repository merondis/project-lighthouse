export interface StudentLoanResult {
  capitalizedInterest: number;
  balanceAtRepayment: number;
  monthlyPayment: number;
  totalInterest: number;
  totalRepayment: number;
}

// Student loans often include a grace period after graduation before regular
// repayment begins. Unsubsidized loans keep accruing interest during that
// grace period, which then gets capitalized (added to the principal) once
// repayment starts, so future interest is charged on a larger balance.
// Subsidized loans don't accrue interest during the grace period, so the
// balance is unchanged when repayment begins. This calculator applies that
// grace-period capitalization step before running the standard amortized
// loan payment formula.
export function calculateStudentLoan(
  loanBalance: number,
  annualRatePercent: number,
  termYears: number,
  gracePeriodMonths: number,
  interestAccruesDuringGrace: boolean
): StudentLoanResult {
  if (
    [loanBalance, annualRatePercent, termYears, gracePeriodMonths].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (loanBalance <= 0 || termYears <= 0) {
    throw new Error("Loan balance and repayment term must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }
  if (gracePeriodMonths < 0) {
    throw new Error("Grace period cannot be negative.");
  }

  const monthlyRate = annualRatePercent / 100 / 12;

  const capitalizedInterest =
    interestAccruesDuringGrace && gracePeriodMonths > 0
      ? loanBalance * monthlyRate * gracePeriodMonths
      : 0;

  const balanceAtRepayment = loanBalance + capitalizedInterest;
  const termMonths = Math.round(termYears * 12);

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = balanceAtRepayment / termMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, termMonths);
    monthlyPayment = (balanceAtRepayment * monthlyRate * factor) / (factor - 1);
  }

  const totalRepayment = monthlyPayment * termMonths;
  const totalInterest = totalRepayment - balanceAtRepayment + capitalizedInterest;

  return {
    capitalizedInterest: roundTo(capitalizedInterest, 2),
    balanceAtRepayment: roundTo(balanceAtRepayment, 2),
    monthlyPayment: roundTo(monthlyPayment, 2),
    totalInterest: roundTo(totalInterest, 2),
    totalRepayment: roundTo(totalRepayment, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
