export type BodyFrameGender = "male" | "female";

export interface BodyTypeResult {
  ratio: number;
  frameSize: "Small" | "Medium" | "Large";
}

export function calculateBodyType(gender: BodyFrameGender, heightCm: number, wristCm: number): BodyTypeResult {
  if (!Number.isFinite(heightCm) || heightCm <= 0) {
    throw new Error("Please enter a valid height.");
  }
  if (!Number.isFinite(wristCm) || wristCm <= 0) {
    throw new Error("Please enter a valid wrist circumference.");
  }

  const ratio = heightCm / wristCm;
  let frameSize: BodyTypeResult["frameSize"];

  if (gender === "male") {
    if (ratio > 10.4) frameSize = "Small";
    else if (ratio >= 9.6) frameSize = "Medium";
    else frameSize = "Large";
  } else {
    if (ratio > 11.0) frameSize = "Small";
    else if (ratio >= 10.1) frameSize = "Medium";
    else frameSize = "Large";
  }

  return {
    ratio: Math.round(ratio * 100) / 100,
    frameSize,
  };
}
