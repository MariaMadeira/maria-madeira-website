import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Results", path: "/results" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                        <img src="/favicon.png" alt="" style={{ height: '44px', width: '44px', objectFit: 'contain', mixBlendMode: 'multiply', flexShrink: 0 }} />
                        <span className="nav-logo-text">MARIA MADEIRA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="nav-links">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 'var(--nav-height)',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'var(--bg-primary)',
                display: isOpen ? 'flex' : 'none',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                gap: '2rem',
                zIndex: 99,
                borderTop: '1px solid var(--border-color)'
            }}>
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                        style={{ fontSize: '1.5rem' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}