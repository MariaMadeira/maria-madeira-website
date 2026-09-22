import { useRef, useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { ArrowRight, BarChart, Maximize, TrendingUp, Cpu, Mail, ArrowRightLeft, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useInView } from "../hooks/useInView";

// Email figures are verified Klaviyo data for the last 12 months (Jul 2024 –
// Jul 2025); Google Ads figures are the full account export for 1 Oct 2025 to
// 26 Aug 2026. The four headline numbers (£134K, 37.8% revenue share, 50.4%,
// 532% Google Ads ROAS) live in the Measurable Impact grid; these supporting
// metrics appear nowhere else on the page. The client's total store revenue is
// deliberately absent: the share is published, the absolute figure is not.
const SUPPORTING_METRICS = [
    { to: 48.3, prefix: "£", suffix: "K", decimals: 1, label: "Flow Revenue", detail: "From automated lifecycle flows, +82.5% YoY" },
    { to: 7.27, prefix: "", suffix: "%", decimals: 2, label: "Flow Click Rate", detail: "Across automated email flows, last 12 months" },
    { to: 86.1, prefix: "£", suffix: "K", decimals: 1, label: "Campaign Revenue", detail: "From email campaigns, +92.6% YoY" },
    { to: 12.27, prefix: "£", suffix: "", decimals: 2, label: "Google Ads CPA", detail: "2,161 conversions · Oct 2025 to Aug 2026" },
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
            "sameAs": ["https://www.linkedin.com/in/maria-madeira-43501b3a/", "https://influee.co/partnership/maria-madeira"],
            "memberOf": {
                "@type": "Organization",
                "name": "Klaviyo K:Partners",
                "url": "https://www.klaviyo.com/partners"
            },
            "knowsAbout": ["Answer Engine Optimisation (AEO)", "SEO", "Email Marketing", "Klaviyo", "Google Ads", "Meta Ads", "AI Marketing", "Growth Strategy", "Paid Acquisition", "Lifecycle Marketing"]
        },
        // Split out of a single ProfessionalService node: that type descends from
        // LocalBusiness, not Service, so it accepts neither provider nor
        // serviceType (schema.org deprecated it precisely for that confusion).
        // The practice is now an Organization and what it sells is a Service.
        {
            "@type": "Organization",
            "@id": "https://mariamadeira.com/#organization",
            "name": "Maria Madeira: Growth Strategy",
            "url": "https://mariamadeira.com",
            "description": "Answer Engine Optimisation (AEO), SEO, Klaviyo email and paid acquisition for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
            "founder": { "@id": "https://mariamadeira.com/#person" },
            "areaServed": "Worldwide",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@mariamadeira.com",
                "contactType": "customer service"
            }
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
    const [display, setDisplay] = useState(`${prefix}${to.toFixed(decimals)}${suffix}`);
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
            setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, from, to, decimals, prefix, suffix, duration]);

    return <span ref={ref as React.RefObject<HTMLSpanElement>}>{display}</span>;
}
/* ── Testimonials data & carousel ────────────────────────── */
// Ordered by weight of proof: the client engagement leads, then colleagues.
// Quotes are verbatim LinkedIn recommendations, so their punctuation is theirs.
const TESTIMONIALS = [
    {
        name: "The Bodysurf School",
        role: null,
        context: "Client · Recommended on LinkedIn",
        monogram: "BS",
        quote: "Something we thought would be pricey and difficult to create, she built in just one month, and our monthly costs are low. On top of that, we're now ranking number one on search engines and AI tools whenever you search for bodysurf. She's easy to work with, super hands-on, and delivered exactly what she promised, within the timeframe she promised.",
        readMore: "/case-study-bodysurf-school",
    },
    {
        name: "Adel Sidiqi",
        role: "Digital Marketing Manager at Ocado Zoom",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "AS",
        quote: "Maria's expertise in design, digital marketing, and tools like Klaviyo consistently took our campaigns to the next level — both visually and in terms of results. She has a real knack for aligning creative ideas with marketing goals. Detail-oriented, innovative, and a great team player.",
        readMore: null,
    },
    {
        name: "Isbah Amin",
        role: "Marketing Executive, B2C Growth, CRM & Lifecycle Marketing",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "IA",
        quote: "Working under Maria's guidance at The Black Farmer was an incredible experience. As my senior, she taught me the ins and outs of marketing, from brand strategy to high-impact email campaigns. Her ability to grab customer attention and her deep business knowledge are truly inspiring. Anyone would be lucky to have Maria leading their marketing efforts!",
        readMore: null,
    },
    {
        name: "Will Fuller",
        role: "WordPress Developer",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "WF",
        quote: "Maria completely transformed our email marketing strategy. When she took over our Klaviyo account, she achieved 125% growth in email attributed revenue and boosted our automated flows by over 100%. Our open rates went from 28% to 48%, and click rates more than doubled. What impressed me most wasn't just the numbers — it was how she understood our customers.",
        readMore: null,
    },
    {
        name: "Hermela Michael",
        role: null,
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "HM",
        quote: "Maria doesn't just think outside the box — she completely redefines it. Her creativity, strategic mindset, and deep understanding of marketing have played a huge role in shaping the success of the company. She approaches every project with passion and precision, always bringing fresh, data-driven ideas to the table that truly make an impact.",
        readMore: null,
    },
];

