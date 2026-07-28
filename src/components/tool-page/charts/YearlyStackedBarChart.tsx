"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export interface YearlyBarDatum {
  label: string | number;
  principal: number;
  interest: number;
}

function formatCompact(value: number): string {
  if (Math.abs(value) >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (Math.abs(value) >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return String(value);
}

export function YearlyStackedBarChart({ data }: { data: YearlyBarDatum[] }) {
  if (data.length === 0) return null;

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
          <XAxis dataKey="label" tick={{ fill: "#cbd5e1", fontSize: 11 }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} />
          <YAxis
            tick={{ fill: "#cbd5e1", fontSize: 11 }}
            axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            tickFormatter={formatCompact}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#cbd5e1" }}
            formatter={(value) => Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}
          />
          <Legend formatter={(value: string) => <span style={{ color: "#cbd5e1", fontSize: 12 }}>{value}</span>} />
          <Bar dataKey="principal" name="Principal" stackId="a" fill="#2563eb" radius={[0, 0, 0, 0]} />
          <Bar dataKey="interest" name="Interest" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
