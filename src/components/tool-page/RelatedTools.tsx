import { toolRegistry } from "@/data/tools/registry";
import { ToolCard } from "@/components/home/ToolCard";

export function RelatedTools({ slugs }: { slugs: string[] }) {
  const tools = slugs
    .map((slug) => toolRegistry.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  if (!tools.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white">Related Tools</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}