import { ArrowLeft, ArrowRight, TrendingUp, Search, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SeoAeoCharts } from "../components/ResultCharts";
import { caseStudyJsonLd } from "../lib/schema";

const PUBLISHED = "2026-08-26";
const MODIFIED = "2026-08-26";

export default function CaseStudySEOAEO() {
    return (
        <>
            <Seo
                title="SEO and AEO Case Study: Coming Soon | Maria Madeira"
                description="SEO and AEO case study: how an invisible catalogue was rebuilt page by page to grow clicks by 78% and improve average position from page 2 to page 1."
                path="/case-study-seo-aeo"
                jsonLd={caseStudyJsonLd({
                    path: "/case-study-seo-aeo",
                    headline: "SEO and AEO case study: coming soon",
                    description: "How an invisible catalogue was rebuilt page by page to grow clicks by 78% and improve average position from page 2 to page 1.",
                    datePublished: PUBLISHED,
                    dateModified: MODIFIED,
                    breadcrumb: "SEO and AEO Case Study",
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

                    {/* Title */}
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
                            SEO and AEO
                        </p>
                        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                            SEO and AEO case study: coming soon
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                            A catalogue invisible to Google, rebuilt page by page.
                        </p>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                    {/* Key Metrics Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "1.5rem",
                            marginBottom: "3.5rem",
                        }}
                    >
                        <div className="card" style={{ background: "var(--bg-secondary)", padding: "1.75rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>
                                <TrendingUp size={20} />
                                <span style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Clicks</span>
                            </div>
                            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                                +78%
                            </div>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                                4.5K to 8.0K clicks in four months
                            </p>
                        </div>

                        <div className="card" style={{ background: "var(--bg-secondary)", padding: "1.75rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>
                                <Search size={20} />
                                <span style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Average Position</span>
                            </div>
                            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                                15.2 → 9.4
                            </div>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                                Moving rankings from page 2 to page 1
                            </p>
                        </div>

                        <div className="card" style={{ background: "var(--bg-secondary)", padding: "1.75rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-secondary)", marginBottom: "0.5rem" }}>
                                <CheckCircle2 size={20} />
                                <span style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Stability</span>
                            </div>
                            <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                                60 / 0
                            </div>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                                60 pages improved at 30 days, 0 declined at 60 days
                            </p>
                        </div>
                    </div>

                    {/* Result charts, before the write-up: the numbers first, the method after */}
                    <SeoAeoCharts />

                    {/* Content Section */}
                    <section style={{ marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                            Overview
                        </h2>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                            This comprehensive case study is currently being prepared. It documents the systematic restructuring and optimisation of an e-commerce catalogue, combining technical SEO foundations with Answer Engine Optimisation (AEO) to secure prominent visibility across Google Search and modern AI assistants.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                            Full documentation including Search Console data, ranking distributions, and AI citation benchmarks will be published shortly.
                        </p>
                    </section>

                    {/* CTA Card */}
                    <div
                        className="card"
                        style={{
                            background: "var(--bg-secondary)",
                            padding: "3rem",
                            borderRadius: "20px",
                            textAlign: "center",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                            Ready to make your brand visible to search and AI?
                        </h3>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 2rem", fontSize: "1rem", lineHeight: 1.6 }}>
                            Let's discuss how we can rebuild your catalogue structure and optimise for Google and AI answer engines.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                            Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
