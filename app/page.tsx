import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductSection from '@/components/ProductsSection'
import ReviewCarousel from '@/components/ReviewCarousel'
import MeetupSection from '@/components/MeetupSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <ReviewCarousel />
        <MeetupSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}