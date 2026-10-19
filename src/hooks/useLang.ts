import { useLocation } from "react-router-dom";
import { langOf, ptLink, type Lang } from "../lib/i18n";

/**
 * The language of the current route, and how its internal links resolve.
 * One component renders both the English page and its /pt twin; it reads its
 * copy as COPY[lang] and sends every internal link through `to`, so a /pt page
 * links to the Portuguese version of a page once that version is live.
 */
export function useLang(): {
    lang: Lang;
    /** The link target for an English path in this page's language. */
    to: (enPath: string) => string;
    /** On a /pt page, true while the target has no live Portuguese version. */
    englishOnly: (enPath: string) => boolean;
} {
    const lang = langOf(useLocation().pathname);
    return {
        lang,
        to: (enPath) => (lang === "pt" ? ptLink(enPath).to : enPath),
        englishOnly: (enPath) => lang === "pt" && ptLink(enPath).english,
    };
}
