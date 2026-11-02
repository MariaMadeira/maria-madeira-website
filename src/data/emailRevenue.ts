/* ── Email programme data (Klaviyo) ──────────────────────────
 * Shared by the case study charts (ResultCharts) and the Klaviyo flows article.
 *
 * Two sets, never mixed in one chart, because their windows overlap:
 *
 * CALENDAR_YEARS: attributed revenue by calendar year in £K, split between
 * campaign sends and automated flows. Calendar years only: the partial
 * September to December 2021 period and the 12 months to July 2025 are not
 * calendar years, so neither is drawn here. Segments sum to the labelled
 * totals (£66.3K, £76.2K, £113K).
 *
 * TWELVE_MONTH_WINDOWS: the two comparable windows behind the +88.9% figure,
 * 12 months to July 2024 against 12 months to July 2025. The earlier window
 * is £134,380 / 1.889 = £71.1K, published as "c. £71K".
 */
export const CALENDAR_YEARS = [
    { lines: ["2022"], campaigns: 47.4, flows: 18.9, total: "£66.3K" },
    { lines: ["2023"], campaigns: 52.8, flows: 23.4, total: "£76.2K" },
    { lines: ["2024"], campaigns: 64.8, flows: 48.2, total: "£113K" },
];

export const TWELVE_MONTH_WINDOWS = {
    previous: { value: 134.38 / 1.889, total: "c. £71K" },
    latest: { value: 134.38, total: "£134K" },
    growth: "88.9",
};
