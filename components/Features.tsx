'use client'

import { useState, useEffect } from 'react'

const features = [
  {
    icon: '🎨',
    title: 'Image Templates',
    description: 'Transform your photos into stunning artworks with templates like Polaroid, Oil Painting, Ghostface, and more.',
  },
  {
    icon: '🎬',
    title: 'Video Templates',
    description: 'Bring your photos to life with animated effects like Disco Ball, Dancing, Floating, and other creative videos.',
  },
  {
    icon: '⚡',
    title: 'Fast Generation',
    description: 'Get your transformed images in 30-60 seconds and videos in 2-4 minutes with our powerful AI technology.',
  },
  {
    icon: '🎯',
    title: 'Easy to Use',
    description: 'Simply upload your photo, choose a template, and watch the magic happen. No design skills required.',
  },
  {
    icon: '🌟',
    title: 'Premium Quality',
    description: 'Powered by Luma AI, ensuring high-quality results with professional-grade transformations.',
  },
  {
    icon: '💎',
    title: 'Credit System',
    description: 'Flexible credit-based pricing. Image templates start at 4 credits, video templates at 18 credits.',
  },
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('features-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="features-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your photos into amazing creations
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

