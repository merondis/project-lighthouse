export interface StudyTimeResult {
  daysRemaining: number;
  hoursPerDay: number | string;
  hoursPerWeek: number | string;
}

export function calculateStudyTime(
  examDateStr: string,
  totalHoursNeeded: number,
  studyDaysPerWeek: number
): StudyTimeResult {
  const examDate = new Date(examDateStr + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysRemaining = Math.max(0, Math.round((examDate.getTime() - today.getTime()) / msPerDay));

  if (daysRemaining <= 0) {
    return { daysRemaining: 0, hoursPerDay: "N/A", hoursPerWeek: "N/A" };
  }

  const weeksRemaining = daysRemaining / 7;
  const totalStudyDays = weeksRemaining * Math.max(0, Math.min(7, studyDaysPerWeek));

  const hoursPerDay = totalStudyDays > 0 ? Number((totalHoursNeeded / totalStudyDays).toFixed(2)) : "N/A";
  const hoursPerWeek = weeksRemaining > 0 ? Number((totalHoursNeeded / weeksRemaining).toFixed(2)) : "N/A";

  return { daysRemaining, hoursPerDay, hoursPerWeek };
}
