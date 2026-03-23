import { motion } from "framer-motion";
import { Mail, Linkedin, Send, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mmarques.madeira@gmail.com", {
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
                const topic = formData.get("topic") as string;
                const message = formData.get("message") as string;

                const subject = encodeURIComponent(`Enquiry: ${topic} — from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
                window.location.href = `mailto:mmarques.madeira@gmail.com?subject=${subject}&body=${body}`;
                setStatus("success");
            }
        } catch {
            // Offline / network error — fallback to mailto
            const formDataObj = Object.fromEntries(formData.entries());
            const subject = encodeURIComponent(`Enquiry: ${formDataObj.topic} — from ${formDataObj.name}`);
            const body = encodeURIComponent(`Name: ${formDataObj.name}\nEmail: ${formDataObj.email}\nTopic: ${formDataObj.topic}\n\n${formDataObj.message}`);
            window.location.href = `mailto:mmarques.madeira@gmail.com?subject=${subject}&body=${body}`;
            setStatus("success");
        }
    };

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>Contact | Maria Madeira — Let's Work Together</title>
                <meta name="description" content="Get in touch with Maria Madeira to discuss growth strategy, email marketing, paid advertising, or AI marketing projects for your e-commerce brand." />
            </Helmet>

            <h1 className="section-title">Let's <span className="text-gradient">Work Together</span></h1>

            <div className="grid-2 contact-grid" style={{ maxWidth: "1100px", margin: "0 auto", gap: "4rem" }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Ready to scale?</h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        Whether you need a full-funnel strategy or specialized support with email and paid advertising, let's discuss how we can partner to achieve your growth objectives.
                    </p>

                    {/* Response time note */}
                    <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "0.75rem", 
                        padding: "1rem 1.25rem", 
                        background: "var(--accent-glow)", 
                        borderRadius: "12px", 
                        marginBottom: "2.5rem",
                        border: "1px solid var(--border-color)"
                    }}>
                        <Clock size={18} className="text-gradient-accent" />
                        <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                            I typically respond within <strong style={{ color: "var(--text-primary)" }}>24 hours</strong>
                        </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px" }}>
                                <Mail className="text-gradient-accent" size={24} />
                            </div>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</strong>
                                <a href="mailto:mmarques.madeira@gmail.com" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.1rem" }}>mmarques.madeira@gmail.com</a>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "14px" }}>
                                <Linkedin className="text-gradient-accent" size={24} />
                            </div>
                            <div>
                                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: 'uppercase', letterSpacing: '0.1em' }}>LinkedIn</strong>
                                <a href="https://www.linkedin.com/in/maria-madeira-43501b3a/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.1rem" }}>Connect on LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="card glass-panel"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ padding: '3rem' }}
                >
                    {status === "success" ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <CheckCircle size={64} color="var(--accent-secondary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Message Sent!</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                            <button onClick={() => setStatus("idle")} className="btn btn-secondary" style={{ marginTop: '2rem' }}>Send another</button>
                        </div>
                    ) : (
                        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleSubmit}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="name" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: 'uppercase' }}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    style={{ padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem" }}
                                    placeholder="Your name"
                                />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="email" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: 'uppercase' }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    style={{ padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", fontSize: "1rem" }}
                                    placeholder="Your email address"
                                />
                            </div>

                            {/* Topic dropdown */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="topic" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: 'uppercase' }}>Inquiry Type</label>
                                <select
                                    id="topic"
                                    name="topic"
                                    required
                                    style={{ 
                                        padding: "14px", 
                                        background: "var(--bg-primary)", 
                                        border: "1px solid var(--border-color)", 
                                        borderRadius: "10px", 
                                        color: "var(--text-primary)", 
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        appearance: "none",
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B5B52' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 14px center"
                                    }}
                                >
                                    <option value="">Select a topic...</option>
                                    <option value="Growth Strategy">Growth Strategy</option>
                                    <option value="Email Marketing">Email Marketing & Automation</option>
                                    <option value="Paid Advertising">Paid Advertising</option>
                                    <option value="AI & Automation">AI & Automation Systems</option>
                                    <option value="Creative Direction">Creative Direction</option>
                                    <option value="Platform Migration">E-commerce Platform Migration</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="message" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: 'uppercase' }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    style={{ padding: "14px", background: "var(--bg-primary)", border: "1px solid var(--border-color)", borderRadius: "10px", color: "var(--text-primary)", resize: "vertical", fontSize: "1rem" }}
                                    placeholder="How can I help you scale?"
                                />
                            </div>

                            {errorMessage && (
                                <p style={{ color: "#c0392b", fontSize: "0.9rem", margin: 0 }}>{errorMessage}</p>
                            )}

                            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: '1rem' }} disabled={status === "submitting"}>
                                {status === "submitting" ? "Sending..." : "Send Message"} <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
