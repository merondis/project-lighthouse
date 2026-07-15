import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Articles and guides on calculators, finance, health and everyday tools from Merondis.",
  path: "/blog",
});

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon="📰" title="Blog" subtitle="Guides and explainers on calculators, finance, health and more." />

        <div className="flex flex-col gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="tool-card rounded-xl border border-white/5 bg-brand-card p-6"
            >
              <p className="text-xs text-brand-secondary">
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-brand-secondary">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}