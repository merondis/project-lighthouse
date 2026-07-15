"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toolRegistry } from "@/data/tools/registry";
import { ToolCard } from "@/components/home/ToolCard";

export function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return toolRegistry;
    return toolRegistry.filter(
      (tool) =>
        tool.title.toLowerCase().includes(q) ||
        tool.shortDescription.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
    );
  }, [query]);

  function handleChange(value: string) {
    setQuery(value);
    const params = new URLSearchParams();
    if (value) params.set("q", value);
    router.replace(`/search?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search for a tool..."
        autoFocus
        className="w-full rounded-lg border border-white/10 bg-brand-card px-5 py-3 text-white placeholder:text-brand-secondary focus:border-brand-accent focus:outline-none"
      />

      <p className="mt-4 text-sm text-brand-secondary">
        {results.length} {results.length === 1 ? "tool" : "tools"} found
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {results.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-brand-secondary">No tools found. Try a different search term.</p>
      )}
    </div>
  );
}