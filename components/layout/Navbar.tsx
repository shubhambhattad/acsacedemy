'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About Us', href: '/about' },
  { label: 'Free Test', href: '/assessment' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "border-b border-border/80 bg-white/95 backdrop-blur-md shadow-sm" 
          : "border-b border-transparent bg-white"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Image
            src="/images/logo.jpeg"
            alt="ACS Academy"
            width={140}
            height={44}
            className="h-10 w-auto rounded object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-acs-blue relative py-1.5",
                  isActive ? "text-acs-blue font-semibold" : "text-foreground/70"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-acs-blue rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA / Contacts */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+918149895185"
            className="flex items-center gap-1.5 text-sm font-semibold text-foreground/60 hover:text-acs-blue transition-colors"
          >
            <Phone className="size-4" />
            <span>+91 81498 95185</span>
          </a>
          <Link 
            href="/contact" 
            className={cn(
              buttonVariants({ size: "sm" }), 
              "bg-acs-blue hover:bg-acs-blue-light text-white font-semibold px-5 rounded-full shadow-sm shadow-acs-blue/15"
            )}
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="flex items-center justify-center p-2 rounded-md text-foreground/60 hover:text-foreground md:hidden outline-none focus:ring-2 focus:ring-acs-blue/20"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "absolute top-16 left-0 w-full bg-white border-b border-border shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-[80vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="container mx-auto px-6 flex flex-col gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "text-base font-semibold py-1 transition-colors hover:text-acs-blue",
                  isActive ? "text-acs-blue border-l-2 border-acs-blue pl-2" : "text-foreground/70 pl-2"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <hr className="border-border my-1" />
          <div className="flex flex-col gap-4 px-2">
            <a
              href="tel:+918149895185"
              className="flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-acs-blue transition-colors"
            >
              <Phone className="size-4 text-acs-blue" />
              <span>+91 81498 95185</span>
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={cn(
                buttonVariants(),
                "w-full bg-acs-blue hover:bg-acs-blue-light text-white font-semibold rounded-full text-center"
              )}
            >
              Book Free Counselling
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
