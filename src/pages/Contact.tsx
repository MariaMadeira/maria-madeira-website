import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";

/* Enquiry presets reachable as /contact?topic=<key>. Anything else, including no
   parameter at all, leaves the page exactly as it was. */
const TOPICS: Record<string, { subject: string; intro: string; message: string; h1: string; submitLabel: string; need: string }> = {
    "ai-search-check": {
        subject: "AI search check",
        intro: "AI search check: tell me your brand and website, and I'll get back to you with a short note.",
        message: "Brand:\n",
        h1: "Free AI search check",
        submitLabel: "Request my check",
        need: "AI search and SEO",
    },
};

/* Options of the "What do you need help with?" select. Each value is the label
   itself, so the enquiry email reads in plain words. */
const NEEDS = ["AI search and SEO", "Email and Klaviyo", "Paid ads", "Website", "Not sure yet"];

const FIELD = { padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem" } as const;
const LABEL = { fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase" } as const;
const OPTIONAL = { fontWeight: 500, textTransform: "none" } as const;

const subscribeNever = () => () => {};

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    /* The prerendered /contact HTML is the no-topic state. During hydration React
       uses the server snapshot (false), so the first client render matches that
       HTML; the query string is read from the render after. Same pattern as
       PtContacto.tsx. */
    const { search } = useLocation();
    const hydrated = useSyncExternalStore(subscribeNever, () => true, () => false);
    const topicKey = hydrated ? new URLSearchParams(search).get("topic") : null;
    const preset = topicKey ? TOPICS[topicKey] ?? null : null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        // Formspree reads _subject. Without it every enquiry arrived under
        // Formspree's own generic default, so ordinary enquiries get one too.
        formData.append("_subject", preset ? preset.subject : `Website enquiry from ${formData.get("name")}`);

        try {
            // Replace YOUR_FORM_ID with the ID from https://formspree.io (e.g. "xpzgkwqr")
            const response = await fetch("https://formspree.io/f/xvzvrqde", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                // Fallback: open mailto if Formspree isn't configured
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const message = formData.get("message") as string;

                const subject = encodeURIComponent(preset ? preset.subject : `Website enquiry from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nWebsite: ${formData.get("website") || "-"}\nNeeds help with: ${formData.get("need") || "-"}\n\n${message}`);
                window.location.href = `mailto:info@mariamadeira.com?subject=${subject}&body=${body}`;
                setStatus("success");
            }
        } catch {
            // Offline / network error: fallback to mailto
            const formDataObj = Object.fromEntries(formData.entries());
            const subject = encodeURIComponent(preset ? preset.subject : `Website enquiry from ${formDataObj.name}`);
            const body = encodeURIComponent(`Name: ${formDataObj.name}\nEmail: ${formDataObj.email}\nWebsite: ${formDataObj.website || "-"}\nNeeds help with: ${formDataObj.need || "-"}\n\n${formDataObj.message}`);
            window.location.href = `mailto:info@mariamadeira.com?subject=${subject}&body=${body}`;
            setStatus("success");
        }
    };

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Contact Maria Madeira | Growth Strategist"
                description="Contact Maria Madeira to discuss growth strategy, email marketing, paid advertising, or AI marketing systems for your online business. Let's talk."
                path="/contact"
            />

            <h1 className="section-title">{preset ? preset.h1 : "Let's talk"}</h1>

            <div className="grid-2 contact-grid" style={{ maxWidth: "1100px", margin: "0 auto", gap: "4rem" }}>
                <div className="reveal-left is-visible">
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        Tell me about your brand and what isn't working. I'll reply within 24 hours, usually with a few times for a free 30-minute call.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px" }}>
                                <Mail className="text-gradient-accent" size={24} />
                            </div>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</strong>
                                <a href="mailto:info@mariamadeira.com" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.1rem" }}>info@mariamadeira.com</a>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px" }}>
                                <Linkedin className="text-gradient-accent" size={24} />
                            </div>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: 'uppercase', letterSpacing: '0.1em' }}>LinkedIn</strong>
                                <a href="https://www.linkedin.com/in/maria-madeira-growth" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.1rem" }}>Connect on LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card glass-panel reveal-right is-visible" style={{ padding: '3rem' }}>
                    {status === "success" ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <CheckCircle size={64} color="var(--accent-secondary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Message Sent!</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                            <button onClick={() => setStatus("idle")} className="btn btn-secondary" style={{ marginTop: '2rem' }}>Send another</button>
                        </div>
                    ) : (
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleSubmit}>
                            {preset && (
                                <p style={{ margin: 0, padding: "1rem 1.25rem", background: "var(--accent-glow)", borderLeft: "3px solid var(--accent-secondary)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                                    {preset.intro}
                                </p>
                            )}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="name" style={LABEL}>Name</label>
                                <input type="text" id="name" name="name" required autoComplete="name" style={FIELD} placeholder="Your name" />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="email" style={LABEL}>Email</label>
                                <input type="email" id="email" name="email" required autoComplete="email" style={FIELD} placeholder="Your email address" />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="website" style={LABEL}>Website <span style={OPTIONAL}>(optional)</span></label>
                                <input type="text" id="website" name="website" autoComplete="url" inputMode="url" style={FIELD} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="need" style={LABEL}>What do you need help with? <span style={OPTIONAL}>(optional)</span></label>
                                <select key={topicKey ?? "default"} defaultValue={preset ? preset.need : ""} id="need" name="need" style={FIELD}>
                                    <option value="">Choose one</option>
                                    {NEEDS.map((n) => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="message" style={LABEL}>Message</label>
                                <textarea
                                    key={topicKey ?? "default"}
                                    defaultValue={preset ? preset.message : ""}
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    style={{ ...FIELD, resize: "vertical" }}
                                    placeholder="What would you like to fix or grow?"
                                />
                            </div>

                            {errorMessage && (
                                <p style={{ color: "#c0392b", fontSize: "0.9rem", margin: 0 }}>{errorMessage}</p>
                            )}

                            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: '1rem' }} disabled={status === "submitting"}>
                                {status === "submitting" ? "Sending..." : preset ? preset.submitLabel : "Send message"} <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>

                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textAlign: "center", margin: 0 }}>
                                No commitment, no pressure.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
