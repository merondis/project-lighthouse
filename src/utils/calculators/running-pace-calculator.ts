export interface RunningPaceResult {
  paceMinPerKm: string;
  paceMinPerMile: string;
  speedKmh: number;
  speedMph: number;
}

const KM_PER_MILE = 1.60934;

// Converts a distance and finish time into pace (time per km and per mile)
// and speed (km/h and mph), the standard building blocks runners use to
// compare efforts across different distances and units.
export function calculateRunningPace(
  distanceKm: number,
  hours: number,
  minutes: number,
  seconds: number
): RunningPaceResult {
  if ([distanceKm, hours, minutes, seconds].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (distanceKm <= 0) {
    throw new Error("Distance must be greater than zero.");
  }
  if (hours < 0 || minutes < 0 || seconds < 0) {
    throw new Error("Time values cannot be negative.");
  }

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  if (totalSeconds <= 0) {
    throw new Error("Please enter a finish time greater than zero.");
  }

  const distanceMiles = distanceKm / KM_PER_MILE;

  const secPerKm = totalSeconds / distanceKm;
  const secPerMile = totalSeconds / distanceMiles;

  const speedKmh = distanceKm / (totalSeconds / 3600);
  const speedMph = distanceMiles / (totalSeconds / 3600);

  return {
    paceMinPerKm: formatPace(secPerKm),
    paceMinPerMile: formatPace(secPerMile),
    speedKmh: roundTo(speedKmh, 2),
    speedMph: roundTo(speedMph, 2),
  };
}

function formatPace(totalSecondsPerUnit: number): string {
  const minutes = Math.floor(totalSecondsPerUnit / 60);
  const seconds = Math.round(totalSecondsPerUnit % 60);
  const paddedSeconds = seconds < 10 ? "0" + seconds : String(seconds);
  return minutes + ":" + paddedSeconds;
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
