export interface AmortizationMonthRow {
  period: number;
  payment: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
}

export interface AmortizationYearRow {
  year: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

export interface AmortizationScheduleResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  monthly: AmortizationMonthRow[];
  yearly: AmortizationYearRow[];
}

export function generateAmortizationSchedule(
  principal: number,
  annualRatePercent: number,
  tenureMonths: number
): AmortizationScheduleResult {
  if ([principal, annualRatePercent, tenureMonths].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (principal <= 0 || tenureMonths <= 0) {
    throw new Error("Loan amount and tenure must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }
  if (tenureMonths > 600) {
    throw new Error("Tenure is too long to generate a schedule for (maximum 50 years).");
  }

  const monthlyRate = annualRatePercent / 12 / 100;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = principal / tenureMonths;
  } else {
    const factor = Math.pow(1 + monthlyRate, tenureMonths);
    monthlyPayment = (principal * monthlyRate * factor) / (factor - 1);
  }

  monthlyPayment = roundTo(monthlyPayment, 2);

  const monthly: AmortizationMonthRow[] = [];
  let balance = principal;
  let totalInterestAccum = 0;

  for (let period = 1; period <= tenureMonths; period++) {
    const interestPaid = balance * monthlyRate;
    let principalPaid = monthlyPayment - interestPaid;

    if (period === tenureMonths || principalPaid > balance) {
      principalPaid = balance;
    }

    balance = roundTo(balance - principalPaid, 2);
    totalInterestAccum += interestPaid;

    monthly.push({
      period,
      payment: roundTo(principalPaid + interestPaid, 2),
      principalPaid: roundTo(principalPaid, 2),
      interestPaid: roundTo(interestPaid, 2),
      balance: Math.max(balance, 0),
    });
  }

  const yearly: AmortizationYearRow[] = [];
  for (let i = 0; i < monthly.length; i += 12) {
    const yearRows = monthly.slice(i, i + 12);
    const yearPrincipal = yearRows.reduce((sum, row) => sum + row.principalPaid, 0);
    const yearInterest = yearRows.reduce((sum, row) => sum + row.interestPaid, 0);
    yearly.push({
      year: Math.floor(i / 12) + 1,
      principalPaid: roundTo(yearPrincipal, 2),
      interestPaid: roundTo(yearInterest, 2),
      endingBalance: yearRows[yearRows.length - 1].balance,
    });
  }

  const totalPayment = roundTo(principal + totalInterestAccum, 2);

  return {
    monthlyPayment,
    totalInterest: roundTo(totalInterestAccum, 2),
    totalPayment,
    monthly,
    yearly,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}