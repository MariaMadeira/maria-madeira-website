import { ArrowRight, ExternalLink, Search, ClipboardCheck, Repeat, MessageCircle, FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import FinalCta from "../components/FinalCta";
import ServiceCards from "../components/ServiceCards";
import { Sparkline, EmailBarsVisual, RoasBarsVisual, ClicksLineVisual, PositionVisual } from "../components/MiniVisuals";
import { BODYSURF_TESTIMONIAL } from "../data/testimonials";
import type { Testimonial } from "../data/testimonials";
import { useLang } from "../hooks/useLang";
import { PROGRAM_MEMBERSHIP } from "../lib/credentials";
import { decimal } from "../lib/format";
import COPY from "../i18n/home";
import PORTFOLIO from "../i18n/portfolio";
import ABOUT from "../i18n/about";
import "../styles/home.css";

/* Renders / and /pt from src/i18n/home.ts. Visuals, images and links live
   here; every word lives in the copy file. The Portuguese page uses its own
   steps (no prices), FAQ and closing line in the shared sections, and keeps
   its credentials strip (ptExtras). No number on this page counts up. */

const HOME_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://mariamadeira.com/#person",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "image": "https://mariamadeira.com/maria-hero-800.jpg",
            "jobTitle": "Growth Strategist",
            "description": "Growth strategist for brands that sell online: websites, Answer Engine Optimisation (AEO), SEO, Klaviyo email, and paid acquisition. Five years with UK food and drink brands.",
            "sameAs": ["https://www.linkedin.com/in/maria-madeira-growth", "https://influee.co/partnership/maria-madeira"],
            // Identical to the About node: same @id, so two different values
            // would contradict each other on one merged entity.
            "memberOf": PROGRAM_MEMBERSHIP,
            "knowsAbout": ["Answer Engine Optimisation (AEO)", "SEO", "Email Marketing", "Klaviyo", "Google Ads", "Meta Ads", "AI Marketing", "Growth Strategy", "Paid Acquisition", "Lifecycle Marketing"]
        },
        // Split out of a single ProfessionalService node: that type descends from
        // LocalBusiness, not Service, so it accepts neither provider nor
        // serviceType (schema.org deprecated it precisely for that confusion).
        // The practice is now an Organization and what it sells is a Service.
        {
            "@type": "Organization",
            "@id": "https://mariamadeira.com/#organization",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mariamadeira.com/apple-touch-icon.png",
                "width": 180,
                "height": 180
            },
            "description": "Answer Engine Optimisation (AEO), SEO, Klaviyo email and paid acquisition for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
            "sameAs": ["https://www.linkedin.com/in/maria-madeira-growth"],
            "founder": { "@id": "https://mariamadeira.com/#person" },
            "areaServed": "Worldwide",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@mariamadeira.com",
                "contactType": "customer service"
            }
        },
        // No SearchAction: the site has no search, and claiming one that does
        // not exist is the most common way this node gets ignored.
        {
            "@type": "WebSite",
            "@id": "https://mariamadeira.com/#website",
            "name": "Maria Madeira",
            "url": "https://mariamadeira.com",
            "publisher": { "@id": "https://mariamadeira.com/#organization" }
        },
        {
            "@type": "Service",
            "@id": "https://mariamadeira.com/#service",
            "name": "Maria Madeira: Growth Strategy",
            "description": "Answer Engine Optimisation (AEO), SEO, Klaviyo email and paid acquisition for UK food and drink e-commerce brands. Agency-level execution from an independent consultant.",
            "provider": { "@id": "https://mariamadeira.com/#organization" },
            "areaServed": "Worldwide",
            "serviceType": ["Growth Strategy", "Email Marketing", "Paid Advertising", "AI Marketing Systems", "Creative Direction"]
        },
        // The homepage Questions section, word for word (English only).
        {
            "@type": "FAQPage",
            "@id": "https://mariamadeira.com/#faq",
            "mainEntity": COPY.en.faq.items.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        }
    ]
};

