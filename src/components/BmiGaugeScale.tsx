export interface GaugeZone {
  label: string;
  min: number;
  max: number;
  color: string;
}

export interface BmiGaugeScaleProps {
  zones: GaugeZone[];
  value: number;
  min: number;
  max: number;
  valueLabel?: string;
}

const WIDTH = 640;
const HEIGHT = 100;
const TRACK_Y = 34;
const TRACK_HEIGHT = 26;

// Generic horizontal gauge: colored zone bands across [min, max] with a marker
// at `value`. Reusable for any single-number metric with defined zones (BMI,
// BMI Prime, Body Fat %, BMR bands, etc.) — all visual styling comes from the
// `zones` prop, this component has no BMI-specific knowledge.
export function BmiGaugeScale({ zones, value, min, max, valueLabel }: BmiGaugeScaleProps) {
  const range = max - min || 1;
  const clampedValue = Math.min(Math.max(value, min), max);
  const markerX = ((clampedValue - min) / range) * WIDTH;
  const markerXClamped = Math.min(Math.max(markerX, 4), WIDTH - 4);

  const bands = zones
    .map((zone) => {
      const zoneStart = Math.max(zone.min, min);
      const zoneEnd = Math.min(zone.max, max);
      const x = ((zoneStart - min) / range) * WIDTH;
      const w = ((zoneEnd - zoneStart) / range) * WIDTH;
      return { ...zone, x, w };
    })
    .filter((band) => band.w > 0);

  const displayLabel = valueLabel ?? String(value);
  const labelAnchor = markerXClamped < 40 ? "start" : markerXClamped > WIDTH - 40 ? "end" : "middle";

  return (
    <svg viewBox={"0 0 " + WIDTH + " " + HEIGHT} className="w-full" role="img" aria-label={"Gauge showing a value of " + value}>
      <rect x={0} y={TRACK_Y} width={WIDTH} height={TRACK_HEIGHT} rx={6} fill="#0f172a" />
      {bands.map((band) => (
        <rect key={band.label} x={band.x} y={TRACK_Y} width={band.w} height={TRACK_HEIGHT} fill={band.color} />
      ))}
      <line x1={markerXClamped} y1={TRACK_Y - 8} x2={markerXClamped} y2={TRACK_Y + TRACK_HEIGHT + 8} stroke="#ffffff" strokeWidth={3} />
      <polygon
        points={
          (markerXClamped - 7) + "," + (TRACK_Y - 8) + " " +
          (markerXClamped + 7) + "," + (TRACK_Y - 8) + " " +
          markerXClamped + "," + (TRACK_Y - 20)
        }
        fill="#ffffff"
      />
      <text x={markerXClamped} y={TRACK_Y - 24} textAnchor={labelAnchor} fill="#ffffff" fontSize="15" fontWeight="700">
        {displayLabel}
      </text>
      {bands.map((band) => (
        <text
          key={band.label + "-label"}
          x={band.x + band.w / 2}
          y={TRACK_Y + TRACK_HEIGHT + 20}
          textAnchor="middle"
          fill="#CBD5E1"
          fontSize="10"
        >
          {band.label}
        </text>
      ))}
    </svg>
  );
}
