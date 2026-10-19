/**
 * The Portuguese site (/pt) and its English twins.
 *
 * PT_PAGES is the single register of every planned Portuguese page. Only
 * entries marked "live" exist: they are routed and prerendered, get hreflang,
 * appear in the sitemap and are where the EN | PT switch and the /pt pages'
 * internal links go. A "draft" page is not routed at all, so its URL 404s
 * until its review batch is approved and the entry flips to "live" (and its
 * route is added to src/routes.ts, built from the same components as the
 * English page with the copy in a per-language file).
 *
 * Batches: 0 = phase 1 (live), 1 = services, pricing, about, AI information,
 * 2 = case studies, 3 = portfolio, 4 = blog. Review files: docs/pt-review/.
 */
export type Lang = "en" | "pt";

export const PT_PAGES: { en: string; pt: string; status: "live" | "draft"; batch: number }[] = [
    { en: "/", pt: "/pt", status: "live", batch: 0 },
    { en: "/services/email-marketing", pt: "/pt/servicos/email-marketing", status: "live", batch: 0 },
    { en: "/contact", pt: "/pt/contacto", status: "live", batch: 0 },

    { en: "/services", pt: "/pt/servicos", status: "live", batch: 1 },
    { en: "/services/aeo", pt: "/pt/servicos/aeo", status: "live", batch: 1 },
    { en: "/services/paid-ads", pt: "/pt/servicos/anuncios", status: "live", batch: 1 },
    { en: "/services/websites", pt: "/pt/servicos/sites", status: "live", batch: 1 },
    { en: "/pricing", pt: "/pt/precos", status: "live", batch: 1 },
    { en: "/about", pt: "/pt/sobre", status: "live", batch: 1 },
    { en: "/ai-information", pt: "/pt/informacao-ia", status: "live", batch: 1 },

    { en: "/case-studies", pt: "/pt/casos-de-estudo", status: "live", batch: 2 },
    { en: "/case-study-google-ads", pt: "/pt/caso-google-ads", status: "live", batch: 2 },
    { en: "/case-study-email", pt: "/pt/caso-email", status: "live", batch: 2 },
    { en: "/case-study-seo", pt: "/pt/caso-seo", status: "live", batch: 2 },
    { en: "/case-study-click-collect", pt: "/pt/caso-click-collect", status: "live", batch: 2 },
    { en: "/case-study-bodysurf-school", pt: "/pt/caso-bodysurf-school", status: "live", batch: 2 },

    { en: "/portfolio", pt: "/pt/portefolio", status: "live", batch: 3 },
    { en: "/portfolio-rita-antunes", pt: "/pt/portefolio-rita-antunes", status: "live", batch: 3 },
    { en: "/portfolio-ousadia", pt: "/pt/portefolio-ousadia", status: "live", batch: 3 },
    { en: "/portfolio-ai-enhanced", pt: "/pt/portefolio-imagens-de-produto-com-ia", status: "live", batch: 3 },
    { en: "/portfolio-ai-product-photography", pt: "/pt/portefolio-fotografia-de-produto-com-ia", status: "live", batch: 3 },
    { en: "/portfolio-email-marketing", pt: "/pt/portefolio-email-marketing", status: "live", batch: 3 },
    { en: "/portfolio-click-collect", pt: "/pt/portefolio-click-collect", status: "live", batch: 3 },

    { en: "/blog", pt: "/pt/blog", status: "live", batch: 4 },
    { en: "/blog/what-is-aeo", pt: "/pt/blog/o-que-e-aeo", status: "live", batch: 4 },
    { en: "/blog/best-aeo-agencies-ecommerce-europe", pt: "/pt/blog/melhores-agencias-aeo-ecommerce-europa", status: "live", batch: 4 },
    { en: "/blog/chatgpt-ads-europe", pt: "/pt/blog/anuncios-chatgpt-europa", status: "live", batch: 4 },
    { en: "/blog/ai-product-descriptions-food-brands", pt: "/pt/blog/descricoes-de-produto-com-ia-marcas-alimentares", status: "live", batch: 4 },
    { en: "/blog/klaviyo-flows-vs-campaigns", pt: "/pt/blog/fluxos-vs-campanhas-klaviyo", status: "live", batch: 4 },
];

/** The live pairs: what hreflang, the sitemap and the switch use. */
export const PAIRS = PT_PAGES.filter((p) => p.status === "live").map(({ en, pt }) => ({ en, pt }));

export function langOf(path: string): Lang {
    return path === "/pt" || path.startsWith("/pt/") ? "pt" : "en";
}

/** The same page in the other language, or null when it has no live twin. */
export function twinOf(path: string): string | null {
    const pair = PAIRS.find((p) => p.en === path || p.pt === path);
    if (!pair) return null;
    return langOf(path) === "pt" ? pair.en : pair.pt;
}

/** Where the language switch sends you: the twin, else that language's homepage. */
export function switchTarget(path: string): string {
    return twinOf(path) ?? (langOf(path) === "pt" ? "/" : "/pt");
}

/** hreflang alternates for a paired page: en-GB, pt-PT and x-default (English). */
export function alternatesOf(path: string): { hreflang: string; path: string }[] {
    const pair = PAIRS.find((p) => p.en === path || p.pt === path);
    if (!pair) return [];
    return [
        { hreflang: "en-GB", path: pair.en },
        { hreflang: "pt-PT", path: pair.pt },
        { hreflang: "x-default", path: pair.en },
    ];
}

/**
 * A link from a Portuguese page to an English path: the Portuguese twin once
 * it is live, otherwise the English page, flagged so the label can say
 * "(em inglês)". Approving a batch updates these links with no other change.
 */
export function ptLink(enPath: string): { to: string; english: boolean } {
    // Keep any query or hash: /contact?topic=x becomes /pt/contacto?topic=x.
    const cut = enPath.search(/[?#]/);
    const base = cut === -1 ? enPath : enPath.slice(0, cut);
    const rest = cut === -1 ? "" : enPath.slice(cut);
    const pair = PAIRS.find((p) => p.en === base);
    return pair ? { to: pair.pt + rest, english: false } : { to: enPath, english: true };
}
