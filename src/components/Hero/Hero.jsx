import heroIllustration from '../../assets/images/hero-illustration.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Make better coffee ☕</h1>
          <p className="hero__subtitle">why learn how to blog?</p>
        </div>
        <img src={heroIllustration} alt="People working together" className="hero__image" />
      </div>
    </section>
  )
}

export default Hero
