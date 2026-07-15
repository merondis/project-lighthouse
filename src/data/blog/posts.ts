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
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}