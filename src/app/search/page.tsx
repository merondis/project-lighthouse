import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { SearchResults } from "@/components/home/SearchResults";

export const metadata = {
  ...buildMetadata({
    title: "Search Tools",
    description: "Search all free calculators, converters and developer tools on Merondis.",
    path: "/search",
  }),
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon="🔍" title="Search Tools" subtitle="Find any calculator or tool on Merondis." />
        <Suspense fallback={<p className="text-brand-secondary">Loading...</p>}>
          <SearchResults />
        </Suspense>
      </div>
    </Container>
  );
}