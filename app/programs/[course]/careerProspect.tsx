'use client'

import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

export interface CareerProspectsProps {
  label: string
  title: string
  description: string
  industryStatsText: string
  jobProfiles: string[]
  applyButtonText?: string
  applyButtonUrl?: string
  imageUrl: string
  imageAlt: string
  backgroundImage?: string
  backgroundColor?: string
  showVideoButton?: boolean
  videoUrl?: string
}

export default function CareerProspects({
  label,
  title,
  description,
  industryStatsText,
  jobProfiles,
  applyButtonText = 'Apply Now',
  applyButtonUrl = '#',
  imageUrl,
  imageAlt,
  backgroundImage = '/images/backgrouds/org_bg.svg',
  backgroundColor = 'bg-amber-400',
  showVideoButton = true,
  videoUrl = '#',
}: CareerProspectsProps) {
  return (
    <div className="min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay to ensure background is visible */}
      <div className={`absolute inset-0 ${backgroundColor}`} style={{ backgroundImage: `url(${backgroundImage})` }} />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16 max-w-7xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-12 min-h-screen">
        {/* Left Section */}
        <div className="flex-1 w-full lg:w-auto">
          {/* Label */}
          <div className="text-white text-xs sm:text-sm font-medium mb-2">{label}</div>
          
          {/* Main Heading */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Description Text */}
          <p className="text-white text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6">
            {description}
          </p>
          
          {/* Industry Stats Text */}
          <p className="text-white text-xs sm:text-sm italic mb-6 sm:mb-7 md:mb-8">
            {industryStatsText}
          </p>
          
          {/* Job Profile Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-7 md:mb-8">
            {jobProfiles.map((profile) => (
              <button
                key={profile}
                className="bg-white text-gray-800 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm hover:bg-opacity-90 transition-all"
              >
                {profile}
              </button>
            ))}
          </div>
          
          {/* Apply Now Button */}
          <a href={applyButtonUrl}>
            <button className="bg-white text-amber-400 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all">
              {applyButtonText}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </a>
        </div>
        
        {/* Right Section - Image with Play Button */}
        <div className="flex-1 flex justify-center w-full lg:w-auto mt-6 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            {/* Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Play Button Overlay */}
            {showVideoButton && (
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6bc533] hover:bg-[#5ab22c] rounded-full p-3 sm:p-4 shadow-lg transition-all hover:scale-110">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white fill-white" />
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
