import { ExplanationSection } from "@/types/tool";

export function ToolExplanation({ sections }: { sections?: ExplanationSection[] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white">How It Works</h2>
      <div className="mt-6 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
            <div className="mt-3 flex flex-col gap-3">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-brand-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}