import { Fragment } from "react";
import Seo from "../components/Seo";
import { ORG_REF, breadcrumbNode, webPageNode, withEntities } from "../lib/schema";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/privacy";

/**
 * Privacy policy, laid out like /ai-information: headings, paragraphs and
 * lists, no cards or animation. Renders /privacy and /pt/privacidade from
 * src/i18n/privacy.ts. Bump MODIFIED_ISO and the visible "updated" line
 * together whenever the policy changes.
 */
const MODIFIED_ISO = "2026-11-02";

const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const UL = { ...P, listStyle: "disc", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" } as const;
const linkStyle = { color: "var(--accent-text)", fontWeight: 600 };

/* The email address and the CNPD site become links wherever the copy names them. */
const LINKS: Record<string, string> = {
    "info@mariamadeira.com": "mailto:info@mariamadeira.com",
    "www.cnpd.pt": "https://www.cnpd.pt",
};
const LINK_RE = /(info@mariamadeira\.com|www\.cnpd\.pt)/;

function linkify(text: string) {
    return text.split(LINK_RE).map((part, i) =>
        LINKS[part]
            ? <a key={i} href={LINKS[part]} style={linkStyle} {...(part.startsWith("www") ? { target: "_blank", rel: "noopener" } : {})}>{part}</a>
            : <Fragment key={i}>{part}</Fragment>,
    );
}

export default function Privacy() {
    const { lang } = useLang();
    const t = COPY[lang];
    // The page, its breadcrumb and the shared Person, Organization and WebSite.
    const jsonLd = withEntities([
        webPageNode({
            path: t.path,
            name: t.h1,
            description: t.description,
            lang,
            dateModified: MODIFIED_ISO,
            publisher: ORG_REF,
        }),
        breadcrumbNode(lang, [[t.breadcrumb[1], t.path]]),
    ]);

    return (
        <div className="container" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo title={t.title} description={t.description} path={t.path} jsonLd={jsonLd} />
            <article style={{ maxWidth: "760px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                    {t.h1}
                </h1>
                <p style={P}>{t.intro}</p>

                {t.sections.map((s) => (
                    <section key={s.title}>
                        <h2 style={H2}>{s.title}</h2>
                        {s.paragraphs?.map((p) => <p key={p} style={P}>{linkify(p)}</p>)}
                        {s.list && (
                            <ul style={UL}>
                                {s.list.map((item) => <li key={item}>{linkify(item)}</li>)}
                            </ul>
                        )}
                        {s.after?.map((p) => <p key={p} style={P}>{linkify(p)}</p>)}
                    </section>
                ))}

                <p style={{ ...P, fontSize: "0.95rem", fontStyle: "italic", marginTop: "3rem" }}>
                    {t.updated}
                </p>
            </article>
        </div>
    );
}
