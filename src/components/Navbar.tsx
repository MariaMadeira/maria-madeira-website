import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent, PointerEvent } from "react";
import { createPortal } from "react-dom";
import { PAID_ADS_SERVICE } from "../lib/links";
import { langOf, switchTarget, ptLink, type Lang } from "../lib/i18n";

/**
 * Services submenu. "Services" is a button, not a link: hover opens the menu
 * for a mouse, a tap toggles it on touch, and Enter, Space or Arrow Down open
 * it from the keyboard and move focus to its first item ("All services").
 * Escape closes it and returns focus to the button. The desktop list is
 * always in the markup, hidden with visibility rather than unmounted, so the
 * links are in the prerendered HTML and crawlable; visibility also keeps them
 * out of the tab order while closed.
 */
/* Navbar copy per language, with English paths throughout. On /pt pages each
   path goes through ptLink, so it reaches the Portuguese page once that page
   is live and the English one until then, with no marker. */
const COPY: Record<Lang, {
    home: string; homePath: string; links: { name: string; path: string }[];
    services: { name: string; path: string }[]; allServices: string;
    cta: string; ctaPath: string; toggle: string;
}> = {
    en: {
        home: "Home",
        homePath: "/",
        links: [
            { name: "Services", path: "/services" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Blog", path: "/blog" },
            { name: "Pricing", path: "/pricing" },
            { name: "About", path: "/about" },
        ],
        services: [
            { name: "AI search and SEO", path: "/services/aeo" },
            { name: "Email and Klaviyo", path: "/services/email-marketing" },
            { name: "Paid ads", path: PAID_ADS_SERVICE },
            { name: "Websites", path: "/services/websites" },
        ],
        allServices: "All services",
        cta: "Book a free call",
        ctaPath: "/contact",
        toggle: "Toggle navigation menu",
    },
    pt: {
        home: "Início",
        homePath: "/pt",
        links: [
            { name: "Serviços", path: "/services" },
            { name: "Casos de estudo", path: "/case-studies" },
            { name: "Portefólio", path: "/portfolio" },
            { name: "Blog", path: "/blog" },
            { name: "Preços", path: "/pricing" },
            { name: "Sobre", path: "/about" },
        ],
        services: [
            { name: "Email marketing e Klaviyo", path: "/services/email-marketing" },
            { name: "Anúncios pagos", path: PAID_ADS_SERVICE },
            { name: "AEO e SEO", path: "/services/aeo" },
            { name: "Sites", path: "/services/websites" },
        ],
        allServices: "Todos os serviços",
        cta: "Marcar uma conversa gratuita",
        ctaPath: "/pt/contacto",
        toggle: "Abrir ou fechar o menu",
    },
};

/** EN | PT in text. The current language is plain text; the other links to
    the same page in that language, or to its homepage when there is no twin. */
function LangSwitch({ lang, path, onNavigate }: { lang: Lang; path: string; onNavigate?: () => void }) {
    const target = switchTarget(path);
    const item = (code: Lang, label: string, name: string) =>
        code === lang ? (
            <span aria-current="true" style={{ fontWeight: 700, color: "var(--text-primary)" }}>{label}</span>
        ) : (
            <Link to={target} hrefLang={code === "pt" ? "pt-PT" : "en-GB"} lang={code === "pt" ? "pt-PT" : "en-GB"} aria-label={`${label}, ${name}`} onClick={onNavigate} className="lang-switch-link">{label}</Link>
        );
    return (
        <span className="lang-switch">
            {item("en", "EN", "English version")}
            <span aria-hidden="true" style={{ color: "var(--border-color)" }}>|</span>
            {item("pt", "PT", "Versão em português")}
        </span>
    );
}

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
    const servicesBox = useRef<HTMLDivElement>(null);
    const servicesMenu = useRef<HTMLUListElement>(null);
    const mobileServicesToggle = useRef<HTMLButtonElement>(null);
    const mobileServicesMenu = useRef<HTMLUListElement>(null);
    // The pointer type of the press that leads to the next click, and whether
    // the menu that opens next should take focus (keyboard opening only).
    const pressType = useRef<string | null>(null);
    const focusDesktopMenu = useRef(false);
    const focusMobileMenu = useRef(false);
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

    // A keyboard-opened menu hands focus to its first item once it is visible.
    useEffect(() => {
        if (servicesOpen && focusDesktopMenu.current) {
            focusDesktopMenu.current = false;
            servicesMenu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
        }
    }, [servicesOpen]);
    useEffect(() => {
        if (mobileServicesOpen && focusMobileMenu.current) {
            focusMobileMenu.current = false;
            mobileServicesMenu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
        }
    }, [mobileServicesOpen]);

    // A tap or click outside the open desktop menu closes it (touch has no
    // pointer leave to do that).
    useEffect(() => {
        if (!servicesOpen) return;
        const onDown = (e: Event) => {
            if (!servicesBox.current?.contains(e.target as Node)) setServicesOpen(false);
        };
        document.addEventListener("pointerdown", onDown);
        return () => document.removeEventListener("pointerdown", onDown);
    }, [servicesOpen]);

    // Close menus on route change, adjusting state during render rather than
    // in an effect so the closed menu paints with the new page.
    const [menuPath, setMenuPath] = useState(location.pathname);
    if (menuPath !== location.pathname) {
        setMenuPath(location.pathname);
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
    }

    const lang = langOf(location.pathname);
    const t = COPY[lang];
    const localize = (path: string) => (lang === "pt" ? ptLink(path).to : path);
    const links = t.links.map((l) => ({ ...l, path: localize(l.path) }));
    const allServicesPath = localize("/services");
    // "All services" leads the submenu, then each service.
    const SERVICE_MENU = [
        { name: t.allServices, path: allServicesPath },
        ...t.services.map((l) => ({ ...l, path: localize(l.path) })),
    ];

    const isServices = location.pathname === "/services" || location.pathname.startsWith("/services/") || location.pathname === "/pt/servicos" || location.pathname.startsWith("/pt/servicos/");

    // Hover opens and closes the desktop menu for a mouse only; a touch tap
    // also fires pointer enter, and must not open the menu it then toggles.
    const onServicesEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") setServicesOpen(true); };
    const onServicesLeave = (e: PointerEvent) => { if (e.pointerType === "mouse") setServicesOpen(false); };

    // Mouse: hover has already opened the menu, so a click keeps it open.
    // Touch or pen: a tap toggles it. Keyboard (detail 0): Enter or Space
    // toggles it, and opening moves focus to the first item.
    const onServicesClick = (e: MouseEvent) => {
        const type = pressType.current;
        pressType.current = null;
        if (e.detail === 0) {
            if (!servicesOpen) focusDesktopMenu.current = true;
            setServicesOpen(!servicesOpen);
        } else if (type === "mouse") {
            setServicesOpen(true);
        } else {
            setServicesOpen((open) => !open);
        }
    };

    // Arrow keys move through the items; Escape closes and returns focus.
    const menuKeys = (
        e: KeyboardEvent,
        open: boolean,
        setOpen: (v: boolean) => void,
        toggle: HTMLButtonElement | null,
        menu: HTMLUListElement | null,
        focusFlag: { current: boolean },
    ) => {
        if (e.key === "Escape" && open) {
            e.preventDefault();
            setOpen(false);
            toggle?.focus();
            return;
        }
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
        if (!open) {
            if (e.target === toggle && e.key === "ArrowDown") {
                e.preventDefault();
                focusFlag.current = true;
                setOpen(true);
            }
            return;
        }
        const items = Array.from(menu?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
        if (!items.length) return;
        e.preventDefault();
        const i = items.indexOf(document.activeElement as HTMLAnchorElement);
        const next = e.key === "ArrowDown"
            ? (i + 1) % items.length
            : i <= 0 ? items.length - 1 : i - 1;
        items[next].focus();
    };

    const onServicesKeyDown = (e: KeyboardEvent) =>
        menuKeys(e, servicesOpen, setServicesOpen, servicesToggle.current, servicesMenu.current, focusDesktopMenu);
    const onMobileServicesKeyDown = (e: KeyboardEvent) =>
        menuKeys(e, mobileServicesOpen, setMobileServicesOpen, mobileServicesToggle.current, mobileServicesMenu.current, focusMobileMenu);

    // Tabbing out of the submenu closes it.
    const onServicesBlur = (e: FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false);
    };

    return (
        <>
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to={t.homePath} className="nav-logo" onClick={() => setIsOpen(false)}>
                        <img src="/logo-80.png" alt="" width="80" height="80" style={{ height: '40px', width: '40px', objectFit: 'contain', mixBlendMode: 'multiply', flexShrink: 0 }} />
                        <span className="nav-logo-text" style={{ fontSize: '1.2rem', letterSpacing: '0.1em' }}>MARIA MADEIRA</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="nav-links" style={{ alignItems: 'center', gap: '1.5rem' }}>
                        {links.map((link) => link.path === allServicesPath ? (
                            <div
                                key={link.path}
                                ref={servicesBox}
                                className="nav-dropdown"
                                onPointerEnter={onServicesEnter}
                                onPointerLeave={onServicesLeave}
                                onKeyDown={onServicesKeyDown}
                                onBlur={onServicesBlur}
                            >
                                <button
                                    ref={servicesToggle}
                                    type="button"
                                    className="nav-dropdown-trigger"
                                    aria-expanded={servicesOpen}
                                    aria-controls="services-menu"
                                    onPointerDown={(e) => { pressType.current = e.pointerType; }}
                                    onClick={onServicesClick}
                                >
                                    <span className={`nav-link ${isServices ? "active" : ""}`} style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                        {link.name}
                                    </span>
                                    <ChevronDown size={14} aria-hidden="true" />
                                </button>
                                <div id="services-menu" className={`nav-dropdown-menu ${servicesOpen ? "open" : ""}`}>
                                    <ul ref={servicesMenu}>
                                        {SERVICE_MENU.map((item) => (
                                            <li key={item.path} className={item.path === allServicesPath ? "nav-dropdown-all" : undefined}>
                                                <Link
                                                    to={item.path}
                                                    className={`nav-dropdown-link ${location.pathname === item.path ? "active" : ""}`}
                                                    aria-current={location.pathname === item.path ? "page" : undefined}
                                                    onClick={() => setServicesOpen(false)}
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
                        <LangSwitch lang={lang} path={location.pathname} />
                        <Link to={t.ctaPath} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                            {t.cta}
                        </Link>
                    </div>

                    {/* Mobile: language switch beside the menu toggle */}
                    <div className="nav-mobile-tools">
                        <LangSwitch lang={lang} path={location.pathname} onNavigate={() => setIsOpen(false)} />
                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={t.toggle}
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
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
                        to={t.homePath}
                        onClick={() => setIsOpen(false)}
                        style={{
                            ...MOBILE_LINK_STYLE,
                            color: location.pathname === t.homePath ? 'var(--accent-secondary)' : 'var(--text-primary)',
                            borderBottom: '1px solid var(--border-color)',
                        }}
                        aria-current={location.pathname === t.homePath ? 'page' : undefined}
                    >
                        {t.home}
                    </Link>
                    {links.map((link) => link.path === allServicesPath ? (
                        <div key={link.path} style={{ borderBottom: '1px solid var(--border-color)' }} onKeyDown={onMobileServicesKeyDown}>
                            <button
                                ref={mobileServicesToggle}
                                type="button"
                                className="mobile-accordion-toggle"
                                aria-expanded={mobileServicesOpen}
                                aria-controls="mobile-services-menu"
                                onClick={(e) => {
                                    if (e.detail === 0 && !mobileServicesOpen) focusMobileMenu.current = true;
                                    setMobileServicesOpen((open) => !open);
                                }}
                                style={{ ...MOBILE_LINK_STYLE, display: 'flex', color: isServices ? 'var(--accent-secondary)' : 'var(--text-primary)' }}
                            >
                                <span>{link.name}</span>
                                <ChevronDown size={22} aria-hidden="true" />
                            </button>
                            <ul id="mobile-services-menu" ref={mobileServicesMenu} hidden={!mobileServicesOpen} className="mobile-submenu">
                                {SERVICE_MENU.map((item) => (
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
                        to={t.ctaPath}
                        className="btn btn-primary"
                        style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem', fontSize: '1rem' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {t.cta}
                    </Link>
                </div>
            </div>,
            document.body
        )}
        </>
    );
}
