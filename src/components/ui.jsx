import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import logo from '../assets/logo.png'
import { img as unsplash } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

/* Image with graceful brand fallback (never shows a broken image) */
export function Img({ id, src, alt = '', w = 900, className, style, eager }) {
  const [failed, setFailed] = useState(false)
  const url = src || (id ? unsplash(id, w) : null)
  if (failed || !url) {
    return (
      <div className={`img-fallback ${className || ''}`} style={style} role="img" aria-label={alt}>
        <img src={logo} alt="" />
      </div>
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      className={className}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

/* Fade-up + blur reveal on scroll */
export function Reveal({ children, delay = 0, y = 30, className, as = 'div', once = true, ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* Word-by-word headline animation */
export function Words({ text, className, delay = 0, as = 'h2', accent }) {
  const M = motion[as]
  const words = text.split(' ')
  return (
    <M className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}>
      {words.map((w, i) => (
        <span key={i}>
          <motion.span
            className={`word ${accent && accent.includes(w.replace(/[^\w]/g, '')) ? 'accent' : ''}`}
            variants={{ hidden: { opacity: 0, y: '0.5em', filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } } }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </M>
  )
}

export function Tag({ children, onBlue }) {
  return (
    <Reveal as="span" className={`tag ${onBlue ? 'on-blue' : ''}`} y={12}>
      {children}
    </Reveal>
  )
}

export function SectionHead({ tag, title, text, onBlue }) {
  return (
    <div className="section-head">
      <Tag onBlue={onBlue}>{tag}</Tag>
      <Words text={title} />
      {text && <Reveal as="p" delay={0.15}>{text}</Reveal>}
    </div>
  )
}

/* Animated number counter */
export function Counter({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setVal(Math.round(v)), onComplete: () => setVal(to) })
    return () => c.stop()
  }, [inView, to])
  return <strong ref={ref}>{prefix}{val.toLocaleString('en-IN')}{suffix}</strong>
}

export function Logo({ dark }) {
  return (
    <span className="brand" style={dark ? { color: 'var(--ink)' } : undefined}>
      <span className="brand-mark"><img src={logo} alt="" /></span>
      Exotic Infotech
    </span>
  )
}

export { logo }
