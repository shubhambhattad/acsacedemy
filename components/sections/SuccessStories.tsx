'use client'

import { useEffect, useRef } from 'react'
import 'swiper/swiper-bundle.css'
import testimonials from '@/data/testimonials'

export default function SuccessStories() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sw: any
    import('swiper/bundle').then(({ Swiper }) => {
      sw = new Swiper('#testimonialSwiper', {
        slidesPerView: 1, spaceBetween: 24, loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '#testiPagination', clickable: true },
        navigation: { prevEl: '#testiPrev', nextEl: '#testiNext' },
        breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
      })
    })
    return () => sw?.destroy?.()
  }, [])

  return (
    <section className="success section" id="success">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Achievements</div>
          <h2 className="section-title split-text">Our Students&apos; <span className="gradient-text">Success Stories</span></h2>
          <p className="section-sub">Real students. Real results. Real pride.</p>
        </div>
        <div className="success-counters">
          <div className="sc-item"><div className="sc-num counter-num" data-target="10000">0</div><span className="sc-plus">+</span><p>Students Trained</p></div>
          <div className="sc-item"><div className="sc-num counter-num" data-target="5000">0</div><span className="sc-plus">+</span><p>Govt. Selections</p></div>
          <div className="sc-item"><div className="sc-num counter-num" data-target="15">0</div><span className="sc-plus">+</span><p>Years of Excellence</p></div>
          <div className="sc-item"><div className="sc-num counter-num" data-target="98">0</div><span className="sc-plus">%</span><p>Student Satisfaction</p></div>
        </div>
        <div className="testimonial-slider swiper" id="testimonialSwiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {testimonials.map(t => (
              <div key={t.id} className="swiper-slide">
                <div className="testi-card glass-card">
                  <div className="testi-quote"><i className="fas fa-quote-left"></i></div>
                  <p>&ldquo;{t.text}&rdquo;</p>
                  <div className="testi-author">
                    <div className="testi-avatar"><i className="fas fa-user"></i></div>
                    <div className="testi-info">
                      <strong>{t.name}</strong>
                      <span>{t.exam}</span>
                      <span className="testi-batch">{t.batch}</span>
                    </div>
                  </div>
                  <div className="testi-rating">{'★'.repeat(t.rating)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" id="testiPagination"></div>
          <button className="swiper-button-prev" id="testiPrev" aria-label="Previous"></button>
          <button className="swiper-button-next" id="testiNext" aria-label="Next"></button>
        </div>
      </div>
    </section>
  )
}
