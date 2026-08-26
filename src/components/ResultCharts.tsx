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

/* Search Console: matched 28-day windows. */
const SEO_WINDOWS_WIDE = ["May 2026 baseline", "August 2026", "Latest (24 Aug)"];
const SEO_WINDOWS_NARROW = [["May 2026", "baseline"], ["August", "2026"], ["Latest", "(24 Aug)"]];
const SEO_CLICKS = [4500, 6500, 8000];
const SEO_POSITION = [15.2, 9.8, 9.4];
const SEO_SOURCE = "Source: Google Search Console, matched 28-day windows";

/* ── Design tokens, mirrored as literals so the SVG can use them ── */
const ACCENT = "#B08968";      /* --accent-secondary */
const DEEP = "#724f37";        /* --color-dark-brown */
const INK = "#3B312C";         /* --text-primary */
const INK_SOFT = "#6B5B52";    /* --text-secondary */
const RULE = "#E8E2DB";        /* --border-color */
const SURFACE = "#ffffff";     /* --bg-secondary, the panel the charts sit on */

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
    note?: string;
    source: string;
    legend?: Series[];
    children: React.ReactNode;
}

function ChartFigure({ title, note, source, legend, children }: ChartFigureProps) {
    return (
        <figure className="chart-panel">
            <figcaption className="chart-title">{title}</figcaption>
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
            <p className="chart-source">{source}</p>
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
                                fill={s.colour}
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
                                fill={s.colour}
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

/* ── Line chart (charts C and D, both variants) ── */
interface LineChartProps {
    id: string;
    variant: "wide" | "narrow";
    title: string;
    desc: string;
    margin: Margin;
    height: number;
    /** [value at the bottom of the axis, value at the top]. Reversed for "lower is better". */
    domain: [number, number];
    ticks: number[];
    tickLabel: (n: number) => string;
    values: number[];
    labels: string[][];
    endLabels: string[];
}

function LineChart({ id, variant, title, desc, margin, height, domain, ticks, tickLabel, values, labels, endLabels }: LineChartProps) {
    const wide = variant === "wide";
    const width = wide ? WIDE_W : NARROW_W;
    const font = wide ? WIDE_FONT : NARROW_FONT;
    const plotW = width - margin.left - margin.right;
    const plotH = height - margin.top - margin.bottom;
    const bottom = margin.top + plotH;
    const y = (v: number) => bottom - ((v - domain[0]) / (domain[1] - domain[0])) * plotH;
    const x = (i: number) => margin.left + (plotW / (values.length - 1)) * i;
    const anchors = ["start", "middle", "end"] as const;

    return (
        <svg
            className={`chart-svg chart-svg-${variant}`}
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-labelledby={`${id}-t ${id}-d`}
            fontSize={font}
        >
            <title id={`${id}-t`}>{title}</title>
            <desc id={`${id}-d`}>{desc}</desc>

            {ticks.map((t) => (
                <g key={t}>
                    <line x1={margin.left} x2={margin.left + plotW} y1={r2(y(t))} y2={r2(y(t))} stroke={RULE} strokeWidth={1} />
                    <text x={margin.left - 8} y={r2(y(t)) + (wide ? 4 : 6)} textAnchor="end" fill={INK_SOFT}>
                        {tickLabel(t)}
                    </text>
                </g>
            ))}

            <polyline
                points={values.map((v, i) => `${r2(x(i))},${r2(y(v))}`).join(" ")}
                fill="none"
                stroke={ACCENT}
                strokeWidth={wide ? 2 : 3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {values.map((v, i) => (
                <circle
                    key={i}
                    cx={r2(x(i))}
                    cy={r2(y(v))}
                    r={wide ? 4 : 6}
                    fill={ACCENT}
                    stroke={SURFACE}
                    strokeWidth={2}
                />
            ))}

            {endLabels.map((text, i) =>
                text ? (
                    <text
                        key={i}
                        x={r2(x(i))}
                        y={r2(y(values[i])) - (wide ? 12 : 16)}
                        textAnchor={anchors[i]}
                        fill={INK}
                        fontWeight={600}
                    >
                        {text}
                    </text>
                ) : null,
            )}

            {labels.map((lines, i) => (
                <text key={i} x={r2(x(i))} y={bottom + (wide ? 24 : 30)} textAnchor={anchors[i]} fill={INK_SOFT}>
                    {lines.map((line, li) => (
                        <tspan key={line} x={r2(x(i))} dy={li === 0 ? 0 : wide ? 15 : 23}>
                            {line}
                        </tspan>
                    ))}
                </text>
            ))}
        </svg>
    );
}

/* ── Chart A: monthly ROAS vs break-even ─────────────────── */
export function MonthlyRoasChart() {
    const title = "Monthly ROAS vs break-even";
    const desc = `Bar chart of monthly return on ad spend from October 2025 to August 2026, against a ${BREAK_EVEN}% break-even line. ${ADS_MONTHS.map((m, i) => `${m} ${ADS_ROAS[i]}%`).join(", ")}. Ten of the eleven months sit above break-even; February 2026 at 396% is the exception. ${AUGUST_NOTE}`;
    const series: Series[] = [{ name: "Monthly ROAS", colour: ACCENT, values: ADS_ROAS }];
    const refLine = { value: BREAK_EVEN, label: "Break-even" };

    return (
        <ChartFigure title={title} note={AUGUST_NOTE} source={ADS_SOURCE}>
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
        <ChartFigure title={title} note={AUGUST_NOTE} source={ADS_SOURCE} legend={series}>
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

/* ── Chart C: organic clicks ─────────────────────────────── */
export function OrganicClicksChart() {
    const title = "Organic clicks, matched 28-day windows";
    const desc = `Line chart of organic clicks across three matched 28-day windows. ${SEO_WINDOWS_WIDE.map((w, i) => `${w}, ${commas(SEO_CLICKS[i])} clicks`).join("; ")}. An increase of 78% from the baseline.`;
    const shared = {
        title,
        desc,
        domain: [0, 9000] as [number, number],
        ticks: [0, 3000, 6000, 9000],
        values: SEO_CLICKS,
        endLabels: [commas(4500), "", commas(8000)],
    };

    return (
        <ChartFigure title={title} source={SEO_SOURCE}>
            <LineChart
                {...shared}
                id="clicks-w"
                variant="wide"
                height={300}
                margin={{ top: 30, right: 24, bottom: 46, left: 56 }}
                tickLabel={commas}
                labels={SEO_WINDOWS_WIDE.map((w) => [w])}
            />
            <LineChart
                {...shared}
                id="clicks-n"
                variant="narrow"
                height={310}
                margin={{ top: 34, right: 20, bottom: 66, left: 52 }}
                tickLabel={(n) => (n === 0 ? "0" : `${n / 1000}K`)}
                labels={SEO_WINDOWS_NARROW}
            />
        </ChartFigure>
    );
}

/* ── Chart D: average search position ────────────────────── */
export function AveragePositionChart() {
    const title = "Average search position (lower is better)";
    const desc = `Line chart of average search position across three matched 28-day windows, with the axis running from 20 at the bottom to 1 at the top so improvement reads upward. ${SEO_WINDOWS_WIDE.map((w, i) => `${w}, position ${SEO_POSITION[i]}`).join("; ")}. A move from page two to page one.`;
    const shared = {
        title,
        desc,
        /* Reversed domain: 20 sits on the baseline, 1 at the top of the plot. */
        domain: [20, 1] as [number, number],
        ticks: [20, 15, 10, 5, 1],
        values: SEO_POSITION,
        tickLabel: String,
        endLabels: ["15.2", "", "9.4"],
    };

    return (
        <ChartFigure title={title} source={SEO_SOURCE}>
            <LineChart
                {...shared}
                id="position-w"
                variant="wide"
                height={300}
                margin={{ top: 30, right: 24, bottom: 46, left: 56 }}
                labels={SEO_WINDOWS_WIDE.map((w) => [w])}
            />
            <LineChart
                {...shared}
                id="position-n"
                variant="narrow"
                height={310}
                margin={{ top: 34, right: 20, bottom: 66, left: 52 }}
                labels={SEO_WINDOWS_NARROW}
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

/** Charts C and D, in order, for the SEO and AEO case studies. */
export function SeoAeoCharts() {
    return (
        <div className="chart-stack">
            <OrganicClicksChart />
            <AveragePositionChart />
        </div>
    );
}
