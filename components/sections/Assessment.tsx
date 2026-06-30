'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { buildQuestionSet, SUBJECT_LABELS } from '@/data/assessmentQuestions'

interface Question { q: string; opts: string[]; ans: number; exp: string; subject: string }
interface UserInfo { name: string; mobile: string; email: string; city: string; qualification: string; targetExam: string; challenge: string }
interface SubjectData { correct: number; wrong: number; skipped: number; max: number; score: number; pct: number }
interface Results { score: number; maxScore: number; pct: number; readiness: string; readinessColor: string; subjectScores: Record<string, SubjectData>; correct: number; wrong: number; skipped: number }

const TOTAL_TIME = 30
const COURSE_MAP: Record<string, string> = {
  Banking: 'IBPS / SBI Bank PO & Clerk', SSC: 'SSC CGL / CHSL / MTS',
  Defence: 'NDA / CDS / AFCAT', MBA: 'MBA CET / CAT / MAT',
  Law: 'CLAT / AILET / MH CET Law', MCA: 'MCA CET / NIMCET',
  CUET: 'CUET UG / PG', IT: 'MCA Entrance',
}
const STUDY_PLANS: Record<string, string[]> = {
  quant: ['Practice 30 questions daily', 'Focus on Percentages, Profit/Loss, Time-Speed-Distance', 'Use shortcut formulas'],
  reasoning: ['Solve 20 puzzles daily', 'Focus on Coding-Decoding, Blood Relations, Series', 'Practice Mirror Images weekly'],
  english: ['Read newspaper editorials daily', 'Learn 10 new vocabulary words daily', 'Practice grammar exercises'],
  gk: ['Read daily current affairs (30 min)', 'Revise last 6 months events weekly', 'Focus on national/international affairs'],
  banking: ['Study banking awareness daily', 'Practice previous year banking questions', 'Stay updated with RBI/SEBI circulars'],
  ssc: ['Revise Indian Polity (Laxmikant)', 'Focus on History and Geography', 'Practice previous year SSC papers'],
  defence: ['Study Indian Defence history', 'Follow current military affairs', 'Practice from Pathfinder CDS/NDA book'],
  mba: ['Practice DI and LR sets', 'Study business news and case studies', 'Practice Verbal Ability daily'],
  law: ['Study Indian Constitution thoroughly', 'Practice legal aptitude from previous CLAT papers', 'Read landmark case judgments'],
  mca: ['Practice C/C++ programming basics', 'Revise data structures and algorithms', 'Solve previous MCA entrance papers'],
  cuet: ['Focus on domain subject mastery', 'Practice NCERT 11th-12th thoroughly', 'Take CUET mock tests weekly'],
}

function fireConfetti(canvas: HTMLCanvasElement | null) {
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
  canvas.style.opacity = '1'
  const colors = ['#0B3D91', '#1FA64A', '#FFD700', '#FF6B35', '#C0392B', '#9B59B6']
  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * 200,
    w: 8 + Math.random() * 8, h: 4 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 3 + Math.random() * 4, angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2, drift: (Math.random() - 0.5) * 2,
  }))
  let frame: number
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let alive = false
    particles.forEach(p => {
      if (p.y < canvas.height + 20) alive = true
      p.y += p.speed; p.x += p.drift; p.angle += p.spin
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.angle)
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    })
    if (alive) frame = requestAnimationFrame(draw)
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.opacity = '0' }
  }
  draw()
  setTimeout(() => { cancelAnimationFrame(frame); ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.opacity = '0' }, 4000)
}

