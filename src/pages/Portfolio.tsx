import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useLang } from "../hooks/useLang";
import type { Lang } from "../lib/i18n";
import { SITE_URL, breadcrumbNode, webPageNode, withEntities } from "../lib/schema";
import COPY from "../i18n/portfolio";
import { PROJECT_ASSETS } from "../data/portfolio";

/* Renders /portfolio and /pt/portefolio from src/i18n/portfolio.ts. Links
   and images live in src/data/portfolio.ts, in the same order as the copy's
   projects (alt text: the copy's cardAlts). Real <img> elements, not CSS
   backgrounds, so the browser can prioritise the first row and search
   engines can index them. */

/* The hub as a CollectionPage whose parts are the project pages, each named,
   with the @id its own CreativeWork node uses. */
function portfolioHubJsonLd(lang: Lang, to: (enPath: string) => string) {
    const c = COPY[lang];
    return withEntities([
        webPageNode({
            type: "CollectionPage",
            path: c.path,
            name: `${c.h1Lead}${c.h1Accent}${c.h1Tail}`.trim(),
            description: c.description,
            lang,
            "hasPart": c.projects.map((p, i) => ({
                "@type": "CreativeWork",
                "@id": `${SITE_URL}${to(PROJECT_ASSETS[i].link)}#work`,
                "name": p.title,
                "url": `${SITE_URL}${to(PROJECT_ASSETS[i].link)}`,
            })),
        }),
        breadcrumbNode(lang, [[lang === "pt" ? "Portefólio" : "Portfolio", c.path]]),
    ]);
}

export default function Portfolio() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    /* The filter is kept as a position in the list (0 = all), so it means the
       same thing in both languages. */
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = c.projects.map((p, i) => {
        const { link, src, srcPt, width, height, fit } = PROJECT_ASSETS[i];
        return { ...p, link, src: lang === "pt" && srcPt ? srcPt : src, width, height, fit, alt: c.cardAlts[i] };
    });

    const activeCategories = [c.all, ...new Set(projects.map(p => p.category))];
    const activeCategory = activeCategories[activeIndex] ?? c.all;

    const filteredProjects = activeIndex === 0
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={c.title}
                description={c.description}
                path={c.path}
                jsonLd={portfolioHubJsonLd(lang, to)}
            />

            <h1 className="section-title">{c.h1Lead}<span className="text-gradient">{c.h1Accent}</span>{c.h1Tail}</h1>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "4rem" }}>
                {activeCategories.map((cat, i) => (
                    <button
                        key={i}
                        className={`btn ${activeIndex === i ? "btn-primary" : "btn-secondary"}`}
                        onClick={() => setActiveIndex(i)}
                        style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="card-grid">
                {filteredProjects.map((project, i) => (
                    <div key={project.title} style={{ animation: 'fadeIn 0.3s ease both' }}>
                        <Link to={to(project.link)} className="portfolio-card">
                            <div className="portfolio-image-container hover-scale">
                                {/* The first row (two cards) loads at once, the
                                    first at high priority as the likely LCP;
                                    the rest wait until they near the viewport. */}
                                <img
                                    src={encodeURI(project.src)}
                                    alt={project.alt}
                                    width={project.width}
                                    height={project.height}
                                    loading={i < 2 ? undefined : "lazy"}
                                    fetchPriority={i === 0 ? "high" : undefined}
                                    decoding={i === 0 ? undefined : "async"}
                                    style={{ display: "block", width: "100%", height: "280px", objectFit: project.fit, objectPosition: "center" }}
                                />
                            </div>
                            <div className="portfolio-content">
                                <div className="portfolio-category">{project.category}</div>
                                <h2 className="portfolio-title">{project.title}</h2>
                                <p className="portfolio-description">{project.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
