import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy } from "react";
import AppShell from "./components/AppShell";
import { ROUTES, NOT_FOUND } from "./routes";

// lazy() is called at module scope so each route keeps a stable component
// identity across renders. This is what code-splits the pages.
const LAZY_ROUTES = ROUTES.map(({ path, load }) => ({ path, Component: lazy(load) }));
const NotFound = lazy(NOT_FOUND.load);

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppShell>
          <Routes>
            {LAZY_ROUTES.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppShell>
      </Router>
    </HelmetProvider>
  );
}
