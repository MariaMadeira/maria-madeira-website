import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Route-based code splitting
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyEmail = lazy(() => import("./pages/CaseStudyEmail"));
const CaseStudyGoogleAds = lazy(() => import("./pages/CaseStudyGoogleAds"));
const CaseStudySEO = lazy(() => import("./pages/CaseStudySEO"));
const Results = lazy(() => import("./pages/Results"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PortfolioRitaAntunes = lazy(() => import("./pages/PortfolioRitaAntunes"));
const PortfolioOusadia = lazy(() => import("./pages/PortfolioOusadia"));
const PortfolioAIEnhanced = lazy(() => import("./pages/PortfolioAIEnhanced"));
const PortfolioAIProductPhotography = lazy(() => import("./pages/PortfolioAIProductPhotography"));
const PortfolioEmailMarketing = lazy(() => import("./pages/PortfolioEmailMarketing"));

function PageLoader() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
    }}>
      <div style={{
        width: "40px",
        height: "40px",
        border: "3px solid var(--border-color)",
        borderTopColor: "var(--accent-secondary)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="page-container">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-study-email" element={<CaseStudyEmail />} />
              <Route path="/case-study-google-ads" element={<CaseStudyGoogleAds />} />
              <Route path="/case-study-seo" element={<CaseStudySEO />} />
              <Route path="/results" element={<Results />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio-rita-antunes" element={<PortfolioRitaAntunes />} />
              <Route path="/portfolio-ousadia" element={<PortfolioOusadia />} />
              <Route path="/portfolio-ai-enhanced" element={<PortfolioAIEnhanced />} />
              <Route path="/portfolio-ai-product-photography" element={<PortfolioAIProductPhotography />} />
              <Route path="/portfolio-email-marketing" element={<PortfolioEmailMarketing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}