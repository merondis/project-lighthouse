export interface QuadraticResult {
  root1: string;
  root2: string;
  discriminant: number;
  nature: string;
}

export function solveQuadratic(a: number, b: number, c: number): QuadraticResult {
  if ([a, b, c].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for a, b and c.");
  }
  if (a === 0) {
    throw new Error("Coefficient 'a' cannot be zero (this would not be a quadratic equation).");
  }

  const discriminant = b * b - 4 * a * c;
  const roundTo = (n: number) => Math.round(n * 10000) / 10000;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return {
      root1: String(roundTo(root1)),
      root2: String(roundTo(root2)),
      discriminant: roundTo(discriminant),
      nature: "Two real roots",
    };
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return {
      root1: String(roundTo(root)),
      root2: String(roundTo(root)),
      discriminant: 0,
      nature: "One repeated real root",
    };
  }

  const realPart = roundTo(-b / (2 * a));
  const imagPart = roundTo(Math.sqrt(-discriminant) / (2 * a));

  return {
    root1: realPart + " + " + imagPart + "i",
    root2: realPart + " - " + imagPart + "i",
    discriminant: roundTo(discriminant),
    nature: "Two complex roots",
  };
}