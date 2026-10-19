import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowLeft, Clock, ArrowRight, UserPlus, Eye, ShoppingCart, PackageCheck, RefreshCw, Moon, Cake, Mail, Undo2 } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import { EMAIL_PERIODS } from "../data/emailRevenue";

const SITE_URL = "https://mariamadeira.com";
const PATH = "/blog/klaviyo-flows-vs-campaigns";
const PAGE_URL = `${SITE_URL}${PATH}`;
const HEADLINE = "Why your automated emails earn more than your campaigns";
const DESCRIPTION = "Automated flows are a small share of sends and a large share of email revenue. What the research says, four years of data from a real UK brand, and the flows to build first.";
const OG_IMAGE = "/og/og-blog-klaviyo-automations.png";
const PUBLISHED_ISO = "2026-10-19";
const PUBLISHED_HUMAN = "19 October 2026";
const MODIFIED_ISO = "2026-10-19";
const MODIFIED_HUMAN = "19 October 2026";

const OMNISEND = "https://www.omnisend.com/2026-ecommerce-marketing-report";
const KLAVIYO_BENCHMARKS = "https://www.klaviyo.com/products/email-marketing/benchmarks";
const BAYMARD = "https://baymard.com/lists/cart-abandonment-rate";

/* Colours. Sage green always means automations and flows, against warm
   neutrals for campaigns, so the article reads as one story. A small set of
   muted accents (terracotta, slate, ochre, plum) tells the journey stops,
   flow cards and weeks apart without anything shouting over the brand brown. */
const DEEP = "#724f37";      /* --color-dark-brown */
const SAGE = "#5B7B62";
const LIGHT = "#d1b8a7";     /* --color-light-beige */
const GREY = "#DDD7D0";
const TONES = [
    { fg: SAGE, bg: "rgba(91, 123, 98, 0.13)" },
    { fg: "#A9604B", bg: "rgba(169, 96, 75, 0.12)" },    /* terracotta */
    { fg: "#55708A", bg: "rgba(85, 112, 138, 0.12)" },   /* slate */
    { fg: "#A2823F", bg: "rgba(162, 130, 63, 0.14)" },   /* ochre */
    { fg: "#7D5A76", bg: "rgba(125, 90, 118, 0.12)" },   /* plum */
    { fg: "#B08968", bg: "rgba(176, 137, 104, 0.15)" },  /* --accent-secondary */
];
const tone = (i: number) => TONES[i % TONES.length];
const INK = "#3B312C";       /* --text-primary */
const INK_SOFT = "#6B5B52";  /* --text-secondary */

/* ── Visual 2: the customer journey, in three phases. The two top earners
       are the welcome and abandoned checkout flows (Omnisend: 76% of
       automation orders). ── */
const JOURNEY_PHASES = [
    {
        title: "Before the first order",
        stops: [
            { icon: UserPlus, moment: "Signs up", flow: "Welcome series", when: "Right after sign-up", top: true },
            { icon: Eye, moment: "Browses, doesn't buy", flow: "Browse abandonment", when: "A day after browsing", top: false },
            { icon: ShoppingCart, moment: "Leaves a basket", flow: "Abandoned checkout", when: "Within a few hours", top: true },
        ],
    },
    {
        title: "The first order",
        stops: [
            { icon: PackageCheck, moment: "Buys for the first time", flow: "Thank you and cross-sell", when: "After the order ships", top: false },
        ],
    },
    {
        title: "After",
        stops: [
            { icon: RefreshCw, moment: "Is about to run out", flow: "Replenishment", when: "Before they run out", top: false },
            { icon: Moon, moment: "Goes quiet", flow: "Win-back", when: "After a few quiet months", top: false },
            { icon: Cake, moment: "Has a birthday", flow: "Birthday email", when: "On their birthday", top: false },
        ],
    },
];
const JOURNEY_DESC = `Seven moments in a customer's journey, in three phases, each with the flow that answers it and when it is sent. ${(() => {
    let n = 0;
    return JOURNEY_PHASES.map((ph) => `${ph.title}: ${ph.stops.map((st) => `${++n}. ${st.moment}: ${st.flow}, sent ${st.when.toLowerCase()}${st.top ? " (top earner)" : ""}.`).join(" ")}`).join(" ");
})()} Welcome and abandoned cart emails drove 76% of all orders from automations, according to Omnisend's 2026 Ecommerce Marketing Report.`;

