import { ToolConfig } from "@/types/tool";
import { Button } from "@/components/ui/Button";
import { getToolIcon } from "@/lib/icons";

export function ToolCard({ tool }: { tool: ToolConfig }) {
  const isLive = tool.status === "live";
  const Icon = getToolIcon(tool.slug);

  return (
    <div className="flex h-full flex-col rounded-xl border border-white/5 bg-brand-card p-6 transition-shadow hover:shadow-lg hover:shadow-black/20">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-bg text-brand-accent">
          <Icon className="h-5 w-5" />
        </span>
        <p className="text-lg font-semibold text-white">{tool.title}</p>
      </div>

      <p className="mt-3 flex-1 text-sm text-brand-secondary">{tool.shortDescription}</p>

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