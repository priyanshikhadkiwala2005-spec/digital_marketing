import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCircleCheck, FaCheck, FaMinus, FaStar, FaTelegram, FaYoutube, FaMeta, FaGoogle, FaMagnifyingGlass, FaArrowRight } from 'react-icons/fa6'
import { Reveal } from './ui'
import { packages, compareRows, addOns } from '../data/packages'
import { rateCategories } from '../data/rates'
import { waLink } from '../data/site'

const ease = [0.22, 1, 0.36, 1]
const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

/* ---------------- Package cards ---------------- */
export function PricingCards({ detailed }) {
  return (
    <div className="price-grid">
      {packages.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.1} className={`price-card ${p.recommended ? 'featured' : ''}`}>
          {p.recommended && <span className="badge-rec"><FaStar size={11} /> Recommended</span>}
          <span className="ptag">{p.tag}</span>
          <h3>{p.name}</h3>
          <p className="sub">{p.bestFor}</p>
          <div className="price"><strong>{p.priceLabel}</strong><span>/ month + GST</span></div>
          <div className="price-stats">
            {p.stats.slice(0, 3).map((s) => <div key={s.l}><b>{s.n}</b><small>{s.l}</small></div>)}
          </div>
          {!detailed && (
            <>
              <div className="feat-title">Features included:</div>
              <ul className="feat-list">
                {p.highlights.map((h) => <li key={h}><FaCircleCheck />{h}</li>)}
              </ul>
            </>
          )}
          {detailed && p.groups.map((g) => (
            <div key={g.title}>
              <div className="feat-title">{g.title}</div>
              <ul className="feat-list" style={{ marginBottom: 6 }}>
                {g.items.map((h) => <li key={h}><FaCircleCheck />{h}</li>)}
              </ul>
            </div>
          ))}
          {detailed && p.note && <p style={{ fontSize: 12.5, opacity: 0.8, margin: '14px 0 22px' }}>{p.note}</p>}
          <a
            className={`btn btn-block ${p.recommended ? 'btn-white' : 'btn-blue'}`}
            href={waLink(`Hi Exotic Infotech, I'm interested in the ${p.name} package (${p.priceLabel}/month + GST).`)}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: detailed ? 8 : undefined }}
          >
            Start Now <FaArrowRight />
          </a>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------------- Comparison table ---------------- */
const cell = (v) => (v === true ? <FaCheck className="yes" /> : v === false ? <FaMinus className="no" /> : v)

