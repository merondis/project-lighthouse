export interface DistanceResult {
  distance: number;
  midpointX: number;
  midpointY: number;
}

export function calculateDistance(x1: number, y1: number, x2: number, y2: number): DistanceResult {
  if (![x1, y1, x2, y2].every((v) => Number.isFinite(v))) {
    throw new Error("Please enter valid coordinates for both points.");
  }

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return {
    distance: Math.round(distance * 10000) / 10000,
    midpointX: Math.round(((x1 + x2) / 2) * 10000) / 10000,
    midpointY: Math.round(((y1 + y2) / 2) * 10000) / 10000,
  };
}
