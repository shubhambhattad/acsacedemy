'use client'

import { useState, useEffect } from 'react'

export default function ExitPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const shown = sessionStorage.getItem('exitPopupShown')
    if (shown) return
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true)
        sessionStorage.setItem('exitPopupShown', '1')
        document.removeEventListener('mouseleave', onMouseLeave)
      }
    }
    const timer = setTimeout(() => document.addEventListener('mouseleave', onMouseLeave), 5000)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="exit-popup active" id="exitPopup">
      <div className="exit-popup-content glass-card">
        <button className="exit-close" onClick={() => setVisible(false)} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
        <div className="exit-popup-inner">
          <div className="exit-icon"><i className="fas fa-gift"></i></div>
          <h3>Wait! Don&apos;t Leave Yet</h3>
          <p>Get a <strong>FREE Demo Class</strong> + <strong>Study Material</strong> worth ₹2,000</p>
          <form className="exit-form" onSubmit={(e) => { e.preventDefault(); setVisible(false) }}>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <select>
              <option value="">Select Exam</option>
              <option>Banking</option><option>SSC</option><option>MBA</option>
              <option>Defence</option><option>Law</option><option>MCA/IT</option><option>CUET</option>
            </select>
            <button type="submit" className="btn-primary full-btn">
              <i className="fas fa-gift"></i> Claim Free Demo Class
            </button>
          </form>
          <p className="exit-note"><i className="fas fa-shield-alt"></i> No spam. We respect your privacy.</p>
        </div>
      </div>
    </div>
  )
}