/* ── Visual 3: the flows that do the heavy lifting ── */
const CORE_FLOWS = [
    { icon: Mail, name: "Welcome series", line: "Introduces the brand and turns a sign-up into a first order. Usually three to four emails over the first week." },
    { icon: ShoppingCart, name: "Abandoned checkout", line: "Reminds people what they left behind. The first email works best within a few hours." },
    { icon: Eye, name: "Browse abandonment", line: "A gentler nudge for people who looked at a product but didn't add it to the basket." },
    { icon: PackageCheck, name: "Post-purchase", line: "Thanks the customer, sets expectations for delivery and suggests what goes well with what they bought." },
    { icon: RefreshCw, name: "Replenishment", line: "Arrives when a product is likely to be running out. Ideal for food, coffee and anything people reorder." },
    { icon: Undo2, name: "Win-back", line: "Reaches customers who haven't bought in a while, before they forget you." },
];

/* ── Visual 4: the brand's flows, before and after. 14 live flows in 2025,
       matching "3 → 14" on /case-study-email. ── */
const FLOWS_2021 = ["Welcome", "Browse abandonment", "Thank you"];
const FLOWS_2025 = ["Welcome series (box list)", "Welcome series", "Abandoned checkout", "Browse abandonment", "Thank you", "Cross-sell", "Replenishment", "Win-back", "Post-purchase", "Birthday"];

/* ── Visual 8: the first 30 days ── */
const WEEKS = [
    { week: "Week 1", text: "One list, one sign-up form, a three-email welcome series" },
    { week: "Week 2", text: "Abandoned checkout and browse abandonment" },
    { week: "Week 3", text: "Post-purchase thank-you and a cross-sell email" },
    { week: "Week 4", text: "A simple campaign calendar and a 30-day engaged segment" },
];

/* ── FAQ: drives the visible section and the FAQPage schema from one source,
       so the marked-up text always matches what is on the page. ── */
const FAQS: { q: string; a: string }[] = [
    {
        q: "What is a Klaviyo flow?",
        a: "A flow is an automated series of emails or texts that Klaviyo sends when someone does something specific, such as signing up, leaving a basket or making a first purchase. Unlike a campaign, it runs on its own once it is set up.",
    },
    {
        q: "Are Klaviyo flows better than campaigns?",
        a: "Per email, yes. Omnisend's data across 150,000 brands found automated emails earned 16 times more per send, and a UK food brand's own 2024 data showed the same gap per recipient. Campaigns still reach far more people, so a healthy programme needs both.",
    },
    {
        q: "Which flows should a small Shopify store set up first?",
        a: "A welcome series and abandoned checkout first, then browse abandonment and a post-purchase email. Omnisend found welcome and abandoned cart emails alone drove 76% of orders from automations.",
    },
    {
        q: "What share of email revenue should come from flows?",
        a: "Klaviyo's benchmarks put flows at around 41% of email revenue. If yours bring in much less than a third, flows are usually the first place to look.",
    },
];

const ARTICLE_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "@id": `${PAGE_URL}#article`,
            "headline": HEADLINE,
            "description": DESCRIPTION,
            "author": { "@id": `${SITE_URL}/#person` },
            "publisher": { "@id": `${SITE_URL}/#organization` },
            "datePublished": PUBLISHED_ISO,
            "dateModified": MODIFIED_ISO,
            "mainEntityOfPage": PAGE_URL,
            "image": `${SITE_URL}${OG_IMAGE}`,
            "isPartOf": { "@id": `${SITE_URL}/blog#blog` },
            "articleSection": "Email Marketing",
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": FAQS.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
                { "@type": "ListItem", "position": 3, "name": "Why Klaviyo Flows Earn More Than Campaigns", "item": PAGE_URL },
            ],
        },
    ],
};

/* Shared prose styles for the reading column, matching the other articles. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;
const CAPTION = { color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, margin: "0.85rem 0 0" } as const;

function Ext({ href, children }: { href: string; children: ReactNode }) {
    return <a href={href} target="_blank" rel="noopener" style={linkStyle}>{children}</a>;
}

/**
 * Wrapper for the HTML/CSS visuals. An HTML element cannot carry SVG's <title>
 * and <desc>, so the same pair is given as visually hidden text that the
 * figure's role="img" is labelled and described by. The visible text stays in
 * the prerendered HTML for crawlers either way.
 */
