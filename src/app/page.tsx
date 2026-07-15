import { RecentlyViewedTools } from "@/components/home/RecentlyViewedTools";
import { PopularTools } from "@/components/home/PopularTools";
import { Hero } from "@/components/home/Hero";
import { CategoryCard } from "@/components/home/CategoryCard";
import { AdSensePlaceholder } from "@/components/ads/AdSensePlaceholder";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free Online Calculators & Tools",
  description:
    "Merondis offers free online calculators, converters and developer tools. No signup required.",
  path: "/",
});

export default function HomePage() {
  return (
    <Container>
<Hero />

      <RecentlyViewedTools />

      <PopularTools />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      <div className="my-16">
        <AdSensePlaceholder />
      </div>
    </Container>
  );
}