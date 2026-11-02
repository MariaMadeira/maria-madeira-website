// Centralised JSON-LD builders so structured data stays consistent across pages.
//
// One Person (#person), one Organization (#organization) and one WebSite
// (#website), defined once here and declared in full on every page that has
// JSON-LD. Google does not follow an @id to another page, so a page that
// references one of them must also carry it, and because every page carries
// the same three objects, the merged entity can never hold two different
// values for one property (two urls, two jobTitles) again.
//
// Roles, used the same way everywhere: the Person is the author and creator
// (Article.author, CreativeWork.creator, ProfilePage.mainEntity); the
// Organization is the business that sells and publishes (Service.provider,
// Article.publisher, WebSite.publisher), with the Person as its founder.

import { localOgImage, type Lang } from "./i18n";
import { EDUCATION, HAS_CREDENTIAL, PROGRAM_MEMBERSHIP } from "./credentials";

export const SITE_URL = "https://mariamadeira.com";
export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** References by @id, for author/creator/provider/publisher fields. */
export const PERSON_REF = { "@id": PERSON_ID } as const;
export const ORG_REF = { "@id": ORG_ID } as const;
export const WEBSITE_REF = { "@id": WEBSITE_ID } as const;

type Node = Record<string, unknown>;

/** BCP 47 code for a page's inLanguage. */
export function langCode(lang: Lang): "en-GB" | "pt-PT" {
    return lang === "pt" ? "pt-PT" : "en-GB";
}

/** The markets she works in, everywhere areaServed appears. */
export const AREA_SERVED = [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Portugal" },
];

/** Locality only: she works from home, so no street address is published. */
const ADDRESS = { "@type": "PostalAddress", "addressLocality": "Lisbon", "addressCountry": "PT" };

/**
 * Third-party profiles, public and Maria's own. Fiverr, Contra, Clutch and
 * Influee answered 200 logged out on 2 November 2026. LinkedIn and Malt turn
 * away logged-out bots (sign-up wall, bot check) but are public profiles, so
 * they are listed by Maria's decision. Credential pages are not profiles:
 * they stay in hasCredential.
 */
export const SAME_AS = [
    "https://www.linkedin.com/in/maria-madeira-growth",
    "https://www.malt.com/profile/mariamadeira",
    "https://www.fiverr.com/maria_mmadeira",
    "https://contra.com/maria_madeira_1pwgye97",
    "https://clutch.co/profile/maria-madeira",
    "https://influee.co/partnership/maria-madeira",
];

/** The canonical one-sentence description, the same wherever the entity is introduced. */
export const PERSON_DESCRIPTION =
    "Maria Madeira is an independent growth consultant based in Lisbon, Portugal, who helps e-commerce brands in the UK and Portugal get found on Google and in AI search, and grow revenue with Klaviyo email marketing and paid ads.";

/** The institutions in her education credentials, as Person.alumniOf. */
const ALUMNI_OF = EDUCATION
    .map((c) => (c.schema as Node | undefined)?.recognizedBy)
    .filter((org): org is Node => Boolean(org));

/**
 * Maria's portrait, the photo on /about, at a stable URL with a descriptive
 * file name. The same file is the og:image of /about and /pt/sobre.
 */
export const PERSON_PHOTO = {
    path: "/images/maria-madeira-growth-consultant.jpg",
    width: 1200,
    height: 1607,
    alt: "Maria Madeira, growth consultant in Lisbon",
} as const;

const PERSON_IMAGE = {
    "@type": "ImageObject",
    "url": `${SITE_URL}${PERSON_PHOTO.path}`,
    "contentUrl": `${SITE_URL}${PERSON_PHOTO.path}`,
    "width": PERSON_PHOTO.width,
    "height": PERSON_PHOTO.height,
    "caption": PERSON_PHOTO.alt,
};

