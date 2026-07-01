'use client'

import { MapPin, Phone, Mail, Clock, Calendar, Bus, Car, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Contact() {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-3">
            Visit <span className="text-primary">Our Centre</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            We are centrally located in Pune. Drop by for a face-to-face consultation, demo class, or to view our libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card Column */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <Card className="border border-border/80 bg-card p-6 rounded-2xl shadow-sm">
              <CardContent className="p-0 flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
                  <MapPin className="size-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">ACS Academy – Karve Road</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Karve Road, Kothrud, Pune – 411038, Maharashtra
                  </p>
                  <a
                    href="https://share.google/kiTOX9tBaic6de4KT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Branch Meta Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border border-border/60 bg-muted/20 p-4 rounded-xl">
                <CardContent className="p-0 flex gap-3 items-start">
                  <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-foreground">Mon – Sat</strong>
                    <span className="text-[11px] text-muted-foreground">7:30 AM – 10:30 PM</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-border/60 bg-muted/20 p-4 rounded-xl">
                <CardContent className="p-0 flex gap-3 items-start">
                  <Calendar className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-foreground">Sunday</strong>
                    <span className="text-[11px] text-muted-foreground">9:00 AM – 2:00 PM</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-border/60 bg-muted/20 p-4 rounded-xl">
                <CardContent className="p-0 flex gap-3 items-start">
                  <Bus className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-foreground">Bus Stop</strong>
                    <span className="text-[11px] text-muted-foreground">Karve Statue, Kothrud</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-border/60 bg-muted/20 p-4 rounded-xl">
                <CardContent className="p-0 flex gap-3 items-start">
                  <Car className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-foreground">Parking</strong>
                    <span className="text-[11px] text-muted-foreground">Available on premises</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details Card */}
            <Card className="border border-border/80 bg-card p-6 rounded-2xl shadow-sm">
              <CardContent className="p-0 space-y-4">
                <div className="flex gap-3 items-center text-sm">
                  <Phone className="size-4 text-primary shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Call or WhatsApp:</span>{' '}
                    <a href="tel:+918149895185" className="font-bold text-foreground hover:text-primary hover:underline">
                      +91 81498 95185
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-center text-sm">
                  <Mail className="size-4 text-primary shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Email:</span>{' '}
                    <a href="mailto:info@acsacademy.co.in" className="font-bold text-foreground hover:text-primary hover:underline">
                      info@acsacademy.co.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden border border-border/80 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.319850983944!2d73.82621507506404!3d18.50491928253955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf59ec60e2f1%3A0xabcdefabcdef1234!2sKarve%20Rd%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1719500000000"
              width="100%"
              height="100%"
              style={{ border: '0', minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ACS Academy Location Map"
              className="absolute inset-0 w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
