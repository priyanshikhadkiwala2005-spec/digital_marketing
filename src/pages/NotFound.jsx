import { Link } from 'react-router-dom'
import { PageHero } from '../components/sections'

export default function NotFound() {
  return (
    <PageHero tag="404" title="This page took a coffee break" text="The page you're looking for doesn't exist or has moved.">
      <Link to="/" className="btn btn-blue">Back to Home</Link>
      <Link to="/packages" className="btn btn-white">View Packages</Link>
    </PageHero>
  )
}
