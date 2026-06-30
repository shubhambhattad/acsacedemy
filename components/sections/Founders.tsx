import Image from 'next/image'

export default function Founders() {
  return (
    <section className="founders section" id="founders">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Leadership</div>
          <h2 className="section-title split-text">The Visionaries Behind <span className="gradient-text">ACS Academy</span></h2>
          <p className="section-sub">Guided by educators who have dedicated their lives to student success</p>
        </div>
        <div className="founders-grid">
          <div className="founder-card glass-card">
            <div className="founder-img-wrap">
              <Image src="/images/tanmay-shah.jpg" alt="Mr. Tanmay Shah – Chairman & Managing Director, ACS Academy" loading="lazy" width={400} height={500} style={{objectPosition:'top center'}} />
              <div className="founder-img-overlay">
                <div className="founder-quote"><i className="fas fa-quote-left"></i></div>
                <p>&ldquo;Success is not merely about clearing an examination; it is about developing the right mindset, discipline, and determination to achieve excellence in every sphere of life.&rdquo;</p>
              </div>
            </div>
            <div className="founder-info">
              <div className="founder-badge">Founder &amp; CMD</div>
              <h3>Mr. Tanmay Shah</h3>
              <p className="founder-qual">MBA (Sales &amp; Marketing) | Ex-Standard Chartered Bank | 25+ Years Experience</p>
              <p className="founder-desc">The visionary founder of ACS Academy, Mr. Tanmay Shah has dedicated over 25 years to mentoring aspirants across competitive and entrance examinations. Under his guidance, ACS Academy has mentored over 1,80,000+ students and earned the prestigious India Education Award.</p>
              <div className="founder-stats">
                <div className="fs-item"><span>25+</span><p>Years Experience</p></div>
                <div className="fs-item"><span>1.8L+</span><p>Students Mentored</p></div>
                <div className="fs-item"><span>15+</span><p>Awards Won</p></div>
              </div>
              <div className="founder-social">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <div className="founder-card glass-card reverse">
            <div className="founder-img-wrap">
              <Image src="/images/sushmita-shah.jpg" alt="Mrs. Sushmita Shah – Managing Director, ACS Academy" loading="lazy" width={400} height={500} style={{objectFit:'cover', objectPosition:'top center'}} />
              <div className="founder-img-overlay green-ov">
                <div className="founder-quote"><i className="fas fa-quote-left"></i></div>
                <p>&ldquo;Leadership is not about managing people; it is about inspiring them to believe in their potential and empowering them to achieve excellence.&rdquo;</p>
              </div>
            </div>
            <div className="founder-info">
              <div className="founder-badge green-badge">Managing Director</div>
              <h3>Mrs. Sushmita Shah</h3>
              <p className="founder-qual">Commerce Graduate | Ex-Bharti Educational Institute Branch Head | 20+ Years Leadership</p>
              <p className="founder-desc">The dynamic force behind ACS Academy&apos;s brand, marketing and operations, Mrs. Sushmita Shah brings 20+ years of leadership across education, banking and insurance. Earlier honoured as Best Branch Head at Bharti Educational Institute and Best Team Leader – PAN India.</p>
              <div className="founder-stats">
                <div className="fs-item"><span>20+</span><p>Years Experience</p></div>
                <div className="fs-item"><span>3</span><p>Sectors Mastered</p></div>
                <div className="fs-item"><span>PAN India</span><p>Award Winner</p></div>
              </div>
              <div className="founder-social">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
