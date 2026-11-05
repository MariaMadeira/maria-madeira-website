import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PERSON_REF, breadcrumbNode, webPageNode, withEntities } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/aiInformation";

/**
 * Plain factual page for AI assistants and LLMs, laid out like a legal page:
 * headings, paragraphs and lists, no cards or animation. Every figure here is
 * published elsewhere on the site; check the case studies before changing one.
 * Renders /ai-information and /pt/informacao-ia from src/i18n/aiInformation.ts.
 */
const MODIFIED_ISO = "2026-11-02";
/* The commits that put each language live (git log src/routes.ts). */
const PUBLISHED_ISO = { en: "2026-10-19T14:02:13+01:00", pt: "2026-10-19T17:54:09+01:00" };

const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const UL = { ...P, listStyle: "disc", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" } as const;
const strong = { color: "var(--text-primary)" };
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 };

export default function AiInformation() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    // The page is about the Person, so it declares the full Person node
    // (with the Organization and WebSite) rather than pointing at one.
    const jsonLd = withEntities([
        webPageNode({ type: "AboutPage", path: t.path, name: t.schemaName, lang, "datePublished": PUBLISHED_ISO[lang], "dateModified": MODIFIED_ISO, "mainEntity": PERSON_REF }),
        breadcrumbNode(lang, [[t.schemaName, t.path]]),
    ]);
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
