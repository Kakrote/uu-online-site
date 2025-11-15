import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

interface cardsProps {
    courseName: string,
    courseSlug: string,
    brouchureUrl: string,
    courseDuration: string,
    courseLevel: string,
    courseImage: string
}

function CourseCard({ courseName, courseSlug, brouchureUrl, courseDuration, courseLevel, courseImage }: cardsProps) {

    return (
        <main className='space-y-3 hover:scale-105 duration-300 '>
            {/* image */}
            <div className="relative w-full h-64 relative">
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
                <button className=' px-2 p-1 rounded-full text-white bg-[#6bc533] '>View Program</button>
                <button className='border px-2 p-1 rounded-full flex gap-2'>Download Brochure <Download color='#2C83F5' /></button>
            </div>
        </main>
    )
} export default CourseCard
