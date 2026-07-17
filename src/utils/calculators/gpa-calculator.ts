const GRADE_POINTS: Record<string, number> = {
  "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, "D": 1.0, "F": 0.0,
};

export interface GpaCourse {
  grade: string;
  credits: number;
}

export interface GpaResult {
  gpa: number;
  totalCredits: number;
}

export function calculateGpa(courses: GpaCourse[]): GpaResult {
  const validCourses = courses.filter(
    (c) => c.grade in GRADE_POINTS && !Number.isNaN(c.credits) && c.credits > 0
  );

  if (validCourses.length === 0) {
    throw new Error("Please enter at least one course with a grade and credit hours.");
  }

  let totalPoints = 0;
  let totalCredits = 0;

  validCourses.forEach((c) => {
    totalPoints += GRADE_POINTS[c.grade] * c.credits;
    totalCredits += c.credits;
  });

  return {
    gpa: Math.round((totalPoints / totalCredits) * 100) / 100,
    totalCredits,
  };
}