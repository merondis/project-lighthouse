export interface TriangleResult {
  area: number;
  perimeter: number;
  angleA: number;
  angleB: number;
  angleC: number;
}

function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function calculateTriangle(sideA: number, sideB: number, sideC: number): TriangleResult {
  if (![sideA, sideB, sideC].every((s) => Number.isFinite(s) && s > 0)) {
    throw new Error("Please enter three positive side lengths.");
  }

  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    throw new Error("These side lengths can't form a valid triangle (each side must be shorter than the sum of the other two).");
  }

  const perimeter = sideA + sideB + sideC;
  const s = perimeter / 2;
  const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  const angleA = radToDeg(Math.acos((sideB * sideB + sideC * sideC - sideA * sideA) / (2 * sideB * sideC)));
  const angleB = radToDeg(Math.acos((sideA * sideA + sideC * sideC - sideB * sideB) / (2 * sideA * sideC)));
  const angleC = 180 - angleA - angleB;

  return {
    area: Math.round(area * 10000) / 10000,
    perimeter: Math.round(perimeter * 10000) / 10000,
    angleA: Math.round(angleA * 100) / 100,
    angleB: Math.round(angleB * 100) / 100,
    angleC: Math.round(angleC * 100) / 100,
  };
}
