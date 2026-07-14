"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { toolRegistry } from "@/data/tools/registry";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return toolRegistry
      .filter(
        (tool) =>
          tool.title.toLowerCase().includes(q) || tool.shortDescription.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a tool..."
        className="w-full rounded-lg border border-white/10 bg-brand-card px-5 py-3 text-white placeholder:text-brand-secondary focus:border-brand-accent focus:outline-none"
      />

      {results.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-lg border border-white/10 bg-brand-card text-left shadow-xl">
          {results.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={tool.status === "live" ? `/tools/${tool.category}/${tool.slug}` : "#"}
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/5"
              >
                <span>{tool.icon}</span>
                <span>{tool.title}</span>
                {tool.status === "comingSoon" && (
                  <span className="ml-auto text-xs text-brand-secondary">Coming Soon</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}