export function CompareTable() {
  return (
    <Reveal className="table-wrap">
      <table className="compare">
        <thead>
          <tr>
            <th>Service</th><th>Starter</th><th>Growth</th><th className="hl">Premium ★</th>
          </tr>
        </thead>
        <tbody>
          {compareRows.map((r) => (
            <tr key={r[0]}>
              <td>{r[0]}</td><td>{cell(r[1])}</td><td>{cell(r[2])}</td><td className="hl">{cell(r[3])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  )
}

/* ---------------- Add-on services ---------------- */
export function AddOns() {
  const { telegram, youtube, meta, google } = addOns
  return (
    <div className="addon-grid">
      <Reveal className="addon">
        <div className="addon-head"><span className="ai" style={{ background: '#229ED9' }}><FaTelegram /></span><div><h3>{telegram.title}</h3><span className="s">Community & influencer promotion</span></div></div>
        <div className="line-items">
          {telegram.items.map((it) => <div key={it.n}><span>{it.n}<br /><small className="muted">{it.d}</small></span><b>{it.p}</b></div>)}
          <div className="total"><span>Total Telegram Marketing Budget</span><b>{telegram.total}</b></div>
        </div>
      </Reveal>
      <Reveal className="addon" delay={0.08}>
        <div className="addon-head"><span className="ai" style={{ background: '#FF0033' }}><FaYoutube /></span><div><h3>{youtube.title}</h3><span className="s">YouTube-ready video delivery</span></div></div>
        <p>{youtube.d}</p>
        <div className="line-items">
          {youtube.options.map((o) => <div key={o.n}><span>{o.n}</span><b>{o.p}</b></div>)}
        </div>
      </Reveal>
      <Reveal className="addon">
        <div className="addon-head"><span className="ai"><FaMeta /></span><div><h3>{meta.title}</h3><span className="s">{meta.sub}</span></div></div>
        <p>{meta.d}</p>
        <div className="line-items"><div className="total"><span>Management fee</span><b>₹500 per ad</b></div></div>
      </Reveal>
      <Reveal className="addon" delay={0.08}>
        <div className="addon-head"><span className="ai" style={{ background: 'var(--lime)', color: 'var(--ink)' }}><FaGoogle /></span><div><h3>{google.title}</h3><span className="s">{google.sub}</span></div></div>
        <p>{google.d}</p>
        <div className="line-items"><div className="total"><span>Management fee</span><b>₹500 per ad</b></div></div>
      </Reveal>
    </div>
  )
}

/* ---------------- Ads fee calculator ---------------- */
export function AdsCalculator() {
  const [metaAds, setMetaAds] = useState(3)
  const [metaBudget, setMetaBudget] = useState(20000)
  const [gAds, setGAds] = useState(4)
  const [gBudget, setGBudget] = useState(30000)
  const [pkg, setPkg] = useState('premium')
  const p = packages.find((x) => x.id === pkg)
  const fee = (metaAds + gAds) * 500
  const ourTotal = (p ? p.price : 0) + fee
  return (
    <Reveal className="calc">
      <div className="calc-left">
        <span className="tag">Calculator</span>
        <h3 style={{ marginTop: 14 }}>Estimate your monthly bill</h3>
        <p className="muted" style={{ marginTop: 8, fontSize: 14.5 }}>Ad budgets are paid by you directly to Meta / Google. Our fee is a flat ₹500 per ad.</p>
        <div className="field">
          <label>Package</label>
          <div className="seg">
            {[...packages.map((x) => ({ id: x.id, n: x.name.replace('Social ', '') })), { id: 'none', n: 'Ads only' }].map((x) => (
              <button key={x.id} className={pkg === x.id ? 'on' : ''} onClick={() => setPkg(x.id)}>{x.n}</button>
            ))}
          </div>
        </div>
        <div className="field"><label>Meta ads (Facebook & Instagram) <span>{metaAds}</span></label><input type="range" min="0" max="15" value={metaAds} onChange={(e) => setMetaAds(+e.target.value)} /></div>
        <div className="field"><label>Meta ad budget <span>{inr(metaBudget)}</span></label><input type="range" min="0" max="200000" step="5000" value={metaBudget} onChange={(e) => setMetaBudget(+e.target.value)} /></div>
        <div className="field"><label>Google ads <span>{gAds}</span></label><input type="range" min="0" max="15" value={gAds} onChange={(e) => setGAds(+e.target.value)} /></div>
        <div className="field"><label>Google ad budget <span>{inr(gBudget)}</span></label><input type="range" min="0" max="200000" step="5000" value={gBudget} onChange={(e) => setGBudget(+e.target.value)} /></div>
      </div>
      <div className="calc-right">
        <h3 style={{ fontSize: 22 }}>Your estimate</h3>
        <div>
          <div className="calc-row"><span>{p ? p.name : 'No package'}</span><b>{p ? inr(p.price) : '—'}</b></div>
          <div className="calc-row"><span>Meta fee ({metaAds} × ₹500)</span><b>{inr(metaAds * 500)}</b></div>
          <div className="calc-row"><span>Google fee ({gAds} × ₹500)</span><b>{inr(gAds * 500)}</b></div>
          <div className="calc-row" style={{ opacity: 0.75 }}><span>Ad budgets (paid to platforms)</span><b>{inr(metaBudget + gBudget)}</b></div>
        </div>
        <div className="calc-total">
          <small>Billed by Exotic Infotech (+ GST)</small>
          <AnimatePresence mode="wait">
            <motion.strong key={ourTotal} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {inr(ourTotal)}
            </motion.strong>
          </AnimatePresence>
          <small style={{ fontWeight: 500 }}>Total marketing spend incl. ad budgets: {inr(ourTotal + metaBudget + gBudget)}</small>
        </div>
      </div>
    </Reveal>
  )
}

/* ---------------- Individual service rate card ---------------- */
export function RateCard() {
  const [cat, setCat] = useState(rateCategories[0].key)
  const [q, setQ] = useState('')
  const items = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (term) {
      return rateCategories.flatMap((c) => c.items).filter((it) => `${it.code} ${it.name} ${it.notes}`.toLowerCase().includes(term))
    }
    return rateCategories.find((c) => c.key === cat).items
  }, [cat, q])

  return (
    <div>
      <div className="rate-tools">
        <div className="tabs">
          {rateCategories.map((c) => (
            <button key={c.key} className={`tab ${cat === c.key && !q ? 'on' : ''}`} onClick={() => { setCat(c.key); setQ('') }}>
              {c.title}
            </button>
          ))}
        </div>
        <label className="search">
          <FaMagnifyingGlass className="muted" />
          <input placeholder="Search 130+ services… e.g. reel, drone, logo" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={q ? 'search' + q : cat} className="rate-list" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease }}>
          {items.map((it) => (
            <div className="rate" key={it.code}>
              <div className="rate-top">
                <div>
                  <span className="code">{it.code}</span>
                  <h4>{it.name}</h4>
                </div>
                <div>
                  <div className="amt">{it.rate}</div>
                  <div className="unit" style={{ textAlign: 'right' }}>{it.unit}</div>
                </div>
              </div>
              <p>{it.notes}</p>
            </div>
          ))}
          {!items.length && <p className="muted">No service found. Try another word, or <Link to="/contact" style={{ color: 'var(--blue)' }}>ask us</Link>.</p>}
        </motion.div>
      </AnimatePresence>
      <p className="gst-note">All rates in INR, exclusive of GST, ad spend, influencer fees and third-party costs. Rates marked * are indicative and confirmed after a brief.</p>
    </div>
  )
}

export function InfoTable({ rows }) {
  return (
    <Reveal className="table-wrap">
      <table className="info-table">
        <tbody>{rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody>
      </table>
    </Reveal>
  )
}
