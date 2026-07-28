export interface GrowthSummaryField {
  key: string;
  label: string;
  value: number | string;
  unit?: string;
  highlight?: boolean;
}

export interface GrowthYearPoint {
  label: string | number;
  a: number;
  b: number;
  balance: number;
}

export interface CompositionSlice {
  name: string;
  value: number;
  color: string;
}

export type ChartMode = "accumulate" | "lumpSum" | "deplete" | "flat";

export interface GrowthScheduleResult {
  summary: GrowthSummaryField[];
  composition: CompositionSlice[];
  yearlySchedule: GrowthYearPoint[];
  chartMode: ChartMode;
  aLabel?: string;
  bLabel?: string;
  referenceValue?: number;
  referenceLabel?: string;
  errorMessage?: string;
}

function roundTo(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

// ---------- Compound Interest ----------

const COMPOUND_FREQUENCY_MAP: Record<string, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export function compoundInterestSchedule(
  principal: number,
  annualRatePercent: number,
  years: number,
  frequency: string
): GrowthScheduleResult {
  if (principal <= 0 || years <= 0) {
    return errorResult("Principal and time period must be greater than zero.");
  }
  const n = COMPOUND_FREQUENCY_MAP[frequency] ?? 1;
  const r = annualRatePercent / 100;
  const wholeYears = Math.max(1, Math.round(years));

  const yearlySchedule: GrowthYearPoint[] = [];
  for (let y = 1; y <= wholeYears; y++) {
    const balance = principal * Math.pow(1 + r / n, n * y);
    yearlySchedule.push({ label: y, a: principal, b: roundTo(balance - principal, 2), balance: roundTo(balance, 2) });
  }

  const finalAmount = yearlySchedule[yearlySchedule.length - 1]?.balance ?? principal;
  const totalInterest = roundTo(finalAmount - principal, 2);

  return {
    summary: [
      { key: "finalAmount", label: "Final Amount", value: finalAmount, highlight: true },
      { key: "totalInterest", label: "Total Interest", value: totalInterest, highlight: true },
    ],
    composition: [
      { name: "Principal", value: principal, color: "#2563eb" },
      { name: "Interest", value: totalInterest, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "lumpSum",
  };
}

// ---------- SIP ----------

export function sipSchedule(monthlyInvestment: number, annualRatePercent: number, years: number): GrowthScheduleResult {
  if (monthlyInvestment <= 0 || years <= 0) {
    return errorResult("Monthly investment and time period must be greater than zero.");
  }
  const monthlyRate = annualRatePercent / 100 / 12;
  const wholeYears = Math.max(1, Math.round(years));

  const yearlySchedule: GrowthYearPoint[] = [];
  let balance = 0;
  let totalInvested = 0;
  for (let y = 1; y <= wholeYears; y++) {
    const balanceStartOfYear = balance;
    const investedStartOfYear = totalInvested;
    for (let m = 0; m < 12; m++) {
      balance = (balance + monthlyInvestment) * (1 + monthlyRate);
      totalInvested += monthlyInvestment;
    }
    yearlySchedule.push({
      label: y,
      a: roundTo(totalInvested - investedStartOfYear, 2),
      b: roundTo(balance - balanceStartOfYear - (totalInvested - investedStartOfYear), 2),
      balance: roundTo(balance, 2),
    });
  }

  const maturityAmount = roundTo(balance, 2);
  const totalGains = roundTo(maturityAmount - totalInvested, 2);

  return {
    summary: [
      { key: "maturityAmount", label: "Maturity Amount", value: maturityAmount, highlight: true },
      { key: "totalInvested", label: "Total Invested", value: roundTo(totalInvested, 2) },
      { key: "totalGains", label: "Total Gains", value: totalGains, highlight: true },
    ],
    composition: [
      { name: "Invested", value: totalInvested, color: "#2563eb" },
      { name: "Gains", value: totalGains, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Invested",
    bLabel: "Gains",
  };
}

// ---------- Retirement ----------

export function retirementSchedule(
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualRatePercent: number
): GrowthScheduleResult {
  if (retirementAge <= currentAge) {
    return errorResult("Retirement age must be greater than current age.");
  }
  const years = retirementAge - currentAge;
  const monthlyRate = annualRatePercent / 100 / 12;

  const yearlySchedule: GrowthYearPoint[] = [];
  let balance = currentSavings;
  let totalContributions = 0;
  for (let y = 1; y <= years; y++) {
    const balanceStart = balance;
    const contribStart = totalContributions;
    for (let m = 0; m < 12; m++) {
      balance = (balance + monthlyContribution) * (1 + monthlyRate);
      totalContributions += monthlyContribution;
    }
    yearlySchedule.push({
      label: currentAge + y,
      a: roundTo(totalContributions - contribStart, 2),
      b: roundTo(balance - balanceStart - (totalContributions - contribStart), 2),
      balance: roundTo(balance, 2),
    });
  }

  const retirementCorpus = roundTo(balance, 2);
  const allContributions = roundTo(currentSavings + totalContributions, 2);
  const totalGrowth = roundTo(retirementCorpus - allContributions, 2);
  const estimatedMonthlyIncome = roundTo((retirementCorpus * 0.04) / 12, 2);

  return {
    summary: [
      { key: "retirementCorpus", label: "Retirement Corpus", value: retirementCorpus, highlight: true },
      { key: "totalContributions", label: "Total Contributions", value: allContributions },
      { key: "totalGrowth", label: "Total Growth", value: totalGrowth },
      { key: "estimatedMonthlyIncome", label: "Est. Monthly Income (4% Rule)", value: estimatedMonthlyIncome, highlight: true },
    ],
    composition: [
      { name: "Contributions", value: allContributions, color: "#2563eb" },
      { name: "Growth", value: totalGrowth, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
  };
}

// ---------- 401(k) ----------

export function retirement401kSchedule(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualSalary: number,
  contributionPercent: number,
  employerMatchPercent: number,
  employerMatchLimitPercent: number,
  expectedAnnualReturnPercent: number,
  annualSalaryGrowthPercent: number
): GrowthScheduleResult {
  if (retirementAge <= currentAge) {
    return errorResult("Retirement age must be greater than current age.");
  }
  const years = retirementAge - currentAge;
  const monthlyRate = expectedAnnualReturnPercent / 100 / 12;
  const matchableContribPercent = Math.min(contributionPercent, employerMatchLimitPercent);

  const yearlySchedule: GrowthYearPoint[] = [];
  let balance = currentBalance;
  let totalEmployee = 0;
  let totalEmployer = 0;

  for (let y = 0; y < years; y++) {
    const balanceStart = balance;
    let employeeThisYear = 0;
    let employerThisYear = 0;
    const salaryThisYear = annualSalary * Math.pow(1 + annualSalaryGrowthPercent / 100, y);
    const monthlySalary = salaryThisYear / 12;
    const employeeMonthly = monthlySalary * (contributionPercent / 100);
    const employerMonthly = monthlySalary * (matchableContribPercent / 100) * (employerMatchPercent / 100);

    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + monthlyRate) + employeeMonthly + employerMonthly;
      employeeThisYear += employeeMonthly;
      employerThisYear += employerMonthly;
    }
    totalEmployee += employeeThisYear;
    totalEmployer += employerThisYear;

    yearlySchedule.push({
      label: currentAge + y + 1,
      a: roundTo(employeeThisYear + employerThisYear, 2),
      b: roundTo(balance - balanceStart - employeeThisYear - employerThisYear, 2),
      balance: roundTo(balance, 2),
    });
  }

  const projectedBalance = roundTo(balance, 2);
  const totalGrowth = roundTo(projectedBalance - currentBalance - totalEmployee - totalEmployer, 2);

  return {
    summary: [
      { key: "projectedBalance", label: "Projected Balance", value: projectedBalance, highlight: true },
      { key: "totalEmployeeContributions", label: "Your Contributions", value: roundTo(totalEmployee, 2) },
      { key: "totalEmployerContributions", label: "Employer Match", value: roundTo(totalEmployer, 2) },
      { key: "totalGrowth", label: "Total Growth", value: totalGrowth, highlight: true },
    ],
    composition: [
      { name: "Your Contributions", value: totalEmployee, color: "#2563eb" },
      { name: "Employer Match", value: totalEmployer, color: "#10b981" },
      { name: "Growth", value: totalGrowth, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
  };
}

// ---------- FIRE ----------

export function fireSchedule(
  currentAge: number,
  currentSavings: number,
  monthlyContribution: number,
  expectedAnnualReturnPercent: number,
  annualExpenses: number,
  withdrawalRatePercent: number
): GrowthScheduleResult {
  const fireNumber = annualExpenses / (withdrawalRatePercent / 100);
  const monthlyRate = expectedAnnualReturnPercent / 100 / 12;
  const maxMonths = 1200;

  let balance = currentSavings;
  let months = 0;
  let totalContributions = 0;
  const yearlySchedule: GrowthYearPoint[] = [{ label: currentAge, a: 0, b: 0, balance: roundTo(currentSavings, 2) }];

  let balanceAtYearStart = balance;
  let contribAtYearStart = 0;

  while (balance < fireNumber && months < maxMonths) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    totalContributions += monthlyContribution;
    months++;

    if (months % 12 === 0 || balance >= fireNumber) {
      yearlySchedule.push({
        label: currentAge + Math.ceil(months / 12),
        a: roundTo(totalContributions - contribAtYearStart, 2),
        b: roundTo(balance - balanceAtYearStart - (totalContributions - contribAtYearStart), 2),
        balance: roundTo(balance, 2),
      });
      balanceAtYearStart = balance;
      contribAtYearStart = totalContributions;
    }
  }

  if (balance < fireNumber) {
    return errorResult("At this savings rate and return, your FIRE number isn't reachable within 100 years.");
  }

  const yearsToFire = roundTo(months / 12, 2);
  const totalGrowth = roundTo(balance - currentSavings - totalContributions, 2);

  return {
    summary: [
      { key: "fireNumber", label: "FIRE Number", value: roundTo(fireNumber, 2), highlight: true },
      { key: "yearsToFire", label: "Years to FIRE", value: yearsToFire, highlight: true },
      { key: "ageAtFire", label: "Age at FIRE", value: roundTo(currentAge + yearsToFire, 1) },
      { key: "totalContributions", label: "Total Contributions", value: roundTo(totalContributions, 2) },
      { key: "totalGrowth", label: "Total Growth", value: totalGrowth },
    ],
    composition: [
      { name: "Contributions", value: currentSavings + totalContributions, color: "#2563eb" },
      { name: "Growth", value: totalGrowth, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
    referenceValue: roundTo(fireNumber, 2),
    referenceLabel: "FIRE Number",
  };
}

// ---------- Savings Goal ----------

export function savingsGoalSchedule(
  targetAmount: number,
  currentSavings: number,
  months: number,
  annualRatePercent: number
): GrowthScheduleResult {
  if (targetAmount <= 0 || months <= 0) {
    return errorResult("Target amount and months must be greater than zero.");
  }
  if (currentSavings >= targetAmount) {
    return errorResult("Your current savings already meet or exceed your target amount.");
  }

  const monthlyRate = annualRatePercent / 12 / 100;
  const remainingGoal = targetAmount - currentSavings;

  let monthlyContribution: number;
  if (monthlyRate === 0) {
    monthlyContribution = remainingGoal / months;
  } else {
    const factor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    const futureValueOfCurrent = currentSavings * Math.pow(1 + monthlyRate, months);
    monthlyContribution = (targetAmount - futureValueOfCurrent) / factor;
  }
  monthlyContribution = Math.max(0, monthlyContribution);

  const years = Math.ceil(months / 12);
  const yearlySchedule: GrowthYearPoint[] = [];
  let balance = currentSavings;
  let totalContributions = 0;
  let monthCounter = 0;

  for (let y = 1; y <= years; y++) {
    const balanceStart = balance;
    const contribStart = totalContributions;
    for (let m = 0; m < 12 && monthCounter < months; m++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
      totalContributions += monthlyContribution;
      monthCounter++;
    }
    yearlySchedule.push({
      label: y,
      a: roundTo(totalContributions - contribStart, 2),
      b: roundTo(balance - balanceStart - (totalContributions - contribStart), 2),
      balance: roundTo(balance, 2),
    });
  }

  const totalInterestEarned = roundTo(targetAmount - currentSavings - totalContributions, 2);

  return {
    summary: [
      { key: "monthlyContribution", label: "Required Monthly Contribution", value: roundTo(monthlyContribution, 2), highlight: true },
      { key: "totalContributions", label: "Total Contributions", value: roundTo(totalContributions, 2) },
      { key: "totalInterestEarned", label: "Total Interest Earned", value: Math.max(0, totalInterestEarned) },
    ],
    composition: [
      { name: "Contributions", value: totalContributions, color: "#2563eb" },
      { name: "Interest", value: Math.max(0, totalInterestEarned), color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Interest",
    referenceValue: targetAmount,
    referenceLabel: "Goal",
  };
}

// ---------- Roth IRA ----------

export function rothIraSchedule(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  expectedAnnualReturnPercent: number,
  comparisonTaxRatePercent: number
): GrowthScheduleResult {
  if (retirementAge <= currentAge) {
    return errorResult("Retirement age must be greater than current age.");
  }
  const years = retirementAge - currentAge;
  const monthlyRate = expectedAnnualReturnPercent / 100 / 12;
  const monthlyContribution = annualContribution / 12;

  let rothBalance = currentBalance;
  let taxableBalance = currentBalance;
  let taxableBasis = currentBalance;
  let totalContributions = 0;

  const yearlySchedule: GrowthYearPoint[] = [];

  for (let y = 1; y <= years; y++) {
    const balanceStart = rothBalance;
    const contribStart = totalContributions;
    for (let m = 0; m < 12; m++) {
      rothBalance = rothBalance * (1 + monthlyRate) + monthlyContribution;
      taxableBalance = taxableBalance * (1 + monthlyRate) + monthlyContribution;
      taxableBasis += monthlyContribution;
      totalContributions += monthlyContribution;
    }
    const gainThisYear = taxableBalance - taxableBasis;
    if (gainThisYear > 0) {
      const taxOwed = gainThisYear * (comparisonTaxRatePercent / 100);
      taxableBalance -= taxOwed;
      taxableBasis = taxableBalance;
    }

    yearlySchedule.push({
      label: currentAge + y,
      a: roundTo(totalContributions - contribStart, 2),
      b: roundTo(rothBalance - balanceStart - (totalContributions - contribStart), 2),
      balance: roundTo(rothBalance, 2),
    });
  }

  const totalGrowth = roundTo(rothBalance - currentBalance - totalContributions, 2);
  const taxFreeAdvantage = roundTo(rothBalance - taxableBalance, 2);

  return {
    summary: [
      { key: "rothBalance", label: "Roth IRA Balance (Tax-Free)", value: roundTo(rothBalance, 2), highlight: true },
      { key: "totalContributions", label: "Total Contributions", value: roundTo(totalContributions, 2) },
      { key: "totalGrowth", label: "Total Growth", value: totalGrowth },
      { key: "taxableAccountBalance", label: "Equivalent Taxable Account", value: roundTo(taxableBalance, 2) },
      { key: "taxFreeAdvantage", label: "Tax-Free Advantage", value: taxFreeAdvantage, highlight: true },
    ],
    composition: [
      { name: "Contributions", value: currentBalance + totalContributions, color: "#2563eb" },
      { name: "Tax-Free Growth", value: totalGrowth, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
  };
}

// ---------- Traditional IRA ----------

export function traditionalIraSchedule(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  expectedReturnPercent: number,
  currentTaxRatePercent: number,
  retirementTaxRatePercent: number
): GrowthScheduleResult {
  if (retirementAge <= currentAge) {
    return errorResult("Retirement age must be greater than current age.");
  }
  const years = retirementAge - currentAge;
  const monthlyRate = expectedReturnPercent / 100 / 12;
  const monthlyContribution = annualContribution / 12;

  let balance = currentBalance;
  let totalContributions = 0;
  const yearlySchedule: GrowthYearPoint[] = [];

  for (let y = 1; y <= years; y++) {
    const balanceStart = balance;
    const contribStart = totalContributions;
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
      totalContributions += monthlyContribution;
    }
    yearlySchedule.push({
      label: currentAge + y,
      a: roundTo(totalContributions - contribStart, 2),
      b: roundTo(balance - balanceStart - (totalContributions - contribStart), 2),
      balance: roundTo(balance, 2),
    });
  }

  const totalGrowth = roundTo(balance - currentBalance - totalContributions, 2);
  const currentYearTaxSavings = roundTo(annualContribution * (currentTaxRatePercent / 100), 2);
  const afterTaxWithdrawalValue = roundTo(balance * (1 - retirementTaxRatePercent / 100), 2);

  return {
    summary: [
      { key: "balanceAtRetirement", label: "Balance at Retirement (Pre-Tax)", value: roundTo(balance, 2), highlight: true },
      { key: "afterTaxWithdrawalValue", label: "After-Tax Value at Withdrawal", value: afterTaxWithdrawalValue, highlight: true },
      { key: "totalContributions", label: "Total Contributions", value: roundTo(totalContributions, 2) },
      { key: "totalGrowth", label: "Total Growth", value: totalGrowth },
      { key: "currentYearTaxSavings", label: "This Year's Tax Deduction Value", value: currentYearTaxSavings },
    ],
    composition: [
      { name: "Contributions", value: currentBalance + totalContributions, color: "#2563eb" },
      { name: "Growth", value: totalGrowth, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
  };
}

// ---------- CD ----------

const CD_FREQUENCY_MAP: Record<string, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export function cdSchedule(principal: number, annualRatePercent: number, termMonths: number, frequency: string): GrowthScheduleResult {
  if (principal <= 0 || termMonths <= 0) {
    return errorResult("Deposit amount and term must be greater than zero.");
  }
  const m = CD_FREQUENCY_MAP[frequency] ?? 12;
  const rate = annualRatePercent / 100;
  const totalYears = termMonths / 12;
  const wholeYears = Math.max(1, Math.ceil(totalYears));

  const yearlySchedule: GrowthYearPoint[] = [];
  for (let y = 1; y <= wholeYears; y++) {
    const yearsElapsed = Math.min(y, totalYears);
    const balance = principal * Math.pow(1 + rate / m, m * yearsElapsed);
    yearlySchedule.push({ label: y, a: principal, b: roundTo(balance - principal, 2), balance: roundTo(balance, 2) });
  }

  const maturityValue = yearlySchedule[yearlySchedule.length - 1]?.balance ?? principal;
  const totalInterest = roundTo(maturityValue - principal, 2);

  return {
    summary: [
      { key: "maturityValue", label: "Maturity Value", value: maturityValue, highlight: true },
      { key: "totalInterest", label: "Total Interest Earned", value: totalInterest, highlight: true },
    ],
    composition: [
      { name: "Principal", value: principal, color: "#2563eb" },
      { name: "Interest", value: totalInterest, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "lumpSum",
  };
}

// ---------- Annuity (accumulation) ----------

export function annuitySchedule(
  periodicPayment: number,
  annualRatePercent: number,
  years: number,
  paymentsPerYear: number,
  timing: string
): GrowthScheduleResult {
  if (periodicPayment <= 0 || years <= 0) {
    return errorResult("Payment amount and number of years must be greater than zero.");
  }
  const r = annualRatePercent / 100 / paymentsPerYear;
  const wholeYears = Math.max(1, Math.round(years));

  const yearlySchedule: GrowthYearPoint[] = [];
  let balance = 0;
  let totalContributions = 0;
  for (let y = 1; y <= wholeYears; y++) {
    const balanceStart = balance;
    const contribStart = totalContributions;
    for (let p = 0; p < paymentsPerYear; p++) {
      balance = balance * (1 + r) + periodicPayment;
      totalContributions += periodicPayment;
    }
    if (timing === "due") {
      // Approximate annuity-due effect evenly across the year's contributions.
    }
    yearlySchedule.push({
      label: y,
      a: roundTo(totalContributions - contribStart, 2),
      b: roundTo(balance - balanceStart - (totalContributions - contribStart), 2),
      balance: roundTo(balance, 2),
    });
  }

  let futureValue = yearlySchedule[yearlySchedule.length - 1]?.balance ?? 0;
  if (timing === "due") futureValue *= 1 + r;
  const totalGrowth = roundTo(futureValue - totalContributions, 2);

  return {
    summary: [
      { key: "futureValue", label: "Future Value", value: roundTo(futureValue, 2), highlight: true },
      { key: "totalContributions", label: "Total Contributions", value: roundTo(totalContributions, 2) },
      { key: "totalGrowth", label: "Total Growth", value: totalGrowth },
    ],
    composition: [
      { name: "Contributions", value: totalContributions, color: "#2563eb" },
      { name: "Growth", value: totalGrowth, color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
  };
}

// ---------- Annuity Payout (decumulation) ----------

export function annuityPayoutSchedule(
  lumpSum: number,
  annualRatePercent: number,
  payoutYears: number,
  paymentsPerYear: number
): GrowthScheduleResult {
  if (lumpSum <= 0 || payoutYears <= 0) {
    return errorResult("Lump sum and payout period must be greater than zero.");
  }
  const r = annualRatePercent / 100 / paymentsPerYear;
  const n = payoutYears * paymentsPerYear;
  const periodicPayout = r === 0 ? lumpSum / n : (lumpSum * r) / (1 - Math.pow(1 + r, -n));

  const wholeYears = Math.max(1, Math.round(payoutYears));
  const yearlySchedule: GrowthYearPoint[] = [{ label: 0, a: 0, b: 0, balance: roundTo(lumpSum, 2) }];
  let balance = lumpSum;
  for (let y = 1; y <= wholeYears; y++) {
    for (let p = 0; p < paymentsPerYear; p++) {
      balance = balance * (1 + r) - periodicPayout;
    }
    yearlySchedule.push({ label: y, a: 0, b: 0, balance: roundTo(Math.max(balance, 0), 2) });
  }

  const totalPayout = roundTo(periodicPayout * n, 2);
  const totalInterestEarned = roundTo(totalPayout - lumpSum, 2);

  return {
    summary: [
      { key: "periodicPayout", label: "Payout per Period", value: roundTo(periodicPayout, 2), highlight: true },
      { key: "totalPayout", label: "Total Payout Over Period", value: totalPayout },
      { key: "totalInterestEarned", label: "Total Interest Earned", value: totalInterestEarned },
    ],
    composition: [],
    yearlySchedule,
    chartMode: "deplete",
  };
}

// ---------- College Cost ----------

export function collegeCostSchedule(
  currentAnnualCost: number,
  yearsUntilEnrollment: number,
  inflationRatePercent: number,
  yearsInCollege: number
): GrowthScheduleResult {
  if (currentAnnualCost <= 0 || yearsInCollege <= 0) {
    return errorResult("Current annual cost and years in college must be greater than zero.");
  }
  const rate = inflationRatePercent / 100;
  const yearlySchedule: GrowthYearPoint[] = [];
  let totalProjectedCost = 0;

  for (let i = 0; i < yearsInCollege; i++) {
    const cost = currentAnnualCost * Math.pow(1 + rate, yearsUntilEnrollment + i);
    totalProjectedCost += cost;
    yearlySchedule.push({ label: `Year ${i + 1}`, a: roundTo(cost, 2), b: 0, balance: roundTo(cost, 2) });
  }

  const projectedFirstYearCost = yearlySchedule[0]?.balance ?? 0;

  return {
    summary: [
      { key: "projectedFirstYearCost", label: "Projected First-Year Cost", value: projectedFirstYearCost, highlight: true },
      { key: "totalProjectedCost", label: "Total Projected Cost", value: roundTo(totalProjectedCost, 2), highlight: true },
    ],
    composition: [],
    yearlySchedule,
    chartMode: "flat",
    aLabel: "Projected Annual Cost",
  };
}

// ---------- Investment Return ----------

function projectedEndingBalance(initial: number, monthly: number, years: number, annualRatePercent: number): number {
  const months = Math.round(years * 12);
  const monthlyRate = annualRatePercent / 100 / 12;
  const fvOfInitial = initial * Math.pow(1 + monthlyRate, months);
  const fvOfContributions =
    monthly === 0 ? 0 : monthlyRate === 0 ? monthly * months : monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  return fvOfInitial + fvOfContributions;
}

export function investmentReturnSchedule(
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  endingBalance: number
): GrowthScheduleResult {
  if (years <= 0 || endingBalance <= 0) {
    return errorResult("Time period and ending balance must be greater than zero.");
  }
  const totalContributions = initialInvestment + monthlyContribution * Math.round(years * 12);
  if (totalContributions <= 0) {
    return errorResult("Enter an initial investment or a monthly contribution greater than zero.");
  }

  let low = -0.99;
  let high = 10;
  const balanceAtLow = projectedEndingBalance(initialInvestment, monthlyContribution, years, low * 100);
  const balanceAtHigh = projectedEndingBalance(initialInvestment, monthlyContribution, years, high * 100);
  if (endingBalance < balanceAtLow || endingBalance > balanceAtHigh) {
    return errorResult("That ending balance is outside the range this calculator can solve for.");
  }
  for (let i = 0; i < 200; i++) {
    const mid = (low + high) / 2;
    const balanceAtMid = projectedEndingBalance(initialInvestment, monthlyContribution, years, mid * 100);
    if (balanceAtMid < endingBalance) low = mid;
    else high = mid;
  }
  const annualReturnPercent = ((low + high) / 2) * 100;
  const monthlyRate = annualReturnPercent / 100 / 12;

  const wholeYears = Math.max(1, Math.round(years));
  const yearlySchedule: GrowthYearPoint[] = [];
  let balance = initialInvestment;
  let contributions = initialInvestment;
  for (let y = 1; y <= wholeYears; y++) {
    const balanceStart = balance;
    const contribStart = contributions;
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
      contributions += monthlyContribution;
    }
    yearlySchedule.push({
      label: y,
      a: roundTo(contributions - contribStart, 2),
      b: roundTo(balance - balanceStart - (contributions - contribStart), 2),
      balance: roundTo(balance, 2),
    });
  }

  const totalGain = roundTo(endingBalance - totalContributions, 2);

  return {
    summary: [
      { key: "annualReturnPercent", label: "Annualized Return", value: roundTo(annualReturnPercent, 2), unit: "%", highlight: true },
      { key: "totalContributions", label: "Total Contributions", value: roundTo(totalContributions, 2) },
      { key: "totalGain", label: "Total Gain", value: totalGain },
    ],
    composition: [
      { name: "Contributions", value: totalContributions, color: "#2563eb" },
      { name: "Gain", value: Math.max(0, totalGain), color: "#f59e0b" },
    ],
    yearlySchedule,
    chartMode: "accumulate",
    aLabel: "Contributions",
    bLabel: "Growth",
  };
}

function errorResult(message: string): GrowthScheduleResult {
  return { summary: [], composition: [], yearlySchedule: [], chartMode: "flat", errorMessage: message };
}
