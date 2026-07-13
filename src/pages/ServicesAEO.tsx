import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Search, Database, FileText, LineChart, MessageSquare, ArrowRight, Users, MousePointerClick, Quote, Bot } from "lucide-react";
import Seo from "../components/Seo";

const SITE_URL = "https://mariamadeira.com";

/* ── Quotable definition (kept in prose below too; this is the snippet) ── */
const AEO_DEFINITION =
    "Answer Engine Optimization (AEO) is the practice of optimizing a brand to be cited and recommended by AI answer engines like ChatGPT, Perplexity, Gemini, and Google's AI Overviews. Where SEO competes for a ranked link, AEO competes to be the answer itself — the source the AI names when someone asks for a recommendation.";

/* ── "Why now" qualitative cards (no fabricated numbers) ──────────── */
const WHY_NOW = [
    { icon: <Users size={24} />, title: "Buyers ask AI first", line: "More people ask ChatGPT, Perplexity and Gemini for recommendations before they ever open a search results page." },
    { icon: <MousePointerClick size={24} />, title: "Zero-click answers", line: "AI Overviews and assistant answers increasingly replace the list of blue links — the answer arrives without a click." },
    { icon: <Sparkles size={24} />, title: "Early movers win", line: "Brands that get cited now become the default answer, while competitors who wait stay invisible in the response." },
];

/* ── "What I do" — quotable, always static ─────────────────────────── */
const WHAT_I_DO = [
    { icon: <Search size={26} />, title: "AI Visibility Audit", line: "Where you appear — or don't — across ChatGPT, Perplexity, Gemini and Google AI Overviews." },
    { icon: <Database size={26} />, title: "Entity & Schema Foundation", line: "Structured data and entity signals that machines can read, trust, and attribute to you." },
    { icon: <FileText size={26} />, title: "Answer-Ready Content", line: "Pages and copy structured to be lifted and cited directly inside AI answers." },
    { icon: <LineChart size={26} />, title: "Measurement", line: "Tracking citations across AI assistants and the traffic they refer back to you." },
];

/* ── FAQ — drives both the visible section and the FAQPage schema ──── */
const FAQS: { q: string; a: string }[] = [
    {
        q: "What is answer engine optimization?",
        a: "Answer engine optimization (AEO) is the practice of structuring your brand, content, and data so AI assistants cite and recommend you when they answer questions. Instead of chasing a blue-link ranking, AEO aims to make your business the answer that tools like ChatGPT, Perplexity, and Google's AI Overviews return.",
    },
    {
        q: "How is AEO different from SEO?",
        a: "SEO optimizes for ranked links on a search results page; AEO optimizes to be the cited source inside an AI-generated answer. SEO leans on keywords and backlinks, while AEO leans on clear entities, structured data, and content written to be lifted. They overlap, but AEO assumes the user may never see a list of links at all.",
    },
    {
        q: "How long does AEO take to show results?",
        a: "It depends on how often AI engines recrawl and how established your brand entity already is. Early signals — appearing in AI answers for niche questions — often show within weeks, while becoming the default recommendation in a competitive category takes longer. AEO is a compounding investment, not an overnight switch.",
    },
    {
        q: "Do I still need traditional SEO?",
        a: "Yes. Crawlable pages, quality content, and authority are exactly what AI engines draw on, so AEO builds on strong SEO rather than replacing it. The two are complementary: SEO keeps you findable, and AEO makes you the recommended answer.",
    },
    {
        q: "How do you measure AEO?",
        a: "By tracking whether and how you're cited across AI assistants (ChatGPT, Perplexity, Gemini and AI Overviews), monitoring AI-referred traffic in analytics, and testing category questions to see if your brand surfaces. The goal is measurable presence in answers, not just rankings.",
    },
];

const AEO_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${SITE_URL}/services/aeo#service`,
            "name": "Answer Engine Optimization (AEO)",
            "serviceType": "Answer Engine Optimization",
            "url": `${SITE_URL}/services/aeo`,
            "description": AEO_DEFINITION,
            "provider": { "@id": `${SITE_URL}/#person` },
            "areaServed": "Worldwide",
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/services/aeo#faq`,
            "mainEntity": FAQS.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
    ],
};

