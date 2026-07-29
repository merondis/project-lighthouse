export interface ShiftResult {
  grossHours: number;
  grossMinutes: number;
  netHours: number;
  netMinutes: number;
  netHoursDecimal: number;
  isOvernight: boolean;
}

function parseTimeToMinutes(time: string): number {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!match) {
    throw new Error("Please enter times in HH:MM format.");
  }
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    throw new Error("Please enter a valid time.");
  }
  return hours * 60 + minutes;
}

export function calculateShift(clockIn: string, clockOut: string, breakMinutes: number): ShiftResult {
  const inMinutes = parseTimeToMinutes(clockIn);
  let outMinutes = parseTimeToMinutes(clockOut);

  const isOvernight = outMinutes <= inMinutes;
  if (isOvernight) {
    outMinutes += 24 * 60;
  }

  const safeBreak = Number.isFinite(breakMinutes) && breakMinutes > 0 ? breakMinutes : 0;
  const grossMinutesTotal = outMinutes - inMinutes;
  const netMinutesTotal = Math.max(0, grossMinutesTotal - safeBreak);

  return {
    grossHours: Math.floor(grossMinutesTotal / 60),
    grossMinutes: grossMinutesTotal % 60,
    netHours: Math.floor(netMinutesTotal / 60),
    netMinutes: netMinutesTotal % 60,
    netHoursDecimal: Math.round((netMinutesTotal / 60) * 100) / 100,
    isOvernight,
  };
}
