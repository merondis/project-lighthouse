import { FaqItem, ToolConfig } from "@/types/tool";
import { SITE } from "./seo";

export function buildFaqSchema(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function buildSoftwareAppSchema(tool: ToolConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.title,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    description: tool.metaDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function buildHowToSchema(tool: ToolConfig) {
  const hasInputs = Boolean(tool.inputFields && tool.inputFields.length > 0);

  const steps = hasInputs
    ? [
        {
          "@type": "HowToStep",
          name: "Enter your values",
          text: "Fill in the required fields with your values.",
        },
        {
          "@type": "HowToStep",
          name: "Calculate",
          text: "Click the Calculate button to see your result instantly.",
        },
        {
          "@type": "HowToStep",
          name: "Review your result",
          text: "View the calculated result, which updates instantly based on your inputs.",
        },
      ]
    : [
        {
          "@type": "HowToStep",
          name: "Open the tool",
          text: "Open the tool and provide the required input.",
        },
        {
          "@type": "HowToStep",
          name: "View your result",
          text: "The result is generated automatically and shown on the page.",
        },
      ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use the " + tool.title,
    description: tool.metaDescription,
    step: steps,
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  publishedDate: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    author: {
      "@type": "Organization",
      name: "Merondis",
    },
    publisher: {
      "@type": "Organization",
      name: "Merondis",
    },
    mainEntityOfPage: SITE.url + article.path,
  };
}