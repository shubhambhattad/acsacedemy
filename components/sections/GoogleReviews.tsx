'use client'

import { useEffect } from 'react'

export default function GoogleReviews() {
  useEffect(() => {
    const existing = document.querySelector('script[src*="jotform.com/website-widgets"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://www.jotform.com/website-widgets/embed/019f0ff07a817743a3dbf48397eed2c640f3'
      document.getElementById('JFWebsiteWidget-019f0ff07a817743a3dbf48397eed2c640f3')?.after(script)
    }
  }, [])

  return (
    <section className="google-reviews-sec section" id="google-reviews">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Google Reviews</div>
          <h2 className="section-title split-text">What Students Say on <span className="gradient-text">Google</span></h2>
          <p className="section-sub">Real reviews from real students — straight from our Google Business profile</p>
        </div>
        <div className="google-reviews-widget-wrap">
          <div id="JFWebsiteWidget-019f0ff07a817743a3dbf48397eed2c640f3"></div>
        </div>
      </div>
    </section>
  )
}
