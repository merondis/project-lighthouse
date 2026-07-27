export interface FenceResult {
  sections: number;
  postsNeeded: number;
  railsNeeded: number;
  picketsNeeded: number;
}

export function calculateFence(
  fenceLengthFt: number,
  postSpacingFt: number,
  railsPerSection: number,
  picketWidthIn: number,
  picketGapIn: number
): FenceResult {
  if (
    [fenceLengthFt, postSpacingFt, railsPerSection, picketWidthIn, picketGapIn].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (fenceLengthFt <= 0 || postSpacingFt <= 0) {
    throw new Error("Fence length and post spacing must be greater than zero.");
  }
  if (railsPerSection <= 0 || picketWidthIn <= 0) {
    throw new Error("Rails per section and picket width must be greater than zero.");
  }
  if (picketGapIn < 0) {
    throw new Error("Picket gap cannot be negative.");
  }

  const sections = Math.ceil(fenceLengthFt / postSpacingFt);
  const postsNeeded = sections + 1;
  const railsNeeded = sections * railsPerSection;

  const fenceLengthIn = fenceLengthFt * 12;
  const picketUnitWidthIn = picketWidthIn + picketGapIn;
  const picketsNeeded = Math.ceil(fenceLengthIn / picketUnitWidthIn);

  return {
    sections,
    postsNeeded,
    railsNeeded,
    picketsNeeded,
  };
}
