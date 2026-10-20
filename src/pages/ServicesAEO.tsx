import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Search, Database, FileText, LineChart, MessageSquare, ArrowRight, Users, MousePointerClick, Quote, Bot } from "lucide-react";
import Seo from "../components/Seo";
import FinalCta from "../components/FinalCta";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/aeo";

/* Renders /services/aeo and /pt/servicos/aeo from src/i18n/aeo.ts. Icons,
   scores and links live here; every word lives in the copy file. */
const SITE_URL = "https://mariamadeira.com";

const WHY_ICONS = [<Users size={24} />, <MousePointerClick size={24} />, <Sparkles size={24} />];
const WHAT_ICONS = [<Search size={26} />, <Database size={26} />, <FileText size={26} />, <LineChart size={26} />];

/* ── FAQ: drives both the visible section and the FAQPage schema ── */
const FAQS = COPY.en.faqs;

const AEO_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${SITE_URL}/services/aeo#service`,
            "name": "Answer Engine Optimisation (AEO)",
            "serviceType": "Answer Engine Optimisation",
            "url": `${SITE_URL}/services/aeo`,
            "description": COPY.en.definition,
            "provider": { "@id": `${SITE_URL}/#person` },
            "areaServed": "Worldwide",
            "offers": [
                { "@type": "Offer", "name": "AEO audit", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 750, "priceCurrency": "GBP" } },
                { "@type": "Offer", "name": "Ongoing AEO", "priceSpecification": { "@type": "UnitPriceSpecification", "minPrice": 800, "priceCurrency": "GBP", "unitText": "per month" } },
            ],
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
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
                { "@type": "ListItem", "position": 3, "name": "Answer Engine Optimisation", "item": `${SITE_URL}/services/aeo` },
            ],
        },
    ],
};

/* The Portuguese page: no offers, the page's language and a Portuguese trail. */
const PT_URL = `${SITE_URL}/pt/servicos/aeo`;
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PT_URL}#webpage`,
            "url": PT_URL,
            "name": "Consultora de AEO",
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
            "mainEntity": { "@id": `${PT_URL}#service` },
        },
        {
            "@type": "Service",
            "@id": `${PT_URL}#service`,
            "name": "Otimização para motores de resposta (AEO)",
            "serviceType": "Otimização para motores de resposta",
            "url": PT_URL,
            "description": COPY.pt.definition,
            "provider": { "@id": `${SITE_URL}/#person` },
            "areaServed": "Worldwide",
        },
        {
            "@type": "FAQPage",
            "@id": `${PT_URL}#faq`,
            "inLanguage": "pt-PT",
            "mainEntity": COPY.pt.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Início", "item": `${SITE_URL}/pt` },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${SITE_URL}/pt/servicos` },
                { "@type": "ListItem", "position": 3, "name": "AEO", "item": PT_URL },
            ],
        },
    ],
};

/* ── Hero: user-controlled mock AI chat (Without AEO / With AEO) ───── */
// Both states share one answer, word for word; only the brand name and citation
// change. The "Without/With AEO" framing lives in the toggle above the card, so
// the AI answer itself never editorialises. Layout is identical between states.
function AiChatDemo() {
    const c = COPY[useLang().lang].chat;
    const [active, setActive] = useState(0); // 0 = Without AEO (default)
    const s = { ...c.states[active], you: active === 1 };
    // Same pill treatment in both states; only the tone (accent vs neutral) differs.
    const tone = s.you
        ? { fg: "var(--accent-secondary)", bg: "var(--accent-glow)" }
        : { fg: "var(--text-secondary)", bg: "var(--bg-tertiary)" };
    return (
        <div style={{ maxWidth: "440px", width: "100%" }}>
            {/* on/off switch: off = Without AEO (default), on = With AEO */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.9rem", marginBottom: "1.5rem" }}>
                <button
                    type="button"
                    onClick={() => setActive(0)}
                    className="aeo-switch-label"
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: active === 0 ? 700 : 500, color: active === 0 ? "var(--accent-text)" : "var(--text-secondary)", transition: "color 0.15s ease" }}
                >
                    {c.states[0].label}
                </button>
                <button
                    type="button"
                    role="switch"
                    aria-checked={active === 1}
                    aria-label={c.switchLabel}
                    onClick={() => setActive(active === 1 ? 0 : 1)}
                    className="aeo-switch"
                    style={{
                        position: "relative", boxSizing: "border-box", width: "52px", height: "28px", borderRadius: "999px",
                        cursor: "pointer", flexShrink: 0, padding: 0,
                        border: "1px solid var(--border-color)",
                        background: active === 1 ? "var(--accent-secondary)" : "var(--bg-tertiary)",
                        transition: "background 0.15s ease",
                    }}
                >
                    <span aria-hidden="true" style={{
                        position: "absolute", top: "2px", left: "2px", width: "22px", height: "22px", borderRadius: "50%",
                        background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                        transform: active === 1 ? "translateX(24px)" : "translateX(0)",
                        transition: "transform 0.15s ease",
                    }} />
                </button>
                <button
                    type="button"
                    onClick={() => setActive(1)}
                    className="aeo-switch-label"
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: active === 1 ? 700 : 500, color: active === 1 ? "var(--accent-text)" : "var(--text-secondary)", transition: "color 0.15s ease" }}
                >
                    {c.states[1].label}
                </button>
            </div>

            <div className="aeo-chat card" style={{ padding: "1.5rem", background: "var(--bg-primary)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
                    <Bot size={16} /> {c.assistant}
                </div>
                {/* user question: identical in both states */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
                    <span style={{ background: "var(--accent-text)", color: "#fff", padding: "0.6rem 0.9rem", borderRadius: "14px 14px 4px 14px", fontSize: "0.9rem", maxWidth: "85%" }}>
                        {c.question}
                    </span>
                </div>
                {/* assistant answer: same layout; brand name, citation and accent tone differ */}
                <div key={active} className="aeo-answer" style={{ display: "flex", gap: "0.6rem" }}>
                    <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", background: "var(--bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-secondary)" }}><Sparkles size={15} /></span>
                    <span style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--text-primary)" }}>
                        {c.answerPre}{" "}
                        <strong style={{ color: tone.fg }}>{s.cite}</strong>{c.answerPost}
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "0.5rem", fontSize: "0.78rem", fontWeight: 600, color: tone.fg, background: tone.bg, padding: "3px 10px", borderRadius: "20px" }}><Quote size={12} /> {c.cited}{s.href}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

