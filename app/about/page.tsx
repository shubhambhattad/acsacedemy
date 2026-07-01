'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import faculty from '@/data/faculty'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { 
  Flag, Building, Network, Layers, Wifi, Users, Rocket, 
  CheckCircle2, Quote 
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const timelineItems = [
  { 
    year: '2010', 
    icon: Flag, 
    milestone: 'Humble Beginnings', 
    title: 'ACS Academy Opens at Paud Road, Pune', 
    desc: "Mr. Tanmay Shah and Mrs. Sushmita Shah founded ACS Academy with a clear vision — to create a results-driven, student-focused coaching ecosystem. With small, concept-oriented batches, ACS immediately focused on Banking, SSC, Railway, CET and MPSC preparation.", 
    tags: ['Paud Road', 'Banking', 'SSC', 'MPSC'] 
  },
  { 
    year: '2012', 
    icon: Building, 
    milestone: 'Expansion Phase', 
    title: 'Head Office Established at Deccan Gymkhana', 
    desc: "The success of the Paud Road centre led to the establishment of ACS Academy's Head Office at Deccan Gymkhana, Pune — strategically located and accessible to aspirants across the city.", 
    tags: ['Deccan Gymkhana', 'Head Office', 'City-wide Reach'] 
  },
  { 
    year: '2014', 
    icon: Network, 
    milestone: 'Franchise Model Launch', 
    title: '4 New Centres Across Pune', 
    desc: "ACS Academy launched its franchise model, rolling out four new centres across Pune — Karve Road, Swargate, Vishrantwadi, and PCMC. Each centre upheld ACS's core philosophy of personalised coaching and expert faculty mentorship.", 
    tags: ['Karve Road', 'Vishrantwadi', 'PCMC', 'Franchise'] 
  },
  { 
    year: '2015', 
    icon: Layers, 
    milestone: 'Academic Diversification', 
    title: 'Expansion into MBA, Law, MCA, CUET & Defence', 
    desc: 'ACS Academy expanded coaching modules to cover the full spectrum of competitive and entrance examinations — MBA CET, MCA CET, CLAT, NDA, CDS, AFCAT, CUET, IPMAT, BBA and BCA.', 
    tags: ['MBA CET', 'CLAT', 'NDA/CDS', 'CUET', 'MPSC'] 
  },
  { 
    year: '2021', 
    icon: Wifi, 
    milestone: 'Digital Evolution', 
    title: 'Online & Hybrid Learning + "Lakshya" Initiative', 
    desc: 'ACS Academy integrated online and hybrid learning models. Specialised crash courses and strategy-based workshops were launched under the "Lakshya" initiative for Govt. Job preparation.', 
    tags: ['Hybrid Learning', 'Lakshya', 'Live Classes', 'Crash Courses'] 
  },
  { 
    year: '2023', 
    icon: Users, 
    milestone: 'Trusted Brand', 
    title: '1,00,000+ Students Milestone', 
    desc: "ACS Academy reached the landmark of over one lakh students mentored — cementing its reputation as one of Pune's most trusted coaching institutes for competitive examinations.", 
    tags: ['1 Lakh+ Students', 'Trusted Brand', 'Maharashtra'] 
  },
  { 
    year: '2026', 
    icon: Rocket, 
    milestone: 'Present Day', 
    title: "Pune's #1 Choice – 1,80,000+ Students Mentored", 
    desc: 'ACS Academy stands as Pune\'s most trusted coaching institute, having mentored over 1,80,000 aspirants across Banking, SSC, MBA, Defence, Law, MCA, CUET and Railway examinations.', 
    tags: ['1.8L+ Students', 'AI Learning', 'Pan-Maharashtra', 'PAN India'] 
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        
        {/* Header Hero */}
        <section className="bg-muted/30 border-b border-border/50 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
                Shaping Futures Since <span className="text-primary">2010</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                The story of ACS Academy is built on academic excellence, student-centric dedication, and a commitment to helping Pune&apos;s youth secure their dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg border border-border/80 min-h-[300px]">
                <Image 
                  src="/images/acs-team-banner.jpeg" 
                  alt="ACS Academy Team" 
                  fill 
                  className="object-cover" 
                  priority
                />
              </div>
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Who We Are</span>
                <h2 className="text-3xl font-extrabold text-foreground">
                  Why Thousands of Aspirants Trust <span className="text-primary">ACS Academy</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Founded with a singular vision — to make world-class competitive exam coaching accessible to every aspirant in Pune — ACS Academy has grown into one of Maharashtra&apos;s most trusted educational institutions. Located at Karve Road, Pune, we have been shaping futures for over 15 years.
                </p>
                
                {/* About Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Personalized Mentoring</h4>
                      <p className="text-[11px] text-muted-foreground">1-on-1 doubt sessions with expert faculty</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Hybrid Learning</h4>
                      <p className="text-[11px] text-muted-foreground">Attend class offline or online – your choice</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Recorded Lectures</h4>
                      <p className="text-[11px] text-muted-foreground">Revisit every class anytime, anywhere</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground">Small Batch Sizes</h4>
                      <p className="text-[11px] text-muted-foreground">More attention, better results</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <Link 
                    href="/contact" 
                    className={cn(
                      buttonVariants({ size: "lg" }), 
                      "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-full flex items-center justify-center"
                    )}
                  >
                    Book Free Counselling
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Founders Section */}
        <section className="py-20 bg-muted/20 border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Leadership
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-4 mb-3">
                The Visionaries Behind <span className="text-primary">ACS Academy</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Guided by educators who have dedicated their lives to student success.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Founder 1 */}
              <Card className="border border-border/80 bg-card overflow-hidden rounded-2xl flex flex-col md:flex-row shadow-sm">
                <div className="md:w-2/5 min-h-[300px] relative shrink-0">
                  <Image 
                    src="/images/tanmay-shah.jpg" 
                    alt="Mr. Tanmay Shah" 
                    fill 
                    className="object-cover object-top" 
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      Founder & CMD
                    </span>
                    <h3 className="text-xl font-bold text-foreground">Mr. Tanmay Shah</h3>
                    <p className="text-[11px] text-muted-foreground font-semibold">
                      MBA (Sales & Marketing) | Ex-Standard Chartered Bank | 25+ Years Experience
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                      The visionary founder of ACS Academy, Mr. Tanmay Shah has dedicated over 25 years to mentoring aspirants across competitive examinations. Under his guidance, ACS Academy has mentored over 1,80,000+ students and earned the prestigious India Education Award.
                    </p>
                  </div>
                  
                  {/* Quote block */}
                  <div className="relative pl-6 py-2 border-l-2 border-primary bg-muted/40 rounded-r-lg">
                    <Quote className="size-4 text-primary absolute left-2 top-2 opacity-30" />
                    <p className="text-[10px] italic text-foreground leading-relaxed">
                      &ldquo;Success is not merely about clearing an examination; it is about developing the right mindset.&rdquo;
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 border-t border-border/50 pt-4 text-center">
                    <div>
                      <span className="block text-xs font-black text-primary">25+</span>
                      <span className="block text-[8px] uppercase font-bold text-muted-foreground">Yrs Exp</span>
                    </div>
                    <div>
                      <span className="block text-xs font-black text-primary">1.8L+</span>
                      <span className="block text-[8px] uppercase font-bold text-muted-foreground">Mentored</span>
                    </div>
                    <div>
                      <span className="block text-xs font-black text-primary">15+</span>
                      <span className="block text-[8px] uppercase font-bold text-muted-foreground">Awards</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Founder 2 */}
              <Card className="border border-border/80 bg-card overflow-hidden rounded-2xl flex flex-col md:flex-row shadow-sm">
                <div className="md:w-2/5 min-h-[300px] relative shrink-0">
                  <Image 
                    src="/images/sushmita-shah.jpg" 
                    alt="Mrs. Sushmita Shah" 
                    fill 
                    className="object-cover object-top" 
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                      Managing Director
                    </span>
                    <h3 className="text-xl font-bold text-foreground">Mrs. Sushmita Shah</h3>
                    <p className="text-[11px] text-muted-foreground font-semibold">
                      Commerce Graduate | Ex-Bharti Branch Head | 20+ Years Leadership
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                      The dynamic force behind ACS Academy&apos;s brand, marketing and operations, Mrs. Sushmita Shah brings 20+ years of leadership across education, banking and insurance. Earlier honoured as Best Branch Head at Bharti Educational Institute and Best Team Leader – PAN India.
                    </p>
                  </div>
                  
                  {/* Quote block */}
                  <div className="relative pl-6 py-2 border-l-2 border-secondary bg-muted/40 rounded-r-lg">
                    <Quote className="size-4 text-secondary absolute left-2 top-2 opacity-30" />
                    <p className="text-[10px] italic text-foreground leading-relaxed">
                      &ldquo;Leadership is not about managing people; it is about inspiring them to believe in their potential.&rdquo;
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 border-t border-border/50 pt-4 text-center">
                    <div>
                      <span className="block text-xs font-black text-secondary">20+</span>
                      <span className="block text-[8px] uppercase font-bold text-muted-foreground">Yrs Exp</span>
                    </div>
                    <div>
                      <span className="block text-xs font-black text-secondary">3</span>
                      <span className="block text-[8px] uppercase font-bold text-muted-foreground">Sectors</span>
                    </div>
                    <div>
                      <span className="block text-xs font-black text-secondary">PAN India</span>
                      <span className="block text-[8px] uppercase font-bold text-muted-foreground">Award Won</span>
                    </div>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* Mentors / Faculty Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Our Mentors
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-4 mb-3">
                Learn from <span className="text-primary">Expert Faculty</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Industry veterans with proven track records of selections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((f) => (
                <Card key={f.id} className="border border-border/85 bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div className="relative h-64 w-full bg-muted border-b border-border/50 shrink-0">
                    <Image 
                      src={f.image} 
                      alt={f.name} 
                      fill 
                      className="object-cover object-top" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4">
                      <p className="text-xs italic text-white/95 leading-relaxed pl-3 border-l border-primary">
                        &ldquo;{f.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">{f.name}</h3>
                      <span className="block text-xs font-semibold text-primary">{f.role}</span>
                      <p className="text-[11px] text-muted-foreground leading-relaxed pt-2">
                        {f.qualification}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-border/40 pt-4 text-center text-xs">
                      <div>
                        <strong className="block text-foreground">{f.experience} Yrs</strong>
                        <span className="text-[10px] text-muted-foreground">Experience</span>
                      </div>
                      <div>
                        <strong className="block text-foreground">{f.selections}</strong>
                        <span className="text-[10px] text-muted-foreground">Selections</span>
                      </div>
                      <div>
                        <strong className="block text-foreground">{f.rating} ★</strong>
                        <span className="text-[10px] text-muted-foreground">Rating</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {f.subjects.map((sub) => (
                        <span key={sub} className="bg-muted text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Timeline Section */}
        <section className="py-20 bg-muted/20 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-4 mb-3">
                16 Years of <span className="text-primary">Transforming Lives</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                From a humble Paud Road classroom to Pune&apos;s top-ranked educational coaching institute.
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative border-l-2 border-primary/20 pl-6 sm:pl-8 space-y-12 ml-4">
              {timelineItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1 bg-background border-2 border-primary rounded-full text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-4" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-sm font-black text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs font-bold text-secondary uppercase tracking-wide">
                        {item.milestone}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="bg-muted text-[10px] font-semibold text-muted-foreground px-2 py-0.5 rounded border border-border/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
