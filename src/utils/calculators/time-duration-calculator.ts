export interface TimeDurationResult {
  days: number;
  hours: number;
  minutes: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export function calculateTimeDuration(startDateTimeISO: string, endDateTimeISO: string): TimeDurationResult {
  const start = new Date(startDateTimeISO);
  const end = new Date(endDateTimeISO);

  if (Number.isNaN(start.getTime())) {
    throw new Error("Please enter a valid start date and time.");
  }
  if (Number.isNaN(end.getTime())) {
    throw new Error("Please enter a valid end date and time.");
  }

  const [earlier, later] = start.getTime() <= end.getTime() ? [start, end] : [end, start];
  const msDiff = later.getTime() - earlier.getTime();

  const totalSeconds = Math.floor(msDiff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  return {
    days,
    hours,
    minutes,
    totalHours,
    totalMinutes,
    totalSeconds,
  };
}
