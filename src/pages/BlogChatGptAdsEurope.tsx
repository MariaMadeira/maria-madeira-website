import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, MapPin, Wallet, Layout, Lock, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Seo from "../components/Seo";

const SITE_URL = "https://mariamadeira.com";
const PATH = "/blog/chatgpt-ads-europe";
const PAGE_URL = `${SITE_URL}${PATH}`;
const HEADLINE = "Inside ChatGPT Ads: I opened a European advertiser account so you don't have to";
const DESCRIPTION = "ChatGPT Ads is live in 31 European markets. I opened an advertiser account: the real minimums, the locked settings, the ad format and what it means.";
const OG_IMAGE = "/og/og-blog-chatgpt-ads.png";
const PUBLISHED_ISO = "2026-09-09";
const PUBLISHED_HUMAN = "9 September 2026";

/* ── Facts at a glance: drives the callout panel near the top ── */
const FACTS: { icon: LucideIcon; text: string }[] = [
    { icon: Calendar, text: "Live in 31 European markets since 24 August 2026; self-service since 31 August at ads.openai.com" },
    { icon: User, text: "Ads show only on Free and Go plans; Plus, Pro and Enterprise stay ad-free" },
    { icon: MapPin, text: "Country-level targeting only in Europe (no cities or postcodes)" },
    { icon: Wallet, text: "Minimum budget: 25 US dollars per day in the initial flow" },
    { icon: Layout, text: "Ad format: square image, 50-character title, 52-character subtext" },
    { icon: Lock, text: "Account country, currency and name are permanent once set" },
];

/* ── Minimum spend across the three platforms named in the caveats section ── */
const BUDGETS: { platform: string; daily: string; monthly: string; highlight?: boolean }[] = [
    { platform: "Google Ads", daily: "No minimum", monthly: "None" },
    { platform: "Meta Ads", daily: "No minimum", monthly: "None" },
    { platform: "ChatGPT Ads", daily: "25 US dollars", monthly: "About 750 US dollars", highlight: true },
];

/* ── The ad unit, part by part. The mock beside this list is decorative. ── */
const AD_PARTS: { part: string; spec: string }[] = [
    { part: "Sponsored label", spec: "Applied by OpenAI, sits apart from the answer" },
    { part: "Image", spec: "Square, 800 by 800 pixels" },
    { part: "Advertiser name and logo", spec: "Your registered business name" },
    { part: "Title", spec: "Maximum 50 characters" },
    { part: "Subtext", spec: "Maximum 52 characters" },
];

/* ── Character ceilings, scaled against the widest field in the set ── */
const CHAR_LIMITS: { label: string; chars: number; note: string; highlight?: boolean }[] = [
    { label: "ChatGPT Ads subtext", chars: 52, note: "One field, one promise", highlight: true },
    { label: "Google Ads headline", chars: 30, note: "30 each, up to 3 headlines per ad", highlight: false },
    { label: "Meta Ads primary text", chars: 125, note: "Before the More link truncates it", highlight: false },
];
const MAX_CHARS = Math.max(...CHAR_LIMITS.map((c) => c.chars));

/* ── The two caveats, lead sentence promoted to the card title ── */
const CAVEATS: { icon: LucideIcon; title: string; body: string }[] = [
    {
        icon: Wallet,
        title: "The minimum budget is a real barrier.",
        body: "Google Ads has no minimum: you can run at 2 euros a day. Meta is the same. ChatGPT Ads asks for 25 dollars a day, roughly 750 a month, as the entry ticket. That excludes the cheap exploratory test most small brands are used to. The upside, if there is one: a floor this high forces you to design the test before you spend. Either you commit to a proper 30-day trial with tracking in place, or you stay out. For many food and drink brands, staying out for now is the right call.",
    },
    {
        icon: Shield,
        title: "A \"Sponsored\" label costs trust in the one place people came for honesty.",
        body: "People ask ChatGPT because the answer feels neutral. My sausage test showed why: the model filtered brands by industry awards and hundreds of real customer reviews. An organic recommendation from ChatGPT reads like advice from a well-informed friend. A paid card underneath it reads like an ad, and the contrast is right there on the same screen. If your brand appears only in the paid slot and never in the answer, a reader can draw the obvious conclusion: if it were good, ChatGPT would have recommended it. OpenAI states that ads never influence the answers, and search advertising has converted for decades despite the same trust discount, so paid placement is not worthless. But it works as discovery, not as validation. The validation lives in the organic answer, and that cannot be bought.",
    },
];

