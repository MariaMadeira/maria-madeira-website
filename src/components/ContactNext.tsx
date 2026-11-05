import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import type { ContactNextCopy } from "../i18n/contactNext";

/**
 * The steps and FAQ below the form on /contact and /pt/contacto. Same markup
 * as "How it works" and the FAQ on /pricing. The page's FAQPage schema is
 * built from the same `faqs`, so the visible text and the schema match.
 */
export default function ContactNext({ c }: { c: ContactNextCopy }) {
    return (
        <>
            <style>{`
                .pr-steps { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
                @media (max-width: 860px) { .pr-steps { grid-template-columns: 1fr; } }
            `}</style>

            {/* What happens next */}
            <section style={{ maxWidth: "1100px", margin: "6rem auto 5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.stepsTitle}</h2>
                </div>
                <ol className="pr-steps">
                    {c.steps.map((s, i) => (
                        <li key={s} className="card" style={{ background: "var(--bg-secondary)", position: "relative", padding: "2rem 2rem 1.75rem" }}>
                            <span aria-hidden="true" style={{ position: "absolute", top: "1.25rem", right: "1.5rem", fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-secondary)", lineHeight: 1 }}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, margin: "1.75rem 0 0" }}>{s}</p>
                        </li>
                    ))}
                </ol>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", textAlign: "center", margin: "2rem 0 0" }}>{c.reply}</p>
            </section>

            {/* Before you book, all answers visible */}
            <section style={{ maxWidth: "820px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.faqTitle}</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {c.faqs.map((f) => {
                        const at = f.link ? f.a.indexOf(f.link.text) : -1;
                        return (
                            <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                    <Quote size={18} style={{ flexShrink: 0, marginTop: "3px", color: "var(--accent-secondary)" }} /> {f.q}
                                </h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                                    {f.link && at !== -1 ? (
                                        <>
                                            {f.a.slice(0, at)}
                                            <Link to={f.link.to} style={{ color: "var(--accent-text)", fontWeight: 600 }}>{f.link.text}</Link>
                                            {f.a.slice(at + f.link.text.length)}
                                        </>
                                    ) : f.a}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
