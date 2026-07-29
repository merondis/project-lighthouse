# Merondis Tool Registry Content Audit — Phase 1

_Generated 2026-07-29 · 305 tools audited across 17 categories_

## Methodology

This audit was produced by parsing every entry in `registry.ts` directly (not by summarizing from memory), extracting each tool's `explanation`, `faqs` and `relatedSlugs` blocks and measuring them against the six criteria below. Two criteria required judgment rather than a pure presence check, and are called out explicitly:

- **Worked numeric example** — flagged present only if an explanation paragraph contains an explicit example cue ("for example", "say you", "e.g.", etc.) alongside two or more numbers. This is a conservative heuristic: it was spot-checked against tools with known worked examples (Age Calculator, Molarity Calculator, Business Hours Calculator) and known non-examples (Triangle Calculator, Stair Calculator) and matched expectations in every case checked.
- **Chart-appropriateness** — judged per tool based on its actual output shape (composition/breakdown, time-series/trend, single point-value, categorical lookup, or list/dataset input), not a category-wide default. Tools already rendering a chart (via `compositionChart`, the amortization/debt-payoff/growth-chart widgets, or the BMI gauge) are marked accordingly rather than re-flagged as missing.

## Executive Summary

| Criterion | Result |
|---|---|
| 1. Explanation with 2+ headings | 288/305 pass (94%) — 0 missing entirely, 17 have only 1 heading |
| 2. At least 2 tool-specific FAQs | 305/305 pass (100%) — every tool has FAQs; very little verbatim duplication found (see FAQ Genericity below) |
| 3. Worked numeric example in explanation | 100/305 pass (33%) — **205 tools lack one, the single biggest gap** |
| 4. Non-empty, relevant relatedSlugs | 305/305 have relatedSlugs (0 empty) — 137 have fewer than 3 entries |
| 5. Genuinely relevant blog post exists | 26/305 (9%) — only 12 blog posts exist in total, so this is expected to be low |
| 6. Chart-appropriate | 27 already have one, 70 are chart-appropriate but missing one, 208 are not chart-appropriate |

## FAQ Genericity Check

Every one of the 305 tools has 2 or more FAQs (no tool is missing FAQs, none have fewer than 2). Checked for verbatim-duplicate FAQ questions reused across 3+ unrelated tools as a copy-paste signal — found only 4, and all 4 are legitimately shared, generic-but-accurate questions within tight tool families (e.g. "Is my text sent to a server?" across 7 client-side text tools, "Are my files uploaded to a server?" across the 3 PDF tools). No evidence of lazy copy-paste FAQ content. **FAQ quality is not a priority gap for Phase 2.**

## relatedSlugs Genuineness Check

All 305 tools have a non-empty relatedSlugs array, and all referenced slugs were verified to resolve to real tools (maintained as a standing invariant throughout this project). 137 tools have fewer than 3 related tools (usually exactly the number of genuinely close siblings that exist, e.g. a brand-new category with few peers). Found 20 cases where the exact same relatedSlugs set is reused by 2+ tools — spot-checked and all are legitimate tight families (PDF compress/merge/split/rotate pointing at each other, CSS/HTML minifier/beautifier pairs, retirement-savings tools, etc.), not lazy copy-paste. **relatedSlugs quality is not a priority gap for Phase 2**, though the 137 thin cases could be padded to 3 where a genuine third relation exists.

## Per-Category Breakdown

