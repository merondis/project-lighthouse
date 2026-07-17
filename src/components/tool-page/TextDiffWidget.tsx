"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { computeLineDiff, DiffLine } from "@/utils/calculators/text-diff";

export function TextDiffWidget() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diff, setDiff] = useState<DiffLine[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleCompare() {
    setError(null);
    setDiff(null);

    if (!textA.trim() && !textB.trim()) {
      setError("Please enter text in at least one box.");
      return;
    }

    const result = computeLineDiff(textA, textB);
    setDiff(result);
  }

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const diffBox = diff ? (
    <div className="mt-8 overflow-x-auto rounded-lg border border-white/5 bg-brand-bg font-mono text-sm">
      {diff.map((line, index) => {
        let bgClass = "";
        let prefix = "  ";
        if (line.type === "added") {
          bgClass = "bg-green-900/30 text-green-300";
          prefix = "+ ";
        } else if (line.type === "removed") {
          bgClass = "bg-red-900/30 text-red-300";
          prefix = "- ";
        } else {
          bgClass = "text-brand-secondary";
        }
        return (
          <div key={index} className={"whitespace-pre px-4 py-1 " + bgClass}>
            {prefix}{line.text || " "}
          </div>
        );
      })}
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Original Text
          <textarea
            value={textA}
            onChange={(e) => setTextA(e.target.value)}
            rows={8}
            placeholder="Paste the first version..."
            className="resize-y rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Changed Text
          <textarea
            value={textB}
            onChange={(e) => setTextB(e.target.value)}
            rows={8}
            placeholder="Paste the second version..."
            className="resize-y rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleCompare} className="w-full max-w-xs sm:w-auto">
          Compare Text
        </Button>
      </div>

      {errorBox}
      {diffBox}

      <p className="mt-6 text-xs text-brand-secondary">Green lines were added, red lines were removed. Comparison happens entirely in your browser.</p>
    </div>
  );
}