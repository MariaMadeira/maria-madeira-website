import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const HEADLINE_RESULTS = [
    { value: "£134K", label: "Email revenue (12 mo, +88.9%)" },
    { value: "50.4%", label: "Campaign open rate" },
    { value: "37.8%", label: "Email share of store revenue" },
    { value: "3.4x – 5.34x", label: "Meta Ads ROAS" },
];

export default function CaseStudies() {
    const caseStudies = [
        {
            title: "SEO & AEO Optimisation After Shopify Migration",
            category: "SEO / AEO Optimisation",
            problem: "After migrating from WordPress to Shopify, the new website lacked proper SEO structure and was not optimised for AI-powered search and answer engines.",
            results: "SEO and AEO optimisation improving site structure, search visibility, and AI discoverability.",
            link: "/case-study-seo",
        },
        {
            title: "Google Ads Revenue Growth",
            category: "Paid Advertising",
            problem: "Paid acquisition needed to scale profitably while maintaining strong return on ad spend.",
            results: "£125K conversion value from £23.4K ad spend · £11.70 cost per conversion",
            link: "/case-study-google-ads",
        },
        {
            title: "Email Lifecycle Revenue Growth",
            category: "Email Marketing",
            problem: "Email channel underutilised with limited lifecycle automation.",
            results: "£134K attributed revenue · +88.9% YoY over the last 12 months",
            link: "/case-study-email",
        },
        {
            title: "Exploring Click & Collect as a New Revenue Channel",
            category: "Product Experiment & UX Strategy",
            problem: "Physical retail store losing demand to long peak-hour queues with no option for customers to pre-order.",
            results: "Mobile Click & Collect app built · Key learnings on digital adoption in physical retail",
            link: "/case-study-click-collect",
        },
        {
            title: "From Brochure Site to Booking Engine: The Bodysurf School",
            category: "Growth Strategy & Website Build",
            problem: "A growing surf school with five coastal locations relied on manual enquiries, with no online booking, no payment processing, and no search visibility strategy.",
            results: "Full rebuild delivered: online booking with local payment methods, bilingual site, SEO and AEO foundations.",
            link: "/case-study-bodysurf-school",
        }
    ];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Case Studies | E-commerce Growth Results"
                description="Real case studies with measurable outcomes: SEO and platform migration, Google Ads at a 5.34x return, £134K email revenue, and click & collect UX."
                path="/case-studies"
            />

            <h1 className="section-title">Case <span className="text-gradient">Studies</span></h1>
            <p style={{ 
                textAlign: "center", 
                color: "var(--text-secondary)", 
                maxWidth: "700px", 
                margin: "-1.5rem auto 3rem", 
                fontSize: "1.1rem", 
                lineHeight: 1.8 
            }}>
                Real results from strategic marketing engagements. Each study outlines the challenge, approach, and measurable outcomes.
            </p>

            <div
                className="grid-4"
                style={{
                    background: "var(--bg-secondary)",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                    padding: "2.5rem 2rem",
                    marginBottom: "4rem",
                }}
            >
                {HEADLINE_RESULTS.map((result) => (
                    <div key={result.label} style={{ textAlign: "center" }}>
                        <p className="text-gradient-accent" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.5rem" }}>
                            {result.value}
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>{result.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid-2">
                {caseStudies.map((study, index) => (
                    <div
                        key={index}
                        className="card glass-panel hover-lift-sm"
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                            {study.category}
                        </p>
                        <h3>{study.title}</h3>
                        <div style={{ marginTop: "1rem", flex: 1 }}>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                                <strong>Problem:</strong> {study.problem}
                            </p>
                        </div>

                        <div style={{ 
                            padding: "1rem", 
                            background: "var(--accent-glow)", 
                            borderRadius: "8px", 
                            border: "1px solid var(--border-color)",
                            borderLeft: "4px solid var(--accent-secondary)"
                        }}>
                            <p style={{ fontWeight: 600, color: "var(--accent-secondary)", margin: 0 }}>{study.results}</p>
                        </div>

                        {study.link ? (
                            <Link to={study.link} className="btn btn-secondary" style={{ marginTop: "1.5rem", width: "100%", textAlign: "center" }}>
                                Read Full Study
                            </Link>
                        ) : (
                            <button className="btn btn-secondary" style={{ marginTop: "1.5rem", width: "100%" }}>
                                Read Full Study
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
