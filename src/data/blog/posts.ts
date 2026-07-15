export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedDate: string; // ISO format
  content: string[]; // array of paragraphs, rendered as <p> tags
  relatedToolSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-emi-is-calculated",
    title: "How EMI Is Calculated (And Why Your Monthly Payment Looks the Way It Does)",
    metaDescription:
      "A plain-English explanation of how EMI (Equated Monthly Installment) is calculated for loans, and why the formula works the way it does.",
    excerpt:
      "EMI feels like a black box until you see the formula. Here's what's actually happening behind that monthly number.",
    publishedDate: "2026-06-01",
    content: [
      "If you've ever taken a loan, you've seen an EMI, an Equated Monthly Installment, a fixed amount you pay every month until the loan is paid off. It always looks like a clean, round-ish number, but behind it is a formula that's doing more work than it seems.",
      "The core idea is this: every EMI payment is split into two parts, interest and principal. Early in the loan, most of your payment goes toward interest, because the outstanding balance is still large. As you keep paying, the balance shrinks, so less of each payment goes to interest and more goes to actually paying down what you borrowed. This is called a reducing balance method, and it's why the EMI stays the same each month even though the interest and principal portions inside it are constantly shifting.",
      "The formula itself takes three inputs: the loan amount (principal), the monthly interest rate (your annual rate divided by 12), and the number of months you'll be paying (tenure). Feed those into the standard EMI formula and it calculates the one fixed monthly number that will exactly pay off the loan, interest included, by the end of the tenure.",
      "A few things fall out of this naturally. A longer tenure lowers your monthly EMI, since you're spreading the same loan over more payments, but it usually means paying more total interest over the life of the loan. A higher interest rate raises the EMI for the same loan amount and tenure. And if a lender ever quotes you a monthly rate directly instead of an annual one, double-check which one you're being given, it changes the math significantly.",
      "You don't need to do this by hand. Our EMI Calculator takes your loan amount, annual interest rate and tenure in months, and instantly shows your monthly EMI, total interest paid, and total repayment amount, so you can compare loan offers side by side before committing to one.",
    ],
    relatedToolSlugs: ["emi-calculator", "loan-calculator", "gst-calculator"],
  },
  {
    slug: "bmi-vs-bmr-difference",
    title: "BMI vs BMR: What's the Difference and Why It Matters",
    metaDescription:
      "BMI and BMR sound similar but measure completely different things. Here's what each one actually tells you.",
    excerpt:
      "Two acronyms, two very different numbers. Here's how BMI and BMR relate, and when each one is actually useful.",
    publishedDate: "2026-06-08",
    content: [
      "BMI and BMR get confused constantly, partly because they're both common health calculations, and partly because they share a letter and both come from height, weight and a few other numbers. But they answer completely different questions.",
      "BMI, Body Mass Index, is a simple ratio of your weight to the square of your height. It's a screening tool, a rough way to categorize whether your weight falls into an underweight, normal, overweight or obese range for your height. It takes seconds to calculate and doesn't require any information about your activity level, age, or body composition, which is exactly its strength and its weakness. It's quick and consistent, but it can't tell the difference between someone who is very muscular and someone who is carrying excess body fat, since both can produce a similar BMI number.",
      "BMR, Basal Metabolic Rate, is a completely different measurement. It estimates how many calories your body burns at complete rest, just to keep your organs functioning, your heart beating, and your body regulating its temperature. Unlike BMI, calculating BMR does take into account your age, gender, height and weight, using a formula like the Mifflin-St Jeor equation, because metabolism genuinely varies with these factors.",
      "Where BMR becomes really useful is when you multiply it by an activity level multiplier, sedentary, lightly active, moderately active, and so on, to estimate your total daily maintenance calories, the number of calories you'd need to eat to maintain your current weight given how active you are. That number is a much more practical starting point for anyone thinking about calorie intake than BMI ever could be.",
      "In short: use BMI as a quick general screening number, and use BMR (and its maintenance-calorie extension) when you actually want to understand your energy needs. Neither one replaces a conversation with a doctor or nutritionist, especially if you have a specific health goal or condition, but both are useful starting points. You can calculate both instantly with our BMI Calculator and BMR / Calorie Calculator.",
    ],
    relatedToolSlugs: ["bmi-calculator", "bmr-calculator", "age-calculator"],
  },
  {
    slug: "gst-add-vs-remove-explained",
    title: "GST: Adding vs Removing Tax From a Price, Explained",
    metaDescription:
      "Confused about whether to add or remove GST from a price? Here's the difference explained clearly, with the math behind each.",
    excerpt:
      "Adding GST to a price and removing GST from a price use two different formulas, not just one in reverse. Here's why.",
    publishedDate: "2026-06-15",
    content: [
      "GST calculations trip people up in a specific, predictable way: they assume that removing GST from a price is just the reverse of adding it, using the same percentage in the opposite direction. It isn't quite that simple, and the mix-up usually happens because of how percentages behave.",
      "Adding GST is the straightforward case. If you have a base price that doesn't yet include tax, you calculate the GST amount as a percentage of that base price, then add it on top. A base price of 1000 with 18% GST means a GST amount of 180, for a total of 1180. That part matches most people's intuition.",
      "Removing GST is where it gets less obvious. If you're given a final price that already includes GST, say, that same 1180, you can't just calculate 18% of 1180 and subtract it, because 18% of 1180 is not the same as 18% of the original 1000. Instead, you have to divide the GST-inclusive amount by (1 + tax rate) to find the original base price, then the difference between that and the total gives you the actual GST amount. For our example, 1180 divided by 1.18 gives back exactly 1000, the correct base price, with 180 as the GST portion.",
      "This distinction matters most when you're reading an invoice or a price tag and need to know exactly how much of what you're paying is tax versus the actual cost of the item or service, or when you're pricing something and need to back-calculate what to charge so that, after tax, it lands on a specific total.",
      "Rather than doing this division by hand every time, our GST Calculator has both directions built in, choose \"Add GST\" when you have a tax-exclusive amount, or \"Remove GST\" when your amount already includes tax, and it handles the correct formula for each case automatically.",
    ],
relatedToolSlugs: ["gst-calculator", "discount-calculator", "emi-calculator"],
  },
  {
    slug: "strong-password-guide",
    title: "What Actually Makes a Password Strong (It's Not Just Length)",
    metaDescription:
      "Length, randomness and uniqueness all matter for password strength, here's how they actually work together and why.",
    excerpt:
      "Password strength gets reduced to 'use 12+ characters' a lot. Here's what's actually happening under that advice.",
    publishedDate: "2026-06-22",
    content: [
      "Most password advice boils down to a few rules: make it long, make it random, don't reuse it. These rules aren't arbitrary, each one closes off a specific way attackers actually try to break in, and understanding why helps the advice stick better than just following it blindly.",
      "Length matters because of how brute-force attacks work. An attacker guessing passwords isn't typing them one by one, they're running software that tries combinations extremely fast. Every additional character multiplies the number of possible combinations, not adds to it. Going from an 8-character password to a 12-character one doesn't make it 50% harder to guess, it makes it many orders of magnitude harder, because the possibilities compound with each added character.",
      "Randomness matters because attackers don't only brute-force blindly, they also use dictionaries of common passwords, real words, and predictable patterns like replacing 'a' with '@' or adding '123' at the end. A long password built from a real phrase or predictable substitution is still far more guessable than a long password made of genuinely random characters, because it fits patterns attackers already test for first.",
      "Uniqueness matters for a different reason entirely, it's not about any single password being cracked, it's about what happens when a completely unrelated website you use gets breached. If you reuse a password across sites, a leak from one low-security website can be used to log into your email, banking, or anywhere else you used the same password, a technique called credential stuffing. This is arguably the single biggest real-world cause of account compromise, and it has nothing to do with how strong the password itself was.",
      "Putting this together, a strong password is long (aim for 16+ characters where a site allows it), genuinely random rather than a modified word or phrase, and unique to that one account. Since remembering dozens of long random passwords isn't realistic, this is exactly what a password manager is for, it generates and stores them so you never have to. Our Password Generator lets you create a random password with your choice of length and character types, generated entirely in your browser.",
    ],
    relatedToolSlugs: ["password-generator"],
  },
  {
    slug: "understanding-unit-conversion-precision",
    title: "Why Unit Conversions Sometimes Look 'Off' by a Tiny Amount",
    metaDescription:
      "Ever converted a unit and gotten a slightly odd-looking decimal? Here's why that happens and why it's actually correct.",
    excerpt:
      "1 mile converts to 1.609344 km, not a clean 1.6. Here's why unit conversion often produces long decimals, and why that's expected.",
    publishedDate: "2026-06-29",
    content: [
      "If you've ever converted a measurement and gotten a result like 3.28084 feet instead of a clean round number, it can look like something went wrong. It didn't, this is just what happens when you convert between two measurement systems that weren't designed to line up neatly with each other.",
      "The metric system is built entirely around powers of ten, a kilometer is exactly 1000 meters, a centimeter is exactly one-hundredth of a meter. Converting within the metric system is just shifting a decimal point. The imperial system wasn't designed this way at all, its units grew historically from different, often unrelated origins, a foot from a human foot, a mile originally from a Roman measure of a thousand paces. There's no clean mathematical relationship between an inch and a centimeter because they were never meant to relate to each other in the first place.",
      "That's why an exact conversion factor like 1 inch equals exactly 2.54 centimeters looks so specific. It's not an approximation, it's the internationally agreed exact definition, but because it doesn't divide evenly, converting between the two systems will almost always produce a long, non-round decimal on one side or the other.",
      "This matters practically in a few places. If you're doing a rough mental estimate, it's fine to round, 1 mile is roughly 1.6 km for casual purposes. But if you're working on something where precision matters, engineering measurements, recipes that need to scale accurately, or financial-adjacent calculations, using the full precision matters, because rounding errors compound if you convert back and forth multiple times.",
      "Our Length Converter, Weight Converter and Temperature Converter all use full-precision standard conversion factors rather than rounded approximations, so the result you get is the mathematically accurate one, decimals and all.",
    ],
relatedToolSlugs: ["length-converter", "weight-converter", "temperature-converter"],
  },
  {
    slug: "json-formatting-why-it-matters",
    title: "Why JSON Formatting Matters More Than It Seems",
    metaDescription:
      "Minified JSON and formatted JSON contain the same data, so why does formatting matter? Here's what changes.",
    excerpt:
      "Two JSON files can hold identical data and look nothing alike. Here's why formatting isn't just cosmetic.",
    publishedDate: "2026-07-06",
    content: [
      "JSON has no concept of formatting built into its actual meaning, a machine reading minified JSON on a single line and the same JSON spread across fifty indented lines sees exactly the same data. So why does formatting matter at all? Because JSON isn't only read by machines, it's read by people debugging, reviewing, and understanding data, and that's where formatting earns its keep.",
      "Minified JSON exists for a real reason, removing whitespace reduces file size, which matters when JSON is being sent over a network repeatedly, like in an API response. Every unnecessary space and line break adds up across thousands or millions of requests. This is why production APIs typically return minified JSON, it's not laziness, it's a genuine performance decision.",
      "Formatted, indented JSON exists for a different real reason: human comprehension. When you're debugging why a nested field isn't showing up correctly, or reviewing a configuration file, or trying to understand the shape of data you're about to work with, indentation instantly shows you the structure, what's nested inside what, where an array starts and ends, which fields belong to which object. Reading the same structure in minified form means mentally counting brackets, which is slow and error-prone.",
      "There's a third, often overlooked benefit to formatting: it makes invalid JSON obvious faster. A missing comma or unclosed bracket in a giant minified string is nearly impossible to spot by eye. The same error in properly indented JSON usually jumps out immediately, because the visual structure breaks in an obviously wrong way.",
      "The practical takeaway is to treat these as two different states for two different purposes, keep JSON minified for transmission and storage where size matters, and format it any time a human, including future you, needs to actually read or debug it. Our JSON Formatter does both directions instantly, paste in either minified or formatted JSON, and switch between the two with one click, while also validating that the JSON is syntactically correct.",
    ],
    relatedToolSlugs: ["json-formatter", "base64-tool"],
  },
  {
    slug: "why-pdf-file-size-varies-so-much",
    title: "Why Two PDFs With Similar Content Can Have Wildly Different File Sizes",
    metaDescription:
      "Ever wondered why one PDF is 200KB and another with similar content is 20MB? Here's what actually drives PDF file size.",
    excerpt:
      "Page count barely affects PDF file size. Here's what actually does, and why compression results vary so much.",
    publishedDate: "2026-07-13",
    content: [
      "It's a common surprise: two PDFs, similar page counts, similar-looking content, and one is a few hundred kilobytes while the other is tens of megabytes. Page count turns out to be one of the least important factors in PDF file size, what actually drives it is almost always the content embedded inside those pages.",
      "Text itself is remarkably cheap in terms of file size. A PDF that's purely text, even hundreds of pages of it, compresses extremely well because text has a lot of repetitive structure that compression algorithms handle efficiently. A 300-page text-only PDF might easily stay under a megabyte.",
      "Images are almost always the real culprit. A single high-resolution photo embedded at print quality can easily be several megabytes on its own, and PDFs often contain images that are far higher resolution than needed for on-screen viewing, a scanned document, a photo pasted in at full camera resolution, a screenshot saved without compression. Multiply that across many pages of a scanned document, and file sizes balloon quickly.",
      "Fonts play a smaller but real role too. When a PDF embeds a full font file (so the document displays correctly on any device, even ones without that font installed), that adds overhead, especially if multiple font weights or families are embedded. This is usually a much smaller contributor than images, but it adds up in documents with unusual typography.",
      "This is also why PDF compression results vary so much between different documents. A PDF compression tool can meaningfully shrink a file with large embedded images, sometimes dramatically, but a PDF that's already mostly text and light on images has much less to compress in the first place, there's simply less redundant data to remove. Our Compress PDF tool works entirely in your browser and will show you the before and after size so you can see exactly how much, if anything, was saved for your specific file.",
    ],
    relatedToolSlugs: ["compress-pdf", "merge-pdf", "split-pdf"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}