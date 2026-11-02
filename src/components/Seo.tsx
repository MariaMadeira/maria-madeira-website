import { Helmet } from "react-helmet-async";
import { alternatesOf, langOf, localOgImage, twinOf } from "../lib/i18n";

const SITE_URL = "https://mariamadeira.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-default.png`;

// React 19 hoists <title>, <meta> and <link> into <head> and adopts the copies
// already there during hydration. It does NOT hoist a non-async <script>, so a
// JSON-LD tag rendered here would stay inline in the tree. prerender.mjs lifts
// it into <head>, leaving nothing where the client expects it — a hydration
// mismatch. Render it on the server only: the tag prerender writes into <head>
// is plain HTML that React never owns, so it survives untouched.
const IS_SERVER = typeof window === "undefined";

interface SeoProps {
    /** Page title. Keep under 60 characters, main keyword first. */
    title: string;
    /** Meta description. Aim for 140–160 characters. */
    description: string;
    /** Route path, e.g. "/services". Becomes the canonical and og:url. */
    path: string;
    /** Absolute URL, or a root-relative path that gets resolved against SITE_URL. */
    ogImage?: string;
    /** Structured data serialised into a <script type="application/ld+json"> tag. */
    jsonLd?: Record<string, unknown>;
    noIndex?: boolean;
    /** og:type; "article" on case studies and blog posts. */
    ogType?: "website" | "article";
    /** og:image:alt and twitter:image:alt; defaults to the title. */
    ogImageAlt?: string;
}

/* Lets Google show large image previews and full-length snippets, AI
   Overviews included. Indexable pages only; noindex pages say just that. */
const ROBOTS = "max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export default function Seo({
    title,
    description,
    path,
    ogImage = DEFAULT_OG_IMAGE,
    jsonLd,
    noIndex = false,
    ogType = "website",
    ogImageAlt,
}: SeoProps) {
    const canonical = `${SITE_URL}${path}`;
    const pt = langOf(path) === "pt";
    const localImage = localOgImage(ogImage, pt ? "pt" : "en");
    const imageUrl = localImage.startsWith("http") ? localImage : `${SITE_URL}${localImage}`;
    const imageAlt = ogImageAlt ?? title;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {/* Only pages with a translation get hreflang; see src/lib/i18n.ts. */}
            {alternatesOf(path).map((alt) => (
                <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={`${SITE_URL}${alt.path}`} />
            ))}
            <meta name="robots" content={noIndex ? "noindex" : ROBOTS} />

            <meta property="og:site_name" content="Maria Madeira" />
            <meta property="og:locale" content={pt ? "pt_PT" : "en_GB"} />
            {twinOf(path) && <meta property="og:locale:alternate" content={pt ? "en_GB" : "pt_PT"} />}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="2400" />
            <meta property="og:image:height" content="1260" />
            <meta property="og:image:alt" content={imageAlt} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={imageAlt} />

            {jsonLd && IS_SERVER && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
}
