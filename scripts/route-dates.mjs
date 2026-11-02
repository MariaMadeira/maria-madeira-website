/**
 * Per-route last-modified dates for sitemap.xml.
 *
 * Google ignores <lastmod> when every URL carries the same stamp, or when it
 * disagrees with the page, so each date has to be the real one. Two sources,
 * in this order:
 *
 * 1. The page's own dateModified. A page that declares one for its JSON-LD
 *    (const MODIFIED = { en, pt }, MODIFIED_ISO, or PUBLISHED_ISO when it has
 *    never been updated) already says when its visible text last changed, and
 *    the sitemap must agree with it and with the visible "Updated" line.
 * 2. Otherwise, git: the last commit that touched the page component or the
 *    copy it renders. The copy is found by following the page's imports into
 *    src/i18n/ and src/data/ (and src/lib/pricing.ts), keeping only the
 *    route's own language: an English route counts src/i18n/en/*, a
 *    Portuguese one src/i18n/pt/*, and both count the selector in src/i18n/.
 *    A file with uncommitted changes counts as today, so the value is already
 *    right for the commit being made.
 *
 * Written to a committed JSON file rather than read from git at build time,
 * because Vercel builds from a shallow clone where `git log` for an older file
 * comes back empty.
 *
 * Run `node scripts/route-dates.mjs` after the content edits and before the
 * commit (or right after it, then amend). `--print` shows the result and the
 * files behind each date without writing the JSON.
 */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join, normalize } from 'path';

const routesSrc = readFileSync('src/routes.ts', 'utf-8');
const OUT = 'src/data/route-dates.json';
const PRINT = process.argv.includes('--print');

const routes = [...routesSrc.matchAll(/path:\s*"([^"]+)"[\s\S]*?import\("\.\/pages\/([A-Za-z0-9_]+)"\)/g)]
    .map(([, path, page]) => ({ path, file: `src/pages/${page}.tsx`, lang: path === '/pt' || path.startsWith('/pt/') ? 'pt' : 'en' }));

// Copy and data a page renders. Components, hooks and src/lib (schema, format)
// are left out: they change for layout or markup reasons on every page at once.
const isCopy = f => f.startsWith('src/i18n/') || f.startsWith('src/data/') || f === 'src/lib/pricing.ts';

function resolveImport(from, spec) {
    if (!spec.startsWith('.')) return null;
    const base = normalize(join(dirname(from), spec));
    const candidates = /\.(ts|tsx|json)$/.test(base) ? [base] : [`${base}.ts`, `${base}.tsx`, join(base, 'index.ts')];
    return candidates.find(f => existsSync(f)) ?? null;
}

function copyFiles(page, lang) {
    const other = lang === 'en' ? 'src/i18n/pt/' : 'src/i18n/en/';
    const seen = new Set();
    const visit = file => {
        const src = readFileSync(file, 'utf-8');
        // Value imports and re-exports only: `import type` is erased at build
        // and pulls in no copy.
        for (const [, spec] of src.matchAll(/^\s*(?:import(?!\s+type\b)|export)\b[^;'"]*?from\s*["']([^"']+)["']/gm)) {
            const f = resolveImport(file, spec);
            if (!f || !isCopy(f) || f.startsWith(other) || f === OUT || seen.has(f)) continue;
            seen.add(f);
            visit(f);
        }
    };
    visit(page);
    return [...seen];
}

// The date the page itself declares for dateModified, if it declares one.
function declaredDate(page, lang) {
    const src = readFileSync(page, 'utf-8');
    const use = src.match(/["']?dateModified["']?\s*:\s*([A-Z_][A-Z0-9_]*)(\[lang\])?/);
    if (!use) return null;
    const [, ident, byLang] = use;
    const def = src.match(new RegExp(`const\\s+${ident}\\s*=\\s*(\\{[^}]*\\}|"[^"]*"|'[^']*')`));
    if (!def) return null;
    const value = byLang
        ? def[1].match(new RegExp(`\\b${lang}\\s*:\\s*["']([^"']+)["']`))?.[1]
        : def[1].slice(1, -1);
    return value && /^\d{4}-\d{2}-\d{2}/.test(value) ? value.slice(0, 10) : null;
}

const today = new Date().toISOString().slice(0, 10);
function gitDate(file) {
    const dirty = execSync(`git status --porcelain -- "${file}"`, { encoding: 'utf-8' }).trim();
    if (dirty) return today;
    return execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf-8' }).trim().slice(0, 10) || null;
}

const dates = {};
const why = {};
for (const { path, file, lang } of routes) {
    if (!existsSync(file)) { console.warn(`  no file for ${path}`); continue; }
    const declared = declaredDate(file, lang);
    if (declared) { dates[path] = declared; why[path] = `dateModified in ${file}`; continue; }
    let latest = null, from = null;
    for (const f of [file, ...copyFiles(file, lang)]) {
        const d = gitDate(f);
        if (d && (!latest || d > latest)) { latest = d; from = f; }
    }
    if (latest) { dates[path] = latest; why[path] = from; }
}

if (!PRINT) writeFileSync(OUT, JSON.stringify(dates, null, 2) + '\n');
const spread = new Set(Object.values(dates));
console.log(`  ${Object.keys(dates).length} routes, ${spread.size} distinct dates${PRINT ? ' (not written)' : ''}`);
for (const [p, d] of Object.entries(dates).sort((a, b) => a[1].localeCompare(b[1]))) {
    console.log(`    ${d}  ${p.padEnd(42)} ${PRINT ? why[p] : ''}`);
}
