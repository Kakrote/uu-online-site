"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useHoverCounter } from "@/hooks/use-hover-counter"

function PlacementSuccessCard() {
  const [isHovered, setIsHovered] = useState(false)

  const placementPercentage = useHoverCounter({ end: 95, isHovered })
  const averagePackage = useHoverCounter({ end: 12, duration: 1800, isHovered })
  const highestPackage = useHoverCounter({ end: 55, duration: 2000, isHovered })
  const companiesVisited = useHoverCounter({ end: 250, duration: 2200, isHovered })

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm border hover:cursor-pointer relative group transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-52 md:h-44 lg:h-48 xl:h-52 2xl:h-56">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milestone-placement-packages-EKUtwK7QgRBQPVedgyxlT57xu071KO.png"
          alt="Placement Success 2024"
          fill
          className="object-cover transition-transform duration-300"
        />
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-[#0a0909bb]  to-[#2e5ec4ce] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">{placementPercentage}%</div>
                <div className="text-lg">Placement Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">₹{averagePackage}L</div>
                <div className="text-lg">Avg. Package</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">₹{highestPackage}L</div>
                <div className="text-lg">Highest Package</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">{companiesVisited}+</div>
                <div className="text-lg">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 xl:p-5 2xl:p-6">
        <h3 className="font-bold text-lg xl:text-xl">Milestone</h3>
        <p className="text-sm xl:text-base">Placement Packages</p>
      </div>
    </div>
  )
}

function InternationalCard() {
  const [isHovered, setIsHovered] = useState(false)

  const internationalStudents = useHoverCounter({ end: 45, isHovered })
  const countries = useHoverCounter({ end: 25, duration: 1800, isHovered })
  const partnerships = useHoverCounter({ end: 150, duration: 2000, isHovered })
  const exchangePrograms = useHoverCounter({ end: 35, duration: 2200, isHovered })

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm border hover:cursor-pointer relative group transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-52 md:h-44 lg:h-48 xl:h-52 2xl:h-56">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/were-international-MHuQxi8afap418ee7iyLkOTbjn2jKx.png"
          alt="International Students"
          fill
          className="object-cover transition-transform duration-300"
        />
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-[#0a0909bb] to-[#2e5ec4ce] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">{countries}+</div>
                <div className="text-lg">Countries</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">{internationalStudents}%</div>
                <div className="text-lg">Int'l Students</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">{partnerships}+</div>
                <div className="text-lg">Partnerships</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#6bc533]">{exchangePrograms}+</div>
                <div className="text-lg">Exchange Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 xl:p-5 2xl:p-6">
        <h3 className="font-bold text-lg xl:text-xl">We're</h3>
        <p className="text-sm xl:text-base">International</p>
      </div>
    </div>
  )
}

function CampusLifeSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Campus life images array
  const campusImages = [
    {
      src: "/images/life_uu/culure-image/img_6.jpeg",
      alt: "Vibrant Campus Life"
    },
    {
      src: "/images/life_uu/culure-image/img_7.jpeg",
      alt: "Students Studying Together"
    },
    {
      src: "/images/life_uu/culure-image/img_8.jpeg",
      alt: "Students Outdoor Activities"
    },
    {
      src: "/images/life_uu/culure-image/img_2.jpeg",
      alt: "Campus Library"
    },
    {
      src: "/images/life_uu/culure-image/img_4.jpeg",
      alt: "Campus Library"
    },
    {
      src: "/images/life_uu/culure-image/img_5.jpeg",
      alt: "Campus Library"
    },
  ]

  const activities = useHoverCounter({ end: 150, isHovered })
  const clubs = useHoverCounter({ end: 25, duration: 1800, isHovered })
  const events = useHoverCounter({ end: 200, duration: 2000, isHovered })
  const satisfaction = useHoverCounter({ end: 98, duration: 2200, isHovered })

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % campusImages.length
        )
      }, 3000) // Change image every 3 seconds

      return () => clearInterval(interval)
    }
  }, [isHovered, campusImages.length])

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm border hover:cursor-pointer relative group transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-52 md:h-44 lg:h-48 xl:h-52 2xl:h-56">
        {/* Image Slider */}
        {campusImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-all duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>
      <div className="p-4 xl:p-5 2xl:p-6">
        <h3 className="font-bold text-lg xl:text-xl">Vibrant & Happening</h3>
        <p className="text-sm xl:text-base">Campus Life</p>
      </div>
    </div>
  )
}

