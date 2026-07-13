import type { ComponentType } from "react";

export interface RouteDef {
    path: string;
    load: () => Promise<{ default: ComponentType }>;
}

/**
 * Single source of truth for routing.
 *
 * App.tsx turns these into lazy() routes, entry-server.tsx awaits them for SSR,
 * and prerender.mjs reads the paths so a new route is prerendered and lands in
 * the sitemap automatically. Adding a route here is the only step required.
 *
 * Pages absent from this list are unrouted on purpose: Blog.tsx (posts unwritten)
 * and Results.tsx (folded into the homepage and case studies hub).
 */
export const ROUTES: RouteDef[] = [
    { path: "/", load: () => import("./pages/Home") },
    { path: "/services", load: () => import("./pages/Services") },
    { path: "/services/websites", load: () => import("./pages/ServicesWebsites") },
    { path: "/services/aeo", load: () => import("./pages/ServicesAEO") },
    { path: "/about", load: () => import("./pages/About") },
    { path: "/contact", load: () => import("./pages/Contact") },
    { path: "/case-studies", load: () => import("./pages/CaseStudies") },
    { path: "/case-study-email", load: () => import("./pages/CaseStudyEmail") },
    { path: "/case-study-google-ads", load: () => import("./pages/CaseStudyGoogleAds") },
    { path: "/case-study-seo", load: () => import("./pages/CaseStudySEO") },
    { path: "/case-study-click-collect", load: () => import("./pages/CaseStudyClickCollect") },
    { path: "/case-study-bodysurf-school", load: () => import("./pages/CaseStudyBodysurfSchool") },
    { path: "/portfolio", load: () => import("./pages/Portfolio") },
    { path: "/portfolio-rita-antunes", load: () => import("./pages/PortfolioRitaAntunes") },
    { path: "/portfolio-ousadia", load: () => import("./pages/PortfolioOusadia") },
    { path: "/portfolio-ai-enhanced", load: () => import("./pages/PortfolioAIEnhanced") },
    { path: "/portfolio-ai-product-photography", load: () => import("./pages/PortfolioAIProductPhotography") },
    { path: "/portfolio-email-marketing", load: () => import("./pages/PortfolioEmailMarketing") },
    { path: "/portfolio-click-collect", load: () => import("./pages/PortfolioClickCollect") },
];

/**
 * Kept out of ROUTES so it never reaches the sitemap. Prerendered to
 * dist/404.html, which Vercel serves for unmatched paths, and mounted at "*"
 * on the client for in-app navigation.
 */
export const NOT_FOUND: RouteDef = {
    path: "/404",
    load: () => import("./pages/NotFound"),
};
