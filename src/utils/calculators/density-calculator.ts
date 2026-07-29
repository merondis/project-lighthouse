export interface DensityResult {
  massGrams: number;
  volumeCm3: number;
  densityGcm3: number;
}

function parseOptional(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    throw new Error("Please enter valid numbers, or leave exactly one field blank to solve for it.");
  }
  return parsed;
}

export function calculateDensity(massInput: string, volumeInput: string, densityInput: string): DensityResult {
  const mass = parseOptional(massInput);
  const volume = parseOptional(volumeInput);
  const density = parseOptional(densityInput);

  const blankCount = [mass, volume, density].filter((v) => v === null).length;

  if (blankCount === 0) {
    throw new Error("Leave exactly one field blank (Mass, Volume or Density) to solve for it.");
  }
  if (blankCount > 1) {
    throw new Error("Please fill in at least two of the three fields (Mass, Volume, Density).");
  }

  let finalMass = mass;
  let finalVolume = volume;
  let finalDensity = density;

  if (mass === null) {
    if (volume === null || density === null) throw new Error("Missing values to calculate mass.");
    finalMass = volume * density;
  } else if (volume === null) {
    if (density === null || density === 0) throw new Error("Density must be greater than zero to calculate volume.");
    finalVolume = mass / density;
  } else if (density === null) {
    if (volume === 0) throw new Error("Volume must be greater than zero to calculate density.");
    finalDensity = mass / volume;
  }

  if (finalMass === null || finalVolume === null || finalDensity === null) {
    throw new Error("Unable to calculate. Please check your inputs.");
  }

  return {
    massGrams: Math.round(finalMass * 10000) / 10000,
    volumeCm3: Math.round(finalVolume * 10000) / 10000,
    densityGcm3: Math.round(finalDensity * 10000) / 10000,
  };
}
