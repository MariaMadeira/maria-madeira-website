import { useRef, useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { ArrowRight, BarChart, Maximize, TrendingUp, Cpu, Mail, ArrowRightLeft, Sparkles, ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PAID_ADS_SERVICE } from "../lib/links";
import { BODYSURF_TESTIMONIAL } from "../data/testimonials";
import type { Testimonial } from "../data/testimonials";
import { useInView } from "../hooks/useInView";
import { useLang } from "../hooks/useLang";
import { PROGRAM_MEMBERSHIP } from "../lib/credentials";
import { formatNumber } from "../lib/format";
import COPY from "../i18n/home";

/* Renders / and /pt from src/i18n/home.ts. Icons, images, counter values and
   links live here; every word lives in the copy file. The Portuguese page
   adds four sections of its own after the shared ones (ptExtras). */

// Email figures are verified Klaviyo data for the 12 months to July 2025
// (Jul 2024 to Jul 2025); Google Ads figures are the full account export for 1 Oct 2025 to
// 26 Aug 2026. The four headline numbers (£134K, 2.2x AI impressions, 50.4%,
// 532% Google Ads ROAS) live in the Measurable Impact grid; these supporting
// metrics appear nowhere else on the page. 2.2x is the first week against the
// last of the Generative AI features report, 18 May to 24 Aug 2026: the same
// figure, array and window published on /case-study-seo. The client's total
// store revenue stays underivable, so the email share appears only as "over a
// third", never as a percentage: an exact share next to £134K reconstructs it.
// Labels and details are in the copy file, in this order.
const SUPPORTING_METRICS = [
    { to: 48.3, prefix: "£", suffix: "K", decimals: 1 },
    { to: 7.27, prefix: "", suffix: "%", decimals: 2 },
    { to: 86.1, prefix: "£", suffix: "K", decimals: 1 },
    { to: 12.27, prefix: "£", suffix: "", decimals: 2 },
];

const HOME_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://mariamadeira.com/#person",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "image": "https://mariamadeira.com/maria-hero-800.jpg",
            "jobTitle": "Growth Strategist",
            "description": "Growth strategist for brands that sell online: websites, Answer Engine Optimisation (AEO), SEO, Klaviyo email, and paid acquisition. Five years with UK food and drink brands.",
            "sameAs": ["https://www.linkedin.com/in/maria-madeira-growth", "https://influee.co/partnership/maria-madeira"],
            // Identical to the About node: same @id, so two different values
            // would contradict each other on one merged entity.
            "memberOf": PROGRAM_MEMBERSHIP,
            "knowsAbout": ["Answer Engine Optimisation (AEO)", "SEO", "Email Marketing", "Klaviyo", "Google Ads", "Meta Ads", "AI Marketing", "Growth Strategy", "Paid Acquisition", "Lifecycle Marketing"]
        },
        // Split out of a single ProfessionalService node: that type descends from
        // LocalBusiness, not Service, so it accepts neither provider nor
        // serviceType (schema.org deprecated it precisely for that confusion).
        // The practice is now an Organization and what it sells is a Service.
        {
            "@type": "Organization",
            "@id": "https://mariamadeira.com/#organization",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mariamadeira.com/apple-touch-icon.png",
                "width": 180,
                "height": 180
            },
            "description": "Answer Engine Optimisation (AEO), SEO, Klaviyo email and paid acquisition for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
            "sameAs": ["https://www.linkedin.com/in/maria-madeira-growth"],
            "founder": { "@id": "https://mariamadeira.com/#person" },
            "areaServed": "Worldwide",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@mariamadeira.com",
                "contactType": "customer service"
            }
        },
        // No SearchAction: the site has no search, and claiming one that does
        // not exist is the most common way this node gets ignored.
        {
            "@type": "WebSite",
            "@id": "https://mariamadeira.com/#website",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "publisher": { "@id": "https://mariamadeira.com/#organization" }
        },
        {
            "@type": "Service",
            "@id": "https://mariamadeira.com/#service",
            "name": "Maria Madeira: Growth Strategy",
            "description": "Answer Engine Optimisation (AEO), SEO, Klaviyo email and paid acquisition for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
            "provider": { "@id": "https://mariamadeira.com/#organization" },
            "areaServed": "Worldwide",
            "serviceType": ["Growth Strategy", "Email Marketing", "Paid Advertising", "AI Marketing Systems", "Creative Direction"]
        }
    ]
};