const DESKTOP_QUERY = "(min-width: 901px)";

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

    const pageCount = Math.ceil(TESTIMONIALS.length / perView);
    // Clamped at render rather than in an effect, so a resize that shortens the
    // page list can never leave the track parked past the end.
    const activePage = Math.min(page, pageCount - 1);

    const pages: typeof TESTIMONIALS[] = [];
    for (let i = 0; i < TESTIMONIALS.length; i += perView) pages.push(TESTIMONIALS.slice(i, i + perView));

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
            aria-roledescription="carousel"
            aria-label="Testimonials"
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
                                    <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                                    {t.readMore && (
                                        <Link
                                            to={t.readMore}
                                            className="testimonial-readmore"
                                            tabIndex={groupIndex === activePage ? undefined : -1}
                                        >
                                            Read the full recommendation <ArrowRight size={15} />
                                        </Link>
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
                    aria-label="Previous testimonials"
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
                            aria-label={`Go to testimonial page ${i + 1} of ${pageCount}`}
                            aria-current={i === activePage ? 'true' : undefined}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="testimonial-arrow"
                    onClick={() => goTo(activePage + 1, pageCount)}
                    aria-label="Next testimonials"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}

export default function Home() {
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
                title="AEO Consultancy for E-commerce Brands | Maria Madeira"
                description="Answer Engine Optimisation (AEO), SEO and email marketing for UK food and drink e-commerce brands. Agency-level execution from an independent consultant."
                path="/"
                jsonLd={HOME_JSON_LD}
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
                            AEO and growth consultancy for e-commerce brands.
                        </span>
                        <h1 style={{ margin: '0 0 1.5rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
                            AEO consultancy for e-commerce.
                        </h1>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            The output of an agency, without the agency. Answer Engine Optimisation, SEO, email and paid media for brands that want senior work done directly.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                Book a Free Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                            </Link>
                            <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                See My Results
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
                                5 years scaling brands that sell online
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                Klaviyo Partner · Google Ads · Meta Ads
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                Lisbon-based, global reach
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
                                    alt="Maria Madeira, growth consultant, at her desk"
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
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>£23.6K Welcome Series</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Revenue from a single lifecycle flow</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Key Metrics Section */}
            <section className="section metrics-section" style={{ position: 'relative', background: 'var(--bg-secondary)', borderRadius: '32px', margin: '4rem 0', padding: '5rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Measurable Impact</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Consistent results across diverse channels, driven by data and optimised for profitable growth.
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
                        <p style={{ fontWeight: 600 }}>Email Revenue</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Attributed to Klaviyo campaigns & flows (last 12 months, +88.9% YoY)</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={37.8} suffix="%" decimals={1} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Email Revenue Share</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>of total store revenue (last 12 months)</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={50.4} suffix="%" decimals={1} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Campaign Open Rate</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>78th percentile industry benchmark</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={532} suffix="%" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Google Ads ROAS</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Average across 11 months, against a 400% break-even</p>
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
                    {SUPPORTING_METRICS.map((metric) => (
                        <div key={metric.label} style={{ textAlign: 'center' }}>
                            <div className="text-gradient-accent" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.5rem' }}>
                                <AnimatedCounter
                                    to={metric.to}
                                    prefix={metric.prefix}
                                    suffix={metric.suffix}
                                    decimals={metric.decimals}
                                />
                            </div>
                            <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{metric.label}</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{metric.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Brands Section */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '2rem' }}>
                        Trusted by Innovative Brands
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
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>What People Say</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Recommendations from colleagues and professionals I've worked with.
                    </p>
                </div>

                {/* Desktop grid / Mobile carousel */}
                <TestimonialsCarousel />
            </section>

            {/* Services Overview Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Core Services</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Strategic solutions designed to drive revenue and improve operational efficiency for scaling brands.
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
                    {[
                        { icon: <TrendingUp size={22} />, title: 'Growth Strategy', desc: 'A plan for what to fix first, based on your numbers, not guesswork. Then I build it.', link: '/services' },
                        { icon: <Sparkles size={22} />, title: 'AI Search Visibility (AEO)', desc: "Getting brands cited and recommended by ChatGPT, Perplexity and Google's AI Overviews, not just ranked.", link: '/services/aeo' },
                        { icon: <Mail size={22} />, title: 'Email Marketing & Automation', desc: 'You have a list of customers you never email. I turn it into a channel that sells while you sleep.', link: '/services/email-marketing' },
                        { icon: <BarChart size={22} />, title: 'Paid Advertising', desc: 'Ads that pay for themselves, with every pound tracked against what it brings back.' },
                        { icon: <Cpu size={22} />, title: 'AI & Automation Systems', desc: 'The repetitive work (content, reporting, data entry) done by machines, so your time goes where it earns.' },
                        { icon: <Maximize size={22} />, title: 'Creative Direction', desc: 'Product photography and brand assets that look like the premium products you sell.' },
                        { icon: <ArrowRightLeft size={22} />, title: 'Platform Migration', desc: 'Migrations planned around what they put at risk: rankings, revenue, customer data.', link: '/services/websites' },
                    ].map((s: { icon: React.ReactNode; title: string; desc: string; link?: string }) => {
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
                            <Link key={s.title} to={s.link} className="card" style={{ display: 'block' }}>{body}</Link>
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
                        Case studies
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Results you can check</h2>
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
                                    alt="Email campaign designed in Klaviyo for The Black Farmer"
                                    width={800}
                                    height={1387}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                        <div className="case-study-card-body">
                            <p className="case-study-category">Email marketing</p>
                            <h3 className="case-study-card-title">An unused email list became a revenue channel</h3>
                            <ul className="case-study-items-list">
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>£134K email revenue, 12 months</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>+88.9% year on year</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>37.8% of total store revenue</span>
                                </li>
                            </ul>
                            <Link to="/case-study-email" className="case-study-link">
                                Read case study <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <img
                                className="case-study-media-img"
                                src="/card-google-ads-roas.svg"
                                alt="Bar chart of monthly return on ad spend over eleven months against a 400 percent break-even"
                                width={640}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="case-study-card-body">
                            <p className="case-study-category">Paid advertising</p>
                            <h3 className="case-study-card-title">Every pound spent returned five, over eleven months</h3>
                            <ul className="case-study-items-list">
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>£141K attributed revenue, 11 months</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>532% ROAS (client break-even: 400%)</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>10 of 11 months above break-even</span>
                                </li>
                            </ul>
                            <Link to="/case-study-google-ads" className="case-study-link">
                                Read case study <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <img
                                className="case-study-media-img"
                                src="/card-seo-clicks.svg"
                                alt="Line chart of organic clicks rising 78 percent over four months"
                                width={640}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="case-study-card-body">
                            <p className="case-study-category">SEO and AEO</p>
                            <h3 className="case-study-card-title">A catalogue invisible to Google, rebuilt page by page</h3>
                            <ul className="case-study-items-list">
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>Clicks from 4.5K to 8.0K (+78%) in four months</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>Average position from 15.2 to 9.4 (page 2 to page 1)</span>
                                </li>
                                <li className="case-study-item">
                                    <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                                    <span>60 pages improved at 30 days, 0 declined at 60 days</span>
                                </li>
                            </ul>
                            <Link to="/case-study-seo" className="case-study-link">
                                Read case study <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/case-studies" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                        View all case studies <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>

            {/* Portfolio Preview Strip */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Selected Work</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A snapshot of recent projects, from brand identity to AI-powered product photography.
                    </p>
                </div>
                <div className="portfolio-preview-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {[
                        {
                            image: '/projects/rita-antunes/mockup-stationery.jpg',
                            label: 'Brand Identity',
                            title: 'Rita Antunes',
                            link: '/portfolio-rita-antunes',
                        },
                        {
                            image: '/projects/ai-product/DEPOIS Cotswold Fudge Butterscotch.jpg',
                            label: 'AI Product Photography',
                            title: 'Cotswold Fudge',
                            link: '/portfolio-ai-product-photography',
                        },
                        {
                            image: '/projects/email-marketing/recipe.png',
                            label: 'Email Marketing',
                            title: 'Lifecycle Email System',
                            link: '/portfolio-email-marketing',
                        },
                    ].map((item) => (
                        <Link
                            key={item.title}
                            to={item.link}
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
                    <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '0.9rem 2.5rem' }}>
                        View All Work <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Every project is backed by strategy and measurable results.{' '}
                    <Link
                        to="/case-studies"
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
                        Explore the full case studies to see the impact.
                    </Link>
                </p>
            </section>
        </div>
    );
}
