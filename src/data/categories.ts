import { ToolCategorySlug } from "@/types/tool";

export interface Category {
  slug: ToolCategorySlug;
  name: string;
  description: string;
  icon: string;
  intro: string;
}

export const categories: Category[] = [
  {
    slug: "finance",
    name: "Finance",
    icon: "💰",
    description: "Loan, EMI, GST, interest and financial calculators.",
    intro:
      "Our finance calculators help you make sense of loans, taxes and everyday money decisions without needing a spreadsheet. Whether you're comparing loan offers with the EMI Calculator, working out how GST affects a price, or checking what a discount actually saves you, these tools use standard financial formulas and give you an instant, accurate answer. All calculations happen in your browser, so your numbers are never sent anywhere.",
  },
  {
    slug: "health",
    name: "Health",
    icon: "🏥",
    description: "BMI, calorie and other health calculators.",
    intro:
      "These calculators give you a quick, general read on common health metrics like Body Mass Index and daily calorie needs. They're built on widely used formulas such as the Mifflin-St Jeor equation for BMR, and are meant as a starting point for understanding your body, not as medical advice. For anything related to a specific health condition or goal, it's always best to check with a healthcare professional.",
  },
  {
    slug: "pdf",
    name: "PDF Tools",
    icon: "📄",
    description: "Merge, split, compress and convert PDF files.",
    intro:
      "Working with PDFs shouldn't mean installing desktop software or uploading sensitive documents to a random website. Our PDF tools, like Merge PDF and Split PDF, run entirely inside your browser using client-side processing, so your files never leave your device. That makes them a fast, private option for combining reports, extracting a few pages from a larger document, or preparing files to share.",
  },
  {
    slug: "converters",
    name: "Converters",
    icon: "🔄",
    description: "Unit, currency and file format converters.",
    intro:
      "From converting a recipe's measurements to figuring out a temperature in a different scale, unit conversion comes up constantly in everyday life and work. These converters cover length, weight and temperature using precise, standard conversion factors, with live results as you type and a one-click swap between units, so you can go back and forth without retyping anything.",
  },
  {
    slug: "developer",
    name: "Developer",
    icon: "💻",
    description: "JSON, Base64, regex and other developer utilities.",
    intro:
      "Small utilities that save real time during development: formatting and validating JSON, encoding or decoding Base64 strings, and more tools like these are on the way. Everything runs client-side, so pasting in a snippet of code or data never sends it to a server, which matters when you're working with anything from a real project.",
  },
  {
    slug: "text",
    name: "Text Tools",
    icon: "📝",
    description: "Word counters, case converters and text utilities.",
    intro:
      "Whether you're checking an essay against a word limit or reformatting text into title case for a heading, these tools handle the small, repetitive text tasks that would otherwise mean doing the counting or retyping by hand. Paste your text, get an instant result, and nothing you type is stored or transmitted anywhere.",
  },
  {
    slug: "ai",
    name: "AI Tools",
    icon: "🤖",
    description: "AI-powered writing and productivity tools.",
    intro:
      "We're building a set of AI-assisted tools to help with writing, summarizing and everyday productivity tasks. This category is new and growing, check back soon as more tools are added.",
  },
  {
    slug: "date-time",
    name: "Date & Time",
    icon: "📅",
    description: "Age, date difference and countdown calculators.",
    intro:
      "Working out exact ages, the number of days between two dates, or counting down to an event involves more edge cases than it seems, leap years, varying month lengths, time zones. Our Date & Time tools handle that complexity for you, giving precise results in years, months, weeks and days, plus a live-updating countdown timer for upcoming events.",
  },
  {
    slug: "security",
    name: "Security",
    icon: "🔒",
    description: "Password generators and security utilities.",
    intro:
      "Good security habits start with the basics, like using a strong, unique password for every account. Our Password Generator creates random passwords with your choice of length and character types, generated entirely in your browser so the password is never transmitted or logged anywhere before you use it.",
  },
  {
    slug: "misc",
    name: "Miscellaneous",
    icon: "🧰",
    description: "Other handy free tools.",
    intro:
      "A collection of useful calculators that don't fit neatly into one category, starting with our Percentage Calculator for quick percentage-of, percentage-change and comparison calculations. More general-purpose tools will be added here over time.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}