'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  useEffect(() => {
    // Skip particles on mobile — saves CPU significantly
    if (window.innerWidth < 768) return

    const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '255,255,255' : '31,166,74',
    }))

    let rafId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`
        ctx.fill()
        // Only check nearby particles (skip O(n²) on full list)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          if (Math.abs(dx) > 100 || Math.abs(dy) > 100) continue
          const dist = Math.hypot(dx, dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.05 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <section className="hero" id="home">
      <canvas id="particleCanvas"></canvas>
      <div className="hero-bg-blob blob1"></div>
      <div className="hero-bg-blob blob2"></div>
      <div className="hero-bg-blob blob3"></div>

      <div className="hero-content">
        <div className="hero-badge reveal-text"><span className="badge-dot"></span> Pune&apos;s #1 Competitive Exam Coaching</div>
        <h1 className="hero-title">
          <span className="title-line reveal-text">Crack Your Dream Exam</span>
          <span className="title-line gradient-text reveal-text">With ACS Academy</span>
        </h1>
        <p className="hero-sub reveal-text">15+ Years of Excellence in Competitive Exam Preparation</p>
        <p className="hero-exams reveal-text">
          <span>Banking</span><span className="sep">|</span><span>SSC</span><span className="sep">|</span>
          <span>Defence</span><span className="sep">|</span><span>MBA</span><span className="sep">|</span>
          <span>Law</span><span className="sep">|</span><span>MCA</span><span className="sep">|</span>
          <span>CUET</span><span className="sep">|</span><span>IT &amp; More</span>
        </p>
        <div className="hero-btns reveal-text">
          <a href="#counselling" className="btn-primary magnetic"><i className="fas fa-calendar-check"></i> Book Free Counselling</a>
          <a href="#courses" className="btn-secondary magnetic"><i className="fas fa-book-open"></i> Explore Courses</a>
        </div>
        <div className="hero-features reveal-text">
          <div className="feat-item"><i className="fas fa-check-circle"></i> Online + Offline Learning</div>
          <div className="feat-item"><i className="fas fa-check-circle"></i> Recorded Sessions</div>
          <div className="feat-item"><i className="fas fa-check-circle"></i> Expert Mentors</div>
          <div className="feat-item"><i className="fas fa-check-circle"></i> Mock Tests</div>
          <div className="feat-item"><i className="fas fa-check-circle"></i> Library Access</div>
        </div>
      </div>

      <div className="hero-orbital" aria-hidden="true">
        <div className="orb-stars"></div>
        <div className="orb-halo h1"></div>
        <div className="orb-halo h2"></div>
        <div className="orb-halo h3"></div>
        <div className="orb-center">
          <div className="orb-center-glow"></div>
          <div className="orb-center-ring"></div>
          <div className="orb-center-inner">
            <Image src="/images/logo.jpeg" alt="ACS Academy" className="orb-logo-img" width={80} height={80} />
          </div>
          <div className="orb-pulse p1"></div>
          <div className="orb-pulse p2"></div>
          <div className="orb-pulse p3"></div>
        </div>
        <div className="orb-ring ring-inner">
          <div className="planet-arm" style={{'--ia': '0deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-blue"><i className="fas fa-university"></i></div><span className="planet-lbl">Banking</span></div></div>
          <div className="planet-arm" style={{'--ia': '120deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-green"><i className="fas fa-shield-alt"></i></div><span className="planet-lbl">SSC</span></div></div>
          <div className="planet-arm" style={{'--ia': '240deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-gold"><i className="fas fa-briefcase"></i></div><span className="planet-lbl">MBA</span></div></div>
        </div>
        <div className="orb-ring ring-mid">
          <div className="planet-arm" style={{'--ia': '20deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-red"><i className="fas fa-fighter-jet"></i></div><span className="planet-lbl">Defence</span></div></div>
          <div className="planet-arm" style={{'--ia': '110deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-purple"><i className="fas fa-balance-scale"></i></div><span className="planet-lbl">Law</span></div></div>
          <div className="planet-arm" style={{'--ia': '200deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-teal"><i className="fas fa-graduation-cap"></i></div><span className="planet-lbl">CUET</span></div></div>
          <div className="planet-arm" style={{'--ia': '290deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-orange"><i className="fas fa-code"></i></div><span className="planet-lbl">MCA / IT</span></div></div>
        </div>
        <div className="orb-ring ring-outer">
          <div className="planet-arm" style={{'--ia': '10deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-blue"><i className="fas fa-piggy-bank"></i></div><span className="planet-lbl">IBPS PO</span></div></div>
          <div className="planet-arm" style={{'--ia': '82deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-green"><i className="fas fa-train"></i></div><span className="planet-lbl">Railway</span></div></div>
          <div className="planet-arm" style={{'--ia': '154deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-red"><i className="fas fa-star"></i></div><span className="planet-lbl">NDA / CDS</span></div></div>
          <div className="planet-arm" style={{'--ia': '226deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-gold"><i className="fas fa-chart-bar"></i></div><span className="planet-lbl">CAT</span></div></div>
          <div className="planet-arm" style={{'--ia': '298deg'} as React.CSSProperties}><div className="planet-wrap"><div className="planet-icon pi-purple"><i className="fas fa-building"></i></div><span className="planet-lbl">Govt Exam</span></div></div>
        </div>
      </div>

      <div className="hero-counters">
        <div className="counter-item"><span className="counter-num" data-target="15">0</span><span className="counter-plus">+</span><p>Years Experience</p></div>
        <div className="counter-item"><span className="counter-num" data-target="10000">0</span><span className="counter-plus">+</span><p>Students Trained</p></div>
        <div className="counter-item"><span className="counter-num" data-target="5000">0</span><span className="counter-plus">+</span><p>Success Stories</p></div>
        <div className="counter-item"><span className="counter-num" data-target="50">0</span><span className="counter-plus">+</span><p>Expert Faculty</p></div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator"><span></span></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}
