import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Suspense, lazy } from 'react'

const Home    = lazy(() => import('./pages/Home'))
const About   = lazy(() => import('./pages/About'))
const Menu    = lazy(() => import('./pages/Menu'))
const Events  = lazy(() => import('./pages/Events'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

/* Scroll to top on navigation */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/* Loading fallback */
function PageLoader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100svh',
        background: 'var(--color-bg)',
      }}
    >
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          fontSize: '1.5rem',
          color: 'var(--color-accent)',
          letterSpacing: '0.12em',
          animation: 'shimmer 2s ease-in-out infinite',
        }}
      >
        rogoznica
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/menu"    element={<Menu />} />
          <Route path="/events"  element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all → Home */}
          <Route path="*"        element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
