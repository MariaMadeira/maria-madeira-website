import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Repeat, Users, LineChart, ArrowRight, Mail, Quote } from "lucide-react";
import Seo from "../components/Seo";

const SITE_URL = "https://mariamadeira.com";

/* ── Hero stats (verified, already live on the site) ──────────────── */
const HERO_STATS = [
    { value: "£134K", label: "Email-attributed revenue", detail: "Last 12 months, +88.9% YoY" },
    { value: "50.4%", label: "Campaign open rate", detail: "78th percentile industry benchmark" },
    { value: "37.8%", label: "Of total store revenue", detail: "Driven by email over 12 months" },
];

/* ── Quotable definition (mirrors the AEO "What is AEO?" callout) ──── */
const EMAIL_DEFINITION =
    "Lifecycle email marketing is owned-channel revenue built on automated flows, segmentation and campaigns, not one-off newsletters. It sends the right message to the right customer at the right moment, and it is measured in attributed revenue rather than opens.";

/* ── Compounding-curve proof (verified long-arc data, always visible) ── */
const CURVE = [
    { title: "Campaign open rate", from: { label: "2021–22", value: "28%", pct: 56 }, to: { label: "2025", value: "50.4%", pct: 100 }, note: "78th percentile against the industry benchmark" },
    { title: "Email-attributed revenue", from: { label: "2021", value: "£33K", pct: 25 }, to: { label: "2025", value: "£134K", pct: 100 }, note: "A 4x increase over the engagement" },
];

/* ── "What I do" (quotable, always static) ─────────────────────────── */
const WHAT_I_DO = [
    { icon: <Search size={26} />, title: "Klaviyo Audit", line: "Flows, segments, deliverability and revenue attribution reviewed against benchmarks." },
    { icon: <Repeat size={26} />, title: "Lifecycle Flows", line: "Welcome, abandonment, post-purchase, replenishment and win-back sequences that sell on autopilot." },
    { icon: <Users size={26} />, title: "Campaigns & Segmentation", line: "The right message to the right slice of the list, protecting deliverability as you scale." },
    { icon: <LineChart size={26} />, title: "Measurement", line: "Attributed revenue, flow performance and list health tracked every month." },
];

/* ── FAQ (drives the visible section and the FAQPage schema) ───────── */
const FAQS: { q: string; a: string }[] = [
    {
        q: "What does an email marketing consultant do?",
        a: "An email marketing consultant builds and optimises the owned channel that turns subscribers into repeat revenue: lifecycle automations, segmented campaigns, and the deliverability and measurement behind them. The aim is attributed revenue that compounds over time, not just a longer list or higher open rates.",
    },
    {
        q: "Why Klaviyo?",
        a: "Klaviyo is built for e-commerce. It connects directly to your store data, so flows and segments can react to real browsing and purchase behaviour, and it attributes revenue back to each message. That depth of data and native integration is why I build most lifecycle programs on it.",
    },
    {
        q: "How much revenue should email generate for an e-commerce brand?",
        a: "There is no single number, but for a well-built lifecycle program email is usually one of a store's top channels, often a quarter or more of total revenue. For one brand I work with, email reached 37.8% of total store revenue over the last 12 months.",
    },
    {
        q: "What email flows should every store have?",
        a: "At minimum: a welcome series for new subscribers, browse and cart abandonment to recover lost intent, a post-purchase flow to earn the second order, and a win-back for lapsing customers. Replenishment flows help for consumable products. These automations do the selling on autopilot, which is why they earn more per send than campaigns.",
    },
    {
        q: "How long until email marketing shows results?",
        a: "Flows start capturing revenue as soon as they go live, often within the first few weeks, because they trigger on behaviour that is already happening. The compounding gains (higher open rates, sharper segmentation and a larger engaged list) build over months. For context, one program grew email-attributed revenue from £33K in 2021 to £134K in 2025.",
    },
];

const EMAIL_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${SITE_URL}/services/email-marketing#service`,
            "name": "Email Marketing & Klaviyo Consulting",
            "serviceType": "Email Marketing and Klaviyo Consulting",
            "url": `${SITE_URL}/services/email-marketing`,
            "description": EMAIL_DEFINITION,
            "provider": { "@id": `${SITE_URL}/#person` },
            "areaServed": "Worldwide",
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/services/email-marketing#faq`,
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
                { "@type": "ListItem", "position": 3, "name": "Email Marketing & Klaviyo Consulting", "item": `${SITE_URL}/services/email-marketing` },
            ],
        },
    ],
};

