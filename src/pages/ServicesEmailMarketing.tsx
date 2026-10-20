import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Repeat, Users, LineChart, ArrowRight, Mail, Quote } from "lucide-react";
import Seo from "../components/Seo";
import KlaviyoPartnerBadge from "../components/KlaviyoPartnerBadge";
import { PRACTITIONER_URL } from "../lib/credentials";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/emailMarketing";

/* Renders /services/email-marketing and /pt/servicos/email-marketing from
   src/i18n/emailMarketing.ts. Icons, bar widths, scores and links live here;
   every word lives in the copy file. */
const SITE_URL = "https://mariamadeira.com";

/* ── Compounding-curve bar widths, in the copy's order ── */
const CURVE_PCT = [[56, 100], [25, 100]];

/* ── "What I do" icons, in the copy's order ── */
const WHAT_ICONS = [<Search size={26} />, <Repeat size={26} />, <Users size={26} />, <LineChart size={26} />];

const EMAIL_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${SITE_URL}/services/email-marketing#service`,
            "name": "Email Marketing & Klaviyo Consulting",
            "serviceType": "Email Marketing and Klaviyo Consulting",
            "url": `${SITE_URL}/services/email-marketing`,
            "description": COPY.en.definition,
            "provider": { "@id": `${SITE_URL}/#person` },
            "areaServed": "Worldwide",
            "offers": [
                { "@type": "Offer", "name": "Klaviyo setup with core flows", "priceSpecification": { "@type": "PriceSpecification", "minPrice": 1200, "priceCurrency": "GBP" } },
                { "@type": "Offer", "name": "Monthly email marketing", "priceSpecification": { "@type": "UnitPriceSpecification", "minPrice": 750, "priceCurrency": "GBP", "unitText": "per month" } },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/services/email-marketing#faq`,
            "mainEntity": COPY.en.faqs.map((f) => ({
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

/* The Portuguese page: no offers, the page's language and a Portuguese trail. */
const PT_URL = `${SITE_URL}/pt/servicos/email-marketing`;
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PT_URL}#webpage`,
            "url": PT_URL,
            "name": "Consultora de email marketing e Klaviyo",
            "description": COPY.pt.description,
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": `${SITE_URL}/#website` },
            "mainEntity": { "@id": `${PT_URL}#service` },
        },
        {
            "@type": "Service",
            "@id": `${PT_URL}#service`,
            "name": "Email marketing e consultoria Klaviyo",
            "serviceType": "Email marketing e consultoria Klaviyo",
            "url": PT_URL,
            "description": COPY.pt.definition,
            "provider": { "@id": `${SITE_URL}/#person` },
            "areaServed": ["PT", "GB"],
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
                { "@type": "ListItem", "position": 3, "name": "Email marketing e consultoria Klaviyo", "item": PT_URL },
            ],
        },
    ],
};

/* ── "Is your email programme underperforming?" mini-check: scores per option
       and the minimum score of each verdict, in the copy's order ── */
const SCORES = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
const VERDICT_MIN = [5, 3, 0];

