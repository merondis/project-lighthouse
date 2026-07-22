"use client";

import {
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface BmiChartProps {
  heightCm: number;
  weightKg: number;
  minHeightCm?: number;
  maxHeightCm?: number;
}

interface ThresholdLine {
  key: string;
  label: string;
  bmi: number;
  color: string;
}

const THRESHOLD_LINES: ThresholdLine[] = [
  { key: "t185", label: "BMI 18.5 (Normal starts)", bmi: 18.5, color: "#38BDF8" },
  { key: "t25", label: "BMI 25 (Overweight starts)", bmi: 25, color: "#F59E0B" },
  { key: "t30", label: "BMI 30 (Obese I starts)", bmi: 30, color: "#F97316" },
  { key: "t35", label: "BMI 35 (Obese II starts)", bmi: 35, color: "#EF4444" },
  { key: "t40", label: "BMI 40 (Obese III starts)", bmi: 40, color: "#B91C1C" },
];

const TOOLTIP_STYLE = { backgroundColor: "#1E293B", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 };
const LEGEND_STYLE = { color: "#CBD5E1", fontSize: 12 };
const AXIS_LABEL_STYLE = { fill: "#CBD5E1" };

// Plots the standard BMI classification boundary curves (weight = BMI x height^2)
// across a range of heights, with the user's own height/weight overlaid as a
// point, so they can see visually which zone they fall into and how that
// would change at a different height.
export function BmiChart({ heightCm, weightKg, minHeightCm = 140, maxHeightCm = 210 }: BmiChartProps) {
  const heights: number[] = [];
  for (let h = minHeightCm; h <= maxHeightCm; h += 5) {
    heights.push(h);
  }
  if (heights[heights.length - 1] !== maxHeightCm) {
    heights.push(maxHeightCm);
  }

  const chartData = heights.map((h) => {
    const heightM = h / 100;
    const row: Record<string, number> = { height: h };
    THRESHOLD_LINES.forEach((line) => {
      row[line.key] = Math.round(line.bmi * heightM * heightM * 10) / 10;
    });
    return row;
  });

  const userPoint = [{ height: heightCm, weight: weightKg }];
  const xDomain: [number, number] = [minHeightCm, maxHeightCm];

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
          <XAxis
            dataKey="height"
            type="number"
            domain={xDomain}
            stroke="#CBD5E1"
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            label={{ value: "Height (cm)", position: "insideBottom", offset: -10, style: AXIS_LABEL_STYLE }}
          />
          <YAxis
            type="number"
            stroke="#CBD5E1"
            tick={{ fill: "#CBD5E1", fontSize: 12 }}
            label={{ value: "Weight (kg)", angle: -90, position: "insideLeft", style: AXIS_LABEL_STYLE }}
          />
          <Tooltip contentStyle={TOOLTIP_STYLE} labelStyle={{ color: "#ffffff" }} itemStyle={{ color: "#CBD5E1" }} />
          <Legend wrapperStyle={LEGEND_STYLE} />
          {THRESHOLD_LINES.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.label}
              stroke={line.color}
              dot={false}
              strokeWidth={2}
              isAnimationActive={false}
            />
          ))}
          <Scatter name="You" data={userPoint} dataKey="weight" fill="#2563EB" isAnimationActive={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