/* ── "Is your email program underperforming?" mini-check ───────────── */
const CHECK: { prompt: string; options: { label: string; score: number }[] }[] = [
    { prompt: "Is email generating less than 25% of your store revenue?", options: [{ label: "Yes", score: 0 }, { label: "Not sure", score: 1 }, { label: "No", score: 2 }] },
    { prompt: "Are your flows limited to a basic welcome email?", options: [{ label: "Yes", score: 0 }, { label: "Somewhat", score: 1 }, { label: "No, I run full lifecycle flows", score: 2 }] },
    { prompt: "Has your open rate been flat or falling this year?", options: [{ label: "Yes", score: 0 }, { label: "Not sure", score: 1 }, { label: "No, it's climbing", score: 2 }] },
];
const VERDICTS = [
    { min: 5, label: "Solid foundation", copy: "Email is already pulling its weight. The opportunity now is optimisation and scale: sharper segmentation, more flows, and protecting deliverability as the list grows." },
    { min: 3, label: "Room to compound", copy: "The basics are in place, but revenue is leaking between the gaps. Fuller lifecycle flows and smarter segmentation can lift email from a nice-to-have into a top channel." },
    { min: 0, label: "Underperforming", copy: "Email is leaving significant revenue on the table right now. The good news: the fixes (flows, segmentation and deliverability) are well understood and compound quickly." },
];

