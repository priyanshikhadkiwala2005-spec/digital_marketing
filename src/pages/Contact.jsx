import { useState } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot, FaClock, FaPaperPlane } from 'react-icons/fa6'
import { Reveal } from '../components/ui'
import { PageHero, Faq } from '../components/sections'
import { site, waLink } from '../data/site'

const interests = ['Social Starter (₹7,999/mo)', 'Social Growth (₹14,999/mo)', 'Social Premium (₹24,999/mo)', 'Meta / Google Ads', 'Shoot / Video / Drone', 'Design & Branding', 'Telegram / YouTube add-on', 'Not sure yet']

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', business: '', interest: interests[2], message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const text = `Hi Exotic Infotech!\nName: ${f.name}\nPhone: ${f.phone}\nBusiness: ${f.business}\nInterested in: ${f.interest}\n${f.message}`

  const sendWA = (e) => {
    e.preventDefault()
    window.open(waLink(text), '_blank', 'noopener')
  }
  const mail = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry: ' + f.interest)}&body=${encodeURIComponent(text)}`

  return (
    <>
      <PageHero tag="Contact" title="Let's grow your brand together" text="Tell us about your business — we'll suggest the right package or services and share a clear quote." />
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container contact-grid">
          <div className="contact-cards">
            <Reveal><a className="c-card" href={waLink()} target="_blank" rel="noreferrer"><span className="ci" style={{ background: '#25D366' }}><FaWhatsapp /></span><span><small>WhatsApp</small><b>Chat with us</b></span></a></Reveal>
            <Reveal delay={0.05}><a className="c-card" href={`tel:${site.phone.replace(/\s/g, '')}`}><span className="ci"><FaPhone /></span><span><small>Call</small><b>{site.phone}</b></span></a></Reveal>
            <Reveal delay={0.1}><a className="c-card" href={`mailto:${site.email}`}><span className="ci" style={{ background: 'var(--lime)', color: 'var(--ink)' }}><FaEnvelope /></span><span><small>Email</small><b>{site.email}</b></span></a></Reveal>
            <Reveal delay={0.15}><div className="c-card"><span className="ci"><FaLocationDot /></span><span><small>Location</small><b>{site.address}</b></span></div></Reveal>
            <Reveal delay={0.2}><div className="c-card"><span className="ci" style={{ background: 'var(--lime)', color: 'var(--ink)' }}><FaClock /></span><span><small>Working hours</small><b>{site.hours}</b></span></div></Reveal>
            <Reveal delay={0.25} className="area-card"><iframe title="Bharuch map" loading="lazy" style={{ height: 240 }} src="https://www.google.com/maps?q=Bharuch,Gujarat&z=11&output=embed" /></Reveal>
          </div>

          <Reveal as="form" className="form" onSubmit={sendWA}>
            <span className="tag">Book a Call</span>
            <h3 style={{ marginTop: 14 }}>Send us your enquiry</h3>
            <div className="form-grid">
              <div className="inp"><label htmlFor="n">Your name</label><input id="n" required value={f.name} onChange={set('name')} placeholder="Full name" /></div>
              <div className="inp"><label htmlFor="p">Phone / WhatsApp</label><input id="p" required type="tel" value={f.phone} onChange={set('phone')} placeholder="+91" /></div>
              <div className="inp full"><label htmlFor="b">Business name & type</label><input id="b" value={f.business} onChange={set('business')} placeholder="e.g. Café in Bharuch" /></div>
              <div className="inp full"><label htmlFor="i">I'm interested in</label>
                <select id="i" value={f.interest} onChange={set('interest')}>{interests.map((x) => <option key={x}>{x}</option>)}</select>
              </div>
              <div className="inp full"><label htmlFor="m">Message</label><textarea id="m" value={f.message} onChange={set('message')} placeholder="Tell us about your goals…" /></div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-blue"><FaWhatsapp /> Send on WhatsApp</button>
              <a className="btn btn-white" href={mail}><FaPaperPlane /> Send by Email</a>
            </div>
            <p className="form-note">Your message opens in WhatsApp or your email app — nothing is stored on this website.</p>
          </Reveal>
        </div>
      </section>
      <Faq />
    </>
  )
}
