export default function YouTube() {
  return (
    <section className="youtube-sec section" id="youtube">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Free Learning</div>
          <h2 className="section-title split-text">Learn for <span className="gradient-text">Free on YouTube</span></h2>
          <p className="section-sub">1000+ free videos to kickstart your preparation</p>
        </div>
        <div className="yt-featured">
          <div className="yt-main glass-card">
            <div className="yt-embed-wrap">
              <iframe src="https://www.youtube.com/embed/videoseries?list=PLrAXtmErZgOeY0lkVCIVafdGFOTi45amq" title="ACS Academy YouTube Channel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="yt-main-info">
              <span className="yt-badge"><i className="fab fa-youtube"></i> ACS Academy Channel</span>
              <h3>Free Classes – Banking, SSC, MBA &amp; More</h3>
              <p>1000+ free videos covering complete syllabus, daily current affairs, previous year papers &amp; tips.</p>
              <a href="https://www.youtube.com/@acsacademy" target="_blank" rel="noopener noreferrer" className="btn-yt magnetic"><i className="fab fa-youtube"></i> Subscribe Now</a>
            </div>
          </div>
          <div className="yt-videos">
            {[
              { tag:'Banking', title:'IBPS PO 2024 Complete Strategy', views:'45K', color:'' },
              { tag:'MBA', title:'MBA CET 2024 Last 30 Days Plan', views:'38K', color:'green' },
              { tag:'SSC', title:'SSC CGL Reasoning Top 50 Questions', views:'62K', color:'' },
            ].map(v => (
              <div key={v.title} className="yt-vid-card glass-card">
                <div className="yt-thumb">
                  <div className={`yt-thumb-placeholder${v.color ? ' '+v.color : ''}`}><i className="fab fa-youtube"></i></div>
                  <div className="yt-play-btn"><i className="fas fa-play"></i></div>
                </div>
                <div className="yt-vid-info">
                  <span className="yt-vid-tag">{v.tag}</span>
                  <h4>{v.title}</h4>
                  <p><i className="fas fa-eye"></i> {v.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
