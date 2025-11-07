'use client'

import { useState, useEffect } from 'react'

interface Template {
  templateId: string
  templateType: 'image' | 'video'
  name: string
  description: string
  thumbnail?: string
  thumbnail_before?: string
  thumbnail_after?: string
  category: string
  usageCount?: number
  order: number
}

interface TemplatesData {
  templates: {
    trending?: Template[]
    for_you?: Template[]
    featured?: Template[]
    top_hits?: Template[]
    festival?: Template[]
  }
  categories: string[]
}

export default function TemplatesShowcase() {
  const [templates, setTemplates] = useState<TemplatesData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('trending')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('/api/templates')
        if (!response.ok) {
          throw new Error('Failed to fetch templates')
        }
        const data = await response.json()
        if (data.success) {
          console.log('Templates data:', data.data)
          // Log first template to debug
          const firstCategory = Object.keys(data.data.templates)[0]
          if (firstCategory && data.data.templates[firstCategory]?.[0]) {
            console.log('First template:', data.data.templates[firstCategory][0])
            console.log('Thumbnail URLs:', {
              before: data.data.templates[firstCategory][0].thumbnail_before,
              after: data.data.templates[firstCategory][0].thumbnail_after,
            })
          }
          setTemplates(data.data)
        } else {
          throw new Error(data.message || 'Failed to fetch templates')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Failed to fetch templates:', err)
        // Set mock data for demo purposes if API fails
        setTemplates({
          templates: {
            trending: [
              {
                templateId: 'polaroid',
                templateType: 'image',
                name: 'Polaroid',
                description: 'Transform your photo into a vintage Polaroid instant picture',
                thumbnail: '/appicon.png',
                category: 'trending',
                usageCount: 1245,
                order: 1,
              },
              {
                templateId: 'disco_ball',
                templateType: 'video',
                name: 'Disco Ball',
                description: 'Animated disco ball effect with your photo',
                thumbnail: '/appicon.png',
                category: 'trending',
                usageCount: 890,
                order: 2,
              },
            ],
          },
          categories: ['trending', 'for_you', 'featured', 'top_hits', 'festival'],
        })
      } finally {
        setLoading(false)
      }
    }

    fetchTemplates()
  }, [])

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

    const element = document.getElementById('templates-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const categoryLabels: Record<string, string> = {
    trending: 'Trending',
    for_you: 'For You',
    featured: 'Featured',
    top_hits: 'Top Hits',
    festival: 'Festival',
  }

  // Get templates for the selected category directly from the API response structure
  const getCurrentTemplates = () => {
    if (!templates) return []
    // The API returns templates organized by category, so we access them directly
    const categoryKey = selectedCategory as keyof typeof templates.templates
    return templates.templates[categoryKey] || []
  }

  const currentTemplates = getCurrentTemplates()

  return (
    <section id="templates-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from hundreds of creative templates to transform your photos
          </p>
        </div>

        {/* Category Tabs */}
        {templates && templates.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {templates.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        )}

        {/* Templates Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-600">Loading templates...</p>
          </div>
        ) : error && !templates ? (
          <div className="text-center py-20">
            <p className="text-red-600">Error loading templates: {error}</p>
          </div>
        ) : currentTemplates.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600">No templates available in this category.</p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {currentTemplates.map((template) => (
              <div
                key={template.templateId}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                  {(() => {
                    // Helper function to check if URL is a video
                    const isVideo = (url: string) => /\.(mp4|webm|mov|avi)$/i.test(url)
                    
                    // Helper function to render image or video thumbnail
                    const renderThumbnail = (src: string, alt: string, isAfter = false) => {
                      if (isVideo(src)) {
                        return (
                          <video
                            src={src}
                            className="w-full h-full object-cover"
                            autoPlay={isAfter}
                            muted
                            playsInline
                            loop
                            onError={(e) => {
                              console.error('Video load error:', src, e)
                              const target = e.target as HTMLVideoElement
                              target.style.display = 'none'
                            }}
                            onLoadStart={() => console.log('Video loading:', src)}
                          />
                        )
                      }
                      return (
                        <img
                          src={src}
                          alt={alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            console.error('Image load error:', src, e)
                            const target = e.target as HTMLImageElement
                            target.src = '/appicon.png'
                          }}
                          onLoad={() => console.log('Image loaded successfully:', src)}
                          onLoadStart={() => console.log('Image loading started:', src)}
                        />
                      )
                    }

                    // Debug logging
                    console.log('Template:', template.templateId, {
                      thumbnail_before: template.thumbnail_before,
                      thumbnail_after: template.thumbnail_after,
                      thumbnail: template.thumbnail,
                    })

                    if (template.thumbnail_before && template.thumbnail_after) {
                      // Before/After Comparison View
                      return (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 flex">
                            <div className="relative w-1/2 h-full overflow-hidden bg-gray-200">
                              {renderThumbnail(template.thumbnail_before, `${template.name} - Before`)}
                              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                                Before
                              </div>
                            </div>
                            <div className="relative w-1/2 h-full overflow-hidden border-l-2 border-white bg-gray-200">
                              {renderThumbnail(template.thumbnail_after, `${template.name} - After`, true)}
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                                After
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    } else if (template.thumbnail) {
                      // Single Thumbnail View
                      return (
                        <div className="w-full h-full">
                          {isVideo(template.thumbnail) ? (
                            <video
                              src={template.thumbnail}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              muted
                              playsInline
                              loop
                              onError={(e) => {
                                const target = e.target as HTMLVideoElement
                                target.style.display = 'none'
                              }}
                            />
                          ) : (
                            <img
                              src={template.thumbnail}
                              alt={template.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = '/appicon.png'
                              }}
                            />
                          )}
                        </div>
                      )
                    } else if (template.thumbnail_before) {
                      // Fallback to thumbnail_before
                      return (
                        <div className="w-full h-full">
                          {renderThumbnail(template.thumbnail_before, template.name)}
                        </div>
                      )
                    } else if (template.thumbnail_after) {
                      // Fallback to thumbnail_after
                      return (
                        <div className="w-full h-full">
                          {renderThumbnail(template.thumbnail_after, template.name)}
                        </div>
                      )
                    } else {
                      // No thumbnail available
                      return (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-6xl">{template.templateType === 'video' ? '🎬' : '🎨'}</div>
                        </div>
                      )
                    }
                  })()}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      template.templateType === 'video'
                        ? 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {template.templateType === 'video' ? 'VIDEO' : 'IMAGE'}
                    </span>
                  </div>
                  {template.usageCount && (
                    <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      {template.usageCount.toLocaleString()} uses
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

