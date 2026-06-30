import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'
import ExitPopup from '@/components/ui/ExitPopup'
import AnimationProvider from '@/components/ui/AnimationProvider'
import Hero from '@/components/sections/Hero'
import MarqueeTicker from '@/components/sections/MarqueeTicker'
import Assessment from '@/components/sections/Assessment'
import About from '@/components/sections/About'
import Founders from '@/components/sections/Founders'
import Timeline from '@/components/sections/Timeline'
import WhyUs from '@/components/sections/WhyUs'
import Courses from '@/components/sections/Courses'
import BatchTimings from '@/components/sections/BatchTimings'
import TestSeries from '@/components/sections/TestSeries'
import Faculty from '@/components/sections/Faculty'
import SuccessStories from '@/components/sections/SuccessStories'
import GoogleReviews from '@/components/sections/GoogleReviews'
import YouTube from '@/components/sections/YouTube'
import Notifications from '@/components/sections/Notifications'
import Blog from '@/components/sections/Blog'
import MobileApp from '@/components/sections/MobileApp'
import FAQ from '@/components/sections/FAQ'
import Counselling from '@/components/sections/Counselling'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <AnimationProvider />
      <FloatingButtons />
      <ExitPopup />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <Assessment />
        <About />
        <Founders />
        <Timeline />
        <WhyUs />
        <Courses />
        <BatchTimings />
        <TestSeries />
        <Faculty />
        <SuccessStories />
        <GoogleReviews />
        <YouTube />
        <Notifications />
        <Blog />
        <MobileApp />
        <FAQ />
        <Counselling />
        <Contact />
      </main>

      {/* SEO keyword-rich internal links */}
      <section className="seo-pages section" aria-label="Coaching categories in Pune">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Find Us For</div>
            <h2 className="section-title">Pune&apos;s Best <span className="gradient-text">Competitive Exam Coaching</span> – All Streams</h2>
            <p className="section-sub">ACS Academy Karve Road Kothrud Pune – India&apos;s top-ranked coaching for government &amp; entrance exams</p>
          </div>
          <div className="seo-links-grid">
            <a href="#courses" className="seo-link-card glass-card" title="Best Banking Coaching in Pune"><i className="fas fa-university"></i> Best Banking Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best SSC Coaching in Pune"><i className="fas fa-shield-alt"></i> Best SSC Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best MBA CET Coaching in Pune"><i className="fas fa-briefcase"></i> Best MBA CET Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best CAT Coaching in Pune"><i className="fas fa-chart-bar"></i> Best CAT Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best CUET Coaching in Pune"><i className="fas fa-graduation-cap"></i> Best CUET Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best Law Entrance Coaching in Pune"><i className="fas fa-balance-scale"></i> Best CLAT &amp; Law CET Coaching Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best NDA Defence Coaching in Pune"><i className="fas fa-fighter-jet"></i> Best NDA &amp; Defence Coaching Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best Railway Coaching in Pune"><i className="fas fa-train"></i> Best Railway Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="MCA CET NIMCET Coaching Pune"><i className="fas fa-code"></i> Best MCA CET Coaching in Pune</a>
            <a href="#courses" className="seo-link-card glass-card" title="Best Government Job Coaching Pune"><i className="fas fa-building"></i> Govt Job Coaching in Pune</a>
            <a href="#contact" className="seo-link-card glass-card" title="Coaching Near Karve Road Kothrud Pune"><i className="fas fa-map-marker-alt"></i> Coaching Near Karve Road Pune</a>
            <a href="#counselling" className="seo-link-card glass-card" title="Free Counselling Kothrud Pune"><i className="fas fa-calendar-check"></i> Free Counselling – Kothrud Pune</a>
          </div>
        </div>
      </section>

      <Footer />

      <div className="toast" id="successToast">
        <i className="fas fa-check-circle"></i>
        <span>Thank you! Our team will call you shortly.</span>
      </div>
    </>
  )
}
