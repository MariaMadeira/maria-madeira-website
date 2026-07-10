import { Suspense, type ReactNode } from "react";
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
export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="page-container">
                <Suspense fallback={<PageLoader />}>{children}</Suspense>
                <Footer />
            </div>
        </>
    );
}
