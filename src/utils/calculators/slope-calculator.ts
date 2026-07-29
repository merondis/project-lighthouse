export interface SlopeResult {
  slope: string;
  yIntercept: string;
  equation: string;
  angleDegrees: string;
}

export function calculateSlope(x1: number, y1: number, x2: number, y2: number): SlopeResult {
  if (![x1, y1, x2, y2].every((v) => Number.isFinite(v))) {
    throw new Error("Please enter valid coordinates for both points.");
  }

  if (x1 === x2) {
    if (y1 === y2) {
      throw new Error("The two points are identical, please enter two distinct points.");
    }
    return {
      slope: "Undefined (vertical line)",
      yIntercept: "N/A",
      equation: "x = " + x1,
      angleDegrees: "90",
    };
  }

  const slope = (y2 - y1) / (x2 - x1);
  const yIntercept = y1 - slope * x1;
  const angleDegrees = (Math.atan(slope) * 180) / Math.PI;

  const slopeRounded = Math.round(slope * 10000) / 10000;
  const interceptRounded = Math.round(yIntercept * 10000) / 10000;

  const equation =
    "y = " + slopeRounded + "x " + (interceptRounded >= 0 ? "+ " + interceptRounded : "- " + Math.abs(interceptRounded));

  return {
    slope: String(slopeRounded),
    yIntercept: String(interceptRounded),
    equation,
    angleDegrees: String(Math.round(angleDegrees * 100) / 100),
  };
}