### finance (69 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **28** — amortization-schedule-calculator, mortgage-refinance-calculator, credit-card-interest-calculator, dti-calculator, savings-goal-calculator, debt-payoff-calculator, auto-loan-calculator, credit-card-payoff-calculator, mortgage-calculator, salary-calculator, extra-payment-calculator, emi-calculator, loan-calculator, net-worth-calculator, retirement-calculator, lease-calculator, student-loan-calculator, roth-ira-calculator, savings-interest-calculator, annual-income-calculator, hourly-wage-calculator, house-affordability-calculator, rental-property-calculator, apr-calculator, home-equity-loan-calculator, cd-calculator, traditional-ira-calculator, debt-consolidation-calculator
- relatedSlugs < 3: **34** — mortgage-refinance-calculator, credit-card-interest-calculator, savings-goal-calculator, debt-payoff-calculator, auto-loan-calculator, breakeven-calculator, credit-card-payoff-calculator, mortgage-calculator, simple-interest-calculator, roi-calculator, markup-calculator, compound-interest-calculator, salary-calculator, sales-tax-calculator, discount-stack-calculator, extra-payment-calculator, discount-calculator, emi-calculator, loan-calculator, inflation-calculator, net-worth-calculator, ebitda-calculator, inventory-turnover-calculator, inventory-days-calculator, working-capital-calculator, cash-flow-calculator, invoice-due-date-calculator, business-valuation-calculator, down-payment-calculator, payback-period-calculator, college-cost-calculator, vat-calculator, depreciation-calculator, margin-calculator
- Blog post match: **12** — simple-interest-calculator → apy-vs-apr-difference, roi-calculator → cagr-vs-average-annual-return, compound-interest-calculator → apy-vs-apr-difference, salary-calculator → why-take-home-pay-differs-from-salary, sales-tax-calculator → sales-tax-vs-vat-vs-gst, discount-calculator → gst-add-vs-remove-explained, emi-calculator → gst-add-vs-remove-explained, gst-calculator → sales-tax-vs-vat-vs-gst, loan-calculator → how-emi-is-calculated, cagr-calculator → cagr-vs-average-annual-return, investment-return-calculator → cagr-vs-average-annual-return, apy-calculator → apy-vs-apr-difference
- Chart-appropriate, missing: **36** — mortgage-refinance-calculator, credit-card-interest-calculator, dti-calculator, breakeven-calculator, credit-card-payoff-calculator, simple-interest-calculator, roi-calculator, salary-calculator, sales-tax-calculator, discount-stack-calculator, extra-payment-calculator, discount-calculator, inflation-calculator, net-worth-calculator, future-value-calculator, present-value-calculator, cagr-calculator, apy-calculator, lease-calculator, student-loan-calculator, inflation-adjusted-salary-calculator, savings-interest-calculator, hourly-wage-calculator, commission-calculator, profit-margin-calculator, gross-margin-calculator, ebitda-calculator, working-capital-calculator, cash-flow-calculator, rent-calculator, rental-property-calculator, apr-calculator, home-equity-loan-calculator, payback-period-calculator, rmd-calculator, depreciation-calculator
- Already has a chart: **26** — amortization-schedule-calculator, savings-goal-calculator, debt-payoff-calculator, auto-loan-calculator, mortgage-calculator, compound-interest-calculator, emi-calculator, gst-calculator, loan-calculator, sip-calculator, retirement-calculator, investment-return-calculator, 401k-calculator, roth-ira-calculator, fire-calculator, house-affordability-calculator, down-payment-calculator, cd-calculator, traditional-ira-calculator, debt-consolidation-calculator, college-cost-calculator, vat-calculator, margin-calculator, budget-calculator, annuity-calculator, annuity-payout-calculator

### health (35 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **30** — heart-rate-zone-calculator, calorie-goal-calculator, water-intake-calculator, pregnancy-due-date-calculator, bmr-calculator, ideal-weight-calculator, body-fat-calculator, protein-calculator, ovulation-calculator, macro-calculator, lean-body-mass-calculator, body-surface-area-calculator, waist-to-hip-ratio-calculator, waist-to-height-ratio-calculator, army-body-fat-calculator, target-heart-rate-calculator, running-pace-calculator, walking-calories-calculator, pregnancy-weight-gain-calculator, pregnancy-week-calculator, due-date-reverse-calculator, fertility-window-calculator, healthy-weight-calculator, period-calculator, conception-calculator, gfr-calculator, fat-intake-calculator, carbohydrate-calculator, body-type-calculator, sleep-calculator
- relatedSlugs < 3: **7** — heart-rate-zone-calculator, calorie-goal-calculator, water-intake-calculator, pregnancy-due-date-calculator, bmr-calculator, ideal-weight-calculator, body-fat-calculator
- Blog post match: **2** — bmi-calculator → bmi-vs-bmr-difference, bmr-calculator → bmi-vs-bmr-difference
- Chart-appropriate, missing: **16** — heart-rate-zone-calculator, calorie-goal-calculator, pregnancy-due-date-calculator, bmr-calculator, body-fat-calculator, tdee-calculator, macro-calculator, lean-body-mass-calculator, waist-to-hip-ratio-calculator, waist-to-height-ratio-calculator, army-body-fat-calculator, target-heart-rate-calculator, one-rep-max-calculator, bac-calculator, pregnancy-weight-gain-calculator, pregnancy-week-calculator
- Already has a chart: **1** — bmi-calculator

