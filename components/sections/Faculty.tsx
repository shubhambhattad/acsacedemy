import Image from 'next/image'
import faculty from '@/data/faculty'

export default function Faculty() {
  return (
    <section className="faculty section" id="faculty">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Mentors</div>
          <h2 className="section-title split-text">Learn from <span className="gradient-text">Expert Faculty</span></h2>
          <p className="section-sub">Industry veterans with proven track records</p>
        </div>
        <div className="faculty-grid">
          {faculty.map(f => (
            <div key={f.id} className="faculty-card glass-card" data-tilt data-tilt-max="8">
              <div className="faculty-img">
                <Image src={f.image} alt={`${f.name} – ${f.role}`} loading="lazy" width={300} height={350} style={{objectPosition:'top center'}} />
                <div className="faculty-overlay">
                  <div className="faculty-quote-card">&ldquo;{f.quote}&rdquo;</div>
                  <div className="faculty-social">
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="faculty-info">
                <h3>{f.name}</h3>
                <span className="faculty-role">{f.role}</span>
                <p className="faculty-qual">{f.qualification}</p>
                <div className="faculty-stats">
                  <div><strong>{f.experience}</strong><span>Yrs Exp</span></div>
                  <div><strong>{f.selections}</strong><span>Selections</span></div>
                  <div><strong>{f.rating}</strong><span>Rating</span></div>
                </div>
                <div className="faculty-subjects">
                  {f.subjects.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
