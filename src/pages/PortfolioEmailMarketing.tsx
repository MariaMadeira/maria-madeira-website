import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Mail, RefreshCw, ShoppingCart, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PortfolioEmailMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const lifecycleStages = [
        { from: "Subscriber", flow: "Welcome Series", icon: <Mail size={20} /> },
        { from: "Visitor", flow: "Browse Abandonment", icon: <Zap size={20} /> },
        { from: "Checkout", flow: "Abandoned Checkout", icon: <ShoppingCart size={20} /> },
        { from: "Customer", flow: "Post Purchase Flow", icon: <Star size={20} /> },
        { from: "Repeat Customer", flow: "Replenishment Flow", icon: <RefreshCw size={20} /> },
        { from: "Inactive Customer", flow: "Win Back Flow", icon: <Users size={20} /> },
    ];

    const keyFlows = [
        {
            title: "Welcome Series",
            icon: <Mail size={28} />,
            description: "Onboards new subscribers and introduces the brand, building trust from the first touchpoint and driving the first purchase."
        },
        {
            title: "Browse Abandonment",
            icon: <Zap size={28} />,
            description: "Re-engages visitors who browsed products but didn't add to cart, keeping the brand top-of-mind and recovering intent."
        },
        {
            title: "Abandoned Checkout",
            icon: <ShoppingCart size={28} />,
            description: "Recovers lost sales from customers who started checkout but didn't complete their purchase — a high-ROI flow."
        },
        {
            title: "Post Purchase Flow",
            icon: <Star size={28} />,
            description: "Follows up after a purchase to thank customers, encourage reviews, and introduce complementary products."
        },
        {
            title: "Replenishment Flow",
            icon: <RefreshCw size={28} />,
            description: "Timed reminders sent to repeat customers when they're likely to run out of a product, driving repeat purchases."
        },
        {
            title: "Win Back Flow",
            icon: <Users size={28} />,
            description: "Re-activates lapsed customers who haven't purchased in a defined period with tailored incentives and messaging."
        },
    ];

    const segments = [
        {
            name: "Ox Customers",
            description: "Customers who purchased ox products, enabling targeted content around relevant cuts, recipes and promotions."
        },
        {
            name: "Liver & Kidney Customers",
            description: "Customers with a preference for offal cuts, allowing for highly relevant messaging and cross-sell opportunities."
        },
    ];

    const contentFlows = [
        {
            title: "Recipe & Inspiration Flow",
            description: "Sent to customers after purchase to provide recipe ideas and cooking inspiration, building brand affinity and encouraging repeat engagement."
        },
        {
            title: "The Black Farmer Kitchen",
            description: "A content-led email series aligned with the brand's identity, celebrating produce and storytelling to deepen customer connection."
        },
        {
            title: "Birthday Email",
            description: "A personalised email sent on a customer's birthday with a special offer, reinforcing loyalty and driving incremental purchases."
        },
    ];

    return (
        <div className="container animate-fade-in portfolio-page-inner" style={{ padding: "6rem 0", background: "var(--bg-primary)" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

                {/* Navigation */}
                <Link
                    to="/portfolio"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.9rem",
                        color: "var(--accent-secondary)",
                        marginBottom: "3rem",
                        fontWeight: 500,
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                {/* Header */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ marginBottom: "5rem" }}
                >
                    <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
                        <h1 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            marginBottom: "1rem",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em"
                        }}>
                            Lifecycle Email Marketing System
                        </h1>
                        <p style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.2rem",
                            letterSpacing: "0.2em",
                            color: "var(--accent-secondary)",
                            textTransform: "uppercase",
                            margin: 0,
                            fontWeight: 500
                        }}>
                            Email Automation & Retention Strategy
                        </p>
                    </div>

                    <div style={{ height: "1px", background: "var(--border-color)", marginBottom: "2.5rem" }} />

                    <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Category</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>Email Marketing Strategy</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Platform</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>Klaviyo</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>Focus</p>
                            <p style={{ fontWeight: 600, fontFamily: "var(--font-sans)" }}>Retention & Revenue Automation</p>
                        </div>
                    </div>
                </motion.header>

                {/* 1. Project Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                        Project Overview
                    </h2>
                    <div style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300
                    }}>
                        <p style={{ marginBottom: "1rem" }}>
                            Designed and implemented a lifecycle email marketing system for an e-commerce brand using Klaviyo.
                        </p>
                        <p>
                            The objective was to increase customer retention, recover abandoned purchases and generate consistent revenue through automated email flows that support every stage of the customer journey.
                        </p>
                    </div>
                </motion.section>

                {/* 2. Lifecycle Strategy */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Lifecycle Strategy
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        The lifecycle email system was designed to support the entire customer journey using automation. Each flow guides customers through the funnel while encouraging conversions and repeat purchases.
                    </motion.p>

                    {/* Lifecycle flow diagram */}
                    <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {lifecycleStages.map((stage, i) => (
                            <div key={i} className="lifecycle-row" style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
                                {/* Left: customer stage label */}
                                <div className="lifecycle-label" style={{
                                    width: "200px",
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    paddingRight: "1.5rem",
                                    paddingTop: "1rem",
                                    paddingBottom: "1rem"
                                }}>
                                    <span style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.85rem",
                                        color: "var(--text-secondary)",
                                        fontWeight: 500,
                                        textAlign: "right"
                                    }}>
                                        {stage.from}
                                    </span>
                                </div>

                                {/* Centre: connector + dot */}
                                <div className="lifecycle-connector" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
                                    <div style={{
                                        width: "1px",
                                        flex: i === 0 ? "0 0 50%" : "0 0 50%",
                                        background: i === 0 ? "transparent" : "var(--border-color)"
                                    }} />
                                    <div style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        background: "var(--accent-secondary)",
                                        flexShrink: 0,
                                        border: "2px solid white",
                                        boxShadow: "0 0 0 2px var(--accent-secondary)"
                                    }} />
                                    <div style={{
                                        width: "1px",
                                        flex: i === lifecycleStages.length - 1 ? "0 0 50%" : "1",
                                        background: i === lifecycleStages.length - 1 ? "transparent" : "var(--border-color)"
                                    }} />
                                </div>

                                {/* Right: flow card */}
                                <div className="lifecycle-card-wrapper" style={{
                                    flex: 1,
                                    paddingLeft: "1.5rem",
                                    paddingTop: "0.75rem",
                                    paddingBottom: "0.75rem",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    <div className="lifecycle-card" style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        background: "white",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "12px",
                                        padding: "0.75rem 1.25rem",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                                    }}>
                                        <span style={{ color: "var(--accent-secondary)" }}>{stage.icon}</span>
                                        <span style={{
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                            color: "var(--text-primary)"
                                        }}>
                                            {stage.flow}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* 3. Key Automation Flows */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Key Automation Flows
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        Six core automation flows were built to cover the full customer lifecycle, each with a distinct purpose and targeted messaging strategy.
                    </motion.p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {keyFlows.map((flow, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                style={{
                                    background: "white",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "20px",
                                    padding: "2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem"
                                }}
                            >
                                <div style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: "var(--bg-secondary)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent-secondary)"
                                }}>
                                    {flow.icon}
                                </div>
                                <h3 style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "var(--text-primary)",
                                    margin: 0
                                }}>
                                    {flow.title}
                                </h3>
                                <p style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.95rem",
                                    lineHeight: 1.7,
                                    color: "var(--text-secondary)",
                                    margin: 0,
                                    fontWeight: 300
                                }}>
                                    {flow.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 4. Segmentation Strategy */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem", background: "white", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Segmentation Strategy
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "2.5rem"
                    }}>
                        Advanced segmentation was implemented based on customer purchase behaviour, enabling targeted communication and more relevant messaging for each audience group.
                    </motion.p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {segments.map((seg, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                style={{
                                    display: "flex",
                                    gap: "1.5rem",
                                    alignItems: "flex-start",
                                    padding: "1.5rem",
                                    background: "var(--bg-secondary)",
                                    borderRadius: "16px",
                                    border: "1px solid var(--border-color)"
                                }}
                            >
                                <div style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: "var(--accent-secondary)",
                                    flexShrink: 0,
                                    marginTop: "0.5rem"
                                }} />
                                <div>
                                    <h3 style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        {seg.name}
                                    </h3>
                                    <p style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.95rem",
                                        lineHeight: 1.7,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                        fontWeight: 300
                                    }}>
                                        {seg.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. Content & Engagement Flows */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={stagger}
                    style={{ marginBottom: "6rem" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>
                        Content & Engagement Flows
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        fontWeight: 300,
                        marginBottom: "3rem"
                    }}>
                        Beyond transactional automation, additional flows were created to increase engagement and maintain ongoing communication with customers.
                    </motion.p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {contentFlows.map((flow, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    alignItems: "flex-start",
                                    borderBottom: i < contentFlows.length - 1 ? "1px solid var(--border-color)" : "none",
                                    paddingBottom: i < contentFlows.length - 1 ? "1.5rem" : "0"
                                }}
                            >
                                <div style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    color: "var(--border-color)",
                                    flexShrink: 0,
                                    lineHeight: 1,
                                    paddingTop: "0.25rem",
                                    minWidth: "2rem"
                                }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        marginBottom: "0.5rem"
                                    }}>
                                        {flow.title}
                                    </h3>
                                    <p style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.95rem",
                                        lineHeight: 1.7,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                        fontWeight: 300
                                    }}>
                                        {flow.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 6. Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    style={{ marginBottom: "6rem" }}
                >
                    <div className="impact-block" style={{
                        background: "var(--bg-secondary)",
                        padding: "4rem",
                        borderRadius: "24px",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        gap: "2rem",
                        alignItems: "flex-start"
                    }}>
                        <CheckCircle2 style={{ color: "var(--accent-secondary)", flexShrink: 0 }} size={40} />
                        <div>
                            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "2rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                                Impact
                            </h2>
                            <div style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "var(--text-secondary)"
                            }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    The lifecycle automation system became a consistent revenue driver for the brand.
                                </p>
                                <p style={{ marginBottom: "1rem" }}>
                                    Key flows such as the Welcome Series, Browse Abandonment and Abandoned Checkout played a major role in recovering lost sales and converting subscribers into customers.
                                </p>
                                <p>
                                    Content-driven flows also helped maintain engagement and strengthen brand loyalty over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Footer CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: "center", paddingTop: "4rem", borderTop: "1px solid var(--border-color)" }}
                >
                    <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                        Ready to build a retention system for your brand?
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "50px" }}>
                        Let's Discuss Your Project
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
