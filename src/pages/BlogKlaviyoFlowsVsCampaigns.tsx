import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowLeft, Clock, ArrowRight, UserPlus, Eye, ShoppingCart, PackageCheck, RefreshCw, Moon, Cake, Mail, Undo2 } from "lucide-react";
import Seo from "../components/Seo";
import RelatedLinks, { RELATED } from "../components/RelatedLinks";
import KlaviyoPartnerBadge from "../components/KlaviyoPartnerBadge";
import { PRACTITIONER_URL } from "../lib/credentials";
import { EMAIL_PERIODS } from "../data/emailRevenue";
import { decimal, EMAIL_PERIOD_LINES_PT } from "../lib/format";
import type { Lang } from "../lib/i18n";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/klaviyoFlows";

/* Renders /blog/klaviyo-flows-vs-campaigns and /pt/blog/fluxos-vs-campanhas-klaviyo
   from src/i18n/klaviyoFlows.ts. Icons, colours, numbers and links live here;
   every word, including the text of the eight visuals, lives in the copy. */
const SITE_URL = "https://mariamadeira.com";
const OG_IMAGE = "/og/og-blog-klaviyo-automations.png";
const PUBLISHED_ISO = "2026-10-19";
const MODIFIED_ISO = "2026-10-19";

const OMNISEND = "https://www.omnisend.com/2026-ecommerce-marketing-report";
const KLAVIYO_BENCHMARKS = "https://www.klaviyo.com/products/email-marketing/benchmarks";
const BAYMARD = "https://baymard.com/lists/cart-abandonment-rate";
const SOURCE_URLS = [OMNISEND, KLAVIYO_BENCHMARKS, BAYMARD];

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

/* ── Visual 2: the customer journey, in three phases (text in the copy, same
       shape). The two top earners are the welcome and abandoned checkout
       flows (Omnisend: 76% of automation orders). ── */
const JOURNEY_ICONS = [
    [{ icon: UserPlus, top: true }, { icon: Eye, top: false }, { icon: ShoppingCart, top: true }],
    [{ icon: PackageCheck, top: false }],
    [{ icon: RefreshCw, top: false }, { icon: Moon, top: false }, { icon: Cake, top: false }],
];
function journeyDesc(lang: Lang) {
    const t = COPY[lang];
    let n = 0;
    const phases = t.journey.map((ph, pi) => `${ph.title}: ${ph.stops.map((st, si) => `${++n}. ${st.moment}: ${st.flow}${t.journeySent}${st.when.toLowerCase()}${JOURNEY_ICONS[pi][si].top ? t.journeyTop : ""}.`).join(" ")}`).join(" ");
    return `${t.journeyDescIntro} ${phases} ${t.journeyDescOutro}`;
}

/* ── Visual 3: the flows that do the heavy lifting (same order as the copy) ── */
const FLOW_ICONS = [Mail, ShoppingCart, Eye, PackageCheck, RefreshCw, Undo2];

/* ── Visual 4: the brand's flows, before and after. 14 live flows in 2025,
       matching "3 → 14" on /case-study-email. The 2025 tags that continue one
       of the three 2021 flows (Welcome, Browse abandonment, Thank you) stay
       plain; the rest are marked new. Listed by position in the copy's
       flows2025, so the rule is the same in both languages: both welcome
       series continue "Welcome", then Browse abandonment and Thank you. ── */
const FROM_2021 = new Set([0, 1, 3, 4]);

function articleJsonLd(lang: Lang) {
    const t = COPY[lang];
    const pageUrl = `${SITE_URL}${t.path}`;
    const home = lang === "pt" ? `${SITE_URL}/pt` : `${SITE_URL}/`;
    const blog = lang === "pt" ? `${SITE_URL}/pt/blog` : `${SITE_URL}/blog`;
    const inLanguage = lang === "pt" ? { "inLanguage": "pt-PT" } : {};
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${pageUrl}#article`,
                "headline": t.headline,
                "description": t.description,
                ...inLanguage,
                "author": { "@id": `${SITE_URL}/#person` },
                "publisher": { "@id": `${SITE_URL}/#organization` },
                "datePublished": PUBLISHED_ISO,
                "dateModified": MODIFIED_ISO,
                "mainEntityOfPage": pageUrl,
                "image": `${SITE_URL}${OG_IMAGE}`,
                "isPartOf": { "@id": `${blog}#blog` },
                "articleSection": t.articleSection,
            },
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                ...inLanguage,
                "mainEntity": t.faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": t.breadcrumb[0], "item": home },
                    { "@type": "ListItem", "position": 2, "name": t.breadcrumb[1], "item": blog },
                    { "@type": "ListItem", "position": 3, "name": t.breadcrumb[2], "item": pageUrl },
                ],
            },
        ],
    };
}
const JSON_LD = { en: articleJsonLd("en"), pt: articleJsonLd("pt") };

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
    const t = COPY[useLang().lang];
    return (
        <Visual id={id} title={label} desc={t.v1Desc(label, auto)}>
            <p style={{ fontWeight: 700, color: INK, margin: "0 0 0.6rem" }}>{label}</p>
            <div style={{ display: "flex", height: "34px", borderRadius: "6px", overflow: "hidden", background: GREY }}>
                <div style={{ width: `${Math.max(auto, 1.5)}%`, background: SAGE }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginTop: "0.6rem", fontSize: "0.92rem" }}>
                <span style={{ fontWeight: 700, color: SAGE }}>{t.v1Auto}{auto}%</span>
                <span style={{ color: INK_SOFT }}>{t.v1Campaigns}{100 - auto}%</span>
            </div>
        </Visual>
    );
}

