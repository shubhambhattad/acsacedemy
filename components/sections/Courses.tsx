'use client'

import { useState } from 'react'
import gsap from 'gsap'

const tabs = [
  { key: 'banking', label: 'Banking' },
  { key: 'govt', label: 'Govt. Exams' },
  { key: 'mba', label: 'MBA' },
  { key: 'defence', label: 'Defence' },
  { key: 'law', label: 'Law' },
  { key: 'ug', label: 'Undergraduate' },
  { key: 'tech', label: 'Technical' },
]

type CourseCard = { badge: string; badgeClass?: string; icon: string; iconClass?: string; name: string; desc: string; duration: string; eligibility: string; batch: string }

const panels: Record<string, CourseCard[]> = {
  banking: [
    { badge:'Banking', icon:'fa-university', name:'IBPS PO', desc:'Complete preparation for Probationary Officer – prelims to interview', duration:'6 Months', eligibility:'Graduates', batch:'July 2026' },
    { badge:'Banking', icon:'fa-university', name:'IBPS Clerk', desc:'In-depth coaching for Clerical Cadre examination with complete syllabus coverage', duration:'4 Months', eligibility:'10+2 / Graduate', batch:'July 2026' },
    { badge:'Banking', badgeClass:'popular', icon:'fa-coins', name:'SBI PO', desc:'State Bank of India PO examination – from prelims to final interview', duration:'6 Months', eligibility:'Graduates', batch:'July 2026' },
    { badge:'Banking', icon:'fa-coins', name:'SBI Clerk', desc:'Complete SBI Junior Associate preparation with shortcut techniques', duration:'4 Months', eligibility:'10+2 / Graduate', batch:'July 2026' },
    { badge:'Banking', icon:'fa-landmark', name:'RBI Grade B', desc:'Reserve Bank of India Grade B Officer – premium batch with expert mentoring', duration:'8 Months', eligibility:'Graduates 21-30 yrs', batch:'Aug 2026' },
    { badge:'Banking', badgeClass:'popular', icon:'fa-chart-line', name:'NABARD / SEBI', desc:'Specialized coaching for NABARD Grade A/B and SEBI Officer Grade A', duration:'6 Months', eligibility:'Graduates', batch:'Aug 2026' },
  ],
  govt: [
    { badge:'SSC', badgeClass:'popular', icon:'fa-shield-alt', name:'SSC CGL / CHSL', desc:'Staff Selection Commission exam coaching for Tier 1, 2 & 3 stages', duration:'8 Months', eligibility:'Graduates', batch:'July 2026' },
    { badge:'SSC', icon:'fa-id-card', name:'SSC MTS & GD', desc:'Multi-Tasking Staff and General Duty Constable complete preparation', duration:'4 Months', eligibility:'10th / 10+2', batch:'July 2026' },
    { badge:'State', icon:'fa-building', name:'MPSC State Services', desc:'Maharashtra Public Service Commission – complete coaching from Prelims to Interview', duration:'12 Months', eligibility:'Graduates', batch:'Aug 2026' },
    { badge:'Central', icon:'fa-user-secret', name:'IB ACIO / IPS', desc:'Intelligence Bureau Assistant Central Intelligence Officer preparation', duration:'5 Months', eligibility:'Graduates', batch:'Aug 2026' },
    { badge:'Railways', icon:'fa-train', name:'RRB NTPC / Group D', desc:'Railway Recruitment Board – complete preparation for all posts', duration:'5 Months', eligibility:'10th / 10+2 / Graduate', batch:'July 2026' },
    { badge:'Insurance', icon:'fa-file-contract', name:'LIC / NIACL / GIC', desc:'Life Insurance Corporation AAO/ADO and National Insurance preparation', duration:'4 Months', eligibility:'Graduates', batch:'Aug 2026' },
  ],
  mba: [
    { badge:'MBA', badgeClass:'popular', icon:'fa-briefcase', iconClass:'green', name:'MBA CET', desc:'Maharashtra MBA CET – most popular course with 120+ selections annually', duration:'6 Months', eligibility:'Graduates', batch:'July 2026' },
    { badge:'MBA', icon:'fa-chart-bar', name:'CAT', desc:'Common Admission Test for IIMs – focused preparation with sectional strategy', duration:'10 Months', eligibility:'Graduates', batch:'July 2026' },
    { badge:'MBA', icon:'fa-tasks', name:'CMAT / MAT / ATMA', desc:'Multiple MBA entrance exams covered in one comprehensive course', duration:'5 Months', eligibility:'Graduates', batch:'Aug 2026' },
    { badge:'MBA', icon:'fa-university', name:'SNAP (Symbiosis)', desc:'Symbiosis National Aptitude Test – targeted preparation for SIU programs', duration:'5 Months', eligibility:'Graduates', batch:'Aug 2026' },
    { badge:'MBA', icon:'fa-graduation-cap', name:'NMAT (NMIMS)', desc:'NMIMS Management Aptitude Test with personalized strategy', duration:'5 Months', eligibility:'Graduates', batch:'Aug 2026' },
    { badge:'MBA', badgeClass:'popular', icon:'fa-star', name:'IPMAT (IIM Indore)', desc:'Integrated Program in Management Aptitude Test – for Class 12 students', duration:'8 Months', eligibility:'Class 12 / 10+2', batch:'July 2026' },
  ],
  defence: [
    { badge:'Defence', badgeClass:'popular', icon:'fa-shield-alt', name:'NDA', desc:'National Defence Academy – complete preparation for Army, Navy and Air Force', duration:'12 Months', eligibility:'Class 12 / 10+2', batch:'July 2026' },
    { badge:'Defence', icon:'fa-medal', name:'CDS', desc:'Combined Defence Services examination for all three defence services', duration:'8 Months', eligibility:'Graduates', batch:'July 2026' },
    { badge:'Defence', icon:'fa-plane', name:'AFCAT', desc:'Air Force Common Admission Test – technical and non-technical posts', duration:'6 Months', eligibility:'Graduates', batch:'Aug 2026' },
    { badge:'Defence', icon:'fa-comments', name:'SSB Interview Prep', desc:'Services Selection Board interview preparation with mock SSB sessions', duration:'3 Months', eligibility:'NDA/CDS Cleared', batch:'Rolling Batches' },
  ],
  law: [
    { badge:'Law', badgeClass:'popular', icon:'fa-gavel', name:'CLAT', desc:'Common Law Admission Test for National Law Universities – intensive preparation', duration:'12 Months', eligibility:'Class 12 / 10+2', batch:'July 2026' },
    { badge:'Law', icon:'fa-balance-scale', name:'AILET (NLU Delhi)', desc:'All India Law Entrance Test for NLU Delhi', duration:'10 Months', eligibility:'Class 12 / 10+2', batch:'July 2026' },
    { badge:'Law', icon:'fa-scroll', name:'MH CET Law', desc:'Maharashtra Law CET for 3-year and 5-year programs', duration:'8 Months', eligibility:'Class 12 / Graduate', batch:'July 2026' },
    { badge:'Law', icon:'fa-university', name:'SET (Symbiosis Law)', desc:'Symbiosis Entrance Test for Symbiosis Law School programs', duration:'6 Months', eligibility:'Class 12 / 10+2', batch:'Aug 2026' },
  ],
  ug: [
    { badge:'CUET', badgeClass:'popular', icon:'fa-graduation-cap', iconClass:'green', name:'CUET UG', desc:'Common University Entrance Test for top central universities across India', duration:'8 Months', eligibility:'Class 12', batch:'July 2026' },
    { badge:'BBA', icon:'fa-briefcase', name:'BBA / BMS Entrance', desc:'BBA and BMS entrance exam preparation for top business schools', duration:'5 Months', eligibility:'Class 12', batch:'July 2026' },
    { badge:'Hotel', icon:'fa-concierge-bell', name:'Hotel Management (NCHM)', desc:'NCHMCT JEE preparation for top hotel management institutes', duration:'6 Months', eligibility:'Class 12', batch:'Aug 2026' },
    { badge:'CUET', icon:'fa-university', name:'CUET PG', desc:'Common University Entrance Test for postgraduate programs', duration:'6 Months', eligibility:'Graduates', batch:'Aug 2026' },
  ],
  tech: [
    { badge:'MCA', badgeClass:'popular', icon:'fa-laptop-code', name:'MCA CET (Maharashtra)', desc:'MCA Common Entrance Test – complete preparation for top MCA colleges', duration:'6 Months', eligibility:'BCA / B.Sc. IT / CS', batch:'July 2026' },
    { badge:'MCA', icon:'fa-code', name:'NIMCET (NIT MCA)', desc:'NIT MCA Common Entrance Test – national level preparation', duration:'8 Months', eligibility:'BCA / B.Sc. CS', batch:'July 2026' },
    { badge:'BCA', icon:'fa-desktop', name:'BCA Entrance', desc:'BCA entrance exam preparation for top IT institutes', duration:'4 Months', eligibility:'Class 12', batch:'Aug 2026' },
    { badge:'Tech', icon:'fa-handshake', name:'Campus Placement Prep', desc:'Complete campus placement preparation – Aptitude, Coding, GD & Interview', duration:'3 Months', eligibility:'Final Year Students', batch:'Rolling Batches' },
  ],
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState('banking')

  const switchTab = (key: string) => {
    setActiveTab(key)
    requestAnimationFrame(() => {
      const panel = document.getElementById(`panel-${key}`)
      if (!panel) return
      gsap.fromTo(panel.querySelectorAll('.course-card'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
      )
      const VT = (window as Window & { VanillaTilt?: { init: (els: NodeListOf<Element>, opts: object) => void } }).VanillaTilt
      if (VT) VT.init(panel.querySelectorAll('[data-tilt]'), { max: 8, speed: 400, glare: true, 'max-glare': 0.08 })
    })
  }

  return (
    <section className="courses section" id="courses">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Programs</div>
          <h2 className="section-title split-text">Courses For Every <span className="gradient-text">Aspirant</span></h2>
          <p className="section-sub">Comprehensive coaching for all major competitive exams</p>
        </div>

        <div className="course-tabs">
          {tabs.map(t => (
            <button key={t.key} className={`course-tab${activeTab === t.key ? ' active' : ''}`} onClick={() => switchTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {Object.entries(panels).map(([key, cards]) => (
          <div key={key} className={`course-panel${activeTab === key ? ' active' : ''}`} id={`panel-${key}`}>
            <div className="course-grid">
              {cards.map(c => (
                <div key={c.name} className="course-card glass-card" data-tilt data-tilt-max="8">
                  <div className={`cc-badge${c.badgeClass ? ' ' + c.badgeClass : ''}`}>{c.badge}</div>
                  <div className={`cc-icon${c.iconClass ? ' ' + c.iconClass : ''}`}><i className={`fas ${c.icon}`}></i></div>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <ul className="cc-details">
                    <li><i className="fas fa-clock"></i> {c.duration}</li>
                    <li><i className="fas fa-graduation-cap"></i> {c.eligibility}</li>
                    <li><i className="fas fa-users"></i> Limited Seats</li>
                  </ul>
                  <div className="cc-batch"><i className="fas fa-calendar"></i> New Batch: {c.batch}</div>
                  <a href="#counselling" className="cc-btn">Enroll Now <i className="fas fa-arrow-right"></i></a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="courses-cta glass-card">
          <h3>Not sure which course to pick?</h3>
          <p>Our counsellors will help you choose the right course based on your background, target exam and goals.</p>
          <a href="#counselling" className="btn-primary magnetic"><i className="fas fa-calendar-check"></i> Book Free Counselling</a>
        </div>
      </div>
    </section>
  )
}
