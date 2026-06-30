export default function MobileApp() {
  return (
    <section className="app-section section">
      <div className="container">
        <div className="app-grid">
          <div className="app-content">
            <div className="section-tag">Mobile App</div>
            <h2 className="section-title split-text">Learn Anytime with the <span className="gradient-text">ACS Academy App</span></h2>
            <p>Your complete exam preparation toolkit in your pocket. Available for iOS &amp; Android.</p>
            <ul className="app-features">
              <li><i className="fas fa-check-circle"></i> Recorded Classes – Watch anytime, anywhere</li>
              <li><i className="fas fa-check-circle"></i> Mock Tests – Real exam interface</li>
              <li><i className="fas fa-check-circle"></i> Study Material – PDFs &amp; Notes</li>
              <li><i className="fas fa-check-circle"></i> Performance Analytics – AI-powered insights</li>
              <li><i className="fas fa-check-circle"></i> Daily Current Affairs – Never miss an update</li>
              <li><i className="fas fa-check-circle"></i> Live Notifications – Batch alerts &amp; results</li>
            </ul>
            <div className="app-btns">
              <a href="#" className="app-store-btn magnetic"><i className="fab fa-google-play"></i><div><span>Get it on</span><strong>Google Play</strong></div></a>
              <a href="#" className="app-store-btn magnetic"><i className="fab fa-apple"></i><div><span>Download on</span><strong>App Store</strong></div></a>
            </div>
          </div>
          <div className="app-mockup">
            <div className="app-phone glass-card">
              <div className="app-screen">
                <div className="app-screen-header"><div className="app-screen-logo">ACS</div><span>Dashboard</span></div>
                <div className="app-screen-stats">
                  <div className="app-stat"><strong>85%</strong><span>Accuracy</span></div>
                  <div className="app-stat"><strong>127</strong><span>Tests Done</span></div>
                  <div className="app-stat"><strong>4.5h</strong><span>Today</span></div>
                </div>
                <div className="app-screen-courses">
                  <div className="app-course-item blue"><i className="fas fa-university"></i> Banking – Chapter 12</div>
                  <div className="app-course-item green"><i className="fas fa-chart-bar"></i> MBA CET – Mock 45</div>
                  <div className="app-course-item blue"><i className="fas fa-shield-alt"></i> SSC CGL – Reasoning</div>
                </div>
              </div>
            </div>
            <div className="app-blob"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
