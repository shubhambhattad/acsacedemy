const cards = [
  { icon:'fa-chess', title:'Preparation Strategy', desc:'Proven strategies: Fundamental → Top & Recent Level → Latest & Newest Pattern → Previous Year Papers', num:'01' },
  { icon:'fa-chalkboard-teacher', title:'Teaching Modules', desc:'Offline Classroom + Interactive Live Classes + Recorded Video Courses + Revision Sessions', num:'02' },
  { icon:'fa-award', title:'Expert Faculty', desc:'10-12 years experienced faculty, Officers in Government Sectors, MPSC & IBPS Panel Members', num:'03' },
  { icon:'fa-book-open', title:'Study Material', desc:'Adda247 Study Material, Quantitative Aptitude, Reasoning, English, GK, Current Affairs & more', num:'04' },
  { icon:'fa-laptop-code', title:'Online Test Series', desc:'Topic-wise tests, Mock Tests, Previous Year Paper Tests with detailed performance analysis', num:'05' },
  { icon:'fa-mobile-alt', title:'Premium Mobile App', desc:'AI-Based Digital Board Learning with Modern Technology – learn anytime, anywhere', num:'06' },
  { icon:'fa-building', title:'Library Facilities', desc:'Spacious reading room, vast collection of books, quiet study space at our Karve Road centre', num:'07' },
  { icon:'fa-handshake', title:'Interview Preparation', desc:'Complete personality development, group discussions, and mock interview sessions', num:'08' },
]

export default function WhyUs() {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Why ACS Academy</div>
          <h2 className="section-title split-text">Features That Make Us <span className="gradient-text">Unbeatable</span></h2>
          <p className="section-sub">A comprehensive ecosystem designed for your success</p>
        </div>
        <div className="why-grid">
          {cards.map(c => (
            <div key={c.num} className="why-card glass-card tilt-card" data-tilt data-tilt-max="10">
              <div className="why-icon"><i className={`fas ${c.icon}`}></i></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="why-num">{c.num}</div>
            </div>
          ))}
        </div>
        <div className="why-bottom">
          <div className="why-stat"><span className="ws-num">15+</span><span className="ws-label">Years of Excellence</span></div>
          <div className="why-stat"><span className="ws-num">1.8L+</span><span className="ws-label">Students Mentored</span></div>
          <div className="why-stat"><span className="ws-num">98%</span><span className="ws-label">Student Satisfaction</span></div>
          <div className="why-stat"><span className="ws-num">50+</span><span className="ws-label">Expert Faculty</span></div>
          <div className="why-stat"><span className="ws-num">7+</span><span className="ws-label">Exam Categories</span></div>
        </div>
      </div>
    </section>
  )
}
