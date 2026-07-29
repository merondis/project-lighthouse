export interface MolarityResult {
  molesOfSolute: number;
  molarity: number;
}

export function calculateMolarity(massGrams: number, molarMassGmol: number, volumeLiters: number): MolarityResult {
  if (!Number.isFinite(massGrams) || massGrams <= 0) {
    throw new Error("Please enter a valid, positive mass.");
  }
  if (!Number.isFinite(molarMassGmol) || molarMassGmol <= 0) {
    throw new Error("Please enter a valid, positive molar mass.");
  }
  if (!Number.isFinite(volumeLiters) || volumeLiters <= 0) {
    throw new Error("Please enter a valid, positive solution volume.");
  }

  const molesOfSolute = massGrams / molarMassGmol;
  const molarity = molesOfSolute / volumeLiters;

  return {
    molesOfSolute: Math.round(molesOfSolute * 10000) / 10000,
    molarity: Math.round(molarity * 10000) / 10000,
  };
}
