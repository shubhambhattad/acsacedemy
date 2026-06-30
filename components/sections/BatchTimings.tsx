export default function BatchTimings() {
  return (
    <section className="batches section" id="batches">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Schedule</div>
          <h2 className="section-title split-text">Flexible <span className="gradient-text">Batch Timings</span></h2>
          <p className="section-sub">Choose a slot that fits your schedule</p>
        </div>
        <div className="batch-grid">
          <div className="batch-card glass-card">
            <div className="batch-time-icon"><i className="fas fa-sun"></i></div>
            <div className="batch-time">8:00 AM – 9:30 AM</div>
            <div className="batch-label">Early Morning Batch</div>
            <div className="batch-seats"><span className="seats-dot green"></span> 12 seats left</div>
          </div>
          <div className="batch-card glass-card">
            <div className="batch-time-icon"><i className="fas fa-sun"></i></div>
            <div className="batch-time">10:00 AM – 11:30 AM</div>
            <div className="batch-label">Morning Batch</div>
            <div className="batch-seats"><span className="seats-dot yellow"></span> 5 seats left</div>
          </div>
          <div className="batch-card glass-card">
            <div className="batch-time-icon"><i className="fas fa-cloud-sun"></i></div>
            <div className="batch-time">12:00 PM – 1:30 PM</div>
            <div className="batch-label">Afternoon Batch</div>
            <div className="batch-seats"><span className="seats-dot green"></span> 8 seats left</div>
          </div>
          <div className="batch-card glass-card popular-batch">
            <div className="batch-popular-tag">Most Popular</div>
            <div className="batch-time-icon"><i className="fas fa-cloud"></i></div>
            <div className="batch-time">3:30 PM – 5:00 PM</div>
            <div className="batch-label">Evening Batch</div>
            <div className="batch-seats"><span className="seats-dot red"></span> Almost Full</div>
          </div>
          <div className="batch-card glass-card">
            <div className="batch-time-icon"><i className="fas fa-cloud-moon"></i></div>
            <div className="batch-time">5:00 PM – 6:30 PM</div>
            <div className="batch-label">Late Evening Batch</div>
            <div className="batch-seats"><span className="seats-dot green"></span> 10 seats left</div>
          </div>
          <div className="batch-card glass-card">
            <div className="batch-time-icon"><i className="fas fa-moon"></i></div>
            <div className="batch-time">9:00 PM – 10:00 PM</div>
            <div className="batch-label">Night Batch (Online)</div>
            <div className="batch-seats"><span className="seats-dot green"></span> Open</div>
          </div>
        </div>
        <div className="batch-cta">
          <p>Not sure which batch to pick?</p>
          <a href="#counselling" className="btn-primary magnetic">Talk to Counsellor <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  )
}
