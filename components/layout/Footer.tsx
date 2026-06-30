'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="nav-logo footer-logo">
                <Image src="/images/logo.jpeg" alt="ACS Academy" className="footer-logo-img" width={160} height={50} />
              </a>
              <p className="footer-tagline">Your Complete Preparation Partner for Competitive Exams</p>
              <div className="footer-socials">
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="https://wa.me/918149895185" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                <a href="#" aria-label="Telegram"><i className="fab fa-telegram"></i></a>
              </div>
              <div className="footer-rating">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.gstatic.com/images/branding/product/2x/google_g_48dp.png" alt="Google" width="24" loading="lazy" />
                <span>★★★★★ 4.9 / 5 (500+ Reviews)</span>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About ACS Academy</a></li>
                <li><a href="#courses">Our Courses</a></li>
                <li><a href="#test-series">Test Series</a></li>
                <li><a href="#faculty">Faculty</a></li>
                <li><a href="#success">Success Stories</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Courses</h4>
              <ul>
                <li><a href="#courses">Banking Exams (IBPS/SBI)</a></li>
                <li><a href="#courses">SSC &amp; Govt. Exams</a></li>
                <li><a href="#courses">MBA CET / CAT / CMAT</a></li>
                <li><a href="#courses">Defence (NDA/CDS/AFCAT)</a></li>
                <li><a href="#courses">Law (CLAT / LAW CET)</a></li>
                <li><a href="#courses">CUET / BBA / IPMAT</a></li>
                <li><a href="#courses">MCA CET / NIMCET</a></li>
                <li><a href="#courses">Railway / LIC / IB</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <div className="fc-item"><i className="fas fa-map-marker-alt"></i><span>Karve Road, Kothrud, Pune – 411038</span></div>
                <div className="fc-item"><i className="fas fa-phone"></i><a href="tel:+918149895185">+91 81498 95185</a></div>
                <div className="fc-item"><i className="fab fa-whatsapp"></i><a href="https://wa.me/918149895185">WhatsApp Us</a></div>
                <div className="fc-item"><i className="fas fa-envelope"></i><a href="mailto:info@acsacademy.co.in">info@acsacademy.co.in</a></div>
              </div>
              <div className="newsletter">
                <h5>Newsletter</h5>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 ACS Academy. All Rights Reserved. | Designed &amp; Developed by <strong>Priyam IT Services Pvt Ltd</strong></p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Refund Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
