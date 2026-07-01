'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Send, ExternalLink, Youtube, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-acs-slate text-white/80">
      {/* Top Footer Section */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo.jpeg" 
                alt="ACS Academy" 
                className="h-10 w-auto rounded object-contain brightness-110" 
                width={140} 
                height={44} 
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed">
              Your Complete Preparation Partner for Competitive Exams. 15+ years of excellence in coaching banking, government, MBA, defence, law, and technical entrance exams.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { label: 'YouTube', href: '#', icon: Youtube, hoverBg: 'hover:bg-[#FF0000]' },
                { label: 'Instagram', href: '#', icon: Instagram, hoverBg: 'hover:bg-[#E1306C]' },
                { label: 'Facebook', href: '#', icon: Facebook, hoverBg: 'hover:bg-[#1877F2]' },
                { label: 'WhatsApp', href: 'https://wa.me/918149895185', icon: MessageCircle, hoverBg: 'hover:bg-[#25D366]' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:text-white transition-all" 
                    aria-label={social.label}
                  >
                    <Icon className="size-4.5" />
                  </a>
                )
              })}
            </div>
            {/* Google Rating */}
            <div className="flex items-center gap-2 text-xs font-semibold text-white/50 bg-white/5 p-2.5 rounded-lg w-fit border border-white/8">
              {/* Inline Google G logo as SVG to avoid next/image remote config */}
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-acs-amber">★★★★★</span>
              <span>4.9/5 (500+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 md:ml-4 lg:ml-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><Link href="/" className="hover:text-acs-amber transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-acs-amber transition-colors">About ACS Academy</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">Our Courses</Link></li>
              <li><Link href="/assessment" className="hover:text-acs-amber transition-colors">Free Test</Link></li>
              <li><Link href="/blog" className="hover:text-acs-amber transition-colors">Blog & Strategy</Link></li>
              <li><Link href="/contact" className="hover:text-acs-amber transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Courses</h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">Banking Exams (IBPS/SBI)</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">SSC & Govt. Exams</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">MBA CET / CAT / CMAT</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">Defence (NDA/CDS)</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">Law (CLAT / LAW CET)</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">CUET / BBA Entrance</Link></li>
              <li><Link href="/courses" className="hover:text-acs-amber transition-colors">MCA CET / NIMCET</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li className="flex gap-2">
                <MapPin className="size-5 shrink-0 text-acs-amber" />
                <span>Karve Road, Kothrud, Pune – 411038</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-acs-amber" />
                <a href="tel:+918149895185" className="hover:text-acs-amber transition-colors">+91 81498 95185</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-acs-amber" />
                <a href="mailto:info@acsacademy.co.in" className="hover:text-acs-amber transition-colors">info@acsacademy.co.in</a>
              </li>
            </ul>
            {/* Newsletter */}
            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Newsletter</h5>
              <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full bg-white/8 border border-white/10 px-3 py-2 text-xs rounded-l-md focus:ring-1 focus:ring-acs-amber/50 focus:border-acs-amber/30 outline-none text-white/80 placeholder:text-white/30"
                />
                <Button type="submit" size="icon" className="h-[34px] rounded-l-none rounded-r-md bg-acs-amber hover:bg-acs-amber-light text-acs-slate">
                  <Send className="size-3.5" />
                </Button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/8 bg-black/20 py-5 text-center text-xs text-white/40">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 sm:px-6">
          <p>© 2026 ACS Academy. All Rights Reserved. | Designed & Developed by <strong className="text-white/55">Priyam IT Services Pvt Ltd</strong></p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-acs-amber transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-acs-amber transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-acs-amber transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-acs-amber transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
