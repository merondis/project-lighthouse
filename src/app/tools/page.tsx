import { Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ToolCard } from "@/components/home/ToolCard";
import { Container } from "@/components/ui/Container";
import { toolRegistry } from "@/data/tools/registry";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Free Online Tools",
  description: "Browse all free calculators and utilities available on Merondis.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <Container className="py-12">
      <SectionHeading icon={<Wrench className="h-8 w-8 text-brand-accent" />} title="Free Online Tools" subtitle="Free calculators and utilities for everyone." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {toolRegistry.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </Container>
  );
}