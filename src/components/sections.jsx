import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  FaInstagram, FaFacebookF, FaWhatsapp, FaGoogle, FaYoutube, FaTelegram, FaLinkedinIn, FaMeta, FaChartLine,
  FaArrowUp, FaArrowRight, FaChevronDown, FaXmark, FaPenNib, FaVideo, FaCamera, FaBullhorn, FaUserGroup,
} from 'react-icons/fa6'
import { Img, Reveal, SectionHead, Counter, Words, Tag } from './ui'
import { services, platforms, industries, facts, whyUs, process, faqs } from '../data/content'
import { photos, waLink } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

const platformIcon = {
  Instagram: FaInstagram, Facebook: FaFacebookF, 'WhatsApp Business': FaWhatsapp, 'Google Business': FaGoogle,
  YouTube: FaYoutube, Telegram: FaTelegram, LinkedIn: FaLinkedinIn, 'Meta Ads': FaMeta, 'Google Ads': FaChartLine,
}
export const serviceIcon = {
  social: FaInstagram, design: FaPenNib, video: FaVideo, photo: FaCamera, whatsapp: FaWhatsapp,
  google: FaGoogle, ads: FaBullhorn, influencer: FaUserGroup,
}

/* ---------------- Page hero ---------------- */
export function PageHero({ tag, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="page-glow" />
      <div className="container" style={{ position: 'relative' }}>
        <Tag>{tag}</Tag>
        <Words as="h1" text={title} />
        {text && <Reveal as="p" className="lead" delay={0.2}>{text}</Reveal>}
        {children && <Reveal className="actions" delay={0.3}>{children}</Reveal>}
      </div>
    </section>
  )
}

