/**
 * Icon set from the one master artwork.
 *
 * public/favicon.png is a 7032px master: 575KB downloaded on every page, for a
 * 40px navbar logo and a 32px tab icon. These are the sizes actually used.
 * Regenerate with `node scripts/make-icons.mjs` if the artwork changes.
 */
import sharp from 'sharp';
import { statSync } from 'fs';

const MASTER = 'scripts/assets/favicon-master.png';
const outputs = [
    { file: 'public/favicon-32.png', size: 32 },
    { file: 'public/apple-touch-icon.png', size: 180 },
    { file: 'public/logo-80.png', size: 80 },
];

const BUDGET = 10 * 1024;

for (const { file, size } of outputs) {
    // Step the palette down until it fits the budget. The mark is flat colour
    // on transparency, so even 32 colours is more than the artwork uses.
    // Quantise by quality, not by colour count: the mark is a gradient across
    // fine stripes, and a hard colour cap posterises it visibly.
    let written = false;
    for (const quality of [100, 90, 80, 70, 60]) {
        const buf = await sharp(MASTER)
            .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png({ compressionLevel: 9, palette: true, quality, effort: 10, dither: 1 })
            .toBuffer();
        if (buf.length <= BUDGET || quality === 60) {
            const { writeFileSync } = await import('fs');
            writeFileSync(file, buf);
            console.log(`  ${file.padEnd(32)} ${size}x${size}  ${(buf.length / 1024).toFixed(1)}KB  (palette quality ${quality})`);
            written = true;
            break;
        }
    }
    if (!written) throw new Error(`could not fit ${file} under budget`);
}
const m = await sharp(MASTER).metadata();
console.log(`  master: ${(statSync(MASTER).size / 1024).toFixed(0)}KB at ${m.width}x${m.height}`);
