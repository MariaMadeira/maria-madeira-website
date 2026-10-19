/**
 * Static result charts for the case studies.
 *
 * Every chart is inline SVG rendered from the data arrays below: no chart
 * library, no client-side JavaScript, nothing to hydrate. That keeps them in the
 * prerendered HTML, which is the point — these are the numbers AI answer engines
 * and search crawlers read straight off the page.
 *
 * Responsive strategy: an SVG with a viewBox scales its text along with its
 * geometry, so one drawing cannot hold axis labels inside a readable band across
 * the 300px–850px range these pages span. Each chart therefore ships two
 * drawings — a wide landscape one and a narrow portrait one (bar charts flip to
 * horizontal, where eleven month labels still fit) — swapped by a media query at
 * 940px. `display: none` keeps the hidden twin out of the accessibility tree, so
 * screen readers meet each chart once. Font sizes are in user units, chosen so
 * the rendered text lands at roughly 12.6–13.5px wide and 12.8–18px narrow.
 *
 * Colours are the site tokens (--accent-secondary, --color-dark-brown) on a
 * white panel. The pair clears CVD separation (ΔE 19.9 protan / 20.0 normal) and
 * 3:1 contrast on white; it sits below the usual chroma floor because the brand
 * palette is deliberately desaturated, so identity is carried by a legend and
 * direct labels rather than by hue alone.
 */

import { EMAIL_PERIODS } from "../data/emailRevenue";

/* ── Source data ───────────────────────────────────────────
 * Google Ads: full account export, 1 October 2025 to 26 August 2026 (11 months).
 * ROAS is revenue ÷ spend for the same month, so the three arrays reconcile.
 * Totals: £26,512 spend, £141,073 revenue, 532% blended ROAS.
 */
const ADS_MONTHS = ["Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26", "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26"];
const ADS_ROAS = [552, 481, 561, 511, 396, 511, 526, 668, 653, 562, 429];
const ADS_SPEND = [1788, 2871, 2868, 2147, 2190, 2454, 2316, 2206, 2475, 2828, 2369];
const ADS_REVENUE = [9861, 13793, 16075, 10976, 8675, 12534, 12185, 14740, 16167, 15901, 10166];
const BREAK_EVEN = 400;
const AUGUST_NOTE = "August 2026 covers 1 to 26 August and is understated by conversion lag.";
const ADS_SOURCE = "Source: Google Ads, full account export";


/* ── Design tokens, mirrored as literals so the SVG can use them ── */
const ACCENT = "#B08968";      /* --accent-secondary */
const DEEP = "#724f37";        /* --color-dark-brown */
const INK = "#3B312C";         /* --text-primary */
const INK_SOFT = "#6B5B52";    /* --text-secondary */
const RULE = "#E8E2DB";        /* --border-color */
const SURFACE = "#ffffff";     /* --bg-secondary, the panel the charts sit on */
const NEGATIVE = "var(--negative)"; /* shared with the case study tiles */

/* ── Formatting (hand-rolled so server and client always agree) ── */
const commas = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const gbp = (n: number) => `£${commas(n)}`;
const gbpShort = (n: number) => (n === 0 ? "£0" : `£${n / 1000}K`);
const pct = (n: number) => `${n}%`;
const r2 = (n: number) => Number(n.toFixed(2));

/* ── Bar paths: rounded data-end, square at the baseline ── */
function barUp(x: number, top: number, w: number, base: number, radius: number) {
    const rr = Math.max(0, Math.min(radius, w / 2, base - top));
    return `M${r2(x)},${r2(base)}V${r2(top + rr)}Q${r2(x)},${r2(top)} ${r2(x + rr)},${r2(top)}H${r2(x + w - rr)}Q${r2(x + w)},${r2(top)} ${r2(x + w)},${r2(top + rr)}V${r2(base)}Z`;
}

function barRight(base: number, y: number, end: number, h: number, radius: number) {
    const rr = Math.max(0, Math.min(radius, h / 2, end - base));
    return `M${r2(base)},${r2(y)}H${r2(end - rr)}Q${r2(end)},${r2(y)} ${r2(end)},${r2(y + rr)}V${r2(y + h - rr)}Q${r2(end)},${r2(y + h)} ${r2(end - rr)},${r2(y + h)}H${r2(base)}Z`;
}

/* ── Shared shapes ─────────────────────────────────────── */
interface Series {
    name: string;
    colour: string;
    values: number[];
    /** Per-bar override, for marking a single value that means something else. */
    pointColours?: (string | null)[];
}

interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

