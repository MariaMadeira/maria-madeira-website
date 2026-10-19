/**
 * Per-route last-modified dates for sitemap.xml, read from git.
 *
 * Google ignores <lastmod> when every URL carries the same stamp, so the build
 * date is worse than nothing. These are the real dates: the last commit that
 * touched each route's page component, plus today for a file with uncommitted
 * changes, so the value is already right for the commit being made.
 *
 * Written to a committed JSON file rather than read from git at build time,
 * because Vercel builds from a shallow clone where `git log` for an older file
 * comes back empty.
 *
 * Regenerate with `node scripts/route-dates.mjs` whenever page content changes.
 */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { existsSync } from 'fs';

const routesSrc = readFileSync('src/routes.ts', 'utf-8');
const OUT = 'src/data/route-dates.json';

const routes = [...routesSrc.matchAll(/path:\s*"([^"]+)"[\s\S]*?import\("\.\/pages\/([A-Za-z0-9_]+)"\)/g)]
    .map(([, path, page]) => ({ path, file: `src/pages/${page}.tsx` }));

const today = new Date().toISOString().slice(0, 10);
const dates = {};
for (const { path, file } of routes) {
    if (!existsSync(file)) { console.warn(`  no file for ${path}`); continue; }
    const dirty = execSync(`git status --porcelain -- "${file}"`, { encoding: 'utf-8' }).trim();
    if (dirty) { dates[path] = today; continue; }
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: 'utf-8' }).trim();
    if (iso) dates[path] = iso.slice(0, 10);
}

writeFileSync(OUT, JSON.stringify(dates, null, 2) + '\n');
const spread = new Set(Object.values(dates));
console.log(`  ${Object.keys(dates).length} routes, ${spread.size} distinct dates`);
for (const [p, d] of Object.entries(dates).sort((a, b) => a[1].localeCompare(b[1]))) {
    console.log(`    ${d}  ${p}`);
}
