import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the Merondis team for feedback, suggestions or support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <SectionHeading icon={<Mail className="h-8 w-8 text-brand-accent" />} title="Contact Us" />

        <p className="text-brand-secondary">
          Have feedback, found a bug, or want to suggest a new tool? We&apos;d love to hear from you.
        </p>

        <div className="mt-8 rounded-xl border border-white/5 bg-brand-card p-6">
          <p className="text-sm font-medium text-white">Email</p>
          <a href="mailto:support@merondis.com" className="mt-1 inline-block text-brand-accent hover:underline">support@merondis.com</a>
        </div>

        <p className="mt-6 text-sm text-brand-secondary">
          We aim to respond to all inquiries within 2–3 business days.
        </p>
      </div>
    </Container>
  );
}