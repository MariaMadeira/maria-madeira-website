import { WAYS_TO_WORK } from "../lib/pricing";
import { WAYS_PT, TESTIMONIAL_LABELS_PT } from "./pt/shared";
import type { Testimonial } from "../data/testimonials";

/**
 * Copy shared by more than one batch 1 page (/pricing and /services), as
 * approved in docs/pt-review/lote-1.md.
 * English comes from the published data; Portuguese from pt/shared.ts.
 */

export const WAYS = { en: WAYS_TO_WORK, pt: WAYS_PT };

/**
 * Testimonial framing. The quote itself stays in English, word for word
 * (decision D3): only the badge, context and link labels are translated, and
 * the Portuguese page adds a note after the quote.
 */
export const TESTIMONIAL_LABELS = {
    en: { badge: "Client", context: "Recommended on LinkedIn", readMore: "Read the full recommendation", note: "" },
    pt: TESTIMONIAL_LABELS_PT,
};

export function testimonialFor(t: Testimonial, lang: "en" | "pt") {
    const l = TESTIMONIAL_LABELS[lang];
    return { ...t, badge: t.badge ? l.badge : null, context: l.context, readMoreLabel: l.readMore, note: l.note };
}
