import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const onest = Onest({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-onest',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ACS Academy Pune | Best Coaching for Banking, SSC, MBA, Defence, Law, MCA & CUET',
  description: 'ACS Academy Pune – 15+ years of excellence in competitive exam coaching. Expert coaching for Banking (IBPS, SBI, RBI), SSC, MBA CET/CAT, NDA/CDS Defence, CLAT Law, MCA CET, CUET & more. Join 10,000+ successful students.',
  keywords: 'ACS Academy Pune, Best Banking Coaching Pune, SSC Coaching Pune, MBA CET Coaching Pune, NDA Coaching Pune, CLAT Coaching Pune, MCA CET Coaching Pune, CUET Coaching Pune, Competitive Exam Coaching Kothrud Pune',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  alternates: { canonical: 'https://www.acsacademy.co.in/' },
  openGraph: {
    title: 'ACS Academy Pune | Best Competitive Exam Coaching',
    description: "Pune's #1 coaching institute for Banking, SSC, MBA, Defence, Law, MCA & CUET. 15+ years, 10,000+ selections.",
    url: 'https://www.acsacademy.co.in/',
    siteName: 'ACS Academy Pune',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://www.acsacademy.co.in/images/acs-team-banner.jpeg', width: 1200, height: 630, alt: 'ACS Academy Pune' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACS Academy Pune | Best Competitive Exam Coaching',
    description: "Pune's #1 coaching for Banking, SSC, MBA, Defence, Law, MCA & CUET. 15+ years excellence.",
    images: ['https://www.acsacademy.co.in/images/acs-team-banner.jpeg'],
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5049;73.8262',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  name: 'ACS Academy',
  url: 'https://www.acsacademy.co.in/',
  logo: 'https://www.acsacademy.co.in/images/logo.jpeg',
  telephone: '+918149895185',
  email: 'info@acsacademy.co.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Karve Road, Kothrud',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411038',
    addressCountry: 'IN',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2847', bestRating: '5' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(onest.variable)}>
      <head>
        <link rel="icon" href="/logo.jpeg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
