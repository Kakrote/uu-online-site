"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { SafeHtmlInline } from '@/components/ui/SafeHtml'

interface Announcement {
  id: number
  text: string
  buttonText: string
  link: string
}

export default function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://uucms.uudoon.in/api/announcements/?format=json")

        if (!response.ok) {
          throw new Error(`Failed to fetch announcements: ${response.status}`)
        }

        const data = await response.json()
        setAnnouncements(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching announcements:", err)
        setError("Failed to load announcements")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnnouncements()
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (announcements.length === 0) return

    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(autoSlideInterval)
  }, [announcements.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
  }

  return (
    <div className="bg-[#3048CD] text-white py-2 relative font-figtree text-sm min-h-[3rem] flex items-center" data-announcement-banner>

      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="text-white p-1 focus:outline-none flex-shrink-0"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={16} className="md:w-5 md:h-5" />
        </button>

        <div className="flex-1 overflow-hidden px-2">
          {isLoading && (
            <div className="flex-1 text-center">
              <span>Loading announcements...</span>
            </div>
          )}

          {error && (
            <div className="flex-1 text-center">
              <span>{error}</span>
            </div>
          )}

          {!isLoading && !error && announcements.length === 0 && (
            <div className="flex-1 text-center">
              <span>No announcements available</span>
            </div>
          )}
          {announcements.map((announcement, index) => (
            <div
              key={announcement.id}
              className={`flex flex-col md:flex-row items-center justify-center gap-1 text-center transition-opacity duration-300 ${currentIndex === index ? "opacity-100" : "hidden"
                }`}
            >
              <SafeHtmlInline
                content={announcement.text}
                className="font-medium text-xs md:text-sm line-clamp-2 md:line-clamp-1"
                maxLength={150}
              />
              <Link
                href={announcement.link}
                className="bg-white text-[#3048CD] text-xs px-2 py-0.5 rounded font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {announcement.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="text-white p-1 focus:outline-none flex-shrink-0"
          aria-label="Next announcement"
        >
          <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  )
}

export { AnnouncementBanner }
