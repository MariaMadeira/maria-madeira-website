import { Link } from "react-router-dom";
import { useLang } from "../hooks/useLang";

// Shared author bio for blog articles. Centralised so every post inherits the
// same wording; update it here and all articles follow. Portuguese as approved
// in docs/pt-review/lote-2-3-4.md.
const COPY = {
    en: { text: "Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing, and paid acquisition.", cta: "Book a free call" },
    pt: { text: "Maria Madeira é consultora de crescimento para marcas que vendem online: estratégia e construção de sites, SEO e AEO, email marketing e anúncios pagos.", cta: "Marque uma conversa gratuita" },
};

export default function AuthorBio() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
            {t.text}{" "}
            <Link to={to("/contact")} style={{ color: "var(--accent-text)", fontWeight: 600, fontStyle: "normal" }}>{t.cta}</Link>.
        </div>
    );
}
