'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { buildQuestionSet, SUBJECT_LABELS } from '@/data/assessmentQuestions'
import { 
  CheckCircle, Play, Timer, Sparkles, BookOpen, 
  ChevronRight, RefreshCw, AlertTriangle, ShieldCheck 
} from 'lucide-react'

interface Question { q: string; opts: string[]; ans: number; exp: string; subject: string }
interface UserInfo { name: string; mobile: string; email: string; city: string; qualification: string; targetExam: string; challenge: string }
interface SubjectData { correct: number; wrong: number; skipped: number; max: number; score: number; pct: number }
interface Results { score: number; maxScore: number; pct: number; readiness: string; readinessColor: string; subjectScores: Record<string, SubjectData>; correct: number; wrong: number; skipped: number }

const TOTAL_TIME = 30 // seconds per question

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

export default function AssessmentPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', mobile: '', email: '', city: '', qualification: '', targetExam: '', challenge: '' })
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(15).fill(null))
  const [negativeMarking, setNegativeMarking] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [results, setResults] = useState<Results | null>(null)
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

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
      if (a === null) {
        subjectData[subj].skipped++
      } else if (a === q.ans) {
        totalScore += 3
        subjectData[subj].correct++
      } else {
        if (negativeMarking) totalScore -= 1
        subjectData[subj].wrong++
      }
    })

    Object.keys(subjectData).forEach(s => {
      const d = subjectData[s]
      d.score = d.correct * 3 - (negativeMarking ? d.wrong : 0)
      d.pct = d.max > 0 ? Math.round((d.score / d.max) * 100) : 0
    })

    const maxScore = qs.length * 3
    const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
    
    let readiness = 'Beginner'
    let readinessColor = 'text-red-500 bg-red-500/10 border-red-500/20'
    if (pct >= 75) {
      readiness = 'Excellent'
      readinessColor = 'text-green-600 bg-green-600/10 border-green-600/20 dark:text-green-500'
    } else if (pct >= 45) {
      readiness = 'Moderate'
      readinessColor = 'text-yellow-600 bg-yellow-600/10 border-yellow-600/20 dark:text-yellow-500'
    }

    setResults({
      score: totalScore,
      maxScore,
      pct,
      readiness,
      readinessColor,
      subjectScores: subjectData,
      correct: qs.reduce((sum, q, i) => sum + (ans[i] === q.ans ? 1 : 0), 0),
      wrong: qs.reduce((sum, q, i) => sum + (ans[i] !== null && ans[i] !== q.ans ? 1 : 0), 0),
      skipped: qs.reduce((sum, q, i) => sum + (ans[i] === null ? 1 : 0), 0),
    })
    setStep(3)
  }, [negativeMarking, stopTimer])

  // Timer effect
  useEffect(() => {
    if (step === 2) {
      setTimeLeft(TOTAL_TIME)
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            // Time out - auto-advance or submit
            if (currentQ < questions.length - 1) {
              setCurrentQ(q => q + 1)
              return TOTAL_TIME
            } else {
              doSubmit(questions, answers)
              return 0
            }
          }
          return t - 1
        })
      }, 1000)
    }
    return stopTimer
  }, [step, currentQ, questions, answers, doSubmit, stopTimer])

  const handleStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = userInfo.targetExam
    if (!target) return
    const qs = buildQuestionSet(target)
    setQuestions(qs)
    setAnswers(new Array(qs.length).fill(null))
    setCurrentQ(0)
    setStep(2)
  }

  const handleSelectAnswer = (idx: number) => {
    const nextAnswers = [...answers]
    nextAnswers[currentQ] = idx
    setAnswers(nextAnswers)
  }

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      doSubmit(questions, answers)
    }
  }

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              Assessment Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground">
              Free Competitive <span className="text-primary">Readiness Test</span>
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Assess your strength in quantitative, reasoning, English, and domain knowledge. Receive instant scores and a personalized study recommendation.
            </p>
          </div>

          {/* STEP 1: Registration Form */}
          {step === 1 && (
            <Card className="border border-border/80 bg-card p-6 sm:p-8 rounded-2xl shadow-sm">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold">Register to Begin</CardTitle>
                <CardDescription>Enter details to launch your customized readiness exam.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleStart} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your full name"
                        value={userInfo.name}
                        onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                        className="w-full bg-muted border border-border/60 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        value={userInfo.mobile}
                        onChange={e => setUserInfo({ ...userInfo, mobile: e.target.value })}
                        className="w-full bg-muted border border-border/60 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                        className="w-full bg-muted border border-border/60 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80">City *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your city"
                        value={userInfo.city}
                        onChange={e => setUserInfo({ ...userInfo, city: e.target.value })}
                        className="w-full bg-muted border border-border/60 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80">Qualification *</label>
                      <select 
                        required
                        value={userInfo.qualification}
                        onChange={e => setUserInfo({ ...userInfo, qualification: e.target.value })}
                        className="w-full bg-muted border border-border/60 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 outline-none text-muted-foreground"
                      >
                        <option value="">Select Qualification</option>
                        <option>Class 10</option>
                        <option>Class 12</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground/80">Target Exam *</label>
                      <select 
                        required
                        value={userInfo.targetExam}
                        onChange={e => setUserInfo({ ...userInfo, targetExam: e.target.value })}
                        className="w-full bg-muted border border-border/60 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 outline-none text-muted-foreground"
                      >
                        <option value="">Select Target Exam</option>
                        <option>Banking</option>
                        <option>SSC</option>
                        <option>Defence</option>
                        <option>MBA</option>
                        <option>Law</option>
                        <option>MCA</option>
                        <option>CUET</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 py-2">
                    <input 
                      type="checkbox" 
                      id="negative" 
                      checked={negativeMarking} 
                      onChange={e => setNegativeMarking(e.target.checked)}
                      className="size-4 text-primary bg-muted border-border/60 rounded focus:ring-primary/20"
                    />
                    <label htmlFor="negative" className="text-xs font-semibold text-foreground/80 select-none cursor-pointer">
                      Enable Negative Marking (+3 for Correct, -1 for Incorrect)
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg gap-2 mt-2">
                    <Play className="size-4" />
                    <span>Start Test Now</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* STEP 2: The Quiz Simulator */}
          {step === 2 && questions.length > 0 && (
            <Card className="border border-border/80 bg-card p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
              {/* Quiz Header Info */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-foreground">
                    Question {currentQ + 1} of {questions.length}
                  </h3>
                  <span className="inline-block text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {SUBJECT_LABELS[questions[currentQ].subject] || 'General'}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-foreground bg-muted px-3 py-1.5 rounded-lg border border-border/60">
                  <Timer className="size-4 text-primary shrink-0" />
                  <span className={timeLeft <= 5 ? 'text-destructive animate-pulse' : ''}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="py-2">
                <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                  {questions[currentQ].q}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQ].opts.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectAnswer(oIdx)}
                    className={`w-full text-left px-4 py-3 text-sm rounded-lg border transition-all duration-200 outline-none flex items-center justify-between ${
                      answers[currentQ] === oIdx
                        ? 'border-primary bg-primary/5 text-primary font-bold'
                        : 'border-border hover:border-primary/20 hover:bg-muted/30 text-muted-foreground'
                    }`}
                  >
                    <span>{opt}</span>
                    {answers[currentQ] === oIdx && <CheckCircle className="size-4 text-primary shrink-0" />}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center border-t border-border/60 pt-4">
                <Button 
                  onClick={handlePrev} 
                  disabled={currentQ === 0}
                  variant="outline" 
                  size="sm"
                  className="border-border rounded-lg"
                >
                  Previous
                </Button>
                
                <Button 
                  onClick={handleNext} 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg gap-1.5"
                >
                  <span>{currentQ === questions.length - 1 ? 'Submit Test' : 'Next Question'}</span>
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 3: Detailed Scoreboard Results */}
          {step === 3 && results && (
            <div className="space-y-6 animate-fade-in">
              <Card className="border border-border/80 bg-card p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
                <div className="flex flex-col items-center justify-center text-center space-y-3 pb-6 border-b border-border/60">
                  <Sparkles className="size-12 text-yellow-500 animate-bounce" />
                  <h2 className="text-2xl font-black text-foreground">Test Complete!</h2>
                  <p className="text-sm text-muted-foreground">Here is your detailed competitive examination readiness report.</p>
                  
                  {/* Readiness Badge */}
                  <span className={`inline-block text-sm font-bold px-4 py-1.5 rounded-full border ${results.readinessColor}`}>
                    Readiness: {results.readiness}
                  </span>
                </div>

                {/* Score breakdown metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-muted/40 p-4 rounded-xl border border-border/40">
                    <span className="block text-2xl font-black text-primary">{results.score} / {results.maxScore}</span>
                    <span className="block text-[10px] uppercase font-bold text-muted-foreground mt-1">Total Score</span>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-xl border border-border/40">
                    <span className="block text-2xl font-black text-green-600 dark:text-green-500">{results.correct}</span>
                    <span className="block text-[10px] uppercase font-bold text-muted-foreground mt-1">Correct Answers</span>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-xl border border-border/40">
                    <span className="block text-2xl font-black text-red-500">{results.wrong}</span>
                    <span className="block text-[10px] uppercase font-bold text-muted-foreground mt-1">Wrong Answers</span>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-xl border border-border/40">
                    <span className="block text-2xl font-black text-yellow-600 dark:text-yellow-500">{results.skipped}</span>
                    <span className="block text-[10px] uppercase font-bold text-muted-foreground mt-1">Skipped</span>
                  </div>
                </div>

                {/* Subject Scores Table */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-foreground">Sectional Performance Analysis</h3>
                  <div className="overflow-x-auto rounded-lg border border-border/60">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-muted/50 border-b border-border/60 text-muted-foreground font-semibold">
                        <tr>
                          <th className="p-3">Section</th>
                          <th className="p-3 text-center">Correct</th>
                          <th className="p-3 text-center">Wrong</th>
                          <th className="p-3 text-center">Score</th>
                          <th className="p-3 text-right">Accuracy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {Object.entries(results.subjectScores).map(([subKey, data]) => (
                          <tr key={subKey} className="hover:bg-muted/20">
                            <td className="p-3 font-semibold text-foreground">
                              {SUBJECT_LABELS[subKey] || subKey}
                            </td>
                            <td className="p-3 text-center text-green-600 dark:text-green-500 font-bold">{data.correct}</td>
                            <td className="p-3 text-center text-red-500 font-bold">{data.wrong}</td>
                            <td className="p-3 text-center font-bold">{data.score}</td>
                            <td className="p-3 text-right font-black text-primary">{data.pct}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Retake Button */}
                <div className="flex justify-center pt-4 border-t border-border/50">
                  <Button 
                    onClick={() => setStep(1)} 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-lg gap-2 text-xs"
                  >
                    <RefreshCw className="size-4" />
                    <span>Retake Assessment</span>
                  </Button>
                </div>
              </Card>

              {/* STUDY PLAN RECOMMENDATIONS */}
              <Card className="border border-border/80 bg-card p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
                <CardHeader className="p-0 border-b border-border/60 pb-4">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <BookOpen className="size-5 text-primary" />
                    <span>Personalized Strategy &amp; Study Plan</span>
                  </CardTitle>
                  <CardDescription>Tailored preparation priorities based on your test results.</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {Object.entries(results.subjectScores).map(([subKey, data]) => {
                    const planItems = STUDY_PLANS[subKey] || []
                    const status = data.pct >= 75 ? 'Strong' : data.pct >= 45 ? 'Needs Work' : 'Critical Focus'
                    const statusColor = data.pct >= 75 ? 'text-green-600 dark:text-green-500' : data.pct >= 45 ? 'text-yellow-600 dark:text-yellow-500' : 'text-red-500'
                    return (
                      <div key={subKey} className="space-y-2 border-b border-border/40 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-center text-sm font-bold">
                          <span>{SUBJECT_LABELS[subKey] || subKey}</span>
                          <span className={statusColor}>{status} ({data.pct}%)</span>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
                          {planItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}

                  <div className="rounded-xl bg-primary/5 p-4 border border-primary/10 flex items-start gap-3 mt-6">
                    <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-foreground">Want to discuss this result?</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Take this score report to our centre at Karve Road, Pune. Meet our senior instructors for a detailed doubt-clearing session and map out your custom target roadmap.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
