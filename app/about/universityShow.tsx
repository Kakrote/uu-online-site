"use client"

import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function UniversityShowcase() {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className="flex  mb-10 max-w-7xl  mx-auto w-full">
            {/* Left Section - Orange Background with Content */}
            <div
                className="relative w-[50%] overflow-hidden p-10 flex flex-col justify-between"
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
                        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
                            HOW DID <br />
                            WE EARN THE PRESTIGIOUS
                        </h1>
                        <h2 className="text-5xl font-bold text-white mb-12">NAAC A+ GRADE ?</h2>

                        {/* Description Paragraphs */}
                        <p className="text-white text-lg leading-relaxed mb-6 ">
                            Uttaranchal University's prestigious NAAC accreditation recognizes its robust student support across{" "}
                            <span className="font-bold">
                                curricular aspects, teaching-learning processes, research, innovation, extension, infrastructure,
                                learning resources, student progression, and governance.
                            </span>
                        </p>

                        <p className="text-white text-lg leading-relaxed mb-12 ">
                            Beyond academics, the university actively embodies institutional values and social responsibilities through extensive philanthropic outreach. Committed to its mission of service, Uttaranchal University
                            strives to be a world-class institution by continuously innovating in education, research, creativity, and
                            entrepreneurship to achieve a transformative impact on society.
                        </p>
                    </div>

                    {/* Apply Now Button */}
                    <button className="w-fit bg-white text-[#0052CC] font-semibold px-5 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Apply Now
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Section - YouTube Video with Thumbnail */}
            <div className="relative w-[50%] overflow-hidden">
                {!isPlaying ? (
                    // Thumbnail with Play Button
                    <div className="relative w-full h-full">
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
                                className="w-24 h-24 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group"
                                aria-label="Play video"
                            >
                                <Play size={48} className="text-white ml-2 group-hover:scale-110 transition-transform" fill="white" />
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
