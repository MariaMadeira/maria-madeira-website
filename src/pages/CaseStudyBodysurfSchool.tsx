import { ArrowLeft, Map, CreditCard, LayoutTemplate, Globe, Search, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { caseStudyJsonLd } from "../lib/schema";

// Git-derived (git log src/pages/CaseStudyBodysurfSchool.tsx). Bump MODIFIED
// whenever the case study's details are updated.
const PUBLISHED = "2026-07-09";
const MODIFIED = "2026-07-14";

export default function CaseStudyBodysurfSchool() {
    return (
        <>
        <Seo
            title="Bodysurf School Case Study | Booking Engine"
            description="Case study: turning a Portuguese surf school website into a bilingual online booking engine with local payment methods and SEO and AEO foundations built in."
            path="/case-study-bodysurf-school"
            jsonLd={caseStudyJsonLd({
                path: "/case-study-bodysurf-school",
                headline: "The Bodysurf School",
                description: "Turning a Portuguese surf school website into a bilingual online booking engine with local payment methods and SEO and AEO foundations built in.",
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
                breadcrumb: "The Bodysurf School",
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
                        Growth Strategy &amp; Website Build
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                        From Brochure Site to Booking Engine: The Bodysurf School
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
                        Transforming a local surf school's website into a conversion-focused booking system, built for tourists, locals, and institutional partners.
                    </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "3rem" }} />

                {/* Context Section */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                        Context
                    </h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The Bodysurf School teaches bodysurfing across five locations on the Portuguese coast, from Costa da Caparica to Ericeira. The founder is a national bodysurf vice-champion, and demand was growing across three very different audiences: tourists with high booking intent, locals with more questions than urgency, and schools looking for institutional partnerships.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
                        The existing website could not convert that demand. There was no online booking, no payment processing, and every lesson required a manual back-and-forth over WhatsApp or email. The site was English-only in a market where half the audience searches in Portuguese, and there was no structure for search visibility, either in traditional engines or in AI-powered search.
                    </p>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                        The engagement covered three integrated phases: growth strategy and planning, full website UX/UI and build, and SEO and AEO implementation.
                    </p>
                </section>

                {/* Context Image */}
                <div
                    style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "1px solid var(--border-color)",
                        marginBottom: "3.5rem",
                    }}
                >
                    <img
                        src="/bodysurf-desktop-mobile.png"
                        alt="The Bodysurf School website on desktop and mobile showing the corporate page and booking cart"
                        style={{ width: "100%", display: "block" }}
                    />
                </div>

                {/* Strategy Section */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Strategy
                    </h2>

                    <div className="grid-2" style={{ gap: "1.5rem" }}>
                        {[
                            {
                                icon: <Map size={24} />,
                                title: "Growth Strategy First, Build Second",
                                description:
                                    "Before touching design, I mapped the three personas and their booking behaviour. Tourists needed instant booking and payment. Locals needed answers and lesson packs. Schools needed credibility and a low-friction enquiry path. Every page and flow decision followed from that mapping, including the platform choice: WordPress, for booking flexibility and content scalability.",
                            },
                            {
                                icon: <CreditCard size={24} />,
                                title: "Booking and Payment Infrastructure",
                                description:
                                    "Implemented a full online booking system covering individual lessons across all five locations, with location-based travel surcharges calculated automatically at checkout. Payments run through the methods Portuguese customers actually use: MB Way, Multibanco, card, Apple Pay, and Google Pay. Lesson packs were built as a voucher system, letting returning students buy multiple sessions upfront and redeem them when booking.",
                            },
                            {
                                icon: <LayoutTemplate size={24} />,
                                title: "Conversion-Focused Site Architecture",
                                description:
                                    "Structured the site around booking intent rather than information hierarchy. Dedicated pages for private lessons, group sessions, and Little Surfers (parent-child sessions), a separate B2B section for schools with its own enquiry flow, and a persistent WhatsApp contact point for visitors not ready to book online.",
                            },
                            {
                                icon: <Globe size={24} />,
                                title: "Bilingual by Design",
                                description:
                                    "Full Portuguese translation layered over the English site, covering every page, form, and checkout step. Place names and the brand name stay in English; everything else reads natively in European Portuguese.",
                            },
                            {
                                icon: <Search size={24} />,
                                title: "SEO and AEO Foundations",
                                description:
                                    "Keyword research across English and Portuguese, mapped to intent clusters per persona. On-page SEO with structured metadata, Organization schema, and internal linking architecture. For AI-powered search, content was structured answer-first: visible question-and-answer sections written to be cited by answer engines, prioritising content structure over deprecated schema types.",
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "Compliance and Measurement",
                                description:
                                    "GDPR-compliant consent management, GA4 with conversion tracking, Google Search Console with sitemap submission, and transactional email infrastructure so booking confirmations reach customers reliably.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                            >
                                <div style={{ color: "var(--accent-secondary)" }}>{item.icon}</div>
                                <h3 style={{ fontSize: "1.15rem", marginBottom: 0 }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Results Section */}
                <section style={{ marginBottom: "3.5rem" }}>
                    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Results
                    </h2>

                    <div className="grid-3" style={{ gap: "1.5rem" }}>
                        {[
                            {
                                title: "A Complete Booking System",
                                description: "Visitors can now select a lesson type, location, date, and time slot, and pay online in one flow, with local payment methods and automatic travel surcharges. No manual scheduling required.",
                            },
                            {
                                title: "Built for Two Languages and Three Audiences",
                                description: "A fully bilingual site with dedicated conversion paths for tourists, locals, and institutional partners, each matched to how that audience actually books.",
                            },
                            {
                                title: "A Search-Ready Foundation",
                                description: "Bilingual keyword strategy, technical SEO, and answer-first content structure position the school to capture organic demand from both traditional search and AI-generated answers as the site matures.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ textAlign: "center", padding: "2rem 1.5rem" }}
                            >
                                <div style={{ color: "var(--accent-secondary)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.2rem",
                                        color: "var(--text-primary)",
                                        marginBottom: "0.75rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Results Image */}
                    <div
                        style={{
                            borderRadius: "24px",
                            overflow: "hidden",
                            border: "1px solid var(--border-color)",
                            marginTop: "2.5rem",
                        }}
                    >
                        <img
                            src="/bodysurf-mobile-screens.png"
                            alt="Four mobile screens of The Bodysurf School website showing lessons, locations and booking flows"
                            style={{ width: "100%", display: "block" }}
                        />
                    </div>
                </section>

                {/* CTA */}
                <div style={{ textAlign: "center", paddingTop: "1rem", paddingBottom: "2rem" }}>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>
                        Turning a website into a booking engine takes strategy before design.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Let's Talk Strategy
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}
