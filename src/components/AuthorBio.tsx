import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { useLang } from "../hooks/useLang";
import { PERSON_DESCRIPTION } from "../lib/schema";
import { PRACTITIONER_URL } from "../lib/credentials";
import { Avatar } from "./Byline";

// The one author box, at the end of every blog post and case study. The bio
// is the canonical description the Person schema carries (src/lib/schema.ts),
// word for word in English, so readers and machines get the same facts on
// every page. A page can add one line of its own (`note`).
const COPY = {
    en: {
        role: "Growth consultant in Lisbon · Klaviyo Partner",
        text: PERSON_DESCRIPTION,
        experience: "Most of her experience is in food and drink e-commerce, including five years with a UK premium food brand.",
        about: "About Maria",
        facts: "Key facts",
        credential: "Klaviyo Practitioner credential",
        cta: "Book a free call",
    },
    pt: {
        role: "Consultora de crescimento em Lisboa · Klaviyo Partner",
        text: "Maria Madeira é consultora de crescimento independente, baseada em Lisboa, que ajuda marcas de e-commerce em Portugal e no Reino Unido a serem encontradas no Google e na pesquisa com IA, e a crescer com email marketing no Klaviyo e anúncios pagos.",
        experience: "A maior parte da sua experiência é em e-commerce de alimentação e bebidas, incluindo cinco anos com uma marca de alimentação premium do Reino Unido.",
        about: "Sobre a Maria",
        facts: "Factos principais",
        credential: "Certificado Klaviyo Practitioner",
        cta: "Marque uma conversa gratuita",
    },
};

const linkStyle = { color: "var(--accent-text)", fontWeight: 600 } as const;

export default function AuthorBio({ note, cta = true }: {
    /** One extra line for this page, e.g. the author's role in the story told. */
    note?: ReactNode;
    /** The "Book a free call" link; off where the page ends on its own CTA. */
    cta?: boolean;
}) {
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <aside
            aria-label="Maria Madeira"
            style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
            <Avatar size={64} />
            <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontWeight: 700, color: "var(--text-primary)", fontSize: "1.05rem" }}>
                    <Link to={to("/about")} rel="author" style={{ color: "inherit" }}>Maria Madeira</Link>
                </p>
                <p style={{ margin: "0 0 0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-text)", fontWeight: 600 }}>
                    {t.role}
                </p>
                <p style={{ margin: "0 0 0.75rem" }}>
                    {t.text} {t.experience}{note && <> {note}</>}
                </p>
                <p style={{ margin: 0, display: "flex", flexWrap: "wrap", gap: "0.4rem 1.25rem", fontSize: "0.95rem" }}>
                    <Link to={to("/about")} style={linkStyle}>{t.about}</Link>
                    <Link to={to("/ai-information")} style={linkStyle}>{t.facts}</Link>
                    <a href="https://www.linkedin.com/in/maria-madeira-growth" target="_blank" rel="noopener" style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        LinkedIn <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    <a href={PRACTITIONER_URL} target="_blank" rel="noopener" style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        {t.credential} <ExternalLink size={12} aria-hidden="true" />
                    </a>
                    {cta && <Link to={to("/contact")} style={linkStyle}>{t.cta}</Link>}
                </p>
            </div>
        </aside>
    );
}
