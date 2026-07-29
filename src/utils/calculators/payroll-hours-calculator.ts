import { calculateShift } from "@/utils/calculators/shift-calculator";

export interface PayrollDayInput {
  clockIn: string;
  clockOut: string;
  breakMinutes: number;
}

export interface PayrollHoursResult {
  totalHours: number;
  regularHours: number;
  overtimeHours: number;
  daysWorked: number;
  grossPay: number;
}

export function calculatePayrollHours(
  days: PayrollDayInput[],
  hourlyRate: number,
  overtimeThreshold: number,
  overtimeMultiplier: number
): PayrollHoursResult {
  let totalHours = 0;
  let daysWorked = 0;

  days.forEach((day, index) => {
    const hasClockIn = day.clockIn && day.clockIn.trim().length > 0;
    const hasClockOut = day.clockOut && day.clockOut.trim().length > 0;

    if (!hasClockIn && !hasClockOut) return;
    if (!hasClockIn || !hasClockOut) {
      throw new Error(`Day ${index + 1}: please enter both a clock-in and clock-out time, or leave both blank.`);
    }

    const shift = calculateShift(day.clockIn, day.clockOut, day.breakMinutes || 0);
    totalHours += shift.netHoursDecimal;
    daysWorked += 1;
  });

  if (daysWorked === 0) {
    throw new Error("Please enter at least one day's clock-in and clock-out times.");
  }

  const threshold = Number.isFinite(overtimeThreshold) && overtimeThreshold > 0 ? overtimeThreshold : 40;
  const multiplier = Number.isFinite(overtimeMultiplier) && overtimeMultiplier > 0 ? overtimeMultiplier : 1.5;

  const regularHours = Math.min(totalHours, threshold);
  const overtimeHours = Math.max(0, totalHours - threshold);

  const rate = Number.isFinite(hourlyRate) && hourlyRate > 0 ? hourlyRate : 0;
  const grossPay = regularHours * rate + overtimeHours * rate * multiplier;

  return {
    totalHours: Math.round(totalHours * 100) / 100,
    regularHours: Math.round(regularHours * 100) / 100,
    overtimeHours: Math.round(overtimeHours * 100) / 100,
    daysWorked,
    grossPay: Math.round(grossPay * 100) / 100,
  };
}