function Visual({ id, title, desc, children, className }: { id: string; title: string; desc: string; children: ReactNode; className?: string }) {
    return (
        <div role="img" aria-labelledby={`${id}-t`} aria-describedby={`${id}-d`} className={className}>
            <span id={`${id}-t`} className="kfc-sr-only">{title}</span>
            <span id={`${id}-d`} className="kfc-sr-only">{desc}</span>
            {children}
        </div>
    );
}

/* ── Visual 1: one 100% stacked bar, in HTML so its labels keep their size
       at any width ── */
function ShareBar({ id, label, auto }: { id: string; label: string; auto: number }) {
    return (
        <Visual id={id} title={label} desc={`${label}: automations ${auto}%, campaigns ${100 - auto}%.`}>
            <p style={{ fontWeight: 700, color: INK, margin: "0 0 0.6rem" }}>{label}</p>
            <div style={{ display: "flex", height: "34px", borderRadius: "6px", overflow: "hidden", background: GREY }}>
                <div style={{ width: `${Math.max(auto, 1.5)}%`, background: SAGE }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "0.6rem", fontSize: "0.92rem" }}>
                <span style={{ fontWeight: 700, color: SAGE }}>Automations {auto}%</span>
                <span style={{ color: INK_SOFT }}>Campaigns {100 - auto}%</span>
            </div>
        </Visual>
    );
}

/* ── Visual 5: email revenue by period, flows at the base. Two drawings, as
       the case study charts do: vertical bars wide, horizontal bars narrow. ── */
const REV_DESC = `Stacked bar chart of Klaviyo attributed email revenue by period, in thousands of pounds, split between automated flows and campaigns. ${EMAIL_PERIODS.map((p) => `${p.lines.join(" ")}: flows £${p.flows}K, campaigns £${p.campaigns}K, total ${p.total}`).join("; ")}.`;
const REV_MAX = 150;

function RevenueWide() {
    const L = 54, R = 750, T = 34, B = 290, plotH = B - T, band = (R - L) / EMAIL_PERIODS.length, bw = 70;
    const y = (v: number) => B - (v / REV_MAX) * plotH;
    return (
        <svg viewBox="0 0 760 350" width="100%" role="img" aria-labelledby="kfc-rev-w-t kfc-rev-w-d" className="kfc-wide" style={{ overflow: "visible" }}>
            <title id="kfc-rev-w-t">Email revenue by period, flows and campaigns</title>
            <desc id="kfc-rev-w-d">{REV_DESC}</desc>
            {[0, 50, 100, 150].map((t) => (
                <g key={t}>
                    <line x1={L} x2={R} y1={y(t)} y2={y(t)} stroke="#E8E2DB" />
                    <text x={L - 10} y={y(t) + 4} fontSize="13" fill={INK_SOFT} textAnchor="end">£{t}K</text>
                </g>
            ))}
            {EMAIL_PERIODS.map((p, i) => {
                const cx = L + band * i + band / 2, x = cx - bw / 2;
                return (
                    <g key={p.total}>
                        <rect x={x} y={y(p.flows)} width={bw} height={B - y(p.flows)} fill={SAGE} />
                        <rect x={x} y={y(p.flows + p.campaigns)} width={bw} height={y(p.flows) - y(p.flows + p.campaigns)} fill={LIGHT} />
                        <text x={cx} y={y(p.flows + p.campaigns) - 9} fontSize="15" fontWeight="700" fill={INK} textAnchor="middle">{p.total}</text>
                        {p.lines.map((ln, j) => (
                            <text key={ln} x={cx} y={B + 22 + j * 17} fontSize="13" fill={INK_SOFT} textAnchor="middle">{ln}</text>
                        ))}
                    </g>
                );
            })}
        </svg>
    );
}

function RevenueNarrow() {
    const L = 0, W = 300, rowH = 62;
    const x = (v: number) => L + (v / REV_MAX) * W;
    return (
        <svg viewBox={`0 0 360 ${EMAIL_PERIODS.length * rowH + 4}`} width="100%" role="img" aria-labelledby="kfc-rev-n-t kfc-rev-n-d" className="kfc-narrow" style={{ overflow: "visible" }}>
            <title id="kfc-rev-n-t">Email revenue by period, flows and campaigns</title>
            <desc id="kfc-rev-n-d">{REV_DESC}</desc>
            {EMAIL_PERIODS.map((p, i) => {
                const top = i * rowH;
                return (
                    <g key={p.total}>
                        <text x="0" y={top + 16} fontSize="14" fill={INK_SOFT}>{p.lines.join(" ")}</text>
                        <rect x={x(0)} y={top + 24} width={x(p.flows) - x(0)} height="24" fill={SAGE} />
                        <rect x={x(p.flows)} y={top + 24} width={x(p.flows + p.campaigns) - x(p.flows)} height="24" fill={LIGHT} />
                        <text x={x(p.flows + p.campaigns) + 8} y={top + 41} fontSize="14" fontWeight="700" fill={INK}>{p.total}</text>
                    </g>
                );
            })}
        </svg>
    );
}

