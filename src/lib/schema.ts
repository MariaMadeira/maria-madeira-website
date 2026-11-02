// Centralised JSON-LD builders so structured data stays consistent across pages.
// Every entity references the canonical Person node (@id "#person") defined in
// full on the homepage and About page, so search engines and AI answer engines
// merge them into one entity rather than treating each page as a new author.

export const SITE_URL = "https://mariamadeira.com";
export const PERSON_ID = `${SITE_URL}/#person`;

/** Reference to the canonical Person entity, for author/publisher fields. */
export const PERSON_REF = { "@id": PERSON_ID } as const;

/**
 * The Person node in short form, for pages whose author/publisher point at
 * PERSON_ID: Google does not follow an @id to another page, so a page that
 * references the Person must also declare it.
 */
const PERSON_NODE = {
    "@type": "Person",
    "@id": PERSON_ID,
    "name": "Maria Madeira",
    "url": `${SITE_URL}/about`,
    "sameAs": ["https://www.linkedin.com/in/maria-madeira-growth"],
} as const;

interface CaseStudyMeta {
    /** Route path, e.g. "/case-study-email". */
    path: string;
    /** Clean human title (no "| ..." SEO suffix). Becomes the schema headline. */
    headline: string;
    /** One-sentence summary of the engagement and its outcome. */
    description: string;
    /**
     * Full ISO 8601 date and time, with time zone, of the git commit that put
     * this language version live. Derived from `git log` at author time: real
     * and verifiable, not guessed.
     */
    datePublished: string;
    /**
     * Full ISO 8601 date and time of the commit that last changed the page's
     * details. Hardcoded rather than read from git at build time because
     * Vercel's default shallow clone would truncate history in production.
     * Bump it in the page whenever a case study's details are updated.
     */
    dateModified: string;
    /** The page's OG image: absolute URL or root-relative path. */
    image: string;
    /** The organisation the case study is about, where the client is named. */
    about?: { name: string; url: string };
    /** Short breadcrumb label; defaults to the headline. */
    breadcrumb?: string;
    /** "pt" for the /pt twin: inLanguage pt-PT and a Portuguese trail. */
    lang?: "en" | "pt";
}

/**
 * Article + BreadcrumbList graph for a case study. Case studies are the proof
 * content AI answer engines lift and cite, so marking them up as authored,
 * attributed Articles makes them far more citable. Dates are git-derived (see
 * CaseStudyMeta) so both datePublished and dateModified are real.
 */
export function caseStudyJsonLd({ path, headline, description, datePublished, dateModified, image, about, breadcrumb, lang = "en" }: CaseStudyMeta) {
    const url = `${SITE_URL}${path}`;
    const pt = lang === "pt";
    const hub = pt ? `${SITE_URL}/pt/casos-de-estudo` : `${SITE_URL}/case-studies`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                "headline": headline,
                "description": description,
                "image": image.startsWith("http") ? image : `${SITE_URL}${image}`,
                "author": PERSON_REF,
                "publisher": PERSON_REF,
                "datePublished": datePublished,
                "dateModified": dateModified,
                "mainEntityOfPage": url,
                ...(pt ? { "inLanguage": "pt-PT" } : {}),
                ...(about ? { "about": { "@type": "Organization", "name": about.name, "url": about.url } } : {}),
                // Declared in full: Google does not resolve an @id across pages.
                "isPartOf": { "@type": "CollectionPage", "@id": `${hub}#collection`, "name": pt ? "Casos de estudo" : "Case Studies", "url": hub },
            },
            // The author and publisher, declared on the page for the same reason.
            PERSON_NODE,
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": pt ? "Início" : "Home", "item": pt ? `${SITE_URL}/pt` : `${SITE_URL}/` },
                    { "@type": "ListItem", "position": 2, "name": pt ? "Casos de estudo" : "Case Studies", "item": hub },
                    { "@type": "ListItem", "position": 3, "name": breadcrumb ?? headline, "item": url },
                ],
            },
        ],
    };
}

interface PortfolioMeta {
    /** Route path, e.g. "/portfolio-ousadia". */
    path: string;
    /** Project name, used as both the CreativeWork name and the breadcrumb leaf. */
    name: string;
    description: string;
    /** The subject of the work: the client brand or practice. */
    about: { type: "Brand" | "Organization"; name: string };
    /** Root-relative path to a representative image from the project. */
    image: string;
    /** "pt" for the /pt twin: inLanguage pt-PT and a Portuguese trail. */
    lang?: "en" | "pt";
}

/**
 * CreativeWork + BreadcrumbList for a portfolio project.
 *
 * creator points at the canonical Person node rather than repeating it, so these
 * pages join the site's entity graph instead of standing outside it as the only
 * content type with no structured data at all.
 */
export function portfolioJsonLd({ path, name, description, about, image, lang = "en" }: PortfolioMeta) {
    const url = `${SITE_URL}${path}`;
    const pt = lang === "pt";
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CreativeWork",
                "@id": `${url}#work`,
                "name": name,
                "description": description,
                "url": url,
                "creator": PERSON_REF,
                "about": { "@type": about.type, "name": about.name },
                "image": `${SITE_URL}${image}`,
                ...(pt ? { "inLanguage": "pt-PT" } : {}),
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": pt ? "Início" : "Home", "item": pt ? `${SITE_URL}/pt` : `${SITE_URL}/` },
                    { "@type": "ListItem", "position": 2, "name": pt ? "Portefólio" : "Portfolio", "item": pt ? `${SITE_URL}/pt/portefolio` : `${SITE_URL}/portfolio` },
                    { "@type": "ListItem", "position": 3, "name": name, "item": url },
                ],
            },
        ],
    };
}
