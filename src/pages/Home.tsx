import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, BarChart, Maximize, TrendingUp, Cpu, Mail, ArrowRightLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* ── CountUp component ─────────────────────────── */
interface CounterProps {
    from?: number;
    to: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

function Counter({ from = 0, to, decimals = 0, prefix = "", suffix = "", duration = 2.5 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(from);

    const displayValue = useTransform(count, (latest) => {
        return `${prefix}${latest.toFixed(decimals)}${suffix}`;
    });

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration, ease: "easeOut" });
        }
    }, [inView, count, to, duration]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="container">
            <Helmet>
                <title>Maria Madeira | E-commerce Growth Strategist & Marketing Automation</title>
                <meta name="description" content="Growth Strategist for modern e-commerce brands. Specializing in lifecycle marketing, paid acquisition, AI-driven search optimisation, and creative direction." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ overflow: 'visible' }}>
                <div className="bg-glow" style={{ top: '-10%', right: '-10%' }} />
                <div className="bg-glow" style={{ bottom: '10%', left: '-10%', width: '400px', height: '400px' }} />
                
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
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
                    <h1 style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
                        Scaling <span className="text-gradient">E-commerce Brands</span> with Data-Driven Growth & AI
                    </h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        Helping modern brands transition from steady growth to aggressive scaling through lifecycle marketing, paid acquisition, and AI-driven automation.
                    </p>
                    <div className="hero-cta-group" style={{ display: "flex", gap: "1.2rem", justifyContent: "center", marginBottom: '3rem' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Book a Strategy Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <Link to="/results" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            See My Results
                        </Link>
                    </div>

                    <div className="hero-stats" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        opacity: 0.7,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        padding: '1.5rem',
                        borderTop: '1px solid var(--border-color)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem' }}>★</span>
                            Growth Strategist for Scaling Brands
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem' }}>★</span>
                            £160K+ Revenue Generated
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem' }}>★</span>
                            4.9x Google Ads ROAS
                        </div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span>Scroll</span>
                    <ChevronDown size={20} />
                </motion.div>
            </section>



            {/* Key Metrics Section */}
            <section className="section metrics-section" style={{ position: 'relative', background: 'var(--bg-secondary)', borderRadius: '32px', margin: '4rem 0', padding: '5rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Measurable Impact</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Consistent results across diverse channels, driven by data and optimized for profitable growth.
                    </p>
                </div>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid-4"
                >
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={160} prefix="£" suffix="K+" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Total Revenue Generated</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Directly attributed to my strategies</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={4.9} suffix="x" decimals={1} />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Google Ads ROAS</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>490.74% return on ad spend</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={48} suffix="%" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Email Open Rate</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Industry-leading engagement</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center', background: 'var(--bg-primary)' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={70} suffix="%" />
                        </h3>
                        <p style={{ fontWeight: 600 }}>Cost Reduction</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>In visual production via AI</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Brands Section */}
            <section className="section" style={{ padding: '2rem 0 6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '2rem' }}>
                        Trusted by Innovative Brands & Agencies
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0',
                        flexWrap: 'wrap',
                        opacity: 0.45
                    }}>
                        {[
                            "THE BLACK FARMER",
                            "SMORGASBORG",
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
                                    padding: '0.5rem 2rem',
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
                    <div className="card">
                        <TrendingUp size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Growth Strategy</h3>
                    </div>
                    <div className="card">
                        <Mail size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Email Marketing & Automation</h3>
                    </div>
                    <div className="card">
                        <BarChart size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Paid Advertising</h3>
                    </div>
                    <div className="card">
                        <Cpu size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>AI & Automation Systems</h3>
                    </div>
                    <div className="card">
                        <Maximize size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Creative Direction</h3>
                    </div>
                    <div className="card">
                        <ArrowRightLeft size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>E-commerce Platform Migration</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
