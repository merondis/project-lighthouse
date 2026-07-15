import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ToolCard } from "@/components/home/ToolCard";
import { blogPosts, getBlogPostBySlug } from "@/data/blog/posts";
import { toolRegistry } from "@/data/tools/registry";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      ...buildMetadata({
        title: "Post Not Found",
        description: "This blog post could not be found.",
        path: `/blog/${slug}`,
      }),
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedTools = post.relatedToolSlugs
    .map((toolSlug) => toolRegistry.find((t) => t.slug === toolSlug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <p className="text-xs text-brand-secondary">
          {new Date(post.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>

        <div className="mt-8 flex flex-col gap-4">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-brand-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedTools.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white">Related Tools</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <Link href="/blog" className="text-sm text-brand-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </Container>
  );
}