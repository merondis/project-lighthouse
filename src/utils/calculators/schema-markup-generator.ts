export type SchemaType = "Article" | "Product" | "LocalBusiness" | "FAQPage";

export interface SchemaMarkupInputs {
  schemaType: SchemaType;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  authorName: string;
  datePublished: string;
  price: string;
  currency: string;
  availability: string;
  brand: string;
  phone: string;
  address: string;
  priceRange: string;
  faqPairs: string;
}

// Builds JSON-LD structured data for one of four common schema.org types.
// Scoped to these four (rather than the full schema.org vocabulary) to
// keep the generator simple and focused on the most commonly requested
// SEO structured data types.
export function generateSchemaMarkup(inputs: SchemaMarkupInputs): string {
  const { schemaType } = inputs;

  if (schemaType === "Article") {
    if (!inputs.name.trim()) throw new Error("Please enter a headline.");
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: inputs.name.trim(),
    };
    if (inputs.description.trim()) schema.description = inputs.description.trim();
    if (inputs.imageUrl.trim()) schema.image = inputs.imageUrl.trim();
    if (inputs.authorName.trim()) schema.author = { "@type": "Person", name: inputs.authorName.trim() };
    if (inputs.datePublished.trim()) schema.datePublished = inputs.datePublished.trim();
    if (inputs.url.trim()) schema.url = inputs.url.trim();
    return wrapJsonLd(schema);
  }

  if (schemaType === "Product") {
    if (!inputs.name.trim()) throw new Error("Please enter a product name.");
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: inputs.name.trim(),
    };
    if (inputs.description.trim()) schema.description = inputs.description.trim();
    if (inputs.imageUrl.trim()) schema.image = inputs.imageUrl.trim();
    if (inputs.brand.trim()) schema.brand = { "@type": "Brand", name: inputs.brand.trim() };
    if (inputs.price.trim()) {
      const priceNum = Number(inputs.price.trim());
      if (Number.isNaN(priceNum) || priceNum < 0) throw new Error("Price must be a valid non-negative number.");
      schema.offers = {
        "@type": "Offer",
        price: inputs.price.trim(),
        priceCurrency: inputs.currency.trim() || "USD",
        availability: `https://schema.org/${inputs.availability.trim() || "InStock"}`,
        ...(inputs.url.trim() ? { url: inputs.url.trim() } : {}),
      };
    }
    return wrapJsonLd(schema);
  }

  if (schemaType === "LocalBusiness") {
    if (!inputs.name.trim()) throw new Error("Please enter a business name.");
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: inputs.name.trim(),
    };
    if (inputs.imageUrl.trim()) schema.image = inputs.imageUrl.trim();
    if (inputs.address.trim()) schema.address = inputs.address.trim();
    if (inputs.phone.trim()) schema.telephone = inputs.phone.trim();
    if (inputs.priceRange.trim()) schema.priceRange = inputs.priceRange.trim();
    if (inputs.url.trim()) schema.url = inputs.url.trim();
    return wrapJsonLd(schema);
  }

  // FAQPage
  const pairs = inputs.faqPairs
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  if (pairs.length === 0) {
    throw new Error('Please enter at least one question and answer, one per line, formatted as "Question|Answer".');
  }
  const mainEntity = pairs.map((line) => {
    const idx = line.indexOf("|");
    if (idx === -1) {
      throw new Error(`Each line must be formatted as "Question|Answer": "${line}"`);
    }
    const question = line.slice(0, idx).trim();
    const answer = line.slice(idx + 1).trim();
    if (!question || !answer) throw new Error(`Both question and answer are required: "${line}"`);
    return {
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
  return wrapJsonLd(schema);
}

function wrapJsonLd(schema: unknown): string {
  return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
}
