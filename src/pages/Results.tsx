import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
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

    // Verified Klaviyo data, last 12 months (Jul 2024 – Jul 2025). The 2024
    // calendar-year flow click rate was 9.14%; the 12-month figure is 7.27%.
    const emailMetrics = [
        { label: "Attributed email revenue (last 12 months, +88.9% YoY)", to: 134, prefix: "£", suffix: "K", decimals: 0 },
        { label: "Average campaign open rate (78th percentile)", to: 50.4, prefix: "", suffix: "%", decimals: 1 },
        { label: "Click rate from automated flows", to: 7.27, prefix: "", suffix: "%", decimals: 2 },
        { label: "Revenue generated from automated email flows", to: 48.3, prefix: "£", suffix: "K", decimals: 1 }
    ];

    const paidMetrics: Array<{ label: string; to: number; prefix: string; suffix: string; decimals: number; subtitle: string; range?: string }> = [
        { label: "Google Ads Conversion Value", to: 125, prefix: "£", suffix: "K", decimals: 0, subtitle: "From £23.4K spend, Sept 2025 – Jul 2026." },
        { label: "Google Ads ROAS", to: 5.34, prefix: "", suffix: "x", decimals: 2, subtitle: "£125K conversion value on £23.4K spend." },
        { label: "Cost per Conversion", to: 11.70, prefix: "£", suffix: "", decimals: 2, subtitle: "Across 2,000 Google Ads conversions." },
        { label: "Meta Ads ROAS", to: 5.34, prefix: "", suffix: "x", decimals: 2, range: "3.4x – 5.34x", subtitle: "Range across active campaigns." }
    ];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Results: £134K Email Revenue (12-Month)"
                description="Measurable e-commerce growth results: £134K in email revenue (+88.9% YoY), a 50.4% average open rate, £125K in Google Ads conversion value at a 5.34x return, and Meta Ads at 3.4x to 5.34x ROAS."
                path="/results"
            />

            {/* Page intro */}
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
                    Results <span className="text-gradient">That Speak</span>
                </h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
                    Every number below is directly attributed to strategy, execution, and optimisation, across email marketing and paid advertising campaigns.
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
                    Maximising efficiency and scale across Google Ads and Meta Ads with data-driven optimisation.
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
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>How we generated £134K through lifecycle automation and advanced segmentation.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                    <Link to="/case-study-google-ads" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Paid Acquisition Deep-Dive</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>£125K in Google Ads conversion value at a 5.34x return, and 3.4x – 5.34x Meta Ads ROAS through data-driven targeting and creative testing.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                    <Link to="/case-study-seo" className="card glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h4 style={{ marginBottom: '1rem' }}>SEO & Organic Scaling</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Building sustainable long-term growth through content and technical optimisation.</p>
                        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.85rem', marginTop: '1rem', display: 'block' }}>Read full story →</span>
                    </Link>
                </div>
            </section>

            {/* Testimonial */}
            <div style={{ margin: "6rem auto 0", maxWidth: "760px", background: "var(--bg-secondary)", borderRadius: "24px", padding: "3.5rem", border: "1px solid var(--border-color)" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", color: "var(--text-secondary)", marginBottom: "2rem" }}>
                    "Maria's expertise in design, digital marketing, and tools like Klaviyo consistently took our campaigns to the next level — both visually and in terms of results. She has a real knack for aligning creative ideas with marketing goals. Detail-oriented, innovative, and a great team player."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                        width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                        background: "var(--accent-glow)", border: "1px solid var(--accent-primary)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, fontSize: "0.85rem", color: "var(--accent-secondary)",
                    }}>AS</div>
                    <div>
                        <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.2rem" }}>Adel Sidiqi</p>
                        <p style={{ fontSize: "0.82rem", color: "var(--accent-secondary)", fontWeight: 600 }}>Digital Marketing Manager at Ocado Zoom · Former colleague</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="results-cta reveal">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Want results like these?</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                    Let's discuss how we can implement data-driven strategies to grow your business online.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                    Let's Talk <ArrowRight size={20} style={{ marginLeft: "10px" }} />
                </Link>
            </div>
        </div>
    );
}
