"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { useLeadershipData } from "@/hooks/use-leadership-data"
import { useHtmlContent } from "@/hooks/use-html-content"

export default function IntellectualAssetsSection() {
  const { data: intellectualAssets, loading, error } = useLeadershipData()
  const [currentIndex, setCurrentIndex] = useState(0)
  const AUTOPLAY_INTERVAL = 5000 // ms - slightly longer than infrastructure section

  // Navigation functions similar to infrastructure section
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? (intellectualAssets?.length || 1) - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === (intellectualAssets?.length || 1) - 1 ? 0 : prevIndex + 1
    )
  }

  // Autoplay effect
  useEffect(() => {
    if (!intellectualAssets || intellectualAssets.length <= 1) return
    
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === intellectualAssets.length - 1 ? 0 : prevIndex + 1))
    }, AUTOPLAY_INTERVAL)
    
    return () => clearInterval(id)
  }, [intellectualAssets])

  // Show loading state
  if (loading) {
    return (
      <section className="relative py-16 font-figtree overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrouds/blue-2.svg"
            alt="Blue striped background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-[#3048cd]" />
            <span className="text-lg text-[#2A2A2F]">Loading leadership profiles...</span>
          </div>
        </div>
      </section>
    )
  }

  // Show error state
  if (error) {
    return (
      <section className="relative py-16 font-figtree overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrouds/blue_bg.svg"
            alt="Blue striped background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-red-600 mb-4">Failed to load leadership profiles</p>
            <p className="text-sm text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  // Show empty state
  if (!intellectualAssets || intellectualAssets.length === 0) {
    return (
      <section className="relative py-16 font-figtree overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrouds/blue-2.svg"
            alt="Blue striped background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-[#2A2A2F]">No leadership profiles available</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative mb-10 py-16 font-figtree overflow-hidden">
      {/* Blue striped background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrouds/blue-2.svg"
          alt="Blue striped background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Title - 25% width (shows first on mobile, last on desktop) */}
          <div className="lg:ml-8 mb-8 lg:mt-0 lg:text-left order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">OUR</h2>
            <h2 className="text-[3rem] md:text-6xl leading-none font-extrabold text-white">INTELLECTUAL</h2>
            <h2 className="text-[3rem] md:text-6xl leading-none font-extrabold text-[#6bc533]">ASSETS</h2>
          </div>

          {/* Content Card - 75% width with sliding container */}
          <div className="bg-white min-h-[560px] shadow-lg w-full lg:w-3/4 mx-auto lg:mx-0 relative rounded-xl order-2 lg:order-1 overflow-hidden">
            
            {/* Sliding container */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${intellectualAssets.length * 100}%`
              }}
            >
              {intellectualAssets.map((asset, index) => (
                <div key={asset.id || index} className="w-full h-full flex-shrink-0 p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
                    {/* Left side - Image with rounded corners */}
                    <div className="relative h-[300px] md:h-[460px] overflow-hidden">
                      <Image
                        src={asset.image || "/placeholder.svg"}
                        alt={asset.name}
                        fill
                        className="object-cover object-center rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg"
                        }}
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-4">
                      {/* Quote icon */}
                      <div className="h-12 w-16 relative">
                        <Image
                          src="/images/icons/quote-icon.png"
                          alt="Quote"
                          width={60}
                          height={48}
                          className="object-contain"
                        />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-[#2A2A2F]">{asset.quote}</h3>

                      <div className="text-[#2A2A2F] text-base">
                        {asset.description && asset.description.length > 300 
                          ? `${asset.description.substring(0, 300)}...` 
                          : asset.description
                        }
                      </div>

                      <div className="pt-4 flex flex-col items-start gap-4">
                        {/* Read More button */}
                        <Link
                          href="/about/leadership"
                          className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-4 py-2 rounded-full hover:bg-[#5aa428] transition-colors text-sm"
                        >
                          Read More <ArrowRight className="h-4 w-4" />
                        </Link>
                        
                        {/* Name and position */}
                        <div
                          className="bg-[#6bc533] text-white px-4 py-2 flex flex-wrap items-center"
                          style={{
                            borderLeft: "4px solid #3048cd",
                            borderTopRightRadius: "30px",
                            borderBottomRightRadius: "30px",
                          }}
                        >
                          <span className="font-bold">{asset.name},</span> {asset.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons - only show if there are multiple items */}
            {intellectualAssets.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm text-[#3048cd] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-white"
                  aria-label="Previous profile"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm text-[#3048cd] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-white"
                  aria-label="Next profile"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Progress indicator dots - only show if there are multiple items
            {intellectualAssets.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {intellectualAssets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-[#6bc533] scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  )
}
