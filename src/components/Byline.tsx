import { Link } from "react-router-dom";
import { Clock, ExternalLink } from "lucide-react";
import { useLang } from "../hooks/useLang";
import type { Lang } from "../lib/i18n";

/**
 * The author and date line under a blog post or case study title.
 *
 * Dates are rendered from the same ISO strings the page passes to its
 * JSON-LD datePublished/dateModified, so the visible date and the schema
 * date cannot drift apart. The name links to /about (/pt/sobre), the entity
 * page for the author.
 */
const MONTHS: Record<Lang, string[]> = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    pt: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
};

const COPY = {
    en: { published: "Published", updated: "Updated", client: "Client site:" },
    pt: { published: "Publicado a", updated: "Atualizado a", client: "Site do cliente:" },
};

/**
 * "19 October 2026" / "19 de outubro de 2026" from an ISO date. Read from the
 * string itself, not a Date: the calendar day of the commit, in the commit's
 * own time zone, and identical on the server and in the browser.
 */
function humanDate(iso: string, lang: Lang): string {
    const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
    return lang === "pt" ? `${d} de ${MONTHS.pt[m - 1]} de ${y}` : `${d} ${MONTHS.en[m - 1]} ${y}`;
}

/**
 * Round crop of the portrait, zoomed onto the face (the source is a
 * half-length photo). Decorative: the name beside it says who it is.
 */
export function Avatar({ size }: { size: number }) {
    return (
        <span aria-hidden="true" style={{ display: "inline-block", flexShrink: 0, width: `${size}px`, height: `${size}px`, borderRadius: "50%", overflow: "hidden", background: "var(--bg-secondary)" }}>
            <img
                src="/maria-notebook-400.webp"
                alt=""
                width={size}
                height={size}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 25%", transform: "scale(1.6)", transformOrigin: "52% 32%" }}
            />
        </span>
    );
}

interface BylineProps {
    published: string;
    modified: string;
    readTime?: string;
    /** The client's live site, on case studies that name the client. */
    client?: { name: string; url: string };
    /** Tighter spacing, without the rule underneath (case-study headers). */
    compact?: boolean;
}

export default function Byline({ published, modified, readTime, client, compact = false }: BylineProps) {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const pub = humanDate(published, lang);
    const mod = humanDate(modified, lang);
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem 1rem",
                flexWrap: "wrap",
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                ...(compact
                    ? { marginBottom: "1.5rem" }
                    : { marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }),
            }}
        >
            <Link to={to("/about")} rel="author" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, color: "var(--text-primary)" }}>
                <Avatar size={28} />
                Maria Madeira
            </Link>
            <span>{t.published} <time dateTime={published}>{pub}</time></span>
            {mod !== pub && <span>{t.updated} <time dateTime={modified}>{mod}</time></span>}
            {readTime && (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={13} aria-hidden="true" /> {readTime.trim()}
                </span>
            )}
            {client && (
                <span>
                    {t.client}{" "}
                    <a href={client.url} target="_blank" rel="noopener" title={client.name} style={{ color: "var(--accent-text)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        {client.url.replace(/^https?:\/\/(www\.)?/, "")} <ExternalLink size={12} aria-hidden="true" />
                    </a>
                </span>
            )}
        </div>
    );
}