/* ── The closing priority order, lead sentence promoted to the card title ── */
const PRIORITIES: { title: string; body: string }[] = [
    {
        title: "AEO first.",
        body: "Reviews, third-party recognition, structured product data and consistent information across the web decide whether ChatGPT recommends you. This layer is free, defensible, and now also defensive.",
    },
    {
        title: "Paid second, and only with a designed test.",
        body: "If you have the organic base and 750 dollars a month to commit for 30 days, the early-mover economics are genuine: reported ad frequency is low, competition is thin, and in the US pilot retail and grocery took the largest share of early inventory because shopping questions dominate ChatGPT's commercial queries.",
    },
    {
        title: "Never paid instead of organic.",
        body: "An ad below an answer that ignores your brand can do more harm than silence.",
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
            "author": { "@type": "Person", "@id": `${SITE_URL}/#person`, "name": "Maria Madeira" },
            "publisher": { "@id": `${SITE_URL}/#person` },
            "datePublished": PUBLISHED_ISO,
            "dateModified": PUBLISHED_ISO,
            "mainEntityOfPage": PAGE_URL,
            "image": `${SITE_URL}${OG_IMAGE}`,
            "isPartOf": { "@id": `${SITE_URL}/blog#blog` },
            "articleSection": "Paid Media",
            "about": [
                { "@type": "Thing", "name": "ChatGPT Ads" },
                { "@type": "Thing", "name": "Answer Engine Optimisation" },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
                { "@type": "ListItem", "position": 3, "name": "Inside ChatGPT Ads in Europe", "item": PAGE_URL },
            ],
        },
    ],
};

