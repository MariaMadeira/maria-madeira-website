import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://mariamadeira.com'

const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/results',
  '/case-studies',
  '/case-study-email',
  '/case-study-google-ads',
  '/case-study-seo',
  '/case-study-click-collect',
  '/portfolio',
  '/portfolio-rita-antunes',
  '/portfolio-ousadia',
  '/portfolio-ai-enhanced',
  '/portfolio-ai-product-photography',
  '/portfolio-email-marketing',
  '/portfolio-click-collect',
]

// Import the SSR bundle built by vite build --ssr
const { render } = await import('./dist/server/entry-server.js')

// Read the Vite-built client HTML template
const template = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8')

// Pre-render each route
for (const route of routes) {
  const { html, helmet } = render(route)

  // Build head tags from react-helmet-async context
  const headTags = helmet ? [
    helmet.title?.toString() ?? '',
    helmet.meta?.toString() ?? '',
    helmet.link?.toString() ?? '',
  ].join('\n    ') : ''

  // Inject per-page head tags and SSR body into the template
  const page = template
    .replace('<!--app-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  if (route === '/') {
    writeFileSync(join(__dirname, 'dist/index.html'), page)
  } else {
    const dir = join(__dirname, 'dist', route)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), page)
  }

  console.log(`Pre-rendered: ${route}`)
}

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${BASE_URL}${r === '/' ? '' : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync(join(__dirname, 'dist/sitemap.xml'), sitemap)
console.log('Generated: sitemap.xml')

// Clean up server bundle — not needed for deployment
rmSync(join(__dirname, 'dist/server'), { recursive: true, force: true })
console.log('Cleaned up: dist/server')
