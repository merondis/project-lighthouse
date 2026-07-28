export interface CgpaResult {
  cgpa: number | string;
  totalCredits: number;
}

export interface SemesterEntry {
  gpa: number;
  credits: number;
}

export function calculateCgpa(semesters: SemesterEntry[]): CgpaResult {
  const valid = semesters.filter((s) => Number.isFinite(s.gpa) && Number.isFinite(s.credits) && s.credits > 0);
  const totalCredits = valid.reduce((sum, s) => sum + s.credits, 0);
  const totalPoints = valid.reduce((sum, s) => sum + s.gpa * s.credits, 0);
  const cgpa = totalCredits > 0 ? Number((totalPoints / totalCredits).toFixed(3)) : "N/A";
  return { cgpa, totalCredits: Number(totalCredits.toFixed(2)) };
}
