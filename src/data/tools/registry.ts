import { calculateRoi } from "@/utils/calculators/roi-calculator";
import { calculateMarkup } from "@/utils/calculators/markup-calculator";
import { processUrlEncoding, UrlEncodeAction } from "@/utils/calculators/url-encoder";
import { calculateStackedDiscounts } from "@/utils/calculators/discount-stack-calculator";
import { calculateExtraPaymentImpact } from "@/utils/calculators/extra-payment-calculator";
import { calculateTakeHomeSalary } from "@/utils/calculators/salary-calculator";
import { calculateSalesTax } from "@/utils/calculators/sales-tax-calculator";
import { calculateFuelCost } from "@/utils/calculators/fuel-cost-calculator";
import { calculateSimpleInterest } from "@/utils/calculators/simple-interest-calculator";
import { generateRandomNumbers } from "@/utils/calculators/random-number-generator";
import { calculateCompoundInterest, CompoundFrequency } from "@/utils/calculators/compound-interest-calculator";
import { calculateTip } from "@/utils/calculators/tip-calculator";
import { formatJson, JsonAction } from "@/utils/calculators/json-formatter";
import { processBase64, Base64Action } from "@/utils/calculators/base64-tool";
import { calculateBmr, ActivityLevel, Gender } from "@/utils/calculators/bmr-calculator";
import { countWords } from "@/utils/calculators/word-counter";
import { convertCase, CaseMode } from "@/utils/calculators/case-converter";
import { generatePassword } from "@/utils/calculators/password-generator";
import { calculateDateDifference } from "@/utils/calculators/date-calculator";
import { calculateDiscount } from "@/utils/calculators/discount-calculator";
import { calculateGst, GstMode } from "@/utils/calculators/gst-calculator";
import { calculateEmi } from "@/utils/calculators/emi-calculator";
import { calculateLoan } from "@/utils/calculators/loan-calculator";
import { calculatePercentage, PercentageMode } from "@/utils/calculators/percentage-calculator";
import { calculateBmi } from "@/utils/calculators/bmi-calculator";
import { ToolConfig } from "@/types/tool";
import { calculateAge } from "@/utils/calculators/age-calculator";

