"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Sample accreditation logos - in a real implementation, you would use actual logo images
const accreditationLogos = [
  {
    id: 1,
    src: "/images/accreditations/logo1.png",
    alt: "UGC (University Grants Commission)",
  },
  {
    id: 2,
    src: "/images/accreditations/logo2.png",
    alt: "Indian Nursing Council",
  },
  {
    id: 3,
    src: "/images/accreditations/logo3.png",
    alt: "ISO 14001:2004 Certification",
  },
  {
    id: 4,
    src: "/images/accreditations/logo4.png",
    alt: "Indian Government Certification",
  },
  {
    id: 5,
    src: "/images/accreditations/logo5.png",
    alt: "Pharmacy Council",
  },
  {
    id: 6,
    src: "/images/accreditations/logo6.png",
    alt: "NAAC A+ Accreditation",
  },
  {
    id: 7,
    src: "/images/accreditations/logo7.png",
    alt: "United Nations Academic Impact",
  },
]

export default function AccreditationsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollability)
      // Initial check
      checkScrollability()
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth / 2
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-16 bg-white font-figtree">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2F] mb-2">UNVEILING OUR TRIUMPHS</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#6bc533]">
            APPROVALS, ACCREDITATION, MEMBERSHIPS & RANKINGS
          </h3>
        </div>

        <div className="relative">
          {/* Background with world map pattern */}
          <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-20">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-no-repeat bg-center opacity-10"></div>
          </div>

          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-sm ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-white"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Logos carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-8 px-10 space-x-12 md:space-x-16 no-scrollbar relative"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {accreditationLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 bg-white p-2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center border-2 border-gray-200 rounded-lg hover:border-[#6bc533] transition-colors"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-sm ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-white"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
