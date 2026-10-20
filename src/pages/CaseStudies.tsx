import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { SITE_URL } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import type { Lang } from "../lib/i18n";
import COPY from "../i18n/caseStudies";

/* Each card's English path, in the copy's order; `to` localises it. */
const STUDY_LINKS = [
    "/case-study-seo",
    "/case-study-google-ads",
    "/case-study-email",
    "/case-study-click-collect",
    "/case-study-bodysurf-school",
];

/**
 * Every case study Article declares isPartOf this @id (see caseStudyJsonLd), but
 * the node itself was never declared anywhere, leaving the reference unresolved.
 * hasPart mirrors it back so the collection and its members point at each other.
 */
function caseStudiesJsonLd(lang: Lang, to: (enPath: string) => string) {
    const c = COPY[lang];
    const url = `${SITE_URL}${c.path}`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${url}#collection`,
                "url": url,
                "name": c.schemaName,
                "description": c.schemaDescription,
                ...(lang === "pt" ? { "inLanguage": "pt-PT" } : {}),
                "hasPart": STUDY_LINKS.map((link) => ({ "@id": `${SITE_URL}${to(link)}#article` })),
            },
        ],
    };
}

export default function CaseStudies() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    const studies = c.studies.map((study, i) => ({ ...study, link: STUDY_LINKS[i] }));
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={c.title}
                description={c.description}
                path={c.path}
                jsonLd={caseStudiesJsonLd(lang, to)}
            />

            <h1 className="section-title">{c.h1Lead}<span className="text-gradient">{c.h1Accent}</span></h1>
            <p style={{ 
                textAlign: "center", 
                color: "var(--text-secondary)", 
                maxWidth: "700px", 
                margin: "-1.5rem auto 3rem", 
                fontSize: "1.1rem", 
                lineHeight: 1.8 
            }}>
                {c.intro}
            </p>

            <div
                className="grid-4"
                style={{
                    background: "var(--bg-secondary)",
                    borderRadius: "20px",
                    border: "1px solid var(--border-color)",
                    padding: "2.5rem 2rem",
                    marginBottom: "4rem",
                }}
            >
                {c.headlineResults.map((result) => (
                    <div key={result.label} style={{ textAlign: "center" }}>
                        <p className="text-gradient-accent" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.5rem" }}>
                            {result.value}
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>{result.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid-2">
                {studies.map((study, index) => (
                    <div
                        key={index}
                        className="card glass-panel hover-lift-sm"
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                        <p className="text-gradient-accent" style={{ fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                            {study.category}
                        </p>
                        <h3>{study.title}</h3>
                        <div style={{ marginTop: "1rem", flex: 1 }}>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                                <strong>{c.problemLabel}</strong> {study.problem}
                            </p>
                        </div>

                        <div style={{ 
                            padding: "1rem", 
                            background: "var(--accent-glow)", 
                            borderRadius: "8px", 
                            border: "1px solid var(--border-color)",
                            borderLeft: "4px solid var(--accent-secondary)"
                        }}>
                            <p style={{ fontWeight: 600, color: "var(--accent-text)", margin: 0 }}>{study.results}</p>
                        </div>

                        {study.link ? (
                            <Link to={to(study.link)} className="btn btn-secondary" style={{ marginTop: "1.5rem", width: "100%", textAlign: "center" }}>
                                {c.readMore}
                            </Link>
                        ) : (
                            <button className="btn btn-secondary" style={{ marginTop: "1.5rem", width: "100%" }}>
                                {c.readMore}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
