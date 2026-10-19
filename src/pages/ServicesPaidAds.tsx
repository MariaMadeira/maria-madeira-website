import { Link } from "react-router-dom";
import { Target, Search, Users, Monitor, FileText, ArrowRight, BarChart, Quote } from "lucide-react";
import Seo from "../components/Seo";
import { SITE_URL, PERSON_ID } from "../lib/schema";

const PAGE_URL = `${SITE_URL}/services/paid-ads`;

/* ── Results strip: the same three figures as /case-study-google-ads ── */
const RESULTS = [
    { value: "532%", label: "Return on ad spend, against a 400% break-even" },
    { value: "£141K", label: "Attributed revenue from £26.5K of ad spend" },
    { value: "10 of 11", label: "Months above break-even" },
];

/* ── "What I do" ────────────────────────────────────────────────────── */
const WHAT_I_DO = [
    { icon: <Target size={26} />, title: "Break-even first", line: "We agree the return your margins need before a pound is spent. Every report shows performance against that line, not against a generic benchmark." },
    { icon: <Search size={26} />, title: "Google Ads", line: "Campaigns structured around high-intent searches and your best-selling categories, with conversion tracking and value-based bidding set up properly, and regular reviews of keywords, bids and budget." },
    { icon: <Users size={26} />, title: "Meta Ads", line: "Prospecting and retargeting on Facebook and Instagram, with creative tested in rounds rather than left to run." },
    { icon: <Monitor size={26} />, title: "Microsoft Ads", line: "The Google campaigns that work, extended to Bing where it makes sense for your audience." },
    { icon: <FileText size={26} />, title: "Plain-English reporting", line: "A monthly report covering spend, revenue, return against break-even, and what changes next." },
];

/* ── FAQ (drives the visible section and the FAQPage schema) ───────── */
const FAQS: { q: string; a: string; link?: { to: string; label: string } }[] = [
    {
        q: "What is a break-even ROAS?",
        a: "It is the return on ad spend at which a sale covers its product, fulfilment and advertising costs, with nothing left over. Below it, ads lose money even when they look busy. It depends on your margins, so it is different for every brand. A 400% break-even means each pound of ad spend has to bring back £4 in revenue.",
    },
    {
        q: "Do you work on Google Ads or Meta Ads?",
        a: "Both, plus Microsoft Ads. Where the budget goes depends on where your customers search and scroll, and on what each channel returns against your break-even.",
    },
    {
        q: "Can you take over an existing ad account?",
        a: "Yes. I start by auditing the account, the tracking and the conversion data before changing anything, so you can see what is worth keeping.",
    },
    {
        q: "Do I own the ad accounts?",
        a: "Yes. Campaigns run in your own accounts, and you keep everything if we stop working together.",
    },
    {
        q: "Should my brand run ChatGPT Ads?",
        a: "Probably not yet. ChatGPT Ads are in beta, with a minimum daily budget that Google and Meta don't have. I tested the Ads Manager with my own account and wrote up what I found.",
        link: { to: "/blog/chatgpt-ads-europe", label: "Inside ChatGPT Ads in Europe" },
    },
];

const PAID_ADS_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            "name": "Paid advertising management for e-commerce",
            "serviceType": "PPC and paid social management",
            "url": PAGE_URL,
            "provider": { "@id": PERSON_ID },
            "areaServed": "GB",
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
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": "Paid Ads", "item": PAGE_URL },
            ],
        },
    ],
};

const LINK_STYLE = { display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.95rem" } as const;

export default function ServicesPaidAds() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Google & Meta Ads Consultant for E-commerce | Maria Madeira"
                description="Independent Google and Meta Ads consultant for e-commerce brands. Every campaign measured against your break-even, with Klaviyo to keep the customers."
                path="/services/paid-ads"
                ogImage="/og/og-paid-ads.png"
                jsonLd={PAID_ADS_JSON_LD}
            />

            <style>{`
                .pa-steps { display: flex; flex-wrap: wrap; justify-content: center; gap: 2.5rem 1.5rem; }
                .pa-steps > * { flex: 0 1 calc((100% - 3rem) / 3); }
                @media (max-width: 860px) { .pa-steps > * { flex-basis: calc((100% - 1.5rem) / 2); } }
                @media (max-width: 520px) { .pa-steps > * { flex-basis: 100%; } }
                @media (max-width: 720px) { .pa-results { grid-template-columns: 1fr; } }
            `}</style>

            {/* Hero */}
            <section style={{ maxWidth: "820px", marginBottom: "3.5rem" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Paid Advertising
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                    Google and Meta ads for e-commerce, <span className="text-gradient">measured against your break-even</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, margin: 0 }}>
                    Most ad accounts report a ROAS and stop there. The number that matters is the one your margins need. I start by working out your break-even return, then build Google, Meta and Microsoft Ads campaigns to clear it, month after month. Agency-level work, run by the person you actually speak to.
                </p>
            </section>

            {/* Results strip */}
            <section style={{ marginBottom: "5rem" }}>
                <div className="cs-grid cs-grid-3 pa-results">
                    {RESULTS.map((r) => (
                        <div key={r.value} className="cs-tile">
                            <p className="cs-tile-value">{r.value}</p>
                            <p className="cs-tile-label">{r.label}</p>
                        </div>
                    ))}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", margin: "0 0 0.75rem" }}>
                    Google Ads for a UK food brand, October 2025 to August 2026.
                </p>
                <Link to="/case-study-google-ads" style={LINK_STYLE}>
                    Read the case study <ArrowRight size={16} />
                </Link>
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>What I do</h2>
                </div>
                <div className="pa-steps">
                    {WHAT_I_DO.map((s) => (
                        <div key={s.title} style={{ textAlign: "center" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)" }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "300px", margin: "0 auto" }}>{s.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Paid and email, and when not to spend */}
            <section className="grid-2" style={{ gap: "1.5rem", maxWidth: "980px", margin: "0 auto 5rem" }}>
                <div className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Paid and email, run by the same person</h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "0 0 1.5rem", flex: 1 }}>
                        Ads bring in first orders. Email brings customers back. As a Klaviyo Partner, I also run the flows that welcome and follow up the customers your ads acquire, so you are not paying to win the same customer twice.
                    </p>
                    <Link to="/services/email-marketing" style={LINK_STYLE}>
                        Email marketing and Klaviyo consulting <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>When I'll tell you not to spend yet</h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "0 0 1.5rem", flex: 1 }}>
                        If tracking is broken, product pages don't convert, or your brand doesn't show up when people search for it, more ad spend makes the problem more expensive. In those cases I'll say so, and we fix the foundations first.
                    </p>
                    <Link to="/services/aeo" style={LINK_STYLE}>
                        AEO and search visibility <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* Who it's for */}
            <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>Who it's for</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        E-commerce brands selling direct to consumers, especially in food and drink, who are spending on ads or ready to, and want a senior person running the account directly.
                    </p>
                </blockquote>
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
                            {f.link && (
                                <Link to={f.link.to} style={{ ...LINK_STYLE, marginTop: "1rem" }}>
                                    {f.link.label} <ArrowRight size={16} />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <BarChart size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Want ads that clear your break-even?</h2>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Let's Talk Strategy <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
