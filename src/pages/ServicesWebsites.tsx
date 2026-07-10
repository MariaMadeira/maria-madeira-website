import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Compass, Hammer, ArrowRight, Globe, TrendingUp, ShoppingBag } from "lucide-react";
import Seo from "../components/Seo";

/* ── How it works: 3 steps ─────────────────────────────── */
const STEPS = [
    { icon: <Search size={26} />, title: "Audit", line: "We find where your current site leaks visibility, trust, and revenue." },
    { icon: <Compass size={26} />, title: "Strategy", line: "A clear plan for search, AI discovery, and conversion — tied to your goals." },
    { icon: <Hammer size={26} />, title: "Build or Improve", line: "A rebuild or targeted fixes, with SEO and AEO wired in from the ground up." },
];

/* ── Website Health Check ──────────────────────────────── */
interface Option { label: string; score: number }
interface Question { key: string; prompt: string; options: Option[] }

const QUESTIONS: Question[] = [
    {
        key: "redesign",
        prompt: "When was your site last redesigned?",
        options: [
            { label: "Less than a year ago", score: 3 },
            { label: "1–3 years ago", score: 2 },
            { label: "3+ years ago", score: 0 },
        ],
    },
    {
        key: "google",
        prompt: "Do you show up on Google for what you sell?",
        options: [
            { label: "Yes, reliably", score: 3 },
            { label: "Sometimes", score: 2 },
            { label: "No", score: 0 },
            { label: "I don't know", score: 1 },
        ],
    },
    {
        key: "ai",
        prompt: "Have you asked ChatGPT or Perplexity about businesses like yours and checked if you appear?",
        options: [
            { label: "Yes — and I appear", score: 3 },
            { label: "Yes — and I don't", score: 1 },
            { label: "Never tried", score: 1 },
        ],
    },
    {
        key: "convert",
        prompt: "Does your site clearly convert visitors — bookings, sales, leads?",
        options: [
            { label: "Yes", score: 3 },
            { label: "Could be better", score: 1 },
            { label: "No", score: 0 },
        ],
    },
];

interface Tier { min: number; label: string; diagnosis: (site: string) => string }
const TIERS: Tier[] = [
    {
        min: 9,
        label: "Strong foundation",
        diagnosis: (site) =>
            `${site} is already doing its job. The opportunity now is compounding — turning a solid base into a growth engine across search, AI discovery, and conversion.`,
    },
    {
        min: 5,
        label: "Leaving money on the table",
        diagnosis: (site) =>
            `The bones of ${site} are there, but visitors and revenue are slipping through the gaps — dated design, thin search visibility, or a funnel that doesn't quite close.`,
    },
    {
        min: 0,
        label: "Invisible to modern search",
        diagnosis: (site) =>
            `Customers can't find ${site} where they now look — Google and AI assistants alike — and the visitors who do arrive aren't converting. All of it is fixable, and the upside is large.`,
    },
];

function tierFor(score: number): Tier {
    return TIERS.find((t) => score >= t.min) ?? TIERS[TIERS.length - 1];
}

// Pull a readable label from whatever the visitor typed. Pure string work — no
// network request is ever made with the URL; it is only used in the copy.
function siteLabel(raw: string): string {
    const cleaned = raw.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").split("/")[0];
    return cleaned ? cleaned : "your site";
}