/** The Person, in full. Every page with JSON-LD declares exactly this object. */
export const PERSON_NODE = {
    "@type": "Person",
    "@id": PERSON_ID,
    "name": "Maria Madeira",
    "url": `${SITE_URL}/about`,
    "image": PERSON_IMAGE,
    "jobTitle": "Growth Consultant",
    "description": PERSON_DESCRIPTION,
    // Neutral on purpose: it names what she does and where, never anyone else
    // who shares the name.
    "disambiguatingDescription": "Independent growth consultant in Lisbon, Portugal: SEO and AI search optimisation (AEO), Klaviyo email marketing and paid ads for e-commerce brands.",
    "address": ADDRESS,
    "homeLocation": { "@type": "Place", "name": "Lisbon, Portugal", "address": ADDRESS },
    "worksFor": ORG_REF,
    "knowsAbout": [
        "Search Engine Optimisation (SEO)", "Answer Engine Optimisation (AEO)",
        "Generative Engine Optimisation (GEO)", "AI search", "Email Marketing", "Klaviyo",
        "Lifecycle Marketing", "Google Ads", "Meta Ads", "Microsoft Ads", "Paid Acquisition",
        "Website Strategy and Build", "Shopify", "E-commerce Platform Migration", "E-commerce Growth",
    ],
    "knowsLanguage": ["en", "pt"],
    "sameAs": SAME_AS,
    "alumniOf": ALUMNI_OF,
    "hasCredential": HAS_CREDENTIAL,
    // A programme membership rather than an organisation she belongs to.
    "memberOf": PROGRAM_MEMBERSHIP,
};

/**
 * The business. No sameAs: the only profiles that exist are personal ones,
 * and pointing the business at the personal LinkedIn would merge the two
 * entities. Add a company page here if one is created.
 */
export const ORG_NODE = {
    "@type": "Organization",
    "@id": ORG_ID,
    "name": "Maria Madeira",
    "url": SITE_URL,
    "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/apple-touch-icon.png`,
        "width": 180,
        "height": 180,
    },
    "description": "Independent growth consultancy of Maria Madeira, based in Lisbon, Portugal: SEO and AI search optimisation, Klaviyo email marketing, Google, Meta and Microsoft Ads, and websites for e-commerce brands in the UK and Portugal.",
    "founder": PERSON_REF,
    "address": ADDRESS,
    "areaServed": AREA_SERVED,
    "taxID": "256029342",
    "email": "info@mariamadeira.com",
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@mariamadeira.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Portuguese"],
        "areaServed": AREA_SERVED,
    },
};

// No SearchAction: the site has no search, and claiming one that does not
// exist is the most common way this node gets ignored.
export const WEBSITE_NODE = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "name": "Maria Madeira",
    "url": SITE_URL,
    "inLanguage": ["en-GB", "pt-PT"],
    "publisher": ORG_REF,
};

/** A full JSON-LD document: the page's own nodes plus the three shared entities. */
export function withEntities(nodes: Node[]) {
    return {
        "@context": "https://schema.org",
        "@graph": [...nodes, PERSON_NODE, ORG_NODE, WEBSITE_NODE],
    };
}

/** The home page of each language, the first rung of every breadcrumb. */
function homeOf(lang: Lang) {
    return lang === "pt" ? { name: "Início", item: `${SITE_URL}/pt` } : { name: "Home", item: `${SITE_URL}/` };
}

/** BreadcrumbList from Home to the page: pass the rungs after Home, as [name, path]. */
export function breadcrumbNode(lang: Lang, trail: [string, string][]) {
    const rungs = [homeOf(lang), ...trail.map(([name, path]) => ({ name, item: `${SITE_URL}${path}` }))];
    return {
        "@type": "BreadcrumbList",
        "itemListElement": rungs.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.name, "item": r.item })),
    };
}

/** A page-level node (WebPage, CollectionPage, AboutPage, ProfilePage...). */
export function webPageNode({ type = "WebPage", path, name, description, lang, ...extra }: {
    type?: string;
    path: string;
    name: string;
    description?: string;
    lang: Lang;
} & Node) {
    const url = `${SITE_URL}${path}`;
    return {
        "@type": type,
        "@id": `${url}#webpage`,
        "url": url,
        "name": name,
        ...(description ? { "description": description } : {}),
        "inLanguage": langCode(lang),
        "isPartOf": WEBSITE_REF,
        ...extra,
    };
}

/** A Service sold by the Organization, in the UK and Portugal. */
export function serviceNode({ path, name, serviceType, description, lang, ...extra }: {
    path: string;
    name: string;
    serviceType: string | string[];
    description?: string;
    lang: Lang;
} & Node) {
    const url = `${SITE_URL}${path}`;
    return {
        "@type": "Service",
        "@id": `${url}#service`,
        "name": name,
        "serviceType": serviceType,
        "url": url,
        ...(description ? { "description": description } : {}),
        "inLanguage": langCode(lang),
        "provider": ORG_REF,
        "areaServed": AREA_SERVED,
        ...extra,
    };
}

