import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaHeart, FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa6'
import { Img, logo } from './ui'

const DURATION = 3200

/* An Instagram-style "reel" playing inside a phone mockup.
   slides: [{ video?: '/media/x.mp4', poster?, id?: unsplashId, caption }] */
export default function PhoneReel({ slides }) {
  const [i, setI] = useState(0)
  const [pop, setPop] = useState(0)
  const cur = slides[i]
  const dur = cur.video ? 6000 : DURATION

  useEffect(() => {
    const t = setTimeout(() => {
      setI((v) => (v + 1) % slides.length)
      setPop((p) => p + 1)
    }, dur)
    return () => clearTimeout(t)
  }, [i, dur, slides.length])

  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-island" />
        <div className="phone-status"><span>9:41</span><span>●●● ◔</span></div>
        <div className="phone-bars">
          {slides.map((_, k) => (
            <span key={k}>
              {k < i && <i style={{ transform: 'scaleX(1)' }} />}
              {k === i && (
                <motion.i key={`${i}-${pop}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: dur / 1000, ease: 'linear' }} />
              )}
            </span>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={i}
            className="phone-media"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {cur.video ? (
              <video src={cur.video} poster={cur.poster} autoPlay muted playsInline loop />
            ) : (
              <motion.div style={{ width: '100%', height: '100%' }} animate={{ scale: [1, 1.08] }} transition={{ duration: dur / 1000, ease: 'linear' }}>
                <Img id={cur.id} w={600} alt={cur.caption} eager />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={`h${pop}`}
            className="heart-pop"
            initial={{ opacity: 0, scale: 0.3, x: '-50%', y: '-50%' }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1.15, 1, 1.3] }}
            transition={{ duration: 1, delay: 0.9, times: [0, 0.3, 0.6, 1] }}
          >
            <FaHeart />
          </motion.div>
        </AnimatePresence>

        <div className="phone-actions">
          <span><FaHeart style={{ color: '#ff4d6d' }} />Like</span>
          <span><FaRegComment />Chat</span>
          <span><FaRegPaperPlane />Share</span>
          <span><FaRegBookmark />Save</span>
        </div>

        <div className="phone-overlay">
          <div className="phone-user">
            <span className="av"><img src={logo} alt="" /></span>
            exoticinfotech
            <span className="follow">Follow</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.p key={i} className="phone-caption" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}>
              {cur.caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
