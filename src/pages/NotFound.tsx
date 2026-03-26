import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: "calc(100vh - var(--nav-height))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "4rem 2rem",
            }}
        >
            <Helmet>
                <title>Page Not Found | Maria Madeira</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div>
                <p
                    style={{
                        fontSize: "7rem",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "var(--accent-primary)",
                        fontFamily: "var(--font-heading)",
                        marginBottom: "1rem",
                    }}
                >
                    404
                </p>
                <h1
                    style={{
                        fontSize: "2rem",
                        marginBottom: "1rem",
                        color: "var(--text-primary)",
                    }}
                >
                    Page not found
                </h1>
                <p
                    style={{
                        color: "var(--text-secondary)",
                        maxWidth: "420px",
                        margin: "0 auto 2.5rem",
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                    }}
                >
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link to="/" className="btn btn-primary">
                        <Home size={18} style={{ marginRight: "8px" }} />
                        Go Home
                    </Link>
                    <button
                        className="btn btn-secondary"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={18} style={{ marginRight: "8px" }} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
