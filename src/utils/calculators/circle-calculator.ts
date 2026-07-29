export interface CircleResult {
  diameter: number;
  circumference: number;
  area: number;
}

export function calculateCircle(radius: number): CircleResult {
  if (!Number.isFinite(radius) || radius <= 0) {
    throw new Error("Please enter a valid, positive radius.");
  }

  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;

  return {
    diameter: Math.round(diameter * 10000) / 10000,
    circumference: Math.round(circumference * 10000) / 10000,
    area: Math.round(area * 10000) / 10000,
  };
}
