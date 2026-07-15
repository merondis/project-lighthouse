import Link from "next/link";
import { Category } from "@/data/categories";
import { getCategoryIcon } from "@/lib/icons";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = getCategoryIcon(category.slug);

  return (
    <Link
      href={`/tools/${category.slug}`}
      className="flex h-full flex-col items-center rounded-xl border border-white/5 bg-brand-card p-6 text-center transition-colors hover:border-brand-accent/50"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-bg text-brand-accent">
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-3 font-semibold text-white">{category.name}</p>
      <p className="mt-1 text-xs text-brand-secondary">{category.description}</p>
    </Link>
  );
}