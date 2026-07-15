import { LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/home/CategoryCard";
import { categories } from "@/data/categories";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description: "Browse all tool categories on Merondis.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <Container className="py-12">
      <SectionHeading icon={<LayoutGrid className="h-8 w-8 text-brand-accent" />} title="Categories" subtitle="Browse tools by category." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </Container>
  );
}