interface ChartFigureProps {
    /** Visible chart title. The SVG repeats it in its <title> for assistive tech. */
    title: string;
    /** Optional line under the title, for the window or unit the chart covers. */
    subtitle?: string;
    /**
     * Render the caption as a real <h3>. Charts that sit under a section <h2>
     * need one, or the next heading on the page (the footer's <h4>) skips a
     * level. Charts that sit directly under the page <h1> must NOT set it, since
     * h1 -> h3 would skip instead.
     */
    headingLevel?: 3;
    note?: string;
    source?: string;
    legend?: Series[];
    children: React.ReactNode;
}

function ChartFigure({ title, subtitle, headingLevel, note, source, legend, children }: ChartFigureProps) {
    return (
        <figure className="chart-panel">
            <figcaption className="chart-title">
                {headingLevel === 3 ? <h3 className="chart-title-heading">{title}</h3> : title}
                {subtitle && <span className="chart-subtitle">{subtitle}</span>}
            </figcaption>
            {legend && (
                <ul className="chart-legend">
                    {legend.map((s) => (
                        <li key={s.name} className="chart-legend-item">
                            <span className="chart-legend-swatch" style={{ background: s.colour }} aria-hidden="true" />
                            {s.name}
                        </li>
                    ))}
                </ul>
            )}
            {children}
            {note && <p className="chart-note">{note}</p>}
            {source && <p className="chart-source">{source}</p>}
        </figure>
    );
}

/* ── Vertical grouped bars (wide variant of charts A and B) ── */
interface VerticalBarsProps {
    id: string;
    title: string;
    desc: string;
    margin: Margin;
    categories: string[];
    series: Series[];
    yMax: number;
    yTicks: number[];
    tickLabel: (n: number) => string;
    barWidth: number;
    refLine?: { value: number; label: string };
    marks?: { series: number; index: number; text: string }[];
}

const WIDE_W = 720;
const WIDE_FONT = 11.5;

function VerticalBars({ id, title, desc, margin, categories, series, yMax, yTicks, tickLabel, barWidth, refLine, marks = [] }: VerticalBarsProps) {
    const height = 330;
    const plotW = WIDE_W - margin.left - margin.right;
    const plotH = height - margin.top - margin.bottom;
    const base = margin.top + plotH;
    const band = plotW / categories.length;
    const groupW = series.length * barWidth + (series.length - 1) * 2;
    const y = (v: number) => base - (v / yMax) * plotH;

    return (
        <svg
            className="chart-svg chart-svg-wide"
            viewBox={`0 0 ${WIDE_W} ${height}`}
            role="img"
            aria-labelledby={`${id}-t ${id}-d`}
            fontSize={WIDE_FONT}
        >
            <title id={`${id}-t`}>{title}</title>
            <desc id={`${id}-d`}>{desc}</desc>

            {yTicks.map((t) => (
                <g key={t}>
                    {!(refLine && t === refLine.value) && (
                        <line x1={margin.left} x2={margin.left + plotW} y1={r2(y(t))} y2={r2(y(t))} stroke={RULE} strokeWidth={1} />
                    )}
                    <text x={margin.left - 8} y={r2(y(t)) + 4} textAnchor="end" fill={INK_SOFT}>
                        {tickLabel(t)}
                    </text>
                </g>
            ))}

            {categories.map((c, i) => {
                const groupX = margin.left + band * i + (band - groupW) / 2;
                return (
                    <g key={c}>
                        {series.map((s, si) => (
                            <path
                                key={s.name}
                                d={barUp(groupX + si * (barWidth + 2), y(s.values[i]), barWidth, base, 3.4)}
                                fill={s.pointColours?.[i] ?? s.colour}
                            />
                        ))}
                        <text x={r2(margin.left + band * i + band / 2)} y={base + 20} textAnchor="middle" fill={INK_SOFT}>
                            {c}
                        </text>
                    </g>
                );
            })}

            {refLine && (
                <g>
                    <line
                        x1={margin.left}
                        x2={margin.left + plotW}
                        y1={r2(y(refLine.value))}
                        y2={r2(y(refLine.value))}
                        stroke={INK_SOFT}
                        strokeWidth={1.5}
                        strokeDasharray="6 4"
                    />
                    <text x={margin.left + plotW + 10} y={r2(y(refLine.value)) + 4} fill={INK} fontWeight={600}>
                        {refLine.label}
                    </text>
                </g>
            )}

            {marks.map((m) => {
                const groupX = margin.left + band * m.index + (band - groupW) / 2;
                return (
                    <text
                        key={`${m.series}-${m.index}`}
                        x={r2(groupX + m.series * (barWidth + 2) + barWidth / 2)}
                        y={r2(y(series[m.series].values[m.index])) - 7}
                        textAnchor="middle"
                        fill={INK}
                        fontWeight={600}
                    >
                        {m.text}
                    </text>
                );
            })}
        </svg>
    );
}

