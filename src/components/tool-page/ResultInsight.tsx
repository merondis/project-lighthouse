import { Lightbulb } from "lucide-react";

export function ResultInsight({ insights }: { insights: string[] }) {
  if (!insights || insights.length === 0) return null;

  return (
    <div className="mt-6 rounded-lg border border-brand-accent/20 bg-brand-bg p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-brand-accent" />
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
          What This Means
        </p>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {insights.map((insight, index) => (
          <li key={index} className="flex gap-2 text-sm text-brand-secondary">
            <span className="text-brand-accent">•</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}