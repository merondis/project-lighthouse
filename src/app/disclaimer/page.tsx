import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Important disclaimer information regarding the use of Merondis calculators and tools.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon="⚠️" title="Disclaimer" />

        <div className="space-y-6 text-brand-secondary">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">General Information Only</h2>
            <p>
              The calculators and tools on Merondis are provided for general informational purposes
              only. They are not a substitute for professional financial, medical, legal, or other
              expert advice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Financial Calculators</h2>
            <p>
              Results from EMI, loan, GST, and other financial calculators are estimates only and may
              not reflect actual rates, fees, or terms offered by financial institutions. Always
              consult a qualified financial advisor before making financial decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Health Calculators</h2>
            <p>
              Tools such as the BMI calculator provide general estimates and should not be used as a
              substitute for professional medical advice, diagnosis, or treatment. Always consult a
              qualified healthcare provider for medical concerns.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">No Liability</h2>
            <p>
              We make reasonable efforts to ensure accuracy but do not guarantee that results are
              error-free. Use of any tool on this site is at your own risk.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}