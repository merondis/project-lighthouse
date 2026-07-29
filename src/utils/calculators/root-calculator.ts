export interface RootResult {
  result: number;
}

export function calculateRoot(value: number, rootDegree: number): RootResult {
  if (!Number.isFinite(value)) {
    throw new Error("Please enter a valid number.");
  }
  if (!Number.isFinite(rootDegree) || rootDegree === 0) {
    throw new Error("Please enter a valid, non-zero root degree.");
  }

  const isEvenRoot = Math.abs(rootDegree % 2) === 0;

  if (value < 0 && isEvenRoot) {
    throw new Error("An even root of a negative number isn't a real number.");
  }

  const result = value < 0 ? -Math.pow(-value, 1 / rootDegree) : Math.pow(value, 1 / rootDegree);

  return { result: Math.round(result * 1e8) / 1e8 };
}
