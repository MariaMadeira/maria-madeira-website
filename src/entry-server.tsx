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
  '/portfolio': Portfolio,
  '/portfolio-rita-antunes': PortfolioRitaAntunes,
  '/portfolio-ousadia': PortfolioOusadia,
  '/portfolio-ai-enhanced': PortfolioAIEnhanced,
  '/portfolio-ai-product-photography': PortfolioAIProductPhotography,
  '/portfolio-email-marketing': PortfolioEmailMarketing,
  '/portfolio-click-collect': PortfolioClickCollect,
}

export function render(url: string): { html: string; helmet: HelmetServerState } {
  const PageComponent = routes[url] ?? null
  const helmetContext: { helmet?: HelmetServerState } = {}

  const html = renderToString(
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

  return { html, helmet: helmetContext.helmet ?? ({} as HelmetServerState) }
}
