export interface BlogPost {
  slug: string
  title: string
  category: string
  author: string
  readTime: string
  publishedAt: string
  excerpt: string
  content: string
  tags: string[]
  iconColor: string
}

export const blogs: BlogPost[] = [
  {
    slug: 'ibps-po-2026-strategy',
    title: 'IBPS PO 2026 Complete Preparation Strategy – Month-Wise Study Plan',
    category: 'Banking',
    author: 'ACS Banking Faculty',
    readTime: '8 min read',
    publishedAt: 'June 20, 2026',
    excerpt: 'A comprehensive, exam-topper-approved strategy to crack IBPS PO 2026 in your first attempt.',
    content: `
      <p>Cracking the IBPS PO exam requires a combination of speed, accuracy, and clear conceptual understanding. In this guide, we lay down a month-wise preparation plan designed by senior banking faculty at ACS Academy Pune.</p>
      
      <h3>Phase 1: Concept Building (Months 1-2)</h3>
      <p>Focus on clarifying fundamental concepts in Quantitative Aptitude and Logical Reasoning. Learn short techniques for simplification, percentage changes, number series, and basic puzzles. Read newspapers daily to build your vocabulary for the English section.</p>
      
      <h3>Phase 2: Speed and Accuracy (Months 3-4)</h3>
      <p>Start solving sectional tests. Practice at least 20 puzzles and 30 data interpretation questions daily. Focus on time management. Use topic tests to identify your weak areas and work on them immediately.</p>
      
      <h3>Phase 3: Mock Tests & Strategy (Months 5-6)</h3>
      <p>Give at least 2 full-length mock tests weekly. Analyze each test thoroughly: check the questions you solved incorrectly or skipped, and review the explanations. Focus on selecting the right questions to attempt during the exam.</p>
    `,
    tags: ['#IBPSPO', '#BankingExam', '#Preparation'],
    iconColor: 'bg-primary/10 text-primary',
  },
  {
    slug: 'mba-cet-vs-cat-2026',
    title: 'MBA CET vs CAT 2026 – Which is Better for Pune Students?',
    category: 'MBA',
    author: 'Chirag Sharda Sir',
    readTime: '5 min read',
    publishedAt: 'June 15, 2026',
    excerpt: 'Complete comparison of exam pattern, difficulty, college options & ROI for Maharashtra students.',
    content: `
      <p>Many MBA aspirants in Pune face the dilemma of choosing between CAT and MAH MBA CET. While CAT is a national-level exam opening doors to IIMs and other top-tier business schools, MAH MBA CET is a state-level exam that is highly popular for colleges like JBIMS, SIMSREE, and PUMBA.</p>
      
      <h3>Key Differences:</h3>
      <ul>
        <li><strong>Exam Pattern:</strong> CAT has sectional timing and negative marking, whereas MAH CET has no negative marking and no sectional time limits.</li>
        <li><strong>Difficulty:</strong> CAT focuses heavily on deep problem-solving skills and verbal comprehension. CET is a speed-based test with 200 questions to be solved in 150 minutes.</li>
        <li><strong>College Opportunities:</strong> CAT scores open doors across India. CET is the primary gateway for top management colleges in Maharashtra.</li>
      </ul>
      
      <p>At ACS Academy, we recommend students to prepare for both exams simultaneously. The core syllabus of Quant, DI, LR, and Verbal is similar. Transitioning from CAT concepts to CET speed-based practice is highly effective.</p>
    `,
    tags: ['#MBACET', '#CAT2026', '#MBAAspirants'],
    iconColor: 'bg-secondary/10 text-secondary',
  },
  {
    slug: 'ssc-cgl-2026-guide',
    title: 'SSC CGL 2026 Syllabus & Pattern – Complete Guide for Beginners',
    category: 'SSC',
    author: 'Sumit Shukla Sir',
    readTime: '6 min read',
    publishedAt: 'June 10, 2026',
    excerpt: 'Everything you need to know about SSC CGL 2026 – tier-wise syllabus, strategy and cut-offs.',
    content: `
      <p>The Staff Selection Commission (SSC) Combined Graduate Level (CGL) is one of the most sought-after examinations for securing premium government jobs. Let's break down the structure and syllabus for 2026 beginners.</p>
      
      <h3>Exam Structure</h3>
      <p>SSC CGL consists of a Tier 1 (qualifying exam testing Quant, Reasoning, English, and General Awareness) and Tier 2 (advanced computer-based test that determines final selection). Both tiers require a balance of quick calculation speed and deep general awareness.</p>
      
      <h3>General Studies Strategy</h3>
      <p>General Studies (GS) is often the make-or-break section. Focus on revising Indian Polity, Modern History, and Geography. Spend 30 minutes daily on current affairs. Revise standard books like Laxmikant for Polity and NCERT notes for Science.</p>
    `,
    tags: ['#SSCCGL', '#GovtJobs', '#SSCStrategy'],
    iconColor: 'bg-primary/10 text-primary',
  },
]
