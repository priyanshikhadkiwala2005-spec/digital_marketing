import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowRight, FaWhatsapp, FaCalendarCheck, FaPlay } from 'react-icons/fa6'
import { Img, Reveal, SectionHead, Tag } from '../components/ui'
import PhoneReel from '../components/PhoneReel'
import { Platforms, ServiceCards, IndustryStack, Facts, WhyUs, Process, Faq, CtaRing } from '../components/sections'
import { PricingCards } from '../components/pricing'
import { photos } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

const reelSlides = [
  { video: '/media/brand-reel.mp4', poster: '/media/brand-reel-poster.jpg', caption: 'Build, grow & scale your brand on social 🚀' },
  { id: photos.people[0], caption: 'Scroll-stopping content, every single month ✨' },
  { id: photos.food, caption: 'Food shoots that make people hungry 🍽️' },
  { id: photos.people[2], caption: 'Reels that reach new local audiences 🎬' },
  { id: photos.product, caption: 'Product photography that sells 📸' },
  { id: photos.people[6], caption: 'From followers to WhatsApp enquiries 💬' },
]

function HeroTitle() {
  const words = ['Build,', 'Grow', '&', 'Scale', 'Your', 'Brand', 'on', 'Social', 'Media']
  return (
    <motion.h1 initial="hidden" animate="show" transition={{ staggerChildren: 0.07, delayChildren: 0.25 }}>
      {words.map((w, i) => (
        <span key={i}>
          <motion.span
            className={`word ${i >= 7 ? 'accent' : ''}`}
            variants={{ hidden: { opacity: 0, y: '0.6em', filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease } } }}
          >
            {w}
          </motion.span>{' '}
        </span>
      ))}
    </motion.h1>
  )
}

function Hero() {
  const stage = useRef(null)
  const { scrollYProgress } = useScroll({ target: stage, offset: ['start end', 'end start'] })
  const phoneScale = useTransform(scrollYProgress, [0.2, 0.6], [0.92, 1.08])
  const rowY = useTransform(scrollYProgress, [0.2, 0.8], [0, -60])
  const rowScale = useTransform(scrollYProgress, [0.2, 0.7], [0.96, 1.06])
  const row = [...photos.people, ...photos.people]

  return (
    <section className="hero">
      <div className="page-glow" />
      <div className="container" style={{ position: 'relative' }}>
        <motion.span className="tag" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          Social Media & Digital Marketing Agency · Bharuch
        </motion.span>
        <HeroTitle />
        <motion.p className="lead" initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9, delay: 0.8, ease }}>
          We combine content, management, shoots and paid media to help your business grow, engage and convert — on
          Instagram, Facebook, WhatsApp and Google.
        </motion.p>
        <motion.div className="actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95, ease }}>
          <Link to="/packages" className="btn btn-blue">View Packages <FaArrowRight /></Link>
          <Link to="/services" className="btn btn-white">Explore Services</Link>
        </motion.div>
      </div>

      <div className="hero-stage" ref={stage}>
        <motion.div style={{ y: rowY, scale: rowScale }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.9 }}>
          <div className="hero-row">
            {row.map((id, i) => (
              <div className="card" key={i}><Img id={id} w={420} alt="" eager={i < 8} /></div>
            ))}
          </div>
        </motion.div>
        <motion.div className="hero-phone" style={{ scale: phoneScale }} initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.6, ease }}>
          <PhoneReel slides={reelSlides} />
        </motion.div>
        <motion.div className="floating-chip" style={{ left: 'calc(50% - 360px)', top: '58%' }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6, duration: 0.8, ease }}>
          <span className="ic" style={{ background: '#25D366' }}><FaWhatsapp /></span>
          <span>New enquiry<small>via WhatsApp Business</small></span>
        </motion.div>
        <motion.div className="floating-chip" style={{ left: 'calc(50% + 190px)', top: '30%' }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.9, duration: 0.8, ease }}>
          <span className="ic" style={{ background: 'var(--blue)' }}><FaCalendarCheck /></span>
          <span>Post scheduled<small>Content calendar · approved</small></span>
        </motion.div>
        <motion.div className="floating-chip hide-md" style={{ left: 'calc(50% + 230px)', top: '72%' }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2, duration: 0.8, ease }}>
          <span className="ic" style={{ background: 'var(--lime)', color: 'var(--ink)' }}><FaPlay /></span>
          <span>Reel published<small>Instagram & Facebook</small></span>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />

      <section className="section">
        <div className="container">
          <SectionHead tag="Services" title="Everything you need to grow on social — done for you" text="We handle the strategy, content, shoots and optimisation — so you can focus on running your business." />
          <ServiceCards />
          <Reveal className="center mt-40"><Link to="/services" className="btn btn-blue">All Services & Rates <FaArrowRight /></Link></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="Industries" title="Content that works for your industry" text="From cafés to clinics, we create content tailored to how your customers actually decide." />
          <IndustryStack />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="split" style={{ marginBottom: 40 }}>
            <div>
              <Tag>About</Tag>
              <Reveal as="h2">We build brands that grow on social</Reveal>
              <Reveal as="p" delay={0.1}>
                Exotic Infotech is a Bharuch-based team that brings social media, WhatsApp Business, design, video,
                shoots, Google Business Profile and paid ads under one roof — with fixed monthly packages and a fully
                transparent rate card.
              </Reveal>
              <Reveal delay={0.2} style={{ marginTop: 26 }}><Link to="/about" className="btn btn-white">More About Us <FaArrowRight /></Link></Reveal>
            </div>
            <Reveal className="about-hero-img" style={{ height: 380 }}><Img id={photos.team} w={1200} alt="Exotic Infotech team at work" /></Reveal>
          </div>
          <Facts />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <SectionHead tag="Why Exotic Infotech" title="Simple, focused, and built for results" text="One team, one plan and clear reporting — every month." />
          <WhyUs />
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="container">
          <SectionHead tag="Packages" title="Choose a plan that matches your growth stage" text="Fixed monthly packages for Instagram, Facebook, WhatsApp Business and Google Business Profile." />
          <PricingCards />
          <p className="gst-note">All prices exclusive of GST · One-month package term · Ad budgets paid separately by the client</p>
          <Reveal className="center" style={{ marginTop: 20 }}><Link to="/packages" className="btn btn-white">Compare Packages & Add-ons <FaArrowRight /></Link></Reveal>
        </div>
      </section>

      <Faq />
      <CtaRing />
    </>
  )
}
