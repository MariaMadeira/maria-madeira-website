import { Link } from "react-router-dom";

// Shared author bio for blog articles. Centralised so every post inherits the
// same wording; update it here and all articles follow.
export default function AuthorBio() {
    return (
        <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
            Maria Madeira is a growth strategist for brands that sell online: website strategy and build, SEO and AEO, email marketing, and paid acquisition.{" "}
            <Link to="/contact" style={{ color: "var(--accent-secondary)", fontWeight: 600, fontStyle: "normal" }}>Book a free strategy call</Link>.
        </div>
    );
}