/* ── Visual 5: email revenue by period, flows at the base. Two drawings, as
       the case study charts do: vertical bars wide, horizontal bars narrow. ── */
/* Period labels and figures in the page's language: English exactly as the
   data file has them, Portuguese with a decimal comma (£33,1K). */
const periodLines = (i: number, lang: Lang) => (lang === "pt" ? EMAIL_PERIOD_LINES_PT[i] : EMAIL_PERIODS[i].lines);
const amount = (v: number, lang: Lang) => decimal(String(v), lang);
function revDesc(lang: Lang) {
    const t = COPY[lang];
    return `${t.v5DescIntro}${EMAIL_PERIODS.map((p, i) => t.v5DescRow(periodLines(i, lang).join(" "), amount(p.flows, lang), amount(p.campaigns, lang), decimal(p.total, lang))).join("; ")}.`;
}
const REV_MAX = 150;

function RevenueWide() {
    const { lang } = useLang();
    const t = COPY[lang];
    const L = 54, R = 750, T = 34, B = 290, plotH = B - T, band = (R - L) / EMAIL_PERIODS.length, bw = 70;
    const y = (v: number) => B - (v / REV_MAX) * plotH;
    return (
        <svg viewBox="0 0 760 350" width="100%" role="img" aria-labelledby="kfc-rev-w-t kfc-rev-w-d" className="kfc-wide" style={{ overflow: "visible" }}>
            <title id="kfc-rev-w-t">{t.v5SvgTitle}</title>
            <desc id="kfc-rev-w-d">{revDesc(lang)}</desc>
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
                        <text x={cx} y={y(p.flows + p.campaigns) - 9} fontSize="15" fontWeight="700" fill={INK} textAnchor="middle">{decimal(p.total, lang)}</text>
                        {periodLines(i, lang).map((ln, j) => (
                            <text key={ln} x={cx} y={B + 22 + j * 17} fontSize="13" fill={INK_SOFT} textAnchor="middle">{ln}</text>
                        ))}
                    </g>
                );
            })}
        </svg>
    );
}

function RevenueNarrow() {
    const { lang } = useLang();
    const t = COPY[lang];
    const L = 0, W = 300, rowH = 62;
    const x = (v: number) => L + (v / REV_MAX) * W;
    return (
        <svg viewBox={`0 0 360 ${EMAIL_PERIODS.length * rowH + 4}`} width="100%" role="img" aria-labelledby="kfc-rev-n-t kfc-rev-n-d" className="kfc-narrow" style={{ overflow: "visible" }}>
            <title id="kfc-rev-n-t">{t.v5SvgTitle}</title>
            <desc id="kfc-rev-n-d">{revDesc(lang)}</desc>
            {EMAIL_PERIODS.map((p, i) => {
                const top = i * rowH;
                return (
                    <g key={p.total}>
                        <text x="0" y={top + 16} fontSize="14" fill={INK_SOFT}>{periodLines(i, lang).join(" ")}</text>
                        <rect x={x(0)} y={top + 24} width={x(p.flows) - x(0)} height="24" fill={SAGE} />
                        <rect x={x(p.flows)} y={top + 24} width={x(p.flows + p.campaigns) - x(p.flows)} height="24" fill={LIGHT} />
                        <text x={x(p.flows + p.campaigns) + 8} y={top + 41} fontSize="14" fontWeight="700" fill={INK}>{decimal(p.total, lang)}</text>
                    </g>
                );
            })}
        </svg>
    );
}

