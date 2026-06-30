import notifications from '@/data/notifications'

export default function Notifications() {
  return (
    <section className="notifications section" id="notifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Latest Updates</div>
          <h2 className="section-title split-text">Exam <span className="gradient-text">Notifications</span></h2>
        </div>
        <div className="notif-grid">
          {notifications.map(n => (
            <div key={n.id} className={`notif-card glass-card${n.badgeColor === 'green' ? ' new-notif' : ''}`}>
              {n.badgeColor === 'green' && <div className="notif-new-tag">NEW</div>}
              <div className="notif-date">{new Date(n.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</div>
              <div className={`notif-badge ${n.category.toLowerCase()}`}>{n.category}</div>
              <h4>{n.title}</h4>
              <a href={n.link} className="notif-link">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
