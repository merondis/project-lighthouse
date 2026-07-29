export interface BusinessHoursResult {
  businessHours: number;
  businessDaysSpanned: number;
  totalHoursDecimal: number;
}

function parseTimeToMinutes(time: string): number {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!match) {
    throw new Error("Please enter business hours in HH:MM format.");
  }
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    throw new Error("Please enter a valid time.");
  }
  return hours * 60 + minutes;
}

export function calculateBusinessHours(
  startDateTimeISO: string,
  endDateTimeISO: string,
  businessStartTime: string,
  businessEndTime: string
): BusinessHoursResult {
  const start = new Date(startDateTimeISO);
  const end = new Date(endDateTimeISO);

  if (Number.isNaN(start.getTime())) {
    throw new Error("Please enter a valid start date and time.");
  }
  if (Number.isNaN(end.getTime())) {
    throw new Error("Please enter a valid end date and time.");
  }
  if (start.getTime() >= end.getTime()) {
    throw new Error("The end date and time must be after the start date and time.");
  }

  const businessStartMinutes = parseTimeToMinutes(businessStartTime);
  const businessEndMinutes = parseTimeToMinutes(businessEndTime);
  if (businessEndMinutes <= businessStartMinutes) {
    throw new Error("Business end time must be after business start time.");
  }

  let totalMinutes = 0;
  let businessDaysSpanned = 0;

  const cursor = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const lastDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  while (cursor.getTime() <= lastDay.getTime()) {
    const dayOfWeek = cursor.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const windowStart = new Date(cursor);
      windowStart.setMinutes(windowStart.getMinutes() + businessStartMinutes);
      const windowEnd = new Date(cursor);
      windowEnd.setMinutes(windowEnd.getMinutes() + businessEndMinutes);

      const overlapStart = new Date(Math.max(windowStart.getTime(), start.getTime()));
      const overlapEnd = new Date(Math.min(windowEnd.getTime(), end.getTime()));

      if (overlapStart.getTime() < overlapEnd.getTime()) {
        const minutesThisDay = (overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60);
        totalMinutes += minutesThisDay;
        businessDaysSpanned += 1;
      }
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  const totalHoursDecimal = Math.round((totalMinutes / 60) * 100) / 100;

  return {
    businessHours: Math.floor(totalMinutes / 60),
    businessDaysSpanned,
    totalHoursDecimal,
  };
}
