import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { caseStudyJsonLd } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import { decimal } from "../lib/format";
import COPY from "../i18n/caseStudyDePapier";

// Bump MODIFIED whenever the case study's details are updated.
const PUBLISHED = "2026-10-30";
const MODIFIED = "2026-11-02";

/* Mockups shared by both pages; the language-specific ones live in the copy. */
const IMG = "/projects/depapier/";
const SITE_OVERVIEW = { src: `${IMG}depapier-site-overview-transparent.webp`, width: 1600, height: 800 };
const LANGUAGE_PAIRS = { src: `${IMG}depapier-desktop-language-pairs-transparent.webp`, width: 1600, height: 765 };
const BILINGUAL = { src: `${IMG}depapier-desktop-bilingual-transparent.webp`, width: 1600, height: 1065 };

/* Lighthouse figures, in the copy's order. Scores run 0 to 100; LCP is drawn
   on its own scale, where the shorter bar is the better one. `badge` is the
   change. */
const PERFORMANCE: { before: number; after: number; max: number; badge: string }[] = [
    { before: 73, after: 83, max: 100, badge: "+10" },
    { before: 77, after: 100, max: 100, badge: "+23" },
    { before: 8.5, after: 4.2, max: 8.5, badge: "−4.3 s" },
];

type Copy = (typeof COPY)["en"];
type Image = { src: string; width: number; height: number };

/* The image under each "What I changed" block, in the copy's order. */
const CHANGED_IMAGES: ((c: Copy) => Image)[] = [
    (c) => ({ src: c.heroImage, width: c.heroSize[0], height: c.heroSize[1] }),
    () => LANGUAGE_PAIRS,
    (c) => ({ src: c.quotesImage, width: c.quotesSize[0], height: c.quotesSize[1] }),
    () => BILINGUAL,
    () => SITE_OVERVIEW,
];

function Mockup({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
    return (
        <img className="cs-mockup" src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
    );
}

export default function CaseStudyDePapier() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    const h3 = { fontSize: "1.25rem", margin: "2.5rem 0 1rem", color: "var(--text-primary)" } as const;
    const p = { color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" } as const;
    return (
        <>
        <Seo
            title={c.title}
            description={c.description}
            path={c.path}
            ogImage={c.ogImage}
            jsonLd={caseStudyJsonLd({
                path: c.path,
                headline: c.h1,
                description: c.schemaDescription,
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                breadcrumb: c.breadcrumb,
                lang,
            })}
        />
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                {/* Back Link */}
                <Link
                    to={to("/case-studies")}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.95rem",
                        color: "var(--accent-text)",
                        marginBottom: "2.5rem",
                        fontWeight: 500,
                    }}
                >
                    <ArrowLeft size={18} /> {c.back}
                </Link>

                {/* Title */}
                <div>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-text)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        {c.eyebrow}
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        {c.h1}
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        {c.intro}
                    </p>
                </div>

                {/* At a glance */}
                <section className="cs-glance" aria-labelledby="glance-title">
                    <h2 id="glance-title" className="cs-glance-title">{c.glanceTitle}</h2>
                    <dl>
                        {c.glance.map((row) => (
                            <div key={row.label} className="cs-glance-row">
                                <dt>{row.label}</dt>
                                <dd>{row.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* The problem */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.problemTitle}</h2>
                    <p style={p}>{c.problem}</p>
                    <div className="cs-before-after">
                        <div className="cs-before-after-col cs-before-after-col--before">
                            <p className="cs-before-after-label">{c.beforeLabel}</p>
                            <p className="cs-before-after-text">{c.before}</p>
                        </div>
                        <div className="cs-before-after-col cs-before-after-col--after">
                            <p className="cs-before-after-label">{c.afterLabel}</p>
                            <p className="cs-before-after-text">{c.after}</p>
                        </div>
                    </div>
                </section>

                {/* What I changed: five blocks, each followed by its image */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>{c.changedTitle}</h2>
                    {c.changed.map((block, i) => (
                        <div key={block.title}>
                            <h3 style={h3}>{block.title}</h3>
                            <p style={p}>{block.text}</p>
                            <Mockup {...CHANGED_IMAGES[i](c)} alt={block.alt} />
                        </div>
                    ))}
                </section>

                {/* Built to be found */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.foundTitle}</h2>
                    <p style={p}>{c.found}</p>
                    <div className="cs-wins-block">
                        <ul className="cs-wins-list">
                            {c.performance.map((row, i) => {
                                const d = PERFORMANCE[i];
                                return (
                                    <li key={row.label} className="cs-bar-row">
                                        <div className="cs-bar-head">
                                            <p className="cs-win-label">{row.label}</p>
                                            <span className="cs-badge cs-badge--positive">{decimal(d.badge, lang)}</span>
                                        </div>
                                        <div className="cs-bars" aria-hidden="true">
                                            <div className="cs-bar-line">
                                                <span className="cs-bar cs-bar--before" style={{ width: `${(d.before / d.max) * 100}%` }} />
                                            </div>
                                            <div className="cs-bar-line">
                                                <span className="cs-bar cs-bar--after" style={{ width: `${(d.after / d.max) * 100}%` }} />
                                            </div>
                                        </div>
                                        <p className="cs-perf-value">{row.line}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>

                {/* What's next */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.nextTitle}</h2>
                    <p style={p}>{c.next}</p>
                </section>

                <RelatedLinks
                    service={{ to: "/services/websites", label: c.serviceLink }}
                    next={{ to: "/case-study-bodysurf-school", label: c.nextLink }}
                />

                {/* CTA */}
                <div style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "1.5rem" }}>
                        {c.ctaText}
                    </h2>
                    <Link to={to("/contact")} className="btn btn-primary">
                        {c.ctaButton}
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