/* The Portuguese page (D16 A): its own WebPage, FAQPage and Service, with no
   Offer. Person, Organization and WebSite are referenced by @id, never
   repeated. */
const PT_URL = "https://mariamadeira.com/pt";
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PT_URL}#webpage`,
            "url": PT_URL,
            "name": "Consultoria de AEO para marcas de e-commerce",
            "description": COPY.pt.description,
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": "https://mariamadeira.com/#website" },
            "about": { "@id": "https://mariamadeira.com/#person" },
            "publisher": { "@id": "https://mariamadeira.com/#organization" },
        },
        {
            "@type": "FAQPage",
            "@id": `${PT_URL}#faq`,
            "inLanguage": "pt-PT",
            "mainEntity": (COPY.pt.ptExtras?.faqs ?? []).map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "Service",
            "@id": `${PT_URL}#service`,
            "name": "Maria Madeira: Estratégia de crescimento",
            "description": "Otimização para motores de resposta (AEO), SEO, email no Klaviyo e aquisição paga para marcas de alimentação e bebidas que vendem online. Trabalho de agência, feito por uma consultora independente.",
            "provider": { "@id": "https://mariamadeira.com/#organization" },
            "areaServed": "Worldwide",
            "serviceType": ["Estratégia de crescimento", "Email marketing", "Anúncios pagos", "Sistemas de marketing com IA", "Direção criativa"],
        },
    ],
};

