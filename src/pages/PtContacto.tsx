import { useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import Seo from "../components/Seo";
import { SITE_URL } from "../lib/schema";

/* Portuguese twin of /contact. Same Formspree form as the English page; the
   subject marks the enquiry as coming from the Portuguese site. */
const FORMSPREE = "https://formspree.io/f/xvzvrqde";
const PAGE_URL = `${SITE_URL}/pt/contacto`;

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${PAGE_URL}#webpage`,
    "url": PAGE_URL,
    "name": "Contacto",
    "inLanguage": "pt-PT",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#person` },
};

/* Enquiry presets reachable as /pt/contacto?topic=<key>, mirroring /contact.
   Anything else, including no parameter, leaves the page as it is. */
const TOPICS: Record<string, { subject: string; intro: string; message: string; h1: string; submitLabel: string; need: string }> = {
    "ai-search-check": {
        subject: "Verificação gratuita na pesquisa com IA (PT)",
        intro: "Verificação gratuita na pesquisa com IA: indique a sua marca e o seu site, e respondo com uma nota curta.",
        message: "Marca:\n",
        h1: "Pedir a verificação gratuita",
        submitLabel: "Pedir a minha verificação gratuita",
        need: "Pesquisa com IA e SEO",
    },
};

/* Options of the "Em que precisa de ajuda?" select, in the order of /contact.
   Each value is the label itself, so the enquiry email reads in plain words. */
const NEEDS = ["Pesquisa com IA e SEO", "Email e Klaviyo", "Anúncios pagos", "Website", "Ainda não sei"];

const FIELD = { padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem" } as const;
const LABEL = { fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase" } as const;
const OPTIONAL = { fontWeight: 500, textTransform: "none" } as const;

const subscribeNever = () => () => {};

export default function PtContacto() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    /* The prerendered page is the no-topic state. During hydration React uses
       the server snapshot (false), so the first client render matches that
       HTML; the query is read from the render after. */
    const { search } = useLocation();
    const hydrated = useSyncExternalStore(subscribeNever, () => true, () => false);
    const topicKey = hydrated ? new URLSearchParams(search).get("topic") : null;
    const preset = topicKey ? TOPICS[topicKey] ?? null : null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        const form = e.currentTarget;
        const formData = new FormData(form);
        const subject = `${preset ? preset.subject : "Pedido pelo site (PT)"} de ${formData.get("name")}`;
        formData.append("_subject", subject);

        const mailto = () => {
            const body = `Nome: ${formData.get("name")}\nEmail: ${formData.get("email")}\nSite: ${formData.get("website") || "-"}\nPrecisa de ajuda com: ${formData.get("need") || "-"}\n\n${formData.get("message")}`;
            window.location.href = `mailto:info@mariamadeira.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        };

        try {
            const response = await fetch(FORMSPREE, { method: "POST", body: formData, headers: { Accept: "application/json" } });
            if (response.ok) form.reset();
            else mailto(); // Formspree refused: hand the message to the mail client.
        } catch {
            mailto(); // Offline or network error: same fallback.
        }
        setStatus("success");
    };

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Contacto | Maria Madeira"
                description="Conte-me sobre a sua marca e o que gostaria de melhorar. Respondo pessoalmente."
                path="/pt/contacto"
                jsonLd={JSON_LD}
            />

            <div className="grid-2 contact-grid" style={{ maxWidth: "1100px", margin: "0 auto", gap: "4rem" }}>
                <div>
                    <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.5rem" }}>{preset ? preset.h1 : "Vamos conversar"}</h1>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        Conte-me sobre a sua marca e o que gostaria de melhorar. Respondo pessoalmente.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px" }}>
                                <Mail className="text-gradient-accent" size={24} />
                            </div>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email</strong>
                                <a href="mailto:info@mariamadeira.com" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.1rem" }}>info@mariamadeira.com</a>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px" }}>
                                <Linkedin className="text-gradient-accent" size={24} />
                            </div>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>LinkedIn</strong>
                                <a href="https://www.linkedin.com/in/maria-madeira-growth" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.1rem" }}>linkedin.com/in/maria-madeira-growth</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card glass-panel" style={{ padding: "3rem" }}>
                    {status === "success" ? (
                        <div role="status" style={{ textAlign: "center", padding: "2rem 0" }}>
                            <CheckCircle size={64} color="var(--accent-secondary)" style={{ marginBottom: "1.5rem" }} />
                            <p style={{ fontSize: "1.15rem", color: "var(--text-primary)", lineHeight: 1.7, margin: 0 }}>
                                Obrigada! Recebi a sua mensagem e respondo em breve.
                            </p>
                        </div>
                    ) : (
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleSubmit}>
                            {preset && (
                                <p style={{ margin: 0, padding: "1rem 1.25rem", background: "var(--accent-glow)", borderLeft: "3px solid var(--accent-secondary)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                                    {preset.intro}
                                </p>
                            )}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="name" style={LABEL}>Nome</label>
                                <input type="text" id="name" name="name" required autoComplete="name" style={FIELD} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="email" style={LABEL}>Email</label>
                                <input type="email" id="email" name="email" required autoComplete="email" style={FIELD} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="website" style={LABEL}>Website <span style={OPTIONAL}>(opcional)</span></label>
                                <input type="text" id="website" name="website" autoComplete="url" inputMode="url" style={FIELD} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="need" style={LABEL}>Em que precisa de ajuda? <span style={OPTIONAL}>(opcional)</span></label>
                                <select key={topicKey ?? "default"} defaultValue={preset ? preset.need : ""} id="need" name="need" style={FIELD}>
                                    <option value="">Escolha uma opção</option>
                                    {NEEDS.map((n) => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="message" style={LABEL}>Mensagem</label>
                                <textarea key={topicKey ?? "default"} defaultValue={preset ? preset.message : ""} id="message" name="message" rows={5} required style={{ ...FIELD, resize: "vertical" }} placeholder="O que gostaria de melhorar ou fazer crescer?" />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }} disabled={status === "submitting"}>
                                {preset ? preset.submitLabel : "Enviar mensagem"} <Send size={18} style={{ marginLeft: "10px" }} />
                            </button>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textAlign: "center", margin: 0 }}>
                                Sem compromisso, sem pressão.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
