import Link from "next/link";
import { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/tools/${category.slug}`}
      className="rounded-xl border border-white/5 bg-brand-card p-6 text-center transition-colors hover:border-brand-accent/50"
    >
      <div className="text-2xl">{category.icon}</div>
      <p className="mt-2 font-semibold text-white">{category.name}</p>
      <p className="mt-1 text-xs text-brand-secondary">{category.description}</p>
    </Link>
  );
}