/* ── Horizontal grouped bars (narrow variant of charts A and B) ── */
interface HorizontalBarsProps {
    id: string;
    title: string;
    desc: string;
    margin: Margin;
    categories: string[];
    series: Series[];
    xMax: number;
    xTicks: number[];
    tickLabel: (n: number) => string;
    barHeight: number;
    rowGap: number;
    refLine?: { value: number; label: string };
}

const NARROW_W = 400;
const NARROW_FONT = 18;

function HorizontalBars({ id, title, desc, margin, categories, series, xMax, xTicks, tickLabel, barHeight, rowGap, refLine }: HorizontalBarsProps) {
    const groupH = series.length * barHeight + (series.length - 1) * 2;
    const row = groupH + rowGap;
    const plotH = row * categories.length;
    const height = margin.top + plotH + margin.bottom;
    const plotW = NARROW_W - margin.left - margin.right;
    const x = (v: number) => margin.left + (v / xMax) * plotW;

    return (
        <svg
            className="chart-svg chart-svg-narrow"
            viewBox={`0 0 ${NARROW_W} ${r2(height)}`}
            role="img"
            aria-labelledby={`${id}-t ${id}-d`}
            fontSize={NARROW_FONT}
        >
            <title id={`${id}-t`}>{title}</title>
            <desc id={`${id}-d`}>{desc}</desc>

            {xTicks.map((t) => (
                <g key={t}>
                    {!(refLine && t === refLine.value) && (
                        <line x1={r2(x(t))} x2={r2(x(t))} y1={margin.top} y2={r2(margin.top + plotH)} stroke={RULE} strokeWidth={1} />
                    )}
                    <text x={r2(x(t))} y={r2(margin.top + plotH) + 26} textAnchor="middle" fill={INK_SOFT}>
                        {tickLabel(t)}
                    </text>
                </g>
            ))}

            {refLine && (
                <g>
                    <line
                        x1={r2(x(refLine.value))}
                        x2={r2(x(refLine.value))}
                        y1={margin.top - 6}
                        y2={r2(margin.top + plotH)}
                        stroke={INK_SOFT}
                        strokeWidth={1.5}
                        strokeDasharray="6 4"
                    />
                    <text x={r2(x(refLine.value))} y={margin.top - 14} textAnchor="middle" fill={INK} fontWeight={600}>
                        {refLine.label}
                    </text>
                </g>
            )}

            {categories.map((c, i) => {
                const groupY = margin.top + row * i + rowGap / 2;
                return (
                    <g key={c}>
                        {series.map((s, si) => (
                            <path
                                key={s.name}
                                d={barRight(margin.left, groupY + si * (barHeight + 2), x(s.values[i]), barHeight, 5.4)}
                                fill={s.pointColours?.[i] ?? s.colour}
                            />
                        ))}
                        <text x={margin.left - 8} y={r2(groupY + groupH / 2) + 6} textAnchor="end" fill={INK_SOFT}>
                            {c}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}

/* ── Chart A: monthly ROAS vs break-even ─────────────────── */
export function MonthlyRoasChart() {
    const title = "Monthly ROAS vs break-even";
    const desc = `Bar chart of monthly return on ad spend from October 2025 to August 2026, against a ${BREAK_EVEN}% break-even line. ${ADS_MONTHS.map((m, i) => `${m} ${ADS_ROAS[i]}%`).join(", ")}. Ten of the eleven months sit above break-even; February 2026 at 396% is the exception and is the only bar shown in the negative colour. ${AUGUST_NOTE}`;
    /* February 2026 is the single month under break-even, so it wears the
     * negative token. The 396% direct label and its position under the dashed
     * rule carry the same meaning without relying on colour. */
    const belowBreakEven = ADS_ROAS.map((v) => (v < BREAK_EVEN ? NEGATIVE : null));
    const series: Series[] = [{ name: "Monthly ROAS", colour: ACCENT, values: ADS_ROAS, pointColours: belowBreakEven }];
    const refLine = { value: BREAK_EVEN, label: "Break-even" };

    return (
        <ChartFigure title={title} headingLevel={3} note={`One month below the ${BREAK_EVEN}% break-even. ${AUGUST_NOTE}`} source={ADS_SOURCE}>
            <VerticalBars
                id="roas-w"
                title={title}
                desc={desc}
                margin={{ top: 26, right: 100, bottom: 42, left: 46 }}
                categories={ADS_MONTHS}
                series={series}
                yMax={700}
                yTicks={[0, 200, 400, 600]}
                tickLabel={pct}
                barWidth={20}
                refLine={refLine}
                marks={[
                    { series: 0, index: 4, text: "396%" },
                    { series: 0, index: 7, text: "668%" },
                ]}
            />
            <HorizontalBars
                id="roas-n"
                title={title}
                desc={desc}
                // left clears the widest month label ("May 26", 63.4 units at
                // font 18); right clears half the widest axis tick.
                margin={{ top: 34, right: 26, bottom: 40, left: 78 }}
                categories={ADS_MONTHS}
                series={series}
                xMax={700}
                xTicks={[0, 200, 400, 600]}
                tickLabel={pct}
                barHeight={13}
                rowGap={11}
                refLine={refLine}
            />
        </ChartFigure>
    );
}

/* ── Chart B: monthly spend vs attributed revenue ────────── */
export function SpendVsRevenueChart() {
    const title = "Monthly spend vs attributed revenue";
    const desc = `Grouped bar chart comparing ad spend with attributed revenue each month from October 2025 to August 2026. ${ADS_MONTHS.map((m, i) => `${m}, spend ${gbp(ADS_SPEND[i])}, revenue ${gbp(ADS_REVENUE[i])}`).join("; ")}. Totals: ${gbp(26512)} spend and ${gbp(141073)} revenue. ${AUGUST_NOTE}`;
    const series: Series[] = [
        { name: "Ad spend", colour: DEEP, values: ADS_SPEND },
        { name: "Attributed revenue", colour: ACCENT, values: ADS_REVENUE },
    ];

    return (
        <ChartFigure title={title} headingLevel={3} note={AUGUST_NOTE} source={ADS_SOURCE} legend={series}>
            <VerticalBars
                id="spend-w"
                title={title}
                desc={desc}
                margin={{ top: 26, right: 18, bottom: 42, left: 52 }}
                categories={ADS_MONTHS}
                series={series}
                yMax={18000}
                yTicks={[0, 6000, 12000, 18000]}
                tickLabel={gbpShort}
                barWidth={20}
                marks={[{ series: 1, index: 8, text: gbp(16167) }]}
            />
            <HorizontalBars
                id="spend-n"
                title={title}
                desc={desc}
                // Matches the ROAS chart so the two read as one system.
                margin={{ top: 12, right: 26, bottom: 40, left: 78 }}
                categories={ADS_MONTHS}
                series={series}
                xMax={18000}
                xTicks={[0, 6000, 12000, 18000]}
                tickLabel={gbpShort}
                barHeight={13}
                rowGap={10}
            />
        </ChartFigure>
    );
}

/** Charts A and B, in order, for the Google Ads case study. */
export function GoogleAdsCharts() {
    return (
        <div className="chart-stack">
            <MonthlyRoasChart />
            <SpendVsRevenueChart />
        </div>
    );
}

/* ── AEO section data (Google Search Console + Semrush) ──────
 * Weekly average of daily impressions in Google's AI features,
 * 18 May to 30 August 2026. Values are week-starting.
 */
const AI_WEEKS = ["18 May", "25 May", "1 Jun", "8 Jun", "15 Jun", "22 Jun", "29 Jun", "6 Jul", "13 Jul", "20 Jul", "27 Jul", "3 Aug", "10 Aug", "17 Aug", "24 Aug"];
const AI_IMPRESSIONS = [1393, 1710, 1951, 2369, 2516, 2304, 2736, 2646, 2621, 2948, 3137, 3661, 4143, 3359, 3044];
export const AI_SOURCE = "Sources: Google Search Console (Generative AI features report, available from 18 May 2026), Semrush AI Visibility, August 2026.";

/* Semrush AI Visibility, August 2026. Competitors stay unnamed by request, so
 * the three trailing rows share a label; the desc enumerates them by value. */
const VISIBILITY = [
    { label: "Category leader", value: 31, highlight: false },
    { label: "The Black Farmer", value: 27, highlight: true },
    { label: "Competitor", value: 22, highlight: false },
    { label: "Competitor", value: 22, highlight: false },
    { label: "Competitor", value: 14, highlight: false },
];
/* De-emphasis grey for the unhighlighted bars. Clears both separation gates
 * against the accent (ΔE 17.3 normal, 16.6 deutan); its sub-3:1 contrast on the
 * white panel is relieved by a value label on every bar. */
const MUTED = "#C9C4BD";

const kLabel = (n: number) => (n === 0 ? "0" : `${n / 1000}K`);

/* ── Chart: daily impressions in Google's AI features ── */
/** Shared by every chart that ships a hand-built wide and narrow drawing. */
interface ChartVariantProps {
    variant: "wide" | "narrow";
    desc: string;
}

function AiImpressionsLine({ variant, desc }: ChartVariantProps) {
    const wide = variant === "wide";
    const width = wide ? WIDE_W : NARROW_W;
    const font = wide ? WIDE_FONT : NARROW_FONT;
    const height = wide ? 330 : 320;
    const margin = wide ? { top: 30, right: 24, bottom: 48, left: 46 } : { top: 34, right: 16, bottom: 52, left: 52 };
    const plotW = width - margin.left - margin.right;
    const plotH = height - margin.top - margin.bottom;
    const bottom = margin.top + plotH;
    const Y_MAX = 5000;
    const ticks = [0, 1000, 2000, 3000, 4000, 5000];
    const x = (i: number) => margin.left + (plotW / (AI_IMPRESSIONS.length - 1)) * i;
    const y = (v: number) => bottom - (v / Y_MAX) * plotH;

    const line = AI_IMPRESSIONS.map((v, i) => `${r2(x(i))},${r2(y(v))}`).join(" ");
    const area = `M${r2(x(0))},${r2(bottom)} L${line.split(" ").join(" L")} L${r2(x(AI_IMPRESSIONS.length - 1))},${r2(bottom)} Z`;

    const last = AI_IMPRESSIONS.length - 1;
    /* First and last only. The first sits where the line climbs steeply, so on
     * the narrow drawing its label is pushed up and right to clear the stroke. */
    const marked = [
        { i: 0, text: "1.4K", anchor: "start" as const, dx: wide ? 5 : 13, dy: wide ? 18 : 38 },
        { i: last, text: "3.0K", anchor: "end" as const, dx: 0, dy: wide ? 14 : 18 },
    ];
    /* Month ticks only: the first week falling in each month. */
    const xLabelIdx = [0, 2, 7, 11];
    const xLabelText = ["May", "Jun", "Jul", "Aug"];

    return (
        <svg
            className={`chart-svg chart-svg-${variant}`}
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-labelledby={`ai-imp-${variant}-t ai-imp-${variant}-d`}
            fontSize={font}
        >
            <title id={`ai-imp-${variant}-t`}>Daily impressions in Google&apos;s AI features</title>
            <desc id={`ai-imp-${variant}-d`}>{desc}</desc>

            {ticks.map((t) => (
                <g key={t}>
                    <line x1={margin.left} x2={margin.left + plotW} y1={r2(y(t))} y2={r2(y(t))} stroke={RULE} strokeWidth={1} />
                    <text x={margin.left - 8} y={r2(y(t)) + (wide ? 4 : 6)} textAnchor="end" fill={INK_SOFT}>{kLabel(t)}</text>
                </g>
            ))}

            <path d={area} fill={ACCENT} opacity={0.12} />
            <polyline points={line} fill="none" stroke={ACCENT} strokeWidth={wide ? 2 : 3} strokeLinecap="round" strokeLinejoin="round" />

            {marked.map((m) => (
                <g key={m.i}>
                    <circle cx={r2(x(m.i))} cy={r2(y(AI_IMPRESSIONS[m.i]))} r={wide ? 4 : 6} fill={ACCENT} stroke={SURFACE} strokeWidth={2} />
                    <text x={r2(x(m.i) + m.dx)} y={r2(y(AI_IMPRESSIONS[m.i]) - m.dy)} textAnchor={m.anchor} fill={INK} fontWeight={600}>{m.text}</text>
                </g>
            ))}

            {xLabelIdx.map((i, n) => (
                <text
                    key={i}
                    x={r2(x(i))}
                    y={bottom + (wide ? 24 : 30)}
                    textAnchor={n === 0 ? "start" : "middle"}
                    fill={INK_SOFT}
                >
                    {xLabelText[n]}
                </text>
            ))}
        </svg>
    );
}

/* ── Chart: Semrush AI Visibility across the tracked set ── */
function AiVisibilityBars({ variant, desc }: ChartVariantProps) {
    const wide = variant === "wide";
    const X_MAX = 35;

    if (wide) {
        const margin = { top: 16, right: 52, bottom: 40, left: 152 };
        const barH = 20, rowGap = 16;
        const plotH = VISIBILITY.length * (barH + rowGap);
        const height = margin.top + plotH + margin.bottom;
        const plotW = WIDE_W - margin.left - margin.right;
        const x = (v: number) => margin.left + (v / X_MAX) * plotW;
        return (
            <svg className="chart-svg chart-svg-wide" viewBox={`0 0 ${WIDE_W} ${height}`} role="img" aria-labelledby="ai-vis-wide-t ai-vis-wide-d" fontSize={WIDE_FONT}>
                <title id="ai-vis-wide-t">Semrush AI Visibility score across the tracked set</title>
                <desc id="ai-vis-wide-d">{desc}</desc>
                {[0, 10, 20, 30].map((t) => (
                    <g key={t}>
                        <line x1={r2(x(t))} x2={r2(x(t))} y1={margin.top} y2={r2(margin.top + plotH)} stroke={RULE} strokeWidth={1} />
                        <text x={r2(x(t))} y={r2(margin.top + plotH) + 24} textAnchor="middle" fill={INK_SOFT}>{t}</text>
                    </g>
                ))}
                {VISIBILITY.map((row, i) => {
                    const top = margin.top + i * (barH + rowGap) + rowGap / 2;
                    return (
                        <g key={i}>
                            <path d={barRight(margin.left, top, x(row.value), barH, 3.4)} fill={row.highlight ? ACCENT : MUTED} />
                            <text x={margin.left - 10} y={top + barH / 2 + 4} textAnchor="end" fill={row.highlight ? INK : INK_SOFT} fontWeight={row.highlight ? 600 : 400}>{row.label}</text>
                            <text x={r2(x(row.value)) + 8} y={top + barH / 2 + 4} fill={INK} fontWeight={600}>{row.value}</text>
                        </g>
                    );
                })}
            </svg>
        );
    }

    /* Narrow: labels sit above their bar, value right-aligned on the same line,
     * so a 16-character brand name does not eat half the width as a gutter. */
    const margin = { top: 6, right: 4, bottom: 6, left: 0 };
    const rowH = 62, barH = 16;
    const plotW = NARROW_W - margin.left - margin.right;
    const height = margin.top + VISIBILITY.length * rowH + margin.bottom;
    const x = (v: number) => (v / X_MAX) * plotW;
    return (
        <svg className="chart-svg chart-svg-narrow" viewBox={`0 0 ${NARROW_W} ${height}`} role="img" aria-labelledby="ai-vis-narrow-t ai-vis-narrow-d" fontSize={NARROW_FONT}>
            <title id="ai-vis-narrow-t">Semrush AI Visibility score across the tracked set</title>
            <desc id="ai-vis-narrow-d">{desc}</desc>
            {VISIBILITY.map((row, i) => {
                const top = margin.top + i * rowH;
                return (
                    <g key={i}>
                        <text x={0} y={top + 18} fill={row.highlight ? INK : INK_SOFT} fontWeight={row.highlight ? 600 : 400}>{row.label}</text>
                        <text x={plotW} y={top + 18} textAnchor="end" fill={INK} fontWeight={600}>{row.value}</text>
                        <rect x={0} y={top + 28} width={plotW} height={barH} rx={3} fill={RULE} opacity={0.5} />
                        <path d={barRight(0, top + 28, x(row.value), barH, 5.4)} fill={row.highlight ? ACCENT : MUTED} />
                    </g>
                );
            })}
        </svg>
    );
}

/** Line chart of daily impressions in Google's AI features. */
export function AiImpressionsChart() {
    const desc = `Line chart of the weekly average of daily impressions in Google's AI features, 18 May to 30 August 2026. ${AI_WEEKS.map((w, i) => `week starting ${w}, ${commas(AI_IMPRESSIONS[i])}`).join("; ")}. The series rises from 1,393 to a peak of 4,143 in the week starting 10 August, then eases to 3,044.`;
    return (
        <ChartFigure title="Daily impressions in Google's AI features" subtitle="Weekly average, 18 May to 30 August 2026" headingLevel={3}>
            <AiImpressionsLine variant="wide" desc={desc} />
            <AiImpressionsLine variant="narrow" desc={desc} />
        </ChartFigure>
    );
}

/** Horizontal bars of Semrush AI Visibility across the tracked set. */
export function AiVisibilityChart() {
    const desc = "Horizontal bar chart of Semrush AI Visibility scores across five tracked brands. The category leader scores 31, The Black Farmer 27, and three further competitors score 22, 22 and 14. Only The Black Farmer is highlighted.";
    return (
        <ChartFigure
            title="2nd of 5 in Semrush AI Visibility"
            subtitle="Gap to the category leader cut from 8 points to 4 in three weeks, 5 to 24 August 2026."
            headingLevel={3}
        >
            <AiVisibilityBars variant="wide" desc={desc} />
            <AiVisibilityBars variant="narrow" desc={desc} />
        </ChartFigure>
    );
}


/* ── Chart: 30-day re-evaluation outcomes ────────────────────
 * 117 pages re-evaluated. Green and red are far apart in normal vision but
 * close under deuteranopia, so they are never adjacent here (the neutral sits
 * between them) and the legend names and counts every segment.
 */
const OUTCOMES = [
    { label: "improved", value: 60, fill: "var(--positive)" },
    { label: "stable or mixed", value: 52, fill: MUTED },
    { label: "declined, each with a diagnosed cause", value: 5, fill: "var(--negative)" },
];

/** Single stacked bar of the 117 re-evaluated pages. */
export function OutcomesBar() {
    const total = OUTCOMES.reduce((n, o) => n + o.value, 0);
    const W = 720, H = 44, GAP = 2, R = 6;
    const usable = W - GAP * (OUTCOMES.length - 1);
    const desc = `Stacked bar of ${total} pages re-evaluated at 30 days: ${OUTCOMES.map((o) => `${o.value} ${o.label}`).join(", ")}.`;
    /* Offsets computed up front rather than accumulated during render. */
    const segs = OUTCOMES.reduce<{ o: typeof OUTCOMES[number]; x: number; w: number }[]>((acc, o) => {
        const prev = acc[acc.length - 1];
        const w = (o.value / total) * usable;
        return [...acc, { o, w, x: prev ? prev.x + prev.w + GAP : 0 }];
    }, []);
    return (
        <svg
            className="chart-svg"
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-labelledby="outcomes-t outcomes-d"
            preserveAspectRatio="none"
            style={{ height: "44px" }}
        >
            <title id="outcomes-t">Outcomes of the 30-day re-evaluation</title>
            <desc id="outcomes-d">{desc}</desc>
            {segs.map(({ o, x, w }, i) => {
                const first = i === 0, last = i === segs.length - 1;
                /* Round only the outer ends so the bar reads as one track. */
                const d = first || last
                    ? `M${r2(x + (first ? R : 0))},0 H${r2(x + w - (last ? R : 0))}${last ? ` Q${r2(x + w)},0 ${r2(x + w)},${R} V${H - R} Q${r2(x + w)},${H} ${r2(x + w - R)},${H}` : ` V${H}`} H${r2(x + (first ? R : 0))}${first ? ` Q${r2(x)},${H} ${r2(x)},${H - R} V${R} Q${r2(x)},0 ${r2(x + R)},0` : ` V0`} Z`
                    : `M${r2(x)},0 H${r2(x + w)} V${H} H${r2(x)} Z`;
                return <path key={o.label} d={d} fill={o.fill} />;
            })}
        </svg>
    );
}


const EMAIL_NOTE = "2021 covers September to December, when the programme started.";
const EMAIL_SOURCE = "Source: Klaviyo Business Overview exports.";
/* Campaigns take the deeper brown and sit at the base; flows take the lighter
 * brown on top. The pair clears CVD separation (ΔE 19.9 protan, 20.0 normal),
 * and identity is carried by the legend and the labelled totals as well as hue. */
const EMAIL_SERIES: Series[] = [
    { name: "Campaigns", colour: DEEP, values: EMAIL_PERIODS.map((p) => p.campaigns) },
    { name: "Automated flows", colour: ACCENT, values: EMAIL_PERIODS.map((p) => p.flows) },
];
const EMAIL_Y_MAX = 150;
const EMAIL_TICKS = [0, 50, 100, 150];
const kGbp = (n: number) => (n === 0 ? "£0" : `£${n}K`);
/* 2px of surface between the segments, so the boundary reads as a gap rather
 * than a colour change. */
const STACK_GAP = 2;

function EmailRevenueStack({ variant, desc }: ChartVariantProps) {
    const titleId = `email-rev-${variant}-t`;
    const descId = `email-rev-${variant}-d`;

    if (variant === "wide") {
        const height = 340;
        const margin = { top: 34, right: 18, bottom: 58, left: 56 };
        const plotW = WIDE_W - margin.left - margin.right;
        const plotH = height - margin.top - margin.bottom;
        const base = margin.top + plotH;
        const band = plotW / EMAIL_PERIODS.length;
        const barW = 58;
        const y = (v: number) => base - (v / EMAIL_Y_MAX) * plotH;

        return (
            <svg
                className="chart-svg chart-svg-wide"
                viewBox={`0 0 ${WIDE_W} ${height}`}
                role="img"
                aria-labelledby={`${titleId} ${descId}`}
                fontSize={WIDE_FONT}
            >
                <title id={titleId}>Attributed email revenue by period</title>
                <desc id={descId}>{desc}</desc>

                {EMAIL_TICKS.map((t) => (
                    <g key={t}>
                        <line x1={margin.left} x2={margin.left + plotW} y1={r2(y(t))} y2={r2(y(t))} stroke={RULE} strokeWidth={1} />
                        <text x={margin.left - 8} y={r2(y(t)) + 4} textAnchor="end" fill={INK_SOFT}>{kGbp(t)}</text>
                    </g>
                ))}

                {EMAIL_PERIODS.map((p, i) => {
                    const centre = margin.left + band * i + band / 2;
                    const x = centre - barW / 2;
                    const topCampaigns = y(p.campaigns);
                    const topStack = y(p.campaigns + p.flows);
                    return (
                        <g key={p.lines[0]}>
                            {/* Base segment: square at the baseline and under the gap. */}
                            <rect x={r2(x)} y={r2(topCampaigns)} width={barW} height={r2(base - topCampaigns)} fill={DEEP} />
                            <path d={barUp(x, topStack - STACK_GAP, barW, topCampaigns - STACK_GAP, 3.4)} fill={ACCENT} />
                            <text x={r2(centre)} y={r2(topStack - STACK_GAP - 9)} textAnchor="middle" fill={INK} fontWeight={600}>
                                {p.total}
                            </text>
                            {p.lines.map((line, n) => (
                                <text key={line} x={r2(centre)} y={base + 20 + n * 15} textAnchor="middle" fill={INK_SOFT}>
                                    {line}
                                </text>
                            ))}
                        </g>
                    );
                })}
            </svg>
        );
    }

    /* Narrow: one row per period, label and total above the bar, so a long
     * period name does not eat half the width as a left gutter. The full-width
     * track is the £150K axis. */
    const rowH = 76;
    const barH = 22;
    const plotW = NARROW_W;
    const height = EMAIL_PERIODS.length * rowH + 10;
    const x = (v: number) => (v / EMAIL_Y_MAX) * plotW;

    return (
        <svg
            className="chart-svg chart-svg-narrow"
            viewBox={`0 0 ${NARROW_W} ${height}`}
            role="img"
            aria-labelledby={`${titleId} ${descId}`}
            fontSize={NARROW_FONT}
        >
            <title id={titleId}>Attributed email revenue by period</title>
            <desc id={descId}>{desc}</desc>

            {EMAIL_PERIODS.map((p, i) => {
                const top = i * rowH + 6;
                const endCampaigns = x(p.campaigns);
                const endStack = x(p.campaigns + p.flows);
                return (
                    <g key={p.lines[0]}>
                        <text x={0} y={top + 18} fill={INK_SOFT}>{p.lines.join(" ")}</text>
                        <text x={plotW} y={top + 18} textAnchor="end" fill={INK} fontWeight={600}>{p.total}</text>
                        <rect x={0} y={top + 32} width={plotW} height={barH} rx={3} fill={RULE} opacity={0.5} />
                        <rect x={0} y={top + 32} width={r2(endCampaigns)} height={barH} fill={DEEP} />
                        <path d={barRight(endCampaigns + STACK_GAP, top + 32, endStack, barH, 5.4)} fill={ACCENT} />
                    </g>
                );
            })}
        </svg>
    );
}

/** Stacked bars of attributed email revenue, campaigns and flows, by period. */
export function EmailRevenueChart() {
    const desc = `Stacked bar chart of attributed email revenue by period, in thousands of pounds, split between campaigns and automated flows. ${EMAIL_PERIODS.map((p) => `${p.lines.join(" ")}, campaigns £${p.campaigns}K, flows £${p.flows}K, total ${p.total}`).join("; ")}. Every period is higher than the one before it.`;
    return (
        <ChartFigure
            title="Attributed email revenue by period"
            subtitle="Campaigns and automated flows, values in £K"
            headingLevel={3}
            note={EMAIL_NOTE}
            source={EMAIL_SOURCE}
            legend={EMAIL_SERIES}
        >
            <EmailRevenueStack variant="wide" desc={desc} />
            <EmailRevenueStack variant="narrow" desc={desc} />
        </ChartFigure>
    );
}
