import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import RelatedLinks from "../components/RelatedLinks";
import { AiImpressionsChart, AiVisibilityChart, OutcomesBar, AI_SOURCE } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";

// Git-derived (git log src/pages/CaseStudySEO.tsx). Bump MODIFIED whenever the
// case study's details are updated.
const PUBLISHED = "2026-03-16";
const MODIFIED = "2026-10-16";

const TITLE = "From page 2 to page 1 on Google, and twice as visible in AI answers";

export default function CaseStudySEO() {
    return (
        <>
        <Seo
            title={TITLE}
            description="SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4, May to August 2026."
            path="/case-study-seo"
            ogImage="/og/og-case-study-seo.png"
            jsonLd={caseStudyJsonLd({
                path: "/case-study-seo",
                headline: TITLE,
                description: "SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4 across matched 28-day windows, May to August 2026.",
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                // Short by design: breadcrumbs render in search results, where the
                // full headline would truncate.
                breadcrumb: "SEO and AEO",
            })}
        />
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                {/* Back Link */}
                <Link
                    to="/case-studies"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.95rem",
                        color: "var(--accent-secondary)",
                        marginBottom: "2.5rem",
                        fontWeight: 500,
                    }}
                >
                    <ArrowLeft size={18} /> Back to Case Studies
                </Link>

                {/* Hero */}
                <div>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        SEO / AEO Optimisation
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        {TITLE}
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        SEO and AEO for The Black Farmer after its move to Shopify: organic clicks up 78% and average position from 15.2 to 9.4 across matched 28-day windows, May to August 2026.
                    </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Context */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Context
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                        The Black Farmer moved from WooCommerce to Shopify in September 2025. Brand rankings held, but collections, product pages and metadata had not been built for search, and some product copy carried unverified claims from earlier AI-generated text. I led SEO and AEO from May to August 2026.
                    </p>
                </section>

                {/* What I did */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        What I did
                    </h2>
                    <div className="cs-grid cs-grid-3">
                        {[
                            { value: "30", label: "collections rewritten against live Search Console data: 16 butchery collections plus the Gluten-Free and Caribbean hubs and their 12 sub-collections" },
                            { value: "60+", label: "product pages rebuilt: headline, copy, question-led FAQs, metadata and internal links" },
                            { value: "14+", label: "unverifiable claims removed: gluten-free, free-range and grass-fed statements the supplier could not confirm" },
                        ].map((card) => (
                            <div key={card.value} className="cs-tile cs-tile--sm">
                                <p className="cs-tile-value">{card.value}</p>
                                <p className="cs-tile-label">{card.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Search results */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        Search results
                    </p>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                        Onto page 1 in under four months
                    </h2>
                    <p className="cs-subline">Google Search Console, matched 28-day windows, May to August 2026</p>

                    <div className="cs-grid cs-grid-3">
                        {[
                            { before: "4.5K", after: "8.0K", badge: "+78%", label: "organic clicks" },
                            { before: "15.2", after: "9.4", badge: "page 2 to page 1", label: "average Google position" },
                            { before: "479K", after: "997K", badge: "+108%", label: "search impressions" },
                        ].map((t) => (
                            <div key={t.label} className="cs-tile">
                                <p className="cs-tile-value">
                                    <span className="cs-tile-before">{t.before} →</span>
                                    {t.after}
                                </p>
                                <span className="cs-badge cs-badge--positive">{t.badge}</span>
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cs-grid cs-grid-3">
                        {[
                            { before: "3.2K", after: "4.6K", badge: "+44%", label: "ranking keywords (Semrush)" },
                            { before: "8.3K", after: "15K", badge: "+81%", label: "estimated monthly organic traffic (Semrush)" },
                            { before: null, after: "78%", badge: null, label: "of clicks from non-branded searches, new customers rather than existing ones" },
                        ].map((t) => (
                            <div key={t.label} className="cs-tile cs-tile--sm">
                                <p className="cs-tile-value">
                                    {t.before && <span className="cs-tile-before">{t.before} →</span>}
                                    {t.after}
                                </p>
                                {t.badge && <span className="cs-badge cs-badge--positive">{t.badge}</span>}
                                <p className="cs-tile-label">{t.label}</p>
                            </div>
                        ))}
                    </div>


                    <h3 style={{ fontSize: "1.25rem", margin: "2.5rem 0 1.25rem", color: "var(--text-primary)" }}>
                        Biggest wins, page by page
                    </h3>
                    <ul className="cs-wins">
                        {[
                            { label: "Pork Belly Slices, clicks", before: "6", after: "34", badge: "+467%" },
                            { label: "Bacon Rind On Unsmoked Middle, clicks", before: "12", after: "34", badge: "+183%" },
                            { label: "Gluten-Free Kebabs, clicks", before: null, after: null, badge: "+229%" },
                            { label: "Gluten-Free Cakes, position", before: "37.4", after: "14", badge: "+23 places" },
                            { label: "Gluten-Free Sausages, position", before: "11.2", after: "7.5", badge: "page 1" },
                            { label: "Oven-baked lamb steaks recipe", before: null, after: "762 clicks in 28 days", badge: "position 6.1" },
                        ].map((w) => (
                            <li key={w.label} className="cs-win">
                                <p className="cs-win-label">{w.label}</p>
                                <span className="cs-win-right">
                                    {w.after && (
                                        <span className="cs-win-values">
                                            {w.before && <span className="cs-win-before">{w.before} → </span>}
                                            {w.after}
                                        </span>
                                    )}
                                    <span className="cs-badge cs-badge--positive">{w.badge}</span>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <h3 style={{ fontSize: "1.25rem", margin: "2.5rem 0 0.5rem", color: "var(--text-primary)" }}>
                        Every change, checked at 30 days
                    </h3>
                    <p className="cs-subline">117 pages re-evaluated against Search Console</p>
                    <OutcomesBar />
                    <ul className="cs-legend">
                        <li><span className="cs-legend-num" style={{ color: "var(--positive)" }}>60</span>improved</li>
                        <li><span className="cs-legend-num" style={{ color: "var(--text-secondary)" }}>52</span>stable or mixed</li>
                        <li><span className="cs-legend-num" style={{ color: "var(--negative)" }}>5</span>declined, each with a diagnosed cause</li>
                    </ul>
                </section>

                {/* AI search results */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <p
                        style={{
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.75rem",
                        }}
                    >
                        AI search results
                    </p>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Found in AI answers, not just search results
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        Alongside the SEO work, I rebuilt the catalogue around the questions customers actually ask: are sausages gluten free, is salami gluten free, how to cook lamb steaks. Each owning page got a clear, extractable answer, verified claims only, and the founder was marked up as a structured entity so AI systems could attribute the brand correctly.
                    </p>

                    <div className="aeo-stats">
                        {[
                            { value: "2.2x", label: "daily AI impressions, first vs last week" },
                            { value: "287K", label: "impressions in Google's AI features, May to August 2026" },
                            { value: "356", label: "keywords where AI Overviews link to the site" },
                        ].map((stat) => (
                            <div key={stat.value} className="aeo-stat">
                                <p className="aeo-stat-value">{stat.value}</p>
                                <p className="aeo-stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <AiImpressionsChart />

                    <figure className="cs-pullquote">
                        <blockquote>what meat has no gluten? give me a list of gluten-free sausages</blockquote>
                        <figcaption>
                            A real conversational query from Search Console. The Gluten-Free Sausages page was shown in the answer and clicked: the site's first documented click from an AI-style question.
                        </figcaption>
                    </figure>

                    <AiVisibilityChart />

                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "1.5rem" }}>
                        {AI_SOURCE}
                    </p>
                </section>

                <RelatedLinks
                    service={{ to: "/services/aeo", label: "SEO and AEO" }}
                    next={{ to: "/case-study-google-ads", label: "Five pounds back for every pound spent" }}
                />

                {/* CTA */}
                <div



                    style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}
                >
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        Curious what ChatGPT says about your products?
                    </p>
                    <Link to="/contact?topic=ai-search-check" className="btn btn-primary">
                        Get a free AI search check
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