/* Shared prose styles for the reading column, matching the other articles. */
const P = { color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" } as const;
const H2 = { fontSize: "1.6rem", marginTop: "3.5rem", marginBottom: "1.25rem", lineHeight: 1.25 } as const;
const linkStyle = { color: "var(--accent-secondary)", fontWeight: 600 } as const;
const strong = { color: "var(--text-primary)", fontWeight: 700 } as const;
const calloutBox = { background: "var(--accent-glow)", border: "1px solid var(--border-color)", borderLeft: "4px solid var(--accent-secondary)", borderRadius: "16px", padding: "clamp(1.5rem, 4vw, 2.5rem)" } as const;

export default function BlogChatGptAdsEurope() {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
            <Seo
                title="Inside ChatGPT Ads in Europe: What I Found | Maria Madeira"
                description={DESCRIPTION}
                path={PATH}
                ogImage={OG_IMAGE}
                jsonLd={ARTICLE_JSON_LD}
            />

            <style>{`
                /* Facts panel: two columns on desktop, one on mobile. */
                .cga-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem 1.75rem; list-style: none; margin: 0; padding: 0; }
                .cga-fact { display: flex; gap: 0.85rem; align-items: flex-start; }
                .cga-fact-icon { flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: var(--accent-secondary); color: #fff; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
                .cga-fact span { color: var(--text-primary); line-height: 1.6; font-size: 0.98rem; }

                /* Visually hidden, still read out. The site has no global utility for this. */
                .cga-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

                /* Budget table: scrolls inside its own frame rather than the page. */
                .cga-table-frame { overflow-x: auto; border: 1px solid var(--border-color); border-radius: 16px; background: var(--bg-secondary); }
                .cga-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
                .cga-table th, .cga-table td { text-align: left; padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--border-color); vertical-align: middle; line-height: 1.55; }
                .cga-table thead th { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-secondary); background: var(--accent-glow); }
                .cga-table tbody tr:last-child td { border-bottom: none; }
                .cga-table tbody th { text-align: left; font-weight: 700; color: var(--text-primary); white-space: nowrap; }
                .cga-table td { color: var(--text-secondary); }
                .cga-row-highlight th, .cga-row-highlight td { background: var(--accent-glow); color: var(--text-primary); font-weight: 600; }
                .cga-row-highlight th:first-child { box-shadow: inset 3px 0 0 var(--accent-secondary); }

                /* Ad format spec: mock unit beside its legend. */
                .cga-adspec { display: grid; grid-template-columns: minmax(0, 260px) minmax(0, 1fr); gap: 2rem; align-items: start; margin: 0; }
                .cga-mock { border: 1px solid var(--border-color); border-radius: 14px; background: var(--bg-secondary); padding: 0.9rem; display: flex; flex-direction: column; gap: 0.7rem; }
                .cga-mock-sponsored { align-self: flex-start; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-secondary); background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 5px; padding: 3px 8px; }
                .cga-mock-image { aspect-ratio: 1 / 1; width: 100%; border-radius: 10px; border: 1px dashed var(--accent-primary); background: repeating-linear-gradient(45deg, var(--bg-primary), var(--bg-primary) 9px, transparent 9px, transparent 18px); display: flex; align-items: center; justify-content: center; text-align: center; font-size: 0.78rem; font-weight: 600; color: var(--accent-secondary); line-height: 1.5; }
                .cga-mock-brand { display: flex; align-items: center; gap: 0.55rem; }
                .cga-mock-logo { width: 22px; height: 22px; border-radius: 50%; background: var(--accent-primary); flex-shrink: 0; }
                .cga-mock-name { font-size: 0.75rem; font-weight: 700; color: var(--text-primary); }
                .cga-mock-title { height: 13px; border-radius: 4px; background: var(--accent-secondary); width: 82%; }
                .cga-mock-sub { height: 10px; border-radius: 4px; background: var(--accent-primary); width: 64%; }
                .cga-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; }
                .cga-legend li { display: flex; gap: 0.85rem; align-items: baseline; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-color); }
                .cga-legend li:last-child { border-bottom: none; padding-bottom: 0; }
                .cga-legend-part { flex: 0 0 185px; font-weight: 700; color: var(--text-primary); font-size: 0.95rem; }
                .cga-legend-spec { color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; }

                /* Character limit bars. */
                .cga-bars { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.4rem; }
                .cga-bar-row { display: grid; grid-template-columns: 170px minmax(0, 1fr) 92px; gap: 0.9rem; align-items: center; }
                .cga-bar-label { font-size: 0.92rem; font-weight: 700; color: var(--text-primary); line-height: 1.4; }
                .cga-bar-note { display: block; font-weight: 400; font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px; }
                .cga-bar-track { background: var(--bg-primary); border-radius: 999px; height: 16px; overflow: hidden; }
                .cga-bar-fill { display: block; height: 100%; border-radius: 999px; background: var(--accent-primary); }
                .cga-bar-fill.is-highlight { background: var(--accent-secondary); }
                .cga-bar-value { font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-align: right; white-space: nowrap; }
                .cga-bar-value.is-highlight { color: var(--accent-secondary); }

                /* Caveats: side by side on desktop. */
                .cga-caveats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }

                @media (max-width: 760px) {
                    .cga-facts { grid-template-columns: 1fr; }
                    .cga-caveats { grid-template-columns: 1fr; }
                    .cga-adspec { grid-template-columns: 1fr; gap: 1.5rem; }
                    .cga-mock { max-width: 260px; margin: 0 auto; }
                    .cga-legend li { flex-direction: column; gap: 0.2rem; }
                    .cga-legend-part { flex: 0 0 auto; }
                    .cga-bar-row { grid-template-columns: 1fr auto; grid-template-areas: "label value" "track track"; row-gap: 0.5rem; }
                    .cga-bar-label { grid-area: label; }
                    .cga-bar-track { grid-area: track; }
                    .cga-bar-value { grid-area: value; align-self: start; }
                    .cga-table { font-size: 0.85rem; }
                    .cga-table th, .cga-table td { padding: 0.7rem 0.75rem; }
                    .cga-table thead th { font-size: 0.65rem; letter-spacing: 0.05em; }
                }
            `}</style>

            <article style={{ maxWidth: "900px", margin: "0 auto" }}>
                <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", color: "var(--accent-secondary)", marginBottom: "2rem", fontWeight: 500 }}>
                    <ArrowLeft size={16} /> All articles
                </Link>

                <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem" }}>
                    Paid Media
                </p>
                <h1 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
                    Inside ChatGPT Ads: I opened a European advertiser account so you don't have to
                </h1>

                {/* byline + dates */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Maria Madeira</span>
                    <span>Published {PUBLISHED_HUMAN}</span>
                    <span>Updated {PUBLISHED_HUMAN}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> 7 min read</span>
                </div>

                <p style={P}>
                    ChatGPT Ads went live across 31 European markets on 24 August 2026. That is every EU member state plus Iceland, Liechtenstein, Norway and Switzerland, joining the UK, which opened in June. Self-service access followed on 31 August: any business registered in these markets can now open an advertiser account at ads.openai.com.
                </p>
                <p style={P}>
                    Most coverage so far repeats OpenAI's press release. I wanted to know what the platform looks like from the inside, for a small European business, so I opened an account. This is what I found, with two organic experiments first, because you cannot understand paid placement in ChatGPT without understanding what already happens for free.
                </p>

                <h2 style={H2}>What launched, in one paragraph</h2>

                {/* Facts panel */}
                <div style={{ ...calloutBox, marginBottom: "1.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 1.25rem" }}>
                        The facts at a glance
                    </p>
                    <ul className="cga-facts">
                        {FACTS.map(({ icon: Icon, text }) => (
                            <li key={text} className="cga-fact">
                                <span className="cga-fact-icon"><Icon size={15} aria-hidden="true" /></span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p style={P}>
                    Ads are clearly labelled, sit apart from the answer itself, and OpenAI states that advertising does not influence what ChatGPT says. The platform supports CPM, CPC and conversion optimisation, custom audiences from first-party data, and measurement through a pixel and Conversions API. The Ads Manager header still says Beta, and it behaves like it, as you will see.
                </p>

                <h2 style={H2}>Before the ads: what ChatGPT already does for free</h2>
                <p style={P}>I ran two tests as an ordinary user.</p>
                <p style={P}>
                    First, a shopping question in Portuguese: do fresh sausages exist in Portugal? ChatGPT answered with product cards, real supermarket products with photos and prices pulled from retailer sites. No brand paid for any of it. This is ChatGPT's organic product discovery, and the brands that appear are the ones whose product data ChatGPT can find, parse and trust.
                </p>
                <p style={P}>
                    Second, a high-intent commercial query: "best British sausages delivered UK". ChatGPT returned a ranked shortlist of five brands with reasons, delivery details and prices, then named its top pick. One detail stood out: the model used the 2026 UK Sausage Week finalist list as a quality filter, reasoning that an industry award beats "random best-of lists". Third-party recognition, structured product data and consistent brand information decided who made the list. That is <Link to="/services/aeo" style={linkStyle}>Answer Engine Optimisation</Link> working, and every brand on that shortlist earned its place without spending a penny.
                </p>
                <p style={P}>
                    Hold that thought, because the paid layer now sits on top of exactly this space.
                </p>

                <h2 style={H2}>Opening the account: the walkthrough</h2>
                <p style={P}>
                    Signing up starts with your website URL. The platform reads your site and generates a draft ad from it, and this first step told me more than any spec sheet.
                </p>
                <p style={P}>
                    <strong style={strong}>The ad is built from your website.</strong> The system extracted my services accurately, which suggests structured data and clear copy feed straight into the draft. It also picked a stock photo of a woman who is not me, and wrote copy around my company's registered location rather than my target market. The lesson for any brand: the auto-generated ad is a starting point that reflects whatever your site communicates, ambiguities included. Review every element before it goes anywhere near a customer.
                </p>
                <p style={P}>
                    <strong style={strong}>The recommended plan is a template, not a recommendation.</strong> My "recommended plan" arrived with targeting set to the United States and a budget of 100 US dollars per day. A Portuguese account, a European business, and the default points at America with a 3,000-dollar monthly spend. A distracted small business could approve that screen and burn a month's budget in the wrong country. Edit everything.
                </p>
                <p style={P}>
                    <strong style={strong}>The real numbers.</strong> The minimum daily budget in the initial flow is 25 US dollars per day, which the platform enforces (I tried 10 and it refused). That is roughly 750 dollars a month as the entry ticket. Not Meta's five-euros-a-day sandbox, but low enough for a controlled 30-day test. Currency localises when you formally create the account: mine offered EUR, with a note that minimums adjust to the account currency.
                </p>
                <p style={P}>
                    <strong style={strong}>Decisions you cannot undo.</strong> Account name, country and currency lock permanently at account creation, and the screen says so in plain text. Budget type (daily versus campaign total) also locks once a campaign starts. Choose carefully, and use the exact registered name of your business.
                </p>
                <p style={P}>
                    <strong style={strong}>The ad format.</strong> One image (square, 800 by 800 pixels), your advertiser name and logo, a title capped at 50 characters and a subtext capped at 52. That subtext limit is brutal: a Google Ads ad gives you three 30-character headlines, 90 characters in total, and Meta's primary text runs to 125 before truncation. ChatGPT gives you 52 for the whole message. There is no room for storytelling, only for one concrete promise. For a food brand, "Award-winning Cumberland sausages, delivered" beats any lifestyle framing. The destination URL locks to your verified domain; you can append a path or query string, which matters for UTM tracking and dedicated landing pages.
                </p>

                {/* Ad format spec card */}
                <figure className="cga-adspec" style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
                    <div className="cga-mock" aria-hidden="true">
                        <span className="cga-mock-sponsored">Sponsored</span>
                        <div className="cga-mock-image">Image<br />800 &times; 800</div>
                        <div className="cga-mock-brand">
                            <span className="cga-mock-logo" />
                            <span className="cga-mock-name">Advertiser name</span>
                        </div>
                        <div className="cga-mock-title" />
                        <div className="cga-mock-sub" />
                    </div>
                    <div>
                        <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 1rem" }}>
                            The ad unit, part by part
                        </p>
                        <ul className="cga-legend">
                            {AD_PARTS.map((p) => (
                                <li key={p.part}>
                                    <span className="cga-legend-part">{p.part}</span>
                                    <span className="cga-legend-spec">{p.spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <figcaption style={{ gridColumn: "1 / -1", color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, fontStyle: "italic" }}>
                        The ChatGPT ad unit. Diagram, not a screenshot: proportions are illustrative.
                    </figcaption>
                </figure>

                {/* Character limit bar chart */}
                <figure style={{ ...calloutBox, margin: "0 0 2.5rem" }}>
                    <p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-secondary)", margin: "0 0 1.5rem" }}>
                        How much copy you get, compared
                    </p>
                    <ul className="cga-bars">
                        {CHAR_LIMITS.map((c) => (
                            <li key={c.label} className="cga-bar-row">
                                <span className="cga-bar-label">
                                    {c.label}
                                    <span className="cga-bar-note">{c.note}</span>
                                </span>
                                <span className="cga-bar-track">
                                    <span
                                        className={`cga-bar-fill${c.highlight ? " is-highlight" : ""}`}
                                        style={{ width: `${(c.chars / MAX_CHARS) * 100}%` }}
                                    />
                                </span>
                                <span className={`cga-bar-value${c.highlight ? " is-highlight" : ""}`}>{c.chars} chars</span>
                            </li>
                        ))}
                    </ul>
                    <figcaption style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "1.5rem" }}>
                        Maximum characters per copy field, scaled against the longest.
                    </figcaption>
                </figure>

                <p style={P}>
                    <strong style={strong}>Payment.</strong> You are charged only for eligible clicks after the ad is approved and serving. Adding a card triggers a temporary authorisation hold, typically released within seven days, and you can save the whole setup without launching anything.
                </p>

                <h2 style={H2}>What the terms say (and why food and drink brands should read them)</h2>
                <p style={P}>
                    Three things in OpenAI's Advertising Tools Terms deserve attention.
                </p>
                <p style={P}>
                    The AI creative tools can generate, translate and adapt your ad, including adapting it dynamically to the context of a user's conversation. Depending on your settings, generated creative can be applied to your campaign automatically. You remain responsible for every claim in it, and OpenAI explicitly does not warrant that generated creative is accurate, legal or compliant. For food and drink, where health claims, allergen statements and origin claims are regulated, that combination demands human supervision of the creative settings from day one.
                </p>
                <p style={P}>
                    Custom audiences accept first-party data only. No data brokers, no purchased lists. Brands that have built genuine email audiences, through <Link to="/services/email-marketing" style={linkStyle}>Klaviyo</Link> or otherwise, arrive with an advantage that cannot be bought.
                </p>
                <p style={P}>
                    The terms already define "Sponsored Agents": conversational AI representatives for a brand inside ChatGPT. Not in the product I saw, but the legal groundwork is laid. Worth watching.
                </p>

                <h2 style={H2}>Two honest caveats before you spend</h2>

                {/* Caveat cards */}
                <div className="cga-caveats" style={{ marginBottom: "2rem" }}>
                    {CAVEATS.map(({ icon: Icon, title, body }) => (
                        <div key={title} className="card" style={{ padding: "1.75rem" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "12px", background: "var(--accent-glow)", color: "var(--accent-secondary)", marginBottom: "1rem" }}>
                                <Icon size={20} aria-hidden="true" />
                            </span>
                            <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.85rem", lineHeight: 1.35, color: "var(--text-primary)" }}>{title}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>{body}</p>
                        </div>
                    ))}
                </div>

                {/* Budget comparison table */}
                <figure style={{ margin: "0 0 1.25rem" }}>
                    <div className="cga-table-frame">
                        <table className="cga-table">
                            <caption className="cga-sr-only">Minimum daily budget compared across Google Ads, Meta Ads and ChatGPT Ads</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Platform</th>
                                    <th scope="col">Minimum daily budget</th>
                                    <th scope="col">Monthly minimum</th>
                                </tr>
                            </thead>
                            <tbody>
                                {BUDGETS.map((b) => (
                                    <tr key={b.platform} className={b.highlight ? "cga-row-highlight" : undefined}>
                                        <th scope="row" style={{ fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap" }}>{b.platform}</th>
                                        <td>{b.daily}</td>
                                        <td>{b.monthly}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <figcaption style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.85rem" }}>
                        Entry cost compared. Google and Meta let you test for the price of a coffee; ChatGPT Ads does not.
                    </figcaption>
                </figure>

                <h2 style={H2}>What this means if you run a food and drink brand</h2>
                <p style={P}>
                    The organic and paid layers now compete for the same conversation, and they are not equals. The organic answer is the recommendation; the paid card is the advert. My second test showed brands winning ChatGPT recommendations today on the strength of awards, reviews, structured data and clear product information. From this month, a competitor can pay to appear beneath that same answer, but they cannot pay their way into the answer itself.
                </p>
                <p style={P}>That makes the priority order clear:</p>

                {/* Priority cards */}
                <ol style={{ listStyle: "none", margin: "0 0 1.5rem", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {PRIORITIES.map((item, i) => (
                        <li key={item.title} className="card" style={{ padding: "1.75rem", display: "flex", gap: "1.15rem", alignItems: "flex-start" }}>
                            <span style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", background: "var(--accent-glow)", border: "2px solid var(--accent-secondary)", color: "var(--accent-secondary)", fontWeight: 700, fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {i + 1}
                            </span>
                            <div>
                                <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem", lineHeight: 1.35, color: "var(--text-primary)" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", margin: 0 }}>{item.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <p style={P}>
                    And the platform's rough edges are the point. US defaults, dollar budgets on European accounts, locked settings, a 52-character copy limit and AI-generated creative that needs supervision: none of this is a reason to ignore the channel, and all of it is a reason not to walk in unprepared.
                </p>
                <p style={P}>
                    If you want to <Link to="/services/aeo" style={linkStyle}>know where your brand stands</Link> before a competitor pays to sit under your answer, I offer a <Link to="/contact" style={linkStyle}>20-minute diagnosis call</Link>. I will show you what ChatGPT says about your category today, with your brand in it or not.
                </p>

                {/* Approved sign-off from the article copy, in the shared AuthorBio treatment. */}
                <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.7 }}>
                    Maria Madeira is an independent growth consultant helping UK and European food and drink brands with SEO, AEO, email marketing and paid acquisition.
                </div>
            </article>
        </div>
    );
}
