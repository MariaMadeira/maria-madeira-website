/**
 * Tell Bing (and the other IndexNow engines: Yandex, Seznam, Naver) which URLs
 * are new or changed, so they are crawled within days instead of whenever Bing
 * finds the site on its own. ChatGPT search and Copilot lean on Bing's index.
 *
 * The key is public/<key>.txt, served at https://mariamadeira.com/<key>.txt.
 * IndexNow fetches that file to check the submission comes from the site
 * owner, so run this only AFTER a production deploy that includes it.
 *
 *   npm run indexnow                       every URL in the live sitemap
 *   npm run indexnow -- --dist             every URL in dist/sitemap.xml (local build)
 *   npm run indexnow -- /blog/what-is-aeo /pt/blog
 *                                          only these (paths or full URLs)
 *   npm run indexnow -- --since=<sha>      only routes whose date in
 *                                          src/data/route-dates.json differs
 *                                          from that commit (what the
 *                                          IndexNow GitHub Action runs after
 *                                          each production deploy)
 *   npm run indexnow -- --dry-run ...      print the payload, send nothing
 *
 * Submit after a change, not on a schedule: resubmitting unchanged URLs again
 * and again can get the key throttled.
 */
import { execSync } from 'child_process';
import { readFileSync, readdirSync } from 'fs';

const HOST = 'mariamadeira.com';
const BASE_URL = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// The key file is the one 32-hex .txt file at the root of public/.
const keyFiles = readdirSync('public').filter(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (keyFiles.length !== 1) throw new Error(`expected one IndexNow key file in public/, found ${keyFiles.length}`);
const key = readFileSync(`public/${keyFiles[0]}`, 'utf-8').trim();
if (`${key}.txt` !== keyFiles[0]) throw new Error(`public/${keyFiles[0]} must contain exactly its own name`);

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const fromDist = args.includes('--dist');
const since = args.find(a => a.startsWith('--since='))?.slice('--since='.length);
if (since !== undefined && !/^[0-9a-f]{7,40}$/.test(since)) throw new Error(`--since needs a commit sha, got "${since}"`);
const paths = args.filter(a => !a.startsWith('--'));

const locsIn = xml => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());

let urlList;
if (paths.length) {
    urlList = paths.map(p => (p.startsWith('http') ? p : `${BASE_URL}${p.startsWith('/') ? '' : '/'}${p}`));
} else if (since) {
    // A route is new or changed when its sitemap date moved; a removed route
    // is submitted too, so engines see its 404 sooner.
    const datesAt = rev => {
        try { return JSON.parse(execSync(`git show ${rev}:src/data/route-dates.json`, { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] })); }
        catch { return {}; }
    };
    const before = datesAt(since), after = datesAt('HEAD');
    const changed = [...new Set([...Object.keys(before), ...Object.keys(after)])]
        .filter(r => r !== '/404' && before[r] !== after[r]);
    if (!changed.length) {
        console.log(`  IndexNow: no sitemap dates changed since ${since.slice(0, 7)}, nothing to submit`);
        process.exit(0);
    }
    urlList = changed.map(r => `${BASE_URL}${r}`);
} else if (fromDist) {
    urlList = locsIn(readFileSync('dist/sitemap.xml', 'utf-8'));
} else {
    const res = await fetch(`${BASE_URL}/sitemap.xml`);
    if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
    urlList = locsIn(await res.text());
}

const foreign = urlList.filter(u => new URL(u).host !== HOST);
if (foreign.length) throw new Error(`not on ${HOST}: ${foreign.join(', ')}`);
if (!urlList.length) throw new Error('no URLs to submit');

const body = { host: HOST, key, keyLocation: `${BASE_URL}/${key}.txt`, urlList };

if (dryRun) {
    console.log(JSON.stringify(body, null, 2));
    process.exit(0);
}

// Check the key file is live first: without it IndexNow answers 403 and the
// submission is wasted.
const keyRes = await fetch(body.keyLocation);
const liveKey = keyRes.ok ? (await keyRes.text()).trim() : '';
if (liveKey !== key) throw new Error(`${body.keyLocation} is not live yet (status ${keyRes.status}); deploy first`);

const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
});
// 200 = accepted, 202 = accepted, key check pending. Anything else is an error:
// 400 bad request, 403 key not valid, 422 URL not on the host, 429 too many.
console.log(`  IndexNow ${res.status} ${res.statusText} for ${urlList.length} URL${urlList.length === 1 ? '' : 's'}`);
if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    process.exit(1);
}