### math (38 tools)

- Thin explanation (<2 headings): **10** — triangle-calculator, circle-calculator, distance-calculator, root-calculator, slope-calculator, z-score-calculator, confidence-interval-calculator, number-sequence-calculator, big-number-calculator, rounding-calculator
- No worked example: **26** — quadratic-solver, scientific-calculator, standard-deviation-calculator, fraction-calculator, prime-number-calculator, mean-median-mode-calculator, statistics-calculator, matrix-calculator, gcf-calculator, binomial-calculator, percentage-difference-calculator, average-calculator, median-calculator, triangle-calculator, circle-calculator, distance-calculator, slope-calculator, z-score-calculator, confidence-interval-calculator, number-sequence-calculator, factor-calculator, sample-size-calculator, half-life-calculator, big-number-calculator, rounding-calculator, roman-numeral-converter
- relatedSlugs < 3: **6** — quadratic-solver, scientific-calculator, standard-deviation-calculator, fraction-calculator, percentage-calculator, mean-median-mode-calculator
- Blog post match: **0**
- Chart-appropriate, missing: **10** — quadratic-solver, standard-deviation-calculator, mean-median-mode-calculator, statistics-calculator, binomial-calculator, average-calculator, median-calculator, z-score-calculator, number-sequence-calculator, half-life-calculator
- Already has a chart: **0**

### construction (30 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **26** — tile-calculator, paint-calculator, flooring-calculator, gravel-calculator, square-footage-calculator, mulch-calculator, asphalt-calculator, concrete-block-calculator, deck-calculator, fence-calculator, wallpaper-calculator, paver-calculator, drywall-calculator, soil-calculator, topsoil-calculator, cubic-yard-calculator, cubic-feet-calculator, cubic-meter-calculator, cement-calculator, sand-calculator, gravel-volume-calculator, rebar-calculator, beam-load-calculator, steel-weight-calculator, lumber-calculator, stair-calculator
- relatedSlugs < 3: **0**
- Blog post match: **0**
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### developer (27 tools)

- Thin explanation (<2 headings): **1** — bandwidth-calculator
- No worked example: **25** — markdown-previewer, lorem-ipsum-generator, regex-tester, hex-rgb-converter, contrast-checker, color-palette-generator, hsl-converter, url-encoder, json-formatter, base64-tool, uuid-validator, xml-formatter, xml-validator, csv-to-json, json-to-csv, sql-formatter, jwt-decoder, jwt-generator, hash-generator, cron-expression-generator, unix-timestamp-converter, html-minifier, html-beautifier, css-minifier, css-beautifier
- relatedSlugs < 3: **26** — markdown-previewer, uuid-generator, lorem-ipsum-generator, regex-tester, hex-rgb-converter, contrast-checker, color-palette-generator, hsl-converter, url-encoder, json-formatter, base64-tool, uuid-validator, xml-formatter, xml-validator, csv-to-json, json-to-csv, sql-formatter, jwt-decoder, jwt-generator, hash-generator, cron-expression-generator, unix-timestamp-converter, html-minifier, html-beautifier, css-minifier, css-beautifier
- Blog post match: **2** — json-formatter → json-formatting-why-it-matters, base64-tool → json-formatting-why-it-matters
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### converters (20 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **2** — data-storage-converter, currency-converter
- relatedSlugs < 3: **8** — volume-converter, speed-converter, area-converter, data-storage-converter, currency-converter, length-converter, weight-converter, temperature-converter
- Blog post match: **4** — currency-converter → estimating-trip-costs-before-you-go, length-converter → estimating-trip-costs-before-you-go, weight-converter → understanding-unit-conversion-precision, temperature-converter → understanding-unit-conversion-precision
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### text (15 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **14** — find-and-replace, text-diff-checker, remove-duplicate-lines, word-counter, case-converter, character-counter, reading-time-calculator, text-sorter, alphabetizer, remove-empty-lines, remove-extra-spaces, reverse-text, shuffle-text, html-encoder-decoder
- relatedSlugs < 3: **15** — find-and-replace, text-diff-checker, remove-duplicate-lines, word-counter, case-converter, character-counter, reading-time-calculator, slug-generator, text-sorter, alphabetizer, remove-empty-lines, remove-extra-spaces, reverse-text, shuffle-text, html-encoder-decoder
- Blog post match: **0**
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### date-time (14 tools)

