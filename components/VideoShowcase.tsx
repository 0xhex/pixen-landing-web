'use client'

import { useState, useEffect, useRef } from 'react'

export default function VideoShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('video-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="video-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            See Pixen in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Watch how easy it is to transform your photos into amazing creations
          </p>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              src="/splash_open_video.mp4"
              className="w-full h-auto"
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              poster="/appicon.png"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Get results in seconds</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Templates</h3>
              <p className="text-gray-600">Hundreds of styles to choose from</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple interface, powerful results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

