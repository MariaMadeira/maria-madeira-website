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
const MODIFIED = "2026-10-30";

/* Mockups shared by both pages; the language-specific ones live in the copy. */
const IMG = "/projects/depapier/";
const SITE_OVERVIEW = { src: `${IMG}depapier-site-overview-transparent.webp`, width: 1600, height: 800 };
const LANGUAGE_PAIRS = { src: `${IMG}depapier-desktop-language-pairs-transparent.webp`, width: 1600, height: 765 };
const BILINGUAL = { src: `${IMG}depapier-desktop-bilingual-transparent.webp`, width: 1600, height: 1065 };

/* Lighthouse figures, in the copy's order. Scores run 0 to 100; LCP is drawn
   on its own scale, where the shorter bar is the better one. `badge` is the
   change, and null where there is no "before". */
const PERFORMANCE: { before: number | null; after: number; max: number; badge: string | null }[] = [
    { before: 73, after: 83, max: 100, badge: "+10" },
    { before: 77, after: 100, max: 100, badge: "+23" },
    { before: null, after: 98, max: 100, badge: null },
    { before: 8.5, after: 4.2, max: 8.5, badge: "−4.3 s" },
];

type Copy = (typeof COPY)["en"];

function Mockup({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
    return (
        <img className="cs-mockup" src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
    );
}

function SiteMap({ c }: { c: Copy }) {
    const m = c.siteMap;
    return (
        <figure className="cs-sitemap" aria-label={c.siteMapLabel}>
            <ul>
                <li>
                    <span className="cs-sitemap-node cs-sitemap-node--root">{m.home}</span>
                    <ul>
                        <li>
                            <span className="cs-sitemap-node">{m.services}</span>
                            <ul>
                                {m.children.map((name) => (
                                    <li key={name}><span className="cs-sitemap-node cs-sitemap-node--child">{name}</span></li>
                                ))}
                            </ul>
                        </li>
                        {m.rest.map((name) => (
                            <li key={name}><span className="cs-sitemap-node">{name}</span></li>
                        ))}
                    </ul>
                </li>
            </ul>
        </figure>
    );
}

function Palette({ c }: { c: Copy }) {
    return (
        <ul className="cs-palette" aria-label={c.paletteLabel}>
            {c.palette.map((s) => (
                <li key={s.hex} className="cs-swatch">
                    <span className="cs-swatch-chip" style={{ background: s.hex }} aria-hidden="true" />
                    <span className="cs-swatch-name">{s.name}</span>
                    <span className="cs-swatch-hex">{s.hex}</span>
                </li>
            ))}
            <li className="cs-swatch">
                <span className="cs-swatch-chip cs-swatch-chip--type" aria-hidden="true">Aa</span>
                <span className="cs-swatch-name">{c.fontLabel}</span>
            </li>
        </ul>
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

                {/* Main image: above the fold, so not lazy */}
                <img
                    className="cs-mockup"
                    src={c.heroImage}
                    alt={c.heroAlt}
                    width={c.heroSize[0]}
                    height={c.heroSize[1]}
                    fetchPriority="high"
                    decoding="async"
                    style={{ marginBottom: "2.5rem" }}
                />

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
                    {c.problem.map((text) => <p key={text.slice(0, 40)} style={p}>{text}</p>)}
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

                {/* The approach */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.approachTitle}</h2>
                    <p style={p}>{c.approach}</p>
                </section>

                {/* Phase 1 */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.phase1Title}</h2>
                    <ul className="cs-list">
                        {c.phase1.map((item) => (
                            <li key={item.lead}><strong>{item.lead}</strong> {item.text}</li>
                        ))}
                    </ul>
                </section>

                {/* Phase 2 */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>{c.phase2Title}</h2>

                    <h3 style={h3}>{c.structureTitle}</h3>
                    <p style={p}>{c.structure}</p>
                    <SiteMap c={c} />
                    <Mockup src={c.structureImage} alt={c.structureAlt} width={c.structureSize[0]} height={c.structureSize[1]} />

                    <h3 style={h3}>{c.designTitle}</h3>
                    {c.design.map((text) => <p key={text.slice(0, 40)} style={p}>{text}</p>)}
                    <Palette c={c} />
                    <Mockup {...SITE_OVERVIEW} alt={c.designAlt} />

                    <h3 style={h3}>{c.positioningTitle}</h3>
                    {c.positioning.map((text) => <p key={text.slice(0, 40)} style={p}>{text}</p>)}
                    <Mockup {...LANGUAGE_PAIRS} alt={c.positioningAlt} />

                    <h3 style={h3}>{c.quotesTitle}</h3>
                    <p style={p}>{c.quotes}</p>
                    <Mockup src={c.quotesImage} alt={c.quotesAlt} width={c.quotesSize[0]} height={c.quotesSize[1]} />

                    <h3 style={h3}>{c.proofTitle}</h3>
                    <p style={p}>{c.proof}</p>

                    <h3 style={h3}>{c.contentTitle}</h3>
                    <p style={p}>{c.content}</p>
                    <Mockup {...BILINGUAL} alt={c.contentAlt} />

                    <h3 style={h3}>{c.formTitle}</h3>
                    <p style={p}>{c.form}</p>
                    <Mockup src={c.formImage} alt={c.formAlt} width={c.formSize[0]} height={c.formSize[1]} />
                </section>

                {/* Search and AI readiness */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.searchTitle}</h2>
                    <ul className="cs-list">
                        {c.search.map((text) => <li key={text.slice(0, 40)}>{text}</li>)}
                    </ul>
                </section>

                {/* Privacy and compliance */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.privacyTitle}</h2>
                    <p style={p}>{c.privacy}</p>
                </section>

                {/* Performance */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>{c.performanceTitle}</h2>
                    <div className="cs-wins-block">
                        <ul className="cs-wins-list">
                            {c.performance.map((row, i) => {
                                const d = PERFORMANCE[i];
                                return (
                                    <li key={row.label} className="cs-bar-row">
                                        <div className="cs-bar-head">
                                            <p className="cs-win-label">{row.label}</p>
                                            {d.badge && <span className="cs-badge cs-badge--positive">{decimal(d.badge, lang)}</span>}
                                        </div>
                                        <div className="cs-bars" aria-hidden="true">
                                            {d.before !== null && (
                                                <div className="cs-bar-line">
                                                    <span className="cs-bar cs-bar--before" style={{ width: `${(d.before / d.max) * 100}%` }} />
                                                </div>
                                            )}
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
                    <p style={{ ...p, marginTop: "1.25rem" }}>{c.performanceNote}</p>
                </section>

                {/* Built to be hers */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{c.ownedTitle}</h2>
                    <p style={p}>{c.owned}</p>
                    <p style={p}><strong style={{ color: "var(--text-primary)" }}>{c.stackLabel}</strong> {c.stack}</p>
                    <Mockup src={c.ownedImage} alt={c.ownedAlt} width={c.ownedSize[0]} height={c.ownedSize[1]} />
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
