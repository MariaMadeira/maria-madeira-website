import { Linkedin, ExternalLink } from "lucide-react";
import Seo from "../components/Seo";
import FinalCta from "../components/FinalCta";
import KlaviyoPartnerBadge from "../components/KlaviyoPartnerBadge";
import ToolTile from "../components/ToolTile";
import { TOOL_GROUPS } from "../lib/toolLogos";
import { SITE_URL, PERSON_ID } from "../lib/schema";
import { CREDENTIAL_GROUPS, HAS_CREDENTIAL, PROGRAM_MEMBERSHIP } from "../lib/credentials";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/about";
import "../styles/about.css";

// The About page is the canonical entity page for the Maria Madeira brand, so it
// carries the richest Person node. Same @id as the homepage (#person) so search
// and answer engines merge them into one entity. sameAs is the single strongest
// lever for entity recognition: add more verified profiles (Instagram, X,
// Crunchbase, guest-post bylines) to this array as they come online.
const SAME_AS = [
    "https://www.linkedin.com/in/maria-madeira-growth",
    "https://influee.co/partnership/maria-madeira",
];

// The Klaviyo partnership is a programme membership rather than an
// organisation the person belongs to, so it uses ProgramMembership. The
// homepage node carries the identical value: same @id means the two merge, and
// two different memberOf values on one entity would contradict each other.

const ABOUT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/about#profilepage`,
            "url": `${SITE_URL}/about`,
            "name": "About Maria Madeira",
            "mainEntity": { "@id": PERSON_ID },
        },
        {
            "@type": "Person",
            "@id": PERSON_ID,
            "name": "Maria Madeira",
            "url": SITE_URL,
            "image": `${SITE_URL}/maria-notebook-800.jpg`,
            "jobTitle": "E-commerce Growth Strategist",
            "description": "Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing and Klaviyo, and paid acquisition. Based in Lisbon, working globally.",
            "homeLocation": { "@type": "Place", "name": "Lisbon, Portugal" },
            "knowsAbout": [
                "E-commerce Growth", "Email Marketing", "Klaviyo", "Lifecycle Marketing",
                "Google Ads", "Meta Ads", "Paid Acquisition", "Search Engine Optimisation",
                "Answer Engine Optimisation", "AI Marketing", "Creative Direction",
                "Shopify", "E-commerce Platform Migration",
            ],
            "knowsLanguage": ["English", "Portuguese"],
            "sameAs": SAME_AS,
            "hasCredential": HAS_CREDENTIAL,
            "memberOf": PROGRAM_MEMBERSHIP,
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` },
            ],
        },
    ],
};

/* The Portuguese page points at the same Person by @id rather than repeating
   it, so the entity is defined once, on the English page. */
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/pt/sobre#profilepage`,
            "url": `${SITE_URL}/pt/sobre`,
            "name": "Sobre a Maria Madeira",
            "inLanguage": "pt-PT",
            "mainEntity": { "@id": PERSON_ID },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Sobre", "item": `${SITE_URL}/pt/sobre` },
            ],
        },
    ],
};

/* Wilfred's full recommendation, as linked from the homepage featured card. */
const RECOMMENDATIONS_URL = "https://www.linkedin.com/in/maria-madeira-growth/details/recommendations/";

/* Badge images for the credentials, keyed by the English credential name in
   src/lib/credentials.ts. A badge renders only when its file is listed in
   AVAILABLE_BADGES; until then the entry keeps its text card. To switch one
   on, add the file to /public and its path to AVAILABLE_BADGES. */
const BADGES: Record<string, string> = {
    "Klaviyo Practitioner": "/klaviyo-practitioner.png",
    "Klaviyo Sales": "/klaviyo-sales.png",
    "Klaviyo Partner (K:Partners programme)": "/klaviyo-partner-badge.png",
};
const AVAILABLE_BADGES: string[] = ["/klaviyo-partner-badge.png"];
const PARTNER_BADGE = "/klaviyo-partner-badge.png";

function badgeFor(enName: string): string | null {
    const src = BADGES[enName];
    return src && AVAILABLE_BADGES.includes(src) ? src : null;
}

