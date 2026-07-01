'use client'

import faqs from '@/data/faq'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const accentColors = [
  'hover:border-l-acs-blue data-[state=open]:border-l-acs-blue',
  'hover:border-l-acs-green data-[state=open]:border-l-acs-green',
  'hover:border-l-acs-amber data-[state=open]:border-l-acs-amber',
]

export default function FAQ() {
  return (
    <section className="py-20 bg-acs-cream" id="faq">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-acs-blue bg-acs-blue/10 px-3.5 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-5 mb-3 text-foreground">
            Frequently Asked <span className="text-acs-blue">Questions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Got questions? We have got answers. If you cannot find what you are looking for, feel free to reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-sm">
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`faq-${i}`}
                className={`border border-border/50 border-l-4 border-l-transparent rounded-xl px-4 transition-all duration-200 ${accentColors[i % accentColors.length]}`}
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
