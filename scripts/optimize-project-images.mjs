/**
 * Project and case study imagery: one WebP per source image, sized for the
 * widest box it is ever shown in, encoded down until it fits the budget.
 *
 * The site's portraits already ship as 400/800/1600 srcset sets from
 * optimize-images.mjs. These are different: each appears in exactly one slot,
 * so a single well-sized file beats a srcset nobody varies.
 *
 * Originals stay in the repo untouched, under scripts/assets/originals/ at the
 * same path they would have in public/ (so .../originals/projects/ousadia/2.jpg
 * writes public/projects/ousadia/2.webp). Keeping them out of public/ stops
 * Vercel serving the multi-MB files. A new original dropped straight into
 * public/projects/ is still picked up, but move it to originals/ afterwards.
 */
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import { join, extname } from 'path';

const BUDGET = 150 * 1024;   // the brief's ceiling, per image
const WIDE_MAX = 1200;       // widest slot on the site is ~998 CSS px
const TALL_MAX = 800;        // tall email screenshots sit in ~350 px columns

const ORIGINALS = 'scripts/assets/originals';
// [directory to scan, how deep to recurse]. Top level only for the root dirs,
// where the bodysurf screenshots are the only project images.
const roots = [[`${ORIGINALS}/projects`, 3], [ORIGINALS, 0], ['public/projects', 3]];
const files = [];
for (const [root, maxDepth] of roots) {
    if (!existsSync(root)) continue;
    const walk = (dir, depth) => {
        for (const e of readdirSync(dir, { withFileTypes: true })) {
            const p = join(dir, e.name);
            if (e.isDirectory()) { if (depth > 0 && e.name !== 'og') walk(p, depth - 1); continue; }
            if (!/\.(jpe?g|png)$/i.test(e.name)) continue;
            if (p.includes('/og/')) continue;                 // OG images stay JPG/PNG
            if (/favicon|apple-touch/i.test(e.name)) continue; // handled separately
            if (root === ORIGINALS && !/^bodysurf-/.test(e.name)) continue;
            files.push(p);
        }
    };
    walk(root, maxDepth);
}

let before = 0, after = 0, n = 0;
const rows = [];
for (const src of files.sort()) {
    const out = src.replace(`${ORIGINALS}/`, 'public/').replace(/\.(jpe?g|png)$/i, '.webp');
    const meta = await sharp(src).metadata();
    const tall = meta.height > meta.width * 1.5;
    const target = Math.min(meta.width, tall ? TALL_MAX : WIDE_MAX);
    let width = target, buf = null;
    for (let attempt = 0; attempt < 6 && !buf; attempt++) {
        for (const q of [82, 76, 70, 64, 58, 52]) {
            const candidate = await sharp(src).resize({ width, withoutEnlargement: true })
                .webp({ quality: q, effort: 6 }).toBuffer();
            if (candidate.length <= BUDGET) { buf = candidate; break; }
        }
        if (!buf) width = Math.round(width * 0.85);
    }
    if (!buf) buf = await sharp(src).resize({ width }).webp({ quality: 50, effort: 6 }).toBuffer();
    const { default: fs } = await import('fs');
    fs.writeFileSync(out, buf);
    const m2 = await sharp(out).metadata();
    const sizeBefore = statSync(src).size, sizeAfter = buf.length;
    before += sizeBefore; after += sizeAfter; n++;
    rows.push([out.replace('public/', ''), Math.round(sizeBefore / 1024), Math.round(sizeAfter / 1024), `${m2.width}x${m2.height}`]);
}
rows.sort((a, b) => b[1] - a[1]);
for (const [f, b, a, d] of rows) console.log(`  ${String(b).padStart(5)}KB -> ${String(a).padStart(4)}KB  ${d.padStart(10)}  ${f}`);
console.log(`\n  ${n} images: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB (${Math.round((1 - after / before) * 100)}% smaller)`);
console.log(`  over budget: ${rows.filter(r => r[2] > 150).map(r => r[0]).join(', ') || 'none'}`);
