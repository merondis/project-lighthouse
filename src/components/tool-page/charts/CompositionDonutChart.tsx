"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export interface DonutSlice {
  name: string;
  value: number;
  color: string;
}

export function CompositionDonutChart({ data }: { data: DonutSlice[] }) {
  const positive = data.filter((d) => Number.isFinite(d.value) && d.value > 0);
  if (positive.length === 0) return null;

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={positive}
            dataKey="value"
            nameKey="name"
            innerRadius="55%"
            outerRadius="80%"
            paddingAngle={2}
          >
            {positive.map((slice) => (
              <Cell key={slice.name} fill={slice.color} stroke="#1e293b" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#cbd5e1" }}
            formatter={(value) => Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}
          />
          <Legend
            verticalAlign="bottom"
            height={32}
            formatter={(value: string) => <span style={{ color: "#cbd5e1", fontSize: 12 }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
