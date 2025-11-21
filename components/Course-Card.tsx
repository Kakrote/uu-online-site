'use client'

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface cardsProps {
    courseName: string,
    courseSlug: string,
    brouchureUrl: string,
    courseDuration: string,
    courseLevel: string,
    courseImage: string
}

function CourseCard({ courseName, courseSlug, brouchureUrl, courseDuration, courseLevel, courseImage }: cardsProps) {
    const router = useRouter()

    const handleViewProgram = () => {
        router.push(`/programs/${courseSlug}`)
    }

    const handleDownloadBrochure = () => {
        if (brouchureUrl) {
            window.open(brouchureUrl, '_blank')
        }
    }

    return (
        <main className='space-y-3 hover:scale-105 duration-300 '>
            {/* image */}
            <div className="relative w-full h-64">
                <Image
                    src={courseImage}
                    fill
                    alt={`${courseName} course image`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg"
                />
                {/* top ranks */}
                <div className='px-4 p-1 absolute bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full top-4  shadow-lg animate-pulse right-5'>
                    <span className="font-semibold text-sm">top rank</span>
                </div>
            </div>
            {/* Title of the course */}
            <h2 className='font-semibold text-2xl  tracking-wide '>

                {courseName}

            </h2>
            {/* buttons */}
            <div className='space-x-3 w-full flex'>
                <button 
                    onClick={handleViewProgram}
                    className=' px-2 p-1 rounded-full text-white bg-[#6bc533] hover:bg-[#5aa329] transition-colors'
                >
                    View Program
                </button>
                <button 
                    onClick={handleDownloadBrochure}
                    className='border px-2 p-1 rounded-full flex gap-2 hover:bg-gray-50 transition-colors'
                >
                    Download Brochure <Download color='#2C83F5' />
                </button>
            </div>
        </main>
    )
} export default CourseCard
