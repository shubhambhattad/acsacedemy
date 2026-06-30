import Image from 'next/image'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images parallax-section">
            <div className="about-img-main">
              <Image src="/images/acs-team-banner.jpeg" alt="ACS Academy Faculty Team" loading="lazy" width={600} height={400} />
            </div>
            <div className="about-img-side">
              <Image src="/images/why-choose-acs-infographic.jpeg" alt="Why Choose ACS Academy" loading="lazy" width={300} height={300} />
            </div>
            <div className="about-exp-badge glass-card">
              <span className="exp-num">15+</span>
              <span className="exp-label">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about-content">
            <div className="section-tag">About ACS Academy</div>
            <h2 className="section-title split-text">Why Thousands of Aspirants Trust <span className="gradient-text">ACS Academy</span></h2>
            <p className="about-para">Founded in 2010 with a singular vision — to make world-class competitive exam coaching accessible to every aspirant in Pune — ACS Academy has grown into one of Maharashtra&apos;s most trusted educational institutions. Located at Karve Road, Pune, we have been shaping futures for over 15 years.</p>
            <div className="about-features">
              <div className="about-feat"><div className="af-icon"><i className="fas fa-user-graduate"></i></div><div><h4>Personalized Mentoring</h4><p>1-on-1 doubt sessions with expert faculty</p></div></div>
              <div className="about-feat"><div className="af-icon"><i className="fas fa-laptop"></i></div><div><h4>Hybrid Learning</h4><p>Attend class offline or online – your choice</p></div></div>
              <div className="about-feat"><div className="af-icon"><i className="fas fa-video"></i></div><div><h4>Recorded Lectures</h4><p>Revisit every class anytime, anywhere</p></div></div>
              <div className="about-feat"><div className="af-icon"><i className="fas fa-chart-line"></i></div><div><h4>AI-Powered Learning</h4><p>Smart analytics to track your progress</p></div></div>
              <div className="about-feat"><div className="af-icon"><i className="fas fa-book"></i></div><div><h4>Premium Study Material</h4><p>Comprehensive books, PDFs &amp; practice sets</p></div></div>
              <div className="about-feat"><div className="af-icon"><i className="fas fa-users"></i></div><div><h4>Small Batch Sizes</h4><p>More attention, better results</p></div></div>
            </div>
            <div className="about-btns">
              <a href="#counselling" className="btn-primary magnetic">Book Free Counselling</a>
              <a href="#" className="btn-outline magnetic"><i className="fas fa-download"></i> Download Brochure</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
