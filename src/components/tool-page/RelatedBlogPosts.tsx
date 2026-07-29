import Link from "next/link";
import { blogPosts } from "@/data/blog/posts";

export function RelatedBlogPosts({ slugs }: { slugs?: string[] }) {
  if (!slugs || slugs.length === 0) return null;

  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white">Further Reading</h2>
      <div className="mt-6 flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={"/blog/" + post.slug}
            className="tool-card rounded-lg border border-white/5 bg-brand-card p-5"
          >
            <p className="font-medium text-white">{post.title}</p>
            <p className="mt-1 text-sm text-brand-secondary">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}