export default function WhyChooseSection() {
  return (
    <section className="py-16  bg-white font-figtree">
      <div className="container mx-auto px-4   ">
        {/* Mobile Layout - Single Column */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {/* Main Header Panel */}
          <div className="bg-[#3048cd] rounded-lg overflow-hidden relative">
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09869%201%20%281%29-dKREhopT6M0SOzrRScY1WWhYn0cpES.png"
                alt="Students studying together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c2870] to-transparent"></div>
            </div>
            <div className="p-6 text-white relative z-10">
              <h2 className="text-3xl font-bold text-white mb-1">
                WHY CHOOSE
              </h2>
              <h2 className="text-3xl font-extrabold text-[#6bc533] mb-4">
                UTTARANCHAL
                <br />
                UNIVERSITY?
              </h2>
              <p className="text-sm mb-4">
                Uttaranchal University, a top private university in Dehradun, Uttarakhand, is globally recognized for
                excellence in education. With expert faculty and state-of-the-art infrastructure, we provide the finest
                learning experience.
              </p>
            </div>
          </div>

          {/* Placement Success */}
          <PlacementSuccessCard />

          {/* International */}
          <InternationalCard />

          {/* Learning Experience */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48 sm:h-52">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comprehensive-learning-experience-DciKrWHemBd1TO8zWD74ix3GvVmeNT.png"
                alt="Learning Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Comprehensive</h3>
              <p className="text-sm">Learning Experience</p>
            </div>
          </div>

          {/* Campus Life */}
          <CampusLifeSlider />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-10 gap-6">
          {/* Main Header Panel */}
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-4 bg-[#3048cd] rounded-lg overflow-hidden relative">
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09869%201%20%281%29-dKREhopT6M0SOzrRScY1WWhYn0cpES.png"
                alt="Students studying together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3048cd] to-[#3048cd]/70"></div>
            </div>
            <div className="p-6 md:p-8 xl:p-10 2xl:p-12 text-white relative z-10">
              <h2 className="text-3xl md:text-4xl  font-bold text-white mb-1 xl:mb-2">
                WHY CHOOSE
              </h2>
              <h2 className="text-3xl md:text-5xl   font-extrabold text-[#6bc533] mb-4 xl:mb-6">
                UTTARANCHAL
                <br />
                UNIVERSITY?
              </h2>
              <p className="text-sm md:text-base xl:text-lg 2xl:text-xl mb-4">
                Uttaranchal University, a top private university in Dehradun, Uttarakhand, is globally recognized for
                excellence in education. With expert faculty and state-of-the-art infrastructure, we provide the finest
                learning experience.
              </p>
            </div>
          </div>

          {/* Top Right Grid */}
          <div className="md:col-span-4 lg:col-span-5 xl:col-span-6 2xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Placement Success */}
            <PlacementSuccessCard />

            {/* International */}
            <InternationalCard />

            {/* Learning Experience */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
              <div className="relative h-48 sm:h-52 md:h-44 lg:h-48 xl:h-52 2xl:h-56">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comprehensive-learning-experience-DciKrWHemBd1TO8zWD74ix3GvVmeNT.png"
                  alt="Learning Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 xl:p-5 2xl:p-6">
                <h3 className="font-bold text-lg xl:text-xl">Comprehensive</h3>
                <p className="text-sm xl:text-base">Learning Experience</p>
              </div>
            </div>

            {/* Campus Life */}
            <CampusLifeSlider />
          </div>
        </div>
        </div>
      {/* </div> */}
    </section>
  )
}