- Thin explanation (<2 headings): **4** — stopwatch, business-hours-calculator, shift-calculator, payroll-hours-calculator
- No worked example: **10** — timezone-converter, working-days-calculator, countdown-timer, add-days-calculator, subtract-days-calculator, time-duration-calculator, week-number-calculator, stopwatch, payroll-hours-calculator, age-difference-calculator
- relatedSlugs < 3: **4** — timezone-converter, working-days-calculator, date-calculator, countdown-timer
- Blog post match: **1** — age-calculator → bmi-vs-bmr-difference
- Chart-appropriate, missing: **1** — payroll-hours-calculator
- Already has a chart: **0**

### seo (12 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **11** — meta-tag-generator, robots-txt-generator, xml-sitemap-generator, open-graph-generator, twitter-card-generator, schema-markup-generator, canonical-tag-generator, hreflang-generator, keyword-density-checker, google-serp-preview, utm-url-builder
- relatedSlugs < 3: **11** — robots-txt-generator, xml-sitemap-generator, open-graph-generator, twitter-card-generator, schema-markup-generator, canonical-tag-generator, hreflang-generator, keyword-density-checker, google-serp-preview, utm-url-builder, url-redirect-generator
- Blog post match: **0**
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### misc (8 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **4** — font-signature-generator, handwritten-signature-pad, email-signature-generator, random-number-generator
- relatedSlugs < 3: **7** — font-signature-generator, handwritten-signature-pad, email-signature-generator, random-number-generator, tip-calculator, fuel-cost-calculator, gpa-calculator
- Blog post match: **1** — fuel-cost-calculator → estimating-trip-costs-before-you-go
- Chart-appropriate, missing: **1** — tip-calculator
- Already has a chart: **0**

### pdf (7 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **6** — watermark-pdf, rotate-pdf, jpg-to-pdf, pdf-to-jpg, merge-pdf, compress-pdf
- relatedSlugs < 3: **4** — jpg-to-pdf, merge-pdf, split-pdf, compress-pdf
- Blog post match: **3** — merge-pdf → why-pdf-file-size-varies-so-much, split-pdf → why-pdf-file-size-varies-so-much, compress-pdf → why-pdf-file-size-varies-so-much
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### image (7 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **7** — image-resizer, image-compressor, webp-to-jpg, jpg-to-webp, svg-optimizer, image-metadata-remover, exif-viewer
- relatedSlugs < 3: **7** — image-resizer, image-compressor, webp-to-jpg, jpg-to-webp, svg-optimizer, image-metadata-remover, exif-viewer
- Blog post match: **0**
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### automotive (6 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **6** — fuel-economy-calculator, ev-charging-cost-calculator, tire-size-calculator, vehicle-depreciation-calculator, car-loan-affordability-calculator, engine-horsepower-calculator
- relatedSlugs < 3: **0**
- Blog post match: **0**
- Chart-appropriate, missing: **3** — ev-charging-cost-calculator, vehicle-depreciation-calculator, car-loan-affordability-calculator
- Already has a chart: **0**

