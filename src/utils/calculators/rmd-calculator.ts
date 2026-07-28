// IRS Uniform Lifetime Table, effective 2022 onward (unchanged through 2026 per IRS Pub. 590-B).
const UNIFORM_LIFETIME_TABLE: Record<number, number> = {
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1,
  80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4,
  88: 13.7, 89: 12.9, 90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9,
  96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4, 101: 6.0, 102: 5.6, 103: 5.2,
  104: 4.9, 105: 4.6, 106: 4.3, 107: 4.1, 108: 3.9, 109: 3.7, 110: 3.5, 111: 3.4,
  112: 3.3, 113: 3.1, 114: 3.0, 115: 2.9, 116: 2.8, 117: 2.7, 118: 2.5, 119: 2.3,
  120: 2.0,
};

export interface RmdResult {
  rmdAmount: number | string;
  distributionPeriod: number | string;
  monthlyEquivalent: number | string;
}

export function calculateRmd(accountBalance: number, age: number): RmdResult {
  const clampedAge = Math.min(120, Math.max(72, Math.round(age)));
  const divisor = UNIFORM_LIFETIME_TABLE[clampedAge];

  if (age < 72) {
    return { rmdAmount: "Not applicable below age 72", distributionPeriod: "N/A", monthlyEquivalent: "N/A" };
  }
  if (!divisor) {
    return { rmdAmount: "N/A", distributionPeriod: "N/A", monthlyEquivalent: "N/A" };
  }

  const rmdAmount = accountBalance / divisor;
  return {
    rmdAmount: Number(rmdAmount.toFixed(2)),
    distributionPeriod: divisor,
    monthlyEquivalent: Number((rmdAmount / 12).toFixed(2)),
  };
}
