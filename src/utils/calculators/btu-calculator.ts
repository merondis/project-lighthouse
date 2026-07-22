export type SunExposure = "shaded" | "moderate" | "sunny";

interface BtuBracket {
  maxSqFt: number;
  btu: number;
}

// Standard room-size-to-BTU sizing chart, as published by the U.S. Department of Energy
// and commonly used by air conditioner sizing guides.
const BTU_TABLE: BtuBracket[] = [
  { maxSqFt: 150, btu: 5000 },
  { maxSqFt: 250, btu: 6000 },
  { maxSqFt: 300, btu: 7000 },
  { maxSqFt: 350, btu: 8000 },
  { maxSqFt: 400, btu: 9000 },
  { maxSqFt: 450, btu: 10000 },
  { maxSqFt: 550, btu: 12000 },
  { maxSqFt: 700, btu: 14000 },
  { maxSqFt: 1000, btu: 18000 },
  { maxSqFt: 1200, btu: 21000 },
  { maxSqFt: 1400, btu: 23000 },
  { maxSqFt: 1500, btu: 24000 },
  { maxSqFt: 2000, btu: 30000 },
  { maxSqFt: 2500, btu: 34000 },
];

function baseBtuForArea(areaSqFt: number): number {
  if (areaSqFt <= 100) return 5000;
  for (const bracket of BTU_TABLE) {
    if (areaSqFt <= bracket.maxSqFt) return bracket.btu;
  }
  // Beyond the standard chart's 2,500 sq ft ceiling, extend using its top-end ratio.
  const topRatio = 34000 / 2500;
  return Math.round(areaSqFt * topRatio);
}

export interface BtuResult {
  recommendedBtu: string;
  baseBtu: string;
  tonsEquivalent: number;
}

export function calculateBtu(
  areaSqFt: number,
  sunExposure: SunExposure,
  occupants: number,
  isKitchen: boolean
): BtuResult {
  if ([areaSqFt, occupants].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for area and occupants.");
  }
  if (areaSqFt <= 0) {
    throw new Error("Room area must be greater than zero.");
  }
  if (occupants < 0) {
    throw new Error("Number of occupants cannot be negative.");
  }

  const base = baseBtuForArea(areaSqFt);

  let adjusted = base;
  if (sunExposure === "sunny") adjusted *= 1.1;
  if (sunExposure === "shaded") adjusted *= 0.9;

  if (occupants > 2) {
    adjusted += (occupants - 2) * 600;
  }

  if (isKitchen) {
    adjusted += 4000;
  }

  const recommendedBtu = Math.round(adjusted / 100) * 100;

  return {
    recommendedBtu: recommendedBtu.toLocaleString(),
    baseBtu: base.toLocaleString(),
    tonsEquivalent: roundTo(recommendedBtu / 12000, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