export const toolRegistry: ToolConfig[] = [
  {
    slug: "age-calculator",
    category: "date-time",
    title: "Age Calculator",
    shortDescription: "Calculate your exact age in years, months, weeks and days.",
    metaDescription:
      "Free online age calculator. Find your exact age in years, months, weeks and days from your date of birth.",
    h1: "Age Calculator",
    intro:
      "Enter your date of birth to instantly calculate your exact age in years, months and days, along with your total age in weeks and days.",
    icon: "🎂",
    status: "live",
    featured: true,
    inputFields: [
      { key: "birthDate", label: "Date of Birth", type: "date" },
      { key: "toDate", label: "Age at Date (optional)", type: "date" },
    ],
    resultFields: [
      { key: "years", label: "Years", highlight: true },
      { key: "months", label: "Months", highlight: true },
      { key: "days", label: "Days", highlight: true },
      { key: "totalMonths", label: "Total Months" },
      { key: "totalWeeks", label: "Total Weeks" },
      { key: "totalDays", label: "Total Days" },
    ],
    calculate: (inputs) => {
      const birthDate = String(inputs.birthDate ?? "");
      const toDate = inputs.toDate ? String(inputs.toDate) : undefined;
      const result = calculateAge(birthDate, toDate);
      return { ...result };
    },
        explanation: [
      {
        heading: "How age is calculated",
        paragraphs: [
          "This calculator finds the difference between your date of birth and a target date (today, by default) by counting complete years, then complete months within the remaining time, then the remaining days.",
          "For example, someone born on March 15, 2000, checking their age on July 15, 2026, has completed 26 full years (March 2000 to March 2026), plus 4 more complete months (March to July), plus 0 remaining days, giving 26 years, 4 months, 0 days.",
        ],
      },
      {
        heading: "Why this differs from a simple day count",
        paragraphs: [
          "A naive approach might divide total days by 365.25, but this doesn't match how people actually express age. This calculator instead counts real calendar years, months and days, correctly handling that months have different lengths and that leap years add an extra day roughly every four years.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is age calculated?",
        answer:
          "Age is calculated by finding the difference between your date of birth and today's date (or a chosen date), accounting for varying month lengths and leap years.",
      },
      {
        question: "Can I calculate age on a future date?",
        answer:
          "Yes. Enter a future date in the 'Age at Date' field to see how old you will be on that date.",
      },
      {
        question: "Is this age calculator accurate?",
        answer:
          "Yes, it accounts for leap years and different month lengths to give you a precise breakdown in years, months and days.",
      },
    ],
    relatedSlugs: ["date-calculator", "countdown-timer", "bmi-calculator"],
  },
  {
    slug: "percentage-calculator",
    category: "misc",
    title: "Percentage Calculator",
    shortDescription: "Calculate percentages instantly.",
    metaDescription: "Free online percentage calculator to find percentages, percentage increase/decrease and more.",
    h1: "Percentage Calculator",
    intro: "Calculate percentages, percentage change, and percentage of a number quickly and accurately.",
    icon: "📊",
    status: "live",
    inputFields: [
      {
        key: "mode",
        label: "Calculation Type",
        type: "select",
        options: [
          { label: "X% of Y", value: "percentOf" },
          { label: "X is what % of Y", value: "isWhatPercent" },
          { label: "Percentage change from X to Y", value: "percentageChange" },
        ],
      },
      { key: "valueA", label: "First Number (X)", type: "number", step: 0.01 },
      { key: "valueB", label: "Second Number (Y)", type: "number", step: 0.01 },
    ],
    resultFields: [
      { key: "result", label: "Result", unit: "%", highlight: true },
      { key: "explanation", label: "Explanation" },
    ],
    calculate: (inputs) => {
      const mode = String(inputs.mode) as PercentageMode;
      const valueA = Number(inputs.valueA);
      const valueB = Number(inputs.valueB);
      const output = calculatePercentage(mode, valueA, valueB);
      return { ...output };
    },
explanation: [
      {
        heading: "X% of Y",
        paragraphs: [
          "This is calculated as (X ÷ 100) × Y. For example, 20% of 150 is (20 ÷ 100) × 150 = 30.",
        ],
      },
      {
        heading: "X is what percent of Y",
        paragraphs: [
          "This is calculated as (X ÷ Y) × 100. For example, 30 is what percent of 150 is (30 ÷ 150) × 100 = 20%.",
        ],
      },
      {
        heading: "Percentage change from X to Y",
        paragraphs: [
          "This is calculated as ((Y − X) ÷ |X|) × 100. For example, a change from 150 to 180 is ((180 − 150) ÷ 150) × 100 = 20%, representing a 20% increase.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I calculate what percentage one number is of another?",
        answer:
          "Choose 'X is what % of Y', enter the two numbers, and the calculator divides X by Y and multiplies by 100.",
      },
      {
        question: "How is percentage change calculated?",
        answer:
          "Percentage change is calculated as (New Value − Old Value) ÷ Old Value × 100, showing the increase or decrease as a percentage.",
      },
      {
        question: "Can this calculator handle negative numbers?",
        answer: "Yes, it works with negative numbers for all three calculation types.",
      },
    ],
    relatedSlugs: ["age-calculator", "discount-calculator"],
  },
  {
    slug: "simple-interest-calculator",
    category: "finance",
    title: "Simple Interest Calculator",
    shortDescription: "Calculate simple interest on a principal amount.",
    metaDescription: "Free online simple interest calculator to calculate interest earned or owed on a principal amount.",
    h1: "Simple Interest Calculator",
    intro: "Calculate simple interest based on principal, rate and time, without compounding.",
    icon: "💵",
    status: "live",
    inputFields: [
      { key: "principal", label: "Principal Amount", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 5" },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "interestAmount", label: "Interest Amount", highlight: true },
      { key: "totalAmount", label: "Total Amount", highlight: true },
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const output = calculateSimpleInterest(principal, annualRate, years);
      return { ...output };
    },
    faqs: [
      {
        question: "What is the difference between simple and compound interest?",
        answer:
          "Simple interest is calculated only on the original principal for the entire period, while compound interest is calculated on the principal plus any accumulated interest, causing it to grow faster over time.",
      },
      {
        question: "When is simple interest commonly used?",
        answer:
          "Simple interest is commonly used for short-term loans, certain bonds, and some auto loans, where interest doesn't compound over the loan term.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "emi-calculator"],
  },
  {
    slug: "random-number-generator",
    category: "misc",
    title: "Random Number Generator",
    shortDescription: "Generate random numbers within a range.",
    metaDescription: "Free online random number generator to generate one or more random numbers within a custom range.",
    h1: "Random Number Generator",
    intro: "Generate random numbers within a custom range, with or without duplicates.",
    icon: "🎲",
    status: "live",
    inputFields: [
      { key: "min", label: "Minimum Value", type: "number", step: 1, defaultValue: 1 },
      { key: "max", label: "Maximum Value", type: "number", step: 1, defaultValue: 100 },
      { key: "count", label: "How Many Numbers", type: "number", step: 1, defaultValue: 1 },
      {
        key: "allowDuplicates",
        label: "Allow Duplicate Numbers",
        type: "select",
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    ],
    resultFields: [{ key: "numbers", label: "Generated Numbers", wide: true }],
    calculate: (inputs) => {
      const min = Number(inputs.min);
      const max = Number(inputs.max);
      const count = Number(inputs.count);
      const allowDuplicates = String(inputs.allowDuplicates) === "true";
      const results = generateRandomNumbers({ min, max, count, allowDuplicates });
      return { numbers: results.join(", ") };
    },
    faqs: [
      {
        question: "Is this truly random?",
        answer:
          "Numbers are generated using your browser's built-in random number function, which is suitable for general purposes like games, raffles and sampling, but not for cryptographic or security-critical uses.",
      },
      {
        question: "What happens if I ask for more unique numbers than the range allows?",
        answer:
          "If you disable duplicates and request more numbers than exist in your chosen range, the tool will show an error explaining the range is too small for that count.",
      },
    ],
    relatedSlugs: ["password-generator"],
  },
  {
    slug: "text-summarizer",
    category: "ai",
    title: "AI Text Summarizer",
    shortDescription: "Summarize long text into key points using AI.",
    metaDescription: "Free AI text summarizer to condense long articles or documents into concise summaries.",
    h1: "AI Text Summarizer",
    intro: "Paste long text and get a concise AI-generated summary. Requires your own OpenAI API key.",
    icon: "✨",
    status: "live",
    widgetType: "aiText",
    aiSystemPrompt: "You are a summarization assistant. Summarize the user's text into a concise, clear summary that captures the key points, using 3-5 sentences unless the text is very short.",
    aiActionLabel: "Summarize",
    aiPlaceholder: "Paste the text you want summarized...",
    faqs: [
      {
        question: "Why do I need my own API key?",
        answer:
          "This keeps the tool free with no usage limits imposed by us. Your key is used only for your request and is never stored or logged on our servers.",
      },
      {
        question: "Where do I get an OpenAI API key?",
        answer: "Sign up at platform.openai.com and create a key under API Keys in your account settings. New accounts typically receive some free trial credit.",
      },
      {
        question: "Is my text sent anywhere else?",
        answer: "Your text and key are sent directly to OpenAI to generate the response and are not stored by Merondis.",
      },
    ],
    relatedSlugs: ["paragraph-rewriter", "word-counter"],
  },
  {
    slug: "roi-calculator",
    category: "finance",
    title: "ROI Calculator",
    shortDescription: "Calculate return on investment.",
    metaDescription: "Free online ROI calculator to calculate return on investment and net profit percentage.",
    h1: "ROI Calculator",
    intro: "Calculate the return on investment (ROI) and net profit based on your initial investment and final value.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "initialInvestment", label: "Initial Investment", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "finalValue", label: "Final Value", type: "number", step: 0.01, placeholder: "e.g. 12500" },
    ],
    resultFields: [
      { key: "roiPercent", label: "ROI", unit: "%", highlight: true },
      { key: "netProfit", label: "Net Profit", highlight: true },
    ],
    calculate: (inputs) => {
      const initialInvestment = Number(inputs.initialInvestment);
      const finalValue = Number(inputs.finalValue);
      const output = calculateRoi(initialInvestment, finalValue);
      return { ...output };
    },
    faqs: [
      {
        question: "How is ROI calculated?",
        answer: "ROI is calculated as the net profit (final value minus initial investment) divided by the initial investment, expressed as a percentage.",
      },
      {
        question: "Can ROI be negative?",
        answer: "Yes, a negative ROI means the final value is less than the initial investment, indicating a loss.",
      },
      {
        question: "Does this account for the time period of the investment?",
        answer: "No, this is a simple ROI calculation and doesn't factor in how long the investment was held. For comparing investments over different time periods, an annualized return would be more appropriate.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "simple-interest-calculator"],
  },
  {
    slug: "markup-calculator",
    category: "finance",
    title: "Markup Calculator",
    shortDescription: "Calculate selling price, profit and margin from cost and markup.",
    metaDescription: "Free online markup calculator to find selling price, profit amount and profit margin from cost price and markup percentage.",
    h1: "Markup Calculator",
    intro: "Calculate your selling price, profit, and profit margin based on cost price and markup percentage.",
    icon: "💹",
    status: "live",
    inputFields: [
      { key: "cost", label: "Cost Price", type: "number", step: 0.01, placeholder: "e.g. 50" },
      { key: "markupPercent", label: "Markup (%)", type: "number", step: 0.01, placeholder: "e.g. 40" },
    ],
    resultFields: [
      { key: "sellingPrice", label: "Selling Price", highlight: true },
      { key: "profit", label: "Profit", highlight: true },
      { key: "marginPercent", label: "Profit Margin", unit: "%" },
    ],
    calculate: (inputs) => {
      const cost = Number(inputs.cost);
      const markupPercent = Number(inputs.markupPercent);
      const output = calculateMarkup(cost, markupPercent);
      return { ...output };
    },
    faqs: [
      {
        question: "What's the difference between markup and margin?",
        answer:
          "Markup is profit expressed as a percentage of cost price, while margin is profit expressed as a percentage of selling price. They use the same profit amount but different bases, so a 40% markup is not the same as a 40% margin.",
      },
      {
        question: "Which one should I use for pricing decisions?",
        answer: "Markup is often used when setting prices from cost, while margin is often used when analyzing profitability of sales. Many businesses track both.",
      },
    ],
    relatedSlugs: ["discount-calculator", "roi-calculator"],
  },
  {
    slug: "data-storage-converter",
    category: "converters",
    title: "Data Storage Converter",
    shortDescription: "Convert between bits, bytes, KB, MB, GB and TB.",
    metaDescription: "Free online data storage converter to convert between bits, bytes, kilobytes, megabytes, gigabytes and terabytes.",
    h1: "Data Storage Converter",
    intro: "Convert digital storage measurements between bits, bytes, kilobytes, megabytes, gigabytes and terabytes.",
    icon: "💾",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "dataStorage",
    faqs: [
      {
        question: "Is this based on 1000 or 1024?",
        answer: "This calculator uses 1024 as the conversion factor between units (the binary standard commonly used by operating systems), rather than 1000 (the decimal standard sometimes used by storage manufacturers), which is why file sizes can appear slightly different between your OS and a drive's advertised capacity.",
      },
      {
        question: "Why does my hard drive show less space than advertised?",
        answer: "Manufacturers typically advertise storage using the 1000-based decimal system, while operating systems display it using the 1024-based binary system, causing an apparent (but explainable) discrepancy.",
      },
    ],
    relatedSlugs: ["length-converter", "weight-converter"],
  },
  {
    slug: "url-encoder",
    category: "developer",
    title: "URL Encoder / Decoder",
    shortDescription: "Encode or decode URL strings instantly.",
    metaDescription: "Free online URL encoder and decoder to convert text to and from URL-encoded (percent-encoded) format.",
    h1: "URL Encoder / Decoder",
    intro: "Encode text into URL-safe format, or decode a URL-encoded string back into readable text.",
    icon: "🔗",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Enter text or a URL-encoded string..." },
      {
        key: "action",
        label: "Action",
        type: "select",
        options: [
          { label: "Encode", value: "encode" },
          { label: "Decode", value: "decode" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Result", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const action = String(inputs.action) as UrlEncodeAction;
      const result = processUrlEncoding(text, action);
      return { result };
    },
    faqs: [
      {
        question: "When do I need to URL-encode text?",
        answer: "URL encoding is needed when including special characters, spaces, or symbols in a URL query string or parameter, since URLs can only safely contain a limited set of characters.",
      },
      {
        question: "What happens to spaces when encoding?",
        answer: "Spaces are converted to %20 in standard URL encoding, ensuring the URL remains valid and correctly interpreted by browsers and servers.",
      },
    ],
    relatedSlugs: ["json-formatter", "base64-tool"],
  },
  {
    slug: "paragraph-rewriter",
    category: "ai",
    title: "AI Paragraph Rewriter",
    shortDescription: "Rewrite and rephrase text using AI.",
    metaDescription: "Free AI paragraph rewriter to rephrase text while keeping the original meaning.",
    h1: "AI Paragraph Rewriter",
    intro: "Paste a paragraph and get an AI-rewritten version with different phrasing. Requires your own OpenAI API key.",
    icon: "✨",
    status: "live",
    widgetType: "aiText",
    aiSystemPrompt: "You are a rewriting assistant. Rewrite the user's text using different wording and sentence structure while preserving the original meaning and tone. Return only the rewritten text.",
    aiActionLabel: "Rewrite",
    aiPlaceholder: "Paste the paragraph you want rewritten...",
    faqs: [
      {
        question: "Will the rewritten text mean the same thing?",
        answer: "The AI is instructed to preserve the original meaning while changing the wording and structure, though it's always worth reviewing the result yourself.",
      },
      {
        question: "Why do I need my own API key?",
        answer: "This keeps the tool free with no usage limits imposed by us. Your key is used only for your request and is never stored or logged on our servers.",
      },
    ],
    relatedSlugs: ["text-summarizer", "case-converter"],
  },
  {
    slug: "json-formatter",
    category: "developer",
    title: "JSON Formatter",
    shortDescription: "Format, validate and minify JSON instantly.",
    metaDescription: "Free online JSON formatter and validator to beautify or minify JSON data instantly.",
    h1: "JSON Formatter",
    intro: "Paste your JSON to format it with proper indentation, or minify it to a single line. Also validates JSON syntax.",
    icon: "🧩",
    status: "live",
    inputFields: [
      { key: "json", label: "Your JSON", type: "textarea", placeholder: '{"example": "paste your JSON here"}' },
      {
        key: "action",
        label: "Action",
        type: "select",
        options: [
          { label: "Format / Beautify", value: "format" },
          { label: "Minify", value: "minify" },
        ],
      },
    ],
    resultFields: [
      { key: "isValid", label: "Status", highlight: true },
      { key: "output", label: "Result", wide: true },
    ],
    calculate: (inputs) => {
      const json = String(inputs.json ?? "");
      const action = String(inputs.action) as JsonAction;
      const output = formatJson(json, action);
      return { ...output };
    },
    faqs: [
      {
        question: "What happens if my JSON is invalid?",
        answer: "The tool will show an error message describing that the JSON has a syntax issue, such as a missing comma, bracket, or quotation mark.",
      },
      {
        question: "Is my JSON data sent to a server?",
        answer: "No, all formatting and validation happens entirely in your browser. Your data is never transmitted or stored.",
      },
      {
        question: "What is the difference between format and minify?",
        answer: "Format adds indentation and line breaks for readability, while minify removes all unnecessary whitespace to reduce file size.",
      },
    ],
    relatedSlugs: ["base64-tool"],
  },
  {
    slug: "base64-tool",
    category: "developer",
    title: "Base64 Encoder / Decoder",
    shortDescription: "Encode or decode Base64 text instantly.",
    metaDescription: "Free online Base64 encoder and decoder to convert text to and from Base64 format.",
    h1: "Base64 Encoder / Decoder",
    intro: "Encode plain text into Base64, or decode Base64 back into readable text.",
    icon: "🔐",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Enter text to encode or decode..." },
      {
        key: "action",
        label: "Action",
        type: "select",
        options: [
          { label: "Encode to Base64", value: "encode" },
          { label: "Decode from Base64", value: "decode" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Result", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const action = String(inputs.action) as Base64Action;
      const result = processBase64(text, action);
      return { result };
    },
    faqs: [
      {
        question: "What is Base64 encoding used for?",
        answer:
          "Base64 encoding converts binary or text data into an ASCII string format, commonly used for embedding data in URLs, emails, or JSON payloads.",
      },
      {
        question: "Does this tool support Unicode characters?",
        answer: "Yes, this tool correctly encodes and decodes Unicode text, including accented characters and emoji.",
      },
      {
        question: "Is Base64 encoding a form of encryption?",
        answer: "No, Base64 is not encryption or security, it is simply a reversible encoding format and should not be used to protect sensitive data.",
      },
    ],
    relatedSlugs: ["json-formatter"],
  },
  {
    slug: "merge-pdf",
    category: "pdf",
    title: "Merge PDF",
    shortDescription: "Combine multiple PDF files into one.",
    metaDescription: "Free online tool to merge multiple PDF files into a single PDF document, directly in your browser.",
    h1: "Merge PDF",
    intro: "Combine multiple PDF files into a single document. Reorder files before merging, all processed securely in your browser.",
    icon: "📎",
    status: "live",
    featured: true,
    widgetType: "mergePdf",
    faqs: [
      {
        question: "Are my files uploaded to a server?",
        answer: "No, all merging happens directly in your browser using client-side processing. Your files are never uploaded anywhere.",
      },
      {
        question: "Can I change the order of the pages before merging?",
        answer: "Yes, use the up and down arrows next to each file to reorder them before merging. Files are combined in the order shown.",
      },
      {
        question: "Is there a limit to how many PDFs I can merge?",
        answer: "There's no hard limit, but very large files or a very high number of PDFs may take longer to process depending on your device.",
      },
    ],
    relatedSlugs: ["split-pdf", "compress-pdf"],
  },
  {
    slug: "split-pdf",
    category: "pdf",
    title: "Split PDF",
    shortDescription: "Extract a page range from a PDF file.",
    metaDescription: "Free online tool to split a PDF and extract a specific page range into a new PDF document.",
    h1: "Split PDF",
    intro: "Extract a specific range of pages from a PDF file into a brand new document, processed securely in your browser.",
    icon: "✂️",
    status: "live",
    widgetType: "splitPdf",
    faqs: [
      {
        question: "Are my files uploaded to a server?",
        answer: "No, all splitting happens directly in your browser. Your file is never uploaded anywhere.",
      },
      {
        question: "Can I extract multiple separate ranges at once?",
        answer: "Currently this tool extracts one continuous page range per use. Run the tool again for a different range.",
      },
      {
        question: "Will the extracted pages keep their original formatting?",
        answer: "Yes, page content, formatting and layout are preserved exactly as they appear in the original document.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-pdf"],
  },
  {
    slug: "currency-converter",
    category: "converters",
    title: "Currency Converter",
    shortDescription: "Convert between world currencies using live exchange rates.",
    metaDescription: "Free online currency converter with live exchange rates for USD, EUR, GBP, INR and more.",
    h1: "Currency Converter",
    intro: "Convert between major world currencies using regularly updated exchange rates.",
    icon: "💱",
    status: "live",
    featured: true,
    widgetType: "currencyConverter",
    faqs: [
      {
        question: "How often are exchange rates updated?",
        answer: "Exchange rates are refreshed periodically, typically every few hours, to balance accuracy with performance.",
      },
      {
        question: "Can I use this for official financial transactions?",
        answer: "No, this tool is for general informational purposes only. For official transactions, always check rates directly with your bank or payment provider.",
      },
      {
        question: "Which currencies are supported?",
        answer: "This tool supports major world currencies including USD, EUR, GBP, INR, JPY and more.",
      },
    ],
    relatedSlugs: ["length-converter", "weight-converter"],
  },
  {
    slug: "compress-pdf",
    category: "pdf",
    title: "Compress PDF",
    shortDescription: "Reduce the file size of a PDF.",
    metaDescription: "Free online tool to compress a PDF and reduce its file size, directly in your browser.",
    h1: "Compress PDF",
    intro: "Reduce your PDF's file size for easier sharing and uploading, processed entirely in your browser.",
    icon: "🗜️",
    status: "live",
    widgetType: "compressPdf",
    faqs: [
      {
        question: "Are my files uploaded to a server?",
        answer: "No, all compression happens directly in your browser. Your file is never uploaded anywhere.",
      },
      {
        question: "How much will my file shrink?",
        answer: "It depends on the PDF's contents. Files with large embedded images typically compress the most, while text-only or already-optimized PDFs may see minimal reduction.",
      },
      {
        question: "Will compression affect the quality of my document?",
        answer: "Text and layout remain unaffected. This tool focuses on reducing file overhead rather than lowering image quality.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf"],
  },
  {
    slug: "bmi-calculator",
    category: "health",
    title: "BMI Calculator",
    shortDescription: "Calculate your Body Mass Index instantly.",
    metaDescription: "Free online BMI calculator to check your Body Mass Index based on height and weight.",
    h1: "BMI Calculator",
    intro: "Calculate your Body Mass Index (BMI) using your height and weight to understand your weight category.",
    icon: "⚖️",
    status: "live",
    featured: true,
    inputFields: [
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
    ],
    resultFields: [
      { key: "bmi", label: "BMI", highlight: true },
      { key: "category", label: "Category", highlight: true },
    ],
    calculate: (inputs) => {
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const output = calculateBmi(heightCm, weightKg);
      return { ...output };
    },
explanation: [
      {
        heading: "The BMI formula",
        paragraphs: [
          "BMI is calculated as weight in kilograms divided by height in meters, squared: BMI = weight (kg) ÷ height (m)². This calculator converts your height from centimeters to meters automatically before applying the formula.",
          "For example, a person weighing 70 kg with a height of 175 cm (1.75 m) has a BMI of 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which falls in the normal weight range.",
        ],
      },
      {
        heading: "BMI categories",
        paragraphs: [
          "A BMI below 18.5 is categorized as underweight, 18.5 to 24.9 as normal weight, 25 to 29.9 as overweight, and 30 or above as obese. These thresholds are widely used general screening ranges, not a personalized health assessment.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a healthy BMI range?",
        answer:
          "A BMI between 18.5 and 24.9 is generally considered a healthy weight range for most adults.",
      },
      {
        question: "Is BMI accurate for everyone?",
        answer:
          "BMI is a general screening tool and does not account for muscle mass, bone density, or body composition, so it may not be fully accurate for athletes or older adults.",
      },
      {
        question: "How often should I check my BMI?",
        answer: "Checking BMI periodically (e.g. monthly) can help track general weight trends over time.",
      },
    ],
    relatedSlugs: ["age-calculator", "percentage-calculator"],
  },
  {
    slug: "compound-interest-calculator",
    category: "finance",
    title: "Compound Interest Calculator",
    shortDescription: "Calculate how your investment grows with compound interest.",
    metaDescription: "Free online compound interest calculator to see how your savings or investment grows over time.",
    h1: "Compound Interest Calculator",
    intro: "Calculate how an investment grows over time with compound interest, choosing how often interest compounds.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "principal", label: "Initial Amount", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 10" },
      {
        key: "frequency",
        label: "Compounding Frequency",
        type: "select",
        options: [
          { label: "Annually", value: "annually" },
          { label: "Semi-Annually", value: "semiannually" },
          { label: "Quarterly", value: "quarterly" },
          { label: "Monthly", value: "monthly" },
          { label: "Daily", value: "daily" },
        ],
      },
    ],
    resultFields: [
      { key: "finalAmount", label: "Final Amount", highlight: true },
      { key: "totalInterest", label: "Total Interest Earned", highlight: true },
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const frequency = String(inputs.frequency) as CompoundFrequency;
      const output = calculateCompoundInterest(principal, annualRate, years, frequency);
      return { ...output };
    },
explanation: [
      {
        heading: "The compound interest formula",
        paragraphs: [
          "The final amount is calculated as: A = P × (1 + r/n)^(n×t), where P is the initial principal, r is the annual interest rate as a decimal, n is the number of times interest compounds per year, and t is the number of years.",
          "For example, 10,000 invested at 7% annual interest, compounded monthly (n=12), for 10 years grows to 10,000 × (1 + 0.07/12)^(12×10), which works out to roughly 20,097, meaning about 10,097 in interest earned over the period.",
        ],
      },
      {
        heading: "Why compounding frequency matters",
        paragraphs: [
          "More frequent compounding means interest gets added to the balance more often, so subsequent interest calculations are based on a slightly larger amount each time. This is why monthly compounding yields marginally more than annual compounding at the same nominal rate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest calculated on both the original principal and the accumulated interest from previous periods, causing growth to accelerate over time compared to simple interest.",
      },
      {
        question: "Does compounding frequency really make a difference?",
        answer:
          "Yes, more frequent compounding (like monthly or daily) results in slightly higher returns than less frequent compounding (like annually), for the same nominal interest rate, though the difference is usually modest.",
      },
      {
        question: "Is this the same as calculating investment returns?",
        answer:
          "This calculator assumes a fixed interest rate and no additional contributions. Real investment returns often vary and may include regular deposits, which this tool does not account for.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
  },
  {
    slug: "tip-calculator",
    category: "misc",
    title: "Tip Calculator",
    shortDescription: "Calculate tip amount and split the bill.",
    metaDescription: "Free online tip calculator to calculate tip amount, total bill, and split the cost among multiple people.",
    h1: "Tip Calculator",
    intro: "Calculate the tip amount, total bill, and how much each person owes when splitting a bill.",
    icon: "🧾",
    status: "live",
    inputFields: [
      { key: "billAmount", label: "Bill Amount", type: "number", step: 0.01, placeholder: "e.g. 50" },
      { key: "tipPercent", label: "Tip (%)", type: "number", step: 1, defaultValue: 15 },
      { key: "numPeople", label: "Number of People", type: "number", step: 1, defaultValue: 1 },
    ],
    resultFields: [
      { key: "tipAmount", label: "Tip Amount", highlight: true },
      { key: "totalAmount", label: "Total Bill", highlight: true },
      { key: "amountPerPerson", label: "Per Person" },
    ],
    calculate: (inputs) => {
      const billAmount = Number(inputs.billAmount);
      const tipPercent = Number(inputs.tipPercent);
      const numPeople = Number(inputs.numPeople);
      const output = calculateTip(billAmount, tipPercent, numPeople);
      return { ...output };
    },
    faqs: [
      {
        question: "What is a standard tip percentage?",
        answer: "Tipping norms vary by country and situation, but 15-20% is common for restaurant service in the United States.",
      },
      {
        question: "How is the per-person amount calculated?",
        answer: "The total bill, including tip, is divided evenly by the number of people entered.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "discount-calculator"],
  },
  {
    slug: "bmr-calculator",
    category: "health",
    title: "BMR / Calorie Calculator",
    shortDescription: "Calculate your daily calorie needs.",
    metaDescription:
      "Free online BMR and calorie calculator. Find your Basal Metabolic Rate and daily maintenance calories.",
    h1: "BMR / Calorie Calculator",
    intro:
      "Calculate your Basal Metabolic Rate (BMR) and estimated daily calorie needs based on your age, height, weight and activity level.",
    icon: "🔥",
    status: "live",
    inputFields: [
      {
        key: "gender",
        label: "Gender",
        type: "select",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
      },
      { key: "age", label: "Age (years)", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      {
        key: "activityLevel",
        label: "Activity Level",
        type: "select",
        options: [
          { label: "Sedentary (little or no exercise)", value: "sedentary" },
          { label: "Light (1-3 days/week)", value: "light" },
          { label: "Moderate (3-5 days/week)", value: "moderate" },
          { label: "Active (6-7 days/week)", value: "active" },
          { label: "Very Active (hard exercise daily)", value: "veryActive" },
        ],
      },
    ],
    resultFields: [
      { key: "bmr", label: "BMR", unit: "kcal/day", highlight: true },
      { key: "maintenanceCalories", label: "Maintenance Calories", unit: "kcal/day", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as Gender;
      const age = Number(inputs.age);
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as ActivityLevel;
      const output = calculateBmr(gender, age, heightCm, weightKg, activityLevel);
      return { ...output };
    },
explanation: [
      {
        heading: "The Mifflin-St Jeor formula",
        paragraphs: [
          "This calculator uses the Mifflin-St Jeor equation, one of the most widely validated BMR formulas: for men, BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + 5. For women, the same calculation is used but 161 is subtracted instead of adding 5.",
        ],
      },
      {
        heading: "From BMR to maintenance calories",
        paragraphs: [
          "BMR alone only reflects calories burned at rest. To estimate total daily calorie needs, this figure is multiplied by an activity multiplier: 1.2 for sedentary, 1.375 for light activity, 1.55 for moderate, 1.725 for active, and 1.9 for very active lifestyles, giving your estimated maintenance calories.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is BMR?",
        answer:
          "BMR (Basal Metabolic Rate) is the number of calories your body needs at complete rest to maintain basic functions like breathing and circulation.",
      },
      {
        question: "What are maintenance calories?",
        answer:
          "Maintenance calories are your BMR adjusted for your activity level, representing the calories needed to maintain your current weight.",
      },
      {
        question: "Which formula does this calculator use?",
        answer: "This calculator uses the Mifflin-St Jeor equation, widely regarded as one of the most accurate BMR formulas.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "age-calculator"],
  },
  {
    slug: "word-counter",
    category: "text",
    title: "Word Counter",
    shortDescription: "Count words, characters and sentences.",
    metaDescription: "Free online word counter to count words, characters, sentences and paragraphs in your text.",
    h1: "Word Counter",
    intro: "Paste or type your text to instantly count words, characters, sentences and paragraphs.",
    icon: "📝",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
    ],
    resultFields: [
      { key: "words", label: "Words", highlight: true },
      { key: "characters", label: "Characters", highlight: true },
      { key: "charactersNoSpaces", label: "Characters (no spaces)" },
      { key: "sentences", label: "Sentences" },
      { key: "paragraphs", label: "Paragraphs" },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const output = countWords(text);
      return { ...output };
    },
    faqs: [
      {
        question: "How is the word count calculated?",
        answer: "Words are counted by splitting your text on whitespace, so consecutive spaces or line breaks don't count as extra words.",
      },
      {
        question: "Does this tool store my text?",
        answer: "No, all counting happens directly in your browser. Your text is never sent to or stored on our servers.",
      },
    ],
    relatedSlugs: ["case-converter"],
  },
  {
    slug: "case-converter",
    category: "text",
    title: "Case Converter",
    shortDescription: "Convert text between upper, lower and title case.",
    metaDescription: "Free online case converter to convert text to uppercase, lowercase, title case or sentence case.",
    h1: "Case Converter",
    intro: "Convert your text between UPPERCASE, lowercase, Title Case and Sentence case instantly.",
    icon: "🔤",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
      {
        key: "mode",
        label: "Convert To",
        type: "select",
        options: [
          { label: "UPPERCASE", value: "upper" },
          { label: "lowercase", value: "lower" },
          { label: "Title Case", value: "title" },
          { label: "Sentence case", value: "sentence" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Converted Text", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const mode = String(inputs.mode) as CaseMode;
      const result = convertCase(text, mode);
      return { result };
    },
    faqs: [
      {
        question: "What is Title Case?",
        answer: "Title Case capitalizes the first letter of every word, commonly used for headings and titles.",
      },
      {
        question: "What is Sentence case?",
        answer: "Sentence case capitalizes only the first letter of each sentence, similar to normal written English.",
      },
    ],
    relatedSlugs: ["word-counter"],
  },
  {
    slug: "salary-calculator",
    category: "finance",
    title: "Take-Home Salary Calculator",
    shortDescription: "Estimate your monthly and annual take-home pay.",
    metaDescription: "Free online take-home salary calculator to estimate your net pay after deductions.",
    h1: "Take-Home Salary Calculator",
    intro: "Estimate your take-home pay by entering your annual gross salary and an estimated total deduction percentage for tax and other withholdings.",
    icon: "💼",
    status: "live",
    inputFields: [
      { key: "annualGross", label: "Annual Gross Salary", type: "number", step: 0.01, placeholder: "e.g. 60000" },
      { key: "deductionPercent", label: "Estimated Total Deductions (%)", type: "number", step: 0.1, placeholder: "e.g. 25" },
    ],
    resultFields: [
      { key: "monthlyNet", label: "Monthly Take-Home", highlight: true },
      { key: "annualNet", label: "Annual Take-Home", highlight: true },
      { key: "monthlyGross", label: "Monthly Gross" },
      { key: "totalDeductions", label: "Total Annual Deductions" },
    ],
    calculate: (inputs) => {
      const annualGross = Number(inputs.annualGross);
      const deductionPercent = Number(inputs.deductionPercent);
      const output = calculateTakeHomeSalary(annualGross, deductionPercent);
      return { ...output };
    },
    faqs: [
      {
        question: "What counts as a deduction?",
        answer:
          "Deductions typically include income tax, social security, retirement contributions, health insurance and other withholdings. This calculator uses a single combined percentage rather than modeling any specific country's tax brackets.",
      },
      {
        question: "Why doesn't this calculator use exact tax brackets?",
        answer:
          "Tax rules vary significantly by country, state and personal circumstances. This tool gives a quick estimate using your own deduction percentage rather than assuming one specific tax system, which could otherwise mislead visitors in a different jurisdiction.",
      },
      {
        question: "How do I find my actual deduction percentage?",
        answer: "Check a recent pay stub, divide your total deductions by your gross pay for that period, and multiply by 100 to get your personal deduction percentage.",
      },
    ],
    relatedSlugs: ["emi-calculator", "gst-calculator"],
  },
  {
    slug: "sales-tax-calculator",
    category: "finance",
    title: "Sales Tax Calculator",
    shortDescription: "Calculate sales tax and total price.",
    metaDescription: "Free online sales tax calculator to find the tax amount and total price for a purchase.",
    h1: "Sales Tax Calculator",
    intro: "Calculate the sales tax amount and final total price based on a price and tax rate.",
    icon: "🧮",
    status: "live",
    inputFields: [
      { key: "price", label: "Price Before Tax", type: "number", step: 0.01, placeholder: "e.g. 100" },
      { key: "taxRate", label: "Sales Tax Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 8.25" },
    ],
    resultFields: [
      { key: "taxAmount", label: "Tax Amount", highlight: true },
      { key: "totalPrice", label: "Total Price", highlight: true },
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price);
      const taxRate = Number(inputs.taxRate);
      const output = calculateSalesTax(price, taxRate);
      return { ...output };
    },
    faqs: [
      {
        question: "How do I find my local sales tax rate?",
        answer: "Sales tax rates vary by country, state, and sometimes city or county. Check your local government's tax authority website for the exact current rate in your area.",
      },
      {
        question: "Is this the same as GST or VAT?",
        answer: "GST and VAT work similarly to sales tax in principle, calculated as a percentage of the price, but rules on what's taxed and how it's applied can differ. Our GST Calculator has a dedicated add/remove mode for GST-inclusive pricing.",
      },
    ],
    relatedSlugs: ["gst-calculator", "discount-calculator"],
  },
  {
    slug: "fuel-cost-calculator",
    category: "misc",
    title: "Fuel Cost Calculator",
    shortDescription: "Estimate fuel cost for a trip.",
    metaDescription: "Free online fuel cost calculator to estimate how much fuel you'll need and its cost for a given distance.",
    h1: "Fuel Cost Calculator",
    intro: "Estimate the fuel needed and total cost for a trip based on distance, fuel efficiency and fuel price.",
    icon: "⛽",
    status: "live",
    inputFields: [
      { key: "distance", label: "Trip Distance", type: "number", step: 0.1, placeholder: "e.g. 300" },
      { key: "fuelEfficiency", label: "Fuel Efficiency (distance per fuel unit)", type: "number", step: 0.1, placeholder: "e.g. 15" },
      { key: "fuelPrice", label: "Fuel Price (per fuel unit)", type: "number", step: 0.01, placeholder: "e.g. 1.5" },
    ],
    resultFields: [
      { key: "fuelNeeded", label: "Fuel Needed", highlight: true },
      { key: "totalCost", label: "Total Fuel Cost", highlight: true },
    ],
    calculate: (inputs) => {
      const distance = Number(inputs.distance);
      const fuelEfficiency = Number(inputs.fuelEfficiency);
      const fuelPrice = Number(inputs.fuelPrice);
      const output = calculateFuelCost(distance, fuelEfficiency, fuelPrice);
      return { ...output };
    },
    faqs: [
      {
        question: "What units should I use?",
        answer: "Use any consistent unit system, for example miles for distance with miles-per-gallon for efficiency and price-per-gallon for fuel price, or kilometers with kilometers-per-liter and price-per-liter. As long as all three inputs use matching units, the result will be accurate.",
      },
      {
        question: "Does this account for traffic, terrain or driving style?",
        answer: "No, this calculator uses a fixed fuel efficiency value you provide. Actual fuel consumption can vary based on traffic, terrain, speed and driving habits.",
      },
    ],
    relatedSlugs: ["length-converter", "currency-converter"],
  },
  {
    slug: "length-converter",
    category: "converters",
    title: "Length Converter",
    shortDescription: "Convert between mm, cm, m, km, inches, feet, yards and miles.",
    metaDescription:
      "Free online length converter to convert between millimeters, centimeters, meters, kilometers, inches, feet, yards and miles.",
    h1: "Length Converter",
    intro: "Convert length and distance measurements between metric and imperial units instantly.",
    icon: "📏",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "length",
    faqs: [
      {
        question: "How accurate are these conversions?",
        answer: "Conversions use standard international conversion factors and are accurate to six decimal places.",
      },
      {
        question: "Can I convert between metric and imperial units?",
        answer: "Yes, you can convert between any combination of metric (mm, cm, m, km) and imperial (in, ft, yd, mi) units.",
      },
    ],
    relatedSlugs: ["weight-converter", "temperature-converter"],
  },
  {
    slug: "weight-converter",
    category: "converters",
    title: "Weight Converter",
    shortDescription: "Convert between mg, g, kg, tonnes, ounces, pounds and stone.",
    metaDescription:
      "Free online weight converter to convert between milligrams, grams, kilograms, tonnes, ounces, pounds and stone.",
    h1: "Weight Converter",
    intro: "Convert weight and mass measurements between metric and imperial units instantly.",
    icon: "⚖️",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "weight",
    faqs: [
      {
        question: "How accurate are these conversions?",
        answer: "Conversions use standard international conversion factors and are accurate to six decimal places.",
      },
      {
        question: "How many pounds are in a stone?",
        answer: "One stone equals 14 pounds, a unit commonly used in the UK and Ireland for body weight.",
      },
    ],
    relatedSlugs: ["length-converter", "bmi-calculator"],
  },
  {
    slug: "temperature-converter",
    category: "converters",
    title: "Temperature Converter",
    shortDescription: "Convert between Celsius, Fahrenheit and Kelvin.",
    metaDescription: "Free online temperature converter to convert between Celsius, Fahrenheit and Kelvin instantly.",
    h1: "Temperature Converter",
    intro: "Convert temperature values between Celsius, Fahrenheit and Kelvin instantly.",
    icon: "🌡️",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "temperature",
    faqs: [
      {
        question: "What is the formula to convert Celsius to Fahrenheit?",
        answer: "Fahrenheit is calculated as Celsius multiplied by 9/5, plus 32.",
      },
      {
        question: "What is 0 Kelvin?",
        answer: "0 Kelvin, known as absolute zero, is equal to -273.15°C, the theoretical point where molecular motion stops.",
      },
    ],
    relatedSlugs: ["length-converter", "weight-converter"],
  },
  {
    slug: "discount-stack-calculator",
    category: "finance",
    title: "Stacked Discount Calculator",
    shortDescription: "Calculate the final price after two discounts applied in sequence.",
    metaDescription: "Free online stacked discount calculator to find the final price after applying two discounts one after another.",
    h1: "Stacked Discount Calculator",
    intro: "Calculate the final price when two discounts are applied one after another, not added together.",
    icon: "🏷️",
    status: "live",
    inputFields: [
      { key: "originalPrice", label: "Original Price", type: "number", step: 0.01, placeholder: "e.g. 1000" },
      { key: "discount1", label: "First Discount (%)", type: "number", step: 0.01, placeholder: "e.g. 20" },
      { key: "discount2", label: "Second Discount (%)", type: "number", step: 0.01, placeholder: "e.g. 10" },
    ],
    resultFields: [
      { key: "finalPrice", label: "Final Price", highlight: true },
      { key: "totalDiscountAmount", label: "Total Amount Saved", highlight: true },
      { key: "effectiveDiscountPercent", label: "Effective Discount", unit: "%" },
    ],
    calculate: (inputs) => {
      const originalPrice = Number(inputs.originalPrice);
      const discount1 = Number(inputs.discount1);
      const discount2 = Number(inputs.discount2);
      const output = calculateStackedDiscounts(originalPrice, discount1, discount2);
      return { ...output };
    },
    faqs: [
      {
        question: "Is 20% off plus 10% off the same as 30% off?",
        answer:
          "No. Stacked discounts apply one after the other to the already-reduced price, so 20% then 10% works out to an effective discount of 28%, not 30%, since the second discount applies to a smaller amount.",
      },
      {
        question: "Does the order of the two discounts matter?",
        answer: "No, applying discount A then discount B gives the same final price as applying B then A, multiplication is commutative either way.",
      },
    ],
    relatedSlugs: ["discount-calculator", "percentage-calculator"],
  },
  {
    slug: "extra-payment-calculator",
    category: "finance",
    title: "Loan Extra Payment Calculator",
    shortDescription: "See how extra monthly payments shorten your loan and save interest.",
    metaDescription: "Free online calculator to see how much time and interest you save by paying extra on your loan each month.",
    h1: "Loan Extra Payment Calculator",
    intro: "See how adding an extra amount to your monthly loan payment shortens your payoff time and reduces total interest.",
    icon: "🏦",
    status: "live",
    inputFields: [
      { key: "principal", label: "Remaining Loan Balance", type: "number", step: 0.01, placeholder: "e.g. 200000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 6.5" },
      { key: "originalPayment", label: "Current Monthly Payment", type: "number", step: 0.01, placeholder: "e.g. 1500" },
      { key: "extraPayment", label: "Extra Monthly Payment", type: "number", step: 0.01, placeholder: "e.g. 200" },
    ],
    resultFields: [
      { key: "monthsSaved", label: "Months Saved", highlight: true, unit: "months" },
      { key: "interestSaved", label: "Interest Saved", highlight: true },
      { key: "originalMonths", label: "Original Payoff Time", unit: "months" },
      { key: "newMonths", label: "New Payoff Time", unit: "months" },
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const originalPayment = Number(inputs.originalPayment);
      const extraPayment = Number(inputs.extraPayment);
      const output = calculateExtraPaymentImpact(principal, annualRate, originalPayment, extraPayment);
      return { ...output };
    },
    faqs: [
      {
        question: "Why does a small extra payment save so much interest?",
        answer:
          "Extra payments go directly toward reducing your principal balance, which reduces the interest charged in every subsequent month for the remaining life of the loan, so the savings compound over time.",
      },
      {
        question: "Does this account for prepayment penalties?",
        answer: "No, some loans charge a fee for paying off early or making extra payments. Check your loan agreement or with your lender before making extra payments.",
      },
      {
        question: "What if my monthly payment is too low to ever pay off the loan?",
        answer: "If your payment doesn't cover the monthly interest charge, the loan balance would never decrease. The calculator will show an error in this case rather than an incorrect result.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
  },
  {
    slug: "password-generator",
    category: "security",
    title: "Password Generator",
    shortDescription: "Generate strong, random passwords.",
    metaDescription: "Free online password generator to create strong, secure, random passwords instantly.",
    h1: "Password Generator",
    intro: "Generate a strong, random password with your choice of length and character types.",
    icon: "🔑",
    status: "live",
    featured: true,
    inputFields: [
      { key: "length", label: "Password Length", type: "number", min: 4, max: 128, step: 1, defaultValue: 16 },
      { key: "includeUppercase", label: "Include Uppercase Letters (A-Z)", type: "checkbox", defaultValue: "true" },
      { key: "includeLowercase", label: "Include Lowercase Letters (a-z)", type: "checkbox", defaultValue: "true" },
      { key: "includeNumbers", label: "Include Numbers (0-9)", type: "checkbox", defaultValue: "true" },
      { key: "includeSymbols", label: "Include Symbols (!@#$...)", type: "checkbox", defaultValue: "false" },
    ],
    resultFields: [{ key: "password", label: "Generated Password", wide: true }],
    calculate: (inputs) => {
      const password = generatePassword({
        length: Number(inputs.length),
        includeUppercase: inputs.includeUppercase === "true",
        includeLowercase: inputs.includeLowercase === "true",
        includeNumbers: inputs.includeNumbers === "true",
        includeSymbols: inputs.includeSymbols === "true",
      });
      return { password };
    },
explanation: [
      {
        heading: "How the password is built",
        paragraphs: [
          "The generator builds a character set from the categories you select (uppercase letters, lowercase letters, numbers, symbols), then randomly picks characters from that combined set, one at a time, for your chosen length. Each character position is selected independently, so the result isn't based on any word, pattern or dictionary entry.",
        ],
      },
      {
        heading: "Why length matters more than complexity rules",
        paragraphs: [
          "Every additional character multiplies the total number of possible password combinations, rather than just adding to it. A longer password made from a smaller set of characters (say, just lowercase letters and numbers) can still be harder to guess than a shorter password using every character type, simply because of how quickly the possibilities compound with length.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these passwords generated securely?",
        answer:
          "Passwords are generated entirely in your browser and are never sent to or stored on our servers.",
      },
      {
        question: "What makes a strong password?",
        answer:
          "A strong password is typically at least 12-16 characters long and combines uppercase letters, lowercase letters, numbers and symbols.",
      },
      {
        question: "Should I reuse passwords across sites?",
        answer: "No, it's recommended to use a unique password for each account, ideally managed with a password manager.",
      },
    ],
    relatedSlugs: [],
  },
  {
    slug: "discount-calculator",
    category: "finance",
    title: "Discount Calculator",
    shortDescription: "Calculate discounts instantly.",
    metaDescription: "Free online discount calculator to find the final price after a percentage discount.",
    h1: "Discount Calculator",
    intro: "Calculate the final price after applying a discount, and see how much you save.",
    icon: "🏷️",
    status: "live",
    inputFields: [
      { key: "originalPrice", label: "Original Price", type: "number", step: 0.01, placeholder: "e.g. 1000" },
      { key: "discountPercent", label: "Discount (%)", type: "number", step: 0.01, placeholder: "e.g. 20" },
    ],
    resultFields: [
      { key: "finalPrice", label: "Final Price", highlight: true },
      { key: "discountAmount", label: "Discount Amount", highlight: true },
      { key: "youSave", label: "You Save" },
    ],
    calculate: (inputs) => {
      const originalPrice = Number(inputs.originalPrice);
      const discountPercent = Number(inputs.discountPercent);
      const output = calculateDiscount(originalPrice, discountPercent);
      return { ...output };
    },
explanation: [
      {
        heading: "The discount formula",
        paragraphs: [
          "The discount amount is calculated as: Discount = Original Price × (Discount % ÷ 100). The final price is then the original price minus that discount amount.",
          "For example, an item priced at 1000 with a 20% discount has a discount amount of 1000 × (20 ÷ 100) = 200, giving a final price of 1000 − 200 = 800.",
        ],
      },
      {
        heading: "Calculating percentage off from a sale price",
        paragraphs: [
          "If you know both the original and sale price and want to find the discount percentage instead, that's a different calculation: divide the amount saved by the original price, then multiply by 100. Our Percentage Calculator's 'X is what % of Y' mode can be used for this in reverse.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is the final price calculated?",
        answer:
          "The discount amount is calculated as a percentage of the original price, then subtracted from the original price to get the final price.",
      },
      {
        question: "Can I use this for multiple stacked discounts?",
        answer:
          "This calculator handles a single discount. For stacked discounts, apply this calculator once per discount, using the previous result as the new original price.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "gst-calculator"],
  },
  {
    slug: "emi-calculator",
    category: "finance",
    title: "EMI Calculator",
    shortDescription: "Calculate monthly loan EMI.",
    metaDescription: "Free online EMI calculator to calculate your monthly loan installment.",
    h1: "EMI Calculator",
    intro: "Calculate your Equated Monthly Installment (EMI) for a loan based on principal, interest rate and tenure.",
    icon: "💰",
    status: "live",
    featured: true,
    widgetType: "amortization",
    amortizationTenureUnit: "months",
explanation: [
      {
        heading: "The EMI formula",
        paragraphs: [
          "EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate divided by 12, then by 100), and n is the number of monthly installments.",
          "This formula produces a single fixed payment that, when paid every month for n months, exactly pays off both the principal and all accumulated interest by the final payment.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: [
          "For a loan of 500,000 at 8.5% annual interest over 60 months: the monthly rate is 8.5 ÷ 12 ÷ 100 = 0.007083. Plugging this into the formula gives a fixed monthly EMI, with the exact breakdown of how much goes to principal versus interest each month shown in the amortization schedule below.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is EMI calculated?",
        answer:
          "EMI is calculated using the loan amount, interest rate and tenure via the standard reducing-balance formula, which spreads principal and interest across equal monthly payments.",
      },
      {
        question: "Does a longer tenure reduce EMI?",
        answer:
          "Yes, a longer tenure generally reduces the monthly EMI amount, but increases the total interest paid over the life of the loan.",
      },
{
        question: "Is the interest rate here monthly or annual?",
        answer: "Enter the annual interest rate. The calculator automatically converts it to a monthly rate internally.",
      },
      {
        question: "What is an amortization schedule?",
        answer: "An amortization schedule shows how each payment splits between principal and interest over the life of the loan, and how your remaining balance decreases over time.",
      },
    ],
    relatedSlugs: ["loan-calculator", "gst-calculator"],
  },
  {
    slug: "gst-calculator",
    category: "finance",
    title: "GST Calculator",
    shortDescription: "Calculate GST instantly.",
    metaDescription: "Free online GST calculator to add or remove GST from an amount.",
    h1: "GST Calculator",
    intro: "Calculate GST amount and final price for a given rate quickly and accurately.",
    icon: "🧾",
    status: "live",
    inputFields: [
      { key: "amount", label: "Amount", type: "number", step: 0.01, placeholder: "e.g. 1000" },
      { key: "gstRate", label: "GST Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 18" },
      {
        key: "mode",
        label: "Calculation Type",
        type: "select",
        options: [
          { label: "Add GST (amount is exclusive)", value: "add" },
          { label: "Remove GST (amount is inclusive)", value: "remove" },
        ],
      },
    ],
    resultFields: [
      { key: "baseAmount", label: "Base Amount" },
      { key: "gstAmount", label: "GST Amount", highlight: true },
      { key: "totalAmount", label: "Total Amount", highlight: true },
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount);
      const gstRate = Number(inputs.gstRate);
      const mode = String(inputs.mode) as GstMode;
      const output = calculateGst(amount, gstRate, mode);
      return { ...output };
    },
explanation: [
      {
        heading: "Adding GST",
        paragraphs: [
          "When your amount doesn't yet include GST, the GST amount is calculated as: GST = amount × (rate ÷ 100), and the total is the original amount plus that GST amount. For example, 1000 with 18% GST gives GST of 180, for a total of 1180.",
        ],
      },
      {
        heading: "Removing GST",
        paragraphs: [
          "When your amount already includes GST, the base price is calculated by dividing by (1 + rate ÷ 100), not by simply subtracting the percentage. For example, 1180 (GST-inclusive at 18%) divided by 1.18 gives back exactly 1000 as the base price, with 180 as the GST portion.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does 'Add GST' mean?",
        answer:
          "Use 'Add GST' when your amount does not yet include GST, and you want to find the GST amount and the final total.",
      },
      {
        question: "What does 'Remove GST' mean?",
        answer:
          "Use 'Remove GST' when your amount already includes GST, and you want to find the original base price before GST was added.",
      },
    ],
    relatedSlugs: ["emi-calculator", "discount-calculator"],
  },
  {
    slug: "loan-calculator",
    category: "finance",
    title: "Loan Calculator",
    shortDescription: "Loan repayment calculator.",
    metaDescription: "Free online loan calculator to estimate repayments, interest and total cost of a loan.",
    h1: "Loan Calculator",
    intro: "Estimate your loan repayment schedule, total interest and total repayment amount.",
    icon: "🏦",
    status: "live",
    widgetType: "amortization",
    amortizationTenureUnit: "years",
explanation: [
      {
        heading: "The loan repayment formula",
        paragraphs: [
          "This calculator uses the same underlying formula as EMI: Payment = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the total number of monthly payments. The tenure you enter in years is converted to months internally before applying the formula.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: [
          "For a loan of 250,000 at 7.2% annual interest over 15 years (180 months): the monthly rate is 7.2 ÷ 12 ÷ 100 = 0.006. Applying the formula gives a fixed monthly payment, with total interest and total repayment shown alongside the full amortization schedule below, which breaks down exactly how much of each payment goes toward principal versus interest.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from the EMI calculator?",
        answer:
          "This calculator uses tenure in years and focuses on total repayment and interest cost, while the EMI calculator focuses on the monthly installment using tenure in months. Both use the same underlying formula.",
      },
      {
        question: "Does this include additional fees?",
        answer:
          "No, this calculator estimates principal and interest only. Processing fees, insurance, or other charges are not included and vary by lender.",
      },
      {
        question: "Can I see a full payment breakdown, not just totals?",
        answer: "Yes, the amortization schedule below shows a year-by-year or month-by-month breakdown of principal, interest and remaining balance for the entire loan term.",
      },
    ],
    relatedSlugs: ["emi-calculator", "gst-calculator"],
  },
  {
    slug: "date-calculator",
    category: "date-time",
    title: "Date Calculator",
    shortDescription: "Find the difference between two dates.",
    metaDescription:
      "Free online date calculator to find the number of days, weeks, months or years between two dates.",
    h1: "Date Calculator",
    intro: "Find the exact difference between two dates in days, weeks, months and years.",
    icon: "📆",
    status: "live",
    inputFields: [
      { key: "startDate", label: "Start Date", type: "date" },
      { key: "endDate", label: "End Date", type: "date" },
    ],
    resultFields: [
      { key: "years", label: "Years", highlight: true },
      { key: "months", label: "Months", highlight: true },
      { key: "days", label: "Days", highlight: true },
      { key: "totalMonths", label: "Total Months" },
      { key: "totalWeeks", label: "Total Weeks" },
      { key: "totalDays", label: "Total Days" },
    ],
    calculate: (inputs) => {
      const startDate = String(inputs.startDate ?? "");
      const endDate = String(inputs.endDate ?? "");
      const output = calculateDateDifference(startDate, endDate);
      return { ...output };
    },
    faqs: [
      {
        question: "Does the order of the two dates matter?",
        answer:
          "No. The calculator automatically detects which date is earlier and calculates the difference correctly regardless of the order you enter them.",
      },
      {
        question: "Can I calculate the difference between two future dates?",
        answer: "Yes, both dates can be in the future, the past, or one of each.",
      },
    ],
    relatedSlugs: ["age-calculator", "countdown-timer"],
  },
{
    slug: "countdown-timer",
    category: "date-time",
    title: "Countdown Timer",
    shortDescription: "Countdown to any event.",
    metaDescription: "Free online countdown timer to count down to any date and event.",
    h1: "Countdown Timer",
    intro: "Set a target date and time and watch a live countdown in days, hours, minutes and seconds.",
    icon: "⏳",
    status: "live",
    widgetType: "countdown",
    faqs: [
      {
        question: "Does the countdown keep running if I leave the page open?",
        answer: "Yes, the countdown updates live every second while the page stays open in your browser.",
      },
      {
        question: "What happens when the countdown reaches zero?",
        answer: "The timer will display a completion message once the target date and time have passed.",
      },
    ],
    relatedSlugs: ["date-calculator", "age-calculator"],
  },
];

export function getToolBySlug(slug: string) {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string) {
  return toolRegistry.filter((t) => t.category === category);
}