/* The Portuguese page (D16 A): its own WebPage, FAQPage and Service, with no
   Offer. Person, Organization and WebSite are referenced by @id, never
   repeated. */
const PT_URL = "https://mariamadeira.com/pt";
const PT_JSON_LD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${PT_URL}#webpage`,
            "url": PT_URL,
            "name": "Consultoria de AEO para marcas de e-commerce",
            "description": COPY.pt.description,
            "inLanguage": "pt-PT",
            "isPartOf": { "@id": "https://mariamadeira.com/#website" },
            "about": { "@id": "https://mariamadeira.com/#person" },
            "publisher": { "@id": "https://mariamadeira.com/#organization" },
        },
        {
            "@type": "FAQPage",
            "@id": `${PT_URL}#faq`,
            "inLanguage": "pt-PT",
            "mainEntity": COPY.pt.faq.items.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
        },
        {
            "@type": "Service",
            "@id": `${PT_URL}#service`,
            "name": "Maria Madeira: Estratégia de crescimento",
            "description": "Otimização para motores de resposta (AEO), SEO, email no Klaviyo e aquisição paga para marcas de alimentação e bebidas que vendem online. Trabalho de agência, feito por uma consultora independente.",
            "provider": { "@id": "https://mariamadeira.com/#organization" },
            "areaServed": "Worldwide",
            "serviceType": ["Estratégia de crescimento", "Email marketing", "Anúncios pagos", "Sistemas de marketing com IA", "Direção criativa"],
        },
    ],
};

/* ── Logo strip ─────────────────────────────────────────── */
/* Brand logos from /public/brand-assets/logos/ (originals in design-assets/),
   trimmed, transparent and exported at twice their display height. Each logo
   has its own display height so they read at the same visual size: the
   one-line Smorgasbord wordmark sits lower than the stacked logos. The
   monochrome tint is CSS (home.css), full colour on hover. A brand with no
   file renders its name as text. */
const LOGO_DIR = "/brand-assets/logos/";
/* `colour`: a logo whose file is already single-colour (a knockout in the
   strip's dark tint) skips the CSS filter and swaps to this full-colour file
   on hover. */
const BRANDS: { name: string; file: string | null; width: number; height: number; colour?: string }[] = [
    { name: "The Black Farmer", file: "the-black-farmer.webp", width: 81, height: 44 },
    { name: "The Bodysurf School", file: "the-bodysurf-school-mono.svg", width: 44, height: 44, colour: "the-bodysurf-school.webp" },
    { name: "Wiltshire Country Fayre", file: "wiltshire-country-fayre.webp", width: 101, height: 44 },
    { name: "Smorgasbord", file: "smorgasbord.webp", width: 146, height: 24 },
    { name: "Ousadia", file: "ousadia.svg", width: 91, height: 44 },
    { name: "Rita Antunes", file: "rita-antunes.webp", width: 74, height: 44 },
];

/* ── Testimonials ───────────────────────────────────────── */
// Ordered as the copy's people list. Quotes are verbatim LinkedIn
// recommendations, so their punctuation is theirs; `short` is the excerpt the
// grid shows, word for word from the quote.
/** LinkedIn has no per-recommendation URL, so both links land on the list. */
const RECOMMENDATIONS_URL = "https://www.linkedin.com/in/maria-madeira-growth/details/recommendations/";