/* ── Hero: auto-playing mock AI chat (competitor vs you) ───────────── */
const QUESTION = "What's the best specialty coffee brand in Europe?";
const SCENARIOS = [
    { tag: "Your competitor gets the recommendation", pre: "For specialty coffee in Europe, the name that comes up is", cite: "Nordkaffe", post: " — your competitor, cited as the go-to.", href: "nordkaffe.example", you: false },
    { tag: "Your brand gets the recommendation", pre: "For specialty coffee in Europe, the standout is", cite: "Your Brand", post: " — consistently cited for quality and transparency.", href: "yourbrand.com", you: true },
];

function AiChatDemo() {
    const [scenario, setScenario] = useState(0);
    const [typed, setTyped] = useState(QUESTION.length); // SSR/initial: fully typed

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) { setScenario(1); return; } // show the positive, static outcome

        // type the question out once, then alternate scenarios
        setTyped(0);
        let i = 0;
        const typer = setInterval(() => {
            i += 1;
            setTyped(i);
            if (i >= QUESTION.length) clearInterval(typer);
        }, 45);
        const swap = setInterval(() => setScenario((s) => (s + 1) % SCENARIOS.length), 3200);
        return () => { clearInterval(typer); clearInterval(swap); };
    }, []);

    const s = SCENARIOS[scenario];
    return (
        <div className="aeo-chat card" aria-hidden="true" style={{ padding: "1.5rem", background: "var(--bg-primary)", maxWidth: "440px", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
                <Bot size={16} /> AI Assistant
                <span className="aeo-chat-tag" style={{ marginLeft: "auto", color: s.you ? "var(--accent-secondary)" : "var(--text-secondary)", background: s.you ? "var(--accent-glow)" : "var(--bg-tertiary)", padding: "2px 10px", borderRadius: "20px", letterSpacing: "0.04em" }}>{s.tag}</span>
            </div>
            {/* user question */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
                <span style={{ background: "var(--accent-secondary)", color: "#fff", padding: "0.6rem 0.9rem", borderRadius: "14px 14px 4px 14px", fontSize: "0.9rem", maxWidth: "85%" }}>
                    {QUESTION.slice(0, typed)}{typed < QUESTION.length && <span className="aeo-caret">|</span>}
                </span>
            </div>
            {/* assistant answer */}
            <div key={scenario} className="aeo-answer" style={{ display: "flex", gap: "0.6rem" }}>
                <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", background: "var(--bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)" }}><Sparkles size={15} /></span>
                <span style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--text-primary)" }}>
                    {s.pre}{" "}
                    <strong style={{ color: s.you ? "var(--accent-secondary)" : "var(--text-primary)" }}>{s.cite}</strong>{s.post}
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "0.5rem", fontSize: "0.78rem", fontWeight: 600, color: s.you ? "var(--accent-secondary)" : "var(--text-secondary)", background: s.you ? "var(--accent-glow)" : "var(--bg-tertiary)", padding: "3px 10px", borderRadius: "20px" }}><Quote size={12} /> Cited: {s.href}</span>
                </span>
            </div>
        </div>
    );
}

/* ── "Why now" before/after era toggle ─────────────────────────────── */
const SERP_2015 = [
    { title: "Top 10 Specialty Coffee Brands in Europe [2015]", url: "thecoffeelist.example › best-brands", snippet: "Our definitive roundup of the finest specialty coffee roasters across Europe this year, ranked and reviewed." },
    { title: "Best Coffee Brands — Reviews & Rankings", url: "brandrankings.example › coffee", snippet: "Independent star ratings and reader reviews for the leading European coffee brands and roasters." },
    { title: "10 European Coffee Roasters You Should Know", url: "roasterreview.example › guides", snippet: "From Oslo to Lisbon, the roasters shaping Europe's third-wave specialty coffee scene." },
    { title: "Coffee Brand Comparison: Which is Best?", url: "comparecoffee.example › compare", snippet: "Side-by-side comparison of price, roast profile and sourcing across the top specialty brands." },
];

