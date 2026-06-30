export default function Timeline() {
  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Story</div>
          <h2 className="section-title split-text">16 Years of <span className="gradient-text">Transforming Lives</span></h2>
          <p className="section-sub">From a humble beginning to Pune&apos;s most trusted coaching institute</p>
        </div>
        <div className="timeline">
          {[
            { year:'2010', side:'left', icon:'fa-flag', color:'blue', milestone:'Humble Beginnings', title:'ACS Academy Opens at Paud Road, Pune', desc:"Mr. Tanmay Shah and Mrs. Sushmita Shah founded ACS Academy at Paud Road, Pune with a clear vision — to create a results-driven, student-focused coaching ecosystem. With small, concept-oriented batches, ACS immediately focused on Banking, SSC, Railway, CET and MPSC preparation.", tags:['Paud Road','Banking','SSC','MPSC'] },
            { year:'2012', side:'right', icon:'fa-building', color:'green', milestone:'Expansion Phase', title:'Head Office Established at Deccan Gymkhana', desc:"The success of the Paud Road centre led to the establishment of ACS Academy's Head Office at Deccan Gymkhana, Pune — strategically located and accessible to aspirants across the city.", tags:['Deccan Gymkhana','Head Office','City-wide Reach'] },
            { year:'2014', side:'left', icon:'fa-network-wired', color:'blue', milestone:'Franchise Model Launch', title:'4 New Centres Across Pune', desc:'ACS Academy launched its franchise model, rolling out four new centres across Pune — Karve Road, Swargate, Vishrantwadi, and PCMC. Each centre upheld ACS\'s core philosophy of personalised coaching and expert faculty mentorship.', tags:['Karve Road','Vishrantwadi','PCMC','Franchise'] },
            { year:'2015', side:'right', icon:'fa-layer-group', color:'green', milestone:'Academic Diversification', title:'Expansion into MBA, Law, MCA, CUET & Defence', desc:'ACS Academy expanded coaching modules to cover the full spectrum of competitive and entrance examinations — MBA CET, MCA CET, CLAT, NDA, CDS, AFCAT, CUET, IPMAT, BBA and BCA.', tags:['MBA CET','CLAT','NDA/CDS','CUET','MPSC'] },
            { year:'2021', side:'left', icon:'fa-wifi', color:'blue', milestone:'Digital Evolution', title:'Online & Hybrid Learning + "Lakshya" Initiative', desc:'ACS Academy integrated online and hybrid learning models. Specialised crash courses and strategy-based workshops were launched under the "Lakshya" initiative for Govt. Job preparation.', tags:['Hybrid Learning','Lakshya','Live Classes','Crash Courses'] },
            { year:'2023', side:'right', icon:'fa-users', color:'green', milestone:'Trusted Brand', title:'1,00,000+ Students Milestone', desc:"ACS Academy reached the landmark of over one lakh students mentored — cementing its reputation as one of Pune's most trusted coaching institutes for competitive examinations.", tags:['1 Lakh+ Students','Trusted Brand','Maharashtra'], teamImage:'/images/team-acs.jpg' },
            { year:'2026', side:'left', icon:'fa-rocket', color:'blue', milestone:'Present Day', title:'Pune\'s #1 Choice – 1,80,000+ Students Mentored', desc:'ACS Academy stands as Pune\'s most trusted coaching institute, having mentored over 1,80,000 aspirants across Banking, SSC, MBA, Defence, Law, MCA, CUET and Railway examinations.', tags:['1.8L+ Students','AI Learning','Pan-Maharashtra','PAN India'] },
          ].map((item, i) => (
            <div key={i} className={`tl-item tl-${item.side}${item.year==='2026'?' tl-present':''}`}>
              <div className={`tl-year-badge${item.year==='2026'?' tl-year-present':''}`}>{item.year}</div>
              <div className="tl-content glass-card">
                <div className="tl-img">
                  <div className={`tl-img-placeholder ${item.color}`}><i className={`fas ${item.icon}`}></i></div>
                </div>
                <div className="tl-body">
                  <div className="tl-milestone">{item.milestone}</div>
                  {item.teamImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.teamImage} alt="ACS Academy Team" loading="lazy" style={{width:'100%',borderRadius:'12px',marginBottom:'12px',objectFit:'cover',maxHeight:'200px'}} />
                  )}
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="tl-tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
              <div className="tl-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
