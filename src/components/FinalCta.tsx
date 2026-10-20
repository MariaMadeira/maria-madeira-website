import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * The closing band of a page: an optional small round photo of Maria, a
 * heading, one line and the primary button. Copy comes from the page, so the
 * /pt twin passes its own text.
 */
export default function FinalCta({ title, line, button, to, photo = false, photoAlt = "" }: {
    title: string;
    line?: string;
    button: string;
    to: string;
    photo?: boolean;
    photoAlt?: string;
}) {
    return (
        <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 1.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", marginBottom: "6rem" }}>
            {photo && (
                <picture>
                    <source type="image/webp" srcSet="/maria-notebook-400.webp" />
                    <img
                        src="/maria-notebook-400.jpg"
                        alt={photoAlt}
                        width="96"
                        height="96"
                        loading="lazy"
                        decoding="async"
                        style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 15%", display: "block", margin: "0 auto 1.5rem" }}
                    />
                </picture>
            )}
            <h2 style={{ fontSize: "2rem", marginBottom: line ? "0.75rem" : "2.5rem" }}>{title}</h2>
            {line && <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", margin: "0 auto 2rem", maxWidth: "36rem" }}>{line}</p>}
            <Link to={to} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                {button} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </Link>
        </section>
    );
}
