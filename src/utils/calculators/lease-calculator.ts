export interface LeaseResult {
  monthlyDepreciationFee: number;
  monthlyFinanceFee: number;
  basePayment: number;
  monthlyTax: number;
  totalMonthlyPayment: number;
  totalLeaseCost: number;
  moneyFactor: number;
}

// Standard US auto lease payment math, following the same approach used by
// dealers: the adjusted capitalized cost (vehicle price minus any down payment
// or trade-in applied as a cap cost reduction) depreciates evenly over the
// lease term down to the residual value, and a "finance fee" (rent charge) is
// calculated using a money factor, which behaves like a simplified interest
// rate. Money factor is derived from the given APR using the standard
// approximation: money factor = APR / 2400.
export function calculateLease(
  vehiclePrice: number,
  downPayment: number,
  residualValue: number,
  termMonths: number,
  aprPercent: number,
  salesTaxPercent: number
): LeaseResult {
  if (
    [vehiclePrice, downPayment, residualValue, termMonths, aprPercent, salesTaxPercent].some((v) =>
      Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (vehiclePrice <= 0 || termMonths <= 0) {
    throw new Error("Vehicle price and lease term must be greater than zero.");
  }
  if (downPayment < 0 || residualValue < 0 || aprPercent < 0 || salesTaxPercent < 0) {
    throw new Error("Down payment, residual value, APR and sales tax cannot be negative.");
  }
  if (residualValue >= vehiclePrice) {
    throw new Error("Residual value must be less than the vehicle price.");
  }

  const adjustedCapCost = vehiclePrice - downPayment;
  if (adjustedCapCost <= residualValue) {
    throw new Error("Down payment is too large relative to the vehicle price and residual value.");
  }

  const moneyFactor = aprPercent / 2400;

  const monthlyDepreciationFee = (adjustedCapCost - residualValue) / termMonths;
  const monthlyFinanceFee = (adjustedCapCost + residualValue) * moneyFactor;
  const basePayment = monthlyDepreciationFee + monthlyFinanceFee;
  const monthlyTax = basePayment * (salesTaxPercent / 100);
  const totalMonthlyPayment = basePayment + monthlyTax;
  const totalLeaseCost = totalMonthlyPayment * termMonths + downPayment;

  return {
    monthlyDepreciationFee: roundTo(monthlyDepreciationFee, 2),
    monthlyFinanceFee: roundTo(monthlyFinanceFee, 2),
    basePayment: roundTo(basePayment, 2),
    monthlyTax: roundTo(monthlyTax, 2),
    totalMonthlyPayment: roundTo(totalMonthlyPayment, 2),
    totalLeaseCost: roundTo(totalLeaseCost, 2),
    moneyFactor: roundTo(moneyFactor, 6),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
