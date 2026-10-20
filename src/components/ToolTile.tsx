import type { Tool } from "../lib/toolLogos";

/**
 * One tile: the icon above a visible label. With no icon, the name alone
 * fills the tile in the logo colour, so it is not shown twice.
 */
export default function ToolTile({ tool }: { tool: Tool }) {
    if (!tool.path) {
        return (
            <li className="about-tool">
                <span className="about-tool-fallback">{tool.name}</span>
            </li>
        );
    }
    return (
        <li className="about-tool">
            <svg role="img" aria-label={tool.name} viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="about-tool-icon">
                <path d={tool.path} />
            </svg>
            <span className="about-tool-name" aria-hidden="true">{tool.name}</span>
        </li>
    );
}
