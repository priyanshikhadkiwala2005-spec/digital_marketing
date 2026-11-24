import { Link } from 'react-router-dom'
import { FaArrowRight, FaHandshake, FaEye, FaShieldHalved, FaBolt, FaRupeeSign, FaLocationDot } from 'react-icons/fa6'
import { Img, Reveal, SectionHead, Tag } from '../components/ui'
import { PageHero, Facts, Process, CtaRing, WhyUs } from '../components/sections'
import { photos, site } from '../data/site'

const values = [
  { i: FaHandshake, t: 'Your approval first', d: 'Nothing is published without your approval. Every creative includes two revision rounds.' },
  { i: FaRupeeSign, t: 'Transparent pricing', d: 'Fixed packages, a published rate card and a flat ₹500 per ad fee. Ad budgets stay in your control.' },
  { i: FaEye, t: 'Clear reporting', d: 'Monthly analytics with reach, engagement, top content and what we will improve next.' },
  { i: FaShieldHalved, t: 'Policy-safe marketing', d: 'All content and ads follow Meta, Google and WhatsApp advertising policies.' },
  { i: FaBolt, t: 'Fast turnaround', d: 'Static posts in 1–2 working days, reel edits in 2–3 working days after footage.' },
  { i: FaLocationDot, t: 'Local team', d: 'On-location shoots across Bharuch, Ankleshwar and within 25 km of Bharuch.' },
]

export default function About() {
  return (
    <>
      <PageHero tag="About" title="We Build Brands That Grow on Social" text="We help local businesses turn content, strategy and paid media into real growth, engagement and enquiries.">
        <Link to="/packages" className="btn btn-blue">See Packages <FaArrowRight /></Link>
        <Link to="/contact" className="btn btn-white">Talk to Us</Link>
      </PageHero>

      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal className="about-hero-img"><Img id={photos.teamMeeting} w={1600} alt="Exotic Infotech team planning a campaign" eager /></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <Facts />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <Tag>Our Story</Tag>
            <Reveal as="h2">Social media, done properly — for local businesses</Reveal>
            <Reveal as="p" delay={0.1}>
              Most local businesses know they should be on Instagram, Facebook, WhatsApp and Google — but posting
              consistently, shooting good content and running ads takes time they simply don't have.
            </Reveal>
            <Reveal as="p" delay={0.15}>
              Exotic Infotech brings it all together: content calendars, professional design, reels and promotional
              videos, product and drone shoots, WhatsApp Business setup, Google Business Profile and Meta & Google ads
              — managed by one team, on one monthly plan.
            </Reveal>
          </div>
          <Reveal className="video-card">
            <video src="/media/brand-film.mp4" poster="/media/brand-film-poster.jpg" autoPlay muted loop playsInline />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="What we stand for" title="How we work with every client" />
          <div className="value-grid">
            {values.map((v, k) => (
              <Reveal key={v.t} className="value" delay={(k % 3) * 0.08}>
                <span className="vi"><v.i /></span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="container">
          <SectionHead tag="Why choose us" title="One team for your entire online presence" />
          <WhyUs />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <Tag>Service Area</Tag>
            <Reveal as="h2">Based in Bharuch, shooting across Gujarat</Reveal>
            <Reveal as="p" delay={0.1}>
              Our standard service area for shoots is {site.serviceArea}. Outstation day shoots in Vadodara, Surat,
              Ahmedabad and beyond are available — travel is charged at ₹12 per km or actual fares, with prior approval.
            </Reveal>
            <Reveal delay={0.2} style={{ marginTop: 24 }}><Link to="/contact" className="btn btn-blue">Get Directions & Contact <FaArrowRight /></Link></Reveal>
          </div>
          <Reveal className="area-card">
            <iframe title="Bharuch map" loading="lazy" src="https://www.google.com/maps?q=Bharuch,Gujarat&z=11&output=embed" />
          </Reveal>
        </div>
      </section>

      <CtaRing />
    </>
  )
}
