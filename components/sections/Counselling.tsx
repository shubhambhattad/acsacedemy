'use client'

import { useState } from 'react'
import { CheckCircle, Phone, CalendarRange, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Counselling() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-acs-blue/[0.04] via-background to-acs-green/[0.03] overflow-hidden" id="counselling">
      {/* Decorative */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-acs-blue/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-acs-green/5 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-acs-green bg-acs-green/10 px-3.5 py-1.5 rounded-full border border-acs-green/20">
              Free Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Book Your <span className="text-acs-blue">Free Counselling</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Talk to our expert counsellors and get a personalized study plan for your target exam. 100% free, no obligations.
            </p>

            {/* Feature list with colored background */}
            <div className="bg-white border border-border/60 rounded-xl p-5 space-y-3 shadow-sm">
              {[
                'Personalized study plan & strategy',
                'Exam selection & eligibility guidance',
                'Batch & timing recommendations',
                'Fee structure & installment options',
                'Scholarship assessment options',
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-foreground/80 font-medium">
                  <CheckCircle className="size-4 text-acs-green shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+918149895185"
                className="flex items-center gap-2 text-sm font-semibold text-acs-blue hover:underline"
              >
                <Phone className="size-4" />
                <span>+91 81498 95185</span>
              </a>
              <a
                href="https://wa.me/918149895185"
                className="flex items-center gap-2 text-sm font-semibold text-acs-green hover:underline"
              >
                <Sparkles className="size-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <Card className="border border-border/60 shadow-lg bg-white rounded-2xl overflow-hidden">
              {/* Blue gradient top bar */}
              <div className="h-1.5 bg-gradient-to-r from-acs-blue via-acs-blue-light to-acs-green" />
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6 text-foreground">Get Free Counselling</h3>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="p-4 bg-acs-green/10 rounded-full">
                      <CheckCircle className="size-12 text-acs-green" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Thank You!</h4>
                    <p className="text-sm text-muted-foreground">Our team will call you shortly to schedule your session.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="f-name" className="text-xs font-semibold text-foreground/80">Full Name *</label>
                        <input
                          type="text"
                          id="f-name"
                          name="name"
                          placeholder="Your full name"
                          required
                          className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-acs-blue/20 focus:border-acs-blue/40 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="f-phone" className="text-xs font-semibold text-foreground/80">Phone Number *</label>
                        <input
                          type="tel"
                          id="f-phone"
                          name="phone"
                          placeholder="+91 XXXXXXXXXX"
                          required
                          pattern="[0-9]{10}"
                          className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-acs-blue/20 focus:border-acs-blue/40 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="f-email" className="text-xs font-semibold text-foreground/80">Email Address</label>
                        <input
                          type="email"
                          id="f-email"
                          name="email"
                          placeholder="your@email.com"
                          className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-acs-blue/20 focus:border-acs-blue/40 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="f-exam" className="text-xs font-semibold text-foreground/80">Target Exam *</label>
                        <select
                          id="f-exam"
                          name="exam"
                          required
                          className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-acs-blue/20 focus:border-acs-blue/40 outline-none transition-all text-muted-foreground"
                        >
                          <option value="">Select Exam</option>
                          <option>IBPS PO</option>
                          <option>SBI PO</option>
                          <option>MBA CET</option>
                          <option>CAT</option>
                          <option>SSC CGL</option>
                          <option>NDA/CDS</option>
                          <option>CLAT</option>
                          <option>CUET</option>
                          <option>MCA CET</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="f-batch" className="text-xs font-semibold text-foreground/80">Preferred Batch</label>
                      <select
                        id="f-batch"
                        name="batch"
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-acs-blue/20 focus:border-acs-blue/40 outline-none transition-all text-muted-foreground"
                      >
                        <option value="">Select Batch Timing</option>
                        <option>8:00 AM – 10:30 AM</option>
                        <option>10:30 AM – 1:00 PM</option>
                        <option>1:00 PM – 3:30 PM</option>
                        <option>4:00 PM – 6:30 PM</option>
                        <option>6:30 PM – 9:00 PM</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="f-msg" className="text-xs font-semibold text-foreground/80">Message (Optional)</label>
                      <textarea
                        id="f-msg"
                        name="message"
                        placeholder="Any specific queries..."
                        rows={3}
                        className="w-full bg-acs-cream border border-border/50 px-4 py-2.5 text-sm rounded-lg focus:ring-2 focus:ring-acs-blue/20 focus:border-acs-blue/40 outline-none transition-all resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-acs-blue hover:bg-acs-blue-light text-white font-semibold py-6 rounded-lg gap-2 text-sm shadow-md shadow-acs-blue/15">
                      <CalendarRange className="size-4" />
                      <span>Book Free Counselling</span>
                    </Button>
                    <p className="text-[10px] text-muted-foreground text-center">
                      By submitting, you agree to be contacted by ACS Academy.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
