import { Sparkles, Quote } from "lucide-react";
import COPY from "../i18n/serviceCards";
import type { Lang } from "../lib/i18n";

/* Illustrated thumbnails for two service cards, drawn in HTML so the text
   stays sharp and translatable. Each is one image to assistive technology:
   role="img" with the card title as its label, contents hidden. */

type Thumbs = (typeof COPY)["en"]["thumbs"];

/** An AI assistant naming a brand, in the style of the /services/aeo demo. */
export function ChatThumb({ label, lang }: { label: string; lang: Lang }) {
    const t: Thumbs = COPY[lang].thumbs;
    return (
        <div className="thumb-chat" role="img" aria-label={label}>
            <div aria-hidden="true">
                <p className="thumb-chat-q">{t.question}</p>
                <div className="thumb-chat-a">
                    <span className="thumb-chat-avatar"><Sparkles size={12} /></span>
                    <div>
                        <p>{t.answerPre}<strong>{t.brand}</strong>{t.answerPost}</p>
                        <span className="thumb-chat-chip"><Quote size={10} /> {t.source}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** A sponsored search result beside a social feed ad. Placeholder lines only. */
export function AdsThumb({ label, lang }: { label: string; lang: Lang }) {
    const t: Thumbs = COPY[lang].thumbs;
    return (
        <div className="thumb-listings" role="img" aria-label={label}>
            <div className="thumb-listing thumb-listing-search" aria-hidden="true">
                <span className="thumb-listing-label">{t.sponsored}</span>
                <span className="thumb-line thumb-line-title" />
                <span className="thumb-line" />
                <span className="thumb-line thumb-line-short" />
            </div>
            <div className="thumb-listing thumb-listing-feed" aria-hidden="true">
                <div className="thumb-listing-head">
                    <span className="thumb-listing-avatar" />
                    <span className="thumb-line thumb-line-name" />
                </div>
                <span className="thumb-listing-picture" />
                <span className="thumb-listing-cta">{t.shopNow}</span>
            </div>
        </div>
    );
}