### security (5 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **4** — email-format-validator, password-generator, subnet-calculator, cidr-range-calculator
- relatedSlugs < 3: **2** — email-format-validator, password-generator
- Blog post match: **1** — password-generator → strong-password-guide
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

### science (5 tools)

- Thin explanation (<2 headings): **2** — ohms-law-calculator, density-calculator
- No worked example: **4** — voltage-drop-calculator, ohms-law-calculator, electricity-calculator, density-calculator
- relatedSlugs < 3: **0**
- Blog post match: **0**
- Chart-appropriate, missing: **1** — electricity-calculator
- Already has a chart: **0**

### education (5 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **0**
- relatedSlugs < 3: **4** — final-grade-calculator, grade-percentage-calculator, attendance-calculator, study-time-calculator
- Blog post match: **0**
- Chart-appropriate, missing: **2** — cgpa-calculator, attendance-calculator
- Already has a chart: **0**

### ai (2 tools)

- Thin explanation (<2 headings): **0**
- No worked example: **2** — text-summarizer, paragraph-rewriter
- relatedSlugs < 3: **2** — text-summarizer, paragraph-rewriter
- Blog post match: **0**
- Chart-appropriate, missing: **0**
- Already has a chart: **0**

## Full Chart-Appropriateness Ledger (for Phase 3 planning, not in scope now)

70 tools are chart-appropriate but currently missing one. Listed with the one-line reason used to judge each:

