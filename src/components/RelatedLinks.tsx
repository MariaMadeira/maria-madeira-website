import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Related service and next case study links, sat above each case study's CTA.
 *
 * Case studies were the least internally linked pages on the site, reachable
 * almost only from the hub. These give every study two contextual outbound links
 * and, because the "next" targets form a closed cycle, one inbound link each,
 * so no study depends solely on /case-studies to be crawled.
 */
interface RelatedLinksProps {
    service: { to: string; label: string };
    next: { to: string; label: string };
}

export default function RelatedLinks({ service, next }: RelatedLinksProps) {
    return (
        <nav aria-label="Related pages" className="related-links">
            <div className="related-links-item">
                <p className="related-links-label">Related service</p>
                <Link to={service.to} className="related-links-link">
                    {service.label} <ArrowRight size={16} />
                </Link>
            </div>
            <div className="related-links-item">
                <p className="related-links-label">Next case study</p>
                <Link to={next.to} className="related-links-link">
                    {next.label} <ArrowRight size={16} />
                </Link>
            </div>
        </nav>
    );
}
