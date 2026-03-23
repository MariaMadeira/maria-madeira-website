import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const links = [
        { name: "Services", path: "/services" },
        { name: "Results", path: "/results" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
    ];

    return (
        <>
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                        <img src="/favicon.png" alt="" style={{ height: '40px', width: '40px', objectFit: 'contain', mixBlendMode: 'multiply', flexShrink: 0 }} />
                        <span className="nav-logo-text" style={{ fontSize: '1.2rem', letterSpacing: '0.1em' }}>MARIA MADEIRA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="nav-links" style={{ alignItems: 'center', gap: '2rem' }}>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                                style={{ fontSize: '0.9rem', fontWeight: 500 }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', marginLeft: '1rem' }}>
                            Get in Touch
                        </Link>
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

        </nav>

        {/* Mobile Menu Overlay — rendered outside <nav> via portal to avoid clipping */}
        {isOpen && createPortal(
            <div style={{
                position: 'fixed',
                top: 'var(--nav-height)',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
                zIndex: 200,
                borderTop: '1px solid var(--border-color)',
                overflowY: 'auto'
            }}>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                display: 'block',
                                padding: '1rem 0',
                                fontSize: '1.3rem',
                                fontWeight: 600,
                                fontFamily: 'var(--font-heading)',
                                color: location.pathname === link.path ? 'var(--accent-secondary)' : 'var(--text-primary)',
                                borderBottom: '1px solid var(--border-color)',
                                textDecoration: 'none',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div style={{ marginTop: '2rem' }}>
                    <Link
                        to="/contact"
                        className="btn btn-primary"
                        style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem', fontSize: '1rem' }}
                        onClick={() => setIsOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>,
            document.body
        )}
        </>
    );
}