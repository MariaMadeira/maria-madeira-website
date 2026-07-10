import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://mariamadeira.com'

// Import the SSR bundle built by vite build --ssr. The route list comes from
// src/routes.ts via this bundle, so a route added there is prerendered and
// listed in the sitemap without touching this file.
const { render, routePaths, notFoundPath } = await import('./dist/server/entry-server.js')

const routes = routePaths

if (!Array.isArray(routes) || routes.length === 0) {
  throw new Error('No routes exported from entry-server — nothing would be prerendered.')
}

// Read the Vite-built client HTML template
const template = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8')

async function renderPage(route) {
  const { html, head, helmet } = await render(route)

  // On React 19 helmet renders its tags into the markup instead of the SSR
  // context, so `head` carries them and the helmet.* values come back empty.
  // Reading both keeps this working either way.
  const headTags = [
    helmet?.title?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
    ...head,
  ].filter(Boolean).join('\n    ')

  if (!headTags.includes('<title')) {
    throw new Error(`No <title> resolved for route ${route} — SEO tags would be missing.`)
  }

  // Inject per-page head tags and SSR body into the template.
  // Replacer functions keep `$&`, `$1` etc. in page content from being treated
  // as replacement patterns.
  return template
    .replace('<!--app-head-->', () => headTags)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
}

// Pre-render each route
for (const route of routes) {
  const page = await renderPage(route)

  if (route === '/') {
    writeFileSync(join(__dirname, 'dist/index.html'), page)
  } else {
    const dir = join(__dirname, 'dist', route)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), page)
  }

  console.log(`Pre-rendered: ${route}`)
}

// Branded 404. Vercel serves dist/404.html for paths that match no static file,
// which is the only way an unknown URL reaches NotFound on a hard load — the
// <Route path="*"> catch-all only runs for client-side navigation. Deliberately
// not in `routes`: it must stay out of the sitemap and carries robots=noindex.
writeFileSync(join(__dirname, 'dist/404.html'), await renderPage(notFoundPath))
console.log(`Pre-rendered: ${notFoundPath} -> dist/404.html`)

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

// Generate robots.txt. This overwrites the copy Vite copies out of public/,
// keeping the sitemap URL next to the sitemap that produces it.
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`

writeFileSync(join(__dirname, 'dist/robots.txt'), robots)
console.log('Generated: robots.txt')

// Clean up server bundle — not needed for deployment
rmSync(join(__dirname, 'dist/server'), { recursive: true, force: true })
console.log('Cleaned up: dist/server')
