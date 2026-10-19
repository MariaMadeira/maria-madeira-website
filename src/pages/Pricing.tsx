import { Link } from "react-router-dom";
import { ArrowRight, Check, Quote, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import { SITE_URL, PERSON_ID } from "../lib/schema";
import { PAID_ADS_SERVICE } from "../lib/links";
import { WAYS_TO_WORK } from "../lib/pricing";

const PAGE_URL = `${SITE_URL}/pricing`;
const AI_CHECK_CONTACT = "/contact?topic=ai-search-check";

const BY_SERVICE = [
    { name: "AEO", text: "audit £750, ongoing from £800 a month", to: "/services/aeo" },
    { name: "Email and Klaviyo", text: "setup with core flows from £1,200, monthly from £750 a month", to: "/services/email-marketing" },
    { name: "Paid ads", text: "management from £500 a month per platform", to: PAID_ADS_SERVICE },
    { name: "Websites", text: "quoted per project", to: "/services/websites" },
];

/* ── FAQ (drives the visible section and the FAQPage schema) ───────── */
const FAQS: { q: string; a: string }[] = [
    {
        q: "Which option should I start with?",
        a: "If you are not sure where the gaps are, start with the Growth Audit. If you already know what needs building, a project is quicker. If you want someone running a channel every month, choose monthly work.",
    },
    {
        q: "What is included in the free AI Search Check?",
        a: "I ask ChatGPT and Perplexity about three of your products and send you a short written note on what they say about your brand and who they recommend instead.",
    },
    {
        q: "Is ad spend included in the monthly price?",
        a: "No. Ad spend is paid directly by you to Google or Meta. The monthly price covers management only, so you always see what goes into the ads and what goes to management.",
    },
    {
        q: "Is there a minimum term?",
        a: "Monthly work has a minimum of three months. The Growth Audit and projects are one-off, with no ongoing commitment.",
    },
];

const PRICING_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            "url": PAGE_URL,
            "name": "Pricing",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": PAGE_URL },
            ],
        },
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            "name": "Growth consultancy for brands that sell online",
            "url": PAGE_URL,
            "provider": { "@id": PERSON_ID },
            "offers": [
                { "@type": "Offer", "name": "Growth Audit", "price": 750, "priceCurrency": "GBP" },
                { "@type": "Offer", "name": "Project", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 1200, "priceCurrency": "GBP" } },
                { "@type": "Offer", "name": "Monthly", "priceSpecification": { "@type": "UnitPriceSpecification", "minPrice": 500, "priceCurrency": "GBP", "unitText": "per month" } },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": FAQS.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
    ],
};

const LINK_STYLE = { display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600 } as const;

export default function Pricing() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Pricing | Maria Madeira"
                description="Three ways to work with Maria Madeira: a fixed-price Growth Audit, defined projects, or ongoing monthly work on AEO, email and paid ads. Starting prices published."
                path="/pricing"
                jsonLd={PRICING_JSON_LD}
            />

            <style>{`
                .pr-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: stretch; }
                @media (max-width: 860px) { .pr-cards { grid-template-columns: 1fr; } }
                .pr-check { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem 2rem; flex-wrap: wrap; }
            `}</style>

            {/* Hero */}
            <section style={{ maxWidth: "820px", margin: "0 auto 3rem", textAlign: "center" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Pricing
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Ways to work with me
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, margin: 0 }}>
                    Start with an audit, hire me for a defined project, or work with me month to month. Every price below is a starting point, and you get a written quote before any work begins.
                </p>
            </section>

            {/* Free AI Search Check */}
            <section style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: "3rem" }}>
                <div className="pr-check">
                    <div style={{ flex: "1 1 420px" }}>
                        <h2 style={{ fontSize: "1.4rem", margin: "0 0 0.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                            <Sparkles size={22} style={{ color: "var(--accent-secondary)", flexShrink: 0 }} aria-hidden="true" /> Free AI Search Check
                        </h2>
                        <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                            I ask ChatGPT and Perplexity about three of your products and send you a short written note on what they say.
                        </p>
                    </div>
                    <Link to={AI_CHECK_CONTACT} className="btn btn-primary" style={{ padding: "0.9rem 2rem", whiteSpace: "nowrap" }}>
                        Request a free check <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                </div>
            </section>

            {/* Three ways */}
            <section style={{ marginBottom: "1.5rem" }}>
                <div className="pr-cards">
                    {WAYS_TO_WORK.map((w) => (
                        <div key={w.name} className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                            <h2 style={{ fontSize: "1.4rem", margin: "0 0 1rem" }}>{w.name}</h2>
                            <p style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 600, lineHeight: 1.1, color: "var(--text-primary)", margin: 0 }}>{w.price}</p>
                            <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0.6rem 0 1.5rem" }}>{w.type}</p>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                                {w.items.map((item) => (
                                    <li key={item} style={{ display: "flex", gap: "0.6rem", color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        <Check size={18} style={{ color: "var(--accent-secondary)", flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn btn-secondary" style={{ justifyContent: "center", padding: "0.85rem 1.5rem" }}>
                                {w.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textAlign: "center", margin: "0 auto 5rem", maxWidth: "720px" }}>
                Ad spend for Google and Meta is paid directly by you to the platform and is not included in any price.
            </p>

            {/* Starting prices by service */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Starting prices by service</h2>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--border-color)" }}>
                    {BY_SERVICE.map((s) => (
                        <li key={s.to} style={{ borderBottom: "1px solid var(--border-color)", padding: "1.1rem 0" }}>
                            <Link to={s.to} style={{ ...LINK_STYLE, fontSize: "1.05rem" }}>
                                {s.name}
                            </Link>
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>: {s.text}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* FAQ, all answers visible */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Frequently asked questions</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                <Quote size={18} style={{ flexShrink: 0, marginTop: "3px", color: "var(--accent-secondary)" }} /> {f.q}
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Not sure which fits?</h2>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Let's Talk Strategy <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