/** FAQPage from the question list a page also renders, so the two cannot drift. */
export function faqNode(path: string, lang: Lang, faqs: { q: string; a: string }[]) {
    return {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${path}#faq`,
        "inLanguage": langCode(lang),
        "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
    };
}

interface BlogPostMeta {
    path: string;
    headline: string;
    description: string;
    /** Full ISO 8601 with time zone, or a plain date. Per language: the /pt
        posts went live with the Portuguese site, not with the English post. */
    datePublished: string;
    dateModified: string;
    /** The post's OG image, root-relative. */
    image: string;
    lang: Lang;
    articleSection?: string;
    /** Extra properties, e.g. `about`. */
    extra?: Node;
}

/**
 * BlogPosting node for a post. Both languages use the same type, so the twins
 * read as one article in two languages.
 */
export function blogPostingNode({ path, headline, description, datePublished, dateModified, image, lang, articleSection, extra }: BlogPostMeta) {
    const url = `${SITE_URL}${path}`;
    const blog = lang === "pt" ? `${SITE_URL}/pt/blog` : `${SITE_URL}/blog`;
    return {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        "headline": headline,
        "description": description,
        "inLanguage": langCode(lang),
        "image": `${SITE_URL}${localOgImage(image, lang)}`,
        "author": PERSON_REF,
        "publisher": ORG_REF,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "mainEntityOfPage": url,
        "isPartOf": { "@type": "Blog", "@id": `${blog}#blog`, "url": blog },
        ...(articleSection ? { "articleSection": articleSection } : {}),
        ...extra,
    };
}

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
    /** The case study's own image: absolute URL or root-relative path. */
    image: string;
    /** The organisation the case study is about, where the client is named. */
    about?: { name: string; url: string };
    /** Short breadcrumb label; defaults to the headline. */
    breadcrumb?: string;
    /** "pt" for the /pt twin: inLanguage pt-PT and a Portuguese trail. */
    lang?: Lang;
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
    const hubPath = pt ? "/pt/casos-de-estudo" : "/case-studies";
    const hub = `${SITE_URL}${hubPath}`;
    const hubName = pt ? "Casos de estudo" : "Case Studies";
    return withEntities([
        {
            "@type": "Article",
            "@id": `${url}#article`,
            "headline": headline,
            "description": description,
            "image": localOgImage(image.startsWith("http") ? image : `${SITE_URL}${image}`, lang),
            "author": PERSON_REF,
            "publisher": ORG_REF,
            "datePublished": datePublished,
            "dateModified": dateModified,
            "mainEntityOfPage": url,
            "inLanguage": langCode(lang),
            ...(about ? { "about": { "@type": "Organization", "name": about.name, "url": about.url } } : {}),
            // Declared in full: Google does not resolve an @id across pages.
            "isPartOf": { "@type": "CollectionPage", "@id": `${hub}#collection`, "name": hubName, "url": hub },
        },
        breadcrumbNode(lang, [[hubName, hubPath], [breadcrumb ?? headline, path]]),
    ]);
}

interface PortfolioMeta {
    /** Route path, e.g. "/portfolio-ousadia". */
    path: string;
    /** Project name, used as both the CreativeWork name and the breadcrumb leaf. */
    name: string;
    description: string;
    /** The subject of the work: the client brand or practice, with its site
        where it is live. Left out where the page does not name the client. */
    about?: { type: "Brand" | "Organization"; name: string; url?: string };
    /** Root-relative path to a representative image from the project. */
    image: string;
    /** "pt" for the /pt twin: inLanguage pt-PT and a Portuguese trail. */
    lang?: Lang;
}

/**
 * CreativeWork + BreadcrumbList for a portfolio project, with the Person as
 * creator, so these pages join the site's entity graph.
 */
export function portfolioJsonLd({ path, name, description, about, image, lang = "en" }: PortfolioMeta) {
    const url = `${SITE_URL}${path}`;
    const pt = lang === "pt";
    return withEntities([
        {
            "@type": "CreativeWork",
            "@id": `${url}#work`,
            "name": name,
            "description": description,
            "url": url,
            "creator": PERSON_REF,
            ...(about ? { "about": { "@type": about.type, "name": about.name, ...(about.url ? { "url": about.url } : {}) } } : {}),
            "image": `${SITE_URL}${encodeURI(image)}`,
            "inLanguage": langCode(lang),
        },
        breadcrumbNode(lang, [[pt ? "Portefólio" : "Portfolio", pt ? "/pt/portefolio" : "/portfolio"], [name, path]]),
    ]);
}
