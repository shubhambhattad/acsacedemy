'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { buildQuestionSet, SUBJECT_LABELS } from '@/data/assessmentQuestions'

interface Question {
  q: string
  opts: string[]
  ans: number
  exp: string
  subject: string
}

interface UserInfo {
  name: string
  email: string
  phone: string
  targetExam: string
}

interface Answer {
  selected: number | null
  timeSpent: number
}

interface SubjectResult {
  correct: number
  wrong: number
  total: number
}

type SubjectResults = Record<string, SubjectResult>

const EXAMS = ['Banking', 'SSC', 'Defence', 'MBA', 'Law', 'MCA', 'CUET', 'IT']
const TOTAL_TIME = 30

export default function Assessment() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '', targetExam: 'Banking' })
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [negativeMarking, setNegativeMarking] = useState(true)
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [results, setResults] = useState<{ score: number; maxScore: number; subjectResults: SubjectResults; studyPlan: string[] } | null>(null)
  const [toast, setToast] = useState('')
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const confettiRef = useRef<HTMLCanvasElement | null>(null)
  const startTimeRef = useRef<number>(Date.now())

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const moveToNext = useCallback((answersArr: Answer[]) => {
    setCurrentQ(prev => {
      const next = prev + 1
      if (next >= questions.length) {
        // Calculate results
        stopTimer()
        let score = 0
        const subjectResults: SubjectResults = {}
        questions.forEach((q, i) => {
          const sub = q.subject
          if (!subjectResults[sub]) subjectResults[sub] = { correct: 0, wrong: 0, total: 0 }
          subjectResults[sub].total++
          const a = answersArr[i]
          if (a && a.selected !== null) {
            if (a.selected === q.ans) {
              score += 2
              subjectResults[sub].correct++
            } else {
              if (negativeMarking) score -= 0.5
              subjectResults[sub].wrong++
            }
          }
        })
        const maxScore = questions.length * 2
        const pct = (score / maxScore) * 100

        const weakSubs = Object.entries(subjectResults)
          .filter(([, v]) => v.correct / v.total < 0.5)
          .map(([k]) => SUBJECT_LABELS[k] || k)

        const studyPlan: string[] = []
        if (pct >= 80) studyPlan.push('Excellent! Focus on speed & accuracy in mock tests.')
        else if (pct >= 60) studyPlan.push('Good foundation. Revise weak topics daily.')
        else studyPlan.push('Needs improvement. Start with basics and practice daily.')
        if (weakSubs.length) studyPlan.push(`Weak areas: ${weakSubs.join(', ')} — enroll in focused batches.`)
        studyPlan.push('Solve 20+ questions daily from our test series.')
        studyPlan.push('Attend free doubt-clearing sessions every Saturday.')

        setResults({ score, maxScore, subjectResults, studyPlan })
        setStep(3)

        if (pct >= 70) launchConfetti()
        return prev
      }
      setSelectedOpt(null)
      setTimeLeft(TOTAL_TIME)
      startTimeRef.current = Date.now()
      return next
    })
  }, [questions, negativeMarking, stopTimer])

  useEffect(() => {
    if (step !== 2) return
    stopTimer()
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setAnswers(old => {
            const updated = [...old]
            updated[currentQ] = { selected: null, timeSpent: TOTAL_TIME }
            moveToNext(updated)
            return updated
          })
          return TOTAL_TIME
        }
        return prev - 1
      })
    }, 1000)
    return stopTimer
  }, [step, currentQ, stopTimer, moveToNext])

  const launchConfetti = () => {
    const canvas = confettiRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.display = 'block'

    const pieces: { x: number; y: number; color: string; r: number; d: number; tilt: number; tiltAngle: number; tiltSpeed: number }[] = []
    const colors = ['#0B3D91', '#1FA64A', '#FFD700', '#FF6B6B', '#00D4FF']
    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        r: Math.random() * 6 + 4,
        d: Math.random() * 50 + 10,
        tilt: Math.random() * 10 - 10,
        tiltAngle: 0,
        tiltSpeed: Math.random() * 0.1 + 0.05,
      })
    }

    let angle = 0
    let frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      angle += 0.01
      pieces.forEach(p => {
        p.tiltAngle += p.tiltSpeed
        p.y += (Math.cos(angle + p.d) + 2) * 1.5
        p.x += Math.sin(angle) * 1.5
        p.tilt = Math.sin(p.tiltAngle) * 12
        ctx.beginPath()
        ctx.lineWidth = p.r
        ctx.strokeStyle = p.color
        ctx.moveTo(p.x + p.tilt + p.r / 3, p.y)
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 5)
        ctx.stroke()
        if (p.y > canvas.height) {
          p.y = -10
          p.x = Math.random() * canvas.width
        }
      })
      frame++
      if (frame < 200) requestAnimationFrame(draw)
      else canvas.style.display = 'none'
    }
    requestAnimationFrame(draw)
  }

  const startQuiz = () => {
    if (!userInfo.name.trim() || !userInfo.email.trim() || !userInfo.phone.trim()) {
      showToast('Please fill all fields')
      return
    }
    const qs = buildQuestionSet(userInfo.targetExam) as Question[]
    setQuestions(qs)
    setAnswers(Array(qs.length).fill({ selected: null, timeSpent: 0 }))
    setCurrentQ(0)
    setSelectedOpt(null)
    setTimeLeft(TOTAL_TIME)
    startTimeRef.current = Date.now()
    setStep(2)
  }

  const handleAnswer = (optIdx: number) => {
    if (selectedOpt !== null) return
    setSelectedOpt(optIdx)
    const timeSpent = TOTAL_TIME - timeLeft
    setAnswers(prev => {
      const updated = [...prev]
      updated[currentQ] = { selected: optIdx, timeSpent }
      setTimeout(() => moveToNext(updated), 800)
      return updated
    })
    stopTimer()
  }

  const pct = results ? Math.max(0, Math.round((results.score / results.maxScore) * 100)) : 0

  return (
    <section className="assessment section" id="assessment">
      <canvas ref={confettiRef} id="confetti-canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, display: 'none', pointerEvents: 'none' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Know Yourself</div>
          <h2 className="section-title split-text">Free <span className="gradient-text">Aptitude Assessment</span></h2>
          <p className="section-sub">15 questions · 30 sec each · Instant personalised study plan</p>
        </div>

        {/* Step 1 — User Info */}
        {step === 1 && (
          <div className="assessment-wrap">
            <div className="assessment-intro glass-card">
              <div className="assessment-intro-grid">
                <div className="assessment-info-side">
                  <h3>What You'll Get</h3>
                  <ul className="assessment-benefits">
                    {['15 questions across Quant, Reasoning, English & your target exam', 'Personalised score & subject-wise breakdown', 'Customised study plan based on your performance', 'Expert counsellor callback within 24 hours'].map(b => (
                      <li key={b}><i className="fas fa-check-circle"></i> {b}</li>
                    ))}
                  </ul>
                  <div className="assessment-stats-row">
                    {[['50K+', 'Tests Taken'], ['92%', 'Accuracy'], ['4.9★', 'Rating']].map(([v, l]) => (
                      <div key={l} className="assessment-stat"><span className="stat-num">{v}</span><span className="stat-label">{l}</span></div>
                    ))}
                  </div>
                </div>
                <div className="assessment-form-side">
                  <h3>Enter Your Details</h3>
                  <form onSubmit={e => { e.preventDefault(); startQuiz() }} className="assessment-form">
                    <div className="form-group">
                      <label>Full Name <span>*</span></label>
                      <input type="text" className="form-control" placeholder="Your Name" value={userInfo.name}
                        onChange={e => setUserInfo(p => ({ ...p, name: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                      <label>Email Address <span>*</span></label>
                      <input type="email" className="form-control" placeholder="your@email.com" value={userInfo.email}
                        onChange={e => setUserInfo(p => ({ ...p, email: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number <span>*</span></label>
                      <input type="tel" className="form-control" placeholder="+91 9876543210" value={userInfo.phone}
                        onChange={e => setUserInfo(p => ({ ...p, phone: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                      <label>Target Exam</label>
                      <select className="form-control" value={userInfo.targetExam}
                        onChange={e => setUserInfo(p => ({ ...p, targetExam: e.target.value }))}>
                        {EXAMS.map(ex => <option key={ex} value={ex}>{ex}</option>)}
                      </select>
                    </div>
                    <div className="assessment-toggle-row">
                      <label className="toggle-label">
                        <span>Negative Marking (-0.5)</span>
                        <div className={`toggle-switch${negativeMarking ? ' active' : ''}`} onClick={() => setNegativeMarking(p => !p)}>
                          <div className="toggle-thumb"></div>
                        </div>
                      </label>
                    </div>
                    <button type="submit" className="btn-primary btn-full magnetic">
                      <i className="fas fa-play-circle"></i> Start Free Test
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Quiz */}
        {step === 2 && questions.length > 0 && (
          <div className="quiz-wrap">
            <div className="quiz-header glass-card">
              <div className="quiz-progress-info">
                <span className="quiz-q-count">Question {currentQ + 1} / {questions.length}</span>
                <span className="quiz-subject-tag">{SUBJECT_LABELS[questions[currentQ].subject] || questions[currentQ].subject}</span>
              </div>
              <div className={`quiz-timer${timeLeft <= 10 ? ' danger' : ''}`}>
                <div className="timer-circle">
                  <svg viewBox="0 0 36 36">
                    <path className="timer-bg" d="M18 2 a16 16 0 0 1 0 32 a16 16 0 0 1 0-32" />
                    <path className="timer-fill" strokeDasharray={`${(timeLeft / TOTAL_TIME) * 100}, 100`} d="M18 2 a16 16 0 0 1 0 32 a16 16 0 0 1 0-32" />
                  </svg>
                  <span>{timeLeft}</span>
                </div>
              </div>
              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{ width: `${((currentQ) / questions.length) * 100}%` }}></div>
              </div>
            </div>

            <div className="quiz-card glass-card">
              <p className="quiz-question">{questions[currentQ].q}</p>
              <div className="quiz-options">
                {questions[currentQ].opts.map((opt, i) => {
                  let cls = 'quiz-option'
                  if (selectedOpt !== null) {
                    if (i === questions[currentQ].ans) cls += ' correct'
                    else if (i === selectedOpt) cls += ' wrong'
                  }
                  return (
                    <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={selectedOpt !== null}>
                      <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                      <span className="opt-text">{opt}</span>
                      {selectedOpt !== null && i === questions[currentQ].ans && <i className="fas fa-check opt-icon"></i>}
                      {selectedOpt !== null && i === selectedOpt && i !== questions[currentQ].ans && <i className="fas fa-times opt-icon"></i>}
                    </button>
                  )
                })}
              </div>
              {selectedOpt !== null && (
                <div className="quiz-explanation">
                  <i className="fas fa-lightbulb"></i>
                  <span><strong>Explanation:</strong> {questions[currentQ].exp}</span>
                </div>
              )}
            </div>

            <div className="quiz-dots">
              {questions.map((_, i) => (
                <span key={i} className={`quiz-dot${i === currentQ ? ' active' : i < currentQ ? (answers[i]?.selected === questions[i].ans ? ' correct' : ' wrong') : ''}`}></span>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Results */}
        {step === 3 && results && (
          <div className="results-wrap">
            <div className="results-hero glass-card">
              <div className="results-score-circle">
                <svg viewBox="0 0 120 120" className="score-svg">
                  <circle cx="60" cy="60" r="54" className="score-bg-circle" />
                  <circle cx="60" cy="60" r="54" className="score-fill-circle"
                    strokeDasharray={`${pct * 3.39} 339`} />
                </svg>
                <div className="score-text">
                  <span className="score-pct">{pct}%</span>
                  <span className="score-label">{results.score.toFixed(1)} / {results.maxScore}</span>
                </div>
              </div>
              <div className="results-summary">
                <h3 className={`results-title ${pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'improve'}`}>
                  {pct >= 80 ? '🎉 Excellent Performance!' : pct >= 60 ? '👍 Good Job!' : '📚 Keep Practising!'}
                </h3>
                <p className="results-name">Well done, {userInfo.name}!</p>
                <div className="results-quick-stats">
                  <div className="rstat green"><i className="fas fa-check"></i> {questions.filter((q, i) => answers[i]?.selected === q.ans).length} Correct</div>
                  <div className="rstat red"><i className="fas fa-times"></i> {questions.filter((q, i) => answers[i]?.selected !== null && answers[i]?.selected !== q.ans).length} Wrong</div>
                  <div className="rstat blue"><i className="fas fa-minus"></i> {questions.filter((_, i) => answers[i]?.selected === null).length} Skipped</div>
                </div>
              </div>
            </div>

            <div className="results-details">
              <div className="subject-breakdown glass-card">
                <h4><i className="fas fa-chart-bar"></i> Subject-Wise Breakdown</h4>
                {Object.entries(results.subjectResults).map(([sub, data]) => (
                  <div key={sub} className="subject-row">
                    <span className="sub-label">{SUBJECT_LABELS[sub] || sub}</span>
                    <div className="sub-bar-wrap">
                      <div className="sub-bar" style={{ width: `${data.total ? (data.correct / data.total) * 100 : 0}%` }}></div>
                    </div>
                    <span className="sub-score">{data.correct}/{data.total}</span>
                  </div>
                ))}
              </div>

              <div className="study-plan glass-card">
                <h4><i className="fas fa-road"></i> Your Study Plan</h4>
                <ul className="study-plan-list">
                  {results.studyPlan.map((item, i) => (
                    <li key={i}><i className="fas fa-arrow-right"></i> {item}</li>
                  ))}
                </ul>
                <div className="results-cta-group">
                  <a href="#counselling" className="btn-primary magnetic">
                    <i className="fas fa-phone"></i> Book Free Counselling
                  </a>
                  <button className="btn-outline magnetic" onClick={() => { setStep(1); setResults(null); setCurrentQ(0); setAnswers([]); setSelectedOpt(null) }}>
                    <i className="fas fa-redo"></i> Retake Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {toast && (
        <div className="toast-notification active">
          <i className="fas fa-info-circle"></i> {toast}
        </div>
      )}
    </section>
  )
}
