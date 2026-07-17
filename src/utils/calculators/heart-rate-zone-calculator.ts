export interface HeartRateZoneResult {
  maxHeartRate: number;
  zone1: string;
  zone2: string;
  zone3: string;
  zone4: string;
  zone5: string;
}

export function calculateHeartRateZones(age: number): HeartRateZoneResult {
  if (Number.isNaN(age) || age <= 0 || age > 120) {
    throw new Error("Please enter a valid age.");
  }

  const maxHeartRate = 220 - age;

  const zoneRange = (lowPct: number, highPct: number) => {
    const low = Math.round(maxHeartRate * lowPct);
    const high = Math.round(maxHeartRate * highPct);
    return low + "-" + high + " bpm";
  };

  return {
    maxHeartRate,
    zone1: zoneRange(0.5, 0.6),
    zone2: zoneRange(0.6, 0.7),
    zone3: zoneRange(0.7, 0.8),
    zone4: zoneRange(0.8, 0.9),
    zone5: zoneRange(0.9, 1.0),
  };
}