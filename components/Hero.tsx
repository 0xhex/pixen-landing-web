'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="text-center">
          {/* App Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/appicon.png"
                alt="Pixen App Icon"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>

          {/* App Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Pixen
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 max-w-3xl mx-auto">
            Transform Your Photos with AI-Powered Templates
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Create stunning images and videos from your photos. Choose from hundreds of templates including Polaroid effects, oil paintings, animated videos, and more.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://apps.apple.com/app/pixen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
                alt="Download on the App Store"
                className="h-14 sm:h-16 w-auto"
              />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