function EmailCheck() {
    const [step, setStep] = useState(-1);
    const [scores, setScores] = useState<number[]>([]);
    const total = scores.reduce((a, b) => a + b, 0);
    const verdict = VERDICTS.find((v) => total >= v.min) ?? VERDICTS[VERDICTS.length - 1];
    const answer = (sc: number) => { setScores([...scores, sc]); setStep(step + 1); };
    const reset = () => { setScores([]); setStep(-1); };

    return (
        <div className="card glass-panel" style={{ maxWidth: "680px", margin: "0 auto", padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", flexDirection: "column" }}>
            {step >= 0 && step < CHECK.length && (
                <div style={{ marginBottom: "2rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-secondary)", marginBottom: "0.75rem" }}>Question {step + 1} of {CHECK.length}</p>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                        {CHECK.map((_, i) => (
                            <span key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", background: i <= step ? "var(--accent-secondary)" : "var(--border-color)", transition: "background 0.4s ease" }} />
                        ))}
                    </div>
                </div>
            )}

            {step === -1 && (
                <div key="intro" className="animate-fade-in" style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>Is your email program <span className="text-gradient">underperforming</span>?</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        Three quick questions on how hard your email channel is working. Instant and private. Nothing leaves your browser.
                    </p>
                    <button onClick={() => setStep(0)} className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "0.9rem 2rem" }}>
                        Start the check <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </button>
                </div>
            )}

            {step >= 0 && step < CHECK.length && (
                <div key={step} className="animate-fade-in" style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "1.4rem", lineHeight: 1.3, marginBottom: "1.75rem" }}>{CHECK[step].prompt}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {CHECK[step].options.map((o) => (
                            <button key={o.label} onClick={() => answer(o.score)} className="em-option" style={{ textAlign: "left", padding: "1rem 1.25rem", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "12px", color: "var(--text-primary)", fontSize: "1rem", fontWeight: 500, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                {o.label}
                                <ArrowRight size={16} className="em-option-arrow" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step >= CHECK.length && (
                <div key="result" className="animate-fade-in" style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-secondary)", marginBottom: "0.75rem" }}>Your result</p>
                    <h3 style={{ fontSize: "1.9rem", lineHeight: 1.2, marginBottom: "1rem" }}><span className="text-gradient">{verdict.label}</span></h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>{verdict.copy}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2rem" }}>
                            Get your email audit: Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <button onClick={reset} style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>Start over</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ServicesEmailMarketing() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Email Marketing Consultant | Klaviyo | Maria Madeira"
                description="Klaviyo and email marketing consultant building lifecycle flows, segmentation and campaigns that grow attributed email revenue for brands that sell online."
                path="/services/email-marketing"
                ogImage="/og/og-email.png"
                jsonLd={EMAIL_JSON_LD}
            />

            <style>{`
                .em-option { transition: border-color 0.25s ease, transform 0.25s ease; }
                .em-option:hover { border-color: var(--accent-secondary); transform: translateX(4px); }
                .em-option-arrow { opacity: 0; transition: opacity 0.25s ease; color: var(--accent-secondary); }
                .em-option:hover .em-option-arrow { opacity: 1; }
                .em-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
                @media (max-width: 720px) { .em-steps { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 420px) { .em-steps { grid-template-columns: 1fr; } }
                .em-hero { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 3rem; align-items: center; }
                @media (max-width: 860px) { .em-hero { grid-template-columns: 1fr; } }
                .em-bar { height: 12px; border-radius: 6px; transition: none; }
            `}</style>

            {/* Hero */}
            <section className="em-hero" style={{ marginBottom: "5rem" }}>
                <div>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                        Email Marketing & Klaviyo Consulting
                    </p>
                    <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                        Turn email into a <span className="text-gradient">compounding revenue channel</span>, not a newsletter chore
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        Lifecycle flows that sell on autopilot, segmentation that sends the right message to the right customer, and the deliverability discipline that keeps it all landing in the inbox.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                        Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {HERO_STATS.map((st) => (
                        <div key={st.label} className="card" style={{ background: "var(--bg-primary)", padding: "1.5rem" }}>
                            <div className="text-gradient-accent" style={{ fontSize: "2.2rem", fontWeight: 700, lineHeight: 1 }}>{st.value}</div>
                            <p style={{ fontWeight: 600, margin: "0.5rem 0 0.15rem" }}>{st.label}</p>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>{st.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What great email looks like */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>What great email looks like</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {EMAIL_DEFINITION}
                    </p>
                </blockquote>
            </section>

            {/* The compounding curve */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>The compounding curve</h2>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
                        Real figures from one engagement, start to now.
                    </p>
                </div>
                <div className="grid-2" style={{ gap: "1.5rem", maxWidth: "820px", margin: "0 auto" }}>
                    {CURVE.map((c) => (
                        <div key={c.title} className="card" style={{ padding: "2rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "1.5rem" }}>{c.title}</h3>
                            {[c.from, c.to].map((row, i) => (
                                <div key={row.label} style={{ marginBottom: i === 0 ? "1.1rem" : 0 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
                                        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{row.label}</span>
                                        <span style={{ fontWeight: 700, fontSize: "1.1rem", color: i === 1 ? "var(--accent-secondary)" : "var(--text-primary)" }}>{row.value}</span>
                                    </div>
                                    <div style={{ background: "var(--bg-tertiary)", borderRadius: "6px" }}>
                                        <div className="em-bar" style={{ width: `${row.pct}%`, background: i === 1 ? "var(--accent-secondary)" : "var(--border-color)" }} />
                                    </div>
                                </div>
                            ))}
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic", marginTop: "1.1rem", marginBottom: 0 }}>{c.note}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>What I do</h2>
                </div>
                <div className="em-steps">
                    {WHAT_I_DO.map((s, i) => (
                        <div key={s.title} style={{ textAlign: "center" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)", position: "relative" }}>
                                {s.icon}
                                <span style={{ position: "absolute", top: "-8px", right: "-8px", width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                            </div>
                            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "240px", margin: "0 auto" }}>{s.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mini-check */}
            <section style={{ marginBottom: "5rem" }}>
                <EmailCheck />
            </section>

            {/* Proof */}
            <section style={{ marginBottom: "5rem", maxWidth: "680px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Proof</h2>
                </div>
                <Link to="/case-study-email" className="card hover-lift" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: 700, margin: 0 }}>Case Study</p>
                    <h3 style={{ margin: 0 }}>Lifecycle email revenue growth</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: "0.25rem 0 0" }}>
                        Flows £48.3K (+82.5% YoY), campaigns £86.1K (+92.6% YoY), and the Welcome Series alone £23.6K. A full Klaviyo lifecycle system rebuilt from the ground up.
                    </p>
                    <span style={{ marginTop: "0.75rem", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem" }}>
                        Read the case study <ArrowRight size={16} />
                    </span>
                </Link>
            </section>

            {/* FAQ, all answers visible */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
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
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <Mail size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Make email your best-performing channel</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                    Book a free strategy call and we'll find the revenue your email program is leaving on the table.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
