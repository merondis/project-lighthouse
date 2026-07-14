import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the Merondis privacy policy to understand how we handle your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon="🔒" title="Privacy Policy" />

        <div className="space-y-6 text-brand-secondary">
          <p>Last updated: {new Date().getFullYear()}</p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Information We Collect</h2>
            <p>
              Merondis (Project Lighthouse) does not require account registration to use our free
              tools. We may collect anonymous usage data through analytics services (such as Google
              Analytics) to understand how visitors use our site and improve our tools.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Cookies &amp; Advertising</h2>
            <p>
              We use cookies to operate the site and may use Google AdSense to display
              advertisements. Google and its partners may use cookies to serve ads based on your
              prior visits to this or other websites. You can opt out of personalized advertising by
              visiting Google&apos;s Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Data Security</h2>
            <p>
              We do not store any personal data you enter into our calculators. All calculations are
              performed locally in your browser and are not transmitted to or stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-white">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@merondis.com" className="text-brand-accent hover:underline">
                support@merondis.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}