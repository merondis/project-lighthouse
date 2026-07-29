export type GfrGender = "male" | "female";

export interface GfrResult {
  gfr: number;
  stage: string;
}

function classifyStage(gfr: number): string {
  if (gfr >= 90) return "Normal (G1)";
  if (gfr >= 60) return "Mildly Decreased (G2)";
  if (gfr >= 45) return "Mild to Moderate Decrease (G3a)";
  if (gfr >= 30) return "Moderate to Severe Decrease (G3b)";
  if (gfr >= 15) return "Severely Decreased (G4)";
  return "Kidney Failure (G5)";
}

// 2021 CKD-EPI creatinine equation (race-free), Inker et al., NEJM 2021.
export function calculateGfr(gender: GfrGender, age: number, serumCreatinine: number): GfrResult {
  if (!Number.isFinite(age) || age <= 0) {
    throw new Error("Please enter a valid age.");
  }
  if (!Number.isFinite(serumCreatinine) || serumCreatinine <= 0) {
    throw new Error("Please enter a valid serum creatinine value.");
  }

  const isFemale = gender === "female";
  const kappa = isFemale ? 0.7 : 0.9;
  const alpha = isFemale ? -0.241 : -0.302;
  const scrOverKappa = serumCreatinine / kappa;
  const minTerm = Math.min(scrOverKappa, 1) ** alpha;
  const maxTerm = Math.max(scrOverKappa, 1) ** -1.2;

  let gfr = 142 * minTerm * maxTerm * 0.9938 ** age;
  if (isFemale) {
    gfr *= 1.012;
  }

  return {
    gfr: Math.round(gfr * 10) / 10,
    stage: classifyStage(gfr),
  };
}
