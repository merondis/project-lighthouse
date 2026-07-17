import { calculateWaterIntake, ActivityLevel as WaterActivityLevel } from "@/utils/calculators/water-intake-calculator";
import { calculatePregnancyDueDate } from "@/utils/calculators/pregnancy-due-date-calculator";
import { calculateFraction, FractionOperation } from "@/utils/calculators/fraction-calculator";
import { generateUuids } from "@/utils/calculators/uuid-generator";
import { generateLoremIpsum, LoremUnit } from "@/utils/calculators/lorem-ipsum-generator";
import { calculateGpa } from "@/utils/calculators/gpa-calculator";
import { calculateIdealWeight } from "@/utils/calculators/ideal-weight-calculator";
import { calculateBodyFat } from "@/utils/calculators/body-fat-calculator";
import { calculateInflation } from "@/utils/calculators/inflation-calculator";
import { calculateNetWorth } from "@/utils/calculators/net-worth-calculator";
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
    interpret: (result) => {
      const years = Number(result.years);
      const totalDays = Number(result.totalDays);
      const nextBirthdayYears = years + 1;
      return [
        "You have lived approximately " + totalDays.toLocaleString() + " days so far.",
        "You will turn " + nextBirthdayYears + " on your next birthday.",
        "In total months, that's " + result.totalMonths + " months since birth.",
      ];
    },
