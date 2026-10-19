import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { FocusEvent, KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { PAID_ADS_SERVICE } from "../lib/links";

/**
 * Services submenu. The desktop list is always in the markup, hidden with
 * visibility rather than unmounted, so the links are in the prerendered HTML
 * and crawlable; visibility also keeps them out of the tab order while closed.
 */
const SERVICE_MENU = [
    { name: "Email Marketing & Klaviyo", path: "/services/email-marketing" },
    { name: "Paid Ads", path: PAID_ADS_SERVICE },
    { name: "AEO & SEO", path: "/services/aeo" },
    { name: "Websites", path: "/services/websites" },
];

const MOBILE_LINK_STYLE = {
    display: 'block',
    padding: '1rem 0',
    fontSize: '1.3rem',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
    textDecoration: 'none',
    letterSpacing: '-0.01em',
} as const;

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const servicesToggle = useRef<HTMLButtonElement>(null);
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

    // Close menus on route change, adjusting state during render rather than
    // in an effect so the closed menu paints with the new page.
    const [menuPath, setMenuPath] = useState(location.pathname);
    if (menuPath !== location.pathname) {
        setMenuPath(location.pathname);
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
    }

    const links = [
        { name: "Services", path: "/services" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
    ];

    const isServices = location.pathname === "/services" || location.pathname.startsWith("/services/");

    // Esc closes the submenu and hands focus back to its toggle.
    const onServicesKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && servicesOpen) {
            setServicesOpen(false);
            servicesToggle.current?.focus();
        }
    };

    // Tabbing out of the submenu closes it.
    const onServicesBlur = (e: FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false);
    };

    return (
        <>
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
                        <img src="/logo-80.png" alt="" width="80" height="80" style={{ height: '40px', width: '40px', objectFit: 'contain', mixBlendMode: 'multiply', flexShrink: 0 }} />
                        <span className="nav-logo-text" style={{ fontSize: '1.2rem', letterSpacing: '0.1em' }}>MARIA MADEIRA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="nav-links" style={{ alignItems: 'center', gap: '2rem' }}>
                        {links.map((link) => link.path === "/services" ? (
                            <div
                                key={link.path}
                                className="nav-dropdown"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                                onKeyDown={onServicesKeyDown}
                                onBlur={onServicesBlur}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link ${isServices ? "active" : ""}`}
                                    style={{ fontSize: '0.9rem', fontWeight: 500 }}
                                    aria-current={location.pathname === link.path ? "page" : undefined}
                                >
                                    {link.name}
                                </Link>
                                <button
                                    ref={servicesToggle}
                                    type="button"
                                    className="nav-dropdown-toggle"
                                    aria-expanded={servicesOpen}
                                    aria-controls="services-menu"
                                    aria-label="Services menu"
                                    // A pointer click lands after hover has already opened the
                                    // menu, so it only opens; Enter and Space (detail 0) toggle.
                                    onClick={(e) => setServicesOpen((open) => (e.detail > 0 ? true : !open))}
                                >
                                    <ChevronDown size={14} aria-hidden="true" />
                                </button>
                                <div id="services-menu" className={`nav-dropdown-menu ${servicesOpen ? "open" : ""}`}>
                                    <ul>
                                        {[...SERVICE_MENU, { name: "All services", path: "/services" }].map((item) => (
                                            <li key={item.path} className={item.path === "/services" ? "nav-dropdown-all" : undefined}>
                                                <Link
                                                    to={item.path}
                                                    className={`nav-dropdown-link ${location.pathname === item.path ? "active" : ""}`}
                                                    aria-current={location.pathname === item.path ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                                style={{ fontSize: '0.9rem', fontWeight: 500 }}
                                aria-current={location.pathname === link.path ? "page" : undefined}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', marginLeft: '1rem', whiteSpace: 'nowrap' }}>
                            Book a Free Strategy Call
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

        {/* Mobile Menu Overlay: rendered outside <nav> via portal to avoid clipping */}
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
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        style={{
                            ...MOBILE_LINK_STYLE,
                            color: location.pathname === '/' ? 'var(--accent-secondary)' : 'var(--text-primary)',
                            borderBottom: '1px solid var(--border-color)',
                        }}
                        aria-current={location.pathname === '/' ? 'page' : undefined}
                    >
                        Home
                    </Link>
                    {links.map((link) => link.path === "/services" ? (
                        <div key={link.path} style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{ ...MOBILE_LINK_STYLE, flex: 1, color: isServices ? 'var(--accent-secondary)' : 'var(--text-primary)' }}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                >
                                    {link.name}
                                </Link>
                                <button
                                    type="button"
                                    className="mobile-accordion-toggle"
                                    aria-expanded={mobileServicesOpen}
                                    aria-controls="mobile-services-menu"
                                    aria-label="Services menu"
                                    onClick={() => setMobileServicesOpen((open) => !open)}
                                >
                                    <ChevronDown size={22} aria-hidden="true" />
                                </button>
                            </div>
                            <ul id="mobile-services-menu" hidden={!mobileServicesOpen} className="mobile-submenu">
                                {[...SERVICE_MENU, { name: "All services", path: "/services" }].map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            style={{ color: location.pathname === item.path ? 'var(--accent-secondary)' : 'var(--text-primary)' }}
                                            aria-current={location.pathname === item.path ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                ...MOBILE_LINK_STYLE,
                                color: location.pathname === link.path ? 'var(--accent-secondary)' : 'var(--text-primary)',
                                borderBottom: '1px solid var(--border-color)',
                            }}
                            aria-current={location.pathname === link.path ? 'page' : undefined}
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
                        Book a Free Strategy Call
                    </Link>
                </div>
            </div>,
            document.body
        )}
        </>
    );
}
