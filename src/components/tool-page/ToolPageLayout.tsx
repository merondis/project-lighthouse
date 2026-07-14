import { SplitPdfWidget } from "@/components/tool-page/SplitPdfWidget";
import { MergePdfWidget } from "@/components/tool-page/MergePdfWidget";
import { ToolConfig } from "@/types/tool";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AdSensePlaceholder } from "@/components/ads/AdSensePlaceholder";
import { CalculatorWidget } from "@/components/tool-page/CalculatorWidget";
import { CountdownWidget } from "@/components/tool-page/CountdownWidget";
import { UnitConverterWidget } from "@/components/tool-page/UnitConverterWidget";
import { ToolFAQ } from "@/components/tool-page/ToolFAQ";
import { RelatedTools } from "@/components/tool-page/RelatedTools";
import { getCategory } from "@/data/categories";

function renderWidget(tool: ToolConfig) {
  if (tool.widgetType === "countdown") return <CountdownWidget />;
  if (tool.widgetType === "unitConverter") {
    return <UnitConverterWidget category={tool.converterCategory ?? "length"} />;
  }
  if (tool.widgetType === "mergePdf") return <MergePdfWidget />;
  if (tool.widgetType === "splitPdf") return <SplitPdfWidget />;
  return <CalculatorWidget slug={tool.slug} />;
}

export function ToolPageLayout({ tool }: { tool: ToolConfig }) {
  const category = getCategory(tool.category);

  return (
    <Container className="py-12">
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
          <div className="mb-3 text-4xl">{tool.icon}</div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{tool.h1}</h1>
          <p className="mt-3 text-brand-secondary">{tool.intro}</p>
        </div>

        <div className="my-8">
          <AdSensePlaceholder />
        </div>

        {tool.status === "live" ? (
          renderWidget(tool)
        ) : (
          <div className="rounded-xl border border-white/5 bg-brand-card p-10 text-center">
            <p className="text-lg font-semibold text-white">This tool is coming soon.</p>
            <p className="mt-2 text-sm text-brand-secondary">
              We&apos;re actively building this calculator. Check back shortly.
            </p>
          </div>
        )}

        <div className="my-8">
          <AdSensePlaceholder />
        </div>

        <ToolFAQ faqs={tool.faqs} />
        <RelatedTools slugs={tool.relatedSlugs} />

        <div className="mt-12">
          <AdSensePlaceholder />
        </div>
      </div>
    </Container>
  );
}