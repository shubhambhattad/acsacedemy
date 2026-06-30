import batchTimings from '@/data/batchTimings'

export default function BatchTimings() {
  return (
    <section className="batches section" id="batches">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Flexible Timings</div>
          <h2 className="section-title split-text">Choose Your <span className="gradient-text">Batch Timing</span></h2>
          <p className="section-sub">Multiple batch slots to suit your schedule</p>
        </div>
        <div className="batch-grid">
          {batchTimings.map(b => (
            <div key={b.id} className={`batch-card glass-card ${b.color}`}>
              <div className="batch-icon"><i className={`fas ${b.icon}`}></i></div>
              <h3>{b.name}</h3>
              <p className="batch-time">{b.time}</p>
              <span className={`batch-seats${b.seats==='Most Popular'?' popular':''}`}>{b.seats}</span>
              <a href="#counselling" className="btn-outline" style={{marginTop:'auto'}}>Book Seat</a>
            </div>
          ))}
        </div>
        <div className="batch-note glass-card">
          <i className="fas fa-info-circle"></i>
          <p>Batch timings may vary. Contact us at <a href="tel:+918149895185">+91 81498 95185</a> for the latest schedule and seat availability.</p>
        </div>
      </div>
    </section>
  )
}