function EmailCheck() {
    const { lang, to } = useLang();
    const c = COPY[lang].check;
    const [step, setStep] = useState(-1);
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
                <div key={step} className="animate-fade-in" style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "1.4rem", lineHeight: 1.3, marginBottom: "1.75rem" }}>{c.questions[step].prompt}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {c.questions[step].options.map((label, oi) => ({ label, score: SCORES[step][oi] })).map((o) => (
                            <button key={o.label} onClick={() => answer(o.score)} className="em-option" style={{ textAlign: "left", padding: "1rem 1.25rem", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "12px", color: "var(--text-primary)", fontSize: "1rem", fontWeight: 500, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                {o.label}
                                <ArrowRight size={16} className="em-option-arrow" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step >= c.questions.length && (
                <div key="result" className="animate-fade-in" style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-text)", marginBottom: "0.75rem" }}>{c.yourResult}</p>
                    <h3 style={{ fontSize: "1.9rem", lineHeight: 1.2, marginBottom: "1rem" }}><span className="text-gradient">{verdict.label}</span></h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>{verdict.copy}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
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

export default function ServicesEmailMarketing() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const x = t.ptExtras;
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage="/og/og-email.png"
                jsonLd={lang === "pt" ? PT_JSON_LD : EMAIL_JSON_LD}
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
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.85rem", color: "var(--accent-text)", fontWeight: 600, marginBottom: "1rem" }}>
                        {t.eyebrow}
                    </p>
                    <div style={{ marginBottom: "1.25rem" }}>
                        <KlaviyoPartnerBadge eager />
                    </div>
                    <h1 className="section-title" style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                        {t.h1Lead}<span className="text-gradient">{t.h1Accent}</span>{t.h1Tail}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                        {t.intro}
                    </p>
                    {/* The badge above the H1 already says Klaviyo Partner. */}
                    <p className="trust-line" style={{ marginBottom: "2rem" }}>
                        {t.trustPre}<a href={PRACTITIONER_URL} target="_blank" rel="noopener">
                            {t.trustLink}
                        </a>{t.trustPost}
                    </p>
                    <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                        {t.cta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {t.heroStats.map((st) => (
                        <div key={st.label} className="card" style={{ background: "var(--bg-primary)", padding: "1.5rem" }}>
                            <div style={{ fontSize: "2.2rem", fontWeight: 700, lineHeight: 1, color: "var(--accent-text)" }}>{st.value}</div>
                            <p style={{ fontWeight: 600, margin: "0.5rem 0 0.15rem" }}>{st.label}</p>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>{st.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What great email looks like */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>{t.definitionTitle}</h2>
                <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {t.definition}
                    </p>
                </blockquote>
            </section>

            {/* The compounding curve */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.curveTitle}</h2>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
                        {t.curveSub}
                    </p>
                </div>
                <div className="grid-2" style={{ gap: "1.5rem", maxWidth: "820px", margin: "0 auto" }}>
                    {t.curve.map((c, ci) => (
                        <div key={c.title} className="card" style={{ padding: "2rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "1.5rem" }}>{c.title}</h3>
                            {[c.from, c.to].map((row, i) => ({ ...row, pct: CURVE_PCT[ci][i] })).map((row, i) => (
                                <div key={row.label} style={{ marginBottom: i === 0 ? "1.1rem" : 0 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
                                        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{row.label}</span>
                                        <span style={{ fontWeight: 700, fontSize: "1.1rem", color: i === 1 ? "var(--accent-text)" : "var(--text-primary)" }}>{row.value}</span>
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
                {/* Portuguese only (D19 B): three more results under the curve. */}
                {x && (
                    <div style={{ maxWidth: "820px", margin: "1.5rem auto 0" }}>
                        <style>{`
                            .em-pt-results { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                            @media (max-width: 720px) { .em-pt-results { grid-template-columns: 1fr; } }
                        `}</style>
                        <div className="em-pt-results">
                            {x.results.map((r) => (
                                <div key={r.value} className="card" style={{ background: "var(--bg-primary)", padding: "1.5rem" }}>
                                    <div style={{ fontSize: "2.2rem", fontWeight: 700, lineHeight: 1, color: "var(--accent-text)" }}>{r.value}</div>
                                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: "0.75rem 0 0" }}>{r.label}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: "1rem 0 0.5rem" }}>{x.source}</p>
                        <Link to={to("/case-study-email")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600, fontSize: "0.95rem" }}>
                            {x.caseLink} <ArrowRight size={16} />
                        </Link>
                    </div>
                )}
            </section>

            {/* What I do */}
            <section style={{ marginBottom: "5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.whatTitle}</h2>
                </div>
                <div className="em-steps">
                    {t.whatIDo.map((s, i) => (
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

            {/* Portuguese only (D19 B): who it's for */}
            {x && (
                <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>{x.whoTitle}</h2>
                    <blockquote style={{ background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)", margin: 0 }}>
                        <p style={{ fontSize: "1.2rem", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>{x.whoText}</p>
                    </blockquote>
                </section>
            )}

            {/* Mini-check */}
            <section style={{ marginBottom: "5rem" }}>
                <EmailCheck />
            </section>

            {/* Proof */}
            <section style={{ marginBottom: "5rem", maxWidth: "680px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.proofTitle}</h2>
                </div>
                <Link to={to("/case-study-email")} className="card hover-lift" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, margin: 0, color: "var(--accent-text)" }}>{t.proofEyebrow}</p>
                    <h3 style={{ margin: 0 }}>{t.proofCardTitle}</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, margin: "0.25rem 0 0" }}>
                        {t.proofCardText}
                    </p>
                    <span style={{ marginTop: "0.75rem", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600, fontSize: "0.9rem" }}>
                        {t.proofCardLink} <ArrowRight size={16} />
                    </span>
                </Link>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "1.5rem 0 0" }}>
                    {t.proofParaPre}<Link to={to("/case-study-email")} style={{ color: "var(--accent-text)", fontWeight: 600 }}>{t.proofParaLink}</Link>{t.proofParaPost}
                </p>
                <p style={{ margin: "1rem 0 0" }}>
                    <Link to={to("/blog/klaviyo-flows-vs-campaigns")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent-text)", fontWeight: 600 }}>
                        {t.blogLink} <ArrowRight size={16} />
                    </Link>
                </p>
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

            {/* FAQ, all answers visible */}
            <section style={{ marginBottom: "5rem", maxWidth: "820px", margin: "0 auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.faqTitle}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {t.faqs.map((f) => (
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
                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.ctaTitle}</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                    {t.ctaText}
                </p>
                <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                    {t.ctaButton} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Link>
            </section>
        </div>
    );
}
