export interface FactorResult {
  factorsList: string;
  factorCount: number;
  isPrime: string;
}

export function calculateFactors(numberInput: number): FactorResult {
  const number = Math.abs(Math.trunc(numberInput));

  if (!Number.isFinite(numberInput) || number < 1) {
    throw new Error("Please enter a whole number of 1 or greater.");
  }
  if (number > 10000000) {
    throw new Error("Please enter a number of 10,000,000 or fewer.");
  }

  const factors: number[] = [];
  for (let i = 1; i * i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
      if (i !== number / i) {
        factors.push(number / i);
      }
    }
  }
  factors.sort((a, b) => a - b);

  return {
    factorsList: factors.join(", "),
    factorCount: factors.length,
    isPrime: factors.length === 2 ? "Yes" : "No",
  };
}
