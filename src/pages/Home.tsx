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
                        E-commerce Growth Specialist
                    </span>
                    <h1>
                        Growth Strategist for <br />
                        <span className="text-gradient">Modern E-commerce Brands</span>
                    </h1>
                    <p>
                        Helping brands scale through growth strategy, lifecycle marketing, paid acquisition, and AI-driven search optimisation.
                    </p>
                    <div className="hero-cta-group" style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                        <Link to="/contact" className="btn btn-primary">
                            Let's Talk <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <Link to="/case-studies" className="btn btn-secondary">
                            View Case Studies
                        </Link>
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
            <section className="section">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid-4"
                >
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={160} prefix="£" suffix="K+" />
                        </h3>
                        <p>Revenue Generated</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={40} suffix="%" />
                        </h3>
                        <p>Avg. Email Open Rate</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={5} suffix="x" />
                        </h3>
                        <p>Return on Ad Spend</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="card text-center" style={{ textAlign: 'center' }}>
                        <h3 className="text-gradient-accent" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>
                            <Counter from={0} to={15} suffix="+" />
                        </h3>
                        <p>Growth Projects Delivered</p>
                    </motion.div>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "0.85rem",
                        textAlign: "center",
                        marginTop: "1.5rem",
                        color: "var(--text-secondary)"
                    }}
                >
                    Revenue generated across lifecycle marketing and paid acquisition projects.
                </motion.p>
            </section>

            {/* Services Overview Section */}
            <section className="section" style={{ position: 'relative' }}>
                <div className="watermark-text">EXPERTISE</div>
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
                        <p>Comprehensive roadmaps tailored for e-commerce and startups seeking aggressive, sustainable growth.</p>
                    </div>
                    <div className="card">
                        <Mail size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Email Marketing & Automation</h3>
                        <p>Advanced segmentation, lifecycle flows, and campaign management that converts and retains.</p>
                    </div>
                    <div className="card">
                        <BarChart size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Paid Advertising</h3>
                        <p>Data-driven ad campaigns optimized for ROAS and scale across paid social and search channels.</p>
                    </div>
                    <div className="card">
                        <Cpu size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>AI & Automation Systems</h3>
                        <p>Implementing AI-powered tools and automation systems to streamline marketing workflows and improve performance.</p>
                    </div>
                    <div className="card">
                        <Maximize size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>Creative Direction</h3>
                        <p>Guiding visual communication and branding to ensure consistent, high-converting assets.</p>
                    </div>
                    <div className="card">
                        <ArrowRightLeft size={32} className="text-gradient-accent" style={{ marginBottom: '1rem' }} />
                        <h3>E-commerce Platform Migration</h3>
                        <p>Supporting brands transitioning from WooCommerce or custom platforms to Shopify, ensuring a smooth migration while preserving store structure, SEO foundations, and operational workflows.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
