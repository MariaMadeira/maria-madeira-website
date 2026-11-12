import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
/* Page and component stylesheets load with the main one, after it (same
   cascade order as before): imported by a lazy route instead, they would
   only arrive once that route's JavaScript loads, and the prerendered HTML
   would show those sections unstyled until then. */
import './styles/home.css'
import './styles/about.css'
import App from './App.tsx'

/* Vercel Web Analytics: cookieless, loads /_vercel/insights/script.js. Called
   here, in the client-only entry, so the SSR bundle and prerender.mjs never
   see it; the script tag goes into <head>, outside the hydrated #root. Client
   navigations are tracked by the script itself through the History API. */
inject({ mode: import.meta.env.PROD ? 'production' : 'development' })

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