- **mortgage-refinance-calculator** (finance): Comparing old vs. new monthly payment and lifetime interest is a natural side-by-side or breakeven-timeline chart.
- **credit-card-interest-calculator** (finance): Interest accrual over time is a natural line/area chart candidate.
- **dti-calculator** (finance): Debt payments vs. income is a natural two-slice composition donut, similar to the Budget Calculator.
- **quadratic-solver** (math): Plotting the parabola y = ax² + bx + c with the roots marked is a classic, high-value visualization for this exact tool.
- **breakeven-calculator** (finance): Breakeven analysis is a textbook line chart (cost line vs. revenue line crossing at the breakeven point).
- **heart-rate-zone-calculator** (health): Five heart-rate zones as ranges is a textbook horizontal zone/bar chart, a very common visualization for this exact tool.
- **standard-deviation-calculator** (math): The tool already takes a full list of numbers as input; plotting those data points (with the mean marked) would visualize the spread directly.
- **credit-card-payoff-calculator** (finance): Payoff schedules are inherently time-series; a balance-over-time chart mirroring the Debt Payoff Calculator would fit.
- **calorie-goal-calculator** (health): Projected weight change over several weeks at the calculated calorie target is a natural trend line.
- **pregnancy-due-date-calculator** (health): Current week out of 40 is a natural progress-bar or timeline visualization.
- **simple-interest-calculator** (finance): Principal vs. interest earned is a natural composition donut, matching the pattern already used elsewhere.
- **roi-calculator** (finance): Initial investment vs. gain is a natural composition donut.
- **tip-calculator** (misc): Bill amount vs. tip vs. total is a natural composition donut.
- **bmr-calculator** (health): BMR vs. TDEE at each activity level is a natural small bar-chart comparison.
- **salary-calculator** (finance): Gross pay vs. deductions vs. net pay is a strong composition-donut candidate, same pattern as the Budget Calculator.
- **sales-tax-calculator** (finance): Base price vs. tax amount is the exact same composition pattern already used for the VAT and GST calculators.
- **discount-stack-calculator** (finance): Sequential discount stacking is a natural waterfall or composition visualization.
- **extra-payment-calculator** (finance): Shows payoff timeline impact; a balance-over-time comparison chart (with vs. without extra payments) would strengthen it, similar to the Debt Payoff Calculator.
- **discount-calculator** (finance): Final price vs. amount saved is a natural composition donut, matching the discount-style tools already charted.
- **body-fat-calculator** (health): Body fat % vs. lean mass % is a natural two-slice composition chart, consistent with the existing BMI gauge treatment.
- **inflation-calculator** (finance): Purchasing power erosion over time is a classic line-chart use case.
- **net-worth-calculator** (finance): Assets vs. liabilities composition is a natural donut chart candidate, consistent with the Tier 3 pattern already used for Budget/VAT/Margin calculators.
- **tdee-calculator** (health): BMR vs. activity-adjusted TDEE at each activity level is a natural small bar-chart comparison.
- **mean-median-mode-calculator** (math): The tool takes a list of numbers as input; a simple distribution/dot plot would help visualize where the mean, median and mode fall.
- **macro-calculator** (health): Protein/carb/fat split is a textbook donut-chart composition, consistent with the Tier 3 pattern.
- **statistics-calculator** (math): The tool takes a full data set as input; a distribution chart would help visualize the spread alongside the computed statistics.
- **future-value-calculator** (finance): Growth toward a future value over time fits the same growth-chart pattern already used for compound interest and investment tools.
- **present-value-calculator** (finance): Showing discounted value across a few time horizons would help illustrate the discounting concept.
- **cagr-calculator** (finance): A start-value-to-end-value growth line over the holding period is a natural fit.
- **apy-calculator** (finance): Compounding growth over a year fits the same growth-chart pattern used for compound interest.
- **lease-calculator** (finance): Monthly payment composition (depreciation vs. finance charge) is a natural donut, similar to a loan breakdown.
- **student-loan-calculator** (finance): This is an amortizing loan; a balance-over-time chart matching the Loan/Mortgage Calculator pattern is a strong, direct fit.
- **inflation-adjusted-salary-calculator** (finance): Nominal vs. real (inflation-adjusted) salary over time is a natural comparison line chart.
- **savings-interest-calculator** (finance): Interest growth over time fits the same growth-chart pattern used for compound interest and savings tools.
- **hourly-wage-calculator** (finance): Regular vs. overtime pay is a natural composition donut.
- **commission-calculator** (finance): Base salary vs. commission earned is a natural composition donut.
- **lean-body-mass-calculator** (health): Lean mass vs. fat mass is a natural composition donut, the same pattern as the Body Fat Calculator.
- **waist-to-hip-ratio-calculator** (health): The ratio's health-risk category is a natural gauge visualization, similar to the BMI gauge.
- **waist-to-height-ratio-calculator** (health): The ratio's health-risk category is a natural gauge visualization, similar to the BMI gauge.
- **army-body-fat-calculator** (health): Result vs. the Army's maximum allowable standard is a natural gauge visualization.
- **target-heart-rate-calculator** (health): Target heart rate zones as ranges is a natural horizontal zone/bar chart, same pattern as the Heart Rate Zone Calculator.
- **one-rep-max-calculator** (health): A percentage-of-1RM table across rep ranges is commonly shown as a small bar chart alongside the estimate.
- **bac-calculator** (health): BAC decreasing back to zero over time is an exponential-decay-style curve, similar in spirit to the Half-Life Calculator.
- **pregnancy-weight-gain-calculator** (health): Recommended weight gain range across trimesters/weeks is a natural trend range chart.
- **pregnancy-week-calculator** (health): Current week out of 40 is a natural progress-bar or timeline visualization.
- **binomial-calculator** (math): A binomial probability distribution across outcome counts is a classic, strong bar-chart use case.
- **average-calculator** (math): The tool takes a list of numbers as input; a simple bar/dot plot of the values with the average marked is a natural fit.
- **median-calculator** (math): The tool takes a list of numbers as input; a simple bar/dot plot of the values with the median marked is a natural fit.
- **ev-charging-cost-calculator** (automotive): Cost per charge vs. cost over a period (weekly/monthly/yearly) lends itself to a simple trend or comparison chart.
- **vehicle-depreciation-calculator** (automotive): Vehicle value declining over years is a classic depreciation curve, the same pattern as the finance Depreciation Calculator.
- **car-loan-affordability-calculator** (automotive): Recommended payment vs. income is a natural composition donut, similar to the DTI Calculator.
- **profit-margin-calculator** (finance): Cost vs. profit is a natural composition donut, directly analogous to the Margin Calculator already charted.
- **gross-margin-calculator** (finance): COGS vs. gross profit is a natural composition donut.
- **ebitda-calculator** (finance): Expense category breakdown feeding into EBITDA is a natural composition donut.
- **working-capital-calculator** (finance): Current assets vs. current liabilities is a natural composition donut, similar to the Net Worth Calculator.
- **cash-flow-calculator** (finance): Inflows vs. outflows is a natural composition donut.
- **cgpa-calculator** (education): Multi-semester GPA input is naturally suited to a per-semester trend line chart.
- **attendance-calculator** (education): Attended vs. missed is a simple two-slice composition, a small donut chart (like the Tier 3 finance tools) would fit.
- **rent-calculator** (finance): Recommended rent vs. income is a natural composition donut, similar to the Debt-to-Income Calculator.
- **rental-property-calculator** (finance): Rental income vs. expenses (and resulting cash flow) is a natural composition donut, this is a cash-flow-heavy calculator.
- **apr-calculator** (finance): Interest vs. fees within the APR is a natural composition donut.
- **home-equity-loan-calculator** (finance): This is an amortizing loan; a balance-over-time chart matching the Loan/Mortgage pattern is a strong fit.
- **payback-period-calculator** (finance): Cumulative cash flow until it crosses the initial investment is a classic payback-period line chart.
- **rmd-calculator** (finance): RMD amount changes each year as the divisor changes; a multi-year projected RMD schedule chart is a natural fit.
- **depreciation-calculator** (finance): Asset value declining over the depreciation schedule is a classic, strong line-chart candidate.
- **payroll-hours-calculator** (date-time): Seven days of hours-per-day data is a natural fit for a daily bar chart alongside the weekly total.
- **z-score-calculator** (math): A bell-curve visualization showing where the value falls relative to the mean would make the percentile concept far more intuitive.
- **number-sequence-calculator** (math): The tool literally generates a sequence of terms; a line chart of the first N terms is a natural, direct fit.
- **half-life-calculator** (math): Exponential decay is inherently a curve over time; a decay chart would visually reinforce the remaining-amount output.
- **electricity-calculator** (science): Daily/monthly/yearly cost figures could be shown as a simple cumulative-cost bar chart.

