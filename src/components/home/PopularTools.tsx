import { toolRegistry } from "@/data/tools/registry";
import { ToolCard } from "@/components/home/ToolCard";

export function PopularTools() {
  const featured = toolRegistry.filter((tool) => tool.featured && tool.status === "live");

  if (featured.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-white">Popular Tools</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}