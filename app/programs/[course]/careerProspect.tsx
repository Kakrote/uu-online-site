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
      <div className="relative z-10 flex items-center justify-between px-12 py-16 max-w-7xl mx-auto gap-12 min-h-screen">
        {/* Left Section */}
        <div className="flex-1">
          {/* Label */}
          <div className="text-white text-sm font-medium mb-2">{label}</div>
          
          {/* Main Heading */}
          <h1 className="text-white text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Description Text */}
          <p className="text-white text-base leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Industry Stats Text */}
          <p className="text-white text-sm italic mb-8">
            {industryStatsText}
          </p>
          
          {/* Job Profile Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {jobProfiles.map((profile) => (
              <button
                key={profile}
                className="bg-white text-gray-800 px-5 py-2 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all"
              >
                {profile}
              </button>
            ))}
          </div>
          
          {/* Apply Now Button */}
          <a href={applyButtonUrl}>
            <button className="bg-white text-amber-400 px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all">
              {applyButtonText}
              <ArrowRight size={18} />
            </button>
          </a>
        </div>
        
        {/* Right Section - Image with Play Button */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition-all">
                  <Play size={28} className="text-white fill-white" />
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
