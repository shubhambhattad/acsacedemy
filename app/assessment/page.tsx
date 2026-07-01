'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Play, Timer, Sparkles, RefreshCw, BookOpen, ShieldCheck, 
  CheckCircle2, AlertTriangle, HelpCircle 
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Question {
  id: number
  subject: 'quant' | 'reasoning' | 'english' | 'domain'
  question: string
  options: string[]
  correct: number
}

const QUESTIONS: Question[] = [
  // Quantitative Aptitude
  {
    id: 1,
    subject: 'quant',
    question: 'A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times itself?',
    options: ['16 years', '24 years', '32 years', '20 years'],
    correct: 1, // 24 years
  },
  {
    id: 2,
    subject: 'quant',
    question: 'Two pipes A and B can fill a cistern in 12 mins and 15 mins respectively. If both are opened together, how long will they take to fill?',
    options: ['6 mins 40 secs', '5 mins 20 secs', '7 mins 10 secs', '8 mins'],
    correct: 0, // 6 mins 40 secs
  },
  // Logical Reasoning
  {
    id: 3,
    subject: 'reasoning',
    question: 'Pointing to a photograph, Rohan said, "His sister is the daughter of my father\'s only son." How is Rohan related to the photograph?',
    options: ['Father', 'Brother', 'Uncle', 'Grandfather'],
    correct: 0, // Father
  },
  {
    id: 4,
    subject: 'reasoning',
    question: 'Choose the odd one out from the following list of terms.',
    options: ['NFC', 'Bluetooth', 'Wi-Fi', 'USB Cable'],
    correct: 3, // USB Cable (Wired vs Wireless)
  },
  // English Language
  {
    id: 5,
    subject: 'english',
    question: 'Choose the correct synonym of the word: "CONCISE"',
    options: ['Brief', 'Lengthy', 'Detailed', 'Verbose'],
    correct: 0, // Brief
  },
  {
    id: 6,
    subject: 'english',
    question: 'Identify the grammatically correct sentence.',
    options: [
      'Neither Rohan nor his friends is attending.',
      'Neither Rohan nor his friends are attending.',
      'Neither Rohan or his friends are attending.',
      'Neither Rohan nor his friends was attending.'
    ],
    correct: 1, // Neither...nor...are (friends is plural)
  },
  // Domain General Knowledge
  {
    id: 7,
    subject: 'domain',
    question: 'Which regulatory body governs the monetary policy of India?',
    options: ['SEBI', 'NABARD', 'RBI', 'IRDAI'],
    correct: 2, // RBI
  },
  {
    id: 8,
    subject: 'domain',
    question: 'The term "Bull" and "Bear" are associated with which financial activity?',
    options: ['Banking operations', 'Stock Market trading', 'Agriculture loans', 'Foreign Direct Investment'],
    correct: 1, // Stock Market trading
  },
]

const SUBJECT_LABELS: Record<string, string> = {
  quant: 'Quantitative Aptitude',
  reasoning: 'Logical Reasoning',
  english: 'English Language',
  domain: 'General Awareness / Domain',
}

const STUDY_PLANS: Record<string, string[]> = {
  quant: [
    'Focus on Speed & Accuracy: Practice Vedic Mathematics tricks daily.',
    'Strengthen Simple Interest, Profit & Loss, and Time & Work fundamentals.',
    'Attend our special batch session on Quantitative shortcuts at Kothrud Centre.',
  ],
  reasoning: [
    'Practice Blood Relations, Syllogism, and Coding-Decoding puzzles.',
    'Focus on improving visualization speeds for complex structural puzzles.',
    'Attempt 20 topic-wise reasoning quizzes on the ACS Learning App.',
  ],
  english: [
    'Revise basic rules of Subject-Verb Agreement, Pronouns, and Tenses.',
    'Read newspapers daily and practice vocabulary worksheets.',
    'Attend ACS grammar concepts booster sessions.',
  ],
  domain: [
    'Read daily current affairs bulletins on the ACS Learning portal.',
    'Focus on Indian Economy, Budget highlights, and Banking Awareness modules.',
    'Take weekly general knowledge tests in our physical library.',
  ],
}

