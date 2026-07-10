import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import AppShell from './components/AppShell'
import { ROUTES, NOT_FOUND } from './routes'

const BY_PATH = new Map([...ROUTES, NOT_FOUND].map((r) => [r.path, r]))

/** Paths prerender.mjs should render and list in the sitemap. */
export const routePaths = ROUTES.map((r) => r.path)

/** Prerendered to dist/404.html, deliberately absent from the sitemap. */
export const notFoundPath = NOT_FOUND.path

// react-helmet-async v3 detects React 19 and stops populating the SSR context:
// it renders <title>/<meta>/<link> as ordinary elements and lets React 19 hoist
// them. renderToString has no head to hoist into, so they land at the top of the
// markup, and <script type="application/ld+json"> stays wherever it was rendered.
// Lift them all out so prerender.mjs can put them in <head>.
const LEADING_HOISTABLE = /^(<title>[\s\S]*?<\/title>|<meta\b[^>]*?>|<link\b[^>]*?>)/i
const JSON_LD = /<script type="application\/ld\+json">[\s\S]*?<\/script>/gi

function extractHeadTags(markup: string): { head: string[]; html: string } {
  const head: string[] = []
  let html = markup

  for (let match = html.match(LEADING_HOISTABLE); match; match = html.match(LEADING_HOISTABLE)) {
    head.push(match[1])
    html = html.slice(match[1].length)
  }

  html = html.replace(JSON_LD, (tag) => {
    head.push(tag)
    return ''
  })

  return { head, html }
}

// The page module is awaited rather than passed to lazy(): renderToString cannot
// suspend, but an already-resolved component renders synchronously inside the
// same Suspense boundary AppShell gives the client.
export async function render(url: string): Promise<{ html: string; head: string[]; helmet: HelmetServerState }> {
  const route = BY_PATH.get(url)
  const PageComponent = route ? (await route.load()).default : null
  const helmetContext: { helmet?: HelmetServerState } = {}

  const markup = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell>{PageComponent ? <PageComponent /> : null}</AppShell>
      </StaticRouter>
    </HelmetProvider>
  )

  const { head, html } = extractHeadTags(markup)

  return { html, head, helmet: helmetContext.helmet ?? ({} as HelmetServerState) }
}
