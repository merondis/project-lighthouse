import { ShareEmbedWidget } from "@/components/tool-page/ShareEmbedWidget";
import { ReferenceTable } from "@/components/tool-page/ReferenceTable";
import { ToolExplanation } from "@/components/tool-page/ToolExplanation";
import { RecordRecentTool } from "@/components/tool-page/RecordRecentTool";
import { PrintButton } from "@/components/ui/PrintButton";
import { getToolIcon } from "@/lib/icons";
import { ToolConfig } from "@/types/tool";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AdSensePlaceholder } from "@/components/ads/AdSensePlaceholder";
import { ToolFAQ } from "@/components/tool-page/ToolFAQ";
import { RelatedTools } from "@/components/tool-page/RelatedTools";
import { getCategory } from "@/data/categories";
import { renderToolWidget } from "@/lib/renderToolWidget";

export function ToolPageLayout({ tool }: { tool: ToolConfig }) {
  const category = getCategory(tool.category);

  return (
    <Container className="py-12">
      <RecordRecentTool slug={tool.slug} />
      <div className="mx-auto max-w-3xl">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Tools", href: "/tools" },
            { name: category?.name ?? tool.category, href: `/tools/${tool.category}` },
            { name: tool.title, href: `/tools/${tool.category}/${tool.slug}` },
          ]}
        />

        <div className="text-center sm:text-left">
          {(() => {
            const Icon = getToolIcon(tool.slug);
            return (
              <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-card text-brand-accent">
                <Icon className="h-7 w-7" />
              </span>
            );
          })()}
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{tool.h1}</h1>
          <p className="mt-3 text-brand-secondary">{tool.intro}</p>
        </div>

        {tool.status === "live" ? (
          <ShareEmbedWidget toolTitle={tool.title} toolPath={"/tools/" + tool.category + "/" + tool.slug} />
        ) : null}

        <div className="my-8">
          <AdSensePlaceholder />
        </div>

        {tool.status === "live" ? (
          renderToolWidget(tool)
        ) : (
          <div className="rounded-xl border border-white/5 bg-brand-card p-10 text-center">
            <p className="text-lg font-semibold text-white">This tool is coming soon.</p>
            <p className="mt-2 text-sm text-brand-secondary">
              We&apos;re actively building this calculator. Check back shortly.
            </p>
          </div>
        )}

        {tool.widgetType === "unitConverter" && tool.converterCategory ? (
          <ReferenceTable category={tool.converterCategory} />
        ) : null}

        <div className="my-8">
          <AdSensePlaceholder />
        </div>

        {tool.status === "live" ? (
          <div className="mb-8 flex justify-center">
            <PrintButton />
          </div>
        ) : null}

        <ToolExplanation sections={tool.explanation} />

        <ToolFAQ faqs={tool.faqs} />
        <RelatedTools slugs={tool.relatedSlugs} />

        <div className="mt-12">
          <AdSensePlaceholder />
        </div>
      </div>
    </Container>
  );
}