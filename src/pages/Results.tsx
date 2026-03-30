import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface CounterProps {
    from: number;
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

export default function Results() {
    const emailMetrics = [
        { label: "Revenue generated from email marketing", to: 100, prefix: "£", suffix: "K+", decimals: 0 },
        { label: "Average open rate", to: 48, prefix: "", suffix: "%", decimals: 0 },
        { label: "Click rate from automated flows", to: 8.5, prefix: "", suffix: "%", decimals: 1 },
        { label: "Revenue generated from automated email flows", to: 45, prefix: "£", suffix: "K+", decimals: 0 }
    ];

    const paidMetrics = [
        { label: "Return on Ad Spend (ROAS)", to: 4.9, prefix: "", suffix: "x", decimals: 1 },
        { label: "Conversions Generated", to: 928, prefix: "", suffix: "+", decimals: 0 },
        { label: "Revenue Attributed", to: 59, prefix: "£", suffix: "K+", decimals: 0 }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>Results | Maria Madeira — Email & Paid Advertising Performance</title>
                <meta name="description" content="See the measurable results: £100K+ email revenue, 48% open rates, 4.9x Google Ads ROAS and 3.1x Meta Ads ROAS." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Results | Maria Madeira" />
                <meta property="og:description" content="£100K+ email revenue, 48% open rates, 4.9x Google Ads ROAS — measurable results from data-driven e-commerce growth strategies." />
                <meta property="og:image" content="/MM.png" />
                <meta property="og:url" content="https://mariamadeira.com/results" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Results | Maria Madeira" />
                <meta name="twitter:description" content="£100K+ email revenue, 48% open rates, 4.9x Google Ads ROAS — measurable e-commerce growth results." />
                <meta name="twitter:image" content="/MM.png" />
            </Helmet>

            {/* Page intro */}
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Results <span className="text-gradient">That Speak</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
                    Every number below is directly attributed to strategy, execution, and optimisation — across email marketing and paid advertising campaigns.
                </p>
            </div>

            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>
                    Email Marketing <span className="text-gradient-accent">Metrics</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
                    Driving high-intent traffic and recovering lost revenue through advanced lifecycle flows and segmentation.
                </p>
            </div>

            <motion.div
                className="grid-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {emailMetrics.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="card impact-card"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(59, 49, 44, 0.12)" }}
                        style={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            textAlign: "center", 
                            padding: "3.5rem 2rem",
                            border: "1px solid var(--border-color)",
                            background: "var(--bg-primary)"
                        }}
                    >
                        <h3 className="text-gradient-accent" style={{ fontSize: "4rem", marginBottom: "0.5rem", lineHeight: 1 }}>
                            <Counter
                                from={0}
                                to={stat.to}
                                decimals={stat.decimals}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                            />
                        </h3>
                        <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                            {stat.label}
                        </p>
                        <div style={{ width: '40px', height: '2px', background: 'var(--accent-secondary)', margin: '1rem 0', opacity: 0.4 }}></div>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "300px" }}>
                            {i === 0 && "Substantial growth in direct sales from Klaviyo campaigns."}
                            {i === 1 && "Outperforming industry averages by 2.5x."}
                            {i === 2 && "Highly targeted automated systems that never sleep."}
                            {i === 3 && "Passive income streams built through customer journey mapping."}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <div style={{ textAlign: "center", marginTop: "6rem", marginBottom: "3rem" }}>
                <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>
                    Paid Advertising <span className="text-gradient-accent">Performance</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
                    Maximizing efficiency and scale across Google Ads and Meta Ads with data-driven optimization.
                </p>
            </div>

            <motion.div
                className="grid-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {paidMetrics.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="card impact-card"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(59, 49, 44, 0.12)" }}
                        style={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            textAlign: "center", 
                            padding: "3rem 2rem",
                            border: "1px solid var(--border-color)",
                            background: "var(--bg-primary)" 
                        }}
                    >
                        <h3 className="text-gradient-accent" style={{ fontSize: "3.5rem", marginBottom: "1rem", lineHeight: 1 }}>
                            <Counter
                                from={0}
                                to={stat.to}
                                decimals={stat.decimals}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                            />
                        </h3>
                        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                            {stat.label}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                            {i === 0 && "Scaling spend while maintaining profitability."}
                            {i === 1 && "High-intent customer acquisition."}
                            {i === 2 && "Measurable return on every pound spent."}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                style={{ maxWidth: "700px", margin: "32px auto 0", textAlign: "center" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                    Campaign management focused on optimisation, targeting improvements, and performance monitoring across Google Ads and Meta Ads.
                </p>
            </motion.div>

            {/* Bridge to Case Studies */}
            <section style={{ marginTop: '8rem', textAlign: 'center' }}>
                <h2 className="section-title" style={{ marginBottom: "1.5rem", fontSize: '2rem' }}>
                    Want to see the <span className="text-gradient">detail behind</span> these numbers?
                </h2>
                <div className="grid-3" style={{ marginTop: '3rem' }}>
                    <Link to="/case-study-email" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Email Growth Case Study</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>How we generated £100K+ through lifecycle automation and advanced segmentation.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                    <Link to="/case-study-google-ads" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Paid Acquisition Deep-Dive</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>4.9x Google Ads ROAS and 3.1x Meta Ads ROAS through data-driven targeting and creative testing.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                    <Link to="/case-study-seo" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>SEO & Organic Scaling</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Building sustainable long-term growth through content and technical optimisation.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <motion.div
                className="results-cta"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Want results like these?</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                    Let's discuss how we can implement data-driven strategies to grow your e-commerce brand.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                    Let's Talk <ArrowRight size={20} style={{ marginLeft: "10px" }} />
                </Link>
            </motion.div>
        </div>
    );
}
