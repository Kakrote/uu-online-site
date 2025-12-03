"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Achiever {
  img: string
  alt: string
}

// Fallback data in case API call fails
const fallbackAchievers: Achiever[] = [
  { img: "/placeholder.svg", alt: "star-achiver-image-1" },
  { img: "/placeholder.svg", alt: "star-achiver-image-2" },
  { img: "/placeholder.svg", alt: "star-achiver-image-3" },
  { img: "/placeholder.svg", alt: "star-achiver-image-4" },
  { img: "/placeholder.svg", alt: "star-achiver-image-5" },
  { img: "/placeholder.svg", alt: "star-achiver-image-6" },
]

const AUTOPLAY_INTERVAL = 3500 // ms

export default function StarAchievers() {
  const [achievers, setAchievers] = useState<Achiever[]>(fallbackAchievers)
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Responsive columns per row: sm=2, md=3, lg+=4
  const [cols, setCols] = useState(2)
  useEffect(() => {
    const computeCols = () => {
      if (typeof window === "undefined") return
      const w = window.innerWidth
      if (w < 640) setCols(2)
      else if (w < 1024) setCols(3)
      else setCols(3)
    }
    computeCols()
    window.addEventListener("resize", computeCols)
    return () => window.removeEventListener("resize", computeCols)
  }, [])

  // Fetch achievers
  useEffect(() => {
    fetch("https://uucms.uudoon.in/api/placement-achievers/?format=json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then((data: Achiever[]) => {
        if (Array.isArray(data) && data.length > 0) setAchievers(data)
      })
      .catch(() => console.warn("Using fallback achievers due to API failure"))
  }, [])

  // Chunk achievers into slides of size rows(2) * cols
  const itemsPerSlide = Math.max(2 * cols, 2) // ensure >=2
  const slides = useMemo(() => chunkArray(achievers, itemsPerSlide), [achievers, itemsPerSlide])

  // Autoplay: advance to next slide every AUTOPLAY_INTERVAL; pause on hover
  useEffect(() => {
    if (!api) return
    const start = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isHovered) api.scrollNext()
      }, AUTOPLAY_INTERVAL)
    }
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    start()
    return () => stop()
  }, [api, isHovered])

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white font-figtree px-4 sm:px-6 md:px-8">
      <div className="px-0 sm:px-2 md:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">

          <div className="text-left mb-4 sm:mb-6 md:mb-8 lg:mb-0 flex-shrink-0">
            <h2 className="text-v0-dark-gray text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">
              OUR <br />
              <span className="text-[#6BC533] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
                STAR ACHIEVERS
              </span>
            </h2>
          </div>

          <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-0 max-w-full lg:max-w-2xl xl:max-w-4xl">
              <p className="text-[#0b0b0b] text-sm sm:text-base md:text-lg leading-relaxed">
               Uttaranchal University has maintained a strong placement record since the inception of its core institutes—LCD, UIT, and UIM—and especially after becoming a university in 2013. The presence of top recruiters reflects the high-quality talent nurtured across its various academic schools.
              </p>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={(api) => setApi(api)}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((group, slideIdx) => (
                <CarouselItem key={slideIdx} className="basis-full">
                  <div
                    className="grid grid-rows-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
                    style={{ gridAutoFlow: "column", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                  >
                    {group.map((achiever, index) => (
                      <div
                        key={`${slideIdx}-${index}`}
                        className="relative aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <Image
                          src={achiever.img}
                          alt={achiever.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-2 sm:-left-3 md:-left-4 lg:-left-6 bg-white/90 shadow hover:bg-white" />
            <CarouselNext className="-right-2 sm:-right-3 md:-right-4 lg:-right-6 bg-white/90 shadow hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [arr]
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
