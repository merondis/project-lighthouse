export type BraSizeUnit = "in" | "cm";

export interface BandSizeRow {
  tier: string;
  usUk: number;
  eu: number;
  frBeEs: number;
  auNz: number;
}

export const BAND_SIZE_TABLE: BandSizeRow[] = [
  { tier: "XXS", usUk: 28, eu: 60, frBeEs: 75, auNz: 6 },
  { tier: "XS", usUk: 30, eu: 65, frBeEs: 80, auNz: 8 },
  { tier: "S", usUk: 32, eu: 70, frBeEs: 85, auNz: 10 },
  { tier: "M", usUk: 34, eu: 75, frBeEs: 90, auNz: 12 },
  { tier: "L", usUk: 36, eu: 80, frBeEs: 95, auNz: 14 },
  { tier: "XL", usUk: 38, eu: 85, frBeEs: 100, auNz: 16 },
  { tier: "XXL", usUk: 40, eu: 90, frBeEs: 105, auNz: 18 },
  { tier: "3XL", usUk: 42, eu: 95, frBeEs: 110, auNz: 20 },
  { tier: "4XL", usUk: 44, eu: 100, frBeEs: 115, auNz: 22 },
  { tier: "5XL", usUk: 46, eu: 105, frBeEs: 120, auNz: 24 },
];

export interface CupDifferenceRow {
  diffInches: number; // 0 represents "<1"
  us: string;
  ukAu: string;
}

export const CUP_DIFFERENCE_TABLE: CupDifferenceRow[] = [
  { diffInches: 0, us: "AA", ukAu: "AA" },
  { diffInches: 1, us: "A", ukAu: "A" },
  { diffInches: 2, us: "B", ukAu: "B" },
  { diffInches: 3, us: "C", ukAu: "C" },
  { diffInches: 4, us: "D", ukAu: "D" },
  { diffInches: 5, us: "E/DD", ukAu: "DD" },
  { diffInches: 6, us: "F/DDD", ukAu: "E" },
  { diffInches: 7, us: "G/DDDD", ukAu: "F" },
  { diffInches: 8, us: "H", ukAu: "FF" },
  { diffInches: 9, us: "I", ukAu: "G" },
  { diffInches: 10, us: "J", ukAu: "GG" },
  { diffInches: 11, us: "K", ukAu: "H" },
  { diffInches: 12, us: "L", ukAu: "HH" },
  { diffInches: 13, us: "M", ukAu: "J" },
  { diffInches: 14, us: "N", ukAu: "JJ" },
];

export interface BraSizeResult {
  bandSizeUS: number;
  cupUS: string;
  cupUK: string;
  sizeUS: string;
  sizeUK: string;
  bandEU: number;
  bandFrBeEs: number;
  bandAuNz: number;
  difference: number;
}

function roundToNearestEven(n: number): number {
  const rounded = Math.round(n);
  return rounded % 2 === 0 ? rounded : rounded + 1;
}

export function calculateBraSize(bust: number, band: number, unit: BraSizeUnit): BraSizeResult {
  if (!Number.isFinite(bust) || bust <= 0) {
    throw new Error("Please enter a valid bust measurement.");
  }
  if (!Number.isFinite(band) || band <= 0) {
    throw new Error("Please enter a valid band (underbust) measurement.");
  }
  if (bust < band) {
    throw new Error("Bust measurement should be greater than or equal to your band measurement.");
  }

  const bustInches = unit === "cm" ? bust / 2.54 : bust;
  const bandInches = unit === "cm" ? band / 2.54 : band;

  const bandRounded = Math.min(46, Math.max(28, roundToNearestEven(bandInches)));
  const diffRaw = bustInches - bandRounded;
  const diffRounded = Math.min(14, Math.max(0, Math.round(diffRaw)));

  const cupRow = CUP_DIFFERENCE_TABLE.find((row) => row.diffInches === diffRounded) ?? CUP_DIFFERENCE_TABLE[0];
  const bandRow = BAND_SIZE_TABLE.find((row) => row.usUk === bandRounded) ?? BAND_SIZE_TABLE[0];

  return {
    bandSizeUS: bandRounded,
    cupUS: cupRow.us,
    cupUK: cupRow.ukAu,
    sizeUS: bandRounded + cupRow.us,
    sizeUK: bandRounded + cupRow.ukAu,
    bandEU: bandRow.eu,
    bandFrBeEs: bandRow.frBeEs,
    bandAuNz: bandRow.auNz,
    difference: Math.round(diffRaw * 100) / 100,
  };
}