/* ── AnimatedCounter component ─────────────────────────── */
interface CounterProps {
    from?: number;
    to: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

function AnimatedCounter({ from = 0, to, decimals = 0, prefix = "", suffix = "", duration = 2.5 }: CounterProps) {
    const { ref, inView } = useInView({ rootMargin: '-50px', once: true });
    // Portuguese pages count with a decimal comma (2,2x); English keeps toFixed.
    const { lang } = useLang();
    const fmt = useCallback((n: number) => (lang === "pt" ? formatNumber(n, "pt", decimals) : n.toFixed(decimals)), [lang, decimals]);
    const [display, setDisplay] = useState(`${prefix}${fmt(to)}${suffix}`);
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;
        const startTime = performance.now();
        const totalMs = duration * 1000;
        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / totalMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = from + (to - from) * eased;
            setDisplay(`${prefix}${fmt(current)}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, from, to, fmt, prefix, suffix, duration]);

    return <span ref={ref as React.RefObject<HTMLSpanElement>}>{display}</span>;
}
/* ── Testimonials data & carousel ────────────────────────── */
// Ordered by weight of proof: the client engagement leads, then colleagues.
// Quotes are verbatim LinkedIn recommendations, so their punctuation is theirs.
/** LinkedIn has no per-recommendation URL, so both links land on the list. */
const RECOMMENDATIONS_URL = "https://www.linkedin.com/in/maria-madeira-growth/details/recommendations/";

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Wilfred Emmanuel-Jones",
        badge: "Client",
        role: "Founder, The Black Farmer",
        context: "Recommended on LinkedIn",
        monogram: "WE",
        // Excerpt of a much longer recommendation; the cut is marked with [...].
        // readMore sends readers to LinkedIn for the whole thing.
        quote: "I could give her something that was little more than an idea in my head and she would go away, work it out and come back with something real. [...] She built our email marketing, worked on our e-commerce, creative, advertising and SEO, helped us launch our app and later became one of the people pushing us to understand and use AI properly within the business.",
        readMore: RECOMMENDATIONS_URL,
    },
    BODYSURF_TESTIMONIAL,
    {
        name: "Adel Sidiqi",
        badge: null,
        role: "Digital Marketing Manager at Ocado Zoom",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "AS",
        quote: "Maria's expertise in design, digital marketing, and tools like Klaviyo consistently took our campaigns to the next level — both visually and in terms of results. She has a real knack for aligning creative ideas with marketing goals. Detail-oriented, innovative, and a great team player.",
        readMore: null,
    },
    {
        name: "Isbah Amin",
        badge: null,
        role: "Marketing Executive, B2C Growth, CRM & Lifecycle Marketing",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "IA",
        quote: "Working under Maria's guidance at The Black Farmer was an incredible experience. As my senior, she taught me the ins and outs of marketing, from brand strategy to high-impact email campaigns. Her ability to grab customer attention and her deep business knowledge are truly inspiring. Anyone would be lucky to have Maria leading their marketing efforts!",
        readMore: null,
    },
    {
        name: "Will Fuller",
        badge: null,
        role: "WordPress Developer",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "WF",
        quote: "Maria completely transformed our email marketing strategy. When she took over our Klaviyo account, she achieved 125% growth in email attributed revenue and boosted our automated flows by over 100%. Our open rates went from 28% to 48%, and click rates more than doubled. What impressed me most wasn't just the numbers — it was how she understood our customers.",
        readMore: null,
    },
    {
        name: "Hermela Michael",
        badge: null,
        role: null,
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "HM",
        quote: "Maria doesn't just think outside the box — she completely redefines it. Her creativity, strategic mindset, and deep understanding of marketing have played a huge role in shaping the success of the company. She approaches every project with passion and precision, always bringing fresh, data-driven ideas to the table that truly make an impact.",
        readMore: null,
    },
];

const DESKTOP_QUERY = "(min-width: 901px)";

/* Core Services icons and links, in the copy's order. */
const SERVICE_VISUALS: { icon: React.ReactNode; link?: string }[] = [
    { icon: <TrendingUp size={22} />, link: '/services' },
    { icon: <Sparkles size={22} />, link: '/services/aeo' },
    { icon: <Mail size={22} />, link: '/services/email-marketing' },
    { icon: <BarChart size={22} />, link: PAID_ADS_SERVICE },
    { icon: <Cpu size={22} /> },
    { icon: <Maximize size={22} /> },
    { icon: <ArrowRightLeft size={22} />, link: '/services/websites' },
];

/* Selected Work images and links, in the copy's order. */
const WORK_VISUALS = [
    { image: '/projects/rita-antunes/mockup-stationery.webp', link: '/portfolio-rita-antunes' },
    { image: '/projects/ai-product/DEPOIS Cotswold Fudge Butterscotch.webp', link: '/portfolio-ai-product-photography' },
    { image: '/projects/email-marketing/recipe.webp', link: '/portfolio-email-marketing' },
];

/* Portuguese only (D15 A): "Ver o caso" under a Measurable Impact card. */
function ImpactCaseLink({ to, label }: { to: string; label: string }) {
    return (
        <Link to={to} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", color: "var(--accent-secondary)", fontWeight: 600, fontSize: "0.9rem", marginTop: "1rem" }}>
            {label} <ArrowRight size={16} />
        </Link>
    );
}

/**
 * Testimonials carousel.
 *
 * Every quote is rendered into the markup, never swapped in on the client: the
 * track holds all of them and only slides, so the prerendered HTML carries all
 * five for crawlers. Two per page on desktop, one on mobile, which is why the
 * pages are regrouped from `perView` rather than baked into the data.
 *
 * `perView` comes from useSyncExternalStore rather than an effect, so the server
 * snapshot (1) renders cleanly and hydration corrects it without a setState pass.
 */
function TestimonialsCarousel() {
    const { lang, to } = useLang();
    const c = COPY[lang].testimonials;
    // Badge, role and context come from the copy; the quote stays verbatim.
    const list = TESTIMONIALS.map((tm, i) => ({ ...tm, badge: tm.badge ? c.badge : null, role: c.people[i].role, context: c.people[i].context }));
    const [page, setPage] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const { ref: sectionRef, inView } = useInView({ rootMargin: '-50px', once: true });

    const perView = useSyncExternalStore(
        (onChange) => {
            const mq = window.matchMedia(DESKTOP_QUERY);
            mq.addEventListener('change', onChange);
            return () => mq.removeEventListener('change', onChange);
        },
        () => (window.matchMedia(DESKTOP_QUERY).matches ? 2 : 1),
        () => 1,
    );

    const pageCount = Math.ceil(list.length / perView);
    // Clamped at render rather than in an effect, so a resize that shortens the
    // page list can never leave the track parked past the end.
    const activePage = Math.min(page, pageCount - 1);

    const pages: typeof list[] = [];
    for (let i = 0; i < list.length; i += perView) pages.push(list.slice(i, i + perView));

    const goTo = useCallback((next: number, total: number) => {
        setPage(((next % total) + total) % total);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 40) goTo(activePage + (delta < 0 ? 1 : -1), pageCount);
        touchStartX.current = null;
    };
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(activePage + 1, pageCount); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(activePage - 1, pageCount); }
    };

    return (
        <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`testimonial-carousel reveal${inView ? ' is-visible' : ''}`}
            role="region"
            aria-roledescription={c.roledescription}
            aria-label={c.carousel}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div
                className="testimonial-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="testimonial-track"
                    style={{ '--page': activePage, '--per-view': perView } as React.CSSProperties}
                >
                    {pages.map((group, groupIndex) => (
                        <div className="testimonial-page" key={groupIndex}>
                            {group.map((t) => (
                                <figure key={t.name} className="card testimonial-card">
                                    <div className="testimonial-body">
                                        {t.badge && <span className="testimonial-badge">{t.badge}</span>}
                                        <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                                        {c.note && <p className="testimonial-context" style={{ marginTop: "0.75rem" }}>{c.note}</p>}
                                    </div>
                                    {t.readMore && (
                                        t.readMore.startsWith("http") ? (
                                            <a
                                                href={t.readMore}
                                                target="_blank"
                                                rel="noopener"
                                                className="testimonial-readmore"
                                                tabIndex={groupIndex === activePage ? undefined : -1}
                                            >
                                                {c.readMore} <ArrowRight size={15} />
                                            </a>
                                        ) : (
                                            <Link
                                                to={to(t.readMore)}
                                                className="testimonial-readmore"
                                                tabIndex={groupIndex === activePage ? undefined : -1}
                                            >
                                                {c.readMore} <ArrowRight size={15} />
                                            </Link>
                                        )
                                    )}
                                    <figcaption className="testimonial-attribution">
                                        <span className="testimonial-monogram" aria-hidden="true">{t.monogram}</span>
                                        <span>
                                            <span className="testimonial-name">{t.name}</span>
                                            {t.role && <span className="testimonial-role">{t.role}</span>}
                                            <span className="testimonial-context">{t.context}</span>
                                        </span>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonial-controls">
                <button
                    type="button"
                    className="testimonial-arrow"
                    onClick={() => goTo(activePage - 1, pageCount)}
                    aria-label={c.prev}
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="testimonial-dots">
                    {pages.map((_, i) => (
                        <button
                            type="button"
                            key={i}
                            className={`testimonial-dot${i === activePage ? ' active' : ''}`}
                            onClick={() => goTo(i, pageCount)}
                            aria-label={`${c.dot[0]}${i + 1}${c.dot[1]}${pageCount}${c.dot[2]}`}
                            aria-current={i === activePage ? 'true' : undefined}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="testimonial-arrow"
                    onClick={() => goTo(activePage + 1, pageCount)}
                    aria-label={c.next}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}

export default function Home() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const x = t.ptExtras;
    const { ref: metricsRevealRef, inView: metricsInView } = useInView({ rootMargin: '-50px', once: true });

    // Brands strip: the diamond separators lead each brand, so on wide screens the
    // row reads "A ✦ B ✦ C". When the row wraps on smaller viewports we hide the
    // separator of any brand that starts a new line, so a diamond only ever sits
    // *between* two brands on the same line and never dangles at a line edge.
    // All separators are present in the server HTML (nothing hidden set); this runs
    // after hydration and re-runs on resize.
    const brandsRef = useRef<HTMLDivElement>(null);
    const [lineStartSeps, setLineStartSeps] = useState<number[]>([]);

    const recomputeBrandSeps = useCallback(() => {
        const row = brandsRef.current;
        if (!row) return;
        const wrappers = Array.from(row.children) as HTMLElement[];
        const hide: number[] = [];
        let prevTop: number | null = null;
        wrappers.forEach((w, i) => {
            const top = w.getBoundingClientRect().top;
            if (i > 0 && (prevTop === null || Math.abs(top - prevTop) > 4)) hide.push(i);
            prevTop = top;
        });
        setLineStartSeps((prev) => (prev.length === hide.length && prev.every((v, k) => v === hide[k]) ? prev : hide));
    }, []);

    useEffect(() => {
        recomputeBrandSeps();
        window.addEventListener("resize", recomputeBrandSeps);
        // Re-check once webfonts settle, since final glyph widths change wrapping.
        (document as Document & { fonts?: FontFaceSet }).fonts?.ready.then(recomputeBrandSeps).catch(() => {});
        return () => window.removeEventListener("resize", recomputeBrandSeps);
    }, [recomputeBrandSeps]);

    return (
        <div className="container">
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                jsonLd={lang === "pt" ? PT_JSON_LD : HOME_JSON_LD}
            />

            {/* Hero Section */}
            <section className="hero" style={{ overflow: 'visible', minHeight: 'auto', paddingTop: '6rem', paddingBottom: '4rem' }}>
                <div className="bg-glow" style={{ top: '-10%', right: '-10%' }} />
                <div className="bg-glow" style={{ bottom: '10%', left: '-10%', width: '400px', height: '400px' }} />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem',
                }}>
                    {/* Left: text */}
                    <div className="hero-text-col animate-fade-in" style={{ textAlign: 'left' }}>
                        <span style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontSize: '0.85rem',
                            color: 'var(--accent-secondary)',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            {t.hero.eyebrow}
                        </span>
                        <h1 style={{ margin: '0 0 1.5rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
                            {t.hero.h1}
                        </h1>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {t.hero.intro}
                        </p>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <Link to={to("/contact")} className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                {t.hero.cta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                            </Link>
                            <Link to={to("/case-studies")} className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                {t.hero.results}
                            </Link>
                        </div>

                        <div className="hero-credentials" style={{
                            display: 'flex',
                            gap: '2rem',
                            flexWrap: 'wrap',
                            opacity: 0.7,
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            paddingTop: '1.5rem',
                            borderTop: '1px solid var(--border-color)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                {t.hero.credentials[0]}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                {t.hero.credentials[1]}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                {t.hero.credentials[2]}
                            </div>
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className="hero-image-col reveal-scale is-visible" style={{ position: 'relative', animationDelay: '0.2s' }}>
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '4/5',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
                            border: '1px solid var(--border-color)',
                        }}>
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet="/maria-hero-400.webp 400w, /maria-hero-800.webp 800w, /maria-hero-1600.webp 1600w"
                                    sizes="(max-width: 900px) 100vw, 550px"
                                />
                                <source
                                    type="image/jpeg"
                                    srcSet="/maria-hero-400.jpg 400w, /maria-hero-800.jpg 800w, /maria-hero-1600.jpg 1600w"
                                    sizes="(max-width: 900px) 100vw, 550px"
                                />
                                <img
                                    src="/maria-hero-800.jpg"
                                    alt={t.hero.imageAlt}
                                    width="1600"
                                    height="2000"
                                    fetchPriority="high"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                                />
                            </picture>
                        </div>
                        {/* Floating badge */}
                        <div
                            className="hero-badge reveal is-visible"
                            style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '-2rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '16px',
                                padding: '1rem 1.5rem',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                minWidth: '200px',
                                transitionDelay: '0.8s',
                            }}
                        >
                            <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>📈</span>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.hero.badgeTitle}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t.hero.badgeText}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Key Metrics Section */}
            <section className="section metrics-section" style={{ position: 'relative', background: 'var(--bg-secondary)', borderRadius: '32px', margin: '4rem 0', padding: '5rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">{t.impact.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.impact.sub}
                    </p>
                </div>

                <div
                    ref={metricsRevealRef as React.RefObject<HTMLDivElement>}
                    className={`grid-4 stagger-container${metricsInView ? ' is-visible' : ''}`}
                >
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={134} prefix="£" suffix="K" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>{t.impact.cards[0].label}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{t.impact.cards[0].detail}</p>
                        {x && <ImpactCaseLink to={to("/case-study-email")} label={x.impactCaseLink} />}
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={2.2} suffix="x" decimals={1} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>{t.impact.cards[1].label}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{t.impact.cards[1].detail}</p>
                        {x && <ImpactCaseLink to={to("/case-study-seo")} label={x.impactCaseLink} />}
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={50.4} suffix="%" decimals={1} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>{t.impact.cards[2].label}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{t.impact.cards[2].detail}</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={532} suffix="%" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>{t.impact.cards[3].label}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{t.impact.cards[3].detail}</p>
                        {x && <ImpactCaseLink to={to("/case-study-google-ads")} label={x.impactCaseLink} />}
                    </div>
                </div>
            </section>

            {/* Supporting Metrics Strip */}
            <section className="section" style={{ padding: '0 0 5rem' }}>
                <div
                    className="grid-4"
                    style={{
                        background: 'var(--bg-secondary)',
                        borderRadius: '20px',
                        border: '1px solid var(--border-color)',
                        padding: '2.5rem 2rem',
                    }}
                >
                    {SUPPORTING_METRICS.map((metric, i) => (
                        <div key={t.supporting[i].label} style={{ textAlign: 'center' }}>
                            <div className="text-gradient-accent" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>
                                <AnimatedCounter
                                    to={metric.to}
                                    prefix={metric.prefix}
                                    suffix={metric.suffix}
                                    decimals={metric.decimals}
                                />
                            </div>
                            <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{t.supporting[i].label}</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{t.supporting[i].detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Brands Section */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '2rem' }}>
                        {t.brandsLabel}
                    </p>
                    <div ref={brandsRef} className="brands-row" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0',
                        flexWrap: 'wrap',
                        opacity: 0.45
                    }}>
                        {[
                            "THE BLACK FARMER",
                            "SMORGASBORD",
                            "OUSADIA",
                            "WILTSHIRE COUNTRY FAYRE",
                            "RITA ANTUNES"
                        ].map((brand, i) => (
                            // The separator leads its brand and is bound to it as one
                            // non-wrapping unit, so a diamond can never be left dangling
                            // at the end of a line when the row wraps on small screens.
                            <span key={brand} style={{ display: 'flex', alignItems: 'center' }}>
                                {i > 0 && (
                                    <span aria-hidden="true" className={lineStartSeps.includes(i) ? "brand-sep brand-sep--hide" : "brand-sep"}>✦</span>
                                )}
                                <span style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    padding: '0.5rem 1.2rem',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {brand}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section" style={{ padding: '5rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t.testimonials.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.testimonials.sub}
                    </p>
                </div>

                {/* Desktop grid / Mobile carousel */}
                <TestimonialsCarousel />

                {/* The cards carry excerpts, so one link out to the full set. */}
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <a
                        className="btn btn-secondary"
                        href={RECOMMENDATIONS_URL}
                        target="_blank"
                        rel="noopener"
                    >
                        {t.testimonials.seeAll} <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t.services.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.services.sub}
                    </p>
                </div>
                {/* Centred flex-wrap keeps the 3-column rhythm but balances the odd
                    seventh card, which grid-3 would leave orphaned in a row of one. */}
                <style>{`
                    .services-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; }
                    .services-grid > * { flex: 0 1 calc((100% - 4rem) / 3); }
                    @media (max-width: 900px) { .services-grid > * { flex-basis: calc((100% - 2rem) / 2); } }
                    @media (max-width: 600px) { .services-grid > * { flex-basis: 100%; } }
                `}</style>
                <div className="services-grid">
                    {t.services.items.map((item, i) => ({ ...item, ...SERVICE_VISUALS[i] })).map((s: { icon: React.ReactNode; title: string; desc: string; link?: string }) => {
                        const body = (
                            <>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    background: 'var(--accent-glow)', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.25rem', color: 'var(--accent-secondary)',
                                    flexShrink: 0,
                                }}>
                                    {s.icon}
                                </div>
                                <h3>{s.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '0.95rem' }}>{s.desc}</p>
                            </>
                        );
                        return s.link ? (
                            <Link key={s.title} to={to(s.link)} className="card" style={{ display: 'block' }}>{body}</Link>
                        ) : (
                            <div key={s.title} className="card">{body}</div>
                        );
                    })}
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="section" style={{ padding: '2rem 0 5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontSize: '0.85rem',
                        color: 'var(--accent-secondary)',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        display: 'block'
                    }}>
                        {t.caseStudies.eyebrow}
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t.caseStudies.title}</h2>
                </div>

                <div className="grid-3">
                    {/* Card 1 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet="/email-popcorn-400.webp 400w, /email-popcorn-800.webp 800w"
                                    sizes="(min-width: 940px) 400px, (min-width: 700px) 45vw, 90vw"
                                />
                                <source
                                    type="image/jpeg"
                                    srcSet="/email-popcorn-400.jpg 400w, /email-popcorn-800.jpg 800w"
                                    sizes="(min-width: 940px) 400px, (min-width: 700px) 45vw, 90vw"
                                />
                                <img
                                    className="case-study-media-img case-study-media-img--top"
                                    src="/email-popcorn-800.jpg"
                                    alt={t.caseStudies.cards[0].alt}
                                    width={800}
                                    height={1387}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                        <div className="case-study-card-body">
                            <p className="case-study-category">{t.caseStudies.cards[0].category}</p>
                            <h3 className="case-study-card-title">{t.caseStudies.cards[0].title}</h3>
                            <ul className="case-study-items-list">
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[0].items[0]}</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[0].items[1]}</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[0].items[2]}</span>
                                </li>
                            </ul>
                            <Link to={to("/case-study-email")} className="case-study-link">
                                {t.caseStudies.readCase} <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <img
                                className="case-study-media-img"
                                src={lang === "pt" ? "/card-google-ads-roas-pt.svg" : "/card-google-ads-roas.svg"}
                                alt={t.caseStudies.cards[1].alt}
                                width={640}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="case-study-card-body">
                            <p className="case-study-category">{t.caseStudies.cards[1].category}</p>
                            <h3 className="case-study-card-title">{t.caseStudies.cards[1].title}</h3>
                            <ul className="case-study-items-list">
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[1].items[0]}</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[1].items[1]}</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[1].items[2]}</span>
                                </li>
                            </ul>
                            <Link to={to("/case-study-google-ads")} className="case-study-link">
                                {t.caseStudies.readCase} <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <img
                                className="case-study-media-img"
                                src={lang === "pt" ? "/card-seo-clicks-pt.svg" : "/card-seo-clicks.svg"}
                                alt={t.caseStudies.cards[2].alt}
                                width={640}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="case-study-card-body">
                            <p className="case-study-category">{t.caseStudies.cards[2].category}</p>
                            <h3 className="case-study-card-title">{t.caseStudies.cards[2].title}</h3>
                            <ul className="case-study-items-list">
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[2].items[0]}</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[2].items[1]}</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>{t.caseStudies.cards[2].items[2]}</span>
                                </li>
                            </ul>
                            <Link to={to("/case-study-seo")} className="case-study-link">
                                {t.caseStudies.readCase} <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to={to("/case-studies")} className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                        {t.caseStudies.viewAll} <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>

            {/* Portfolio Preview Strip */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t.work.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {t.work.sub}
                    </p>
                </div>
                <div className="portfolio-preview-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {t.work.items.map((item, i) => ({ ...item, ...WORK_VISUALS[i] })).map((item) => (
                        <Link
                            key={item.title}
                            to={to(item.link)}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="hover-lift" style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-secondary)',
                                cursor: 'pointer',
                            }}>
                                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div style={{ padding: '1.25rem 1.5rem' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-secondary)', display: 'block', marginBottom: '0.35rem' }}>
                                        {item.label}
                                    </span>
                                    <span style={{ fontWeight: 600, fontSize: '1rem' }}>{item.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <Link to={to("/portfolio")} className="btn btn-secondary" style={{ padding: '0.9rem 2.5rem' }}>
                        {t.work.viewAll} <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {t.work.closing}{' '}
                    <Link
                        to={to("/case-studies")}
                        style={{
                            color: 'var(--accent-secondary)',
                            textDecoration: 'underline',
                            textDecorationColor: 'transparent',
                            textUnderlineOffset: '3px',
                            transition: 'text-decoration-color 0.2s ease',
                            fontWeight: 500,
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'var(--accent-secondary)')}
                        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'transparent')}
                    >
                        {t.work.closingLink}
                    </Link>
                </p>
            </section>

            {/* Portuguese only (D15 A): how I work, credentials, FAQ and a final
                call to action, after the shared sections. */}
            {x && (
                <>
                    <section style={{ marginBottom: "5rem" }}>
                        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                            <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{x.howTitle}</h2>
                        </div>
                        <ol className="grid-3" style={{ listStyle: "none", padding: 0, margin: 0, gap: "1.5rem" }}>
                            {x.steps.map((st, i) => (
                                <li key={st.lead} className="card" style={{ background: "var(--bg-secondary)", position: "relative", padding: "2rem 2rem 1.75rem" }}>
                                    <span aria-hidden="true" style={{ position: "absolute", top: "1.25rem", right: "1.5rem", fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-primary)", opacity: 0.4, lineHeight: 1 }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, margin: "1.75rem 0 0" }}>
                                        <strong style={{ color: "var(--text-primary)" }}>{st.lead}:</strong> {st.rest}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="credentials" style={{ maxWidth: "980px", margin: "0 auto 5rem" }}>
                        <h2 className="credentials-title">{x.credentialsTitle}</h2>
                        <ul className="credential-list" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                            {x.credentials.map((c) => (
                                <li key={c.name} className="credential">
                                    <p className="credential-name">{c.name}</p>
                                    <p className="credential-issuer">{c.issuer}</p>
                                    {c.verifyUrl && (
                                        <a href={c.verifyUrl} target="_blank" rel="noopener" className="credential-verify">
                                            {x.verify} <ExternalLink size={13} />
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section style={{ maxWidth: "820px", margin: "0 auto 5rem" }}>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>{x.faqTitle}</h2>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {x.faqs.map((f) => (
                                <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                                        <Quote size={18} style={{ flexShrink: 0, marginTop: "3px", color: "var(--accent-secondary)" }} /> {f.q}
                                    </h3>
                                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "clamp(3rem, 6vw, 5rem) 2rem", borderRadius: "24px", border: "1px solid var(--border-color)", marginBottom: "6rem" }}>
                        <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>{x.ctaTitle}</h2>
                        <Link to={to("/contact")} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                            {x.ctaButton} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                    </section>
                </>
            )}
        </div>
    );
}
