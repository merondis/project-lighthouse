"use client";

import { useEffect, useState } from "react";
import { getRecentTools } from "@/lib/recentlyViewed";
import { toolRegistry } from "@/data/tools/registry";
import { ToolCard } from "@/components/home/ToolCard";

export function RecentlyViewedTools() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getRecentTools());
  }, []);

  const tools = slugs
    .map((slug) => toolRegistry.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  if (tools.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-white">Recently Viewed</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}