export default function About() {
    const { lang, to } = useLang();
    const t = COPY[lang];

    return (
        <div className="container about-page" style={{ paddingTop: "6rem", paddingBottom: "0" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                jsonLd={lang === "pt" ? PT_JSON_LD : ABOUT_JSON_LD}
            />

            {/* Intro */}
            <div className="grid-2" style={{ alignItems: "flex-start", gap: "4rem", marginBottom: "6rem" }}>
                <div style={{ position: "relative" }}>
                    <div className="bg-glow" style={{ top: "-10%", left: "-10%", width: "300px", height: "300px", opacity: 0.6 }} />
                    <div className="card glass-panel about-portrait" style={{ borderRadius: "24px", overflow: "hidden", padding: 0 }}>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/maria-notebook-400.webp 400w, /maria-notebook-800.webp 800w, /maria-notebook-1600.webp 1600w"
                                sizes="(max-width: 900px) 100vw, 550px"
                            />
                            <source
                                type="image/jpeg"
                                srcSet="/maria-notebook-400.jpg 400w, /maria-notebook-800.jpg 800w, /maria-notebook-1600.jpg 1600w"
                                sizes="(max-width: 900px) 100vw, 550px"
                            />
                            <img
                                src="/maria-notebook-800.jpg"
                                alt={t.imgAlt}
                                width="1600"
                                height="2133"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
                            />
                        </picture>
                    </div>
                </div>

                <div>
                    <span className="about-eyebrow">{t.eyebrow}</span>
                    <h1 className="section-title" style={{ textAlign: "left", marginBottom: "2rem", fontSize: "3.5rem" }}>
                        {t.h1Lead}<span className="text-gradient">Maria Madeira</span>
                    </h1>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8 }}>
                        {t.paragraphs.map((p, i) => <p key={i} style={{ margin: 0 }}>{p}</p>)}

                        <figure className="about-quote">
                            <blockquote cite={RECOMMENDATIONS_URL}>
                                <p>{t.quote}</p>
                            </blockquote>
                            <figcaption>
                                <a href={RECOMMENDATIONS_URL} target="_blank" rel="noopener noreferrer">
                                    {t.quoteAuthor} <ExternalLink size={13} aria-hidden="true" />
                                </a>
                                {t.quoteNote && <span className="about-quote-note">{t.quoteNote}</span>}
                            </figcaption>
                        </figure>

                        <div style={{ display: "flex", gap: "1.5rem" }}>
                            <a href="https://www.linkedin.com/in/maria-madeira-growth" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", fontWeight: 600 }}>
                                <Linkedin size={20} /> LinkedIn <ExternalLink size={14} opacity={0.5} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline: one dot and one short label per step. */}
            <section className="about-section">
                <h2 className="about-section-title">{t.timelineTitle}</h2>
                <ol className="about-timeline">
                    {t.timeline.map((step, i) => (
                        <li key={i} className="about-timeline-step">
                            <span className="about-timeline-dot" aria-hidden="true" />
                            <span className="about-timeline-year">{step.year}</span>
                            <span className="about-timeline-label">{step.label}</span>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Tools: twelve logos in three groups. */}
            <section className="about-section">
                <h2 className="about-section-title">{t.toolsTitle}</h2>
                <div className="about-tool-groups">
                    {TOOL_GROUPS.map((group, gi) => (
                        <div key={gi}>
                            <h3 className="about-tool-group-title">{t.toolGroups[gi]}</h3>
                            <ul className="about-tool-grid">
                                {group.map((tool) => <ToolTile key={tool.name} tool={tool} />)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Credentials: badge images where the file exists, text cards otherwise. */}
            <section className="credentials about-section">
                <h2 className="about-section-title">{t.credentialsTitle}</h2>
                <p className="credentials-intro">{t.credentialsIntro}</p>
                {t.credentialGroups.map((group, gi) => {
                    const enItems = CREDENTIAL_GROUPS[gi].items;
                    const withBadge = group.items.map((c, ci) => ({ c, badge: badgeFor(enItems[ci].name) }));
                    const badges = withBadge.filter((x) => x.badge);
                    const cards = withBadge.filter((x) => !x.badge);
                    return (
                        <div key={group.title} className="credential-group">
                            <h3 className="credential-group-title">{group.title}</h3>
                            {badges.length > 0 && (
                                <ul className="about-badges">
                                    {badges.map(({ c, badge }) => (
                                        <li key={c.name} className="about-badge">
                                            {badge === PARTNER_BADGE ? (
                                                <KlaviyoPartnerBadge height={72} />
                                            ) : c.verifyUrl ? (
                                                <a href={c.verifyUrl} target="_blank" rel="noopener" style={{ display: "inline-block", lineHeight: 0 }}>
                                                    <img src={badge as string} alt={`${c.name}: ${t.verify}`} height={96} loading="lazy" decoding="async" style={{ height: "96px", width: "auto" }} />
                                                </a>
                                            ) : (
                                                <img src={badge as string} alt={c.name} height={96} loading="lazy" decoding="async" style={{ height: "96px", width: "auto" }} />
                                            )}
                                            <p className="credential-name">{c.name}</p>
                                            <p className="credential-issuer">{c.issuer}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {cards.length > 0 && (
                                <ul className="credential-list">
                                    {cards.map(({ c }) => (
                                        <li key={c.name} className="credential">
                                            <p className="credential-name">{c.name}</p>
                                            <p className="credential-issuer">{c.issuer}</p>
                                            {c.note && <p className="credential-note">{c.note}</p>}
                                            {c.verifyUrl && (
                                                <a className="credential-verify" href={c.verifyUrl} target="_blank" rel="noopener">
                                                    {t.verify} <ExternalLink size={13} />
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </section>

            <FinalCta title={t.ctaTitle} line={t.ctaLine} button={t.cta} to={to("/contact")} photo />
        </div>
    );
}
