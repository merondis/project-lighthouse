export interface AgeDifferenceResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  olderPerson: "Person 1" | "Person 2" | "Same date";
}

export function calculateAgeDifference(birthDate1ISO: string, birthDate2ISO: string): AgeDifferenceResult {
  const date1 = new Date(birthDate1ISO);
  const date2 = new Date(birthDate2ISO);

  if (Number.isNaN(date1.getTime())) {
    throw new Error("Please enter a valid first date of birth.");
  }
  if (Number.isNaN(date2.getTime())) {
    throw new Error("Please enter a valid second date of birth.");
  }

  if (date1.getTime() === date2.getTime()) {
    return { years: 0, months: 0, days: 0, totalDays: 0, olderPerson: "Same date" };
  }

  const [earlier, later] = date1.getTime() < date2.getTime() ? [date1, date2] : [date2, date1];

  let years = later.getFullYear() - earlier.getFullYear();
  let months = later.getMonth() - earlier.getMonth();
  let days = later.getDate() - earlier.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(later.getFullYear(), later.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msDiff = later.getTime() - earlier.getTime();
  const totalDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  const olderPerson: AgeDifferenceResult["olderPerson"] =
    date1.getTime() < date2.getTime() ? "Person 1" : "Person 2";

  return { years, months, days, totalDays, olderPerson };
}
