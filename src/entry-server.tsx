import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'

// Eager imports — lazy() doesn't work with renderToString
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Results from './pages/Results'
import CaseStudies from './pages/CaseStudies'
import CaseStudyEmail from './pages/CaseStudyEmail'
import CaseStudyGoogleAds from './pages/CaseStudyGoogleAds'
import CaseStudySEO from './pages/CaseStudySEO'
import CaseStudyClickCollect from './pages/CaseStudyClickCollect'
import CaseStudyBodysurfSchool from './pages/CaseStudyBodysurfSchool'
import Portfolio from './pages/Portfolio'
import PortfolioRitaAntunes from './pages/PortfolioRitaAntunes'
import PortfolioOusadia from './pages/PortfolioOusadia'
import PortfolioAIEnhanced from './pages/PortfolioAIEnhanced'
import PortfolioAIProductPhotography from './pages/PortfolioAIProductPhotography'
import PortfolioEmailMarketing from './pages/PortfolioEmailMarketing'
import PortfolioClickCollect from './pages/PortfolioClickCollect'

const routes: Record<string, React.ComponentType> = {
  '/': Home,
  '/services': Services,
  '/about': About,
  '/contact': Contact,
  '/results': Results,
  '/case-studies': CaseStudies,
  '/case-study-email': CaseStudyEmail,
  '/case-study-google-ads': CaseStudyGoogleAds,
  '/case-study-seo': CaseStudySEO,
  '/case-study-click-collect': CaseStudyClickCollect,
  '/case-study-bodysurf-school': CaseStudyBodysurfSchool,
  '/portfolio': Portfolio,
  '/portfolio-rita-antunes': PortfolioRitaAntunes,
  '/portfolio-ousadia': PortfolioOusadia,
  '/portfolio-ai-enhanced': PortfolioAIEnhanced,
  '/portfolio-ai-product-photography': PortfolioAIProductPhotography,
  '/portfolio-email-marketing': PortfolioEmailMarketing,
  '/portfolio-click-collect': PortfolioClickCollect,
}

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

export function render(url: string): { html: string; head: string[]; helmet: HelmetServerState } {
  const PageComponent = routes[url] ?? null
  const helmetContext: { helmet?: HelmetServerState } = {}

  const markup = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <ScrollToTop />
        <Navbar />
        <div className="page-container">
          {PageComponent ? <PageComponent /> : null}
          <Footer />
        </div>
      </StaticRouter>
    </HelmetProvider>
  )

  const { head, html } = extractHeadTags(markup)

  return { html, head, helmet: helmetContext.helmet ?? ({} as HelmetServerState) }
}
