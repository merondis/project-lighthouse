import { notFound } from "next/navigation";
import { ToolPageLayout } from "@/components/tool-page/ToolPageLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { getToolBySlug, toolRegistry } from "@/data/tools/registry";
import { getCategory } from "@/data/categories";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildSoftwareAppSchema } from "@/lib/schema";

export function generateStaticParams() {
  return toolRegistry.map((tool) => ({ category: tool.category, slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== category) {
    return buildMetadata({
      title: "Tool Not Found",
      description: "This tool could not be found.",
      path: `/tools/${category}/${slug}`,
    });
  }

  return buildMetadata({
    title: tool.title,
    description: tool.metaDescription,
    path: `/tools/${tool.category}/${tool.slug}`,
  });
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== category) notFound();

  const categoryData = getCategory(tool.category);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: categoryData?.name ?? tool.category, path: `/tools/${tool.category}` },
    { name: tool.title, path: `/tools/${tool.category}/${tool.slug}` },
  ]);

  const faqSchema = buildFaqSchema(tool.faqs);
  const appSchema = buildSoftwareAppSchema(tool);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={appSchema} />
      <JsonLd data={faqSchema} />
      <ToolPageLayout tool={tool} />
    </>
  );
}