export default function AssessmentPage() {
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    qualification: '',
    targetExam: '',
  })
  const [negativeMarking, setNegativeMarking] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(60) // 60s timer per question
  
  // Scoring & Results state
  const [results, setResults] = useState<{
    score: number
    maxScore: number
    correct: number
    wrong: number
    skipped: number
    readiness: string
    readinessColor: string
    subjectScores: Record<string, { correct: number; wrong: number; score: number; pct: number }>
  } | null>(null)

  // Start Exam
  const handleStart = (e: React.FormEvent) => {
    e.preventDefault()
    setQuestions(QUESTIONS)
    setCurrentQ(0)
    setSelectedAnswers({})
    setTimeLeft(60)
    setStep(2)
  }

  // Timer hook
  useEffect(() => {
    if (step !== 2) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Automatic skip / next
          handleNextQuestion()
          return 60
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [step, currentQ])

  // Move forward in the quiz
  const handleNextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setTimeLeft(60)
    } else {
      calculateResults()
    }
  }

  // Skip Current Question
  const handleSkip = () => {
    handleNextQuestion()
  }

  // Answer Select Handler
  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questions[currentQ].id]: optIdx,
    })
  }

  // Compile final metrics
  const calculateResults = () => {
    let score = 0
    let correct = 0
    let wrong = 0
    let skipped = 0

    const subjectBreakdown: Record<string, { correct: number; wrong: number; score: number; pct: number }> = {
      quant: { correct: 0, wrong: 0, score: 0, pct: 0 },
      reasoning: { correct: 0, wrong: 0, score: 0, pct: 0 },
      english: { correct: 0, wrong: 0, score: 0, pct: 0 },
      domain: { correct: 0, wrong: 0, score: 0, pct: 0 },
    }

    questions.forEach((q) => {
      const chosen = selectedAnswers[q.id]
      const isCorrect = chosen === q.correct
      const hasAnswered = chosen !== undefined

      if (!hasAnswered) {
        skipped++
      } else if (isCorrect) {
        correct++
        score += 3
        subjectBreakdown[q.subject].correct++
        subjectBreakdown[q.subject].score += 3
      } else {
        wrong++
        if (negativeMarking) {
          score -= 1
          subjectBreakdown[q.subject].score -= 1
        }
        subjectBreakdown[q.subject].wrong++
      }
    })

    const maxScore = questions.length * 3
    const scorePct = Math.round((score / maxScore) * 100)

    // Calculate sectional percentages
    Object.keys(subjectBreakdown).forEach((subKey) => {
      const subTotalQs = questions.filter(q => q.subject === subKey).length
      const subMaxScore = subTotalQs * 3
      const subScore = subjectBreakdown[subKey].score
      const subPct = subMaxScore > 0 ? Math.max(0, Math.round((subScore / subMaxScore) * 100)) : 0
      subjectBreakdown[subKey].pct = subPct
    })

    let readiness = 'Beginner'
    let readinessColor = 'border-red-500/20 text-red-500 bg-red-500/5'
    if (scorePct >= 75) {
      readiness = 'Advanced (Ready to Crack)'
      readinessColor = 'border-green-500/20 text-green-600 dark:text-green-500 bg-green-500/5'
    } else if (scorePct >= 45) {
      readiness = 'Intermediate (Needs Polish)'
      readinessColor = 'border-yellow-500/20 text-yellow-600 dark:text-yellow-500 bg-yellow-500/5'
    }

    setResults({
      score,
      maxScore,
      correct,
      wrong,
      skipped,
      readiness,
      readinessColor,
      subjectScores: subjectBreakdown,
    })
    setStep(3)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-20">
        
        {/* Header Hero */}
        <section className="bg-gradient-to-r from-acs-blue/5 via-acs-green/5 to-acs-blue/5 border-b border-border/40 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/10 mb-4 inline-block">
                Free Assessment
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Free Competitive <span className="text-acs-blue-light">Readiness Test</span>
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
                Assess your strength in quantitative, reasoning, English, and domain knowledge. Receive instant scores and a personalized study recommendation.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl pt-12">
          
          {/* STEP 1: Registration Form */}
          {step === 1 && (
            <Card className="border border-border/40 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-bold">Register to Begin</CardTitle>
                <CardDescription>Enter details to launch your customized readiness exam.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleStart} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your full name"
                        value={userInfo.name}
                        onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        value={userInfo.mobile}
                        onChange={e => setUserInfo({ ...userInfo, mobile: e.target.value })}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">City *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your city"
                        value={userInfo.city}
                        onChange={e => setUserInfo({ ...userInfo, city: e.target.value })}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Qualification *</label>
                      <select 
                        required
                        value={userInfo.qualification}
                        onChange={e => setUserInfo({ ...userInfo, qualification: e.target.value })}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none text-muted-foreground transition-all"
                      >
                        <option value="">Select Qualification</option>
                        <option>Class 10</option>
                        <option>Class 12</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Target Exam *</label>
                      <select 
                        required
                        value={userInfo.targetExam}
                        onChange={e => setUserInfo({ ...userInfo, targetExam: e.target.value })}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none text-muted-foreground transition-all"
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
                      className="size-4 text-primary bg-muted border-border/40 rounded focus:ring-primary/25 cursor-pointer"
                    />
                    <label htmlFor="negative" className="text-xs font-semibold text-foreground/80 select-none cursor-pointer">
                      Enable Negative Marking (+3 for Correct, -1 for Incorrect)
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-6 rounded-lg gap-2 mt-2 cursor-pointer shadow-sm shadow-primary/20">
                    <Play className="size-4" />
                    <span>Start Test Now</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* STEP 2: The Quiz Simulator */}
          {step === 2 && questions.length > 0 && (
            <Card className="border border-border/40 bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
              {/* Quiz Header Info */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-foreground">
                    Question {currentQ + 1} of {questions.length}
                  </h3>
                  <span className="inline-block text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {SUBJECT_LABELS[questions[currentQ].subject] || 'General'}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-foreground bg-acs-cream px-3 py-1.5 rounded-lg border border-border/40">
                  <Timer className="size-4 text-primary shrink-0" />
                  <span className={timeLeft <= 5 ? 'text-destructive animate-pulse' : ''}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-acs-cream rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="space-y-4">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <h4 className="text-base font-semibold text-foreground leading-relaxed">
                    {questions[currentQ].question}
                  </h4>
                </div>

                {/* Question Options */}
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {questions[currentQ].options.map((option, optIdx) => {
                    const isSelected = selectedAnswers[questions[currentQ].id] === optIdx
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectOption(optIdx)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border outline-none cursor-pointer",
                          isSelected 
                            ? "bg-primary/5 text-primary border-primary" 
                            : "bg-white text-muted-foreground border-border/40 hover:bg-acs-cream/60 hover:text-foreground"
                        )}
                      >
                        <span className="inline-block mr-3 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-bold uppercase">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-4 border-t border-border/40">
                <Button 
                  onClick={handleSkip} 
                  variant="outline" 
                  className="border-border/40 hover:bg-muted text-foreground font-semibold px-4 rounded-lg text-xs"
                >
                  Skip Question
                </Button>
                <Button 
                  onClick={handleNextQuestion} 
                  className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-5 rounded-lg text-xs"
                >
                  {currentQ < questions.length - 1 ? 'Next Question' : 'Finish & View Score'}
                </Button>
              </div>
            </Card>
          )}

          {/* STEP 3: Detailed Scoreboard Results */}
          {step === 3 && results && (
            <div className="space-y-6 animate-fade-in">
              <Card className="border border-border/40 bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
                <div className="flex flex-col items-center justify-center text-center space-y-3 pb-6 border-b border-border/40">
                  <Sparkles className="size-12 text-acs-amber animate-bounce" />
                  <h2 className="text-2xl font-black text-foreground">Test Complete!</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">Here is your detailed competitive examination readiness report.</p>
                  
                  {/* Readiness Badge */}
                  <span className={cn("inline-block text-xs font-bold px-4 py-1.5 rounded-full border", results.readinessColor)}>
                    Readiness: {results.readiness}
                  </span>
                </div>

                {/* Score breakdown metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-acs-cream/60 p-4 rounded-xl border border-border/40">
                    <span className="block text-xl sm:text-2xl font-black text-primary">{results.score} / {results.maxScore}</span>
                    <span className="block text-[9px] uppercase font-bold text-muted-foreground mt-1">Total Score</span>
                  </div>
                  <div className="bg-acs-cream/60 p-4 rounded-xl border border-border/40">
                    <span className="block text-xl sm:text-2xl font-black text-green-600 dark:text-green-500">{results.correct}</span>
                    <span className="block text-[9px] uppercase font-bold text-muted-foreground mt-1">Correct Answers</span>
                  </div>
                  <div className="bg-acs-cream/60 p-4 rounded-xl border border-border/40">
                    <span className="block text-xl sm:text-2xl font-black text-red-500">{results.wrong}</span>
                    <span className="block text-[9px] uppercase font-bold text-muted-foreground mt-1">Wrong Answers</span>
                  </div>
                  <div className="bg-acs-cream/60 p-4 rounded-xl border border-border/40">
                    <span className="block text-xl sm:text-2xl font-black text-yellow-600 dark:text-yellow-500">{results.skipped}</span>
                    <span className="block text-[9px] uppercase font-bold text-muted-foreground mt-1">Skipped</span>
                  </div>
                </div>

                {/* Subject Scores Table */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-foreground">Sectional Performance Analysis</h3>
                  <div className="overflow-x-auto rounded-lg border border-border/40">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-acs-cream text-muted-foreground font-semibold">
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
                          <tr key={subKey} className="hover:bg-acs-cream/30">
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
                <div className="flex justify-center pt-4 border-t border-border/40">
                  <Button 
                    onClick={() => setStep(1)} 
                    className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-6 py-5 rounded-lg gap-2 text-xs"
                  >
                    <RefreshCw className="size-4" />
                    <span>Retake Assessment</span>
                  </Button>
                </div>
              </Card>

              {/* STUDY PLAN RECOMMENDATIONS */}
              <Card className="border border-border/40 bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
                <CardHeader className="p-0 border-b border-border/40 pb-4">
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
