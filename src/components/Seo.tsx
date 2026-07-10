import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mariamadeira.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

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
}

export default function Seo({
    title,
    description,
    path,
    ogImage = DEFAULT_OG_IMAGE,
    jsonLd,
    noIndex = false,
}: SeoProps) {
    const canonical = `${SITE_URL}${path}`;
    const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {noIndex && <meta name="robots" content="noindex" />}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={imageUrl} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {jsonLd && IS_SERVER && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
}
