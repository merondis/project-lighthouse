export type SleepMode = "wakeUp" | "bedtime";

export interface SleepOption {
  cycles: number;
  durationLabel: string;
  time: string;
}

export interface SleepResult {
  options: SleepOption[];
}

const CYCLE_MINUTES = 90;
const FALL_ASLEEP_MINUTES = 15;
const CYCLE_COUNTS = [6, 5, 4, 3];

function parseTimeToMinutes(time: string): number {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!match) {
    throw new Error("Please enter a valid time in HH:MM format.");
  }
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    throw new Error("Please enter a valid time.");
  }
  return hours * 60 + minutes;
}

function formatMinutesAsTime(totalMinutes: number): string {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  return displayHour + ":" + String(minutes).padStart(2, "0") + " " + period;
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours + "h " + (mins > 0 ? mins + "m" : "");
}

export function calculateSleepTimes(mode: SleepMode, timeInput: string): SleepResult {
  const baseMinutes = parseTimeToMinutes(timeInput);

  const options: SleepOption[] = CYCLE_COUNTS.map((cycles) => {
    const sleepMinutes = cycles * CYCLE_MINUTES;
    const totalMinutes = mode === "wakeUp" ? baseMinutes - sleepMinutes - FALL_ASLEEP_MINUTES : baseMinutes + sleepMinutes + FALL_ASLEEP_MINUTES;

    return {
      cycles,
      durationLabel: formatDuration(sleepMinutes),
      time: formatMinutesAsTime(totalMinutes),
    };
  });

  return { options };
}
