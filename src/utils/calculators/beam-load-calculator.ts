export type BeamLoadType = "distributed" | "point";

export interface BeamLoadResult {
  sectionModulus: number;
  allowableMomentFtLbs: number;
  maxUdlLbsPerFt: number | null;
  maxTotalUdlLbs: number | null;
  maxPointLoadLbs: number | null;
}

// A simplified allowable-bending-stress estimate for a rectangular beam,
// simply supported at both ends. This is a rough educational estimate of
// bending capacity only, it does not check deflection limits, shear
// capacity, buckling, load duration factors, or connection design, all of
// which matter for a real structure. Always have actual beam sizing
// verified by a licensed structural engineer against your local building
// code before construction.
export function calculateBeamLoad(
  widthIn: number,
  depthIn: number,
  spanFt: number,
  allowableStressPsi: number,
  loadType: BeamLoadType
): BeamLoadResult {
  if ([widthIn, depthIn, spanFt, allowableStressPsi].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (widthIn <= 0 || depthIn <= 0 || spanFt <= 0) {
    throw new Error("Beam width, depth and span must be greater than zero.");
  }
  if (allowableStressPsi <= 0) {
    throw new Error("Allowable bending stress must be greater than zero.");
  }

  const sectionModulus = (widthIn * depthIn * depthIn) / 6;
  const allowableMomentInLbs = allowableStressPsi * sectionModulus;
  const allowableMomentFtLbs = allowableMomentInLbs / 12;

  let maxUdlLbsPerFt: number | null = null;
  let maxTotalUdlLbs: number | null = null;
  let maxPointLoadLbs: number | null = null;

  if (loadType === "distributed") {
    maxUdlLbsPerFt = (8 * allowableMomentFtLbs) / (spanFt * spanFt);
    maxTotalUdlLbs = maxUdlLbsPerFt * spanFt;
  } else {
    maxPointLoadLbs = (4 * allowableMomentFtLbs) / spanFt;
  }

  return {
    sectionModulus: roundTo(sectionModulus, 2),
    allowableMomentFtLbs: roundTo(allowableMomentFtLbs, 1),
    maxUdlLbsPerFt: maxUdlLbsPerFt === null ? null : roundTo(maxUdlLbsPerFt, 1),
    maxTotalUdlLbs: maxTotalUdlLbs === null ? null : roundTo(maxTotalUdlLbs, 1),
    maxPointLoadLbs: maxPointLoadLbs === null ? null : roundTo(maxPointLoadLbs, 1),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
