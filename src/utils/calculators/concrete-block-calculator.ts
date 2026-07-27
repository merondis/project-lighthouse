export interface ConcreteBlockResult {
  wallArea: number;
  blocksNeeded: number;
  mortarBagsNeeded: number;
}

// Rule-of-thumb yield: roughly 3 standard 80 lb mortar mix bags per 100
// standard CMU blocks, a commonly cited estimate from masonry suppliers.
const MORTAR_BAGS_PER_100_BLOCKS = 3;

// Unlike our Concrete Calculator (poured/mixed concrete for slabs, measured
// by volume), this calculator counts discrete concrete masonry units (CMU
// blocks) needed to build a wall of a given size, based on the block's
// nominal face dimensions (which already account for a standard mortar
// joint).
export function calculateConcreteBlock(
  wallLengthFt: number,
  wallHeightFt: number,
  blockLengthIn: number,
  blockHeightIn: number,
  wastePercent: number
): ConcreteBlockResult {
  if ([wallLengthFt, wallHeightFt, blockLengthIn, blockHeightIn, wastePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (wallLengthFt <= 0 || wallHeightFt <= 0 || blockLengthIn <= 0 || blockHeightIn <= 0) {
    throw new Error("Wall and block dimensions must be greater than zero.");
  }
  if (wastePercent < 0) {
    throw new Error("Waste percentage cannot be negative.");
  }

  const wallArea = wallLengthFt * wallHeightFt;
  const blockFaceAreaSqFt = (blockLengthIn * blockHeightIn) / 144;
  const areaWithWaste = wallArea * (1 + wastePercent / 100);
  const blocksNeeded = Math.ceil(areaWithWaste / blockFaceAreaSqFt);

  const mortarBagsNeeded = Math.ceil((blocksNeeded / 100) * MORTAR_BAGS_PER_100_BLOCKS);

  return {
    wallArea: roundTo(wallArea, 2),
    blocksNeeded,
    mortarBagsNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
