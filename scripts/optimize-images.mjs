import sharp from 'sharp';
import { existsSync, statSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = './public';

const images = [
    {
        name: 'maria-hero',
        sources: [
            join(PUBLIC_DIR, 'maria_hero.jpeg'),
            join(PUBLIC_DIR, 'maria-hero.jpeg'),
        ],
    },
    {
        name: 'maria-notebook',
        sources: [
            join(PUBLIC_DIR, 'maria_NOTEBOOK.jpeg'),
            join(PUBLIC_DIR, 'maria-notebook.jpeg'),
        ],
    },
    {
        name: 'maria-videocall',
        sources: [
            join(PUBLIC_DIR, 'Maria_VIDEOCALL.jpeg'),
            join(PUBLIC_DIR, 'maria-videocall.jpeg'),
        ],
    },
    {
        name: 'maria-smiling',
        sources: [
            join(PUBLIC_DIR, 'maria_smiling.jpeg'),
            join(PUBLIC_DIR, 'maria-smiling.jpeg'),
        ],
    },
    {
        // Homepage case study card 1. The slot is ~400 CSS px at its widest, so
        // 400 and 800 cover it up to 2x DPR; a 1600 variant would only upscale
        // (the source is 932px wide) and the canonical 1200 copy is unused.
        name: 'email-popcorn',
        sources: [join(PUBLIC_DIR, 'Email_PopCorn.png')],
        sizes: [
            { width: 400, suffix: '-400' },
            { width: 800, suffix: '-800' },
        ],
        canonical: false,
    },
];

const sizes = [
    { width: 400, suffix: '-400' },
    { width: 800, suffix: '-800' },
    { width: 1600, suffix: '-1600' },
];

// Pass a name to process a single image, e.g. `node scripts/optimize-images.mjs
// email-popcorn`. Without it every image is reprocessed, which rewrites the
// bytes of assets that have not changed.
const only = process.argv[2];

async function processImages() {
    console.log('--- Processing site photography ---');

    for (const img of images) {
        if (only && img.name !== only) continue;
        const sourcePath = img.sources.find(p => existsSync(p));
        if (!sourcePath) {
            console.error(`Source file not found for ${img.name}`);
            continue;
        }

        console.log(`\nProcessing ${img.name} from ${sourcePath}...`);
        const baseSharp = sharp(sourcePath);

        // Generate responsive variants
        for (const s of img.sizes ?? sizes) {
            // WebP
            const webpOut = join(PUBLIC_DIR, `${img.name}${s.suffix}.webp`);
            await sharp(sourcePath)
                .rotate() // auto-orient based on EXIF
                .resize({ width: s.width, withoutEnlargement: true })
                .webp({ quality: s.width >= 1600 ? 82 : 85, effort: 6 })
                .toFile(webpOut);
            const webpStat = statSync(webpOut);
            console.log(`  Created ${webpOut} (${(webpStat.size / 1024).toFixed(1)} KB)`);

            // JPEG fallback
            const jpgOut = join(PUBLIC_DIR, `${img.name}${s.suffix}.jpg`);
            await sharp(sourcePath)
                .rotate()
                .resize({ width: s.width, withoutEnlargement: true })
                .jpeg({ quality: s.width >= 1600 ? 80 : 85, mozjpeg: true })
                .toFile(jpgOut);
            const jpgStat = statSync(jpgOut);
            console.log(`  Created ${jpgOut} (${(jpgStat.size / 1024).toFixed(1)} KB)`);
        }

        if (img.canonical === false) {
            continue;
        }

        // Canonical default webp and jpg
        const defaultWebp = join(PUBLIC_DIR, `${img.name}.webp`);
        await sharp(sourcePath)
            .rotate()
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 82, effort: 6 })
            .toFile(defaultWebp);

        const defaultJpg = join(PUBLIC_DIR, `${img.name}.jpg`);
        await sharp(sourcePath)
            .rotate()
            .resize({ width: 1200, withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(defaultJpg);

        console.log(`  Created defaults: ${defaultWebp} and ${defaultJpg}`);
    }

    console.log('\n--- Image processing complete! ---');
}

processImages().catch(err => {
    console.error('Error optimizing images:', err);
    process.exit(1);
});
