import { Link } from "react-router-dom";
import { Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletterEmail) {
            // Open mailto as a simple subscription method
            window.location.href = `mailto:mmarques.madeira@gmail.com?subject=${encodeURIComponent("Newsletter Subscription")}&body=${encodeURIComponent(`Please add me to your newsletter: ${newsletterEmail}`)}`;
            setNewsletterStatus("success");
            setNewsletterEmail("");
            setTimeout(() => setNewsletterStatus("idle"), 3000);
        }
    };

    return (
        <footer style={{ 
            background: "var(--text-primary)", 
            color: "white", 
            padding: "5rem 0 3rem",
            marginTop: "4rem"
        }}>
            <div className="container">
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
                    gap: "3rem",
                    marginBottom: "4rem"
                }}>
                    {/* Brand Section */}
                    <div>
                        <Link to="/" style={{ 
                            fontFamily: "var(--font-display)", 
                            fontSize: "1.5rem", 
                            fontWeight: 700, 
                            color: "white",
                            display: "block",
                            marginBottom: "1.5rem"
                        }}>
                            Maria Madeira
                        </Link>
                        <p style={{ 
                            color: "rgba(255,255,255,0.7)", 
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            maxWidth: "300px"
                        }}>
                            Growth Strategist for modern e-commerce brands looking to scale through data-driven decisions and AI-powered marketing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Navigation</h4>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            <li><Link to="/services" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>Services</Link></li>
                            <li><Link to="/case-studies" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>Case Studies</Link></li>
                            <li><Link to="/portfolio" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>Portfolio</Link></li>
                            <li><Link to="/results" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>Results</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Company</h4>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            <li><Link to="/about" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>About</Link></li>
                            <li><Link to="/contact" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter + Social */}
                    <div>
                        <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Stay Updated</h4>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                            Get growth tips & insights delivered to your inbox.
                        </p>

                        {newsletterStatus === "success" ? (
                            <p style={{ color: "var(--accent-secondary)", fontSize: "0.9rem", fontWeight: 600 }}>
                                ✓ Thank you for subscribing!
                            </p>
                        ) : (
                            <form className="newsletter-form" onSubmit={handleNewsletter}>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    required
                                    aria-label="Email for newsletter"
                                />
                                <button type="submit" aria-label="Subscribe to newsletter">
                                    <Send size={16} />
                                </button>
                            </form>
                        )}

                        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                            <a href="https://www.linkedin.com/in/maria-madeira-43501b3a/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", transition: "color 0.3s ease" }} aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="mailto:mmarques.madeira@gmail.com" style={{ color: "rgba(255,255,255,0.7)", transition: "color 0.3s ease" }} aria-label="Email"><Mail size={20} /></a>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "1rem" }}>
                            Based in Lisbon, Portugal.<br />Working Globally.
                        </p>
                    </div>
                </div>

                <div style={{ 
                    borderTop: "1px solid rgba(255,255,255,0.1)", 
                    paddingTop: "2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem"
                }}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                        © {currentYear} Maria Madeira. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
