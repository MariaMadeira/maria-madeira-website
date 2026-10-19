import { Suspense, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { langOf } from "../lib/i18n";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PageLoader from "./PageLoader";

/**
 * The markup around every page, rendered identically by App.tsx (hydrated in the
 * browser) and entry-server.tsx (prerendered at build time).
 *
 * Any structural difference between those two trees — even a Suspense boundary
 * present in one and not the other — makes hydration fail with React error #418,
 * at which point React throws away the prerendered HTML. Both entry points
 * render this component and nothing else, so they cannot drift apart.
 */
/** Keeps <html lang> right on client-side navigation between EN and PT; the
    prerendered HTML already carries the right value for a hard load. */
function LangSync() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.documentElement.lang = langOf(pathname) === "pt" ? "pt-PT" : "en-GB";
    }, [pathname]);
    return null;
}

export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <ScrollToTop />
            <LangSync />
            <Navbar />
            <div className="page-container">
                <Suspense fallback={<PageLoader />}>{children}</Suspense>
                <Footer />
            </div>
        </>
    );
}
