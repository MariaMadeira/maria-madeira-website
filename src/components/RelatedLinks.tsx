import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

/**
 * Contextual onward links, sat above a page's CTA or author bio.
 *
 * Case studies were the least internally linked pages on the site, reachable
 * almost only from the hub. Each one gets a related service and a "next" study,
 * and because the "next" targets form a closed cycle, one inbound link each, so
 * no study depends solely on /case-studies to be crawled.
 *
 * Blog posts and portfolio pages pass `items` instead, each with its own
 * label from RELATED, so the label says what kind of page the link leads to.
 * On a /pt page the fixed labels are shown in Portuguese and each link goes to
 * the Portuguese page when it is live; pages pass their own link text.
 */
export const RELATED = {
    reading: "Related reading",
    service: "Related service",
    work: "Related work",
} as const;

/* Portuguese for the fixed labels; pages pass their own link text. */
const PT_LABELS: Record<string, string> = {
    "Related reading": "Leitura relacionada",
    "Related service": "Serviço relacionado",
    "Related work": "Trabalho relacionado",
    "Next case study": "Próximo caso de estudo",
    "Related pages": "Páginas relacionadas",
};

interface RelatedLink {
    to: string;
    label: string;
}

interface RelatedItem extends RelatedLink {
    kicker: (typeof RELATED)[keyof typeof RELATED];
}

type RelatedLinksProps =
    | { service: RelatedLink; next: RelatedLink; items?: never; className?: string }
    | { items: RelatedItem[]; service?: never; next?: never; className?: string };

export default function RelatedLinks(props: RelatedLinksProps) {
    const { lang, to: localize } = useLang();
    const tr = (label: string) => (lang === "pt" ? PT_LABELS[label] ?? label : label);
    const items: { kicker: string; to: string; label: string }[] = props.items ?? [
        { kicker: RELATED.service, ...props.service },
        { kicker: "Next case study", ...props.next },
    ];
    const classes = ["related-links", items.length === 3 && "related-links--three", props.className]
        .filter(Boolean)
        .join(" ");

    return (
        <nav aria-label={tr("Related pages")} className={classes}>
            {items.map(({ kicker, to, label }) => (
                <div key={to} className="related-links-item">
                    <p className="related-links-label">{tr(kicker)}</p>
                    <Link to={localize(to)} className="related-links-link">
                        {label} <ArrowRight size={16} />
                    </Link>
                </div>
            ))}
        </nav>
    );
}
