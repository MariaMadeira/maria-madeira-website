/**
 * The Portuguese pages (/pt) and their English twins.
 *
 * PAIRS is the single list of translated pages: Seo reads it for hreflang,
 * the navbar for the EN | PT switch, and prerender.mjs for <html lang> and
 * the sitemap's xhtml:link alternates. A page with no entry has no twin, so
 * it carries no cross-language hreflang, and the switch falls back to the
 * other language's homepage.
 */
export const PAIRS: { en: string; pt: string }[] = [
    { en: "/", pt: "/pt" },
    { en: "/services/email-marketing", pt: "/pt/servicos/email-marketing" },
    { en: "/contact", pt: "/pt/contacto" },
];

export type Lang = "en" | "pt";

export function langOf(path: string): Lang {
    return path === "/pt" || path.startsWith("/pt/") ? "pt" : "en";
}

/** The same page in the other language, or null when it has no twin. */
export function twinOf(path: string): string | null {
    const pair = PAIRS.find((p) => p.en === path || p.pt === path);
    if (!pair) return null;
    return langOf(path) === "pt" ? pair.en : pair.pt;
}

/** Where the language switch sends you: the twin, else that language's homepage. */
export function switchTarget(path: string): string {
    return twinOf(path) ?? (langOf(path) === "pt" ? "/" : "/pt");
}

/** hreflang alternates for a paired page: en-GB, pt-PT and x-default (English). */
export function alternatesOf(path: string): { hreflang: string; path: string }[] {
    const pair = PAIRS.find((p) => p.en === path || p.pt === path);
    if (!pair) return [];
    return [
        { hreflang: "en-GB", path: pair.en },
        { hreflang: "pt-PT", path: pair.pt },
        { hreflang: "x-default", path: pair.en },
    ];
}
