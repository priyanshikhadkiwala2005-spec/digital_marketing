import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { Img, Reveal, Words, Tag } from '../components/ui'
import { PageHero, CtaRing } from '../components/sections'
import { posts } from '../data/content'
import NotFound from './NotFound'

function PostCard({ p, i }) {
  return (
    <Reveal delay={(i % 2) * 0.1}>
      <Link to={`/blog/${p.slug}`} className="post-card">
        <div className="post-img">
          <Img id={p.image} w={1000} alt={p.title} />
          <span className="see">See Details</span>
        </div>
        <div className="post-meta"><span className="ptag">{p.tag}</span>{p.date} · {p.read}</div>
        <h3>{p.title}</h3>
        <p>{p.excerpt}</p>
      </Link>
    </Reveal>
  )
}

export default function Blog() {
  return (
    <>
      <PageHero tag="Blog" title="Insights That Drive Growth" text="Practical guides on social media, WhatsApp Business, Google Business Profile and paid ads for local businesses." />
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container blog-grid">
          {posts.map((p, i) => <PostCard key={p.slug} p={p} i={i} />)}
        </div>
      </section>
      <CtaRing />
    </>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />
  const more = posts.filter((p) => p.slug !== slug).slice(0, 2)
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="page-glow" />
        <div className="container-sm" style={{ position: 'relative' }}>
          <Tag>{post.tag}</Tag>
          <Words as="h1" text={post.title} />
          <Reveal as="p" className="lead" delay={0.2}>{post.excerpt}</Reveal>
          <Reveal as="p" className="muted" delay={0.25} style={{ marginTop: 14, fontSize: 14 }}>{post.read} · {post.date}</Reveal>
        </div>
      </section>
      <div className="container">
        <Reveal className="article-cover"><Img id={post.image} w={1600} alt={post.title} eager /></Reveal>
      </div>
      <article className="container-sm article">
        {post.body.map((b) => (
          <Reveal key={b.h}>
            <h2>{b.h}</h2>
            <p>{b.p}</p>
          </Reveal>
        ))}
        <Reveal style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
          <Link to="/blog" className="btn btn-white"><FaArrowLeft /> All Articles</Link>
          <Link to="/packages" className="btn btn-blue">View Packages <FaArrowRight /></Link>
        </Reveal>
      </article>
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,40px)', marginBottom: 30 }}>More articles</h2>
          <div className="blog-grid">{more.map((p, i) => <PostCard key={p.slug} p={p} i={i} />)}</div>
        </div>
      </section>
      <CtaRing />
    </>
  )
}
