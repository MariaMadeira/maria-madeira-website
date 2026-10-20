import { Link } from "react-router-dom";
import { PAID_ADS_SERVICE } from "../lib/links";
import { useLang } from "../hooks/useLang";
import COPY from "../i18n/serviceCards";
import { AiAnswerVisual, RoasBarsVisual } from "./MiniVisuals";
import "../styles/home.css";

/* Visual and link per card, in the copy's order (src/i18n/serviceCards.ts). */
const CARDS: { link: string; visual: "aeo" | "paid" | { src: string; position?: string } }[] = [
    { link: "/services/aeo", visual: "aeo" },
    { link: "/services/email-marketing", visual: { src: "/projects/email-marketing/recipe.webp", position: "center top" } },
    { link: PAID_ADS_SERVICE, visual: "paid" },
    { link: "/services/websites", visual: { src: "/bodysurf-desktop-mobile.webp" } },
];

/**
 * The four visual service cards, shared by the homepage ("What I do") and
 * /services. A visual thumbnail fills the top of each card; the whole card is
 * the link. `showPrice` adds the price line (the /services page); it never
 * renders a £ price on a Portuguese page.
 */
/* headingLevel: 3 under a section h2 (homepage), 2 where the cards sit
   directly under the page h1 (/services). */
export default function ServiceCards({ showPrice = false, headingLevel = 3 }: { showPrice?: boolean; headingLevel?: 2 | 3 }) {
    const Heading = headingLevel === 2 ? "h2" : "h3";
    const { lang, to } = useLang();
    const c = COPY[lang];
    return (
        <>
            <ul className="service-cards">
                {CARDS.map((card, i) => {
                    const t = c.cards[i];
                    const price = showPrice && t.price && !(lang === "pt" && /[£€]/.test(t.price)) ? t.price : "";
                    return (
                        <li key={card.link}>
                            <Link to={to(card.link)} className="service-card">
                                <div className="service-card-thumb">
                                    {card.visual === "aeo" ? (
                                        <AiAnswerVisual label={t.title} />
                                    ) : card.visual === "paid" ? (
                                        <div className="service-card-thumb-chart">
                                            <RoasBarsVisual label={t.title} className="service-card-svg" />
                                        </div>
                                    ) : (
                                        <img
                                            src={card.visual.src}
                                            alt={t.alt}
                                            loading="lazy"
                                            decoding="async"
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
