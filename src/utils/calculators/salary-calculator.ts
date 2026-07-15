export interface SalaryResult {
  monthlyGross: number;
  monthlyNet: number;
  annualNet: number;
  totalDeductions: number;
}

export function calculateTakeHomeSalary(
  annualGross: number,
  deductionPercent: number
): SalaryResult {
  if (Number.isNaN(annualGross) || Number.isNaN(deductionPercent)) {
    throw new Error("Please enter valid numbers for salary and deduction percentage.");
  }
  if (annualGross <= 0) {
    throw new Error("Annual gross salary must be greater than zero.");
  }
  if (deductionPercent < 0 || deductionPercent > 100) {
    throw new Error("Deduction percentage must be between 0 and 100.");
  }

  const totalDeductions = roundTo((annualGross * deductionPercent) / 100, 2);
  const annualNet = roundTo(annualGross - totalDeductions, 2);
  const monthlyGross = roundTo(annualGross / 12, 2);
  const monthlyNet = roundTo(annualNet / 12, 2);

  return { monthlyGross, monthlyNet, annualNet, totalDeductions };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}