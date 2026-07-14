// Centralised JSON-LD builders so structured data stays consistent across pages.
// Every entity references the canonical Person node (@id "#person") defined in
// full on the homepage and About page, so search engines and AI answer engines
// merge them into one entity rather than treating each page as a new author.

export const SITE_URL = "https://mariamadeira.com";
export const PERSON_ID = `${SITE_URL}/#person`;

/** Reference to the canonical Person entity, for author/publisher fields. */
export const PERSON_REF = { "@id": PERSON_ID } as const;

interface CaseStudyMeta {
    /** Route path, e.g. "/case-study-email". */
    path: string;
    /** Clean human title (no "| ..." SEO suffix). Becomes the schema headline. */
    headline: string;
    /** One-sentence summary of the engagement and its outcome. */
    description: string;
    /**
     * ISO date (YYYY-MM-DD) of the first git commit that introduced the page.
     * Derived from `git log` at author time — real and verifiable, not guessed.
     */
    datePublished: string;
    /**
     * ISO date (YYYY-MM-DD) of the most recent commit touching the page.
     * Hardcoded rather than read from git at build time because Vercel's default
     * shallow clone would truncate history in production. Bump this in the same
     * file whenever a case study's numbers are updated.
     */
    dateModified: string;
    /** Short breadcrumb label; defaults to the headline. */
    breadcrumb?: string;
}

/**
 * Article + BreadcrumbList graph for a case study. Case studies are the proof
 * content AI answer engines lift and cite, so marking them up as authored,
 * attributed Articles makes them far more citable. Dates are git-derived (see
 * CaseStudyMeta) so both datePublished and dateModified are real.
 */
export function caseStudyJsonLd({ path, headline, description, datePublished, dateModified, breadcrumb }: CaseStudyMeta) {
    const url = `${SITE_URL}${path}`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                "headline": headline,
                "description": description,
                "author": PERSON_REF,
                "publisher": PERSON_REF,
                "datePublished": datePublished,
                "dateModified": dateModified,
                "mainEntityOfPage": url,
                "isPartOf": { "@id": `${SITE_URL}/case-studies#collection` },
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/case-studies` },
                    { "@type": "ListItem", "position": 3, "name": breadcrumb ?? headline, "item": url },
                ],
            },
        ],
    };
}
