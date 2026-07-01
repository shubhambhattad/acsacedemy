'use client'

import { useEffect } from 'react'
import { Star } from 'lucide-react'

export default function GoogleReviews() {
  useEffect(() => {
    const existing = document.querySelector('script[src*="jotform.com/website-widgets"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://www.jotform.com/website-widgets/embed/019f0ff07a817743a3dbf48397eed2c640f3'
      document.getElementById('JFWebsiteWidget-019f0ff07a817743a3dbf48397eed2c640f3')?.after(script)
    }
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-b from-amber-50/60 via-amber-50/30 to-acs-cream overflow-hidden" id="google-reviews">
      {/* Decorative stars */}
      <div className="absolute top-12 left-[10%] text-acs-amber/15 animate-float">
        <Star className="size-16 fill-current" />
      </div>
      <div className="absolute bottom-16 right-[8%] text-acs-amber/10 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="size-12 fill-current" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-acs-amber bg-acs-amber/10 px-3.5 py-1.5 rounded-full border border-acs-amber/20">
            ★ Student Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-5 mb-3 text-foreground">
            What Students Say on <span className="text-acs-blue">Google</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Real feedback from successful candidates — straight from our Google Business profile.
          </p>
          {/* Inline rating summary */}
          <div className="inline-flex items-center gap-2 mt-4 bg-white border border-acs-amber/25 rounded-full px-4 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="size-4 text-acs-amber fill-acs-amber" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.9</span>
            <span className="text-xs text-muted-foreground">(500+ reviews)</span>
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border-2 border-acs-amber/20 bg-white p-4 sm:p-6 shadow-sm">
          <div id="JFWebsiteWidget-019f0ff07a817743a3dbf48397eed2c640f3"></div>
        </div>
      </div>
    </section>
  )
}
