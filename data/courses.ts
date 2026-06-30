export const courseCategories = [
  { id: 'banking', label: 'Banking', icon: 'fa-university' },
  { id: 'ssc', label: 'SSC & Govt', icon: 'fa-flag' },
  { id: 'defence', label: 'Defence', icon: 'fa-shield-alt' },
  { id: 'mba', label: 'MBA Entrance', icon: 'fa-briefcase' },
  { id: 'law', label: 'Law Entrance', icon: 'fa-gavel' },
  { id: 'mca', label: 'MCA / IT', icon: 'fa-laptop-code' },
  { id: 'cuet', label: 'CUET / BBA', icon: 'fa-graduation-cap' },
]

export const courses: Record<string, { name: string; duration: string; fee: string; badge: string; icon: string }[]> = {
  banking: [
    { name: 'IBPS PO & Clerk', duration: '6 months', fee: '₹12,000', badge: 'Most Popular', icon: 'fa-piggy-bank' },
    { name: 'SBI PO & Clerk', duration: '6 months', fee: '₹12,000', badge: 'High Demand', icon: 'fa-coins' },
    { name: 'RBI Grade B', duration: '8 months', fee: '₹18,000', badge: 'Premium', icon: 'fa-landmark' },
    { name: 'RRB NTPC & Group D', duration: '5 months', fee: '₹10,000', badge: '', icon: 'fa-train' },
    { name: 'Insurance (LIC/GIC)', duration: '4 months', fee: '₹9,000', badge: '', icon: 'fa-file-contract' },
    { name: 'NABARD / SEBI', duration: '6 months', fee: '₹15,000', badge: 'Advanced', icon: 'fa-chart-line' },
  ],
  ssc: [
    { name: 'SSC CGL', duration: '8 months', fee: '₹14,000', badge: 'Top Pick', icon: 'fa-star' },
    { name: 'SSC CHSL', duration: '6 months', fee: '₹12,000', badge: '', icon: 'fa-file-alt' },
    { name: 'SSC MTS & GD', duration: '4 months', fee: '₹8,000', badge: '', icon: 'fa-id-card' },
    { name: 'MPSC State Service', duration: '12 months', fee: '₹20,000', badge: 'Premium', icon: 'fa-building' },
    { name: 'IB (Intelligence Bureau)', duration: '5 months', fee: '₹11,000', badge: '', icon: 'fa-user-secret' },
    { name: 'Railway Group C & D', duration: '5 months', fee: '₹10,000', badge: '', icon: 'fa-train' },
  ],
  defence: [
    { name: 'NDA (Army/Navy/Air Force)', duration: '12 months', fee: '₹18,000', badge: 'Most Sought', icon: 'fa-shield-alt' },
    { name: 'CDS (Combined Defence)', duration: '8 months', fee: '₹15,000', badge: '', icon: 'fa-medal' },
    { name: 'AFCAT (Air Force)', duration: '6 months', fee: '₹14,000', badge: '', icon: 'fa-plane' },
    { name: 'SSB Interview Prep', duration: '3 months', fee: '₹12,000', badge: 'Specialised', icon: 'fa-comments' },
    { name: 'MNS (Military Nursing)', duration: '6 months', fee: '₹12,000', badge: '', icon: 'fa-heartbeat' },
    { name: 'Coast Guard', duration: '5 months', fee: '₹10,000', badge: '', icon: 'fa-anchor' },
  ],
  mba: [
    { name: 'MBA CET Maharashtra', duration: '6 months', fee: '₹15,000', badge: 'Best Result', icon: 'fa-briefcase' },
    { name: 'CAT Preparation', duration: '10 months', fee: '₹22,000', badge: 'IIM Focused', icon: 'fa-chart-bar' },
    { name: 'CMAT / MAT / ATMA', duration: '5 months', fee: '₹12,000', badge: '', icon: 'fa-tasks' },
    { name: 'SNAP (Symbiosis)', duration: '5 months', fee: '₹12,000', badge: '', icon: 'fa-university' },
    { name: 'NMAT (NMIMS)', duration: '5 months', fee: '₹12,000', badge: '', icon: 'fa-graduation-cap' },
    { name: 'IPMAT (IIM Indore)', duration: '8 months', fee: '₹16,000', badge: 'For Class 12', icon: 'fa-star' },
  ],
  law: [
    { name: 'CLAT (NLUs)', duration: '12 months', fee: '₹18,000', badge: 'Top Pick', icon: 'fa-gavel' },
    { name: 'AILET (NLU Delhi)', duration: '10 months', fee: '₹16,000', badge: '', icon: 'fa-balance-scale' },
    { name: 'MH CET Law 3-yr/5-yr', duration: '8 months', fee: '₹14,000', badge: 'Maharashtra', icon: 'fa-scroll' },
    { name: 'LSAT India', duration: '6 months', fee: '₹12,000', badge: '', icon: 'fa-file-contract' },
    { name: 'SET (Symbiosis Law)', duration: '6 months', fee: '₹12,000', badge: '', icon: 'fa-landmark' },
    { name: 'DU LLB Entrance', duration: '5 months', fee: '₹10,000', badge: '', icon: 'fa-university' },
  ],
  mca: [
    { name: 'MCA CET (Maharashtra)', duration: '6 months', fee: '₹12,000', badge: 'Top Pick', icon: 'fa-laptop-code' },
    { name: 'NIMCET (NIT MCA)', duration: '8 months', fee: '₹14,000', badge: 'National Level', icon: 'fa-code' },
    { name: 'BCA Entrance', duration: '4 months', fee: '₹9,000', badge: '', icon: 'fa-desktop' },
    { name: 'Campus Placement Prep', duration: '3 months', fee: '₹9,000', badge: 'Job Ready', icon: 'fa-handshake' },
  ],
  cuet: [
    { name: 'CUET UG (Central Univ)', duration: '8 months', fee: '₹14,000', badge: 'Most Popular', icon: 'fa-graduation-cap' },
    { name: 'CUET PG', duration: '6 months', fee: '₹12,000', badge: '', icon: 'fa-university' },
    { name: 'BBA / BMS Entrance', duration: '5 months', fee: '₹10,000', badge: '', icon: 'fa-briefcase' },
    { name: 'Hotel Management (NCHM)', duration: '6 months', fee: '₹11,000', badge: '', icon: 'fa-concierge-bell' },
  ],
}
