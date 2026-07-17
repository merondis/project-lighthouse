export type PayoffStrategy = "avalanche" | "snowball";

export interface DebtInput {
  name: string;
  balance: number;
  annualApr: number;
  minimumPayment: number;
}

export interface DebtPayoffResult {
  monthsToPayoff: number;
  totalInterest: number;
  payoffOrder: string[];
}

interface WorkingDebt extends DebtInput {
  remaining: number;
}

export function calculateDebtPayoff(
  debts: DebtInput[],
  extraMonthlyPayment: number,
  strategy: PayoffStrategy
): DebtPayoffResult {
  const validDebts = debts.filter((d) => d.balance > 0 && d.minimumPayment > 0);

  if (validDebts.length === 0) {
    throw new Error("Please enter at least one debt with a balance and minimum payment.");
  }
  if (Number.isNaN(extraMonthlyPayment) || extraMonthlyPayment < 0) {
    throw new Error("Extra payment must be zero or a positive number.");
  }

  const working: WorkingDebt[] = validDebts.map((d) => ({ ...d, remaining: d.balance }));

  const sorted = [...working].sort((a, b) => {
    if (strategy === "avalanche") return b.annualApr - a.annualApr;
    return a.balance - b.balance;
  });

  let months = 0;
  let totalInterest = 0;
  const maxMonths = 1200;
  const payoffOrder: string[] = [];

  while (sorted.some((d) => d.remaining > 0) && months < maxMonths) {
    let extraAvailable = extraMonthlyPayment;

    for (const debt of sorted) {
      if (debt.remaining <= 0) continue;

      const monthlyRate = debt.annualApr / 12 / 100;
      const interestForMonth = debt.remaining * monthlyRate;
      totalInterest += interestForMonth;

      let payment = debt.minimumPayment;
      if (extraAvailable > 0) {
        payment += extraAvailable;
        extraAvailable = 0;
      }

      let principalPortion = payment - interestForMonth;
      if (principalPortion > debt.remaining) principalPortion = debt.remaining;

      debt.remaining -= principalPortion;

      if (debt.remaining <= 0.01 && !payoffOrder.includes(debt.name)) {
        debt.remaining = 0;
        payoffOrder.push(debt.name);
      }
    }

    months += 1;
  }

  return {
    monthsToPayoff: months,
    totalInterest: Math.round(totalInterest * 100) / 100,
    payoffOrder,
  };
}