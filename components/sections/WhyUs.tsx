'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Target, Presentation, Award, BookOpen, Laptop, Smartphone, Building, Handshake } from 'lucide-react'

const cards = [
  { icon: Target, title: 'Preparation Strategy', desc: 'Proven strategies: Fundamental → Top & Recent Level → Latest & Newest Pattern → Previous Year Papers', accent: 'border-l-acs-blue' },
  { icon: Presentation, title: 'Teaching Modules', desc: 'Offline Classroom + Interactive Live Classes + Recorded Video Courses + Revision Sessions', accent: 'border-l-acs-green' },
  { icon: Award, title: 'Expert Faculty', desc: '10-12 years experienced faculty, Officers in Government Sectors, MPSC & IBPS Panel Members', accent: 'border-l-acs-amber' },
  { icon: BookOpen, title: 'Study Material', desc: 'Adda247 Study Material, Quantitative Aptitude, Reasoning, English, GK, Current Affairs & more', accent: 'border-l-acs-blue-light' },
  { icon: Laptop, title: 'Online Test Series', desc: 'Topic-wise tests, Mock Tests, Previous Year Paper Tests with detailed performance analysis', accent: 'border-l-acs-green' },
  { icon: Smartphone, title: 'Premium Mobile App', desc: 'AI-Based Digital Board Learning with Modern Technology – learn anytime, anywhere', accent: 'border-l-acs-amber' },
  { icon: Building, title: 'Library Facilities', desc: 'Spacious reading room, vast collection of books, quiet study space at our Karve Road centre', accent: 'border-l-acs-blue' },
  { icon: Handshake, title: 'Interview Preparation', desc: 'Complete personality development, group discussions, and mock interview sessions', accent: 'border-l-acs-green' },
]

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '1.8L+', label: 'Students Mentored' },
  { value: '98%', label: 'Student Satisfaction' },
  { value: '50+', label: 'Expert Faculty' },
  { value: '7+', label: 'Exam Categories' },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-acs-cream" id="why-us">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-acs-blue bg-acs-blue/10 px-3.5 py-1.5 rounded-full">
            Why Choose ACS Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-5 mb-3 text-foreground">
            Features That Make Us <span className="text-acs-blue">Unbeatable</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            A comprehensive ecosystem designed specifically for competitive exam success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, idx) => {
            const Icon = c.icon
            return (
              <Card 
                key={idx} 
                className={`group relative border-l-4 ${c.accent} border border-border/60 hover:border-border transition-all duration-300 hover:shadow-md bg-white`}
              >
                <CardHeader className="pb-2">
                  <div className="p-2.5 rounded-xl bg-acs-blue/5 group-hover:bg-acs-blue/10 text-acs-blue transition-colors w-fit">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-sm font-bold text-foreground mt-3 group-hover:text-acs-blue transition-colors">
                    {c.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Grid — Dark Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 bg-acs-slate p-8 sm:p-10 rounded-2xl text-center shadow-lg">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1.5">
              <span className="block text-2xl sm:text-3xl font-black text-acs-amber">{s.value}</span>
              <span className="block text-[11px] font-semibold text-white/60 uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
