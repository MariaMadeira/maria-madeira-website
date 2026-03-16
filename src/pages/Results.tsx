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
        <div className="container animate-fade-in" style={{ padding: "6rem 0" }}>
            <Helmet>
                <title>Results | Maria Madeira — Email & Paid Advertising Performance</title>
                <meta name="description" content="See the measurable results: £100K+ email revenue, 48% open rates, 4.9x ROAS across Google Ads and Meta Ads campaigns." />
            </Helmet>

            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Email Marketing <span className="text-gradient-accent">Metrics</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
                    Tangible business outcomes driven by advanced lifecycle flows, meticulous A/B testing, and robust list segmentation strategies.
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
                        className="card"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(59, 49, 44, 0.08)" }}
                        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "3rem 2rem" }}
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
                        <p style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--text-primary)", margin: 0, maxWidth: "250px" }}>
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <div style={{ textAlign: "center", marginTop: "8rem", marginBottom: "5rem" }}>
                <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Paid Advertising <span className="text-gradient-accent">Performance</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
                    Selected performance metrics from paid media campaigns across Google Ads and Meta Ads.
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
                        className="card"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(59, 49, 44, 0.08)" }}
                        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "3rem 2rem" }}
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
                        <p style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--text-primary)", margin: 0, maxWidth: "250px" }}>
                            {stat.label}
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
