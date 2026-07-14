import { ToolCategorySlug } from "@/types/tool";

export interface Category {
  slug: ToolCategorySlug;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: "finance", name: "Finance", icon: "💰", description: "Loan, EMI, GST, interest and financial calculators." },
  { slug: "health", name: "Health", icon: "🏥", description: "BMI, calorie and other health calculators." },
  { slug: "pdf", name: "PDF Tools", icon: "📄", description: "Merge, split, compress and convert PDF files." },
  { slug: "converters", name: "Converters", icon: "🔄", description: "Unit, currency and file format converters." },
  { slug: "developer", name: "Developer", icon: "💻", description: "JSON, Base64, regex and other developer utilities." },
  { slug: "text", name: "Text Tools", icon: "📝", description: "Word counters, case converters and text utilities." },
  { slug: "ai", name: "AI Tools", icon: "🤖", description: "AI-powered writing and productivity tools." },
  { slug: "date-time", name: "Date & Time", icon: "📅", description: "Age, date difference and countdown calculators." },
  { slug: "security", name: "Security", icon: "🔒", description: "Password generators and security utilities." },
  { slug: "misc", name: "Miscellaneous", icon: "🧰", description: "Other handy free tools." },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}