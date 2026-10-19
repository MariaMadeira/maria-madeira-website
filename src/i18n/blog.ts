/**
 * Copy for /blog and /pt/blog. English is the published index; Portuguese is
 * batch 4 as approved in docs/pt-review/lote-2-3-4.md. Each post keeps its
 * English slug, and the page sends the link through `to()` so the /pt index
 * opens the Portuguese article.
 */
import en from "./en/blog";
import pt from "./pt/blog";

export default { en, pt };
