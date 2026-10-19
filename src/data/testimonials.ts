/**
 * Testimonials shown on more than one page. The homepage carousel and /pricing
 * read the same object, so the quote is never retyped. Quotes are verbatim
 * LinkedIn recommendations: never edit their wording or punctuation.
 */
export interface Testimonial {
    name: string;
    badge: string | null;
    role: string | null;
    context: string;
    monogram: string;
    quote: string;
    readMore: string | null;
}

export const BODYSURF_TESTIMONIAL: Testimonial = {
    name: "The Bodysurf School",
    badge: "Client",
    role: null,
    context: "Recommended on LinkedIn",
    monogram: "BS",
    quote: "Something we thought would be pricey and difficult to create, she built in just one month, and our monthly costs are low. On top of that, we're now ranking number one on search engines and AI tools whenever you search for bodysurf. She's easy to work with, super hands-on, and delivered exactly what she promised, within the timeframe she promised.",
    readMore: "/case-study-bodysurf-school",
};
