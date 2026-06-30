export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title split-text">Visit <span className="gradient-text">Our Centre</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="branch-card glass-card single-branch">
              <div className="branch-icon green"><i className="fas fa-map-marker-alt"></i></div>
              <div className="branch-details">
                <h3>ACS Academy – Karve Road</h3>
                <p>Karve Road, Kothrud, Pune – 411038, Maharashtra</p>
                <a href="https://share.google/kiTOX9tBaic6de4KT" target="_blank" rel="noopener noreferrer" className="branch-map-link">
                  <i className="fas fa-directions"></i> Get Directions on Google Maps
                </a>
              </div>
            </div>
            <div className="branch-info-row glass-card">
              <div className="bi-item"><i className="fas fa-clock"></i><div><strong>Mon – Sat</strong><span>7:30 AM – 10:30 PM</span></div></div>
              <div className="bi-item"><i className="fas fa-calendar-alt"></i><div><strong>Sunday</strong><span>9:00 AM – 2:00 PM</span></div></div>
              <div className="bi-item"><i className="fas fa-bus"></i><div><strong>Nearest Landmark</strong><span>Karve Statue, Kothrud</span></div></div>
              <div className="bi-item"><i className="fas fa-parking"></i><div><strong>Parking</strong><span>Available on premises</span></div></div>
            </div>
            <div className="contact-details-card glass-card">
              <div className="cd-item"><i className="fas fa-phone"></i><div><strong>Call / WhatsApp</strong><a href="tel:+918149895185">+91 81498 95185</a></div></div>
              <div className="cd-item"><i className="fas fa-envelope"></i><div><strong>Email Us</strong><a href="mailto:info@acsacademy.co.in">info@acsacademy.co.in</a></div></div>
              <div className="cd-item"><i className="fas fa-map-marker-alt"></i><div><strong>Address</strong><span>Karve Road, Kothrud, Pune – 411038</span></div></div>
            </div>
            <div className="social-links-contact">
              <a href="#" className="social-btn yt" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-btn ig" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-btn fb" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-btn tw" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://wa.me/918149895185" className="social-btn wa" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="map-wrap glass-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.319850983944!2d73.82621507506404!3d18.50491928253955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf59ec60e2f1%3A0xabcdefabcdef1234!2sKarve%20Rd%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1719500000000"
              width="100%" height="100%" style={{border:'0'}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="ACS Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