/* ── "Is AI recommending you?" 3-question check: scores per option and the
       minimum score of each verdict, in the copy's order ── */
const SCORES = [[2, 0, 1], [2, 1, 0], [2, 1, 0]];
const VERDICT_MIN = [5, 3, 0];

function AeoCheck() {
    const { lang, to } = useLang();
    const c = COPY[lang].check;
    const [step, setStep] = useState(-1); // -1 intro, 0..2 questions, 3 result
    const [scores, setScores] = useState<number[]>([]);
    const total = scores.reduce((a, b) => a + b, 0);
    const vi = VERDICT_MIN.findIndex((min) => total >= min);
    const verdict = c.verdicts[vi === -1 ? c.verdicts.length - 1 : vi];

    const answer = (sc: number) => { setScores([...scores, sc]); setStep(step + 1); };
    const reset = () => { setScores([]); setStep(-1); };

    return (
        <div className="card glass-panel" style={{ maxWidth: "680px", margin: "0 auto", padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", flexDirection: "column" }}>
            {step >= 0 && step < c.questions.length && (
                <div style={{ marginBottom: "2rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "0.75rem" }}>{c.questionOf[0]}{step + 1}{c.questionOf[1]}{c.questions.length}</p>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                        {c.questions.map((_, i) => (
                            <span key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", background: i <= step ? "var(--accent-secondary)" : "var(--border-color)", transition: "background 0.4s ease" }} />
                        ))}
                    </div>
                </div>
            )}

            {step === -1 && (
                <div key="intro" className="animate-fade-in" style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>{c.titleLead}<span className="text-gradient">{c.titleAccent}</span>{c.titleTail}</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        {c.intro}
                    </p>
                    <button onClick={() => setStep(0)} className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "0.9rem 2rem" }}>
                        {c.start} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </button>
                </div>
            )}

            {step >= 0 && step < c.questions.length && (
                <div key={step} className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.4rem", lineHeight: 1.3, marginBottom: "1.75rem" }}>{c.questions[step].prompt}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {c.questions[step].options.map((label, oi) => ({ label, score: SCORES[step][oi] })).map((o) => (
                            <button key={o.label} onClick={() => answer(o.score)} className="ws-option" style={{ textAlign: "left", padding: "1rem 1.25rem", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "12px", color: "var(--text-primary)", fontSize: "1rem", fontWeight: 500, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                {o.label}
                                <ArrowRight size={16} className="ws-option-arrow" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step >= c.questions.length && (
                <div key="result" className="animate-fade-in" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "0.75rem" }}>{c.yourResult}</p>
                    <h3 style={{ fontSize: "1.9rem", lineHeight: 1.2, marginBottom: "1rem" }}><span className="text-gradient">{verdict.label}</span></h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>{verdict.copy}</p>
                    <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                        <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "0.9rem 2rem" }}>
                            {c.resultCta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <button onClick={reset} style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "3px" }}>{c.restart}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ServicesAEO() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage="/og/og-aeo.png"
                jsonLd={lang === "pt" ? PT_JSON_LD : AEO_JSON_LD}
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
                .aeo-answer { animation: aeo-fade 0.2s ease; }
                @keyframes aeo-fade { from { opacity: 0; } to { opacity: 1; } }
                .aeo-switch:focus-visible, .aeo-switch-label:focus-visible { outline: 2px solid var(--accent-secondary); outline-offset: 3px; border-radius: 6px; }
                @media (prefers-reduced-motion: reduce) {
                    .aeo-answer { animation: none; }
                    .aeo-switch span, .aeo-switch { transition: none; }
                }
            `}</style>

            {/* Hero */}
            <section className="aeo-hero" style={{ marginBottom: "5rem" }}>
                <div>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem" }}>
                        {t.eyebrow}
                    </p>
                    <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                        {t.h1Lead}<span className="text-gradient">{t.h1Accent}</span>{t.h1Tail}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        {t.intro}
                    </p>
                    <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                        {t.cta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <AiChatDemo />
                </div>
            </section>

            {/* What is AEO: the quotable callout */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>{t.whatIsTitle}</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {t.definition}
                    </p>
                </blockquote>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginTop: "1.75rem", fontSize: "1.05rem" }}>
                    {t.whatIsText}
                </p>
                <p style={{ marginTop: "1.25rem", fontSize: "1.05rem" }}>
                    <Link to={to("/blog/what-is-aeo")} style={{ color: "var(--accent-text)", fontWeight: 600 }}>{t.guideLink}</Link>
                </p>
            </section>

            {/* Why now */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.whyTitle}</h2>
                </div>
                <div className="grid-3">
                    {t.why.map((c, i) => (
                        <div key={c.title} className="card" style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: "var(--accent-secondary)" }}>{WHY_ICONS[i]}</div>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{c.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{c.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.whatTitle}</h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "760px", margin: "0 auto", textAlign: "left" }}>
                        {t.whatIntro}
                    </p>
                </div>
                <div className="aeo-steps">
                    {t.what.map((s, i) => (
                        <div key={s.title} style={{ textAlign: "center" }}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--bg-primary)", border: "2px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "var(--accent-secondary)", position: "relative" }}>
                                {WHAT_ICONS[i]}
                                <span style={{ position: "absolute", top: "-8px", right: "-8px", width: "26px", height: "26px", borderRadius: "50%", background: "var(--accent-text)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                            </div>
                            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "240px", margin: "0 auto" }}>{s.line}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Built alongside the rest */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.alongsideTitle}</h2>
                </div>
                {t.alongside.map((p) => (
                    <p key={p} style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
                        {p}
                    </p>
                ))}
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", margin: 0 }}>
                    {t.comparisonLead}<Link to={to("/blog/best-aeo-agencies-ecommerce-europe")} style={{ color: "var(--accent-text)", fontWeight: 600 }}>{t.comparisonLink}</Link>
                </p>
            </section>

            {/* Mini-check */}
            <section style={{ marginBottom: "5rem" }}>
                <AeoCheck />
            </section>

            {/* Proof */}
            <section style={{ marginBottom: "5rem", maxWidth: "680px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.proofTitle}</h2>
                </div>
                {/* SEO case study first: the homepage card's clicks chart, reused as an image */}
                <div className="case-study-card" style={{ marginBottom: "1.5rem" }}>
                    <div className="case-study-media-slot">
                        <img
                            className="case-study-media-img"
                            src={lang === "pt" ? "/card-seo-clicks-pt.svg" : "/card-seo-clicks.svg"}
                            alt={t.seoCard.alt}
                            width={640}
                            height={400}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="case-study-card-body">
                        <p className="case-study-category">{t.seoCard.kicker}</p>
                        <h3 className="case-study-card-title">{t.seoCard.title}</h3>
                        <ul className="case-study-items-list">
                            {t.seoCard.items.map((item) => (
                                <li key={item} className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to={to("/case-study-seo")} className="case-study-link">
                            {t.proofCard.link} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
                <Link to={to("/case-study-bodysurf-school")} className="card hover-lift" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: 700, margin: 0 }}>{t.proofCard.kicker}</p>
                    <h3 style={{ margin: 0 }}>{t.proofCard.title}</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: "0.25rem 0 0" }}>
                        {t.proofCard.text}
                    </p>
                    <span style={{ marginTop: "0.75rem", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600, fontSize: "0.9rem" }}>
                        {t.proofCard.link} <ArrowRight size={16} />
                    </span>
                </Link>
            </section>

            {/* Pricing */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.pricingTitle}</h2>
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", margin: 0 }}>
                    {t.pricingText}
                </p>
                <p style={{ margin: "1.25rem 0 0" }}>
                    <Link to={to("/pricing")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600 }}>
                        {t.pricingLink} <ArrowRight size={16} />
                    </Link>
                </p>
            </section>

            {/* FAQ: all answers visible, no accordions */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.faqTitle}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {t.faqs.map((f) => (
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
            <FinalCta title={t.ctaTitle} line={t.ctaText} button={t.cta} to={to("/contact")} />
        </div>
    );
}
