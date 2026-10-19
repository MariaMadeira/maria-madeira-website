import type { Lang } from "./i18n";

/**
 * Number and label formatting for charts and figures, per language.
 *
 * English keeps the formatting the site has always used. Portuguese uses a
 * decimal comma and groups thousands with a space only from five digits
 * (1788, 141 073), as approved for the /pt pages.
 */
export function formatNumber(n: number, lang: Lang, decimals = 0): string {
    if (lang === "en") return n.toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const [int, frac] = Math.abs(n).toFixed(decimals).split(".");
    const grouped = int.length >= 5 ? int.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : int;
    return (n < 0 ? "-" : "") + grouped + (frac ? "," + frac : "");
}

/** A decimal string such as "33.1" or "2.2" in the page's language. */
export function decimal(value: string, lang: Lang): string {
    return lang === "pt" ? value.replace(".", ",") : value;
}

/** Abbreviated month and two-digit year, e.g. "Oct 25" / "out. 25". */
const MONTHS_PT: Record<string, string> = {
    Jan: "jan.", Feb: "fev.", Mar: "mar.", Apr: "abr.", May: "mai.", Jun: "jun.",
    Jul: "jul.", Aug: "ago.", Sep: "set.", Oct: "out.", Nov: "nov.", Dec: "dez.",
};
export function monthLabel(enLabel: string, lang: Lang): string {
    if (lang === "en") return enLabel;
    const [m, ...rest] = enLabel.split(" ");
    return [MONTHS_PT[m] ?? m, ...rest].join(" ");
}

/**
 * Period labels for the email revenue data (src/data/emailRevenue.ts), which
 * stays in English and is shared by the case study chart and the Klaviyo
 * article. Same order as EMAIL_PERIODS.
 */
export const EMAIL_PERIOD_LINES_PT: string[][] = [
    ["2021", "(set. a dez.)"],
    ["2022"],
    ["2023"],
    ["2024"],
    ["12 meses", "até jul. 2025"],
];
