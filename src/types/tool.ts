export type ToolCategorySlug =
  | "finance"
  | "health"
  | "pdf"
  | "converters"
  | "developer"
  | "text"
  | "ai"
  | "date-time"
  | "security"
  | "misc";

export type ToolStatus = "live" | "comingSoon";

export interface InputFieldConfig {
  key: string;
  label: string;
  type: "number" | "date" | "select" | "text";
  unit?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: string }[];
  defaultValue?: string | number;
}

export interface ResultFieldConfig {
  key: string;
  label: string;
  unit?: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ToolConfig {
  slug: string;
  category: ToolCategorySlug;
  title: string;
  shortDescription: string;
  metaDescription: string;
  h1: string;
  intro: string;
  icon: string;
  status: ToolStatus;
  inputFields?: InputFieldConfig[];
  resultFields?: ResultFieldConfig[];
  calculate?: (
    inputs: Record<string, string | number>
  ) => Record<string, string | number>;
  faqs: FaqItem[];
  relatedSlugs: string[];
}