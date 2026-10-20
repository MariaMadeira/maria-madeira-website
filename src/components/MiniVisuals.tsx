/**
 * Small SVG visuals for the homepage results cards, the hero chip and the
 * service cards. Each is a designed shape in the site's colour system, never
 * a screenshot: brown (the accent) for the data, grey for "before", green for
 * an increase. Every SVG is role="img" with a label passed in from the copy.
 *
 * The data mirrors the case studies, so the shapes match the published charts:
 * - Google Ads ROAS: the 11 monthly values of ADS_ROAS in ResultCharts.tsx
 *   (1 Oct 2025 to 26 Aug 2026), break-even 400%.
 * - Email: the previous 12 months against the 12 months to July 2025, drawn
 *   in the ratio of the published +88.9% (£134.4K / 1.889).
 * - SEO: clicks 4.5K to 8.0K and average position 15.2 to 9.4, the two ends
 *   published on /case-study-seo.
 */

const ACCENT = "var(--accent-secondary)";
const DEEP = "var(--color-dark-brown)";
const GREY = "#C9C4BD";
const RULE = "var(--border-color)";
const INK_SOFT = "var(--text-secondary)";

/** Same values as ADS_ROAS in src/components/ResultCharts.tsx. */
const ROAS_MONTHLY = [552, 481, 561, 511, 396, 511, 526, 668, 653, 562, 429];
const BREAK_EVEN = 400;

/** Rising sparkline for the hero chip. */
export function Sparkline({ label }: { label: string }) {
    return (
        <svg role="img" aria-label={label} viewBox="0 0 44 24" width="44" height="24" style={{ flexShrink: 0, display: "block" }}>
            <polyline
                points="2,20 9,17 15,18 22,12 29,13 35,7 42,3"
                fill="none"
                stroke={DEEP}
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="42" cy="3" r="2.25" fill={DEEP} />
        </svg>
    );
}

/** Before/after bar pair with a green increase badge. */
export function EmailBarsVisual({ label, badge }: { label: string; badge: string }) {
    const base = 60;
    const full = 46;
    const before = full / 1.889;
    return (
        <svg role="img" aria-label={label} viewBox="0 0 160 64" className="mini-visual">
            <line x1="8" y1={base} x2="112" y2={base} stroke={RULE} strokeWidth="1" />
            <rect x="20" y={base - before} width="34" height={before} rx="3" fill={GREY} />
            <rect x="64" y={base - full} width="34" height={full} rx="3" fill={ACCENT} />
            <rect x="106" y="4" width="52" height="20" rx="10" fill="var(--positive-bg)" />
            <text x="132" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--positive)" fontFamily="var(--font-sans)">{badge}</text>
        </svg>
    );
}

/** Eleven monthly ROAS bars against a dashed break-even line. */
export function RoasBarsVisual({ label, className = "mini-visual" }: { label: string; className?: string }) {
    const base = 60;
    const max = 700;
    const h = (v: number) => (v / max) * 54;
    const step = 144 / ROAS_MONTHLY.length;
    const w = step * 0.62;
    const be = base - h(BREAK_EVEN);
    return (
        <svg role="img" aria-label={label} viewBox="0 0 160 64" className={className}>
            {ROAS_MONTHLY.map((v, i) => (
                <rect key={i} x={8 + i * step + (step - w) / 2} y={base - h(v)} width={w} height={h(v)} rx="1.5" fill={ACCENT} />
            ))}
            <line x1="4" y1={be} x2="156" y2={be} stroke={DEEP} strokeWidth="1.25" strokeDasharray="3 3" />
            <line x1="4" y1={base} x2="156" y2={base} stroke={RULE} strokeWidth="1" />
        </svg>
    );
}