const TESTIMONIALS: (Testimonial & { short?: string })[] = [
    {
        name: "Wilfred Emmanuel-Jones",
        badge: "Client",
        role: "Founder, The Black Farmer",
        context: "Recommended on LinkedIn",
        monogram: "WE",
        // Excerpt of a much longer recommendation; the cut is marked with [...].
        // readMore sends readers to LinkedIn for the whole thing.
        quote: "I could give her something that was little more than an idea in my head and she would go away, work it out and come back with something real. [...] She built our email marketing, worked on our e-commerce, creative, advertising and SEO, helped us launch our app and later became one of the people pushing us to understand and use AI properly within the business.",
        readMore: RECOMMENDATIONS_URL,
    },
    { ...BODYSURF_TESTIMONIAL, short: "Something we thought would be pricey and difficult to create, she built in just one month." },
    {
        name: "Adel Sidiqi",
        badge: null,
        role: "Digital Marketing Manager at Ocado Zoom",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "AS",
        quote: "Maria's expertise in design, digital marketing, and tools like Klaviyo consistently took our campaigns to the next level — both visually and in terms of results. She has a real knack for aligning creative ideas with marketing goals. Detail-oriented, innovative, and a great team player.",
        short: "Detail-oriented, innovative, and a great team player.",
        readMore: null,
    },
    {
        name: "Isbah Amin",
        badge: null,
        role: "Marketing Executive",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "IA",
        quote: "Working under Maria's guidance at The Black Farmer was an incredible experience. As my senior, she taught me the ins and outs of marketing, from brand strategy to high-impact email campaigns. Her ability to grab customer attention and her deep business knowledge are truly inspiring. Anyone would be lucky to have Maria leading their marketing efforts!",
        short: "Anyone would be lucky to have Maria leading their marketing efforts!",
        readMore: null,
    },
    {
        name: "Will Fuller",
        badge: null,
        role: "WordPress Developer",
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "WF",
        quote: "Maria completely transformed our email marketing strategy. When she took over our Klaviyo account, she achieved 125% growth in email attributed revenue and boosted our automated flows by over 100%. Our open rates went from 28% to 48%, and click rates more than doubled. What impressed me most wasn't just the numbers — it was how she understood our customers.",
        short: "Maria completely transformed our email marketing strategy.",
        readMore: null,
    },
    {
        name: "Hermela Michael",
        badge: null,
        role: null,
        context: "Former colleague · Recommended on LinkedIn",
        monogram: "HM",
        quote: "Maria doesn't just think outside the box — she completely redefines it. Her creativity, strategic mindset, and deep understanding of marketing have played a huge role in shaping the success of the company. She approaches every project with passion and precision, always bringing fresh, data-driven ideas to the table that truly make an impact.",
        short: "She approaches every project with passion and precision.",
        readMore: null,
    },
];
/* The grid's order (indexes into TESTIMONIALS): Bodysurf, Will, Adel, Isbah,
   Hermela. Wilfred (0) is the featured card. */
const GRID_ORDER = [1, 4, 2, 3, 5];

/* ── Results ────────────────────────────────────────────── */
/* Same order as the copy's results.cards. */
const RESULT_LINKS = ["/case-study-email", "/case-study-google-ads", "/case-study-seo", "/case-study-seo"];

/* ── Selected work ──────────────────────────────────────── */
/* Six portfolio images, in the order of the portfolio copy's projects
   (src/i18n/portfolio.ts), whose category is the caption. */
const WORK = [
    { image: "/projects/click-collect/app-mockups.webp", link: "/portfolio-click-collect" },
    { image: "/projects/email-marketing/recipe.webp", link: "/portfolio-email-marketing" },
    { image: "/projects/rita-antunes/mockup-stationery.webp", link: "/portfolio-rita-antunes" },
    { image: "/projects/ousadia/moodboard.webp", link: "/portfolio-ousadia" },
    { image: "/projects/ai-enhanced/cooked ox cheek.webp", link: "/portfolio-ai-enhanced" },
    { image: "/projects/ai-product/DEPOIS Cotswold Fudge Butterscotch.webp", link: "/portfolio-ai-product-photography" },
];

/* Step icons: the English steps are the three ways to work; the Portuguese
   ones are the call, the written proposal and the work. */
const STEP_ICONS = {
    en: [<Search size={24} key="a" />, <ClipboardCheck size={24} key="b" />, <Repeat size={24} key="c" />],
    pt: [<MessageCircle size={24} key="a" />, <FileText size={24} key="b" />, <Wrench size={24} key="c" />],
};

