/**
 * Icon set from the one master artwork.
 *
 * public/favicon.png is a 7032px master: 575KB downloaded on every page, for a
 * 40px navbar logo and a 32px tab icon. These are the sizes actually used.
 * Regenerate with `node scripts/make-icons.mjs` if the artwork changes.
 */
import sharp from 'sharp';
import { statSync, writeFileSync } from 'fs';

const MASTER = 'scripts/assets/favicon-master.png';
const outputs = [
    { file: 'public/favicon-32.png', size: 32 },
    { file: 'public/favicon-96.png', size: 96 },
    { file: 'public/apple-touch-icon.png', size: 180 },
    { file: 'public/logo-80.png', size: 80 },
];

const BUDGET = 10 * 1024;

async function iconPng(size, quality) {
    return sharp(MASTER)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, palette: true, quality, effort: 10, dither: 1 })
        .toBuffer();
}

for (const { file, size } of outputs) {
    // Step the palette down until it fits the budget. The mark is flat colour
    // on transparency, so even 32 colours is more than the artwork uses.
    // Quantise by quality, not by colour count: the mark is a gradient across
    // fine stripes, and a hard colour cap posterises it visibly.
    let written = false;
    for (const quality of [100, 90, 80, 70, 60]) {
        const buf = await iconPng(size, quality);
        if (buf.length <= BUDGET || quality === 60) {
            writeFileSync(file, buf);
            console.log(`  ${file.padEnd(32)} ${size}x${size}  ${(buf.length / 1024).toFixed(1)}KB  (palette quality ${quality})`);
            written = true;
            break;
        }
    }
    if (!written) throw new Error(`could not fit ${file} under budget`);
}
// favicon.ico at the root, which browsers and crawlers request by default.
// sharp cannot write ICO, but an ICO may hold PNG frames directly: a 6 byte
// header, a 16 byte directory entry per frame, then the PNG bytes.
const frames = await Promise.all([16, 32, 48].map(async size => ({ size, png: await iconPng(size, 100) })));
const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach(({ size, png }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
});
const ico = Buffer.concat([header, ...frames.map(f => f.png)]);
writeFileSync('public/favicon.ico', ico);
console.log(`  ${'public/favicon.ico'.padEnd(32)} 16/32/48  ${(ico.length / 1024).toFixed(1)}KB`);

const m = await sharp(MASTER).metadata();
console.log(`  master: ${(statSync(MASTER).size / 1024).toFixed(0)}KB at ${m.width}x${m.height}`);
