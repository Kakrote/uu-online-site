"use client"

import React from "react"

import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useCounterAnimation } from "@/hooks/use-counter-animation"

// Interface for API response
interface StudentSuccessImage {
  id: number
  src: string
  alt: string
}

interface StudentSuccessCategory {
  id: number
  name: string
  description: string
  images: StudentSuccessImage[]
}

function PlacementsLeftPlaceholder() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [images, setImages] = React.useState<StudentSuccessImage[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  // Fetch images from API
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        setError(null)

        // Replace '/api/student-success-images' with your actual API endpoint
        const response = await fetch('https://uucms.uudoon.in/api/image-categories/?format=json&name=StudentSuccessStroies')

        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.status}`)
        }

        const data = await response.json()
        // Extract images from the first category (StudentSuccessStories)
        if (data && data.length > 0 && data[0].images) {
          setImages(data[0].images)
        } else {
          setImages([])
        }
      } catch (err) {
        console.error('Error fetching student success images:', err)
        setError(err instanceof Error ? err.message : 'Failed to load images')
        // Fallback to placeholder data
        setImages([
          { id: 1, src: '/images/temp_img/img-1.png', alt: 'Student success story 1' },
          { id: 2, src: '/images/temp_img/img-2.png', alt: 'Student success story 2' },
          { id: 3, src: '/images/temp_img/img-3.png', alt: 'Student success story 3' },
          { id: 4, src: '/images/temp_img/img-4.png', alt: 'Student success story 4' },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) {
    return (
      <aside aria-label="Loading placement cards" className="w-full mx-0 my-5 py-5">
        <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 90px)', maxHeight: '650px', minHeight: '400px' }}>
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-[#3033e7] shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#3033e7] rounded-full animate-pulse"></div>
          </div>
        </div>
      </aside>
    )
  }

  if (error && images.length === 0) {
    return (
      <aside aria-label="Error loading placement cards" className="w-full mx-0 my-5 py-5">
        <div className="flex items-center justify-center text-center" style={{ height: 'calc(100vh - 200px)', maxHeight: '650px', minHeight: '400px' }}>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <div className="text-red-600 text-4xl mb-4">⚠️</div>
            <p className="text-red-700 font-semibold mb-2">Failed to load student success images</p>
            <p className="text-sm text-red-600 bg-red-100 px-3 py-2 rounded">{error}</p>
          </div>
        </div>
      </aside>
    )
  }

  return (
    <aside aria-label="Placement cards carousel" className="w-full mx-2 md:my-1  py-0">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-1 md:-ml-2">
          {images.map((image, i) => (
            <CarouselItem key={image.id} className="basis-full md:basis-1/2 pl-1 md:pl-2" aria-label={`Slide ${i + 1}`}>
              <StudentSuccessCard image={image} delay={i % 2 === 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 lg:justify-end lg:mr-10 flex gap-4">
        <CircleNav ariaLabel="Previous" onClick={() => api?.scrollPrev()} >
          <span aria-hidden className="flex items-center justify-center w-12 h-12 bg-[#6bc533] text-white rounded-full shadow-md hover:bg-[#5ba528] hover:shadow-lg transition-all duration-300 hover:scale-105"><ChevronLeft size={20} /></span>
        </CircleNav>
        <CircleNav ariaLabel="Next" active onClick={() => api?.scrollNext()}>
          <span aria-hidden className="flex items-center justify-center w-12 h-12 bg-[#6bc533] text-white rounded-full shadow-md hover:bg-[#5ba528] hover:shadow-lg transition-all duration-300 hover:scale-105"><ChevronRight size={20} /></span>
        </CircleNav>
      </div>
    </aside>
  )
}

function StudentSuccessCard({ image, delay = false }: { image: StudentSuccessImage; delay?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-xl group cursor-pointer" style={{ height: 'calc(100vh - 200px)', maxHeight: '650px', minHeight: '400px' }}>
      <Image
        src={image.src}
        alt={image.alt || "Student success story"}
        fill
        className={cn("object-cover transition-all duration-500 group-hover:scale-105", delay && "opacity-90")}
        priority
        style={{
          filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
          transform: 'perspective(1200px) rotateX(1deg) rotateY(-1deg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
    </div>
  )
}

function PlaceholderCard({ delay = false }: { delay?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-xl" style={{ height: 'calc(100vh - 200px)', maxHeight: '650px', minHeight: '400px' }}>
      <Image
        src={`/placeholder.svg?height=520&width=360&query=placement%20student%20portrait`}
        alt="Placeholder placement card"
        fill
        className={cn("object-cover", delay && "opacity-90")}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-(--color-foreground)/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="h-6 w-24 rounded bg-(--color-secondary)" />
        <div className="mt-3 h-8 w-40 rounded bg-(--color-secondary)" />
        <div className="mt-1 h-6 w-28 rounded bg-(--color-secondary)" />
      </div>
    </div>
  )
}

function CircleNav({
  children,
  ariaLabel,
  active = false,
  onClick,
}: {
  children: ReactNode
  ariaLabel: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        "size-10 rounded-full grid place-items-center text-sm font-bold",
        active
          ? "bg-(--color-destructive) text-(--color-destructive-foreground)"
          : "bg-(--color-secondary) text-[#6bc533] hover:bg-(--color-muted)",
      )}
      type="button"
    >
      {children}
    </button>
  )
}





function PlacementsOverviewRight() {
  return (
    <section className="w-full lg:mt-3">
      <div className="space-y-8">
          <div className="inline-block">
            <span className="text-2xl font-bold text-[#3048CD] relative">
              Student Success Stories
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#3048CD] to-[#6bc533] rounded-full"></div>
            </span>
          </div>
        <h2 className="text-balance font-sans font-semibold leading-tight text-4xl md:text-5xl lg:text-6xl tracking-tight">
          <span className="font-normal text-gray-700">The World&apos;s </span>
          <span className="font-bold text-[#3048CD] bg-gradient-to-r from-[#3048CD] to-[#4c6ef5] bg-clip-text text-transparent">Leading</span>
          <br />
          <span className="font-bold text-[#3048CD] bg-gradient-to-r from-[#3048CD] to-[#4c6ef5] bg-clip-text text-transparent">Companies Hire Our Talent</span>
        </h2>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/admissions">
            <Button
              className={cn(
                "px-8 py-6 text-base font-semibold transition-all duration-300 ease-in-out",
                "bg-gradient-to-r from-[#6bc533] to-[#5ba528] text-white shadow-lg",
                "hover:shadow-xl hover:scale-105 hover:from-[#5ba528] hover:to-[#4a9024]",
                "border-0 rounded-full"
              )}
            >
              APPLY NOW
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Button>
          </Link>
          <Link href="/placement">
            <Button
              variant="outline"
              className={cn(
                "px-8 py-6 text-base font-semibold transition-all duration-300 ease-in-out",
                "border-2 border-[#6bc533] text-[#6bc533] bg-white shadow-md",
                "hover:bg-[#6bc533] hover:text-white hover:shadow-lg hover:scale-105",
                "rounded-full"
              )}
            >
              VIEW PLACEMENTS{" "}
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Button>
          </Link>
        </div>

        {/* Top stats row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          <StatsCard
            number={9000}
            suffix="+"
            caption="Placement Offers"
            textColor="text-[#ffff]"
            bgClass="bg-gradient-to-br from-[#e92424] to-[#d11a1a] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          />

          <StatsCard
            number={1100}
            suffix="+"
            caption={<>Companies Visited<br />for Recruitment</>}
            textColor="text-[#3033e7]"
            bgClass="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          />

          <StatsCard
            number={54.75}
            suffix=" LPA"
            caption={<>Highest National<br />Package Offered</>}
            textColor="text-[#6bc533]"
            bgClass="bg-gradient-to-br from-[#3033e7] to-[#2429d1] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            isDecimal
          />

          <StatsCard
            number={1.7}
            suffix=" CR"
            caption={<>Highest International<br />Package Offered</>}
            textColor="text-[#3033e7]"
            bgClass="bg-gradient-to-br from-[#6bc533] to-[#5ba528] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            isDecimal
          />
        </div>

        {/* Bottom compact stats */}
        <div className="bg-gradient-to-r from-blue-50 to-[#f0fdf4] rounded-xl p-6 mt-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <Stat number="20" unit="LPA" caption="Package Offered by 30+ Companies" />
            <Stat number="15" unit="LPA" caption="Package Offered by 50+ Companies" />
            <Stat number="10" unit="LPA" caption="Package Offered by 100+ Companies" />
            <Stat number="7" unit="LPA" caption="Package Offered by 300+ Companies" />
            <Stat number="5" unit="LPA" caption="Package Offered by 500+ Companies" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsCard({
  number,
  suffix,
  caption,
  textColor,
  bgClass = "bg-white border border-gray-200",
  isDecimal = false
}: {
  number: number
  suffix: string
  caption: React.ReactNode
  textColor: string
  bgClass?: string
  isDecimal?: boolean
}) {
  const { count, ref } = useCounterAnimation({
    end: isDecimal ? Math.floor(number * 100) : number,
    duration: 2000,
    delay: 0,
    repeatOnView: true
  })

  const displayValue = isDecimal ? (count / 100).toFixed(2) : count.toLocaleString()
  
  // Determine if this is a colored background card
  const isColoredBg = bgClass.includes('bg-gradient-to-br from-[#3033e7]') || 
                     bgClass.includes('bg-gradient-to-br from-[#6bc533]') || 
                     bgClass.includes('bg-gradient-to-br from-[#e92424]')
  const captionTextColor = isColoredBg ? 'text-white/90' : 'text-gray-600'
  const numberTextColor = isColoredBg ? 'text-white' : textColor

  return (
    <Card ref={ref} className={`rounded-xl p-6 lg:mb-6 ${bgClass}`}>
      <div className={`text-4xl font-extrabold tracking-tight ${numberTextColor}`}>
        {displayValue}<span className="align-bottom text-2xl">{suffix}</span>
      </div>
      <p className={`mt-2 text-sm ${captionTextColor} opacity-90`}>{caption}</p>
    </Card>
  )
}

function Stat({
  number,
  unit,
  caption,
}: {
  number: string
  unit: string
  caption: string
}) {
  const numericValue = parseInt(number)
  const { count, ref } = useCounterAnimation({
    end: numericValue,
    duration: 2000,
    delay: 0,
    repeatOnView: true
  })

  return (
    <div ref={ref} className="flex flex-col border-r-2 border-[#3048CD]/30 px-4 last:border-r-0 relative">
      <div className="flex items-end gap-1 mb-2">
        <span className="text-3xl font-extrabold leading-none text-[#3048CD]">{count}</span>
        <span className="pb-1 text-base font-extrabold text-[#3048CD]">{unit}</span>
      </div>
      <p className="max-w-[18ch] text-sm text-gray-600 leading-relaxed">{caption}</p>
    </div>
  )
}




export default function StudentSuccessSection() {
  return (
    <main className=" py-12 md:py-16 mt-8 lg:max-w-[100vw] bg-linear-to-r from-white to-gray-50">
      <div className="grid grid-cols-1 items-start gap-8 lg:gap-12 lg:grid-cols-12 px-6">
        {/* Left column: placeholders */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <PlacementsLeftPlaceholder />
        </div>

        {/* Right column: exact content */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <PlacementsOverviewRight />
        </div>
      </div>
    </main>
  )
}
