import Link from "next/link";
import { Category } from "@/data/categories";
import { getCategoryIcon } from "@/lib/icons";
import { getToolsByCategory } from "@/data/tools/registry";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = getCategoryIcon(category.slug);
  const toolCount = getToolsByCategory(category.slug).filter((t) => t.status === "live").length;

  return (
    <Link
      href={`/tools/${category.slug}`}
      className="tool-card flex h-full flex-col items-center rounded-xl border border-white/5 bg-brand-card p-6 text-center"
      >
      <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-bg text-brand-accent">
        <Icon className="h-7 w-7" strokeWidth={2.25} />
      </span>
      <p className="mt-3 font-semibold text-white">
        {category.name} <span className="text-brand-secondary">({toolCount})</span>
      </p>
      <p className="mt-1 text-xs text-brand-secondary">{category.description}</p>
    </Link>
  );
}