/* ── Visual 6: revenue per recipient, campaign = 1, automated = 16 ── */
function PerRecipientBars() {
    return (
        <Visual id="kfc-16x" title="Revenue per recipient, 2024" desc="Revenue per recipient in 2024 at a UK food brand: an automated email earned about 16 times more than a campaign email. The campaign bar is 1 unit long and the automated bar 16 units.">
            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: INK_SOFT, margin: "0 0 1rem" }}>Revenue per recipient, 2024</p>
            <p style={{ color: INK, margin: "0 0 0.4rem" }}>Campaign email</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: `${100 / 16}%`, minWidth: "14px", height: "24px", borderRadius: "4px", background: GREY }} />
                <span style={{ fontSize: "0.9rem", fontWeight: 700, color: INK_SOFT }}>1x</span>
            </div>
            <p style={{ color: INK, margin: "0 0 0.4rem" }}>Automated email</p>
            <div style={{ height: "24px", borderRadius: "4px", background: SAGE, color: "#fff", fontSize: "0.9rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "0.6rem" }}>16x</div>
        </Visual>
    );
}

export default function BlogKlaviyoFlowsVsCampaigns() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Why Klaviyo Flows Earn More Than Campaigns | Maria Madeira"
                description={DESCRIPTION}
                path={PATH}
                ogImage={OG_IMAGE}
                jsonLd={ARTICLE_JSON_LD}
            />

            <style>{`
                .kfc-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
                .kfc-visual { margin: 2rem 0; padding: clamp(1.25rem, 3vw, 2rem); background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; }
                .kfc-visual-title { font-family: var(--font-heading); font-size: 1.15rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1.5rem; }
                .kfc-two { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem 2.5rem; }
                .kj-phases { display: grid; grid-template-columns: 3fr 1.15fr 3fr; gap: 0.75rem; position: relative; }
                .kj-phase { background: rgba(176, 137, 104, 0.07); border-radius: 12px; padding: 0 0.5rem 1rem; }
                .kj-phase-title { height: 2.25rem; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 0.68rem; line-height: 1.2; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${INK_SOFT}; margin: 0; }
                .kj-stops { list-style: none; margin: 0; padding: 0; display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 0.5rem; }
                .kj-stop { text-align: center; position: relative; z-index: 1; }
                .kj-badge-row { height: 1.5rem; display: flex; align-items: flex-end; justify-content: center; }
                .kj-top { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; background: ${DEEP}; padding: 2px 8px; border-radius: 999px; white-space: nowrap; }
                .kj-circle { width: 48px; height: 48px; border-radius: 50%; margin: 0.4rem auto 0.7rem; background: #F5EEE6; border: 2px solid ${DEEP}; color: ${DEEP}; display: flex; align-items: center; justify-content: center; position: relative; }
                .kj-circle--top { background: ${DEEP}; color: #fff; }
                .kj-num { position: absolute; top: -6px; right: -9px; width: 20px; height: 20px; border-radius: 50%; background: #fff; border: 1.5px solid ${DEEP}; color: ${DEEP}; font-size: 0.68rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
                .kj-moment { font-size: 0.8rem; color: ${INK_SOFT}; line-height: 1.35; margin: 0 0 0.3rem; }
                .kj-flow { font-size: 0.86rem; font-weight: 700; color: ${INK}; line-height: 1.3; margin: 0 0 0.3rem; }
                .kj-when { font-size: 0.78rem; color: ${DEEP}; line-height: 1.35; margin: 0; }
                .kj-line { position: absolute; left: 3%; right: 6px; top: calc(2.25rem + 1.5rem + 0.4rem + 23px); height: 2px; background: #CBBBAA; z-index: 0; }
                .kj-line::after { content: ""; position: absolute; right: -6px; top: -5px; border-left: 10px solid #CBBBAA; border-top: 6px solid transparent; border-bottom: 6px solid transparent; }
                .kfc-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                .kfc-card { border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem; background: var(--bg-primary); }
                .kfc-card-icon { width: 38px; height: 38px; border-radius: 10px; background: var(--accent-glow); color: var(--accent-secondary); display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem; }
                .kfc-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
                .kfc-tag { font-size: 0.85rem; font-weight: 600; padding: 0.35rem 0.75rem; border-radius: 999px; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-primary); }
                .kfc-tag--more { background: ${SAGE}; border-color: ${SAGE}; color: #fff; }
                .kfc-tag--new { background: rgba(91, 123, 98, 0.1); border-color: rgba(91, 123, 98, 0.35); }
                .kfc-big { font-family: var(--font-heading); font-weight: 700; line-height: 1; color: var(--text-primary); }
                .kfc-legend { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; margin: 0 0 1rem; padding: 0; list-style: none; font-size: 0.88rem; color: var(--text-secondary); }
                .kfc-legend span { display: inline-block; width: 12px; height: 12px; border-radius: 3px; margin-right: 0.45rem; vertical-align: -1px; }
                .kfc-narrow { display: none; }
                .kfc-phone { width: 250px; max-width: 100%; margin: 0 auto; border: 10px solid #2d2926; border-radius: 34px; background: #fff; overflow: hidden; box-shadow: 0 16px 40px rgba(59, 49, 44, 0.12); }
                .kfc-weeks { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
                .kfc-week { border: 1px solid var(--border-color); border-top: 4px solid var(--accent-secondary); border-radius: 12px; padding: 1.1rem; background: var(--bg-primary); }
                /* The journey needs about 840px across; narrower, it runs down the left. */
                @media (max-width: 900px) {
                    .kj-phases { grid-template-columns: 1fr; }
                    .kj-phase { padding: 0 0.75rem 0.9rem; }
                    .kj-phase-title { height: 2rem; justify-content: flex-start; text-align: left; padding-left: 62px; }
                    .kj-stops { grid-auto-flow: row; grid-auto-columns: auto; gap: 1.1rem; }
                    .kj-stop { display: grid; grid-template-columns: 48px 1fr; column-gap: 0.9rem; text-align: left; align-items: start; }
                    .kj-circle { grid-column: 1; grid-row: 1 / span 4; margin: 0; }
                    .kj-badge-row { grid-column: 2; height: auto; justify-content: flex-start; margin-bottom: 0.3rem; }
                    .kj-badge-row:empty { display: none; }
                    .kj-moment, .kj-flow, .kj-when { grid-column: 2; }
                    .kj-line { left: calc(0.75rem + 23px); right: auto; width: 2px; height: auto; top: calc(2rem + 24px); bottom: 1.6rem; }
                    .kj-line::after { right: auto; top: auto; left: -5px; bottom: -8px; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 10px solid #CBBBAA; border-bottom: none; }
                }
                @media (max-width: 720px) {
                    .kfc-two, .kfc-cards, .kfc-weeks { grid-template-columns: 1fr; }
                    .kfc-wide { display: none; }
                    .kfc-narrow { display: block; }
                }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> All articles
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Email marketing · Klaviyo
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    {HEADLINE}
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>Published {PUBLISHED_HUMAN}</span>
                    <span>Updated {MODIFIED_HUMAN}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> 7 min read</span>
                </div>

                {/* Answer-first summary, in the article callout treatment */}
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        Automated emails, called flows in Klaviyo, are a small share of what a brand sends and a large share of what it earns. Across 150,000 brands, <Ext href={OMNISEND}>Omnisend</Ext> found automations were 2% of email sends and 30% of email revenue. At a UK food brand I worked with for four years, flows earned about 16 times more per recipient than campaigns. Here is why, and which flows to build first.
                    </p>
                </div>

                {/* Visual 1 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">Small share of sends, big share of revenue</p>
                    <div className="kfc-two">
                        <ShareBar id="kfc-sends" label="Share of sends" auto={2} />
                        <ShareBar id="kfc-revenue" label="Share of revenue" auto={30} />
                    </div>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.5rem 0 0" }}>
                        Klaviyo's benchmarks show the same pattern: flows generate around 41% of email revenue from 5.3% of sends.
                    </p>
                    <figcaption style={CAPTION}>
                        Sources: Omnisend 2026 Ecommerce Marketing Report (150,000 brands); Klaviyo email marketing benchmarks.
                    </figcaption>
                </figure>

                <h2 style={H2}>A campaign interrupts. A flow answers.</h2>
                <p style={P}>
                    A campaign goes to everyone on your list on the same day, whatever they happen to be doing.
                </p>
                <p style={P}>
                    A flow is triggered by something a customer has just done: signed up, looked at a product, left a basket, bought for the first time, or gone quiet. It arrives when their interest is highest, which is why Omnisend found automated emails converted 19 times better than campaigns.
                </p>
                <p style={P}>
                    And the moments are everywhere. Around 70% of online baskets are abandoned before checkout, according to <Ext href={BAYMARD}>Baymard Institute</Ext>. Every one of them is a moment a flow can answer and a campaign will miss.
                </p>

                {/* Visual 2 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">The customer journey, and the flow for each moment</p>
                    <Visual id="kfc-journey" title="The customer journey, and the flow for each moment" desc={JOURNEY_DESC}>
                        <div className="kj-phases">
                            {JOURNEY_PHASES.map((ph, pi) => (
                                <div key={ph.title} className="kj-phase">
                                    <p className="kj-phase-title">{ph.title}</p>
                                    <ol className="kj-stops" start={JOURNEY_PHASES.slice(0, pi).reduce((n, p) => n + p.stops.length, 0) + 1}>
                                        {ph.stops.map(({ icon: Icon, moment, flow, when, top }, si) => (
                                            <li key={flow} className="kj-stop">
                                                <div className="kj-badge-row">{top && <span className="kj-top">Top earner</span>}</div>
                                                <div className={top ? "kj-circle kj-circle--top" : "kj-circle"}>
                                                    <Icon size={20} aria-hidden="true" />
                                                    <span className="kj-num">{JOURNEY_PHASES.slice(0, pi).reduce((n, p) => n + p.stops.length, 0) + si + 1}</span>
                                                </div>
                                                <p className="kj-moment">{moment}</p>
                                                <p className="kj-flow">{flow}</p>
                                                <p className="kj-when">{when}</p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ))}
                            <div className="kj-line" aria-hidden="true" />
                        </div>
                    </Visual>
                    <p style={CAPTION}>
                        Welcome and abandoned cart emails drove 76% of all orders from automations. Source: Omnisend 2026 Ecommerce Marketing Report.
                    </p>
                </figure>

                <h2 style={H2}>The flows that do the heavy lifting</h2>
                <p style={P}>
                    Omnisend found that abandoned cart and welcome emails alone drove 76% of all orders from automations. Start with those, then add the rest.
                </p>

                {/* Visual 3 */}
                <figure className="kfc-visual">
                    <Visual id="kfc-flows" title="Six core flows" desc={CORE_FLOWS.map((f) => `${f.name}: ${f.line}`).join(" ")}>
                        <div className="kfc-cards">
                            {CORE_FLOWS.map(({ icon: Icon, name, line }, i) => (
                                <div key={name} className="kfc-card">
                                    <div className="kfc-card-icon" style={{ color: tone(i).fg, background: tone(i).bg }}><Icon size={20} aria-hidden="true" /></div>
                                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.4rem" }}>{name}</h3>
                                    <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>{line}</p>
                                </div>
                            ))}
                        </div>
                    </Visual>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.25rem 0 0" }}>
                        <strong>Bonus:</strong> back-in-stock emails had the highest conversion rate of any automation in Omnisend's data, at 6.46%.
                    </p>
                </figure>

                <h2 style={H2}>What this looked like at a real brand</h2>
                <p style={P}>
                    When I started working with a UK food brand in September 2021, it had a customer list, three automated flows and occasional campaign sends. Most email revenue came from one-off promotions.
                </p>
                <p style={P}>
                    Over four years, I built the programme out to 14 live flows, alongside a regular campaign calendar.
                </p>

                {/* Visual 4 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">From 3 flows to 14</p>
                    <Visual id="kfc-3to14" title="From 3 flows to 14" desc={`September 2021: 3 flows (${FLOWS_2021.join(", ")}). 2025: 14 flows, including ${FLOWS_2025.join(", ")}, and 4 more.`} className="kfc-two">
                        <div>
                            <p className="kfc-big" style={{ fontSize: "3.5rem", margin: "0 0 0.25rem", color: "var(--text-secondary)" }}>3</p>
                            <p style={{ fontWeight: 700, color: "var(--text-secondary)", margin: "0 0 1rem" }}>September 2021</p>
                            <div className="kfc-tags">
                                {FLOWS_2021.map((f) => <span key={f} className="kfc-tag">{f}</span>)}
                            </div>
                        </div>
                        <div>
                            <p className="kfc-big" style={{ fontSize: "3.5rem", margin: "0 0 0.25rem", color: SAGE }}>14</p>
                            <p style={{ fontWeight: 700, color: "var(--text-primary)", margin: "0 0 1rem" }}>2025</p>
                            <div className="kfc-tags">
                                {FLOWS_2025.map((f) => <span key={f} className={FLOWS_2021.some((o) => f.startsWith(o)) ? "kfc-tag" : "kfc-tag kfc-tag--new"}>{f}</span>)}
                                <span className="kfc-tag kfc-tag--more">+ 4 more</span>
                            </div>
                        </div>
                    </Visual>
                </figure>

                <p style={P}>
                    Flow revenue grew year after year, from £7.1K in the last four months of 2021 to £48.3K in the twelve months to July 2025.
                </p>

                {/* Visual 5 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">Email revenue by period</p>
                    <ul className="kfc-legend">
                        <li><span style={{ background: SAGE }} />Flows</li>
                        <li><span style={{ background: LIGHT }} />Campaigns</li>
                    </ul>
                    <RevenueWide />
                    <RevenueNarrow />
                    <figcaption style={CAPTION}>
                        Klaviyo attributed revenue. 2021 covers September to December, when the programme started. Source: Klaviyo Business Overview exports.
                    </figcaption>
                </figure>

                {/* Visual 6 */}
                <figure className="kfc-visual">
                    <div className="kfc-two" style={{ alignItems: "center" }}>
                        <p className="kfc-big" style={{ fontSize: "clamp(5rem, 14vw, 8rem)", margin: 0, color: SAGE }}>16x</p>
                        <PerRecipientBars />
                    </div>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.5rem 0 0" }}>
                        Omnisend's data across 150,000 brands found almost exactly the same gap: automated emails earned 16 times more per send.
                    </p>
                </figure>

                <p style={P}>
                    In 2024, flows brought in 43% of this brand's email revenue, very close to the 41% in Klaviyo's benchmarks.
                </p>

                <h2 style={H2}>One flow paid for everything else</h2>
                <p style={P}>
                    The single biggest earner wasn't a clever new automation. It was the welcome series for the brand's box list, which brought in £23.6K in the twelve months to July 2025 on its own.
                </p>

                {/* Visual 7 */}
                <figure className="kfc-visual">
                    <div className="kfc-two" style={{ alignItems: "center" }}>
                        <div style={{ ...calloutBox, padding: "2rem", background: TONES[0].bg, borderLeftColor: SAGE }}>
                            <p className="kfc-big" style={{ fontSize: "clamp(3rem, 8vw, 4rem)", margin: "0 0 0.5rem", color: SAGE }}>£23.6K</p>
                            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>from one welcome series, in twelve months</p>
                        </div>
                        <div>
                            <Visual id="kfc-mock" title="Illustrative welcome email from an invented brand, Hillside Pantry" desc="A phone showing a welcome email. Subject line: Welcome to Hillside Pantry. A neutral product image, the heading Good food, delivered, two short paragraphs and a Shop the range button.">
                                <div className="kfc-phone">
                                    <div style={{ padding: "0.7rem 0.9rem", borderBottom: "1px solid #eee", background: "#faf8f5" }}>
                                        <p style={{ fontSize: "0.62rem", color: INK_SOFT, margin: 0 }}>Hillside Pantry</p>
                                        <p style={{ fontSize: "0.78rem", fontWeight: 700, color: INK, margin: 0 }}>Welcome to Hillside Pantry</p>
                                    </div>
                                    <div style={{ padding: "0.9rem" }}>
                                        <div style={{ height: "110px", borderRadius: "8px", background: "linear-gradient(135deg, #e9e2d8, #d8cbbb)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem" }}>
                                            <div style={{ width: "46px", height: "62px", borderRadius: "6px 6px 4px 4px", background: "#c9b49c", boxShadow: "18px 6px 0 -4px #bfa88f" }} />
                                        </div>
                                        <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: INK, margin: "0 0 0.45rem" }}>Good food, delivered</p>
                                        <p style={{ fontSize: "0.7rem", lineHeight: 1.5, color: INK_SOFT, margin: "0 0 0.4rem" }}>Thanks for joining us. We make small-batch pantry favourites with ingredients we know by name.</p>
                                        <p style={{ fontSize: "0.7rem", lineHeight: 1.5, color: INK_SOFT, margin: "0 0 0.8rem" }}>Have a look around and find something new for the table this week.</p>
                                        <div style={{ background: DEEP, color: "#fff", fontSize: "0.72rem", fontWeight: 700, textAlign: "center", padding: "0.55rem", borderRadius: "6px" }}>Shop the range</div>
                                    </div>
                                </div>
                            </Visual>
                            <p style={{ ...CAPTION, textAlign: "center" }}>Illustrative example, not the brand's actual email.</p>
                        </div>
                    </div>
                </figure>

                <h2 style={H2}>The honest part</h2>
                <p style={P}>
                    Not every number went up. As more flows went live, flow click rate fell from 8.5% in 2024 to 7.3% in the twelve months to July 2025, while the number of people receiving flows rose 142%. More flows reach more people, but each one needs its own testing, or the average slips.
                </p>

                <h2 style={H2}>Your first 30 days of flows</h2>
                {/* Visual 8 */}
                <figure className="kfc-visual">
                    <Visual id="kfc-30" title="Your first 30 days of flows" desc={WEEKS.map((w) => `${w.week}: ${w.text}.`).join(" ")}>
                        <ol className="kfc-weeks">
                            {WEEKS.map((w, i) => (
                                <li key={w.week} className="kfc-week" style={{ borderTopColor: tone(i).fg, background: `linear-gradient(${tone(i).bg}, ${tone(i).bg}), var(--bg-primary)` }}>
                                    <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: tone(i).fg, margin: "0 0 0.5rem" }}>{w.week}</p>
                                    <p style={{ fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-primary)", margin: 0 }}>{w.text}</p>
                                </li>
                            ))}
                        </ol>
                    </Visual>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.25rem 0 0" }}>
                        Replenishment, win-back and birthday flows come later, once there is enough purchase data to time them well.
                    </p>
                </figure>

                {/* CTA */}
                <div style={{ ...calloutBox, marginTop: "3.5rem" }}>
                    <p style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-secondary)", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "999px", padding: "0.4rem 0.95rem", margin: "0 0 1.25rem" }}>
                        <span aria-hidden="true">✦</span> Official Klaviyo Partner
                    </p>
                    <h2 style={{ fontSize: "1.5rem", margin: "0 0 1rem", lineHeight: 1.25, color: "var(--text-primary)" }}>
                        Want help building yours?
                    </h2>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
                        If you have a list but fewer than three flows, there is usually revenue sitting in your account already. I'm a Klaviyo Partner and hold the Klaviyo Practitioner certificate. Klaviyo setup with core flows starts from £1,200, and monthly email marketing from £750 a month. Not sure where to start? The Growth Audit (£750) reviews your account and gives you a prioritised plan.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                        <Link to="/services/email-marketing" className="btn btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                            Email marketing services <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <Link to="/pricing" className="btn btn-secondary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                            See pricing
                        </Link>
                    </div>
                    <p style={{ margin: "1.5rem 0 0" }}>
                        <Link to="/case-study-email" style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                            Read the full case study <ArrowRight size={16} />
                        </Link>
                    </p>
                </div>

                <h2 style={H2}>Sources</h2>
                <ul style={{ ...P, paddingLeft: "1.25rem", listStyle: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><Ext href={OMNISEND}>Omnisend, 2026 Ecommerce Marketing Report</Ext></li>
                    <li><Ext href={KLAVIYO_BENCHMARKS}>Klaviyo, email marketing benchmarks</Ext></li>
                    <li><Ext href={BAYMARD}>Baymard Institute, cart abandonment rate</Ext></li>
                    <li>Klaviyo Business Overview exports for the brand in this article (2021 to 2025)</li>
                </ul>

                <h2 style={H2}>Frequently asked questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {FAQS.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services/email-marketing", label: "Email marketing and Klaviyo consulting" },
                        { kicker: RELATED.reading, to: "/blog/ai-product-descriptions-food-brands", label: "AI product descriptions, done safely" },
                    ]}
                />

                {/* Author box, in the shared AuthorBio treatment with this article's own line */}
                <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
                    <Link to="/about" style={{ color: "var(--accent-secondary)", fontWeight: 600, fontStyle: "normal" }}>Maria Madeira</Link> is an independent growth consultant for brands that sell online. She ran this brand's Klaviyo programme from 2021 to 2025, is a Klaviyo Partner and holds the Klaviyo Practitioner certificate.
                </div>
            </article>
        </div>
    );
}
