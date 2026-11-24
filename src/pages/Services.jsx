import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { Img, Reveal, SectionHead } from '../components/ui'
import { PageHero, ServiceCards, Platforms, CtaRing, serviceIcon } from '../components/sections'
import { RateCard, InfoTable } from '../components/pricing'
import { services } from '../data/content'
import { turnaround, expenses } from '../data/packages'
import { waLink } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero tag="Services" title="Everything you need to grow on social — done for you" text="Social media management, content, video, shoots, WhatsApp Business, Google Business Profile, ads and influencer marketing.">
        <a href="#rates" className="btn btn-blue">View Rate Card <FaArrowRight /></a>
        <Link to="/packages" className="btn btn-white">Monthly Packages</Link>
      </PageHero>

      <section style={{ paddingBottom: 30 }}>
        <div className="container"><ServiceCards /></div>
      </section>
      <Platforms />

      <section className="section">
        <div className="container">
          <SectionHead tag="In detail" title="What each service covers" text="Order any service on its own, or bundle them into a monthly package." />
          <div>
            {services.map((s, i) => {
              const I = serviceIcon[s.icon]
              return (
                <div className="svc-detail" key={s.id}>
                  <Reveal className="svc-detail-img"><Img id={s.image} w={1100} alt={s.title} /></Reveal>
                  <Reveal delay={0.1}>
                    <span className="icon3d" style={{ width: 64, height: 64, fontSize: 28, borderRadius: 20, animation: 'none' }}><I /></span>
                    <h3 style={{ marginTop: 20 }}>{s.title}</h3>
                    <p>{s.short}</p>
                    <div className="chips">{s.includes.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginTop: 18 }}>
                      <span className="from-pill" style={{ marginTop: 0 }}>From {s.from}</span>
                      <a className="btn btn-sm btn-white" href={waLink(`Hi Exotic Infotech, I'd like a quote for ${s.title}.`)} target="_blank" rel="noreferrer">Get a Quote <FaArrowRight /></a>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" id="rates" style={{ paddingTop: 20 }}>
        <div className="container">
          <SectionHead tag="Rate Card" title="Individual service rates" text="130+ services you can order individually, with or without a monthly package. Each item has a code for easy reference in orders and invoices." />
          <RateCard />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="Timelines" title="Standard turnaround times" text="Working days from receipt of a complete brief, footage or approval; may extend during peak festival periods." />
          <InfoTable rows={turnaround} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead tag="Service area" title="Service area & production expenses" text="Standard service area for shoots: Bharuch, Ankleshwar and locations within 25 km of Bharuch. The costs below are charged with prior approval." />
          <InfoTable rows={expenses} />
        </div>
      </section>

      <CtaRing title="Need a custom quote?" text="Tell us what you need — we'll put together the right mix of services for your brand." />
    </>
  )
}
