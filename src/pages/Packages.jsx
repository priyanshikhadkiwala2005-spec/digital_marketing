import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'
import { Reveal, SectionHead } from '../components/ui'
import { PageHero, Accordion, CtaRing, Faq } from '../components/sections'
import { PricingCards, CompareTable, AddOns, AdsCalculator, InfoTable } from '../components/pricing'
import { whyPremium, terms } from '../data/packages'

const billing = [
  ['Social Starter', '₹7,999 + GST / month · Monthly package'],
  ['Social Growth', '₹14,999 + GST / month · Monthly package'],
  ['Social Premium ★', '₹24,999 + GST / month · Monthly package'],
  ['Telegram Marketing', '₹15,000 · Separate, if selected'],
  ['YouTube – 2 Videos', '₹5,000 · Separate, if selected'],
  ['YouTube – 5 Videos', '₹10,000 · Separate, if selected'],
  ['Meta Ads Management', '₹500 per ad (ad budget separate) · Separate, if selected'],
  ['Google Ads Management', '₹500 per ad (ad budget separate) · Separate, if selected'],
  ['Individual services (design, video, photo, drone, influencer, etc.)', 'As per Individual Service Rates · Separate, if selected'],
]

export default function Packages() {
  const [detailed, setDetailed] = useState(false)
  return (
    <>
      <PageHero tag="Packages" title="Simple monthly packages. Clear deliverables." text="Three social media packages covering Instagram, Facebook, WhatsApp Business and Google Business Profile — plus optional add-ons.">
        <a href="#plans" className="btn btn-blue">See Plans <FaArrowRight /></a>
        <a href="#calculator" className="btn btn-white">Ads Fee Calculator</a>
      </PageHero>

      <section className="section" id="plans" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal className="center" style={{ marginBottom: 40 }}>
            <div className="seg">
              <button className={!detailed ? 'on' : ''} onClick={() => setDetailed(false)}>Highlights</button>
              <button className={detailed ? 'on' : ''} onClick={() => setDetailed(true)}>Full details</button>
            </div>
          </Reveal>
          <PricingCards detailed={detailed} key={detailed ? 'd' : 'h'} />
          <p className="gst-note">All prices exclusive of GST · Package term: one month · 100% advance payment · Ad budgets paid separately by the client</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="Compare" title="Package comparison" text="See exactly what you get in each package, side by side." />
          <CompareTable />
        </div>
      </section>

      <section className="section blue-section grid-bg">
        <div className="container split" style={{ position: 'relative' }}>
          <div>
            <span className="tag on-blue">★ Recommended</span>
            <Reveal as="h2" style={{ color: '#fff' }}>Why Social Premium is the right fit for your business</Reveal>
            <Reveal as="p" delay={0.1} style={{ color: 'rgba(255,255,255,.8)' }}>
              12 posts, 4 videos, WhatsApp Business management, shoots within agreed scope, Google Business Profile and
              monthly strategy in one package — ₹24,999/month + GST.
            </Reveal>
            <Reveal delay={0.2} style={{ marginTop: 26 }}><Link to="/contact" className="btn btn-lime">Start with Premium <FaArrowRight /></Link></Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {whyPremium.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.06} style={{ background: i % 2 ? '#fff' : 'var(--lime)', color: 'var(--ink)', borderRadius: 18, padding: '16px 18px', display: 'flex', gap: 12 }}>
                <FaCircleCheck style={{ color: 'var(--blue-700)', flexShrink: 0, marginTop: 3 }} />
                <div><b>{w.t}</b><div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 2 }}>{w.d}</div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="addons">
        <div className="container">
          <SectionHead tag="Add-ons" title="Additional digital marketing services" text="Optional services — not included in the monthly package prices. Select any of them as required; each is billed separately." />
          <AddOns />
        </div>
      </section>

      <section className="section" id="calculator" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="Paid advertising" title="How paid ads are billed" text="Two separate parts: your ad budget (paid directly to the platform) and our flat ₹500 per ad management fee." />
          <AdsCalculator />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="Billing" title="Billing summary" />
          <InfoTable rows={billing} />
        </div>
      </section>

      <section className="section" id="terms" style={{ paddingTop: 0 }}>
        <div className="container-sm">
          <SectionHead tag="Terms" title="Terms & Conditions" />
          <Accordion
            initial={-1}
            items={[
              { q: 'Pricing & payment', a: <ol style={{ margin: 0, paddingLeft: 18 }}>{terms.slice(0, 3).map((t) => <li key={t}>{t}</li>)}</ol> },
              { q: 'Content, approvals & revisions', a: <ol start={4} style={{ margin: 0, paddingLeft: 18 }}>{terms.slice(3, 8).map((t) => <li key={t}>{t}</li>)}</ol> },
              { q: 'Paid advertising', a: <ol start={9} style={{ margin: 0, paddingLeft: 18 }}>{terms.slice(8, 10).map((t) => <li key={t}>{t}</li>)}</ol> },
              { q: 'Shoots & individual services', a: <ol start={11} style={{ margin: 0, paddingLeft: 18 }}>{terms.slice(10, 15).map((t) => <li key={t}>{t}</li>)}</ol> },
              { q: 'Policies & results', a: <ol start={16} style={{ margin: 0, paddingLeft: 18 }}>{terms.slice(15).map((t) => <li key={t}>{t}</li>)}</ol> },
            ]}
          />
        </div>
      </section>

      <Faq />
      <CtaRing />
    </>
  )
}
