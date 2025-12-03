"use client"

import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function UniversityShowcase() {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className="flex flex-col lg:flex-row mb-6 sm:mb-8 md:mb-10 max-w-7xl mx-auto w-full">
            {/* Left Section - Orange Background with Content */}
            <div
                className="relative w-full lg:w-[50%] overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[500px] sm:min-h-[600px] lg:min-h-0"
                style={{
                    backgroundImage: "url('/images/backgrouds/org_bg.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                {/* Content - Relative to overlay pattern */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        {/* Main Heading */}
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                            HOW DID <br />
                            WE EARN THE PRESTIGIOUS
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12">NAAC A+ GRADE ?</h2>

                        {/* Description Paragraphs */}
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
                            Uttaranchal University's prestigious NAAC accreditation recognizes its robust student support across{" "}
                            <span className="font-bold">
                                curricular aspects, teaching-learning processes, research, innovation, extension, infrastructure,
                                learning resources, student progression, and governance.
                            </span>
                        </p>

                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                            Beyond academics, the university actively embodies institutional values and social responsibilities through extensive philanthropic outreach. Committed to its mission of service, Uttaranchal University
                            strives to be a world-class institution by continuously innovating in education, research, creativity, and
                            entrepreneurship to achieve a transformative impact on society.
                        </p>
                    </div>

                    {/* Apply Now Button */}
                    <button className="w-fit bg-white text-[#0052CC] text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Apply Now
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>

            {/* Right Section - YouTube Video with Thumbnail */}
            <div className="relative w-full lg:w-[50%] overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-0">
                {!isPlaying ? (
                    // Thumbnail with Play Button
                    <div className="relative w-full h-[300px] lg:h-full">
                        <Image
                            src="/images/faces/a.png"
                            alt="Video Thumbnail"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#6bc533] hover:bg-[#5ab22c] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group"
                                aria-label="Play video"
                            >
                                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1 sm:ml-2 group-hover:scale-110 transition-transform" fill="white" />
                            </button>
                        </div>
                    </div>
                ) : (
                    // YouTube Video iframe
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                        title="Uttaranchal University Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    )
}