/** A line rising from one value to another, ends labelled. */
export function ClicksLineVisual({ label, from, to, fromText, toText }: { label: string; from: number; to: number; fromText: string; toText: string }) {
    const base = 60;
    const y = (v: number) => base - (v / to) * 44;
    const x0 = 22, x1 = 138;
    return (
        <svg role="img" aria-label={label} viewBox="0 0 160 64" className="mini-visual">
            <line x1="8" y1={base} x2="152" y2={base} stroke={RULE} strokeWidth="1" />
            <path d={`M${x0},${y(from)} L${x1},${y(to)} L${x1},${base} L${x0},${base} Z`} fill={ACCENT} opacity="0.12" />
            <line x1={x0} y1={y(from)} x2={x1} y2={y(to)} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx={x0} cy={y(from)} r="3.5" fill={GREY} />
            <circle cx={x1} cy={y(to)} r="3.5" fill={ACCENT} />
            <text x={x0} y={y(from) - 7} textAnchor="middle" fontSize="10" fill={INK_SOFT} fontFamily="var(--font-sans)">{fromText}</text>
            <text x={x1} y={y(to) - 7} textAnchor="middle" fontSize="10" fontWeight="700" fill={DEEP} fontFamily="var(--font-sans)">{toText}</text>
        </svg>
    );
}

/**
 * Two dots on a vertical position scale (1 at the top, 20 at the bottom),
 * with the page 1 / page 2 boundary (position 10) dashed.
 */
export function PositionVisual({ label, from, to, fromText, toText }: { label: string; from: number; to: number; fromText: string; toText: string }) {
    const top = 6, bottom = 60;
    const y = (p: number) => top + ((p - 1) / 19) * (bottom - top);
    const boundary = y(10.5);
    return (
        <svg role="img" aria-label={label} viewBox="0 0 160 64" className="mini-visual">
            <line x1="40" y1={top} x2="40" y2={bottom} stroke={RULE} strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1={boundary} x2="150" y2={boundary} stroke={RULE} strokeWidth="1.25" strokeDasharray="3 3" />
            <line x1="62" y1={y(from) - 5} x2="92" y2={y(to) + 4} stroke={DEEP} strokeWidth="1.5" strokeLinecap="round" />
            <polyline points={`${85},${y(to) + 2} ${92},${y(to) + 4} ${90},${y(to) - 3}`} fill="none" stroke={DEEP} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="56" cy={y(from)} r="5" fill={GREY} />
            <circle cx="100" cy={y(to)} r="5" fill={ACCENT} />
            <text x="66" y={y(from) + 4} fontSize="10" fill={INK_SOFT} fontFamily="var(--font-sans)">{fromText}</text>
            <text x="110" y={y(to) + 4} fontSize="10" fontWeight="700" fill={DEEP} fontFamily="var(--font-sans)">{toText}</text>
        </svg>
    );
}

/**
 * A stylised AI assistant answer: a question bubble, answer lines and one
 * highlighted brand pill with its citation. Abstract shapes only, no text.
 */
export function AiAnswerVisual({ label }: { label: string }) {
    return (
        <svg role="img" aria-label={label} viewBox="0 0 240 150" preserveAspectRatio="xMidYMid meet" className="service-card-svg">
            <rect x="0" y="0" width="240" height="150" fill="var(--bg-primary)" />
            {/* the question */}
            <rect x="110" y="16" width="112" height="22" rx="11" fill={ACCENT} opacity="0.22" />
            <rect x="122" y="25" width="80" height="4" rx="2" fill={DEEP} opacity="0.45" />
            {/* the assistant */}
            <circle cx="30" cy="62" r="11" fill={DEEP} />
            <path d="M30 55 L32 60 L37 62 L32 64 L30 69 L28 64 L23 62 L28 60 Z" fill="#fff" />
            <rect x="50" y="50" width="174" height="86" rx="12" fill="var(--bg-secondary)" stroke={RULE} />
            <rect x="62" y="64" width="120" height="5" rx="2.5" fill={GREY} />
            {/* the brand, named and highlighted */}
            <rect x="62" y="78" width="74" height="18" rx="9" fill={ACCENT} />
            <path d="M74 81.5 L75.6 85.6 L80 87 L75.6 88.4 L74 92.5 L72.4 88.4 L68 87 L72.4 85.6 Z" fill="#fff" />
            <rect x="84" y="84.5" width="44" height="5" rx="2.5" fill="#fff" opacity="0.9" />
            <rect x="142" y="84.5" width="66" height="5" rx="2.5" fill={GREY} />
            <rect x="62" y="102" width="146" height="5" rx="2.5" fill={GREY} />
            <rect x="62" y="114" width="96" height="5" rx="2.5" fill={GREY} />
            {/* the citation */}
            <circle cx="172" cy="116.5" r="7" fill="none" stroke={ACCENT} strokeWidth="1.5" />
            <rect x="169.5" y="113" width="5" height="7" rx="1" fill={ACCENT} />
        </svg>
    );
}
