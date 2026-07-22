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
  | "misc"
  | "math"
  | "construction";

export type ToolStatus = "live" | "comingSoon";

export interface InputFieldConfig {
  key: string;
  label: string;
  type: "number" | "date" | "datetime" | "select" | "text" | "textarea" | "checkbox";
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
  wide?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ExplanationSection {
  heading: string;
  paragraphs: string[];
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
  featured?: boolean;
  widgetType?:
    | "standard"
    | "countdown"
    | "unitConverter"
    | "mergePdf"
    | "splitPdf"
    | "currencyConverter"
    | "compressPdf"
    | "aiText"
    | "amortization"
    | "regexTester"
    | "hexRgbConverter"
    | "pdfToJpg"
    | "jpgToPdf"
    | "textDiff"
    | "rotatePdf"
    | "markdownPreview"
    | "scientificCalculator"
    | "debtPayoff"
    | "contrastChecker"
    | "colorPalette"
    | "fontSignature"
    | "handwrittenSignature"
    | "emailSignature"
    | "watermarkPdf"
    | "bmi";
  amortizationTenureUnit?: "months" | "years";
  aiSystemPrompt?: string;
  aiActionLabel?: string;
  aiPlaceholder?: string;
converterCategory?: "length" | "weight" | "temperature" | "dataStorage" | "volume" | "speed" | "area";
  inputFields?: InputFieldConfig[];
  resultFields?: ResultFieldConfig[];
calculate?: (
    inputs: Record<string, string | number>
  ) => Record<string, string | number>;
  interpret?: (
    result: Record<string, string | number>,
    inputs: Record<string, string | number>
  ) => string[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  explanation?: ExplanationSection[];
}