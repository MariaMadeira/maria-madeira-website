import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { PAID_ADS_SERVICE } from "../lib/links";
import { langOf, ptLink, type Lang } from "../lib/i18n";

/* Footer copy per language, with English paths throughout. On /pt pages each
   path goes through ptLink, so it reaches the Portuguese page once live. */
const COPY: Record<Lang, {
    home: string; blurb: string; nav: string; navLinks: { name: string; path: string }[];
    company: string; companyLinks: { name: string; path: string }[];
    touch: string; touchLine: string; cta: string; ctaPath: string; based: [string, string]; rights: string;
}> = {
    en: {
        home: "/",
        blurb: "Growth Strategist for modern brands that sell online, looking to scale through data-driven decisions and AI-powered marketing.",
        nav: "Navigation",
        navLinks: [
            { name: "Services", path: "/services" },
            { name: "Website Strategy & Build", path: "/services/websites" },
            { name: "AI Search Visibility (AEO)", path: "/services/aeo" },
            { name: "Email Marketing & Klaviyo", path: "/services/email-marketing" },
            { name: "Paid Ads", path: PAID_ADS_SERVICE },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Blog", path: "/blog" },
            { name: "Pricing", path: "/pricing" },
        ],
        company: "Company",
        companyLinks: [
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "AI Information", path: "/ai-information" },
        ],
        touch: "Get in Touch",
        touchLine: "Ready to scale your brand? Let's talk.",
        cta: "Book a Free Strategy Call",
        ctaPath: "/contact",
        based: ["Based in Lisbon, Portugal.", "Working Globally."],
        rights: "All rights reserved.",
    },
    pt: {
        home: "/pt",
        blurb: "Consultora de crescimento para marcas que vendem online, com decisões baseadas em dados e marketing apoiado por IA.",
        nav: "Navegação",
        navLinks: [
            { name: "Serviços", path: "/services" },
            { name: "Sites", path: "/services/websites" },
            { name: "AEO e SEO", path: "/services/aeo" },
            { name: "Email marketing e Klaviyo", path: "/services/email-marketing" },
            { name: "Anúncios pagos", path: PAID_ADS_SERVICE },
            { name: "Casos de estudo", path: "/case-studies" },
            { name: "Portefólio", path: "/portfolio" },
            { name: "Blog", path: "/blog" },
            { name: "Preços", path: "/pricing" },
        ],
        company: "Empresa",
        companyLinks: [
            { name: "Sobre", path: "/about" },
            { name: "Contacto", path: "/contact" },
            { name: "AI Information", path: "/ai-information" },
        ],
        touch: "Fale comigo",
        touchLine: "Quer fazer crescer a sua marca? Vamos conversar.",
        cta: "Marcar uma conversa gratuita",
        ctaPath: "/pt/contacto",
        based: ["Baseada em Lisboa, Portugal.", "A trabalhar com marcas em Portugal e no Reino Unido."],
        rights: "Todos os direitos reservados.",
    },
};

const LINK = { color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" } as const;

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const lang = langOf(useLocation().pathname);
    const t = COPY[lang];
    const localize = (path: string) => (lang === "pt" ? ptLink(path).to : path);

    return (
        <footer style={{ 
            background: "var(--text-primary)", 
            color: "white", 
            padding: "5rem 0 3rem",
            marginTop: "4rem"
        }}>
            <div className="container">
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
                    gap: "3rem",
                    marginBottom: "4rem"
                }}>
                    {/* Brand Section */}
                    <div>
                        <Link to={t.home} style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.5rem",
                            fontWeight: 400,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "white",
                            display: "block",
                            marginBottom: "1.5rem"
                        }}>
                            Maria Madeira
                        </Link>
                        <p style={{ 
                            color: "rgba(255,255,255,0.7)", 
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            maxWidth: "300px"
                        }}>
                            {t.blurb}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.1rem" }}>{t.nav}</h2>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            {t.navLinks.map((l) => <li key={l.path}><Link to={localize(l.path)} style={LINK}>{l.name}</Link></li>)}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h2 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.1rem" }}>{t.company}</h2>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            {t.companyLinks.map((l) => <li key={l.path}><Link to={localize(l.path)} style={LINK}>{l.name}</Link></li>)}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h2 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.1rem" }}>{t.touch}</h2>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
                            {t.touchLine}
                        </p>
                        <Link
                            to={t.ctaPath}
                            style={{
                                display: "inline-block",
                                padding: "0.7rem 1.5rem",
                                background: "var(--accent-secondary)",
                                color: "white",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                transition: "background 0.3s ease",
                                marginBottom: "1.5rem",
                            }}
                        >
                            {t.cta}
                        </Link>
                        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                            <a href="https://www.linkedin.com/in/maria-madeira-growth" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", transition: "color 0.3s ease" }} aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="mailto:info@mariamadeira.com" style={{ color: "rgba(255,255,255,0.7)", transition: "color 0.3s ease" }} aria-label="Email"><Mail size={20} /></a>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "1rem" }}>
                            {t.based[0]}<br />{t.based[1]}
                        </p>
                    </div>
                </div>

                <div style={{ 
                    borderTop: "1px solid rgba(255,255,255,0.1)", 
                    paddingTop: "2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem"
                }}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                        © {currentYear} Maria Madeira. {t.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
