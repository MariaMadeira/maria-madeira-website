/* The portfolio's project links and card images, in the same order as the
   projects in src/i18n/portfolio.ts (alt text: the copy's cardAlts). Kept out
   of the page module so the homepage can read the links without loading the
   Portfolio page chunk. A card whose image differs by language sets `srcPt`.
   Transparent mockups are shown whole (`contain`) on the card background
   rather than cropped. */
export interface ProjectAsset { link: string; src: string; srcPt?: string; width: number; height: number; fit: "cover" | "contain" }
export const PROJECT_ASSETS: ProjectAsset[] = [
    { link: "/portfolio-click-collect", src: "/projects/click-collect/app-mockups.webp", width: 1200, height: 800, fit: "cover" },
    {
        link: "/portfolio-depapier",
        src: "/projects/depapier/depapier-en-desktop-mobile-hero-transparent.webp",
        srcPt: "/projects/depapier/depapier-desktop-mobile-hero-transparent.webp",
        width: 1600, height: 805, fit: "contain",
    },
    { link: "/portfolio-bodysurf-school", src: "/bodysurf-desktop-mobile.webp", width: 1200, height: 800, fit: "contain" },
    { link: "/portfolio-email-marketing", src: "/projects/email-marketing/recipe.webp", width: 620, height: 1826, fit: "cover" },
    { link: "/portfolio-rita-antunes", src: "/projects/rita-antunes/mockup-stationery.webp", width: 1200, height: 800, fit: "cover" },
    { link: "/portfolio-ousadia", src: "/projects/ousadia/moodboard.webp", width: 1200, height: 800, fit: "cover" },
    { link: "/portfolio-ai-enhanced", src: "/projects/ai-enhanced/cooked ox cheek.webp", width: 1200, height: 1200, fit: "cover" },
    { link: "/portfolio-ai-product-photography", src: "/projects/ai-product/DEPOIS Cotswold Fudge Butterscotch.webp", width: 800, height: 800, fit: "cover" },
];

/** Each project's page, in the copy's order: the homepage's Selected work
    looks its captions up by link through this, never by position. */
export const PROJECT_LINKS = PROJECT_ASSETS.map((a) => a.link);
