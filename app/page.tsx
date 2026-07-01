import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MarqueeTicker from '@/components/sections/MarqueeTicker'
import WhyUs from '@/components/sections/WhyUs'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Counselling from '@/components/sections/Counselling'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <MarqueeTicker />
        <WhyUs />
        <GoogleReviews />
        <Counselling />
      </main>
      <Footer />
    </>
  )
}
