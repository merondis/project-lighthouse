import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Read the terms of service for using Merondis and Project Lighthouse tools.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon="📜" title="Terms of Service" />

        <div className="space-y-6 text-brand-secondary">
          <p>Last updated: {new Date().getFullYear()}</p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Acceptance of Terms</h2>
            <p>
              By accessing and using Merondis (Project Lighthouse), you agree to be bound by these
              Terms of Service. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Use of Tools</h2>
            <p>
              Our calculators and tools are provided free of charge for personal and professional
              use. You may not use this site for any unlawful purpose or to violate any applicable
              laws.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">No Warranty</h2>
            <p>
              All tools are provided &quot;as is&quot; without warranty of any kind. We make no
              guarantees regarding the accuracy, completeness, or reliability of any calculation
              results.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Limitation of Liability</h2>
            <p>
              Merondis shall not be liable for any damages arising from the use or inability to use
              our tools, including but not limited to financial, health, or professional decisions
              made based on calculator results.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Continued use of the
              site after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}