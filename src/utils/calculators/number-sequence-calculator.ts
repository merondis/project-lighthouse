export type SequenceType = "arithmetic" | "geometric";

export interface NumberSequenceResult {
  nthTerm: number;
  sumOfTerms: number;
  sequencePreview: string;
}

export function calculateNumberSequence(
  sequenceType: SequenceType,
  firstTerm: number,
  commonValue: number,
  numberOfTerms: number
): NumberSequenceResult {
  if (![firstTerm, commonValue, numberOfTerms].every((v) => Number.isFinite(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (numberOfTerms < 1 || !Number.isInteger(numberOfTerms)) {
    throw new Error("Number of terms must be a positive whole number.");
  }
  if (numberOfTerms > 100000) {
    throw new Error("Please enter a number of terms of 100,000 or fewer.");
  }

  let nthTerm: number;
  let sumOfTerms: number;

  if (sequenceType === "arithmetic") {
    nthTerm = firstTerm + (numberOfTerms - 1) * commonValue;
    sumOfTerms = (numberOfTerms / 2) * (firstTerm + nthTerm);
  } else {
    if (commonValue === 1) {
      nthTerm = firstTerm;
      sumOfTerms = firstTerm * numberOfTerms;
    } else {
      nthTerm = firstTerm * Math.pow(commonValue, numberOfTerms - 1);
      sumOfTerms = (firstTerm * (Math.pow(commonValue, numberOfTerms) - 1)) / (commonValue - 1);
    }
  }

  const previewCount = Math.min(numberOfTerms, 10);
  const previewTerms: number[] = [];
  for (let i = 0; i < previewCount; i++) {
    const term = sequenceType === "arithmetic" ? firstTerm + i * commonValue : firstTerm * Math.pow(commonValue, i);
    previewTerms.push(Math.round(term * 10000) / 10000);
  }
  const sequencePreview = previewTerms.join(", ") + (numberOfTerms > previewCount ? ", ..." : "");

  return {
    nthTerm: Math.round(nthTerm * 10000) / 10000,
    sumOfTerms: Math.round(sumOfTerms * 10000) / 10000,
    sequencePreview,
  };
}
