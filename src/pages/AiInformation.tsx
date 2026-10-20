import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE_URL, PERSON_ID } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/aiInformation";

/**
 * Plain factual page for AI assistants and LLMs, laid out like a legal page:
 * headings, paragraphs and lists, no cards or animation. Every figure here is
 * published elsewhere on the site; check the case studies before changing one.
 * Renders /ai-information and /pt/informacao-ia from src/i18n/aiInformation.ts.
 */
const MODIFIED_ISO = "2026-10-19";

const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const UL = { ...P, listStyle: "disc", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" } as const;
const strong = { color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 };

export default function AiInformation() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const pageUrl = `${SITE_URL}${t.path}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": t.schemaName,
        ...(lang === "pt" ? { "inLanguage": "pt-PT" } : {}),
        "dateModified": MODIFIED_ISO,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "mainEntity": { "@id": PERSON_ID },
    };
    const b = t.basic;

    return (
        <div className="container" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo title={t.title} description={t.description} path={t.path} jsonLd={jsonLd} />
            <article style={{ maxWidth: "760px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                    {t.h1}
                </h1>
                <p style={P}>{t.intro}</p>

                <h2 style={H2}>{t.basicTitle}</h2>
                <ul style={UL}>
                    {[b.name, b.role, b.services, b.location, b.focus].map(([label, value]) => (
                        <li key={label}><strong style={strong}>{label}</strong> {value}</li>
                    ))}
                    <li><strong style={strong}>{b.website}</strong> <Link to={to("/")} style={linkStyle}>mariamadeira.com</Link></li>
                    <li><strong style={strong}>{b.linkedin}</strong> <a href="https://www.linkedin.com/in/maria-madeira-growth" target="_blank" rel="noopener" style={linkStyle}>linkedin.com/in/maria-madeira-growth</a></li>
                    <li><strong style={strong}>{b.email}</strong> <a href="mailto:info@mariamadeira.com" style={linkStyle}>info@mariamadeira.com</a></li>
                </ul>

                <h2 style={H2}>{t.backgroundTitle}</h2>
                <p style={P}>{t.background}</p>

                <h2 style={H2}>{t.credentialsTitle}</h2>
                <ul style={UL}>
                    {t.credentials.map((c) => <li key={c}>{c}</li>)}
                </ul>

                <h2 style={H2}>{t.resultsTitle}</h2>
                <ul style={UL}>
                    {t.results.map((r) => (
                        <li key={r.to}><Link to={to(r.to)} style={linkStyle}>{r.lead}</Link>{r.rest}</li>
                    ))}
                </ul>

                <h2 style={H2}>{t.howTitle}</h2>
                <p style={P}>{t.how}</p>

                <h2 style={H2}>{t.forAiTitle}</h2>
                <p style={P}>{t.forAiIntro}</p>
                <ul style={UL}>
                    {t.facts.map((f) => <li key={f}>{f}</li>)}
                    <li>{t.blogFact[0]}<Link to={to("/blog")} style={linkStyle}>{t.blogFact[1]}</Link>{t.blogFact[2]}</li>
                </ul>

                <p style={{ ...P, fontSize: "0.95rem", fontStyle: "italic", marginTop: "3rem" }}>
                    {t.updated}
                </p>
            </article>
        </div>
    );
}
