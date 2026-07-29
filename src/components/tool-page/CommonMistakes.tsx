import { AlertCircle } from "lucide-react";

export function CommonMistakes({ mistakes }: { mistakes?: string[] }) {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white">Common Mistakes to Avoid</h2>
      <div className="mt-6 flex flex-col gap-3">
        {mistakes.map((mistake, index) => (
          <div
            key={index}
            className="flex gap-3 rounded-lg border border-red-500/20 bg-brand-card p-4"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
            <p className="text-sm text-brand-secondary">{mistake}</p>
          </div>
        ))}
      </div>
    </div>
  );
}