import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { Navbar, Footer, ScrollProgress, WhatsAppFloat } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Blog, { BlogPost } from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

let lenis

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy(); lenis = null }
  }, [])
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const go = () => {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) { lenis ? lenis.scrollTo(el, { offset: -100 }) : el.scrollIntoView(); return }
      }
      lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0)
    }
    const t = setTimeout(go, hash ? 450 : 0)
    return () => clearTimeout(t)
  }, [pathname, hash])
  return null
}

const Page = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.main>
)

export default function App() {
  useSmoothScroll()
  const location = useLocation()
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ScrollManager />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/packages" element={<Page><Packages /></Page>} />
          <Route path="/blog" element={<Page><Blog /></Page>} />
          <Route path="/blog/:slug" element={<Page><BlogPost /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
