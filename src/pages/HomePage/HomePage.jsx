import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Articles from '../../components/Articles/Articles'

function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <Articles />
    </>
  )
}

export default HomePage
