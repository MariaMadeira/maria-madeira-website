import { KLAVIYO_REFERRAL_URL } from "../lib/links";

/**
 * The official K:Partners tier badge (Charcoal, Bronze), served locally at
 * 2x from scripts/assets/klaviyo-partner-badge-master.svg. Its 304x128
 * source keeps the 2.38:1 ratio, so width and height fix the box with no
 * layout shift and no distortion.
 */
export default function KlaviyoPartnerBadge({ height = 64, eager = false }: { height?: number; eager?: boolean }) {
    return (
        <a href={KLAVIYO_REFERRAL_URL} target="_blank" rel="sponsored noopener" style={{ display: "inline-block", lineHeight: 0, flexShrink: 0 }}>
            <img
                src="/klaviyo-partner-badge.png"
                alt="Klaviyo Partner badge"
                width={Math.round((height * 304) / 128)}
                height={height}
                loading={eager ? undefined : "lazy"}
                decoding="async"
                style={{ height: `${height}px`, width: "auto", display: "block" }}
            />
        </a>
    );
}
