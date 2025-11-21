"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
    id: number
    name: string
    degree: string
    image: string
    quote: string
    company: string
    companyLogo: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Parveen",
        degree: "MBA",
        image: "/images/faces/st/std-1.png",
        quote: "I'd like to thank all of my faculty members and the placement cell for always assisting me in developing a better vision for myself. A special thanks to the faculty members who encouraged me and helped me see my potential and make the most of everything. Uttaranchal University and its placement faculty have worked tirelessly to groom us and make us corporate professionals. At Uttaranchal University, I had a fantastic learning experience.",
        company: "Lisk",
        companyLogo: "/images/icons/clogo/lisk.png"
    },
    {
        id: 2,
        name: "Sarah Parveen",
        degree: "MBA",
        image: "/images/faces/st/std-1.png",
        quote: "I'd like to thank all of my faculty members and the placement cell for always assisting me in developing a better vision for myself. A special thanks to the faculty members who encouraged me and helped me see my potential and make the most of everything. Uttaranchal University and its placement faculty have worked tirelessly to groom us and make us corporate professionals. At Uttaranchal University, I had a fantastic learning experience.",
        company: "Lisk",
        companyLogo: "/images/icons/clogo/lisk.png"
    },
    {
        id: 3,
        name: "Sarah Parveen",
        degree: "MBA",
        image: "/images/faces/st/std-1.png",
        quote: "I'd like to thank all of my faculty members and the placement cell for always assisting me in developing a better vision for myself. A special thanks to the faculty members who encouraged me and helped me see my potential and make the most of everything. Uttaranchal University and its placement faculty have worked tirelessly to groom us and make us corporate professionals. At Uttaranchal University, I had a fantastic learning experience.",
        company: "Lisk",
        companyLogo: "/images/icons/clogo/lisk.png"
    }
]

export default function StudentsSpeakSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    
    const itemsPerSlide = 2
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)
    const AUTO_SLIDE_INTERVAL = 5000 // 5 seconds
    
    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
            setTimeout(() => setIsAnimating(false), 500)
        }
    }
    
    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
            setTimeout(() => setIsAnimating(false), 500)
        }
    }
    
    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, AUTO_SLIDE_INTERVAL)
        
        return () => clearInterval(interval)
    }, [currentSlide])
    
    const getCurrentTestimonials = () => {
        const startIndex = currentSlide * itemsPerSlide
        return testimonials.slice(startIndex, startIndex + itemsPerSlide)
    }

    return (
        <section className="relative w-full py-20 overflow-hidden bg-[#1a1a1a] mb-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/backgrouds/black_bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-50"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-7xl">
                {/* Section Title */}
                <div className="mb-16">
                    <h2 className="text-white text-4xl md:text-5xl font-bold">
                        STUDENTS<br />
                        <span className="text-[#FFD700]">SPEAK</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="relative overflow-hidden mb-12">
                    <div 
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                            const startIndex = slideIndex * itemsPerSlide
                            const slideTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide)
                            
                            return (
                                <div 
                                    key={slideIndex}
                                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-1"
                                >
                                    {slideTestimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
                                        >
                            {/* Student Image */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 flex flex-col justify-between relative">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-8">
                                    <svg
                                        width="60"
                                        height="60"
                                        viewBox="0 0 60 60"
                                        fill="none"
                                        className="text-blue-500 opacity-20"
                                    >
                                        <path
                                            d="M13.5 45C9.36 45 6 41.64 6 37.5C6 33.36 9.36 30 13.5 30C15 30 16.38 30.48 17.52 31.26C16.26 26.22 11.76 22.5 6 22.5V15C16.5 15 25.5 24 25.5 34.5V37.5C25.5 41.64 22.14 45 18 45H13.5ZM42 45C37.86 45 34.5 41.64 34.5 37.5C34.5 33.36 37.86 30 42 30C43.5 30 44.88 30.48 46.02 31.26C44.76 26.22 40.26 22.5 34.5 22.5V15C45 15 54 24 54 34.5V37.5C54 41.64 50.64 45 46.5 45H42Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    {/* Quote Text */}
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                        {testimonial.quote}
                                    </p>

                                    {/* Student Info */}
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.degree}
                                            </p>
                                        </div>

                                        {/* Company Logo */}
                                        <div className="relative w-16 h-8">
                                            <Image
                                                src={testimonial.companyLogo}
                                                alt={testimonial.company}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                    {/* Dots Indicator */}
                    <div className="flex gap-3">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'bg-[#00FF00] w-8'
                                        : 'bg-white/30'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
