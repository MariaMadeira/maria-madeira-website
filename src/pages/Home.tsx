import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight, BarChart, Maximize, TrendingUp, Cpu, Mail, ArrowRightLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useInView } from "../hooks/useInView";

// Email figures are verified Klaviyo data for the last 12 months (Jul 2024 –
// Jul 2025); Google Ads figures are verified for Sept 2025 – Jul 2026. The four
// headline numbers (£134K, 37.8% revenue share, 50.4%, 5.34x Meta ROAS) live in
// the Measurable Impact grid; these supporting metrics appear nowhere else on
// the page, so every stat is stated exactly once. Google Ads ROAS (also 5.34x)
// is shown only in its case study, to avoid colliding with the Meta figure here.
const SUPPORTING_METRICS = [
    { to: 48.3, prefix: "£", suffix: "K", decimals: 1, label: "Flow Revenue", detail: "From automated lifecycle flows, +82.5% YoY" },
    { to: 7.27, prefix: "", suffix: "%", decimals: 2, label: "Flow Click Rate", detail: "Across automated email flows, last 12 months" },
    { to: 86.1, prefix: "£", suffix: "K", decimals: 1, label: "Campaign Revenue", detail: "From email campaigns, +92.6% YoY" },
    { to: 11.70, prefix: "£", suffix: "", decimals: 2, label: "Google Ads Cost / Conversion", detail: "2,000 conversions · Sept 2025 – Jul 2026" },
];

// Outcomes are phrased to avoid restating any figure already shown in the hero
// badge, the Measurable Impact grid or the supporting strip — each stat appears
// exactly once on this page. The Google Ads ROAS (5.34x) is intentionally NOT
// shown here: it coincides with the Meta Ads ROAS in the grid, so the card leads
// with conversion value and spend instead.
const FEATURED_WORK = [
    {
        category: "Growth Strategy & Website Build",
        title: "The Bodysurf School",
        outcome: "A brochure site rebuilt into a bilingual booking engine, with local payment methods and SEO and AEO foundations built in.",
        link: "/case-study-bodysurf-school",
    },
    {
        category: "Paid Advertising",
        title: "Google Ads Revenue Growth",
        outcome: "£125K in conversion value from £23.4K in ad spend, acquiring high-intent customers through structured search campaigns.",
        link: "/case-study-google-ads",
    },
    {
        category: "Email Marketing",
        title: "Email Lifecycle Revenue Growth",
        outcome: "An underused channel rebuilt as a full Klaviyo lifecycle system: welcome, recovery, replenishment and win-back.",
        link: "/case-study-email",
    },
];

const HOME_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://mariamadeira.com/#person",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "image": "https://mariamadeira.com/portrait.png",
            "jobTitle": "Growth Strategist",
            "description": "Growth strategist for brands that sell online: websites, SEO and AEO, Klaviyo email, and paid acquisition. Four years with UK food and drink brands.",
            "sameAs": ["https://www.linkedin.com/in/maria-madeira-43501b3a/"],
            "knowsAbout": ["Email Marketing", "Klaviyo", "Google Ads", "Meta Ads", "AI Marketing", "Growth Strategy", "Paid Acquisition", "Lifecycle Marketing"]
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://mariamadeira.com/#service",
            "name": "Maria Madeira: Growth Strategy",
            "url": "https://mariamadeira.com",
            "description": "Growth strategist for brands that sell online: websites, SEO and AEO, Klaviyo email, and paid acquisition. Four years with UK food and drink brands.",
            "provider": { "@id": "https://mariamadeira.com/#person" },
            "areaServed": "Worldwide",
            "serviceType": ["Growth Strategy", "Email Marketing", "Paid Advertising", "AI Marketing Systems", "Creative Direction"],
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@mariamadeira.com",
                "contactType": "customer service"
            }
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
// Ordered by credibility of the endorser. The mobile carousel opens on the
// first entry, so the strongest testimonial leads on both layouts.
const TESTIMONIALS = [
    {
        name: "Adel Sidiqi",
        role: "Digital Marketing Manager at Ocado Zoom",
        context: "Former colleague · Recommended on LinkedIn",
        quote: "Maria's expertise in design, digital marketing, and tools like Klaviyo consistently took our campaigns to the next level — both visually and in terms of results. She has a real knack for aligning creative ideas with marketing goals. Detail-oriented, innovative, and a great team player.",
    },
    {
        name: "Will Fuller",
        role: "WordPress Developer",
        context: "Former colleague · Recommended on LinkedIn",
        quote: "Maria completely transformed our email marketing strategy. When she took over our Klaviyo account, she achieved 125% growth in email attributed revenue and boosted our automated flows by over 100%. Our open rates went from 28% to 48%, and click rates more than doubled. What impressed me most wasn't just the numbers — it was how she understood our customers.",
    },
    {
        name: "Hermela Michael",
        role: "History Undergraduate",
        context: "Former colleague · Recommended on LinkedIn",
        quote: "Maria doesn't just think outside the box — she completely redefines it. Her creativity, strategic mindset, and deep understanding of marketing have played a huge role in shaping the success of the company. She approaches every project with passion and precision, always bringing fresh, data-driven ideas to the table that truly make an impact.",
    },
];

function TestimonialsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const { ref: sectionRef, inView } = useInView({ rootMargin: '-50px', once: true });

    const goTo = useCallback((index: number) => {
        setActiveIndex((index + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 40) goTo(activeIndex + (delta < 0 ? 1 : -1));
        touchStartX.current = null;
    };

    return (
        <>
            {/* Desktop: 3-column grid */}
            <div
                ref={sectionRef as React.RefObject<HTMLDivElement>}
                className={`grid-3 stagger-container testimonials-desktop${inView ? ' is-visible' : ''}`}
            >
                {TESTIMONIALS.map((t) => (
                    <div key={t.name} className="card reveal-item testimonial-card" style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            lineHeight: 1.75,
                            fontStyle: 'italic',
                            flex: 1,
                        }}>
                            "{t.quote}"
                        </p>
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                                background: 'var(--accent-glow)', border: '1px solid var(--accent-primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-secondary)',
                            }}>
                                {t.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{t.name}</p>
                                <p style={{ fontSize: '0.82rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.2rem' }}>{t.role}</p>
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', opacity: 0.75 }}>{t.context}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile: swipeable carousel */}
            <div
                className="testimonials-mobile"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="testimonial-card card" style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.75,
                        fontStyle: 'italic',
                        flex: 1,
                    }}>
                        "{TESTIMONIALS[activeIndex].quote}"
                    </p>
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                            background: 'var(--accent-glow)', border: '1px solid var(--accent-primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-secondary)',
                        }}>
                            {TESTIMONIALS[activeIndex].name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{TESTIMONIALS[activeIndex].name}</p>
                            <p style={{ fontSize: '0.82rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.2rem' }}>{TESTIMONIALS[activeIndex].role}</p>
                            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', opacity: 0.75 }}>{TESTIMONIALS[activeIndex].context}</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-dots">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            className={`testimonial-dot${i === activeIndex ? ' active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
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
                title="Maria Madeira | Growth Strategist for Brands That Sell Online"
                description="Growth strategist for brands that sell online: websites, SEO and AEO, Klaviyo email, and paid acquisition. Four years with UK food and drink brands."
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
                            Growth Strategist for brands that sell online.
                        </span>
                        <h1 style={{ margin: '0 0 1.5rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
                            Scaling <span className="text-gradient">Brands That Sell Online</span> with Data-Driven Growth & AI
                        </h1>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Helping modern brands transition from steady growth to aggressive scaling through lifecycle marketing, paid acquisition, and AI-driven automation.
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
                                4+ years scaling brands that sell online
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                Klaviyo · Google Ads · Meta Ads
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
                            <img
                                src="/maria-working.png"
                                alt="Maria Madeira, Growth Strategist"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 15%', display: 'block' }}
                            />
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
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>of £355.6K total store revenue (last 12 months)</p>
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
                            <AnimatedCounter from={0} to={5.34} suffix="x" decimals={2} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Meta Ads ROAS</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Peak return on ad spend across Meta campaigns</p>
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
                        { icon: <TrendingUp size={22} />, title: 'Growth Strategy', desc: 'Full-funnel strategies to take brands from steady growth to aggressive, sustainable scaling.', link: '/services' },
                        { icon: <Sparkles size={22} />, title: 'AI Search Visibility (AEO)', desc: "Getting brands cited and recommended by ChatGPT, Perplexity and Google's AI Overviews, not just ranked.", link: '/services/aeo' },
                        { icon: <Mail size={22} />, title: 'Email Marketing & Automation', desc: 'Advanced lifecycle flows and segmentation that maximise LTV and cut acquisition costs.', link: '/services/email-marketing' },
                        { icon: <BarChart size={22} />, title: 'Paid Advertising', desc: 'Data-driven media buying across Meta, Google, and TikTok to maximise ROAS.' },
                        { icon: <Cpu size={22} />, title: 'AI & Automation Systems', desc: 'AI tools that accelerate content creation, automate workflows, and enrich data analysis.' },
                        { icon: <Maximize size={22} />, title: 'Creative Direction', desc: 'Translating analytical insights into compelling visual stories and high-performing brand assets.' },
                        { icon: <ArrowRightLeft size={22} />, title: 'Platform Migration', desc: 'Seamless migrations that protect SEO, revenue, and customer data throughout the transition.', link: '/services/websites' },
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

            {/* Featured Work Section */}
            <section className="section" style={{ padding: '2rem 0 4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Featured Work</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Three engagements that show the range: a full build, paid acquisition, and lifecycle retention.
                    </p>
                </div>
                <div className="grid-3">
                    {FEATURED_WORK.map((work) => (
                        <div key={work.title} className="card hover-lift-sm" style={{ display: 'flex', flexDirection: 'column' }}>
                            <p className="text-gradient-accent" style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                {work.category}
                            </p>
                            <h3>{work.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '0.95rem', flex: 1 }}>
                                {work.outcome}
                            </p>
                            <Link
                                to={work.link}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'var(--accent-secondary)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    marginTop: '1.5rem',
                                }}
                            >
                                Read case study <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
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
