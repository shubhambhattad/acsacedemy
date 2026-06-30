'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const spansRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    const spans = spansRef.current
    if (next) {
      gsap.to(spans[0], { rotate: 45, y: 7, duration: 0.3 })
      gsap.to(spans[1], { opacity: 0, duration: 0.2 })
      gsap.to(spans[2], { rotate: -45, y: -7, duration: 0.3 })
    } else {
      spans.forEach(s => s && gsap.to(s, { rotate: 0, y: 0, opacity: 1, duration: 0.3 }))
    }
  }

  const closeMenu = () => {
    if (!menuOpen) return
    setMenuOpen(false)
    spansRef.current.forEach(s => s && gsap.to(s, { rotate: 0, y: 0, opacity: 1, duration: 0.3 }))
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <nav className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src="/images/logo.jpeg" alt="ACS Academy" className="nav-logo-img" width={160} height={50} priority />
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About Us</a></li>
          <li className="dropdown">
            <a href="#courses" className="nav-link">Courses <i className="fas fa-chevron-down"></i></a>
            <div className="dropdown-menu">
              <a href="#courses" onClick={closeMenu}>Banking Exams</a>
              <a href="#courses" onClick={closeMenu}>SSC &amp; Govt</a>
              <a href="#courses" onClick={closeMenu}>MBA Entrance</a>
              <a href="#courses" onClick={closeMenu}>Defence</a>
              <a href="#courses" onClick={closeMenu}>Law Entrance</a>
              <a href="#courses" onClick={closeMenu}>MCA / IT</a>
              <a href="#courses" onClick={closeMenu}>CUET / BBA</a>
            </div>
          </li>
          <li><a href="#assessment" className="nav-link" onClick={closeMenu}>Free Test</a></li>
          <li><a href="#test-series" className="nav-link" onClick={closeMenu}>Test Series</a></li>
          <li><a href="#success" className="nav-link" onClick={closeMenu}>Success Stories</a></li>
          <li><a href="#faculty" className="nav-link" onClick={closeMenu}>Faculty</a></li>
          <li><a href="#blog" className="nav-link" onClick={closeMenu}>Blogs</a></li>
          <li><a href="#youtube" className="nav-link" onClick={closeMenu}>YouTube</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="tel:+918149895185" className="nav-phone"><i className="fas fa-phone"></i> +91 81498 95185</a>
          <a href="#counselling" className="btn-enroll magnetic" onClick={closeMenu}>Enroll Now</a>
          <button className={`nav-toggle${menuOpen ? ' open' : ''}`} id="navToggle" aria-label="Menu" onClick={toggleMenu}>
            <span ref={el => { spansRef.current[0] = el }}></span>
            <span ref={el => { spansRef.current[1] = el }}></span>
            <span ref={el => { spansRef.current[2] = el }}></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
