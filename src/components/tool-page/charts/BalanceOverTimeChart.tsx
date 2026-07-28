"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export interface BalancePoint {
  label: string | number;
  balance: number;
}

function formatCompact(value: number): string {
  if (Math.abs(value) >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (Math.abs(value) >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return String(value);
}

export function BalanceOverTimeChart({ data, label }: { data: BalancePoint[]; label?: string }) {
  if (data.length === 0) return null;

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.02} />
            </linearGradient>
          </defs>
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
          <Area type="monotone" dataKey="balance" name={label ?? "Balance"} stroke="#2563eb" strokeWidth={2} fill="url(#balanceFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
