"use client";

import { useMemo, useState } from "react";

interface MatchInfo {
  text: string;
  index: number;
}

export function RegexTesterWidget() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");

  const { matches, error } = useMemo(() => {
    if (!pattern.trim()) {
      return { matches: [] as MatchInfo[], error: null as string | null };
    }
    try {
      const regex = new RegExp(pattern, flags);
      const found: MatchInfo[] = [];

      if (flags.includes("g")) {
        let match;
        let safety = 0;
        while ((match = regex.exec(testString)) !== null && safety < 1000) {
          found.push({ text: match[0], index: match.index });
          if (match[0] === "") regex.lastIndex++;
          safety++;
        }
      } else {
        const match = regex.exec(testString);
        if (match) found.push({ text: match[0], index: match.index });
      }

      return { matches: found, error: null };
    } catch (err) {
      return { matches: [], error: err instanceof Error ? err.message : "Invalid regular expression." };
    }
  }, [pattern, flags, testString]);

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Regular Expression Pattern
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="e.g. \\d+"
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 font-mono text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Flags
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="g, i, m..."
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 font-mono text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Test String
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            rows={6}
            placeholder="Paste text to test your pattern against..."
            className="resize-y rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>
      </div>

      {error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null}

      {!error && pattern.trim() ? (
        <div className="mt-6 rounded-lg bg-brand-bg p-4">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">
            {matches.length} Match{matches.length === 1 ? "" : "es"}
          </p>
          {matches.length > 0 ? (
            <ul className="mt-3 flex flex-col gap-2">
              {matches.slice(0, 50).map((m, i) => (
                <li key={i} className="rounded bg-brand-card px-3 py-2 font-mono text-sm text-brand-accent">
                  "{m.text}" at position {m.index}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}