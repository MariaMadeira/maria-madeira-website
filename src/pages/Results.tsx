import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useInView } from "../hooks/useInView";

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

export default function Results() {
    const { ref: emailRef, inView: emailInView } = useInView({ rootMargin: '-50px', once: true });
    const { ref: paidRef, inView: paidInView } = useInView({ rootMargin: '-50px', once: true });

    const emailMetrics = [
        { label: "Revenue generated from email marketing", to: 110, prefix: "£", suffix: "K+", decimals: 0 },
        { label: "Average open rate", to: 48, prefix: "", suffix: "%", decimals: 0 },
        { label: "Click rate from automated flows", to: 9.14, prefix: "", suffix: "%", decimals: 2 },
        { label: "Revenue generated from automated email flows", to: 45.8, prefix: "£", suffix: "K+", decimals: 1 }
    ];

    const paidMetrics: Array<{ label: string; to: number; prefix: string; suffix: string; decimals: number; subtitle: string; range?: string }> = [
        { label: "Google Ads ROAS", to: 4.9, prefix: "", suffix: "x", decimals: 1, subtitle: "Scaling spend while maintaining profitability." },
        { label: "Conversions Generated", to: 923, prefix: "", suffix: "+", decimals: 0, subtitle: "High-intent customer acquisition." },
        { label: "Revenue Attributed", to: 51.9, prefix: "£", suffix: "K+", decimals: 1, subtitle: "Directly attributed Google Ads revenue." },
        { label: "Meta Ads ROAS", to: 5.34, prefix: "", suffix: "x", decimals: 2, range: "3.4x – 5.34x", subtitle: "Range across active campaigns." }
    ];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Helmet>
                <title>Results | Email £110K+ · Google Ads 4.9x ROAS · Meta Ads 5.34x | Maria Madeira</title>
                <meta name="description" content="See the measurable results: £110K+ email revenue, 48% open rates, 4.9x Google Ads ROAS and 3.4x – 5.34x Meta Ads ROAS." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Results | Maria Madeira" />
                <meta property="og:description" content="£110K+ email revenue, 48% open rates, 4.9x Google Ads ROAS — measurable results from data-driven e-commerce growth strategies." />
                <meta property="og:image" content="/MM.png" />
                <meta property="og:url" content="https://mariamadeira.com/results" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Results | Maria Madeira" />
                <meta name="twitter:description" content="£110K+ email revenue, 48% open rates, 4.9x Google Ads ROAS — measurable e-commerce growth results." />
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

            <div
                ref={emailRef as React.RefObject<HTMLDivElement>}
                className={`grid-2 stagger-container${emailInView ? ' is-visible' : ''}`}
            >
                {emailMetrics.map((stat, i) => (
                    <div
                        key={i}
                        className="card impact-card reveal-item hover-lift-sm"
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
                            <AnimatedCounter from={0} to={stat.to} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
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
                    </div>
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "6rem", marginBottom: "3rem" }}>
                <h2 className="section-title" style={{ marginBottom: "1rem", fontSize: "2rem" }}>
                    Paid Advertising <span className="text-gradient-accent">Performance</span>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
                    Maximizing efficiency and scale across Google Ads and Meta Ads with data-driven optimization.
                </p>
            </div>

            <div
                ref={paidRef as React.RefObject<HTMLDivElement>}
                className={`grid-4 stagger-container${paidInView ? ' is-visible' : ''}`}
            >
                {paidMetrics.map((stat, i) => (
                    <div
                        key={i}
                        className="card impact-card reveal-item hover-lift-sm"
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
                            {stat.range
                                ? stat.range
                                : <AnimatedCounter from={0} to={stat.to} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
                            }
                        </h3>
                        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                            {stat.label}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                            {stat.subtitle}
                        </p>
                    </div>
                ))}
            </div>

            <div className="reveal" style={{ maxWidth: "700px", margin: "32px auto 0", textAlign: "center" }}>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                    Campaign management focused on optimisation, targeting improvements, and performance monitoring across Google Ads and Meta Ads.
                </p>
            </div>

            {/* Bridge to Case Studies */}
            <section style={{ marginTop: '8rem', textAlign: 'center' }}>
                <h2 className="section-title" style={{ marginBottom: "1.5rem", fontSize: '2rem' }}>
                    Want to see the <span className="text-gradient">detail behind</span> these numbers?
                </h2>
                <div className="grid-3" style={{ marginTop: '3rem' }}>
                    <Link to="/case-study-email" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Email Growth Case Study</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>How we generated £110K+ through lifecycle automation and advanced segmentation.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                    <Link to="/case-study-google-ads" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Paid Acquisition Deep-Dive</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>4.9x Google Ads ROAS and 3.4x – 5.34x Meta Ads ROAS through data-driven targeting and creative testing.</p>
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
            <div className="results-cta reveal">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Want results like these?</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                    Let's discuss how we can implement data-driven strategies to grow your e-commerce brand.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                    Let's Talk <ArrowRight size={20} style={{ marginLeft: "10px" }} />
                </Link>
            </div>
        </div>
    );
}
