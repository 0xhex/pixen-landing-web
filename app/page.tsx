import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TemplatesShowcase from '@/components/TemplatesShowcase'
import VideoShowcase from '@/components/VideoShowcase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <TemplatesShowcase />
      <Features />
      <VideoShowcase />
      <Footer />
    </main>
  )
}

