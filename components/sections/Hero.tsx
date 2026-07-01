'use client'

import Link from 'next/link'
import { Phone, Star, ShieldCheck, CheckCircle2, BookOpen, TrendingUp, Users, Award } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-acs-blue via-acs-blue-light to-acs-blue py-20 sm:py-28">
      {/* Decorative orbs */}
      <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-15%] h-[600px] w-[600px] rounded-full bg-acs-green/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-white/[0.02] blur-2xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/90">
              <span className="flex h-2 w-2 rounded-full bg-acs-green animate-ping" />
              <span>Pune&apos;s #1 Competitive Exam Coaching</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Crack Your Dream Exam{' '}
              <span className="text-acs-amber-light">With ACS Academy</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
              15+ years of excellence in competitive exam preparation. Personalized mentorship, offline classroom training, recorded sessions, and premium study materials.
            </p>

            {/* Exam Categories Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Banking', 'SSC & Railways', 'Defence', 'MBA CET/CAT', 'CLAT Law', 'MCA CET', 'CUET UG'].map((exam) => (
                <span 
                  key={exam} 
                  className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-md border border-white/15 backdrop-blur-sm hover:bg-white/15 transition-colors cursor-default"
                >
                  {exam}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/contact" 
                className={cn(
                  buttonVariants({ size: "lg" }), 
                  "bg-acs-green hover:bg-acs-green-light text-white font-bold px-7 py-6 rounded-full gap-2 shadow-lg shadow-acs-green/25 flex items-center justify-center text-sm"
                )}
              >
                <Phone className="size-4" />
                <span>Book Free Counselling</span>
              </Link>
              <Link 
                href="/courses" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }), 
                  "border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-7 py-6 rounded-full gap-2 flex items-center justify-center text-sm"
                )}
              >
                <BookOpen className="size-4" />
                <span>Explore Courses</span>
              </Link>
            </div>

            {/* Core Features list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              {[
                'Online + Offline Hybrid',
                'Expert Mentors',
                'Recorded Video Access',
                'Unlimited Library Rooms',
                'Comprehensive Test Series',
                'Doubt Solving Sessions',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-white/70">
                  <CheckCircle2 className="size-3.5 text-acs-green shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Frosted Stats Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-full glass rounded-2xl p-6 space-y-5 shadow-2xl shadow-black/20">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-acs-amber/20 rounded-xl">
                    <Award className="size-6 text-acs-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">ACS Success Portal</h3>
                    <p className="text-[10px] text-white/50">Updated Live for 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-acs-amber/20 text-acs-amber px-2.5 py-1 rounded-full text-[10px] font-bold">
                  <Star className="size-3 fill-current" />
                  <span>4.9</span>
                </div>
              </div>

              {/* Success Stats Cards inside */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '15+', label: 'Years Exp', icon: TrendingUp, color: 'text-acs-amber' },
                  { value: '10k+', label: 'Selections', icon: Award, color: 'text-acs-green' },
                  { value: '120+', label: 'MBA Picks', icon: Users, color: 'text-acs-amber-light' },
                  { value: '500+', label: 'Five Star Reviews', icon: Star, color: 'text-acs-green-light' },
                ].map((stat, idx) => {
                  const Icon = stat.icon
                  // Static color lookup for Tailwind CSS compile assurance
                  const iconColor = 
                    stat.color === 'text-acs-amber' ? 'text-acs-amber' :
                    stat.color === 'text-acs-green' ? 'text-acs-green' :
                    stat.color === 'text-acs-amber-light' ? 'text-acs-amber-light' :
                    stat.color === 'text-acs-green-light' ? 'text-acs-green-light' : 
                    'text-white'

                  return (
                    <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/8 text-center space-y-1.5 hover:bg-white/8 transition-colors">
                      <Icon className={cn("size-5 mx-auto", iconColor)} />
                      <span className="block text-xl sm:text-2xl font-black text-white">{stat.value}</span>
                      <span className="block text-[10px] uppercase font-bold text-white/45 tracking-wider">{stat.label}</span>
                    </div>
                  )
                })}
              </div>

              {/* Government Job Assurance banner */}
              <div className="rounded-xl bg-acs-green/10 p-4 border border-acs-green/20 flex items-start gap-3">
                <ShieldCheck className="size-5 text-acs-green shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">Government Job Assurance</h4>
                  <p className="text-[10px] text-white/55 leading-relaxed">
                    Intensive strategy, custom test modules, and expert interview guidance for top rankings in central & state exams.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
