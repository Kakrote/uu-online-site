"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SafeHtml } from './SafeHtml'

interface Testimonial {
  id: number
  name: string
  degree: string
  program: string
  quote: string
  testimonial: string
  image: string
  companyLogo: string
}

export default function StudentTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  // Fetch testimonials data from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://uucms.uudoon.in/api/testimonials/?format=json")

        if (!response.ok) {
          throw new Error(`Failed to fetch testimonials: ${response.status}`)
        }

        const data = await response.json()
        setTestimonials(data)
        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching testimonials:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch testimonials")
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Update visible testimonials based on screen size
  const updateVisibleTestimonials = () => {
    if (window.innerWidth < 768) {
      setVisibleTestimonials(1)
    } else if (window.innerWidth < 1024) {
      setVisibleTestimonials(2)
    } else {
      setVisibleTestimonials(3)
    }
  }

  // Initialize visible testimonials on client side
 useEffect(() => {
  const updateVisibleTestimonials = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }
  }

  updateVisibleTestimonials()
  window.addEventListener("resize", updateVisibleTestimonials)
  return () => window.removeEventListener("resize", updateVisibleTestimonials)
}, [])

  const maxIndex = testimonials.length - visibleTestimonials

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
  }

  // Get current visible testimonials
  const getCurrentTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + visibleTestimonials)
  }

  return (
    <section className="py-16 bg-white font-figtree">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2F]">WHAT OUR</h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#6bc533]">STUDENTS SAY?</h2>
        </div>

        {/* Loading and error states */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3048cd]"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-[#3048cd] text-white rounded-md hover:bg-[#2a3da8]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Testimonials carousel - only show when not loading and no errors */}
        {!isLoading && !error && testimonials.length > 0 && (
          <div className="relative">
            {/* Navigation buttons */}

            {/* Testimonials container */}
            <div ref={testimonialsRef} className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                      {/* Student image */}
                      <div className="relative h-64 w-full bg-gray-100">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                        {/* Program label as pill */}
                        <div className="absolute top-4 left-4 z-10 bg-white text-[#3048cd] font-medium px-4 py-1 rounded-full shadow-sm">
                          {testimonial.program}
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <div className="p-6">
                        <SafeHtml content={`"${testimonial.quote}"`} as="h3" className="text-xl font-bold text-[#2A2A2F] mb-4" />
                        <SafeHtml content={testimonial.testimonial} as="p" className="text-[#2A2A2F] text-sm mb-6" />

                        {/* Student info and company logo */}
                        <div className="flex justify-between items-end">
                          <div>
                            <h4 className="font-bold text-[#2A2A2F]">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.degree}</p>
                          </div>
                          <div className="relative h-10 w-20">
                            <Image
                              src={testimonial.companyLogo || "/placeholder.svg"}
                              alt="Company logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation controls container */}
        <div className="flex justify-between items-center mt-8">
          {/* Pagination dots - left aligned */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#6bc533] ring-2 ring-[#6bc533]/30" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons - right aligned */}
          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`bg-white rounded-full p-2 shadow-md ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-[#3048cd]" />
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className={`bg-white rounded-full p-2 shadow-md ${
                currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-[#3048cd]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
