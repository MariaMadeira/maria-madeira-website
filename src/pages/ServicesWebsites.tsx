import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Compass, Hammer, ArrowRight, Globe, TrendingUp, ShoppingBag } from "lucide-react";
import Seo from "../components/Seo";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/websites";

const SITE_URL = "https://mariamadeira.com";
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/pt/servicos/sites#webpage`,
            "url": `${SITE_URL}/pt/servicos/sites`,
            "name": "Estratégia e construção de sites",
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${SITE_URL}/pt/servicos` },
                { "@type": "ListItem", "position": 3, "name": "Estratégia e construção de sites", "item": `${SITE_URL}/pt/servicos/sites` },
            ],
        },
    ],
};
const WEBSITES_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": "Website Strategy & Build", "item": `${SITE_URL}/services/websites` },
            ],
        },
    ],
};

/* Renders /services/websites and /pt/servicos/sites from src/i18n/websites.ts.
   Icons, scores and links live here; every word lives in the copy file. */
const STEP_ICONS = [<Search size={26} />, <Compass size={26} />, <Hammer size={26} />];

/* ── Website Health Check: scores per option, in the copy's order ── */
const SCORES = [
    [3, 2, 0],
    [3, 2, 0, 1],
    [3, 1, 1],
    [3, 1, 0],
];
const TIER_MIN = [9, 5, 0];

function tierIndex(score: number): number {
    const i = TIER_MIN.findIndex((min) => score >= min);
    return i === -1 ? TIER_MIN.length - 1 : i;
}

// Pull a readable label from whatever the visitor typed. Pure string work: no
// network request is ever made with the URL; it is only used in the copy.
function siteLabel(raw: string, fallback: string): string {
    const cleaned = raw.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").split("/")[0];
    return cleaned ? cleaned : fallback;
}

/** Fill "{site}"; in Portuguese, a sentence that opens with it starts in capitals. */
function diagnose(template: string, site: string, capitalise: boolean): string {
    const text = template.replace("{site}", site);
    return capitalise && template.startsWith("{site}") ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function HealthCheck() {
    const { lang, to } = useLang();
    const c = COPY[lang].check;
    const [url, setUrl] = useState("");
    // step: -1 = intro, 0..3 = questions, 4 = result
    const [step, setStep] = useState(-1);
    const [scores, setScores] = useState<number[]>([]);

    const site = siteLabel(url, c.defaultSite);

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
            {step >= 0 && step < c.questions.length && (
                <div style={{ marginBottom: "2rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "0.75rem" }}>
                        {c.questionOf[0]}{step + 1}{c.questionOf[1]}{c.questions.length}
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                        {c.questions.map((_, i) => (
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
                        {c.titleLead}<span className="text-gradient">{c.titleAccent}</span>
                    </h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                        {c.intro}
                    </p>
                    <label htmlFor="ws-url" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", display: "block" }}>
                        {c.fieldLabel}<span style={{ opacity: 0.6, textTransform: "none", letterSpacing: 0 }}>{c.fieldOptional}</span>
                    </label>
                    <input
                        id="ws-url"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={c.placeholder}
                        autoComplete="off"
                        style={{ padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem", marginBottom: "2rem" }}
                    />
                    <button onClick={() => setStep(0)} className="btn btn-primary" style={{ marginTop: "auto", alignSelf: "flex-start", padding: "0.9rem 2rem" }}>
                        {c.start} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </button>
                </div>
            )}

            {/* Questions */}
            {step >= 0 && step < c.questions.length && (
                <div key={step} className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.45rem", lineHeight: 1.3, marginBottom: "1.75rem" }}>{c.questions[step].prompt}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {c.questions[step].options.map((label, oi) => ({ label, score: SCORES[step][oi] })).map((o) => (
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
            {step >= c.questions.length && (() => {
                const tier = c.tiers[tierIndex(total)];
                return (
                    <div key="result" className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "0.75rem" }}>
                            {site === c.defaultSite ? c.yourResult : `${c.quickReadOn}${site}`}
                        </p>
                        <h3 style={{ fontSize: "1.9rem", lineHeight: 1.2, marginBottom: "1rem" }}>
                            <span className="text-gradient">{tier.label}</span>
                        </h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>
                            {diagnose(tier.diagnosis, site, c.capitaliseSiteAtStart)}
                        </p>
                        <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                            <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "0.9rem 2rem" }}>
                                {c.resultCta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                            </Link>
                            <button onClick={reset} className="ws-restart" style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                                {c.restart}
                            </button>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}

/* ── Proof cards: links per card, text from the copy in the same order ── */
const PROOF_LINKS = ["/case-study-bodysurf-school", "/portfolio-rita-antunes", "/portfolio-ousadia"];

export default function ServicesWebsites() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const proof = t.proof.map((p, i) => ({ ...p, link: PROOF_LINKS[i] }));
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage="/og/og-websites.png"
                jsonLd={lang === "pt" ? PT_JSON_LD : WEBSITES_JSON_LD}
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
                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem" }}>
                    {t.eyebrow}
                </p>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    {t.h1Lead}<span className="text-gradient">{t.h1Accent}</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                    {t.intro}
                </p>
                <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    {t.cta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>

            {/* How it works */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>{t.howTitle}</h2>
                </div>
                <div className="ws-steps">
                    {t.steps.map((s, i) => ({ ...s, icon: STEP_ICONS[i] })).map((s, i) => (
                        <div key={s.title} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                            <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)", position: "relative" }}>
                                {s.icon}
                                <span style={{ position: "absolute", top: "-8px", right: "-8px", width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-text)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {i + 1}
                                </span>
                            </div>
                            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "260px", margin: "0 auto" }}>{s.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Health Check: the centrepiece */}
            <section style={{ marginBottom: "5rem" }}>
                <HealthCheck />
            </section>

            {/* Proof */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>{t.recentTitle}</h2>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
                        {t.recentIntro}
                    </p>
                </div>
                <div className="grid-3">
                    {proof.map((p) => (
                        <Link key={p.title} to={to(p.link)} className="card hover-lift-sm ws-proof" style={{ display: "flex", flexDirection: "column" }}>
                            <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.5rem" }}>{p.category}</p>
                            <h3 style={{ marginBottom: "0.25rem" }}>{p.title}</h3>
                            <div className="ws-proof-result" style={{ background: "var(--accent-glow)", borderRadius: "10px", padding: "0.85rem 1rem", borderLeft: "3px solid var(--accent-secondary)" }}>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600, margin: 0 }}>{p.result}</p>
                            </div>
                            <span style={{ marginTop: "auto", paddingTop: "1.25rem", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600, fontSize: "0.9rem" }}>
                                {t.viewProject} <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))}
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "2rem auto 0", maxWidth: "680px", textAlign: "center" }}>
                    {t.proofNote[0]}<Link to={to("/case-study-bodysurf-school")} style={{ color: "var(--accent-text)", fontWeight: 600 }}>{t.proofNote[1]}</Link>{t.proofNote[2]}<Link to={to("/portfolio")} style={{ color: "var(--accent-text)", fontWeight: 600 }}>{t.proofNote[3]}</Link>{t.proofNote[4]}
                </p>
            </section>

            {/* Who this is for */}
            <section style={{ marginBottom: "5rem", maxWidth: "760px", margin: "0 auto 5rem" }}>
                <div className="card" style={{ padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: "52px", height: "52px", borderRadius: "14px", background: "var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)" }}>
                        <ShoppingBag size={26} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{t.whoTitle}</h2>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                            {t.who}
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                <div style={{ display: "inline-flex", width: "56px", height: "56px", borderRadius: "50%", background: "var(--accent-glow)", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)", marginBottom: "1.5rem" }}>
                    <TrendingUp size={28} />
                </div>
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.ctaTitle}</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                    {t.ctaText}
                </p>
                <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    <Globe size={18} style={{ marginRight: "8px" }} /> {t.cta}
                </Link>
            </section>
        </div>
    );
}
