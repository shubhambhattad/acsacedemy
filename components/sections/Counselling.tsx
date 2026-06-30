'use client'

import { useState } from 'react'

export default function Counselling() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section className="counselling section" id="counselling">
      <div className="container">
        <div className="counselling-grid">
          <div className="counselling-content">
            <div className="section-tag">Free Consultation</div>
            <h2 className="section-title split-text">Book Your <span className="gradient-text">Free Counselling</span></h2>
            <p>Talk to our expert counsellors and get a personalized study plan for your target exam. 100% free, no obligations.</p>
            <div className="counselling-features">
              <div className="cf-item"><i className="fas fa-check-circle"></i> Personalized study plan</div>
              <div className="cf-item"><i className="fas fa-check-circle"></i> Exam selection guidance</div>
              <div className="cf-item"><i className="fas fa-check-circle"></i> Batch &amp; timing recommendations</div>
              <div className="cf-item"><i className="fas fa-check-circle"></i> Fee structure information</div>
              <div className="cf-item"><i className="fas fa-check-circle"></i> Scholarship assessment</div>
            </div>
            <div className="counselling-contact">
              <a href="tel:+918149895185" className="cc-contact"><i className="fas fa-phone"></i> +91 81498 95185</a>
              <a href="https://wa.me/918149895185" className="cc-contact green"><i className="fab fa-whatsapp"></i> WhatsApp Us</a>
            </div>
          </div>

          <div className="counselling-form-wrap glass-card">
            <h3>Get Free Counselling</h3>
            {submitted ? (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <p>Thank you! Our team will call you shortly.</p>
              </div>
            ) : (
              <form className="counselling-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-name">Full Name *</label>
                    <input type="text" id="f-name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-phone">Phone Number *</label>
                    <input type="tel" id="f-phone" name="phone" placeholder="+91 XXXXXXXXXX" required pattern="[0-9]{10}" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-email">Email Address</label>
                    <input type="email" id="f-email" name="email" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-exam">Target Exam *</label>
                    <select id="f-exam" name="exam" required>
                      <option value="">Select Exam</option>
                      <option>IBPS PO</option><option>SBI PO</option><option>MBA CET</option>
                      <option>CAT</option><option>SSC CGL</option><option>NDA/CDS</option>
                      <option>CLAT</option><option>CUET</option><option>MCA CET</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="f-batch">Preferred Batch</label>
                  <select id="f-batch" name="batch">
                    <option value="">Select Batch Timing</option>
                    <option>8:00 AM – 10:30 AM</option><option>10:30 AM – 1:00 PM</option>
                    <option>1:00 PM – 3:30 PM</option><option>4:00 PM – 6:30 PM</option>
                    <option>6:30 PM – 9:00 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="f-msg">Message (Optional)</label>
                  <textarea id="f-msg" name="message" placeholder="Any specific queries..." rows={3}></textarea>
                </div>
                <button type="submit" className="btn-primary full-btn magnetic">
                  <i className="fas fa-calendar-check"></i> Book Free Counselling
                </button>
                <p className="form-disclaimer">By submitting, you agree to be contacted by ACS Academy.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