## Full List: Tools Missing a Worked Numeric Example (Priority List for Phase 2)

**finance** (28): amortization-schedule-calculator, mortgage-refinance-calculator, credit-card-interest-calculator, dti-calculator, savings-goal-calculator, debt-payoff-calculator, auto-loan-calculator, credit-card-payoff-calculator, mortgage-calculator, salary-calculator, extra-payment-calculator, emi-calculator, loan-calculator, net-worth-calculator, retirement-calculator, lease-calculator, student-loan-calculator, roth-ira-calculator, savings-interest-calculator, annual-income-calculator, hourly-wage-calculator, house-affordability-calculator, rental-property-calculator, apr-calculator, home-equity-loan-calculator, cd-calculator, traditional-ira-calculator, debt-consolidation-calculator

**health** (30): heart-rate-zone-calculator, calorie-goal-calculator, water-intake-calculator, pregnancy-due-date-calculator, bmr-calculator, ideal-weight-calculator, body-fat-calculator, protein-calculator, ovulation-calculator, macro-calculator, lean-body-mass-calculator, body-surface-area-calculator, waist-to-hip-ratio-calculator, waist-to-height-ratio-calculator, army-body-fat-calculator, target-heart-rate-calculator, running-pace-calculator, walking-calories-calculator, pregnancy-weight-gain-calculator, pregnancy-week-calculator, due-date-reverse-calculator, fertility-window-calculator, healthy-weight-calculator, period-calculator, conception-calculator, gfr-calculator, fat-intake-calculator, carbohydrate-calculator, body-type-calculator, sleep-calculator