export default function Assessment() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', mobile: '', email: '', city: '', qualification: '', targetExam: '', challenge: '' })
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(15).fill(null))
  const [negativeMarking, setNegativeMarking] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [results, setResults] = useState<Results | null>(null)
  const [toast, setToast] = useState({ msg: '', type: '', show: false })
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const confettiRef = useRef<HTMLCanvasElement | null>(null)

  const showToast = (msg: string, type = '') => {
    setToast({ msg, type, show: true })
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3500)
  }

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const doSubmit = useCallback((qs: Question[], ans: (number | null)[]) => {
    stopTimer()
    let totalScore = 0
    const subjectData: Record<string, SubjectData> = {}
    qs.forEach((q, i) => {
      const subj = q.subject
      if (!subjectData[subj]) subjectData[subj] = { correct: 0, wrong: 0, skipped: 0, max: 0, score: 0, pct: 0 }
      subjectData[subj].max += 3
      const a = ans[i]
      if (a === null) { subjectData[subj].skipped++ }
      else if (a === q.ans) { totalScore += 3; subjectData[subj].correct++ }
      else { if (negativeMarking) totalScore -= 1; subjectData[subj].wrong++ }
    })
    Object.keys(subjectData).forEach(s => {
      const d = subjectData[s]
      let sc = d.correct * 3
      if (negativeMarking) sc -= d.wrong
      d.score = Math.max(0, sc)
      d.pct = Math.round((d.score / d.max) * 100)
    })
    const maxScore = qs.length * 3
    const score = Math.max(0, totalScore)
    const pct = Math.round((score / maxScore) * 100)
    let readiness = 'Beginner', readinessColor = '#0B3D91'
    if (pct >= 67) { readiness = 'Advanced'; readinessColor = '#1FA64A' }
    else if (pct >= 34) { readiness = 'Intermediate'; readinessColor = '#F7931E' }
    const correct = qs.filter((q, i) => ans[i] === q.ans).length
    const wrong = qs.filter((q, i) => ans[i] !== null && ans[i] !== q.ans).length
    const skipped = qs.filter((_, i) => ans[i] === null).length
    setResults({ score, maxScore, pct, readiness, readinessColor, subjectScores: subjectData, correct, wrong, skipped })
    setStep(3)
    setTimeout(() => fireConfetti(confettiRef.current), 200)
  }, [negativeMarking, stopTimer])

  const goToQuestion = useCallback((idx: number, qs?: Question[], ans?: (number | null)[]) => {
    stopTimer()
    setTimeLeft(TOTAL_TIME)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const left = Math.max(0, TOTAL_TIME - (Date.now() - start) / 1000)
      setTimeLeft(left)
      if (left <= 0) {
        stopTimer()
        const curQs = qs || questions
        const curAns = ans || answers
        if (idx < curQs.length - 1) goToQuestion(idx + 1, curQs, curAns)
        else doSubmit(curQs, curAns)
      }
    }, 100)
  }, [stopTimer, questions, answers, doSubmit])

  useEffect(() => () => stopTimer(), [stopTimer])

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInfo.name || !userInfo.mobile || !userInfo.email || !userInfo.qualification || !userInfo.targetExam) {
      showToast('Please fill all required fields and select a target exam.', 'error'); return
    }
    if (!/^[6-9]\d{9}$/.test(userInfo.mobile)) {
      showToast('Please enter a valid 10-digit mobile number.', 'error'); return
    }
    const qs = buildQuestionSet(userInfo.targetExam) as Question[]
    const initAns = new Array(qs.length).fill(null)
    setQuestions(qs); setAnswers(initAns); setCurrentQ(0); setStep(2)
    goToQuestion(0, qs, initAns)
  }

  const handleNext = () => {
    stopTimer()
    if (currentQ < questions.length - 1) {
      const next = currentQ + 1; setCurrentQ(next); goToQuestion(next)
    } else doSubmit(questions, answers)
  }

  const handleSkip = () => {
    stopTimer()
    const newAns = [...answers]; newAns[currentQ] = null; setAnswers(newAns)
    if (currentQ < questions.length - 1) {
      const next = currentQ + 1; setCurrentQ(next); goToQuestion(next, questions, newAns)
    } else doSubmit(questions, newAns)
  }

  const retake = () => {
    stopTimer(); setStep(1)
    setUserInfo({ name: '', mobile: '', email: '', city: '', qualification: '', targetExam: '', challenge: '' })
    setQuestions([]); setCurrentQ(0); setAnswers(new Array(15).fill(null))
    setNegativeMarking(false); setTimeLeft(TOTAL_TIME); setResults(null)
  }

  const circumference = 283
  const timerProgress = circumference * (1 - timeLeft / TOTAL_TIME)
  const timerColor = timeLeft <= 5 ? '#ff4757' : '#1FA64A'
  const resultCircumference = 2 * Math.PI * 54
  const resultProgress = results ? resultCircumference * (results.pct / 100) : 0
  const q = questions[currentQ]
  const progressWidth = questions.length > 0 ? (currentQ / questions.length) * 100 : 0
  const weakSubjects = results ? Object.entries(results.subjectScores).filter(([, d]) => d.pct < 60).sort((a, b) => a[1].pct - b[1].pct) : []
  const strongSubjects = results ? Object.entries(results.subjectScores).filter(([, d]) => d.pct >= 60) : []

  return (
    <section className="assessment" id="assessment">
      <canvas id="confettiCanvas" className="confetti-canvas" ref={confettiRef} />
      <div className="assess-glow g1"></div>
      <div className="assess-glow g2"></div>

      <div className="container">
        <div className="assess-section-header">
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>Free Assessment</div>
          <h2 className="section-title">Exam Readiness Assessment</h2>
          <p className="section-sub">Take our 15-question personalised aptitude test. Get your score, subject-wise breakdown, and a custom study plan — instantly.</p>
          <div className="assess-pills">
            {[['fa-tasks','15 Questions'],['fa-clock','~15 Minutes'],['fa-bolt','Instant Results'],['fa-gift','100% Free']].map(([icon,label]) => (
              <div key={label} className="ap-pill"><i className={`fas ${icon}`}></i> {label}</div>
            ))}
          </div>
        </div>

        <div className="assess-card" id="assessCard">
          {/* Step Progress Bar */}
          <div className="assess-top-bar">
            <div className="assess-progress-track">
              <div className="assess-progress-fill" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            </div>
            <div className="step-indicators">
              <div className={`si${step === 1 ? ' active' : ''}${step > 1 ? ' done' : ''}`}>
                <div className="si-num"><i className="fas fa-user"></i></div><span>Your Info</span>
              </div>
              <div className="si-line"></div>
              <div className={`si${step === 2 ? ' active' : ''}${step > 2 ? ' done' : ''}`}>
                <div className="si-num"><i className="fas fa-pencil-alt"></i></div><span>Quiz</span>
              </div>
              <div className="si-line"></div>
              <div className={`si${step === 3 ? ' active' : ''}`}>
                <div className="si-num"><i className="fas fa-chart-bar"></i></div><span>Results</span>
              </div>
            </div>
          </div>

          {/* STEP 1 */}
          <div className={`assess-panel${step !== 1 ? ' hidden' : ''}`}>
            <div className="step-intro">
              <h3>Tell Us About Yourself</h3>
              <p>This helps us personalise your question set and study plan.</p>
            </div>
            <form className="assess-info-form" noValidate onSubmit={handleStep1Submit}>
              <div className="aif-grid">
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'e.g. Rahul Sharma', req: true },
                  { label: 'Mobile Number', key: 'mobile', type: 'tel', placeholder: '10-digit mobile', req: true },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com', req: true },
                  { label: 'City', key: 'city', type: 'text', placeholder: 'e.g. Pune', req: false },
                ].map(f => (
                  <div key={f.key} className="aif-field">
                    <label>{f.label}{f.req && <span className="req"> *</span>}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.req}
                      value={userInfo[f.key as keyof UserInfo]}
                      onChange={e => setUserInfo(p => ({ ...p, [f.key]: e.target.value }))} />
                  </div>
                ))}
                <div className="aif-field">
                  <label>Current Qualification<span className="req"> *</span></label>
                  <select required value={userInfo.qualification} onChange={e => setUserInfo(p => ({ ...p, qualification: e.target.value }))}>
                    <option value="">— Select —</option>
                    {['10th Pass','12th Pass','Graduate (Pursuing)','Graduate (Completed)','Post Graduate','Dropout / Working Professional'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="aif-field">
                  <label>Biggest Challenge</label>
                  <select value={userInfo.challenge} onChange={e => setUserInfo(p => ({ ...p, challenge: e.target.value }))}>
                    <option value="">— Select —</option>
                    {['Weak in Maths / Quant','English Grammar Errors','Slow Speed in Reasoning','Lack of Study Plan','Poor GK / Current Affairs','Exam Fear / Anxiety','Time Management'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="exam-choice-section">
                <label className="exam-choice-label">Target Exam<span className="req"> *</span></label>
                <div className="exam-choice-grid">
                  {[
                    { exam: 'Banking', icon: 'fa-university' }, { exam: 'SSC', icon: 'fa-flag' },
                    { exam: 'Defence', icon: 'fa-shield-alt' }, { exam: 'MBA', icon: 'fa-briefcase' },
                    { exam: 'Law', icon: 'fa-gavel' }, { exam: 'MCA', icon: 'fa-laptop-code' },
                    { exam: 'CUET', icon: 'fa-graduation-cap' }, { exam: 'IT', icon: 'fa-microchip' },
                  ].map(({ exam, icon }) => (
                    <button key={exam} type="button" className={`exam-choice-btn${userInfo.targetExam === exam ? ' selected' : ''}`}
                      onClick={() => setUserInfo(p => ({ ...p, targetExam: exam }))}>
                      <i className={`fas ${icon}`}></i><span>{exam}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary assess-start-btn">
                Start My Assessment <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>

          {/* STEP 2 */}
          <div className={`assess-panel${step !== 2 ? ' hidden' : ''}`}>
            <div className="quiz-top-bar">
              <div className="quiz-q-counter">
                Question <span>{currentQ + 1}</span> / <span>{questions.length || 15}</span>
              </div>
              <div className="quiz-neg-wrap">
                <label className="toggle-sw">
                  <input type="checkbox" checked={negativeMarking} onChange={e => setNegativeMarking(e.target.checked)} />
                  <span className="toggle-track"><span className="toggle-thumb"></span></span>
                </label>
                <span className="neg-label">{negativeMarking ? 'Negative Marking ON' : 'Negative Marking OFF'}</span>
              </div>
              <div className="quiz-timer-wrap">
                <svg className="timer-svg" viewBox="0 0 100 100">
                  <circle className="timer-bg-circle" cx="50" cy="50" r="45" fill="none" strokeWidth="6" />
                  <circle className="timer-ring" cx="50" cy="50" r="45" fill="none" strokeWidth="6"
                    strokeDasharray="283" strokeDashoffset={String(timerProgress)}
                    strokeLinecap="round" transform="rotate(-90 50 50)" style={{ stroke: timerColor }} />
                </svg>
                <div className="timer-num" style={{ color: timeLeft <= 5 ? '#ff4757' : '' }}>{Math.ceil(timeLeft)}</div>
              </div>
            </div>

            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progressWidth}%` }}></div>
            </div>

            <div className="quiz-subject-tag">{q ? (SUBJECT_LABELS[q.subject] || q.subject) : ''}</div>
            <div className="quiz-question">{q ? q.q : 'Loading...'}</div>

            <div className="quiz-options">
              {q && q.opts.map((opt, i) => (
                <button key={i} className={`quiz-opt-btn${answers[currentQ] === i ? ' selected' : ''}`}
                  onClick={() => setAnswers(prev => { const n = [...prev]; n[currentQ] = i; return n })}>
                  <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="opt-text">{opt}</span>
                </button>
              ))}
            </div>

            <div className="quiz-nav-row">
              <button className="quiz-skip-btn" onClick={handleSkip}><i className="fas fa-forward"></i> Skip</button>
              <button className="btn-primary quiz-next-btn" onClick={handleNext}>
                {currentQ === (questions.length || 15) - 1 ? 'Submit' : 'Next'} <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`assess-panel${step !== 3 ? ' hidden' : ''}`}>
            {results && (
              <>
                <div className="result-header">
                  <span className="readiness-badge" style={{ background: results.readinessColor }}>{results.readiness}</span>
                  <h3>Great job, {userInfo.name.split(' ')[0]}!</h3>
                  <p className="result-exam-tag">{userInfo.targetExam} Preparation</p>
                </div>

                <div className="result-score-row">
                  <div className="result-donut-wrap">
                    <svg viewBox="0 0 120 120" className="result-donut">
                      <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                      <circle cx="60" cy="60" r="54" fill="none" strokeWidth="10"
                        strokeDasharray={String(resultCircumference)}
                        strokeDashoffset={String(resultCircumference - resultProgress)}
                        strokeLinecap="round" transform="rotate(-90 60 60)"
                        style={{ stroke: results.readinessColor, transition: 'stroke-dashoffset 1.5s ease' }} />
                    </svg>
                    <div className="donut-center">
                      <div className="donut-pct">{results.pct}%</div>
                      <div className="donut-lbl">Score</div>
                    </div>
                  </div>
                  <div className="result-stats-grid">
                    <div className="rs-card green"><div className="rs-num">{results.correct}</div><div className="rs-lbl">Correct</div></div>
                    <div className="rs-card red"><div className="rs-num">{results.wrong}</div><div className="rs-lbl">Wrong</div></div>
                    <div className="rs-card grey"><div className="rs-num">{results.skipped}</div><div className="rs-lbl">Skipped</div></div>
                    <div className="rs-card blue"><div className="rs-num">{results.score}/{results.maxScore}</div><div className="rs-lbl">Marks</div></div>
                  </div>
                </div>

                <div className="result-section">
                  <h4 className="rs-title"><i className="fas fa-chart-bar"></i> Subject-wise Performance</h4>
                  <div className="subject-bars">
                    {Object.entries(results.subjectScores).map(([key, data]) => {
                      const color = data.pct >= 67 ? '#1FA64A' : data.pct >= 34 ? '#F7931E' : '#ff4757'
                      return (
                        <div key={key} className="subj-bar-item">
                          <div className="sbi-top">
                            <span className="sbi-name">{SUBJECT_LABELS[key] || key}</span>
                            <span className="sbi-score" style={{ color }}>{data.score}/{data.max} ({data.pct}%)</span>
                          </div>
                          <div className="sbi-track">
                            <div className="sbi-fill" style={{ background: color, width: `${data.pct}%`, transition: 'width 1s ease' }}></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="result-section">
                  <h4 className="rs-title"><i className="fas fa-map-marked-alt"></i> Your Personalised Study Plan</h4>
                  <div className="study-plan-content">
                    {weakSubjects.length === 0 ? (
                      <div className="plan-row strong"><i className="fas fa-trophy"></i> Excellent! You&apos;re performing well in all subjects. Continue with mock tests and time management practice.</div>
                    ) : (
                      <>
                        {weakSubjects.slice(0, 3).map(([key]) => {
                          const tips = STUDY_PLANS[key] || ['Practice daily', 'Focus on basics', 'Solve previous papers']
                          return (
                            <div key={key} className="plan-subject">
                              <div className="plan-subject-name">
                                <i className="fas fa-exclamation-circle"></i> {SUBJECT_LABELS[key]}
                                <span className="plan-weak-badge">Needs Focus</span>
                              </div>
                              <ul className="plan-tips">
                                {tips.map((t, i) => <li key={i}><i className="fas fa-check-circle"></i> {t}</li>)}
                              </ul>
                            </div>
                          )
                        })}
                        {strongSubjects.length > 0 && (
                          <div className="plan-row strong">
                            <i className="fas fa-star"></i> <strong>Strengths:</strong> {strongSubjects.map(([k]) => SUBJECT_LABELS[k]).join(', ')} — Keep it up!
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="result-section result-course-card">
                  <div className="rcc-icon"><i className="fas fa-graduation-cap"></i></div>
                  <div className="rcc-body">
                    <div className="rcc-label">Recommended Course at ACS Academy</div>
                    <div className="rcc-course">{COURSE_MAP[userInfo.targetExam] || userInfo.targetExam + ' Preparation'}</div>
                  </div>
                  <div className="rcc-badge">Best Fit</div>
                </div>

                <div className="result-ctas">
                  <button className="btn-primary" onClick={() => document.getElementById('counselling')?.scrollIntoView({ behavior: 'smooth' })}>
                    <i className="fas fa-phone-alt"></i> Book Free Counselling
                  </button>
                  <button className="btn-outline" onClick={retake}>
                    <i className="fas fa-redo"></i> Retake Test
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={`assess-toast${toast.show ? ' show' : ''}${toast.type ? ' ' + toast.type : ''}`}>{toast.msg}</div>
    </section>
  )
}
