export default function TestSeries() {
  return (
    <section className="test-series section" id="test-series">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Practice</div>
          <h2 className="section-title split-text">Ace Your Exam with Our <span className="gradient-text">Test Series</span></h2>
          <p className="section-sub">10,000+ questions, real exam interface, detailed analytics</p>
        </div>
        <div className="test-grid">
          <div className="test-card glass-card"><div className="test-icon"><i className="fas fa-layer-group"></i></div><h3>Topic-Wise Tests</h3><p>Master individual topics before moving to full tests</p><div className="test-count">500+ Tests</div></div>
          <div className="test-card glass-card"><div className="test-icon"><i className="fas fa-tasks"></i></div><h3>Subject-Wise Tests</h3><p>Full subject mock tests with sectional time limits</p><div className="test-count">200+ Tests</div></div>
          <div className="test-card glass-card featured-test"><div className="test-icon"><i className="fas fa-clipboard-list"></i></div><h3>Full Mock Tests</h3><p>Exact exam pattern, real-time environment, detailed report</p><div className="test-count">100+ Mocks</div></div>
          <div className="test-card glass-card"><div className="test-icon"><i className="fas fa-history"></i></div><h3>Previous Year Papers</h3><p>Solved &amp; explained PYQs from last 10 years</p><div className="test-count">50+ Sets</div></div>
        </div>
        <div style={{textAlign:'center', marginTop:'3rem'}}>
          <a href="#counselling" className="btn-primary magnetic">Start Free Test <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  )
}
