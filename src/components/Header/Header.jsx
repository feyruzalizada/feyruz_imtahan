import { Link } from 'react-router-dom'
import { SearchIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from '../Icons/Icons'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">HotCoffee</Link>

        <form className="header__search" onSubmit={(e) => e.preventDefault()}>
          <SearchIcon />
          <input type="text" className="header__search-input" placeholder="Search..." />
        </form>

        <nav className="header__nav">
          <ul className="header__menu">
            <li><Link to="/" className="header__link">Home</Link></li>
            <li><Link to="/#articles" className="header__link">Articles</Link></li>
          </ul>
          <ul className="header__socials">
            <li><a href="#" className="header__social" aria-label="Instagram"><InstagramIcon /></a></li>
            <li><a href="#" className="header__social" aria-label="Twitter"><TwitterIcon /></a></li>
            <li><a href="#" className="header__social" aria-label="LinkedIn"><LinkedinIcon /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
