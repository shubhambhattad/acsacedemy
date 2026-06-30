export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Knowledge Hub</div>
          <h2 className="section-title split-text">Latest from Our <span className="gradient-text">Blog</span></h2>
          <p className="section-sub">Expert tips, exam strategy &amp; current affairs</p>
        </div>
        <div className="blog-categories">
          {['All','Banking','SSC','MBA','Defence','Current Affairs','Tips'].map(c => (
            <button key={c} className={`blog-cat${c==='All'?' active':''}`}>{c}</button>
          ))}
        </div>
        <div className="blog-grid">
          <article className="blog-card featured-blog glass-card" itemScope itemType="https://schema.org/BlogPosting">
            <div className="blog-img">
              <div className="blog-img-placeholder blue"><i className="fas fa-university"></i></div>
              <div className="blog-badge">Banking</div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-user"></i> ACS Faculty</span>
                <span><i className="fas fa-clock"></i> 8 min read</span>
                <span><i className="fas fa-calendar"></i> June 20, 2026</span>
              </div>
              <h2 className="blog-title" itemProp="headline"><a href="#blog">IBPS PO 2026 Complete Preparation Strategy – Month-Wise Study Plan</a></h2>
              <p itemProp="description">A comprehensive, exam-topper-approved strategy to crack IBPS PO 2026 in first attempt.</p>
              <div className="blog-tags"><span>#IBPSPO</span><span>#BankingExam</span><span>#Preparation</span></div>
              <a href="#blog" className="blog-read-more">Read Full Article <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="blog-card glass-card" itemScope itemType="https://schema.org/BlogPosting">
            <div className="blog-img small"><div className="blog-img-placeholder green"><i className="fas fa-briefcase"></i></div><div className="blog-badge">MBA</div></div>
            <div className="blog-content">
              <div className="blog-meta"><span><i className="fas fa-clock"></i> 5 min read</span><span><i className="fas fa-calendar"></i> June 15, 2026</span></div>
              <h3 className="blog-title" itemProp="headline"><a href="#blog">MBA CET vs CAT 2026 – Which is Better for Pune Students?</a></h3>
              <p>Complete comparison of exam pattern, difficulty, college options &amp; ROI for Maharashtra students.</p>
              <a href="#blog" className="blog-read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
          <article className="blog-card glass-card" itemScope itemType="https://schema.org/BlogPosting">
            <div className="blog-img small"><div className="blog-img-placeholder blue"><i className="fas fa-shield-alt"></i></div><div className="blog-badge">SSC</div></div>
            <div className="blog-content">
              <div className="blog-meta"><span><i className="fas fa-clock"></i> 6 min read</span><span><i className="fas fa-calendar"></i> June 10, 2026</span></div>
              <h3 className="blog-title" itemProp="headline"><a href="#blog">SSC CGL 2026 Syllabus & Pattern – Complete Guide for Beginners</a></h3>
              <p>Everything you need to know about SSC CGL 2026 – tier-wise syllabus, strategy and cut-offs.</p>
              <a href="#blog" className="blog-read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
        </div>
        <div style={{textAlign:'center', marginTop:'2rem'}}>
          <a href="#blog" className="btn-outline magnetic">View All Articles <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  )
}