/* ---------------- Platforms marquee ---------------- */
export function Platforms() {
  const list = [...platforms, ...platforms]
  return (
    <section className="platforms">
      <div className="container">
        <Reveal as="p" className="label">Platforms we manage for you</Reveal>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {list.map((p, i) => {
            const I = platformIcon[p]
            return <span className="marquee-item" key={i}><I /> {p}</span>
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Service cards (expand on hover / tap) ---------------- */
function ServiceCard({ s, i }) {
  const [open, setOpen] = useState(false)
  const I = serviceIcon[s.icon]
  return (
    <Reveal delay={(i % 4) * 0.08}>
      <div
        className="svc-card"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
      >
        <div className={`icon3d ${i % 2 ? 'lime' : ''}`}><I /></div>
        <h3>{s.title}</h3>
        <p>{s.short}</p>
        <span className="round-btn"><FaArrowUp /></span>
        <AnimatePresence>
          {open && (
            <motion.div
              className="expand"
              initial={{ clipPath: 'inset(100% 0 0 0 round 22px)' }}
              animate={{ clipPath: 'inset(0% 0 0 0 round 22px)' }}
              exit={{ clipPath: 'inset(100% 0 0 0 round 22px)' }}
              transition={{ duration: 0.55, ease }}
            >
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <div className="inc">Includes:</div>
              <div className="chips">{s.includes.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
              <div className="from" style={{ marginTop: 'auto' }}>From {s.from}</div>
              <span className="round-btn dark" style={{ margin: '14px auto 0' }}><FaXmark /></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export function ServiceCards({ limit }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <div className="svc-grid">
      {list.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
    </div>
  )
}

/* ---------------- Industry stack (sticky, scales on scroll) ---------------- */
function StackCard({ item, i, total, progress }) {
  const start = i / total
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.035])
  const filter = useTransform(progress, [start, Math.min(1, start + 0.25)], ['brightness(1)', i < total - 1 ? 'brightness(0.85)' : 'brightness(1)'])
  return (
    <div className="stack-item">
      <motion.div className="stack-card" style={{ scale, filter, top: `calc(110px + ${i * 14}px)` }}>
        <Img id={item.image} w={1400} alt={item.title} />
        <span className="stack-num">0{i + 1} / 0{total}</span>
        <div className="content">
          <span className="pill">{item.tag}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </motion.div>
    </div>
  )
}

export function IndustryStack() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (
    <div className="stack" ref={ref}>
      {industries.map((it, i) => (
        <StackCard key={it.title} item={it} i={i} total={industries.length} progress={scrollYProgress} />
      ))}
    </div>
  )
}

/* ---------------- Facts ---------------- */
export function Facts() {
  return (
    <div className="facts">
      {facts.map((f, i) => (
        <Reveal key={f.l} className="fact" delay={i * 0.08}>
          <Counter to={f.n} prefix={f.prefix} suffix={f.suffix} />
          <span>{f.l}</span>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------------- Accordion ---------------- */
export function Accordion({ items, initial = 0, onChange }) {
  const [open, setOpen] = useState(initial)
  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <Reveal key={it.q} className={`acc-item ${isOpen ? 'open' : ''}`} delay={i * 0.05}>
            <button className="acc-btn" aria-expanded={isOpen} onClick={() => { const v = isOpen ? -1 : i; setOpen(v); onChange?.(v) }}>
              {it.q}
              <span className="acc-ic">{isOpen ? <FaXmark /> : <FaChevronDown />}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} style={{ overflow: 'hidden' }}>
                  <div className="acc-body">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ---------------- Why us (accordion + image swap) ---------------- */
export function WhyUs() {
  const [active, setActive] = useState(0)
  const items = whyUs.map((w) => ({ q: w.t, a: w.d }))
  const imgIdx = active < 0 ? 0 : active
  return (
    <div className="why">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Accordion items={items} onChange={setActive} />
      </div>
      <Reveal className="why-img">
        <AnimatePresence mode="popLayout">
          <motion.div key={imgIdx} style={{ position: 'absolute', inset: 0 }} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease }}>
            <Img id={whyUs[imgIdx].img} w={1100} alt={whyUs[imgIdx].t} />
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </div>
  )
}

/* ---------------- Process (blue section) ---------------- */
export function Process() {
  return (
    <section className="section blue-section grid-bg">
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead onBlue tag="How we work" title="From brief to results, every single month" text="A simple, transparent five-step process — with your approval before anything goes live." />
        <div className="process">
          {process.map((s, i) => (
            <Reveal key={s.n} className="step" delay={i * 0.08}>
              <span className="n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
export function Faq() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead tag="FAQ" title="Frequently Asked Questions" text="Everything you need to know about working with Exotic Infotech." />
        <div className="faq">
          <Reveal className="faq-card">
            <div className="bubble3d"><div className="b" /><div className="t" /><div className="dots"><i /><i /><i /></div></div>
            <h3>Have more questions?</h3>
            <p>Message us on WhatsApp or book a quick call — we usually reply the same working day.</p>
            <a className="btn btn-blue btn-block" href={waLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </Reveal>
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}

/* ---------------- CTA with curved 3D carousel ---------------- */
export function CtaRing({ title = 'Ready to grow your brand?', text = "Let's turn your social media into a powerful growth engine." }) {
  const ids = [...photos.people, photos.food, photos.product, photos.retail]
  const n = ids.length
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const w = isMobile ? 120 : 190
  const h = isMobile ? 160 : 250
  const radius = Math.round((w + 16) / (2 * Math.tan(Math.PI / n)))
  return (
    <section className="blue-section cta">
      <div className="container" style={{ position: 'relative' }}>
        <Tag onBlue>Get Started</Tag>
        <Words text={title} />
        <Reveal as="p" delay={0.15}>{text}</Reveal>
      </div>
      <div className="ring-stage">
        <motion.div
          className="ring"
          style={{ z: Math.round(radius * 0.35) }}
          animate={{ rotateY: [0, -360] }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          {ids.map((id, i) => (
            <div
              key={i}
              className="ring-item"
              style={{ '--w': `${w}px`, '--h': `${h}px`, transform: `rotateY(${(360 / n) * i}deg) translateZ(${-radius}px)` }}
            >
              <Img id={id} w={400} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="actions">
        <Link to="/contact" className="btn btn-lime">Book a Call <FaArrowRight /></Link>
        <Link to="/packages" className="btn btn-white">View Packages</Link>
      </div>
    </section>
  )
}
