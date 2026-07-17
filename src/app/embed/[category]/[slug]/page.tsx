import { notFound } from "next/navigation";
import Link from "next/link";
import { getToolBySlug } from "@/data/tools/registry";
import { renderToolWidget } from "@/lib/renderToolWidget";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  return {
    title: tool ? tool.title + " | Merondis" : "Tool | Merondis",
    robots: { index: false, follow: false },
  };
}

export default async function EmbedToolPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== category || tool.status !== "live") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-bg p-4 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl">{tool.icon}</span>
          <h1 className="text-xl font-bold text-white">{tool.h1}</h1>
        </div>

        {renderToolWidget(tool)}

        <div className="mt-4 text-center">
          <Link
            href={"https://merondis.com/tools/" + tool.category + "/" + tool.slug}
            target="_blank"
            rel="noopener"
            className="text-xs text-brand-secondary hover:text-brand-accent"
          >
            Powered by Merondis — View full tool and more calculators →
          </Link>
        </div>
      </div>
    </div>
  );
}