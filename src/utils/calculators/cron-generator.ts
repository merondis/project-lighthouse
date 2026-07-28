export interface CronResult {
  cronExpression: string;
  description: string;
}

function validateField(value: string, min: number, max: number, fieldName: string): void {
  if (value === "*") return;
  const parts = value.split(",");
  for (const part of parts) {
    if (part.includes("/")) {
      const [range, step] = part.split("/");
      if (!/^(\*|\d+(-\d+)?)$/.test(range) || !/^\d+$/.test(step)) {
        throw new Error(`Invalid ${fieldName} field: "${value}".`);
      }
    } else if (part.includes("-")) {
      const [a, b] = part.split("-").map(Number);
      if (Number.isNaN(a) || Number.isNaN(b) || a < min || b > max || a > b) {
        throw new Error(`Invalid ${fieldName} range: "${value}" (expected within ${min}-${max}).`);
      }
    } else {
      const n = Number(part);
      if (Number.isNaN(n) || n < min || n > max) {
        throw new Error(`Invalid ${fieldName} value: "${value}" (expected ${min}-${max} or *).`);
      }
    }
  }
}

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_NAMES = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function pad(n: string): string {
  return n.padStart(2, "0");
}

function describeCron(min: string, hr: string, dom: string, mon: string, dow: string): string {
  const restWild = dom === "*" && mon === "*" && dow === "*";

  if (min === "*" && hr === "*" && restWild) return "Runs every minute.";

  const stepMatch = min.match(/^\*\/(\d+)$/);
  if (stepMatch && hr === "*" && restWild) return `Runs every ${stepMatch[1]} minutes.`;

  if (/^\d+$/.test(min) && hr === "*" && restWild) return `Runs at minute ${min} past every hour.`;

  if (/^\d+$/.test(min) && /^\d+$/.test(hr) && restWild) return `Runs daily at ${pad(hr)}:${pad(min)}.`;

  if (/^\d+$/.test(min) && /^\d+$/.test(hr) && dom === "*" && mon === "*" && /^\d+$/.test(dow)) {
    return `Runs weekly on ${DAY_NAMES[Number(dow)] ?? dow} at ${pad(hr)}:${pad(min)}.`;
  }

  if (/^\d+$/.test(min) && /^\d+$/.test(hr) && /^\d+$/.test(dom) && mon === "*" && dow === "*") {
    return `Runs monthly on day ${dom} at ${pad(hr)}:${pad(min)}.`;
  }

  if (/^\d+$/.test(min) && /^\d+$/.test(hr) && /^\d+$/.test(dom) && /^\d+$/.test(mon) && dow === "*") {
    return `Runs yearly on ${MONTH_NAMES[Number(mon)] ?? mon} ${dom} at ${pad(hr)}:${pad(min)}.`;
  }

  return `Runs according to the schedule: minute=${min}, hour=${hr}, day of month=${dom}, month=${mon}, day of week=${dow}.`;
}

// Builds a standard 5-field cron expression from friendly inputs and
// generates a plain-English description for common, recognizable patterns.
export function generateCron(minute: string, hour: string, dayOfMonth: string, month: string, dayOfWeek: string): CronResult {
  const min = minute.trim() || "*";
  const hr = hour.trim() || "*";
  const dom = dayOfMonth.trim() || "*";
  const mon = month.trim() || "*";
  const dow = dayOfWeek.trim() || "*";

  validateField(min, 0, 59, "minute");
  validateField(hr, 0, 23, "hour");
  validateField(dom, 1, 31, "day of month");
  validateField(mon, 1, 12, "month");
  validateField(dow, 0, 6, "day of week");

  return {
    cronExpression: `${min} ${hr} ${dom} ${mon} ${dow}`,
    description: describeCron(min, hr, dom, mon, dow),
  };
}
