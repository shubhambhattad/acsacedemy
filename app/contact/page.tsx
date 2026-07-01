'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        
        {/* Header Hero */}
        <section className="bg-gradient-to-r from-acs-blue/5 via-acs-green/5 to-acs-blue/5 border-b border-border/40 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/10 mb-4 inline-block">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Get in Touch with <span className="text-acs-blue-light">Our Team</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Have questions about our syllabus, timing, fees, or demo lectures? Write to us, give us a call, or visit our centre at Karve Road, Pune.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <Contact />

        {/* Interactive Query Form Section */}
        <section className="py-16 bg-gradient-to-b from-background via-acs-cream/50 to-background border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <Card className="border border-border/40 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="space-y-2 mb-6">
                  <h2 className="text-xl font-bold text-foreground">Send Us a Direct Message</h2>
                  <p className="text-xs text-muted-foreground">Fill in the form below and our coordinators will reach back in 24 hours.</p>
                </div>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-10 space-y-3">
                    <CheckCircle2 className="size-14 text-secondary animate-bounce" />
                    <h3 className="text-lg font-bold text-foreground">Message Received!</h3>
                    <p className="text-xs text-muted-foreground">Thank you for writing. We will contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground/80">Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Your name"
                          className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground/80">Phone Number *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="10-digit number"
                          pattern="[0-9]{10}"
                          className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Your Message *</label>
                      <textarea 
                        required 
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none resize-none transition-all"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold py-6 rounded-lg shadow-sm shadow-primary/20">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <FAQ />

      </main>
      <Footer />
    </>
  )
}
