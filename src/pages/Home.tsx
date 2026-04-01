import { useRef, useEffect, useState } from "react";
import { ArrowRight, BarChart, Maximize, TrendingUp, Cpu, Mail, ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "../hooks/useInView";

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
    const [display, setDisplay] = useState(`${prefix}${from.toFixed(decimals)}${suffix}`);
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

export default function Home() {
    const { ref: metricsRevealRef, inView: metricsInView } = useInView({ rootMargin: '-50px', once: true });

    return (
        <div className="container">
            <Helmet>
                <title>Maria Madeira | E-commerce Growth Strategist & Marketing Automation</title>
                <meta name="description" content="Growth Strategist for modern e-commerce brands. Specializing in lifecycle marketing, paid acquisition, AI-driven search optimisation, and creative direction." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Maria Madeira | E-commerce Growth Strategist" />
                <meta property="og:description" content="Helping modern brands transition from steady growth to aggressive scaling through lifecycle marketing, paid acquisition, and AI-driven automation." />
                <meta property="og:image" content="/MM.png" />
                <meta property="og:url" content="https://mariamadeira.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Maria Madeira | E-commerce Growth Strategist" />
                <meta name="twitter:description" content="Helping modern brands scale through lifecycle marketing, paid acquisition, and AI-driven automation." />
                <meta name="twitter:image" content="/MM.png" />
            </Helmet>

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
                            E-commerce Growth Specialist. AI Enthusiast.
                        </span>
                        <h1 style={{ margin: '0 0 1.5rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
                            Scaling <span className="text-gradient">E-commerce Brands</span> with Data-Driven Growth & AI
                        </h1>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Helping modern brands transition from steady growth to aggressive scaling through lifecycle marketing, paid acquisition, and AI-driven automation.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                Book a Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                            </Link>
                            <Link to="/results" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
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
                                £160K+ Revenue Generated
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>★</span>
                                4.9x Google Ads ROAS
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
                                alt="Maria Madeira — E-commerce Growth Strategist"
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
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>490.74% ROAS</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Google Ads Campaign</div>
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
                        Consistent results across diverse channels, driven by data and optimized for profitable growth.
                    </p>
                </div>

                <div
                    ref={metricsRevealRef as React.RefObject<HTMLDivElement>}
                    className={`grid-4 stagger-container${metricsInView ? ' is-visible' : ''}`}
                >
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={160} prefix="£" suffix="K+" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Total Revenue Generated</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Directly attributed to my strategies</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={4.9} suffix="x" decimals={1} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Google Ads ROAS</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>490.74% return on ad spend</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={48} suffix="%" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Email Open Rate</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Industry-leading engagement</p>
                    </div>
                    <div className="card text-center reveal-item" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <AnimatedCounter from={0} to={70} suffix="%" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Cost Reduction</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>In visual production via AI</p>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '2rem' }}>
                        Trusted by Innovative Brands
                    </p>
                    <div className="brands-row" style={{
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
                        ].map((brand, i, arr) => (
                            <span key={brand} style={{ display: 'flex', alignItems: 'center' }}>
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
                                {i < arr.length - 1 && (
                                    <span style={{ color: 'var(--accent-secondary)', fontSize: '0.6rem', opacity: 0.6 }}>✦</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Core Services</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Strategic solutions designed to drive revenue and improve operational efficiency for scaling brands.
                    </p>
                </div>
                <div className="grid-3">
                    {[
                        { icon: <TrendingUp size={22} />, title: 'Growth Strategy', desc: 'Full-funnel strategies to take brands from steady growth to aggressive, sustainable scaling.' },
                        { icon: <Mail size={22} />, title: 'Email Marketing & Automation', desc: 'Advanced lifecycle flows and segmentation that maximise LTV and cut acquisition costs.' },
                        { icon: <BarChart size={22} />, title: 'Paid Advertising', desc: 'Data-driven media buying across Meta, Google, and TikTok to maximise ROAS.' },
                        { icon: <Cpu size={22} />, title: 'AI & Automation Systems', desc: 'AI tools that accelerate content creation, automate workflows, and enrich data analysis.' },
                        { icon: <Maximize size={22} />, title: 'Creative Direction', desc: 'Translating analytical insights into compelling visual stories and high-performing brand assets.' },
                        { icon: <ArrowRightLeft size={22} />, title: 'E-commerce Platform Migration', desc: 'Seamless migrations that protect SEO, revenue, and customer data throughout the transition.' },
                    ].map((s) => (
                        <div key={s.title} className="card">
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
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio Preview Strip */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Selected Work</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A snapshot of recent projects — from brand identity to AI-powered product photography.
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
                            link: '/portfolio/rita-antunes',
                        },
                        {
                            image: '/projects/ai-product/DEPOIS Cotswold Fudge Butterscotch.jpg',
                            label: 'AI Product Photography',
                            title: 'Cotswold Fudge',
                            link: '/portfolio/ai-product-photography',
                        },
                        {
                            image: '/projects/email-marketing/recipe.png',
                            label: 'Email Marketing',
                            title: 'Lifecycle Email System',
                            link: '/portfolio/email-marketing',
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
            </section>
        </div>
    );
}
