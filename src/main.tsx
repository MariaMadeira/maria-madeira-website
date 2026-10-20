import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
/* Page and component stylesheets load with the main one, after it (same
   cascade order as before): imported by a lazy route instead, they would
   only arrive once that route's JavaScript loads, and the prerendered HTML
   would show those sections unstyled until then. */
import './styles/home.css'
import './styles/about.css'
import App from './App.tsx'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