function Results() {
    const { lang, to } = useLang();
    const r = COPY[lang].results;
    const aria = (i: number) => `${r.cards[i].value}: ${r.cards[i].label}`;
    const visuals = [
        <EmailBarsVisual key="email" label={aria(0)} badge={`+${decimal("88.9", lang)}%`} />,
        <RoasBarsVisual key="roas" label={aria(1)} />,
        <ClicksLineVisual key="clicks" label={aria(2)} from={4.5} to={8.0} fromText={`${decimal("4.5", lang)}K`} toText={`${decimal("8.0", lang)}K`} />,
        <PositionVisual key="position" label={aria(3)} from={15.2} to={9.4} fromText={decimal("15.2", lang)} toText={decimal("9.4", lang)} />,
    ];
    return (
        <section className="home-section">
            <div className="home-head">
                <h2 className="section-title">{r.title}</h2>
                <p className="home-sub">{r.sub}</p>
            </div>
            <ul className="results-grid">
                {r.cards.map((card, i) => (
                    <li key={RESULT_LINKS[i] + i}>
                        <Link to={to(RESULT_LINKS[i])} className="result-card">
                            <p className="result-value">{card.value}</p>
                            <p className="result-label">{card.label}</p>
                            {visuals[i]}
                            <span className="result-link">{r.link} <ArrowRight size={15} /></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Testimonials() {
    const { lang, to } = useLang();
    const c = COPY[lang].testimonials;
    // Badge, role and context come from the copy; the quote stays verbatim.
    const list = TESTIMONIALS.map((tm, i) => ({ ...tm, badge: tm.badge ? c.badge : null, role: c.people[i].role, context: c.people[i].context }));
    const featured = list[0];
    const attribution = (t: typeof featured) => (
        <figcaption>
            <span className="quote-monogram" aria-hidden="true">{t.monogram}</span>
            <span>
                <span className="quote-name">{t.name}</span>
                {t.role && <span className="quote-role">{t.role}</span>}
            </span>
        </figcaption>
    );
    return (
        <section className="home-section">
            <div className="home-head">
                <h2 className="section-title">{c.title}</h2>
                <p className="home-sub">{c.sub}</p>
            </div>

            <figure className="quote-featured">
                {featured.badge && <span className="quote-badge">{featured.badge}</span>}
                <blockquote>"{featured.quote}"</blockquote>
                {c.note && <p className="quote-note">{c.note}</p>}
                {featured.readMore && (
                    featured.readMore.startsWith("http") ? (
                        <a href={featured.readMore} target="_blank" rel="noopener" className="quote-readmore">
                            {c.readMore} <ArrowRight size={15} />
                        </a>
                    ) : (
                        <Link to={to(featured.readMore)} className="quote-readmore">
                            {c.readMore} <ArrowRight size={15} />
                        </Link>
                    )
                )}
                {attribution(featured)}
            </figure>

            <ul className="quote-grid">
                {GRID_ORDER.map((i) => list[i]).map((t) => (
                    <li key={t.name}>
                        <figure className="quote-card">
                            {t.badge && <span className="quote-badge">{t.badge}</span>}
                            <blockquote>"{t.short}"</blockquote>
                            {c.note && <p className="quote-note">{c.note}</p>}
                            {attribution(t)}
                        </figure>
                    </li>
                ))}
            </ul>

            {/* The cards carry excerpts, so one link out to the full set. */}
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                <a className="btn btn-secondary" href={RECOMMENDATIONS_URL} target="_blank" rel="noopener">
                    {c.seeAll} <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
}

export default function Home() {
    const { lang, to } = useLang();
    const t = COPY[lang];
    const x = t.ptExtras;
    const projects = PORTFOLIO[lang].projects;

    return (
        <div className="container">
            <Seo
                title={t.title}
                description={t.description}
                path={t.path}
                jsonLd={lang === "pt" ? PT_JSON_LD : HOME_JSON_LD}
            />

            {/* 1. Hero */}
            <section className="hero" style={{ overflow: 'visible', minHeight: 'auto', paddingTop: '6rem', paddingBottom: '3rem' }}>
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
                            color: 'var(--color-dark-brown)',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            {t.hero.eyebrow}
                        </span>
                        <h1 className="home-hero-h1" style={{ margin: '0 0 1.5rem', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
                            {t.hero.h1}
                        </h1>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {t.hero.intro}
                        </p>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: 'wrap' }}>
                            <Link to={to("/contact")} className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                {t.hero.cta} <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                            </Link>
                            <Link to={to("/case-studies")} className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                                {t.hero.results}
                            </Link>
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className="hero-image-col reveal-scale is-visible" style={{ position: 'relative' }}>
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '4/5',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
                            border: '1px solid var(--border-color)',
                        }}>
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet="/maria-hero-400.webp 400w, /maria-hero-800.webp 800w, /maria-hero-1600.webp 1600w"
                                    sizes="(max-width: 900px) 100vw, 550px"
                                />
                                <source
                                    type="image/jpeg"
                                    srcSet="/maria-hero-400.jpg 400w, /maria-hero-800.jpg 800w, /maria-hero-1600.jpg 1600w"
                                    sizes="(max-width: 900px) 100vw, 550px"
                                />
                                <img
                                    src="/maria-hero-800.jpg"
                                    alt={t.hero.imageAlt}
                                    width="1600"
                                    height="2000"
                                    fetchPriority="high"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                                />
                            </picture>
                        </div>
                        {/* Floating chip */}
                        <div
                            className="hero-badge"
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
                            }}
                        >
                            <Sparkline label={t.hero.badgeText} />
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.hero.badgeTitle}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{t.hero.badgeText}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Logo strip */}
            <section className="logo-strip">
                <p className="logo-strip-label">{t.brandsLabel}</p>
                <ul className="logo-strip-row">
                    {BRANDS.map((b) => (
                        <li key={b.name}>
                            {b.file && b.colour ? (
                                <span className="logo-swap">
                                    <img src={LOGO_DIR + b.file} alt={b.name} width={b.width} height={b.height} loading="lazy" decoding="async" />
                                    <img src={LOGO_DIR + b.colour} alt="" aria-hidden="true" width={b.width} height={b.height} loading="lazy" decoding="async" />
                                </span>
                            ) : b.file ? (
                                <img src={LOGO_DIR + b.file} alt={b.name} width={b.width} height={b.height} loading="lazy" decoding="async" />
                            ) : (
                                <span className="logo-strip-name">{b.name}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            {/* 3. Results */}
            <Results />

            {/* 4. What I do */}
            <section className="home-section">
                <div className="home-head">
                    <h2 className="section-title">{t.whatIDo.title}</h2>
                </div>
                <ServiceCards />
            </section>

            {/* 5. Case studies */}
            <section className="home-section">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontSize: '0.85rem',
                        color: 'var(--color-dark-brown)',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        display: 'block'
                    }}>
                        {t.caseStudies.eyebrow}
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>{t.caseStudies.title}</h2>
                </div>

                <div className="grid-3">
                    {/* Card 1 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet="/email-popcorn-400.webp 400w, /email-popcorn-800.webp 800w"
                                    sizes="(min-width: 940px) 400px, (min-width: 700px) 45vw, 90vw"
                                />
                                <source
                                    type="image/jpeg"
                                    srcSet="/email-popcorn-400.jpg 400w, /email-popcorn-800.jpg 800w"
                                    sizes="(min-width: 940px) 400px, (min-width: 700px) 45vw, 90vw"
                                />
                                <img
                                    className="case-study-media-img case-study-media-img--top"
                                    src="/email-popcorn-800.jpg"
                                    alt={t.caseStudies.cards[0].alt}
                                    width={800}
                                    height={1387}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                        <CaseStudyBody card={t.caseStudies.cards[0]} link={to("/case-study-email")} readCase={t.caseStudies.readCase} />
                    </div>

                    {/* Card 2 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <img
                                className="case-study-media-img"
                                src={lang === "pt" ? "/card-google-ads-roas-pt.svg" : "/card-google-ads-roas.svg"}
                                alt={t.caseStudies.cards[1].alt}
                                width={640}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <CaseStudyBody card={t.caseStudies.cards[1]} link={to("/case-study-google-ads")} readCase={t.caseStudies.readCase} />
                    </div>

                    {/* Card 3 */}
                    <div className="case-study-card">
                        <div className="case-study-media-slot">
                            <img
                                className="case-study-media-img"
                                src={lang === "pt" ? "/card-seo-clicks-pt.svg" : "/card-seo-clicks.svg"}
                                alt={t.caseStudies.cards[2].alt}
                                width={640}
                                height={400}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <CaseStudyBody card={t.caseStudies.cards[2]} link={to("/case-study-seo")} readCase={t.caseStudies.readCase} />
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to={to("/case-studies")} className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                        {t.caseStudies.viewAll} <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>

            {/* 6. How to work with me (Portuguese: Como trabalho, no prices) */}
            <section className="home-section">
                <div className="home-head">
                    <h2 className="section-title">{t.how.title}</h2>
                </div>
                <ol className="how-steps">
                    {t.how.steps.map((st, i) => (
                        <li key={st.name} className="how-step">
                            <span className="how-step-icon" aria-hidden="true">{STEP_ICONS[lang][i]}</span>
                            <h3 className="how-step-name">{st.name}</h3>
                            {lang !== "pt" && st.price && <p className="how-step-price">{st.price}</p>}
                            <p className="how-step-line">{st.line}</p>
                        </li>
                    ))}
                </ol>
                {lang !== "pt" && t.how.seeAll && (
                    <p className="how-more">
                        <Link to={to("/pricing")}>{t.how.seeAll} <ArrowRight size={16} /></Link>
                    </p>
                )}
            </section>

            {/* Portuguese only (D15 A): the credentials strip. */}
            {x && (
                <section className="credentials" style={{ maxWidth: "980px", margin: "0 auto 4rem" }}>
                    <h2 className="credentials-title">{x.credentialsTitle}</h2>
                    <ul className="credential-list" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                        {x.credentials.map((c) => (
                            <li key={c.name} className="credential">
                                <p className="credential-name">{c.name}</p>
                                <p className="credential-issuer">{c.issuer}</p>
                                {c.verifyUrl && (
                                    <a href={c.verifyUrl} target="_blank" rel="noopener" className="credential-verify">
                                        {x.verify} <ExternalLink size={13} />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* 7. In their own words */}
            <Testimonials />

            {/* 8. Selected work */}
            <section className="home-section">
                <div className="home-head">
                    <h2 className="section-title">{t.work.title}</h2>
                </div>
                <ul className="work-strip">
                    {WORK.map((w, i) => (
                        <li key={w.link}>
                            <Link to={to(w.link)} className="work-item">
                                <div className="work-item-img">
                                    <img src={encodeURI(w.image)} alt={projects[i].title} loading="lazy" decoding="async" />
                                </div>
                                <span className="work-item-caption">{projects[i].category}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <Link to={to("/portfolio")} className="btn btn-secondary" style={{ padding: '0.9rem 2.5rem' }}>
                        {t.work.viewAll} <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>

            {/* 9. Questions: native details/summary, so every answer is in the
                prerendered HTML. */}
            <section className="home-section">
                <div className="home-head">
                    <h2 className="section-title">{t.faq.title}</h2>
                </div>
                <div className="faq-list">
                    {t.faq.items.map((f) => (
                        <details key={f.q} className="faq-item">
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* 10. Final CTA */}
            <FinalCta
                title={t.cta.title}
                line={t.cta.line || undefined}
                button={t.cta.button}
                to={to("/contact")}
                photo
                photoAlt={ABOUT[lang].imgAlt}
            />
        </div>
    );
}

function CaseStudyBody({ card, link, readCase }: { card: { category: string; title: string; items: string[] }; link: string; readCase: string }) {
    return (
        <div className="case-study-card-body">
            <p className="case-study-category">{card.category}</p>
            <h3 className="case-study-card-title">{card.title}</h3>
            <ul className="case-study-items-list">
                {card.items.map((item) => (
                    <li key={item} className="case-study-item">
                        <span className="case-study-item-bullet" aria-hidden="true">✦</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <Link to={link} className="case-study-link">
                {readCase} <ArrowRight size={16} />
            </Link>
        </div>
    );
}
