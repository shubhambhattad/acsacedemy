'use client'

import { useState } from 'react'
import gsap from 'gsap'
import faqs from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    document.querySelectorAll('.faq-q i').forEach(icon => gsap.to(icon, { rotate: 0, duration: 0.3 }))
    if (openIndex === i) {
      setOpenIndex(null)
    } else {
      setOpenIndex(i)
      const icons = document.querySelectorAll('.faq-q i')
      if (icons[i]) gsap.to(icons[i], { rotate: 180, duration: 0.3 })
    }
  }

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FAQs</div>
          <h2 className="section-title split-text">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="faq-wrap">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item glass-card${openIndex === i ? ' active' : ''}`}>
              <div className="faq-q" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-a"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
