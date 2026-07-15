import { Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn more about Merondis — free online calculators and tools for everyone.",
  path: "/about",
});

const GOALS = [
  "100% Free Tools",
  "Fast Loading",
  "No Registration",
  "Mobile Friendly",
  "Easy to Use",
];

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon={<Rocket className="h-8 w-8 text-brand-accent" />} title="About Merondis" />

        <p className="text-brand-secondary">
          Merondis is a growing collection of free online tools, calculators and developer
          utilities designed to help students, professionals, businesses and everyday users solve
          problems quickly.
        </p>

        <p className="mt-6 font-medium text-white">Our goal is simple:</p>

        <ul className="mt-4 space-y-3">
          {GOALS.map((goal) => (
            <li key={goal} className="flex items-center gap-3 text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-green-500 text-xs text-white">
                ✓
              </span>
              {goal}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-brand-secondary">More tools are being added regularly.</p>
      </div>
    </Container>
  );
}