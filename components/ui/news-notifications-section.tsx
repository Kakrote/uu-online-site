"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

interface NewsItem {
  id: number
  date: {
    day: number
    month: string
    year: number
  }
  title: string
  link: string
}

// API response interface
interface ApiNewsItem {
  id: number
  title: string
  date: {
    day: number
    month: string
    year: number
  }
  link: string
}

export default function NewsNotificationsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  // Determine current route to decide which API to use
  const pathname = usePathname()
  // Fetch data from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true)
        const isPhdPrograms = typeof pathname === "string" && pathname.includes("phd-programs")
        const endpoint = isPhdPrograms
          ? "https://uucms.uudoon.in/api/phd-notifications/"
          : "https://uucms.uudoon.in/api/notifications/?format=json"

        const response = await fetch(endpoint, { cache: "no-store" })

        if (!response.ok) {
          throw new Error(`Failed to fetch notifications: ${response.status}`)
        }

        const data: ApiNewsItem[] = await response.json()

        // The API data already matches our component's structure, so no transformation needed
        setNewsItems(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching notifications:", err)
        setError("Failed to load notifications. Please try again later.")
        // Use empty array if fetch fails
        setNewsItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [pathname])

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }

      // Reset current index when screen size changes
      setCurrentIndex(0)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate card width and container dimensions
  useEffect(() => {
    if (cardsContainerRef.current) {
      const updateCardWidth = () => {
        const containerWidth = cardsContainerRef.current?.clientWidth || 0
        const gap = 16 // gap-4 = 1rem = 16px
        const totalGapWidth = (visibleItems - 1) * gap
        const calculatedCardWidth = (containerWidth - totalGapWidth) / visibleItems
        setCardWidth(calculatedCardWidth)
      }

      updateCardWidth()
      window.addEventListener("resize", updateCardWidth)
      return () => window.removeEventListener("resize", updateCardWidth)
    }
  }, [visibleItems, newsItems.length])

  // Calculate max index based on total items and visible items
  const maxIndex = Math.max(0, newsItems.length - visibleItems)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="relative py-16 font-figtree overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrouds/org_bg.svg"
          alt="Orange striped background"
          fill
          className="object-cover"
          priority
        />
      </div>                

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left side - Title */}
          <div className="md:col-span-4 text-white">
            <h3 className="text-2xl font-bold mb-2">LATEST</h3>
            <h2 className="text-5xl font-extrabold leading-tight">
              NEWS &<br />
              NOTIFICATIONS
            </h2>
          </div>

          {/* Right side - Carousel */}
          <div className="md:col-span-8 relative">
            {/* Loading state */}
            {loading && (
              <div className="flex justify-center items-center h-64 bg-white/20 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}

            {/* Error state */}
            {error && !loading && (
              <div className="flex justify-center items-center h-64 bg-white/20 rounded-lg">
                <div className="text-white text-center px-4">
                  <p className="text-xl font-bold mb-2">Oops!</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {/* No data state */}
            {!loading && !error && newsItems.length === 0 && (
              <div className="flex justify-center items-center h-64 bg-white/20 rounded-lg">
                <div className="text-white text-center px-4">
                  <p className="text-xl font-bold">No notifications available</p>
                </div>
              </div>
            )}

            {/* Data loaded successfully */}
            {!loading && !error && newsItems.length > 0 && (
              <>
                {/* Navigation buttons */}
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-2 shadow-md ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  aria-label="Previous news"
                >
                  <ChevronLeft className="h-6 w-6 text-[#3048cd]" />
                </button>

                {/* Cards container with overflow hidden */}
                <div className="overflow-hidden">
                  {/* Sliding container */}
                  <div
                    ref={cardsContainerRef}
                    className="flex gap-4 transition-transform duration-500 ease-in-out"
                    style={{
                      transform: cardWidth > 0 ? `translateX(-${currentIndex * (cardWidth + 16)}px)` : "none",
                    }}
                  >
                    {newsItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex-shrink-0 bg-white rounded-lg shadow-md p-6"
                        style={{
                          width:
                            cardWidth > 0
                              ? `${cardWidth}px`
                              : `calc((100% - ${(visibleItems - 1) * 16}px) / ${visibleItems})`,
                        }}
                      >
                        <div className="mb-4">
                          <span className="text-[#3048cd] text-4xl font-bold">
                            {item.date.day}
                            <sup className="text-lg">th</sup>
                          </span>
                          <div className="text-[#3048cd] font-medium">
                            {item.date.month} {item.date.year}
                          </div>
                        </div>
                        <h3 className="text-[#2A2A2F] font-medium mb-6">{item.title}</h3>
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-4 py-2 rounded-full hover:bg-[#5ab22c] transition-colors text-sm"
                        >
                          Read More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next button */}
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-2 shadow-md ${
                    currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  aria-label="Next news"
                >
                  <ChevronRight className="h-6 w-6 text-[#3048cd]" />
                </button>

                {/* Pagination indicator */}
                <div className="flex justify-center mt-6 gap-2">
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