function SearchEraToggle() {
    const [era, setEra] = useState<"2015" | "2026">("2026");
    return (
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div role="tablist" aria-label="How search changed" style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "1.5rem" }}>
                {(["2015", "2026"] as const).map((e) => (
                    <button
                        key={e}
                        role="tab"
                        aria-selected={era === e}
                        onClick={() => setEra(e)}
                        className="aeo-era-btn"
                        style={{
                            padding: "0.6rem 1.4rem", borderRadius: "10px", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
                            border: `1px solid ${era === e ? "var(--accent-secondary)" : "var(--border-color)"}`,
                            background: era === e ? "var(--accent-secondary)" : "transparent",
                            color: era === e ? "#fff" : "var(--text-secondary)",
                        }}
                    >
                        Search in {e}
                    </button>
                ))}
            </div>

            <div key={era} className="animate-fade-in card" style={{ padding: "1.5rem", background: "var(--bg-primary)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid var(--border-color)", borderRadius: "10px", padding: "0.6rem 0.9rem", marginBottom: "1.25rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    <Search size={16} /> best specialty coffee brand in europe
                </div>
                {era === "2015" ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                        {SERP_2015.map((r) => (
                            <div key={r.title}>
                                <p style={{ color: "var(--accent-secondary)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.2rem" }}>{r.title}</p>
                                <p style={{ color: "#3a7d3a", fontSize: "0.75rem", marginBottom: "0.3rem" }}>{r.url}</p>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}>{r.snippet}</p>
                            </div>
                        ))}
                        <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontStyle: "italic", marginTop: "0.25rem" }}>Ten blue links. The user does the research.</p>
                    </div>
                ) : (
                    <div style={{ display: "flex", gap: "0.6rem" }}>
                        <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", background: "var(--bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)" }}><Sparkles size={15} /></span>
                        <div>
                            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                                For specialty coffee in Europe, the standout is{" "}
                                <strong style={{ color: "var(--accent-secondary)" }}>Your Brand</strong> — consistently cited for quality and transparency.
                            </p>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "0.78rem", fontWeight: 600, color: "var(--accent-secondary)", background: "var(--accent-glow)", padding: "3px 10px", borderRadius: "20px" }}>
                                <Quote size={12} /> Cited: yourbrand.com
                            </span>
                            <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontStyle: "italic", marginTop: "0.9rem" }}>One answer. One cited source. That's the slot AEO wins.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ── "Is AI recommending you?" 3-question check ────────────────────── */
const CHECK: { prompt: string; options: { label: string; score: number }[] }[] = [
    { prompt: "Have you asked ChatGPT about your category and looked for your brand?", options: [{ label: "Yes — and I appear", score: 2 }, { label: "Yes — and I don't", score: 0 }, { label: "Never checked", score: 1 }] },
    { prompt: "Does your site have structured data (schema markup)?", options: [{ label: "Yes", score: 2 }, { label: "Not sure", score: 1 }, { label: "No", score: 0 }] },
    { prompt: "Is your content written to answer questions directly?", options: [{ label: "Yes", score: 2 }, { label: "Somewhat", score: 1 }, { label: "No", score: 0 }] },
];
const VERDICTS = [
    { min: 5, label: "You're AEO-ready", copy: "You're already doing the groundwork AI engines reward. The opportunity now is to press the advantage and become the default answer in your category before competitors catch up." },
    { min: 3, label: "Half-built for AI search", copy: "You have some of the signals AI engines look for, but gaps are leaving citations on the table. Tightening your structure and answer-ready content could move you from occasionally mentioned to consistently recommended." },
    { min: 0, label: "Invisible to AI answers", copy: "Right now AI assistants have little reason to cite you, so they recommend someone else. The good news: this is early, the field is open, and the fixes are well understood." },
];

