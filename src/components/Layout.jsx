import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { FaBars, FaXmark, FaArrowRight, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6'
import { Logo } from './ui'
import { site, waLink } from '../data/site'

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <div className="nav-wrap">
        <motion.nav
          className={`nav ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Link to="/" aria-label="Exotic Infotech home"><Logo /></Link>
          <div className="nav-links">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
          </div>
          <Link to="/contact" className="btn btn-lime nav-cta">Book a Call</Link>
          <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </motion.nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {n.label} <FaArrowRight size={13} />
                </NavLink>
              </motion.div>
            ))}
            <Link to="/contact" className="btn btn-lime btn-block">Book a Call</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="progress" style={{ scaleX }} />
}

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="foot-lime">
            <Logo dark />
            <p>
              Exotic Infotech combines content, social media management, shoots and paid ads to help local brands grow,
              engage and convert — on the platforms that matter most.
            </p>
            <h4>Follow Us</h4>
            <div className="socials">
              <a href={site.socials.instagram} target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
              <a href={site.socials.facebook} target="_blank" rel="noreferrer"><FaFacebookF /> Facebook</a>
              <a href={site.socials.youtube} target="_blank" rel="noreferrer"><FaYoutube /> YouTube</a>
              <a href={waLink()} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
          <div className="foot-blue">
            <div>
              <h4>Main</h4>
              {navItems.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
            </div>
            <div>
              <h4>Packages</h4>
              <Link to="/packages#plans">Social Starter</Link>
              <Link to="/packages#plans">Social Growth</Link>
              <Link to="/packages#plans">Social Premium</Link>
              <Link to="/packages#addons">Add-on Services</Link>
              <Link to="/services#rates">Rate Card</Link>
              <Link to="/packages#terms">Terms & Conditions</Link>
            </div>
            <div>
              <h4>Get in touch</h4>
              <ul>
                <li><a className="contact-line" href={`tel:${site.phone.replace(/\s/g, '')}`}><FaPhone size={13} /> {site.phone}</a></li>
                <li><a className="contact-line" href={`mailto:${site.email}`}><FaEnvelope size={13} /> {site.email}</a></li>
                <li className="contact-line"><FaLocationDot size={13} /> {site.address}</li>
                <li className="contact-line"><FaClock size={13} /> {site.hours}</li>
                <li><a className="contact-line" href={site.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={13} /> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} Exotic Infotech. All rights reserved.</span>
          <span>All prices in INR, exclusive of GST.</span>
        </div>
      </div>
    </footer>
  )
}
