import { FaqItem } from "@/types/tool";

export function ToolFAQ({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-lg border border-white/5 bg-brand-card p-5">
            <summary className="cursor-pointer font-medium text-white">{faq.question}</summary>
            <p className="mt-3 text-sm text-brand-secondary">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}