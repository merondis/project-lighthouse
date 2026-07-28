export interface AttendanceResult {
  currentPercent: number;
  classesNeededForTarget: number | string;
  classesCanSkip: number | string;
}

export function calculateAttendance(
  classesAttended: number,
  classesHeld: number,
  targetPercent: number
): AttendanceResult {
  const currentPercent = classesHeld !== 0 ? Number(((classesAttended / classesHeld) * 100).toFixed(2)) : 0;

  let classesNeededForTarget: number | string = 0;
  if (targetPercent > 0 && targetPercent < 100) {
    const raw = (targetPercent * classesHeld - 100 * classesAttended) / (100 - targetPercent);
    classesNeededForTarget = raw > 0 ? Math.ceil(raw) : 0;
  } else if (targetPercent >= 100) {
    classesNeededForTarget = "N/A";
  }

  let classesCanSkip: number | string = 0;
  if (targetPercent > 0) {
    const raw = (classesAttended * 100) / targetPercent - classesHeld;
    classesCanSkip = raw > 0 ? Math.floor(raw) : 0;
  } else {
    classesCanSkip = "N/A";
  }

  return { currentPercent, classesNeededForTarget, classesCanSkip };
}
