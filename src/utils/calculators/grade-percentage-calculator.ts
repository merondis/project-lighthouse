export interface GradePercentageResult {
  percentage: number;
  letterGrade: string;
}

function letterGradeFor(percentage: number): string {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

export function calculateGradePercentage(marksObtained: number, totalMarks: number): GradePercentageResult {
  const percentage = totalMarks !== 0 ? Number(((marksObtained / totalMarks) * 100).toFixed(2)) : 0;
  return { percentage, letterGrade: letterGradeFor(percentage) };
}
