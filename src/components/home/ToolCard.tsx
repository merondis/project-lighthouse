import { ToolConfig } from "@/types/tool";
import { Button } from "@/components/ui/Button";

export function ToolCard({ tool }: { tool: ToolConfig }) {
  const isLive = tool.status === "live";

  return (
    <div className="flex flex-col rounded-xl border border-white/5 bg-brand-card p-6">
      <p className="flex items-center gap-2 text-lg font-semibold text-white">
        <span>{tool.icon}</span>
        {tool.title}
      </p>
      <p className="mt-2 flex-1 text-sm text-brand-secondary">{tool.shortDescription}</p>

      <div className="mt-6">
        {isLive ? (
          <Button href={`/tools/${tool.category}/${tool.slug}`}>Open Tool</Button>
        ) : (
          <span className="text-sm font-medium text-brand-secondary">Coming Soon</span>
        )}
      </div>
    </div>
  );
}