explanation: [
      {
        heading: "How to calculate exact age (formula and example)",
        paragraphs: [
          "To calculate age from date of birth, this tool finds the difference between your date of birth and a target date (today, by default) by counting complete years, then complete months within the remaining time, then the remaining days.",
          "For example, someone born on March 15, 2000, calculating their exact age on July 15, 2026, has completed 26 full years (March 2000 to March 2026), plus 4 more complete months (March to July), plus 0 remaining days, giving an age of 26 years, 4 months, 0 days.",
        ],
      },
      {
        heading: "Why age in years, months and days differs from a simple day count",
        paragraphs: [
          "A naive age calculator might divide total days by 365.25, but this doesn't match how people actually express their age. This tool instead counts real calendar years, months and days, correctly handling that months have different lengths and that leap years add an extra day roughly every four years, the same method used to calculate age manually with a calendar.",
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
    slug: "water-intake-calculator",
    category: "health",
    title: "Water Intake Calculator",
    shortDescription: "Estimate your daily recommended water intake.",
    metaDescription: "Free online water intake calculator to estimate how much water you should drink daily based on weight and activity level.",
    h1: "Water Intake Calculator",
    intro: "Estimate your recommended daily water intake based on your body weight and activity level.",
    icon: "💧",
    status: "live",
    inputFields: [
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      { key: "activityLevel", label: "Activity Level", type: "select", options: [
        { label: "Low (little exercise)", value: "low" },
        { label: "Moderate (some exercise)", value: "moderate" },
        { label: "High (intense exercise)", value: "high" },
      ] },
    ],
    resultFields: [
      { key: "litersPerDay", label: "Liters per Day", highlight: true },
      { key: "cupsPerDay", label: "Cups per Day" },
      { key: "ouncesPerDay", label: "Ounces per Day" },
    ],
    calculate: (inputs) => {
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as WaterActivityLevel;
      const output = calculateWaterIntake(weightKg, activityLevel);
      return { ...output };
    },
    explanation: [
      {
        heading: "How daily water intake is calculated",
        paragraphs: [
          "This calculator uses a common baseline of 33 ml of water per kilogram of body weight, then adds extra for activity level: 350 ml for moderate activity, or 700 ml for high activity, reflecting additional fluid loss through sweat during exercise.",
        ],
      },
      {
        heading: "This is a general estimate, not medical advice",
        paragraphs: [
          "Actual hydration needs vary based on climate, individual health conditions, and diet (since food also contributes fluid intake). This calculator provides a general starting point, not a personalized medical recommendation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this include water from food?",
        answer: "No, this estimates fluid intake from drinking water specifically. Food, especially fruits and vegetables, also contributes meaningfully to daily hydration.",
      },
      {
        question: "Should I drink more water in hot weather?",
        answer: "Yes, hot weather and increased sweating raise fluid needs beyond this baseline estimate.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "bmr-calculator"],
  },
  {
    slug: "pregnancy-due-date-calculator",
    category: "health",
    title: "Pregnancy Due Date Calculator",
    shortDescription: "Estimate your due date and current pregnancy week.",
    metaDescription: "Free online pregnancy due date calculator to estimate your due date and current week of pregnancy based on your last period.",
    h1: "Pregnancy Due Date Calculator",
    intro: "Estimate your due date and current week of pregnancy based on the first day of your last menstrual period.",
    icon: "👶",
    status: "live",
    inputFields: [
      { key: "lastPeriodDate", label: "First Day of Last Menstrual Period", type: "date" },
    ],
    resultFields: [
      { key: "dueDate", label: "Estimated Due Date", highlight: true },
      { key: "currentWeek", label: "Current Week", highlight: true },
      { key: "currentDay", label: "Days Into Current Week" },
      { key: "trimester", label: "Trimester" },
    ],
    calculate: (inputs) => {
      const lastPeriodDate = String(inputs.lastPeriodDate ?? "");
      const output = calculatePregnancyDueDate(lastPeriodDate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How due date is calculated (Naegele's Rule)",
        paragraphs: [
          "This calculator uses Naegele's Rule, the standard method for estimating due dates: it adds 280 days (40 weeks) to the first day of your last menstrual period. This assumes a typical 28-day cycle with ovulation around day 14.",
        ],
      },
      {
        heading: "This is an estimate, not a diagnosis",
        paragraphs: [
          "Only about 5% of babies are born exactly on their estimated due date, most arrive within a two-week window on either side. An ultrasound-based estimate from a healthcare provider is generally more precise than this calculation alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is this due date estimate?",
        answer: "It's a widely used standard estimate, but actual delivery dates vary. An ultrasound dating scan from a healthcare provider typically offers a more precise estimate, especially for irregular cycles.",
      },
      {
        question: "What if I don't know the exact date of my last period?",
        answer: "If your last period date is uncertain, a healthcare provider can estimate your due date using an ultrasound instead, which is generally more reliable in that situation.",
      },
    ],
    relatedSlugs: ["age-calculator", "date-calculator"],
  },
  {
    slug: "fraction-calculator",
    category: "misc",
    title: "Fraction Calculator",
    shortDescription: "Add, subtract, multiply or divide fractions.",
    metaDescription: "Free online fraction calculator to add, subtract, multiply or divide fractions and simplify the result.",
    h1: "Fraction Calculator",
    intro: "Perform addition, subtraction, multiplication or division on two fractions, with the result automatically simplified.",
    icon: "➗",
    status: "live",
    inputFields: [
      { key: "num1", label: "First Numerator", type: "number", step: 1, placeholder: "e.g. 1" },
      { key: "den1", label: "First Denominator", type: "number", step: 1, placeholder: "e.g. 2" },
      { key: "operation", label: "Operation", type: "select", options: [
        { label: "Add (+)", value: "add" },
        { label: "Subtract (−)", value: "subtract" },
        { label: "Multiply (×)", value: "multiply" },
        { label: "Divide (÷)", value: "divide" },
      ] },
      { key: "num2", label: "Second Numerator", type: "number", step: 1, placeholder: "e.g. 1" },
      { key: "den2", label: "Second Denominator", type: "number", step: 1, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "result", label: "Result (Simplified)", highlight: true },
      { key: "decimal", label: "Decimal Equivalent" },
    ],
    calculate: (inputs) => {
      const num1 = Number(inputs.num1);
      const den1 = Number(inputs.den1);
      const num2 = Number(inputs.num2);
      const den2 = Number(inputs.den2);
      const operation = String(inputs.operation) as FractionOperation;
      const output = calculateFraction(num1, den1, num2, den2, operation);
      return { ...output };
    },
    explanation: [
      {
        heading: "How fraction operations work",
        paragraphs: [
          "Adding and subtracting fractions requires a common denominator, achieved by cross-multiplying: a/b + c/d = (a×d + c×b) / (b×d). Multiplying fractions is simpler: multiply numerators together and denominators together. Dividing by a fraction is the same as multiplying by its reciprocal.",
        ],
      },
      {
        heading: "Simplifying fractions automatically",
        paragraphs: [
          "After calculating the result, this tool automatically simplifies the fraction by dividing both numerator and denominator by their greatest common divisor, so results like 4/8 are shown as the simplified 1/2.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use negative numbers?",
        answer: "Yes, this calculator supports negative numerators and denominators for all four operations.",
      },
      {
        question: "Why is my result automatically simplified?",
        answer: "Simplifying to lowest terms is standard mathematical practice and makes the result easier to read and use in further calculations.",
      },
    ],
    relatedSlugs: ["percentage-calculator"],
  },
  {
    slug: "uuid-generator",
    category: "developer",
    title: "UUID Generator",
    shortDescription: "Generate random UUID v4 identifiers.",
    metaDescription: "Free online UUID generator to create one or more random version 4 UUIDs (universally unique identifiers).",
    h1: "UUID Generator",
    intro: "Generate one or more random UUID v4 identifiers, commonly used for unique database keys, session tokens and object identifiers.",
    icon: "🔑",
    status: "live",
    inputFields: [
      { key: "count", label: "Number of UUIDs", type: "number", step: 1, defaultValue: 1 },
    ],
    resultFields: [{ key: "uuids", label: "Generated UUIDs", wide: true }],
    calculate: (inputs) => {
      const count = Number(inputs.count);
      const uuids = generateUuids(count);
      return { uuids: uuids.join("\n") };
    },
    explanation: [
      {
        heading: "What is a UUID v4",
        paragraphs: [
          "A UUID (Universally Unique Identifier) is a 128-bit value typically written as 32 hexadecimal characters split into five groups, such as 550e8400-e29b-41d4-a716-446655440000. Version 4 UUIDs are generated using random or pseudo-random numbers, making collisions (two identical UUIDs) astronomically unlikely even across billions of generated values.",
        ],
      },
      {
        heading: "Common uses for UUIDs",
        paragraphs: [
          "UUIDs are commonly used as database primary keys, session identifiers, API request tracking IDs, and unique object references in distributed systems, anywhere a unique identifier is needed without coordinating with a central authority.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these UUIDs guaranteed to be unique?",
        answer: "UUID v4 uses randomness that makes collisions extremely unlikely in practice, though not mathematically impossible, this is the standard used across most production systems.",
      },
      {
        question: "Is this generated securely in my browser?",
        answer: "Yes, this uses your browser's built-in cryptographically secure random number generator when available, and never sends any data to a server.",
      },
    ],
    relatedSlugs: ["password-generator"],
  },
  {
    slug: "lorem-ipsum-generator",
    category: "developer",
    title: "Lorem Ipsum Generator",
    shortDescription: "Generate placeholder Lorem Ipsum text.",
    metaDescription: "Free online Lorem Ipsum generator to create placeholder text by words, sentences or paragraphs for design mockups.",
    h1: "Lorem Ipsum Generator",
    intro: "Generate placeholder Lorem Ipsum text by word count, sentence count, or paragraph count, commonly used in design mockups.",
    icon: "📝",
    status: "live",
    inputFields: [
      { key: "count", label: "Count", type: "number", step: 1, defaultValue: 3 },
      { key: "unit", label: "Unit", type: "select", options: [
        { label: "Paragraphs", value: "paragraphs" },
        { label: "Sentences", value: "sentences" },
        { label: "Words", value: "words" },
      ] },
    ],
    resultFields: [{ key: "text", label: "Generated Text", wide: true }],
    calculate: (inputs) => {
      const count = Number(inputs.count);
      const unit = String(inputs.unit) as LoremUnit;
      const text = generateLoremIpsum(count, unit);
      return { text };
    },
    explanation: [
      {
        heading: "What is Lorem Ipsum",
        paragraphs: [
          "Lorem Ipsum is scrambled, nonsensical Latin-derived text traditionally used as filler content in design mockups, print layouts, and web page prototypes, allowing designers to preview text-heavy layouts without being distracted by actual readable content.",
        ],
      },
      {
        heading: "Why designers use placeholder text",
        paragraphs: [
          "Using neutral placeholder text keeps focus on layout, typography, and spacing rather than the meaning of the words themselves, which is why Lorem Ipsum has remained the standard choice in design and publishing for decades.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Lorem Ipsum actual Latin?",
        answer: "It's derived from a classical Latin text but scrambled and altered, so it isn't meaningful or grammatically correct Latin, which is intentional, so it doesn't distract from layout review.",
      },
      {
        question: "Can I generate a specific number of words instead of paragraphs?",
        answer: "Yes, choose 'Words' from the unit dropdown and enter your desired word count instead of paragraphs or sentences.",
      },
    ],
    relatedSlugs: ["word-counter"],
  },
  {
    slug: "mortgage-calculator",
    category: "finance",
    title: "Mortgage Calculator",
    shortDescription: "Calculate your monthly mortgage payment and full amortization schedule.",
    metaDescription: "Free online mortgage calculator to calculate monthly payments and view a full amortization schedule for your home loan.",
    h1: "Mortgage Calculator",
    intro: "Calculate your estimated monthly mortgage payment based on loan amount, interest rate and term, with a full amortization schedule.",
    icon: "🏠",
    status: "live",
    widgetType: "amortization",
    amortizationTenureUnit: "years",
    explanation: [
      {
        heading: "How mortgage payments are calculated",
        paragraphs: [
          "This mortgage calculator uses the same standard loan amortization formula as our EMI and Loan calculators: Monthly Payment = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate, and n is the total number of monthly payments over your mortgage term.",
        ],
      },
      {
        heading: "What this calculator doesn't include",
        paragraphs: [
          "This tool estimates principal and interest only. It doesn't include property taxes, homeowner's insurance, PMI (private mortgage insurance), or HOA fees, all of which typically add to your actual monthly housing payment beyond this estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this include property tax and insurance?",
        answer: "No, this calculator estimates principal and interest only. Your actual monthly payment may be higher once taxes, insurance, PMI, and HOA fees are included.",
      },
      {
        question: "What's a typical mortgage term?",
        answer: "15-year and 30-year fixed terms are the most common in many markets, with 30-year terms offering lower monthly payments but more total interest paid over the loan's life.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
  },
  {
    slug: "volume-converter",
    category: "converters",
    title: "Volume Converter",
    shortDescription: "Convert between milliliters, liters, cups, gallons and more.",
    metaDescription: "Free online volume converter to convert between milliliters, liters, cups, pints, quarts and gallons.",
    h1: "Volume Converter",
    intro: "Convert volume measurements between metric and US customary units, useful for cooking, science, and everyday conversions.",
    icon: "🧪",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "volume",
    faqs: [
      {
        question: "How many cups are in a liter?",
        answer: "One liter is approximately 4.23 cups, a common conversion for cooking and baking.",
      },
      {
        question: "How accurate are these conversions?",
        answer: "Conversions use standard exact conversion factors and are accurate to six decimal places.",
      },
    ],
    relatedSlugs: ["weight-converter", "length-converter"],
  },
  {
    slug: "speed-converter",
    category: "converters",
    title: "Speed Converter",
    shortDescription: "Convert between mph, km/h, m/s and knots.",
    metaDescription: "Free online speed converter to convert between miles per hour, kilometers per hour, meters per second and knots.",
    h1: "Speed Converter",
    intro: "Convert speed measurements between mph, km/h, m/s, knots and feet per second.",
    icon: "🚀",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "speed",
    faqs: [
      {
        question: "How do I convert mph to km/h?",
        answer: "Multiply miles per hour by 1.60934 to get kilometers per hour, or use this converter for an instant result.",
      },
      {
        question: "What is a knot?",
        answer: "A knot is a unit of speed equal to one nautical mile per hour, commonly used in aviation and maritime navigation.",
      },
    ],
    relatedSlugs: ["length-converter"],
  },
  {
    slug: "area-converter",
    category: "converters",
    title: "Area Converter",
    shortDescription: "Convert between square meters, square feet, acres and hectares.",
    metaDescription: "Free online area converter to convert between square meters, square feet, acres, hectares and more.",
    h1: "Area Converter",
    intro: "Convert area measurements between metric and imperial units, including acres and hectares for land measurement.",
    icon: "📐",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "area",
    faqs: [
      {
        question: "How many square feet are in an acre?",
        answer: "One acre equals 43,560 square feet, a standard unit for measuring land, especially in the US.",
      },
      {
        question: "What's the difference between an acre and a hectare?",
        answer: "A hectare (10,000 square meters) is larger than an acre (about 4,047 square meters), hectares are the standard metric unit for land area used in most countries outside the US.",
      },
    ],
    relatedSlugs: ["length-converter", "volume-converter"],
  },
  {
    slug: "regex-tester",
    category: "developer",
    title: "Regex Tester",
    shortDescription: "Test regular expressions against sample text in real time.",
    metaDescription: "Free online regex tester to test regular expressions against sample text with live match highlighting.",
    h1: "Regex Tester",
    intro: "Test a regular expression pattern against sample text and see matches update live as you type.",
    icon: "🔍",
    status: "live",
    widgetType: "regexTester",
    explanation: [
      {
        heading: "How to use this regex tester",
        paragraphs: [
          "Enter a regular expression pattern (without the surrounding slashes), specify flags like 'g' for global matching or 'i' for case-insensitive matching, then paste your test text. Matches update live and show the matched text along with its position in the string.",
        ],
      },
      {
        heading: "Common regex flags",
        paragraphs: [
          "'g' (global) finds all matches instead of stopping at the first one. 'i' (case-insensitive) ignores letter case. 'm' (multiline) changes how ^ and $ behave across multiple lines. Flags can be combined, for example 'gi' for global, case-insensitive matching.",
        ],
      },
    ],
    faqs: [
      {
        question: "What regex syntax does this support?",
        answer: "This uses standard JavaScript regular expression syntax, which is very similar to PCRE (used in many other languages) but with some differences in advanced features.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, all pattern matching happens directly in your browser using JavaScript's built-in regex engine, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["json-formatter", "url-encoder"],
  },
  {
    slug: "hex-rgb-converter",
    category: "developer",
    title: "Hex to RGB Converter",
    shortDescription: "Convert between hex color codes and RGB values.",
    metaDescription: "Free online hex to RGB converter to convert between hex color codes and RGB values with a live color preview.",
    h1: "Hex to RGB Converter",
    intro: "Convert between hex color codes and RGB values instantly, with a live color preview.",
    icon: "🎨",
    status: "live",
    widgetType: "hexRgbConverter",
    explanation: [
      {
        heading: "How hex and RGB color values relate",
        paragraphs: [
          "Hex color codes represent red, green and blue values as two-digit hexadecimal numbers (00 to FF, or 0 to 255 in decimal), combined into a single 6-character code like #2563EB. RGB notation expresses the same three values directly in decimal, like rgb(37, 99, 235).",
        ],
      },
      {
        heading: "Where each format is used",
        paragraphs: [
          "Hex codes are the most common format in CSS and design tools, while RGB notation is often used when you need to work with individual color channel values directly, such as adjusting brightness or blending colors programmatically.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do hex colors use letters like A through F?",
        answer: "Hex (hexadecimal) is base-16, using digits 0-9 and letters A-F to represent values from 0 to 15, allowing two hex digits to represent the full 0-255 range in a compact two-character format.",
      },
      {
        question: "Does this support transparency (alpha values)?",
        answer: "No, this tool converts standard 6-digit hex and RGB values without an alpha channel. 8-digit hex codes with transparency aren't currently supported.",
      },
    ],
    relatedSlugs: ["json-formatter"],
  },
  {
    slug: "pdf-to-jpg",
    category: "pdf",
    title: "PDF to JPG",
    shortDescription: "Convert PDF pages into JPG images.",
    metaDescription: "Free online PDF to JPG converter to convert each page of a PDF into a downloadable JPG image.",
    h1: "PDF to JPG",
    intro: "Convert each page of a PDF file into a high-quality JPG image, processed entirely in your browser.",
    icon: "🖼️",
    status: "live",
    widgetType: "pdfToJpg",
    explanation: [
      {
        heading: "How PDF to JPG conversion works",
        paragraphs: [
          "This tool renders each page of your PDF onto a canvas at high resolution, then exports that canvas as a JPG image, the same rendering approach browsers use to display PDFs natively. Multi-page PDFs are converted page by page and bundled into a downloadable ZIP file.",
        ],
      },
      {
        heading: "Why this stays entirely in your browser",
        paragraphs: [
          "Unlike many online PDF to JPG converters that upload your file to a server, this tool uses your browser's own rendering engine to do the conversion locally, meaning your PDF is never transmitted anywhere.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I download individual pages instead of the whole ZIP?",
        answer: "Yes, each converted page has its own download link below the preview, alongside the option to download all pages together as a ZIP file.",
      },
      {
        question: "What resolution are the output images?",
        answer: "Pages are rendered at 2x scale for good print and screen quality, balancing image clarity with reasonable file size.",
      },
      {
        question: "Does this work with scanned PDFs?",
        answer: "Yes, since this renders the visual page content directly, it works the same way for scanned PDFs and text-based PDFs alike.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf", "compress-pdf"],
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
    interpret: (result, inputs) => {
      const mode = String(inputs.mode);
      const resultValue = Number(result.result);

      if (mode === "percentageChange") {
        return [
          resultValue >= 0
            ? "This represents an increase of " + Math.abs(resultValue) + "%."
            : "This represents a decrease of " + Math.abs(resultValue) + "%.",
        ];
      }
      return [String(result.explanation)];
    },
      explanation: [
      {
        heading: "How to calculate percentage of a number (X% of Y)",
        paragraphs: [
          "To find X% of Y, the formula is (X ÷ 100) × Y. For example, to calculate 20% of 150: (20 ÷ 100) × 150 = 30.",
        ],
      },
      {
        heading: "How to find what percent one number is of another",
        paragraphs: [
          "To calculate what percentage X is of Y, the formula is (X ÷ Y) × 100. For example, to find what percent 30 is of 150: (30 ÷ 150) × 100 = 20%.",
        ],
      },
      {
        heading: "Percentage increase or decrease formula",
        paragraphs: [
          "To calculate percentage change (percentage increase or percentage decrease) from X to Y, the formula is ((Y − X) ÷ |X|) × 100. For example, a change from 150 to 180 is ((180 − 150) ÷ 150) × 100 = 20%, representing a 20% increase.",
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
    interpret: (result, inputs) => {
      const principal = Number(inputs.principal);
      const interestAmount = Number(result.interestAmount);
      const ratio = principal > 0 ? (interestAmount / principal) * 100 : 0;
      return [
        "The interest earned equals " + Math.round(ratio) + "% of your original principal over this period.",
        "Unlike compound interest, this amount grows at a constant rate, not an accelerating one.",
      ];
    },
explanation: [
      {
        heading: "Simple interest formula with example",
        paragraphs: [
          "The simple interest formula is: Simple Interest = (Principal × Rate × Time) ÷ 100, where Principal is the amount borrowed or invested, Rate is the annual interest rate as a percentage, and Time is the duration in years.",
          "For example, to calculate simple interest on a principal of 5000 at 5% annual interest for 3 years: (5000 × 5 × 3) ÷ 100 = 750 in interest, for a total amount of 5750.",
        ],
      },
      {
        heading: "Simple interest vs compound interest",
        paragraphs: [
          "Unlike compound interest, which is calculated on the growing balance including previously earned interest, simple interest is always calculated on the original principal only, so it grows at a constant, linear rate rather than accelerating over time. This is why simple interest loans typically cost less in total interest than compound interest loans over the same term and rate.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How this random number generator works",
        paragraphs: [
          "This tool generates random whole numbers within a range you specify (a minimum and maximum value), using your browser's built-in random number function. You can choose how many numbers to generate at once, and whether duplicate numbers are allowed in the results.",
        ],
      },
      {
        heading: "Random numbers with or without duplicates",
        paragraphs: [
          "When duplicates are allowed, each number is picked independently, so the same value can appear more than once, similar to rolling a die multiple times. When duplicates are disallowed, each number can only appear once, similar to drawing raffle tickets or lottery numbers without replacement, which requires the range to contain at least as many values as the count requested.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How AI text summarization works",
        paragraphs: [
          "This tool sends your text to an AI language model, which identifies the key points and generates a condensed summary that preserves the core meaning while significantly reducing length. It's useful for quickly understanding long articles, reports, or documents without reading the entire text.",
        ],
      },
      {
        heading: "Why this tool uses your own API key",
        paragraphs: [
          "Rather than running AI requests through our own paid account with usage limits, this tool uses your personal OpenAI API key, sent directly with each request and never stored. This keeps the summarizer completely free to use with no artificial caps, while you only pay OpenAI directly for what you use, often covered by free trial credit for light usage.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "ROI formula: how to calculate return on investment",
        paragraphs: [
          "The ROI formula is: ROI % = ((Final Value − Initial Investment) ÷ Initial Investment) × 100. This expresses your net profit or loss as a percentage of what you originally invested, making it easy to compare returns across different investments regardless of size.",
          "For example, an initial investment of 10,000 that grows to a final value of 12,500 has an ROI of ((12,500 − 10,000) ÷ 10,000) × 100 = 25%.",
        ],
      },
      {
        heading: "What counts as a good ROI",
        paragraphs: [
          "There's no universal 'good' ROI, it depends heavily on the type of investment, the time period involved, and the risk taken. A 25% ROI over one year is very different from a 25% ROI over ten years. This calculator shows a simple ROI percentage without factoring in time period, so it's most useful for comparing investments held over similar durations.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "Markup formula: how to calculate selling price from cost",
        paragraphs: [
          "The markup formula is: Selling Price = Cost + (Cost × Markup % ÷ 100). For example, a product costing 50 with a 40% markup has a profit of 50 × (40 ÷ 100) = 20, giving a selling price of 70.",
        ],
      },
      {
        heading: "Markup vs margin: why they're not the same percentage",
        paragraphs: [
          "Markup is profit calculated as a percentage of cost price, while margin is the same profit amount calculated as a percentage of selling price, a different base number. In the example above, a 40% markup on a 50 cost produces a selling price of 70, but the profit margin is only 20 ÷ 70 ≈ 28.6% of the selling price, not 40%. Confusing these two is a common pricing mistake.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to convert between bytes, KB, MB, GB and TB",
        paragraphs: [
          "This data storage converter uses 1024 as the conversion factor between each unit (1 KB = 1024 bytes, 1 MB = 1024 KB, and so on), the binary standard used by operating systems for file sizes and memory. Your input is converted to bytes first, then converted into your target unit.",
        ],
      },
      {
        heading: "Why storage capacity looks different in different places",
        paragraphs: [
          "Storage device manufacturers typically advertise capacity using 1000 as the conversion factor (the decimal standard), while your computer's operating system displays file and drive sizes using 1024 (the binary standard). This is why a drive advertised as 1 TB often shows a slightly smaller capacity, around 931 GB, when viewed on your computer.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How URL encoding (percent-encoding) works",
        paragraphs: [
          "URL encoding converts characters that aren't safe to use directly in a URL, such as spaces, symbols, and non-ASCII characters, into a percent sign followed by a two-digit hex code (for example, a space becomes %20). This ensures the URL remains valid and is interpreted correctly by browsers and servers.",
        ],
      },
      {
        heading: "When to use a URL encoder or decoder",
        paragraphs: [
          "URL encoding is commonly needed when building query strings with user input, embedding special characters in a link, or passing data like an email address or search term as a URL parameter. Decoding reverses the process, turning percent-encoded text back into its original, readable form.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How AI paragraph rewriting works",
        paragraphs: [
          "This tool sends your paragraph to an AI language model with instructions to rephrase it using different wording and sentence structure while preserving the original meaning and tone, useful for avoiding repetitive phrasing, adjusting tone, or getting a fresh way to express the same idea.",
        ],
      },
      {
        heading: "Why this tool uses your own API key",
        paragraphs: [
          "Rather than running AI requests through our own paid account with usage limits, this tool uses your personal OpenAI API key, sent directly with each request and never stored. This keeps the rewriter completely free to use with no artificial caps, while you only pay OpenAI directly for what you use.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to format and validate JSON online",
        paragraphs: [
          "This tool parses your JSON text to check it's syntactically valid, then re-outputs it in your chosen format. 'Format' (also called beautify or pretty-print) adds indentation and line breaks so nested objects and arrays are easy to read visually. 'Minify' strips all unnecessary whitespace to produce the smallest possible file size, commonly used for production API responses.",
        ],
      },
      {
        heading: "Common JSON syntax errors this tool catches",
        paragraphs: [
          "A JSON validator like this one flags common mistakes such as missing commas between properties, unquoted property names, trailing commas after the last item (not allowed in strict JSON), and mismatched or missing brackets and braces, all frequent causes of a 'invalid JSON' error when working with APIs or config files.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How Base64 encoding and decoding works",
        paragraphs: [
          "Base64 encoding converts binary or text data into a string using only 64 safe, printable ASCII characters (A-Z, a-z, 0-9, plus two symbols). This makes it safe to embed data in places that only reliably support plain text, such as URLs, email attachments, or JSON fields. Decoding reverses the process, converting the Base64 string back into its original form.",
        ],
      },
      {
        heading: "Base64 is encoding, not encryption",
        paragraphs: [
          "A common misconception is that Base64 provides security, it does not. Anyone can decode a Base64 string instantly using any Base64 decoder, including this one, since there's no key or secret involved. Base64 is purely a format conversion for compatibility, not a way to protect sensitive data.",
        ],
      },
    ],
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
    explanation: [
      {
        heading: "How to merge PDF files online",
        paragraphs: [
          "This tool combines multiple PDF files into a single document by reading each file's pages directly in your browser and copying them, in the order you specify, into one new PDF. You can reorder files before merging using the up and down arrows next to each one.",
        ],
      },
      {
        heading: "Why this PDF merger works entirely in your browser",
        paragraphs: [
          "Unlike many free PDF merge tools that upload your files to a server for processing, this tool uses client-side JavaScript to combine your PDFs locally on your device. Your files are never transmitted anywhere, which matters when merging documents containing sensitive or private information.",
        ],
      },
    ],
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
    explanation: [
      {
        heading: "How to split a PDF and extract specific pages",
        paragraphs: [
          "This tool lets you extract a range of pages (for example, pages 3 to 7) from a larger PDF and save them as a new, separate document. After uploading a file, it detects the total page count so you can choose exactly which pages to extract.",
        ],
      },
      {
        heading: "Why use a PDF page extractor",
        paragraphs: [
          "Splitting a PDF is useful when you only need to share, print, or archive a portion of a larger document, such as pulling one chapter from a report or isolating a signed page from a longer contract, without sending the entire original file.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How currency conversion is calculated",
        paragraphs: [
          "To convert between currencies, the amount is first converted to a common base currency using the source currency's exchange rate, then converted from that base currency into the target currency using the target's exchange rate. This two-step process (via a shared base rate) is how most live currency converters handle any-to-any conversion between dozens of currencies without needing a direct rate between every possible pair.",
        ],
      },
      {
        heading: "Why exchange rates change constantly",
        paragraphs: [
          "Currency exchange rates fluctuate continuously based on global supply and demand, interest rate differences between countries, inflation, and economic events. This is different from fixed conversions like length or weight, which is why a currency calculator relies on regularly updated live exchange rate data rather than a static conversion factor.",
        ],
      },
    ],
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
    explanation: [
      {
        heading: "How PDF compression reduces file size",
        paragraphs: [
          "This tool re-saves your PDF using optimized internal object storage, removing redundant data and overhead from the file structure. Unlike some compressors that reduce image quality, this tool focuses on structural optimization, so the amount of savings depends heavily on how the original PDF was created.",
        ],
      },
      {
        heading: "Why some PDFs compress more than others",
        paragraphs: [
          "PDFs containing large, high-resolution embedded images typically see the biggest reduction in file size, while text-only PDFs or files already optimized by other software may show minimal change, since there's simply less redundant data left to remove.",
        ],
      },
    ],
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
    interpret: (result) => {
      const category = String(result.category);
      const bmi = Number(result.bmi);
      const insights: string[] = [];

      if (category === "Underweight") {
        insights.push("A BMI of " + bmi + " falls in the underweight range (below 18.5).");
        insights.push("Consider speaking with a healthcare provider about a nutrition plan suited to your goals.");
      } else if (category === "Normal weight") {
        insights.push("A BMI of " + bmi + " falls within the healthy weight range (18.5 to 24.9).");
        insights.push("Maintaining your current weight through balanced habits is generally a good target.");
      } else if (category === "Overweight") {
        insights.push("A BMI of " + bmi + " falls in the overweight range (25 to 29.9).");
        insights.push("Small, sustainable changes to diet and activity level can help move toward the normal range.");
      } else {
        insights.push("A BMI of " + bmi + " falls in the obese range (30 or above).");
        insights.push("Consulting a healthcare provider is recommended for personalized guidance.");
      }
      insights.push("Remember, BMI doesn't account for muscle mass or body composition.");
      return insights;
    },
      explanation: [
      {
        heading: "BMI formula: how to calculate Body Mass Index",
        paragraphs: [
          "The BMI formula is: BMI = weight (kg) ÷ height (m)², weight in kilograms divided by height in meters, squared. This calculator converts your height from centimeters to meters automatically before applying the formula, so you can enter height in cm directly.",
          "For example, a person weighing 70 kg with a height of 175 cm (1.75 m) has a BMI of 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which falls in the normal weight range.",
        ],
      },
      {
        heading: "BMI chart and weight categories",
        paragraphs: [
          "According to the standard BMI chart, a BMI below 18.5 is categorized as underweight, 18.5 to 24.9 as normal weight, 25 to 29.9 as overweight, and 30 or above as obese. These BMI ranges are widely used general screening thresholds, not a personalized health assessment.",
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
    interpret: (result, inputs) => {
      const principal = Number(inputs.principal);
      const finalAmount = Number(result.finalAmount);
      const growthMultiple = principal > 0 ? finalAmount / principal : 0;
      return [
        "Your initial investment grows to roughly " + growthMultiple.toFixed(2) + "x its original value.",
        "Total interest earned (" + result.totalInterest + ") is " + Math.round((Number(result.totalInterest) / principal) * 100) + "% of your original principal.",
      ];
    },
      explanation: [
      {
        heading: "Compound interest formula: how compound interest is calculated",
        paragraphs: [
          "The compound interest formula for the final amount is: A = P × (1 + r/n)^(n×t), where P is the initial principal, r is the annual interest rate as a decimal, n is the number of times interest compounds per year, and t is the number of years.",
          "For example, 10,000 invested at 7% annual interest, compounded monthly (n=12), for 10 years grows to 10,000 × (1 + 0.07/12)^(12×10), which works out to roughly 20,097, meaning about 10,097 in compound interest earned over the period.",
        ],
      },
      {
        heading: "Monthly vs annual compounding: why frequency matters",
        paragraphs: [
          "More frequent compounding means interest gets added to the balance more often, so subsequent interest calculations are based on a slightly larger amount each time. This is why monthly compound interest yields marginally more than annual compounding at the same nominal interest rate, an important factor when comparing savings accounts or investments.",
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
explanation: [
      {
        heading: "How to calculate a tip (tip formula)",
        paragraphs: [
          "To calculate a tip, the formula is: Tip Amount = Bill Amount × (Tip % ÷ 100). The total bill is then the original amount plus the tip. For example, calculating a 15% tip on a 50 bill: tip amount = 50 × (15 ÷ 100) = 7.50, for a total of 57.50.",
        ],
      },
      {
        heading: "How to split a bill with tip among multiple people",
        paragraphs: [
          "To split the bill, including tip, evenly among a group, the total bill (original amount plus tip) is divided by the number of people. For example, a 57.50 total split between 3 people works out to 19.17 per person, this is how a bill splitter calculator handles group dining.",
        ],
      },
    ],
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
        heading: "BMR formula: how to calculate Basal Metabolic Rate",
        paragraphs: [
          "This calculator uses the Mifflin-St Jeor equation, one of the most widely validated BMR formulas for calculating basal metabolic rate: for men, BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + 5. For women, the same BMR calculation is used but 161 is subtracted instead of adding 5.",
        ],
      },
      {
        heading: "How to calculate daily calorie needs from BMR",
        paragraphs: [
          "BMR alone only reflects calories burned at rest. To estimate total daily calorie needs (also called maintenance calories or TDEE), this figure is multiplied by an activity level multiplier: 1.2 for sedentary, 1.375 for light activity, 1.55 for moderate, 1.725 for active, and 1.9 for very active lifestyles.",
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
  explanation: [
      {
        heading: "How word count and character count are calculated",
        paragraphs: [
          "Word count is calculated by splitting the text on whitespace (spaces, tabs, line breaks), so consecutive spaces don't inflate the count. Character count includes every character typed, including spaces and punctuation, while the 'characters without spaces' figure excludes whitespace, useful for platforms with strict character limits.",
        ],
      },
      {
        heading: "How sentence and paragraph count work",
        paragraphs: [
          "Sentences are detected by counting sequences of text ending in a period, question mark, or exclamation point. Paragraphs are counted by splitting text on line breaks and counting non-empty sections, this is how a word counter tool estimates structure for essays, articles, and word-limit-sensitive writing like tweets or meta descriptions.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How text case conversion works",
        paragraphs: [
          "Converting text case means changing the capitalization pattern without changing the actual words. UPPERCASE converts every letter to capital, lowercase converts every letter to small, Title Case capitalizes the first letter of every word (commonly used for headings and names), and Sentence case capitalizes only the first letter of each sentence, matching normal written English.",
        ],
      },
      {
        heading: "When to use each case format",
        paragraphs: [
          "Title case is typically used for headlines, book titles, and proper names. Sentence case is standard for body text and most everyday writing. UPPERCASE is often used for emphasis, acronyms, or legal disclaimers, while lowercase is sometimes used stylistically in usernames, hashtags, or casual branding.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to calculate take-home pay (net salary)",
        paragraphs: [
          "This calculator finds your take-home pay by subtracting a total deduction percentage from your annual gross salary: Net Salary = Gross Salary − (Gross Salary × Deduction % ÷ 100). The result is then divided by 12 to show your monthly take-home pay alongside the annual figure.",
        ],
      },
      {
        heading: "Gross salary vs net salary",
        paragraphs: [
          "Gross salary is your total pay before any deductions, while net salary (take-home pay) is what actually lands in your bank account after tax, social security, retirement contributions and other withholdings are subtracted. The gap between the two varies significantly by country and individual circumstances.",
        ],
      },
    ],
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
      explanation: [
      {
        heading: "How to calculate sales tax on a purchase",
        paragraphs: [
          "The sales tax formula is: Sales Tax = Price × (Tax Rate ÷ 100). The total price you pay is then the original price plus that tax amount. For example, to calculate sales tax on a 100 purchase at an 8.25% tax rate: sales tax = 100 × (8.25 ÷ 100) = 8.25, for a total price of 108.25.",
        ],
      },
      {
        heading: "How to calculate the price before tax (reverse sales tax)",
        paragraphs: [
          "If you know the final total price and want to find the pre-tax price instead, divide the total by (1 + Tax Rate ÷ 100). For example, a total of 108.25 at 8.25% tax gives a pre-tax price of 108.25 ÷ 1.0825 = 100, this reverse calculation is useful when a receipt only shows the final total.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to calculate fuel cost for a trip",
        paragraphs: [
          "The fuel cost formula is: Fuel Needed = Distance ÷ Fuel Efficiency, and Total Cost = Fuel Needed × Fuel Price. For example, a 300-mile trip in a vehicle averaging 15 miles per gallon needs 300 ÷ 15 = 20 gallons of fuel, costing 20 × 1.50 = 30 at 1.50 per gallon.",
        ],
      },
      {
        heading: "Estimating gas cost for a road trip",
        paragraphs: [
          "To estimate gas cost accurately, use your vehicle's real-world fuel efficiency (from a recent fill-up) rather than the official rated efficiency, since actual driving conditions, speed and load typically use more fuel than laboratory test ratings suggest.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to convert length units (metric and imperial)",
        paragraphs: [
          "This length converter works by converting your input value to meters first (using standard exact conversion factors), then converting from meters into your target unit. For example, converting inches to centimeters uses the exact factor 1 inch = 2.54 cm internally, so 10 inches converts to 25.4 cm.",
        ],
      },
      {
        heading: "Common length conversions",
        paragraphs: [
          "Frequently used conversions include feet to meters (1 foot = 0.3048 m), miles to kilometers (1 mile = 1.609344 km), and centimeters to inches (1 cm ≈ 0.3937 in). The quick reference table below shows several common length and distance conversions at a glance.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to convert weight units (kg, lb, oz, stone)",
        paragraphs: [
          "This weight converter works by converting your input value to grams first (using standard exact conversion factors), then converting from grams into your target unit. For example, converting kilograms to pounds uses the exact factor 1 kg = 2.20462 lb internally.",
        ],
      },
      {
        heading: "Common weight conversions",
        paragraphs: [
          "Frequently used conversions include kilograms to pounds (kg to lbs), pounds to kilograms, and grams to ounces, commonly needed for cooking, fitness tracking, or shipping weight limits. The quick reference table below shows several common weight conversions at a glance.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "Celsius to Fahrenheit formula (and Kelvin)",
        paragraphs: [
          "To convert Celsius to Fahrenheit, the formula is: °F = (°C × 9/5) + 32. For example, 20°C converts to (20 × 9/5) + 32 = 68°F. To convert Fahrenheit to Celsius, the reverse formula is: °C = (°F − 32) × 5/9.",
          "To convert Celsius to Kelvin, simply add 273.15: K = °C + 273.15. Kelvin has no negative values, since 0 K (−273.15°C) represents absolute zero, the theoretical point where all molecular motion stops.",
        ],
      },
      {
        heading: "Common temperature reference points",
        paragraphs: [
          "Useful reference points for temperature conversion: water freezes at 0°C (32°F), room temperature is around 20°C (68°F), body temperature is approximately 37°C (98.6°F), and water boils at 100°C (212°F) at sea level. See the full temperature reference table below.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How stacked discounts are calculated",
        paragraphs: [
          "When two discounts apply one after another, the second discount is calculated on the already-reduced price, not the original price. The formula is: Final Price = Original Price × (1 − Discount1 ÷ 100) × (1 − Discount2 ÷ 100).",
        ],
      },
      {
        heading: "Why 20% off plus 10% off isn't 30% off",
        paragraphs: [
          "For example, a 1000 item with 20% off first drops to 800, then a further 10% off that 800 (not the original 1000) removes another 80, giving a final price of 720. The effective total discount is 28%, not 30%, since the second discount applies to a smaller base amount, this is a common mistake when combining coupon codes or sale discounts.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How extra loan payments reduce total interest",
        paragraphs: [
          "This calculator simulates your loan month by month, comparing your current payment schedule against the same schedule with an extra amount added each month. Because interest is calculated on the remaining balance, paying extra directly reduces principal faster, which lowers the interest charged in every future month for the rest of the loan.",
        ],
      },
      {
        heading: "Extra payments vs a shorter loan term",
        paragraphs: [
          "Adding even a modest extra amount to a monthly mortgage or loan payment can shave years off the payoff time and save a substantial amount in total interest, often more than the extra payments themselves might suggest, because the savings compound over the remaining life of the loan.",
        ],
      },
    ],
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
        heading: "How a random password generator works",
        paragraphs: [
          "This secure password generator builds a character set from the categories you select (uppercase letters, lowercase letters, numbers, symbols), then randomly picks characters from that combined set, one at a time, for your chosen password length. Each character position is selected independently, so the generated password isn't based on any word, pattern or dictionary entry.",
        ],
      },
      {
        heading: "Password length vs complexity: what makes a strong password",
        paragraphs: [
          "Every additional character multiplies the total number of possible password combinations, rather than just adding to it. A longer strong password made from a smaller set of characters (say, just lowercase letters and numbers) can still be harder to crack than a shorter complex password using every character type, simply because of how quickly the possibilities compound with length.",
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
        heading: "Discount formula: how to calculate a discounted price",
        paragraphs: [
          "The discount formula is: Discount Amount = Original Price × (Discount % ÷ 100). The final sale price is then the original price minus that discount amount.",
          "For example, to calculate 20% off an item priced at 1000: discount amount = 1000 × (20 ÷ 100) = 200, giving a final price of 1000 − 200 = 800.",
        ],
      },
      {
        heading: "How to find the discount percentage from a sale price",
        paragraphs: [
          "If you know both the original and sale price and want to work out what percentage off was applied, that's a reverse calculation: divide the amount saved by the original price, then multiply by 100. Our Percentage Calculator's 'X is what % of Y' mode can be used for this calculation.",
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
        heading: "EMI formula: how to calculate EMI manually",
        paragraphs: [
          "The EMI formula (Equated Monthly Installment formula) is: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate divided by 12, then by 100), and n is the number of monthly installments.",
          "This loan EMI formula produces a single fixed monthly payment that, when paid every month for n months, exactly pays off both the principal and all accumulated interest by the final payment, whether it's a home loan, car loan, or personal loan EMI.",
        ],
      },
      {
        heading: "EMI calculation example",
        paragraphs: [
          "For a loan of 500,000 at 8.5% annual interest over 60 months: the monthly interest rate is 8.5 ÷ 12 ÷ 100 = 0.007083. Plugging this into the EMI formula gives a fixed monthly EMI, with the exact month-by-month breakdown of how much goes to principal versus interest shown in the loan amortization schedule below.",
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
        heading: "How to add GST to a price (GST formula)",
        paragraphs: [
          "When your amount doesn't yet include GST, the GST formula to add GST is: GST amount = Price × (GST Rate ÷ 100), and the total price is the original price plus that GST amount. For example, a price of 1000 with 18% GST gives a GST amount of 180, for a GST-inclusive total of 1180.",
        ],
      },
      {
        heading: "How to remove GST from a price (reverse GST calculation)",
        paragraphs: [
          "When your amount already includes GST, the base price (GST-exclusive amount) is calculated by dividing by (1 + GST Rate ÷ 100), not by simply subtracting the percentage. For example, 1180 (GST-inclusive at 18%) divided by 1.18 gives back exactly 1000 as the base price, with 180 as the GST portion, this reverse GST calculation is a common source of confusion.",
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
        heading: "Loan repayment formula: how monthly loan payments are calculated",
        paragraphs: [
          "This loan calculator uses the same underlying formula as EMI: Monthly Payment = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the total number of monthly payments. The loan tenure you enter in years is converted to months internally before applying the formula.",
        ],
      },
      {
        heading: "Loan repayment calculation example",
        paragraphs: [
          "For a loan of 250,000 at 7.2% annual interest over 15 years (180 months): the monthly interest rate is 7.2 ÷ 12 ÷ 100 = 0.006. Applying the loan formula gives a fixed monthly payment, with total interest and total repayment shown alongside the full loan amortization schedule below, which breaks down exactly how much of each payment goes toward principal versus interest.",
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
explanation: [
      {
        heading: "How to calculate the number of days between two dates",
        paragraphs: [
          "To find the difference between two dates, this tool counts the exact number of calendar days, then converts that into complete years, months and remaining days, the same way you'd count age or a duration by hand, but automated and accounting for leap years and varying month lengths.",
          "For example, from January 1, 2026 to July 15, 2026 is 195 days, or 6 months and 14 days when broken into a years/months/days format.",
        ],
      },
      {
        heading: "Date difference in weeks, months and total days",
        paragraphs: [
          "Alongside the years/months/days breakdown, this date duration calculator also shows the total number of weeks and total number of days between the two dates, useful for project planning, tracking deadlines, or calculating someone's exact age in days rather than years.",
        ],
      },
    ],
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
    slug: "gpa-calculator",
    category: "misc",
    title: "GPA Calculator",
    shortDescription: "Calculate your Grade Point Average from course grades and credit hours.",
    metaDescription: "Free online GPA calculator to calculate your Grade Point Average from letter grades and credit hours.",
    h1: "GPA Calculator",
    intro: "Calculate your GPA by entering letter grades and credit hours for up to five courses.",
    icon: "🎓",
    status: "live",
    inputFields: [
      { key: "grade1", label: "Course 1 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits1", label: "Course 1 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade2", label: "Course 2 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits2", label: "Course 2 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade3", label: "Course 3 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits3", label: "Course 3 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade4", label: "Course 4 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits4", label: "Course 4 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade5", label: "Course 5 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits5", label: "Course 5 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "gpa", label: "GPA", highlight: true },
      { key: "totalCredits", label: "Total Credit Hours" },
    ],
    calculate: (inputs) => {
      const courses = [1, 2, 3, 4, 5].map((n) => ({
        grade: String(inputs["grade" + n] ?? ""),
        credits: Number(inputs["credits" + n]),
      }));
      const output = calculateGpa(courses);
      return { ...output };
    },
    explanation: [
      {
        heading: "How to calculate GPA (Grade Point Average)",
        paragraphs: [
          "GPA is calculated by converting each letter grade to a grade point value (A = 4.0, B = 3.0, C = 2.0, and so on), multiplying by that course's credit hours, summing all the results, then dividing by the total credit hours attempted.",
          "For example, an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course gives (4.0×3 + 3.0×4) ÷ (3+4) = 24 ÷ 7 ≈ 3.43 GPA.",
        ],
      },
      {
        heading: "Weighted vs unweighted GPA",
        paragraphs: [
          "This is an unweighted GPA calculator, meaning every course counts equally regardless of difficulty. Some schools use weighted GPA, which gives extra grade points for honors or AP courses, this calculator does not apply that adjustment.",
        ],
      },
    ],
    faqs: [
      {
        question: "What grading scale does this GPA calculator use?",
        answer: "This calculator uses the standard 4.0 scale (A = 4.0 down to F = 0.0), the most common grading scale used by US high schools and colleges.",
      },
      {
        question: "Can I calculate GPA for more than 5 courses?",
        answer: "This tool supports up to 5 courses at a time. For a full semester with more courses, you can calculate in batches and combine the weighted totals manually.",
      },
    ],
    relatedSlugs: ["percentage-calculator"],
  },
  {
    slug: "ideal-weight-calculator",
    category: "health",
    title: "Ideal Weight Calculator",
    shortDescription: "Estimate your ideal body weight based on height and gender.",
    metaDescription: "Free online ideal weight calculator to estimate your ideal body weight based on height and gender using the Devine formula.",
    h1: "Ideal Weight Calculator",
    intro: "Estimate your ideal body weight based on your height and gender using the widely used Devine formula.",
    icon: "🎯",
    status: "live",
    inputFields: [
      { key: "gender", label: "Gender", type: "select", options: [
        { label: "Male", value: "male" }, { label: "Female", value: "female" },
      ] },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
    ],
    resultFields: [
      { key: "idealWeightKg", label: "Ideal Weight (kg)", highlight: true },
      { key: "idealWeightLb", label: "Ideal Weight (lb)", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as "male" | "female";
      const heightCm = Number(inputs.heightCm);
      const output = calculateIdealWeight(gender, heightCm);
      return { ...output };
    },
    explanation: [
      {
        heading: "How ideal weight is calculated (Devine formula)",
        paragraphs: [
          "This calculator uses the Devine formula, one of the most widely used ideal body weight formulas: for men, Ideal Weight (kg) = 50 + 2.3 × (height in inches − 60). For women, the same formula is used but starting from 45.5 kg instead of 50.",
          "The formula is based on height over 5 feet (60 inches), adding 2.3 kg for every inch above that baseline.",
        ],
      },
      {
        heading: "Ideal weight is a general estimate, not a personal target",
        paragraphs: [
          "This formula was originally developed for medical dosing calculations and provides only a general reference point. It doesn't account for muscle mass, bone structure, or individual body composition, so it shouldn't be treated as a strict personal weight goal.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Devine formula accurate for everyone?",
        answer: "It's a general estimate widely used in medical settings, but it doesn't account for muscle mass, frame size, or individual body composition, so actual healthy weight can vary from this estimate.",
      },
      {
        question: "Why does gender affect the result?",
        answer: "The formula uses different baseline constants for men and women to reflect typical differences in body composition, this is a simplification, not a precise individual assessment.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "body-fat-calculator"],
  },
  {
    slug: "body-fat-calculator",
    category: "health",
    title: "Body Fat Percentage Calculator",
    shortDescription: "Estimate body fat percentage using the U.S. Navy method.",
    metaDescription: "Free online body fat calculator to estimate body fat percentage using the U.S. Navy circumference method.",
    h1: "Body Fat Percentage Calculator",
    intro: "Estimate your body fat percentage using the U.S. Navy circumference method based on height, neck, waist and hip measurements.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "gender", label: "Gender", type: "select", options: [
        { label: "Male", value: "male" }, { label: "Female", value: "female" },
      ] },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "neckCm", label: "Neck Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 38" },
      { key: "waistCm", label: "Waist Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 85" },
      { key: "hipCm", label: "Hip Circumference (cm) — required for females", type: "number", step: 0.1, placeholder: "e.g. 95" },
    ],
    resultFields: [
      { key: "bodyFatPercent", label: "Body Fat", unit: "%", highlight: true },
      { key: "category", label: "Category", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as "male" | "female";
      const heightCm = Number(inputs.heightCm);
      const neckCm = Number(inputs.neckCm);
      const waistCm = Number(inputs.waistCm);
      const hipCm = Number(inputs.hipCm);
      const output = calculateBodyFat(gender, heightCm, neckCm, waistCm, hipCm);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the U.S. Navy body fat method works",
        paragraphs: [
          "This method estimates body fat percentage using circumference measurements at the neck, waist, and (for women) hips, combined with height, using a formula developed by the U.S. Navy as a practical field alternative to more precise methods like DEXA scans or hydrostatic weighing.",
        ],
      },
      {
        heading: "How to measure neck, waist and hip correctly",
        paragraphs: [
          "For accurate results, measure your neck just below the larynx, your waist at the narrowest point (or navel level), and hips at the widest point, all with a flexible tape measure held snug but not compressing the skin.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is the Navy body fat method?",
        answer: "It's reasonably accurate for most people as a field estimate, typically within a few percentage points of more precise clinical methods, but individual body shape variation can affect accuracy.",
      },
      {
        question: "Why is hip measurement only used for women?",
        answer: "The U.S. Navy formula uses different variables for men and women based on typical fat distribution patterns, the male formula only requires waist and neck, while the female formula also factors in hip measurement.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "ideal-weight-calculator"],
  },
  {
    slug: "inflation-calculator",
    category: "finance",
    title: "Inflation Calculator",
    shortDescription: "See how inflation affects the value of money over time.",
    metaDescription: "Free online inflation calculator to see how much a sum of money will be worth in the future accounting for inflation.",
    h1: "Inflation Calculator",
    intro: "Calculate how inflation affects the future value of an amount of money over a chosen number of years, using your own assumed annual inflation rate.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "amount", label: "Amount", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "years", label: "Number of Years", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "annualRate", label: "Assumed Annual Inflation Rate (%)", type: "number", step: 0.1, defaultValue: 3 },
    ],
    resultFields: [
      { key: "futureValue", label: "Future Equivalent Value", highlight: true },
      { key: "totalIncrease", label: "Total Increase" },
      { key: "percentIncrease", label: "Percent Increase", unit: "%" },
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount);
      const years = Number(inputs.years);
      const annualRate = Number(inputs.annualRate);
      const output = calculateInflation(amount, years, annualRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this inflation calculator works",
        paragraphs: [
          "This calculator projects future value using compound growth: Future Value = Amount × (1 + Rate ÷ 100)^Years, applying your chosen annual inflation rate every year, the same mathematical pattern as compound interest.",
        ],
      },
      {
        heading: "This uses an assumed rate, not historical CPI data",
        paragraphs: [
          "Unlike calculators that pull real historical Consumer Price Index data for a specific country, this tool uses an annual inflation rate you specify, letting you model different scenarios (for example, comparing 2% versus 5% average inflation) rather than being limited to one country's historical record.",
        ],
      },
    ],
    faqs: [
      {
        question: "What inflation rate should I use?",
        answer: "A commonly used long-term average is around 2 to 3% for many developed economies, but actual inflation varies significantly by country and year. Check your country's historical average for a more tailored estimate.",
      },
      {
        question: "Does this use real historical inflation data?",
        answer: "No, this calculator applies a constant rate you specify rather than pulling actual historical CPI data, making it a modeling tool rather than a historical lookup.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "net-worth-calculator"],
  },
  {
    slug: "net-worth-calculator",
    category: "finance",
    title: "Net Worth Calculator",
    shortDescription: "Calculate your net worth from total assets and liabilities.",
    metaDescription: "Free online net worth calculator to calculate your net worth by subtracting liabilities from assets.",
    h1: "Net Worth Calculator",
    intro: "Calculate your net worth by entering your total assets and total liabilities.",
    icon: "💳",
    status: "live",
    inputFields: [
      { key: "totalAssets", label: "Total Assets", type: "number", step: 0.01, placeholder: "e.g. 150000" },
      { key: "totalLiabilities", label: "Total Liabilities", type: "number", step: 0.01, placeholder: "e.g. 50000" },
    ],
    resultFields: [
      { key: "netWorth", label: "Net Worth", highlight: true },
      { key: "status", label: "Status", highlight: true },
    ],
    calculate: (inputs) => {
      const totalAssets = Number(inputs.totalAssets);
      const totalLiabilities = Number(inputs.totalLiabilities);
      const output = calculateNetWorth(totalAssets, totalLiabilities);
      return { ...output };
    },
    explanation: [
      {
        heading: "How to calculate net worth",
        paragraphs: [
          "Net worth is calculated as: Net Worth = Total Assets − Total Liabilities. Assets include things like cash, savings, investments, retirement accounts, and property value. Liabilities include debts like mortgages, loans, and credit card balances.",
        ],
      },
      {
        heading: "Why tracking net worth matters",
        paragraphs: [
          "Unlike income or a single account balance, net worth gives a complete picture of financial position by combining everything you own and everything you owe. Tracking it over time, rather than as a single snapshot, is generally more useful for understanding financial progress.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as an asset?",
        answer: "Common assets include cash, bank account balances, investments, retirement accounts, real estate value, and vehicle value.",
      },
      {
        question: "What counts as a liability?",
        answer: "Common liabilities include mortgage balances, car loans, student loans, credit card debt, and any other money owed.",
      },
      {
        question: "Is a negative net worth unusual?",
        answer: "It's common, particularly earlier in life or after taking on debt like a mortgage or student loans. Net worth typically shifts over time as assets grow and debts are paid down.",
      },
    ],
    relatedSlugs: ["inflation-calculator", "compound-interest-calculator"],
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
    explanation: [
      {
        heading: "How a countdown timer works",
        paragraphs: [
          "This countdown timer calculates the exact difference between the current time and your chosen target date and time, then updates that difference every second, breaking it down into days, hours, minutes and seconds remaining.",
        ],
      },
      {
        heading: "Uses for a countdown timer",
        paragraphs: [
          "A live countdown is commonly used to track time remaining until an event, deadline, product launch, holiday, or any specific date and time you want to keep visible while the page stays open in your browser.",
        ],
      },
    ],
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