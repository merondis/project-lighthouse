import { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { toolRegistry } from "@/data/tools/registry";
import { blogPosts } from "@/data/blog/posts";

const SITE_URL = "https://merondis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/tools", "/categories", "/blog", "/contact", "/privacy-policy", "/terms", "/disclaimer"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const categoryPages = categories.map((category) => ({
    url: `${SITE_URL}/tools/${category.slug}`,
    lastModified: new Date(),
  }));

  const toolPages = toolRegistry
    .filter((tool) => tool.status === "live")
    .map((tool) => ({
      url: `${SITE_URL}/tools/${tool.category}/${tool.slug}`,
      lastModified: new Date(),
    }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...blogPages];
}