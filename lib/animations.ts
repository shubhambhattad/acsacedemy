'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function initHeroTextReveals() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.to('.hero-badge',    { opacity: 1, y: 0, duration: 0.6 })
    .to('.title-line',    { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }, '-=0.3')
    .to('.hero-sub',      { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .to('.hero-exams',    { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .to('.hero-btns',     { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .to('.hero-features', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
}

export function initOrbitalEntrance() {
  const orbital = document.querySelector('.hero-orbital')
  if (!orbital) return
  gsap.fromTo(orbital,
    { scale: 0.7, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.4)', delay: 0.3 }
  )
  gsap.to('.orb-ring', { opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.6 })
  gsap.fromTo('.planet-wrap',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, delay: 0.9, ease: 'back.out(2)' }
  )
}

export function initScrollAnimations() {
  // Generic reveal
  gsap.utils.toArray<Element>('[data-reveal]').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    })
  })

  // Section headers
  gsap.utils.toArray<Element>('.section-header').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: 'top 85%' },
    })
  })

  // About
  const aboutImg = document.querySelector('.about-image')
  const aboutContent = document.querySelector('.about-content')
  if (aboutImg) gsap.fromTo(aboutImg, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: aboutImg, start: 'top 80%' } })
  if (aboutContent) gsap.fromTo(aboutContent, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: aboutContent, start: 'top 80%' } })

  // Founder cards
  gsap.utils.toArray<Element>('.founder-card').forEach((card, i) => {
    gsap.fromTo(card, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.15,
      scrollTrigger: { trigger: card, start: 'top 85%' },
    })
  })

  // Timeline
  gsap.utils.toArray<Element>('.timeline-item').forEach((item) => {
    const isLeft = item.classList.contains('left')
    gsap.fromTo(item, { opacity: 0, x: isLeft ? -60 : 60 }, {
      opacity: 1, x: 0, duration: 0.8,
      scrollTrigger: { trigger: item, start: 'top 85%' },
    })
  })

  // WhyUs cards
  gsap.utils.toArray<Element>('.why-card').forEach((card, i) => {
    gsap.fromTo(card, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, delay: (i % 3) * 0.1,
      scrollTrigger: { trigger: card, start: 'top 85%' },
    })
  })

  // Courses
  const coursesSection = document.querySelector('#courses')
  if (coursesSection) {
    gsap.fromTo(coursesSection, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: coursesSection, start: 'top 85%' },
    })
  }

  // Batch cards
  gsap.utils.toArray<Element>('.batch-card').forEach((card, i) => {
    gsap.fromTo(card, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, delay: i * 0.08,
      scrollTrigger: { trigger: card, start: 'top 90%' },
    })
  })

  // Faculty cards
  gsap.utils.toArray<Element>('.faculty-card').forEach((card, i) => {
    gsap.fromTo(card, { opacity: 0, scale: 0.9 }, {
      opacity: 1, scale: 1, duration: 0.6, delay: (i % 3) * 0.1,
      scrollTrigger: { trigger: card, start: 'top 85%' },
    })
  })

  // FAQ slide from left
  gsap.utils.toArray<Element>('.faq-item').forEach((item) => {
    gsap.fromTo(item, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.6,
      scrollTrigger: { trigger: item, start: 'top 88%' },
    })
  })

  // Contact / Counselling
  const counsellingForm = document.querySelector('.counselling-form')
  if (counsellingForm) {
    gsap.fromTo(counsellingForm, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: counsellingForm, start: 'top 85%' },
    })
  }

  // Counter animation
  gsap.utils.toArray<HTMLElement>('.counter-num').forEach((el) => {
    const target = parseInt(el.dataset.target || '0', 10)
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target, duration: 2, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(((this as unknown as gsap.core.Tween).targets()[0] as { val: number }).val).toLocaleString() },
        })
      },
    })
  })

  // Hero blob parallax
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      gsap.to('.hero-bg-blob', { y: self.progress * 120, ease: 'none' })
    },
  })
}

export function initSmoothScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 1, ease: 'power3.inOut' })
    })
  })
}

export function initActiveNavLink() {
  const links = document.querySelectorAll<HTMLAnchorElement>('.nav-link')
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: () => {
      links.forEach((link) => {
        const href = link.getAttribute('href')
        if (!href) return
        const section = document.querySelector(href)
        if (!section) return
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) link.classList.add('active')
        else link.classList.remove('active')
      })
    },
  })
}

export function initMagneticButtons() {
  document.querySelectorAll<HTMLElement>('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
    })
  })
}

export function initHeroMouseGradient() {
  const hero = document.querySelector<HTMLElement>('.hero')
  if (!hero) return
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    hero.style.setProperty('--mouse-x', `${x}%`)
    hero.style.setProperty('--mouse-y', `${y}%`)
  })
}

export function initOrbitalParallax() {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    gsap.to('.hero-orbital', { x, y, duration: 1, ease: 'power2.out' })
  })
}

export function initMarqueePause() {
  const marquee = document.querySelector<HTMLElement>('.marquee-track')
  if (!marquee) return
  marquee.addEventListener('mouseenter', () => (marquee.style.animationPlayState = 'paused'))
  marquee.addEventListener('mouseleave', () => (marquee.style.animationPlayState = 'running'))
}

export function initVanillaTilt() {
  if (typeof window === 'undefined') return
  const VT = (window as Window & { VanillaTilt?: { init: (els: NodeListOf<Element>, opts: object) => void } }).VanillaTilt
  if (!VT) return
  const cards = document.querySelectorAll('.tilt-card')
  if (cards.length) VT.init(cards, { max: 8, speed: 400, glare: true, 'max-glare': 0.15 })
}

export function initBatchHover() {
  document.querySelectorAll<HTMLElement>('.batch-card').forEach((card) => {
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, duration: 0.3, ease: 'power2.out' }))
    card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' }))
  })
}
