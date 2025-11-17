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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white font-figtree px-3">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-8 md:mb-12">
          <h2 className="text-v0-dark-gray text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">
            OUR <br />
            <span className="text-[#6BC533] text-4xl font-extrabold sm:text-5xl lg:text-7xl">
              STAR ACHIEVERS
            </span>
          </h2>
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
                    className="grid grid-rows-2  gap-4 sm:gap-6 md:gap-6"
                    style={{ gridAutoFlow: "column", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                  >
                    {group.map((achiever, index) => (
                      <div
                        key={`${slideIdx}-${index}`}
                        className="relative aspect-square w-full overflow-hidden rounded-xl border bg-white shadow-sm"
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

            <CarouselPrevious className="-left-3 md:-left-6 bg-white/90 shadow" />
            <CarouselNext className="-right-3 md:-right-6 bg-white/90 shadow" />
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
