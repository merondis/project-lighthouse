import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/home/ToolCard";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { categories, getCategory } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools/registry";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  return buildMetadata({
    title: category ? `${category.name} Tools` : "Tools",
    description: category?.description ?? "Free online tools and calculators.",
    path: `/tools/${categorySlug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) notFound();

  const tools = getToolsByCategory(categorySlug);

  return (
    <Container className="py-12">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: category.name, href: `/tools/${category.slug}` },
        ]}
      />

      <SectionHeading icon={category.icon} title={`${category.name} Tools`} subtitle={category.description} />

      {tools.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="text-brand-secondary">No tools in this category yet. Check back soon.</p>
      )}
    </Container>
  );
}