/* ── Visual 6: revenue per recipient, campaign = 1, automated = 16 ── */
function PerRecipientBars() {
    const t = COPY[useLang().lang];
    return (
        <Visual id="kfc-16x" title={t.v6Title} desc={t.v6Desc}>
            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: INK_SOFT, margin: "0 0 1rem" }}>{t.v6Title}</p>
            <p style={{ color: INK, margin: "0 0 0.4rem" }}>{t.v6Campaign}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: `${100 / 16}%`, minWidth: "14px", height: "24px", borderRadius: "4px", background: GREY }} />
                <span style={{ fontSize: "0.9rem", fontWeight: 700, color: INK_SOFT }}>1x</span>
            </div>
            <p style={{ color: INK, margin: "0 0 0.4rem" }}>{t.v6Automated}</p>
            <div style={{ height: "24px", borderRadius: "4px", background: SAGE, color: "#fff", fontSize: "0.9rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "0.6rem" }}>16x</div>
        </Visual>
    );
}

export default function BlogKlaviyoFlowsVsCampaigns() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                ogImage={OG_IMAGE}
                jsonLd={JSON_LD[lang]}
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
                .kfc-cta-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem 1.5rem; margin-bottom: 1rem; }
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
                    .kfc-cta-head { flex-direction: column-reverse; align-items: flex-start; }
                    .kfc-two, .kfc-cards, .kfc-weeks { grid-template-columns: 1fr; }
                    .kfc-wide { display: none; }
                    .kfc-narrow { display: block; }
                }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to={to("/blog")} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> {t.allArticles}
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    {t.eyebrow}
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    {t.headline}
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>{t.published}{t.publishedHuman}</span>
                    <span>{t.updated}{t.modifiedHuman}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} />{t.readTime}</span>
                </div>

                {/* Answer-first summary, in the article callout treatment */}
                <div style={{ ...calloutBox, marginBottom: "1.25rem" }}>
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                        {t.summary.a}<Ext href={OMNISEND}>{t.summary.link}</Ext>{t.summary.b}
                    </p>
                </div>

                {/* Visual 1 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">{t.v1Title}</p>
                    <div className="kfc-two">
                        <ShareBar id="kfc-sends" label={t.v1Sends} auto={2} />
                        <ShareBar id="kfc-revenue" label={t.v1Revenue} auto={30} />
                    </div>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.5rem 0 0" }}>
                        {t.v1Note}
                    </p>
                    <figcaption style={CAPTION}>
                        {t.v1Sources}
                    </figcaption>
                </figure>

                <h2 style={H2}>{t.interruptTitle}</h2>
                <p style={P}>
                    {t.interrupt1}
                </p>
                <p style={P}>
                    {t.interrupt2}
                </p>
                <p style={P}>
                    {t.interrupt3.a}<Ext href={BAYMARD}>{t.interrupt3.link}</Ext>{t.interrupt3.b}
                </p>

                {/* Visual 2 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">{t.v2Title}</p>
                    <Visual id="kfc-journey" title={t.v2Title} desc={journeyDesc(lang)}>
                        <div className="kj-phases">
                            {t.journey.map((ph, pi) => (
                                <div key={ph.title} className="kj-phase">
                                    <p className="kj-phase-title">{ph.title}</p>
                                    <ol className="kj-stops" start={t.journey.slice(0, pi).reduce((n, p) => n + p.stops.length, 0) + 1}>
                                        {ph.stops.map(({ moment, flow, when }, si) => {
                                            const { icon: Icon, top } = JOURNEY_ICONS[pi][si];
                                            return (
                                            <li key={flow} className="kj-stop">
                                                <div className="kj-badge-row">{top && <span className="kj-top">{t.topEarner}</span>}</div>
                                                <div className={top ? "kj-circle kj-circle--top" : "kj-circle"}>
                                                    <Icon size={20} aria-hidden="true" />
                                                    <span className="kj-num">{t.journey.slice(0, pi).reduce((n, p) => n + p.stops.length, 0) + si + 1}</span>
                                                </div>
                                                <p className="kj-moment">{moment}</p>
                                                <p className="kj-flow">{flow}</p>
                                                <p className="kj-when">{when}</p>
                                            </li>
                                            );
                                        })}
                                    </ol>
                                </div>
                            ))}
                            <div className="kj-line" aria-hidden="true" />
                        </div>
                    </Visual>
                    <p style={CAPTION}>
                        {t.v2Caption}
                    </p>
                </figure>

                <h2 style={H2}>{t.heavyTitle}</h2>
                <p style={P}>
                    {t.heavy}
                </p>

                {/* Visual 3 */}
                <figure className="kfc-visual">
                    <Visual id="kfc-flows" title={t.v3Title} desc={t.coreFlows.map((f) => `${f.name}: ${f.line}`).join(" ")}>
                        <div className="kfc-cards">
                            {t.coreFlows.map(({ name, line }, i) => {
                                const Icon = FLOW_ICONS[i];
                                return (
                                <div key={name} className="kfc-card">
                                    <div className="kfc-card-icon" style={{ color: tone(i).fg, background: tone(i).bg }}><Icon size={20} aria-hidden="true" /></div>
                                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.4rem" }}>{name}</h3>
                                    <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>{line}</p>
                                </div>
                                );
                            })}
                        </div>
                    </Visual>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.25rem 0 0" }}>
                        <strong>{t.bonusLabel}</strong>{t.bonus}
                    </p>
                </figure>

                <h2 style={H2}>{t.realTitle}</h2>
                <p style={P}>
                    {t.real1}
                </p>
                <p style={P}>
                    {t.real2}
                </p>

                {/* Visual 4 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">{t.v4Title}</p>
                    <Visual id="kfc-3to14" title={t.v4Title} desc={t.v4Desc(t.flows2021, t.flows2025)} className="kfc-two">
                        <div>
                            <p className="kfc-big" style={{ fontSize: "3.5rem", margin: "0 0 0.25rem", color: "var(--text-secondary)" }}>3</p>
                            <p style={{ fontWeight: 700, color: "var(--text-secondary)", margin: "0 0 1rem" }}>{t.v4Before}</p>
                            <div className="kfc-tags">
                                {t.flows2021.map((f) => <span key={f} className="kfc-tag">{f}</span>)}
                            </div>
                        </div>
                        <div>
                            <p className="kfc-big" style={{ fontSize: "3.5rem", margin: "0 0 0.25rem", color: SAGE }}>14</p>
                            <p style={{ fontWeight: 700, color: "var(--text-primary)", margin: "0 0 1rem" }}>{t.v4After}</p>
                            <div className="kfc-tags">
                                {t.flows2025.map((f, i) => <span key={f} className={FROM_2021.has(i) ? "kfc-tag" : "kfc-tag kfc-tag--new"}>{f}</span>)}
                                <span className="kfc-tag kfc-tag--more">{t.v4More}</span>
                            </div>
                        </div>
                    </Visual>
                </figure>

                <p style={P}>
                    {t.real3}
                </p>

                {/* Visual 5 */}
                <figure className="kfc-visual">
                    <p className="kfc-visual-title">{t.v5Title}</p>
                    <ul className="kfc-legend">
                        <li><span style={{ background: SAGE }} />{t.v5Flows}</li>
                        <li><span style={{ background: LIGHT }} />{t.v5Campaigns}</li>
                    </ul>
                    <RevenueWide />
                    <RevenueNarrow />
                    <figcaption style={CAPTION}>
                        {t.v5Caption}
                    </figcaption>
                </figure>

                {/* Visual 6 */}
                <figure className="kfc-visual">
                    <div className="kfc-two" style={{ alignItems: "center" }}>
                        <p className="kfc-big" style={{ fontSize: "clamp(5rem, 14vw, 8rem)", margin: 0, color: SAGE }}>16x</p>
                        <PerRecipientBars />
                    </div>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.5rem 0 0" }}>
                        {t.v6Note}
                    </p>
                </figure>

                <p style={P}>
                    {t.real4}
                </p>

                <h2 style={H2}>{t.oneFlowTitle}</h2>
                <p style={P}>
                    {t.oneFlow}
                </p>

                {/* Visual 7 */}
                <figure className="kfc-visual">
                    <div className="kfc-two" style={{ alignItems: "center" }}>
                        <div style={{ ...calloutBox, padding: "2rem", background: TONES[0].bg, borderLeftColor: SAGE }}>
                            <p className="kfc-big" style={{ fontSize: "clamp(3rem, 8vw, 4rem)", margin: "0 0 0.5rem", color: SAGE }}>{t.v7Big}</p>
                            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>{t.v7Line}</p>
                        </div>
                        <div>
                            <Visual id="kfc-mock" title={t.v7Title} desc={t.v7Desc}>
                                <div className="kfc-phone">
                                    <div style={{ padding: "0.7rem 0.9rem", borderBottom: "1px solid #eee", background: "#faf8f5" }}>
                                        <p style={{ fontSize: "0.62rem", color: INK_SOFT, margin: 0 }}>{t.v7Sender}</p>
                                        <p style={{ fontSize: "0.78rem", fontWeight: 700, color: INK, margin: 0 }}>{t.v7Subject}</p>
                                    </div>
                                    <div style={{ padding: "0.9rem" }}>
                                        <div style={{ height: "110px", borderRadius: "8px", background: "linear-gradient(135deg, #e9e2d8, #d8cbbb)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem" }}>
                                            <div style={{ width: "46px", height: "62px", borderRadius: "6px 6px 4px 4px", background: "#c9b49c", boxShadow: "18px 6px 0 -4px #bfa88f" }} />
                                        </div>
                                        <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: INK, margin: "0 0 0.45rem" }}>{t.v7Heading}</p>
                                        <p style={{ fontSize: "0.7rem", lineHeight: 1.5, color: INK_SOFT, margin: "0 0 0.4rem" }}>{t.v7Para1}</p>
                                        <p style={{ fontSize: "0.7rem", lineHeight: 1.5, color: INK_SOFT, margin: "0 0 0.8rem" }}>{t.v7Para2}</p>
                                        <div style={{ background: DEEP, color: "#fff", fontSize: "0.72rem", fontWeight: 700, textAlign: "center", padding: "0.55rem", borderRadius: "6px" }}>{t.v7Button}</div>
                                    </div>
                                </div>
                            </Visual>
                            <p style={{ ...CAPTION, textAlign: "center" }}>{t.v7Caption}</p>
                        </div>
                    </div>
                </figure>

                <h2 style={H2}>{t.honestTitle}</h2>
                <p style={P}>
                    {t.honest}
                </p>

                <h2 style={H2}>{t.v8Title}</h2>
                {/* Visual 8 */}
                <figure className="kfc-visual">
                    <Visual id="kfc-30" title={t.v8Title} desc={t.weeks.map((w) => `${w.week}: ${w.text}.`).join(" ")}>
                        <ol className="kfc-weeks">
                            {t.weeks.map((w, i) => (
                                <li key={w.week} className="kfc-week" style={{ borderTopColor: tone(i).fg, background: `linear-gradient(${tone(i).bg}, ${tone(i).bg}), var(--bg-primary)` }}>
                                    <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: tone(i).fg, margin: "0 0 0.5rem" }}>{w.week}</p>
                                    <p style={{ fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-primary)", margin: 0 }}>{w.text}</p>
                                </li>
                            ))}
                        </ol>
                    </Visual>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: "1.25rem 0 0" }}>
                        {t.v8Note}
                    </p>
                </figure>

                {/* CTA */}
                <div style={{ ...calloutBox, marginTop: "3.5rem" }}>
                    <div className="kfc-cta-head">
                        <h2 style={{ fontSize: "1.5rem", margin: 0, lineHeight: 1.25, color: "var(--text-primary)" }}>
                            {t.ctaTitle}
                        </h2>
                        <KlaviyoPartnerBadge />
                    </div>
                    <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 1.75rem" }}>
                        {t.cta.a}<a href={PRACTITIONER_URL} target="_blank" rel="noopener" style={linkStyle}>{t.cta.link}</a>{t.cta.b}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                        <Link to={to("/services/email-marketing")} className="btn btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                            {t.ctaServices}<ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </Link>
                        <Link to={to("/pricing")} className="btn btn-secondary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
                            {t.ctaPricing}
                        </Link>
                    </div>
                    <p style={{ margin: "1.5rem 0 0" }}>
                        <Link to={to("/case-study-email")} style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                            {t.ctaCaseStudy}<ArrowRight size={16} />
                        </Link>
                    </p>
                </div>

                <h2 style={H2}>{t.sourcesTitle}</h2>
                <ul style={{ ...P, paddingLeft: "1.25rem", listStyle: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {t.sources.map((label, i) => (
                        <li key={label}><Ext href={SOURCE_URLS[i]}>{label}</Ext></li>
                    ))}
                    <li>{t.sourceExports}</li>
                </ul>

                <h2 style={H2}>{t.faqTitle}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                    {t.faqs.map((f) => (
                        <div key={f.q} className="card" style={{ padding: "1.75rem" }}>
                            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{f.q}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
                        </div>
                    ))}
                </div>

                <RelatedLinks
                    className="related-links--open"
                    items={[
                        { kicker: RELATED.service, to: "/services/email-marketing", label: t.related[0] },
                        { kicker: RELATED.reading, to: "/blog/ai-product-descriptions-food-brands", label: t.related[1] },
                    ]}
                />

                {/* Author box, in the shared AuthorBio treatment with this article's own line */}
                <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
                    <Link to={to("/about")} style={{ color: "var(--accent-secondary)", fontWeight: 600, fontStyle: "normal" }}>Maria Madeira</Link>{t.author}
                </div>
            </article>
        </div>
    );
}
