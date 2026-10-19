import { useState } from "react";
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

const FIELD = { padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem" } as const;
const LABEL = { fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase" } as const;

export default function PtContacto() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        const form = e.currentTarget;
        const formData = new FormData(form);
        const subject = `Pedido pelo site (PT) de ${formData.get("name")}`;
        formData.append("_subject", subject);

        const mailto = () => {
            const body = `Nome: ${formData.get("name")}\nEmail: ${formData.get("email")}\nSite: ${formData.get("website") || "-"}\n\n${formData.get("message")}`;
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
                    <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.5rem" }}>Vamos conversar</h1>
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
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="name" style={LABEL}>Nome</label>
                                <input type="text" id="name" name="name" required autoComplete="name" style={FIELD} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="email" style={LABEL}>Email</label>
                                <input type="email" id="email" name="email" required autoComplete="email" style={FIELD} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="website" style={LABEL}>Site (opcional)</label>
                                <input type="text" id="website" name="website" autoComplete="url" inputMode="url" style={FIELD} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="message" style={LABEL}>Mensagem</label>
                                <textarea id="message" name="message" rows={5} required style={{ ...FIELD, resize: "vertical" }} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }} disabled={status === "submitting"}>
                                Enviar <Send size={18} style={{ marginLeft: "10px" }} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
