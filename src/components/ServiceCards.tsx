import { Link } from "react-router-dom";
import { PAID_ADS_SERVICE } from "../lib/links";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/serviceCards";
import { AdsThumb, ChatThumb } from "./ServiceThumbs";

/* Visual and link per card, in the copy's order (src/i18n/serviceCards.ts). */
const CARDS: { link: string; visual: "aeo" | "paid" | { src: string; width: number; height: number; position?: string } }[] = [
    { link: "/services/aeo", visual: "aeo" },
    { link: "/services/email-marketing", visual: { src: "/projects/email-marketing/recipe.webp", width: 620, height: 1826, position: "center top" } },
    { link: PAID_ADS_SERVICE, visual: "paid" },
    { link: "/services/websites", visual: { src: "/bodysurf-desktop-mobile.webp", width: 1200, height: 800 } },
];

/**
 * The four visual service cards, shared by the homepage ("What I do") and
 * /services. A visual thumbnail fills the top of each card; the whole card is
 * the link. `showPrice` adds the price line (the /services page); it never
 * renders a £ price on a Portuguese page.
 */
/* headingLevel: 3 under a section h2 (homepage), 2 where the cards sit
   directly under the page h1 (/services). `eager`: the cards are above the
   fold (/services), so the first photo is the likely LCP element and loads
   at once, at high priority, instead of waiting for layout. */
export default function ServiceCards({ showPrice = false, headingLevel = 3, eager = false }: { showPrice?: boolean; headingLevel?: 2 | 3; eager?: boolean }) {
    const Heading = headingLevel === 2 ? "h2" : "h3";
    const { lang, to } = useLang();
    const c = COPY[lang];
    return (
        <>
            <ul className="service-cards">
                {CARDS.map((card, i) => {
                    const t = c.cards[i];
                    const first = eager && i === CARDS.findIndex((x) => typeof x.visual === "object");
                    const price = showPrice && t.price && !(lang === "pt" && /[£€]/.test(t.price)) ? t.price : "";
                    return (
                        <li key={card.link}>
                            <Link to={to(card.link)} className="service-card">
                                <div className="service-card-thumb">
                                    {card.visual === "aeo" ? (
                                        <ChatThumb label={t.title} lang={lang} />
                                    ) : card.visual === "paid" ? (
                                        <AdsThumb label={t.title} lang={lang} />
                                    ) : (
                                        <img
                                            src={card.visual.src}
                                            alt={t.alt}
                                            width={card.visual.width}
                                            height={card.visual.height}
                                            loading={first ? undefined : "lazy"}
                                            fetchPriority={first ? "high" : undefined}
                                            decoding={first ? undefined : "async"}
                                            style={{ objectPosition: card.visual.position ?? "center" }}
                                        />
                                    )}
                                </div>
                                <div className="service-card-body">
                                    <Heading className="service-card-title">{t.title}</Heading>
                                    <p className="service-card-line">{t.line}</p>
                                    {price && <p className="service-card-price">{price}</p>}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <p className="service-cards-also">{c.also}</p>
        </>
    );
}
