import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/portfolio";

/* Renders /portfolio and /pt/portefolio from src/i18n/portfolio.ts. Links
   and images live here, in the same order as the copy's projects. */
const PROJECT_ASSETS = [
    { link: "/portfolio-click-collect", visual: "url('/projects/click-collect/app-mockups.webp') center/cover" },
    { link: "/portfolio-email-marketing", visual: "url('/projects/email-marketing/recipe.webp') center/cover" },
    { link: "/portfolio-rita-antunes", visual: "url('/projects/rita-antunes/mockup-stationery.webp') center/cover" },
    { link: "/portfolio-ousadia", visual: "url('/projects/ousadia/moodboard.webp') center/cover" },
    { link: "/portfolio-ai-enhanced", visual: "url('/projects/ai-enhanced/cooked ox cheek.webp') center/cover" },
    { link: "/portfolio-ai-product-photography", visual: "url('/projects/ai-product/DEPOIS%20Cotswold%20Fudge%20Butterscotch.jpg') center/cover" },
];

export default function Portfolio() {
    const { lang, to } = useLang();
    const c = COPY[lang];
    /* The filter is kept as a position in the list (0 = all), so it means the
       same thing in both languages. */
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = c.projects.map((p, i) => ({ ...p, ...PROJECT_ASSETS[i] }));

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
                {filteredProjects.map((project) => (
                    <div key={project.title} style={{ animation: 'fadeIn 0.3s ease both' }}>
                        <Link to={to(project.link)} className="portfolio-card">
                            <div className="portfolio-image-container hover-scale">
                                <div style={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "280px",
                                    background: project.visual,
                                }} />
                            </div>
                            <div className="portfolio-content">
                                <div className="portfolio-category">{project.category}</div>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-description">{project.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
