/**
 * English copy for the case study charts (src/components/ResultCharts.tsx).
 * See src/i18n/resultCharts.ts. Numbers arrive already formatted for the
 * page's language; month and period labels are passed in by the component.
 */
const AUGUST_NOTE = "August 2026 covers 1 to 26 August and is understated by conversion lag.";

const en = {
    ads: {
        source: "Source: Google Ads, full account export",
        augustNote: AUGUST_NOTE,
        roasTitle: "Monthly ROAS vs break-even",
        roasSeries: "Monthly ROAS",
        breakEven: "Break-even",
        roasNote: (breakEven: number) => `One month below the ${breakEven}% break-even. ${AUGUST_NOTE}`,
        /** months: [label, ROAS] in order. */
        roasDesc: (breakEven: number, months: [string, number][]) =>
            `Bar chart of monthly return on ad spend from October 2025 to August 2026, against a ${breakEven}% break-even line. ${months.map(([m, v]) => `${m} ${v}%`).join(", ")}. Ten of the eleven months sit above break-even; February 2026 at 396% is the exception and is the only bar shown in the negative colour. ${AUGUST_NOTE}`,
        spendTitle: "Monthly spend vs attributed revenue",
        spendSeries: "Ad spend",
        revenueSeries: "Attributed revenue",
        /** months: [label, spend, revenue] in order, money already formatted. */
        spendDesc: (months: [string, string, string][], totalSpend: string, totalRevenue: string) =>
            `Grouped bar chart comparing ad spend with attributed revenue each month from October 2025 to August 2026. ${months.map(([m, s, r]) => `${m}, spend ${s}, revenue ${r}`).join("; ")}. Totals: ${totalSpend} spend and ${totalRevenue} revenue. ${AUGUST_NOTE}`,
    },
    ai: {
        impressionsTitle: "Daily impressions in Google's AI features",
        impressionsSubtitle: "Weekly average, 18 May to 30 August 2026",
        /** Week-starting dates, as the description reads them. */
        weeks: ["18 May", "25 May", "1 Jun", "8 Jun", "15 Jun", "22 Jun", "29 Jun", "6 Jul", "13 Jul", "20 Jul", "27 Jul", "3 Aug", "10 Aug", "17 Aug", "24 Aug"],
        /** weeks: [week, impressions] in order, impressions already formatted. */
        impressionsDesc: (weeks: [string, string][], first: string, peak: string, last: string) =>
            `Line chart of the weekly average of daily impressions in Google's AI features, 18 May to 30 August 2026. ${weeks.map(([w, v]) => `week starting ${w}, ${v}`).join("; ")}. The series rises from ${first} to a peak of ${peak} in the week starting 10 August, then eases to ${last}.`,
        visibilityTitle: "2nd of 5 in Semrush AI Visibility",
        visibilitySubtitle: "Gap to the category leader cut from 8 points to 4 in three weeks, 5 to 24 August 2026.",
        visibilityA11yTitle: "Semrush AI Visibility score across the tracked set",
        visibilityLabels: ["Category leader", "The Black Farmer", "Competitor", "Competitor", "Competitor"],
        visibilityDesc: "Horizontal bar chart of Semrush AI Visibility scores across five tracked brands. The category leader scores 31, The Black Farmer 27, and three further competitors score 22, 22 and 14. Only The Black Farmer is highlighted.",
    },
    outcomes: {
        title: "Outcomes of the 30-day re-evaluation",
        labels: ["improved", "stable or mixed", "declined, each with a diagnosed cause"],
        /** parts: "60 improved" and so on, in order. */
        desc: (total: number, parts: string[]) => `Stacked bar of ${total} pages re-evaluated at 30 days: ${parts.join(", ")}.`,
    },
    email: {
        title: "Attributed email revenue by period",
        subtitle: "Campaigns and automated flows, values in £K",
        campaigns: "Campaigns",
        flows: "Automated flows",
        note: "2021 covers September to December, when the programme started.",
        source: "Source: Klaviyo Business Overview exports.",
        /** periods: [label, campaigns, flows, total] in order, money already formatted. */
        desc: (periods: [string, string, string, string][]) =>
            `Stacked bar chart of attributed email revenue by period, in thousands of pounds, split between campaigns and automated flows. ${periods.map(([p, c, f, t]) => `${p}, campaigns ${c}, flows ${f}, total ${t}`).join("; ")}. Every period is higher than the one before it.`,
    },
};

export default en;