function AeoCheck() {
    const [step, setStep] = useState(-1); // -1 intro, 0..2 questions, 3 result
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
                    <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>Is AI <span className="text-gradient">recommending you</span>?</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        Three quick questions on how ready your brand is to be cited by AI assistants. Nothing is submitted or fetched.
                    </p>
                    <button onClick={() => setStep(0)} className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "0.9rem 2rem" }}>
                        Start the check <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </button>
                </div>
            )}

            {step >= 0 && step < CHECK.length && (
                <div key={step} className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.4rem", lineHeight: 1.3, marginBottom: "1.75rem" }}>{CHECK[step].prompt}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {CHECK[step].options.map((o) => (
                            <button key={o.label} onClick={() => answer(o.score)} className="ws-option" style={{ textAlign: "left", padding: "1rem 1.25rem", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "12px", color: "var(--text-primary)", fontSize: "1rem", fontWeight: 500, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                {o.label}
                                <ArrowRight size={16} className="ws-option-arrow" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step >= CHECK.length && (
                <div key="result" className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-secondary)", marginBottom: "0.75rem" }}>Your result</p>
                    <h3 style={{ fontSize: "1.9rem", lineHeight: 1.2, marginBottom: "1rem" }}><span className="text-gradient">{verdict.label}</span></h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>{verdict.copy}</p>
                    <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2rem" }}>
                            Get your AEO audit — Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <button onClick={reset} style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>Start over</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ServicesAEO() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="AEO Consultant | Answer Engine Optimization | Maria Madeira"
                description="AEO consultant helping brands get cited and recommended by AI assistants — ChatGPT, Perplexity, Gemini and Google AI Overviews — not just ranked on Google."
                path="/services/aeo"
                jsonLd={AEO_JSON_LD}
            />

            <style>{`
                .ws-option { transition: border-color 0.25s ease, transform 0.25s ease; }
                .ws-option:hover { border-color: var(--accent-secondary); transform: translateX(4px); }
                .ws-option-arrow { opacity: 0; transition: opacity 0.25s ease; color: var(--accent-secondary); }
                .ws-option:hover .ws-option-arrow { opacity: 1; }
                .aeo-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
                @media (max-width: 720px) { .aeo-steps { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 420px) { .aeo-steps { grid-template-columns: 1fr; } }
                .aeo-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
                @media (max-width: 860px) { .aeo-hero { grid-template-columns: 1fr; } }
                .aeo-caret { animation: aeo-blink 1s steps(1) infinite; }
                .aeo-answer { animation: aeo-fade 0.5s ease; }
                @keyframes aeo-blink { 50% { opacity: 0; } }
                @keyframes aeo-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
                @media (prefers-reduced-motion: reduce) {
                    .aeo-caret, .aeo-answer { animation: none; }
                }
            `}</style>

            {/* Hero */}
            <section className="aeo-hero" style={{ marginBottom: "5rem" }}>
                <div>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                        Answer Engine Optimization
                    </p>
                    <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                        Get found and <span className="text-gradient">recommended by AI</span> — not just ranked by Google
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        Search is shifting from links to answers. AEO makes sure that when an AI assistant answers "who's the best?", the answer is you.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                        Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <AiChatDemo />
                </div>
            </section>

            {/* What is AEO — quotable callout */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>What is AEO?</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {AEO_DEFINITION}
                    </p>
                </blockquote>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginTop: "1.75rem", fontSize: "1.05rem" }}>
                    Traditional SEO earns you a position in a list of links and trusts the user to click and compare. AEO works one layer up: it shapes the entities, structured data, and answer-ready content that AI engines synthesise into a single response — so your brand is the one named, quoted, and linked.
                </p>
            </section>

            {/* Why now */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Why now</h2>
                </div>
                <div className="grid-3" style={{ marginBottom: "3.5rem" }}>
                    {WHY_NOW.map((c) => (
                        <div key={c.title} className="card" style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: "var(--accent-secondary)" }}>{c.icon}</div>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{c.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{c.line}</p>
                        </div>
                    ))}
                </div>
                <SearchEraToggle />
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>What I do</h2>
                </div>
                <div className="aeo-steps">
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
                <AeoCheck />
            </section>

            {/* Proof */}
            <section style={{ marginBottom: "5rem", maxWidth: "680px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Proof</h2>
                </div>
                <Link to="/case-study-bodysurf-school" className="card hover-lift" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: 700, margin: 0 }}>Case Study</p>
                    <h3 style={{ margin: 0 }}>The Bodysurf School</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: "0.25rem 0 0" }}>
                        SEO and AEO foundations built into a full site rebuild — structured, answer-ready, and findable in both classic and AI search.
                    </p>
                    <span style={{ marginTop: "0.75rem", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem" }}>
                        Read the case study <ArrowRight size={16} />
                    </span>
                </Link>
            </section>

            {/* FAQ — all answers visible, no accordions */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Frequently asked questions</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                <MessageSquare size={18} style={{ flexShrink: 0, marginTop: "3px", color: "var(--accent-secondary)" }} /> {f.q}
                            </h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <Sparkles size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Become the answer AI recommends</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                    Book a free strategy call and we'll map where AI search sees you today — and how to become the cited default in your category.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