function HealthCheck() {
    const [url, setUrl] = useState("");
    // step: -1 = intro, 0..3 = questions, 4 = result
    const [step, setStep] = useState(-1);
    const [scores, setScores] = useState<number[]>([]);

    const site = siteLabel(url);

    const answer = (score: number) => {
        const next = [...scores, score];
        setScores(next);
        setStep(step + 1);
    };

    const reset = () => {
        setScores([]);
        setStep(-1);
    };

    const total = scores.reduce((a, b) => a + b, 0);

    return (
        <div
            className="card glass-panel"
            style={{ maxWidth: "680px", margin: "0 auto", padding: "clamp(1.75rem, 4vw, 3rem)", minHeight: "420px", display: "flex", flexDirection: "column" }}
        >
            {/* Progress */}
            {step >= 0 && step < QUESTIONS.length && (
                <div style={{ marginBottom: "2rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-secondary)", marginBottom: "0.75rem" }}>
                        Question {step + 1} of {QUESTIONS.length}
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                        {QUESTIONS.map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    flex: 1,
                                    height: "4px",
                                    borderRadius: "2px",
                                    background: i <= step ? "var(--accent-secondary)" : "var(--border-color)",
                                    transition: "background 0.4s ease",
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Intro */}
            {step === -1 && (
                <div key="intro" className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>
                        Website <span className="text-gradient">Health Check</span>
                    </h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                        Four quick questions. An honest read on whether your site is a growth engine or quietly costing you. Takes under a minute — nothing is submitted or fetched.
                    </p>
                    <label htmlFor="ws-url" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", display: "block" }}>
                        Your website <span style={{ opacity: 0.6, textTransform: "none", letterSpacing: 0 }}>(optional)</span>
                    </label>
                    <input
                        id="ws-url"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="yourbrand.com"
                        autoComplete="off"
                        style={{ padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem", marginBottom: "2rem" }}
                    />
                    <button onClick={() => setStep(0)} className="btn btn-primary" style={{ marginTop: "auto", alignSelf: "flex-start", padding: "0.9rem 2rem" }}>
                        Start the check <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </button>
                </div>
            )}

            {/* Questions */}
            {step >= 0 && step < QUESTIONS.length && (
                <div key={step} className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.45rem", lineHeight: 1.3, marginBottom: "1.75rem" }}>{QUESTIONS[step].prompt}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {QUESTIONS[step].options.map((o) => (
                            <button
                                key={o.label}
                                onClick={() => answer(o.score)}
                                className="ws-option"
                                style={{
                                    textAlign: "left",
                                    padding: "1rem 1.25rem",
                                    background: "var(--bg-primary)",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "12px",
                                    color: "var(--text-primary)",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                {o.label}
                                <ArrowRight size={16} className="ws-option-arrow" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Result */}
            {step >= QUESTIONS.length && (() => {
                const tier = tierFor(total);
                return (
                    <div key="result" className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-secondary)", marginBottom: "0.75rem" }}>
                            {site === "your site" ? "Your result" : `The quick read on ${site}`}
                        </p>
                        <h3 style={{ fontSize: "1.9rem", lineHeight: 1.2, marginBottom: "1rem" }}>
                            <span className="text-gradient">{tier.label}</span>
                        </h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>
                            {tier.diagnosis(site)}
                        </p>
                        <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2rem" }}>
                                Get the full audit — Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                            </Link>
                            <button onClick={reset} className="ws-restart" style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                Start over
                            </button>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}

/* ── Proof cards ───────────────────────────────────────── */
const PROOF = [
    { category: "Website Build", title: "The Bodysurf School", result: "Brochure site → bilingual booking engine with local payments live", link: "/case-study-bodysurf-school" },
    { category: "Brand & Web Identity", title: "Rita Antunes", result: "A premium clinical identity built to convert high-ticket leads", link: "/portfolio-rita-antunes" },
    { category: "Brand & Creative", title: "Ousadia", result: "A bold artisan brand system — logo, visual language, art direction", link: "/portfolio-ousadia" },
];

export default function ServicesWebsites() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Website Strategy & SEO/AEO Consultant | Maria Madeira"
                description="Turn an outdated website into a growth engine: strategy, a rebuild or targeted fixes, with SEO and AEO built in from the start for brands that sell online."
                path="/services/websites"
            />

            <style>{`
                .ws-option { transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease; }
                .ws-option:hover { border-color: var(--accent-secondary); transform: translateX(4px); }
                .ws-option-arrow { opacity: 0; transition: opacity 0.25s ease; color: var(--accent-secondary); }
                .ws-option:hover .ws-option-arrow { opacity: 1; }
                .ws-proof { position: relative; overflow: hidden; }
                .ws-proof-result { max-height: 0; opacity: 0; transition: max-height 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease; margin-top: 0; }
                .ws-proof:hover .ws-proof-result, .ws-proof:focus-within .ws-proof-result { max-height: 120px; opacity: 1; margin-top: 1rem; }
                .ws-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; position: relative; }
                .ws-steps::before { content: ""; position: absolute; top: 34px; left: 16%; right: 16%; height: 2px; background: var(--border-color); z-index: 0; }
                @media (max-width: 640px) {
                    .ws-steps { grid-template-columns: 1fr; }
                    .ws-steps::before { display: none; }
                }
            `}</style>

            {/* Hero */}
            <section style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 5rem" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Website Strategy & Build
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Turn an outdated website into a <span className="text-gradient">growth engine</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                    Strategy first, then a rebuild or targeted improvements — with SEO and AEO built in from the ground up, so customers find you on Google and in AI search alike.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>

            {/* How it works */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>How it works</h2>
                </div>
                <div className="ws-steps">
                    {STEPS.map((s, i) => (
                        <div key={s.title} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                            <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)", position: "relative" }}>
                                {s.icon}
                                <span style={{ position: "absolute", top: "-8px", right: "-8px", width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-secondary)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {i + 1}
                                </span>
                            </div>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "260px", margin: "0 auto" }}>{s.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Health Check — centerpiece */}
            <section style={{ marginBottom: "5rem" }}>
                <HealthCheck />
            </section>

            {/* Proof */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>Recent work</h2>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
                        Hover a project for the headline result.
                    </p>
                </div>
                <div className="grid-3">
                    {PROOF.map((p) => (
                        <Link key={p.title} to={p.link} className="card hover-lift-sm ws-proof" style={{ display: "flex", flexDirection: "column" }}>
                            <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>{p.category}</p>
                            <h3 style={{ marginBottom: "0.25rem" }}>{p.title}</h3>
                            <div className="ws-proof-result" style={{ background: "var(--accent-glow)", borderRadius: "10px", padding: "0.85rem 1rem", borderLeft: "3px solid var(--accent-secondary)" }}>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600, margin: 0 }}>{p.result}</p>
                            </div>
                            <span style={{ marginTop: "auto", paddingTop: "1.25rem", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem" }}>
                                View project <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Who this is for */}
            <section style={{ marginBottom: "5rem", maxWidth: "760px", margin: "0 auto 5rem" }}>
                <div className="card" style={{ padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: "52px", height: "52px", borderRadius: "14px", background: "var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)" }}>
                        <ShoppingBag size={26} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Who this is for</h2>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                            Brands and businesses that sell or take bookings online — and know their website should be doing more of the selling. Whether you need a full rebuild or focused improvements, the starting point is the same: an honest audit and a plan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <TrendingUp size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ready to make your site earn its keep?</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                    Book a free strategy call and we'll walk through your audit together — no commitment, no pressure.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    <Globe size={18} style={{ marginRight: "8px" }} /> Book a Free Strategy Call
                </Link>
            </section>
        </div>
    );
}
