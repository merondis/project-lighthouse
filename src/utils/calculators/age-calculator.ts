export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
}

export function calculateAge(birthDateISO: string, referenceDateISO?: string): AgeResult {
  const birth = new Date(birthDateISO);
  const reference = referenceDateISO ? new Date(referenceDateISO) : new Date();

  if (Number.isNaN(birth.getTime())) {
    throw new Error("Please enter a valid date of birth.");
  }

  if (Number.isNaN(reference.getTime())) {
    throw new Error("Please enter a valid reference date.");
  }

  if (birth.getTime() > reference.getTime()) {
    throw new Error("Date of birth cannot be after the reference date.");
  }

  let years = reference.getFullYear() - birth.getFullYear();
  let months = reference.getMonth() - birth.getMonth();
  let days = reference.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(reference.getFullYear(), reference.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msDiff = reference.getTime() - birth.getTime();
  const totalDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks: Math.floor(totalDays / 7),
    totalMonths: years * 12 + months,
  };
}