**math** (26): quadratic-solver, scientific-calculator, standard-deviation-calculator, fraction-calculator, prime-number-calculator, mean-median-mode-calculator, statistics-calculator, matrix-calculator, gcf-calculator, binomial-calculator, percentage-difference-calculator, average-calculator, median-calculator, triangle-calculator, circle-calculator, distance-calculator, slope-calculator, z-score-calculator, confidence-interval-calculator, number-sequence-calculator, factor-calculator, sample-size-calculator, half-life-calculator, big-number-calculator, rounding-calculator, roman-numeral-converter

**construction** (26): tile-calculator, paint-calculator, flooring-calculator, gravel-calculator, square-footage-calculator, mulch-calculator, asphalt-calculator, concrete-block-calculator, deck-calculator, fence-calculator, wallpaper-calculator, paver-calculator, drywall-calculator, soil-calculator, topsoil-calculator, cubic-yard-calculator, cubic-feet-calculator, cubic-meter-calculator, cement-calculator, sand-calculator, gravel-volume-calculator, rebar-calculator, beam-load-calculator, steel-weight-calculator, lumber-calculator, stair-calculator

**developer** (25): markdown-previewer, lorem-ipsum-generator, regex-tester, hex-rgb-converter, contrast-checker, color-palette-generator, hsl-converter, url-encoder, json-formatter, base64-tool, uuid-validator, xml-formatter, xml-validator, csv-to-json, json-to-csv, sql-formatter, jwt-decoder, jwt-generator, hash-generator, cron-expression-generator, unix-timestamp-converter, html-minifier, html-beautifier, css-minifier, css-beautifier

**converters** (2): data-storage-converter, currency-converter

**text** (14): find-and-replace, text-diff-checker, remove-duplicate-lines, word-counter, case-converter, character-counter, reading-time-calculator, text-sorter, alphabetizer, remove-empty-lines, remove-extra-spaces, reverse-text, shuffle-text, html-encoder-decoder

**date-time** (10): timezone-converter, working-days-calculator, countdown-timer, add-days-calculator, subtract-days-calculator, time-duration-calculator, week-number-calculator, stopwatch, payroll-hours-calculator, age-difference-calculator

**seo** (11): meta-tag-generator, robots-txt-generator, xml-sitemap-generator, open-graph-generator, twitter-card-generator, schema-markup-generator, canonical-tag-generator, hreflang-generator, keyword-density-checker, google-serp-preview, utm-url-builder

**misc** (4): font-signature-generator, handwritten-signature-pad, email-signature-generator, random-number-generator

**pdf** (6): watermark-pdf, rotate-pdf, jpg-to-pdf, pdf-to-jpg, merge-pdf, compress-pdf

**image** (7): image-resizer, image-compressor, webp-to-jpg, jpg-to-webp, svg-optimizer, image-metadata-remover, exif-viewer

**automotive** (6): fuel-economy-calculator, ev-charging-cost-calculator, tire-size-calculator, vehicle-depreciation-calculator, car-loan-affordability-calculator, engine-horsepower-calculator

**security** (4): email-format-validator, password-generator, subnet-calculator, cidr-range-calculator

**science** (4): voltage-drop-calculator, ohms-law-calculator, electricity-calculator, density-calculator

**ai** (2): text-summarizer, paragraph-rewriter


## Full List: Tools With Thin Explanation (<2 headings) — Priority List for Phase 2

- **stopwatch** (date-time, 1 heading)
- **business-hours-calculator** (date-time, 1 heading)
- **shift-calculator** (date-time, 1 heading)
- **payroll-hours-calculator** (date-time, 1 heading)
- **triangle-calculator** (math, 1 heading)
- **circle-calculator** (math, 1 heading)
- **distance-calculator** (math, 1 heading)
- **root-calculator** (math, 1 heading)
- **slope-calculator** (math, 1 heading)
- **z-score-calculator** (math, 1 heading)
- **confidence-interval-calculator** (math, 1 heading)
- **number-sequence-calculator** (math, 1 heading)
- **big-number-calculator** (math, 1 heading)
- **rounding-calculator** (math, 1 heading)
- **ohms-law-calculator** (science, 1 heading)
- **bandwidth-calculator** (developer, 1 heading)
- **density-calculator** (science, 1 heading)
