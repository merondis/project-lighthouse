export interface Retirement401kResult {
  projectedBalance: number;
  totalEmployeeContributions: number;
  totalEmployerContributions: number;
  totalGrowth: number;
  yearsToRetirement: number;
}

// Projects a 401(k) balance forward month by month, modeling contributions as
// a percentage of salary (rather than a fixed dollar amount), an employer
// match (a percentage of the employee's contribution, up to a cap expressed
// as a percentage of salary, matching how most real employer match formulas
// work, e.g. "50% match up to 6% of pay"), and optional annual salary growth.
export function calculate401k(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualSalary: number,
  contributionPercent: number,
  employerMatchPercent: number,
  employerMatchLimitPercent: number,
  expectedAnnualReturnPercent: number,
  annualSalaryGrowthPercent: number
): Retirement401kResult {
  if (
    [
      currentAge,
      retirementAge,
      currentBalance,
      annualSalary,
      contributionPercent,
      employerMatchPercent,
      employerMatchLimitPercent,
      expectedAnnualReturnPercent,
      annualSalaryGrowthPercent,
    ].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (currentAge <= 0 || retirementAge <= 0) {
    throw new Error("Ages must be greater than zero.");
  }
  if (retirementAge <= currentAge) {
    throw new Error("Retirement age must be greater than current age.");
  }
  if (currentBalance < 0 || annualSalary <= 0) {
    throw new Error("Current balance cannot be negative and annual salary must be greater than zero.");
  }
  if (contributionPercent < 0 || contributionPercent > 100) {
    throw new Error("Contribution percentage must be between 0 and 100.");
  }
  if (employerMatchPercent < 0 || employerMatchLimitPercent < 0 || employerMatchLimitPercent > 100) {
    throw new Error("Employer match percentage must be zero or greater, and the match limit must be between 0 and 100.");
  }
  if (expectedAnnualReturnPercent < 0) {
    throw new Error("Expected annual return cannot be negative.");
  }

  const years = retirementAge - currentAge;
  const totalMonths = years * 12;
  const monthlyRate = expectedAnnualReturnPercent / 100 / 12;
  const matchableContribPercent = Math.min(contributionPercent, employerMatchLimitPercent);

  let balance = currentBalance;
  let totalEmployeeContributions = 0;
  let totalEmployerContributions = 0;

  for (let month = 0; month < totalMonths; month++) {
    const yearIndex = Math.floor(month / 12);
    const salaryThisYear = annualSalary * Math.pow(1 + annualSalaryGrowthPercent / 100, yearIndex);
    const monthlySalary = salaryThisYear / 12;

    const employeeContribution = monthlySalary * (contributionPercent / 100);
    const employerContribution = monthlySalary * (matchableContribPercent / 100) * (employerMatchPercent / 100);

    balance = balance * (1 + monthlyRate) + employeeContribution + employerContribution;
    totalEmployeeContributions += employeeContribution;
    totalEmployerContributions += employerContribution;
  }

  const totalGrowth = balance - currentBalance - totalEmployeeContributions - totalEmployerContributions;

  return {
    projectedBalance: roundTo(balance, 2),
    totalEmployeeContributions: roundTo(totalEmployeeContributions, 2),
    totalEmployerContributions: roundTo(totalEmployerContributions, 2),
    totalGrowth: roundTo(totalGrowth, 2),
    yearsToRetirement: years,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
