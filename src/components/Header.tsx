import React, { useState, useEffect } from 'react'
import '../App.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 125)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="site-titlex">Anuj K.</div>
      <nav>
        <a href="#Home" className="nav-link">Home</a>
        <a href="#Blog" className="nav-link">Blog</a>
        <a href="#About" className="nav-link">About</a>
        <a href="#Contact" className="nav-link">Contact</a>
      </nav>
    </header>
  )
}

export default Header
