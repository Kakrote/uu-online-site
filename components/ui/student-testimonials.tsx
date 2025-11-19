"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface TestimonialImage {
    id: number
    src: string
    alt: string
}

interface ApiResponse {
    id: number
    name: string
    description: string
    images: TestimonialImage[]
}

const StudentTestimonials = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [testimonials, setTestimonials] = useState<TestimonialImage[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Fetch testimonial images from API
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://uucms.uudoon.in/api/image-categories/?format=json&name=WhatourStudentSays')
                
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials')
                }
                
                const data: ApiResponse[] = await response.json()
                
                if (data && data.length > 0 && data[0].images) {
                    setTestimonials(data[0].images)
                } else {
                    setError('No testimonial images found')
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
                console.error('Error fetching testimonials:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchTestimonials()
    }, [])

    // Auto-advance carousel every 4 seconds
    useEffect(() => {
        if (testimonials.length === 0) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [testimonials.length])

    const goToSlide = (index: number) => {
        setCurrentImageIndex(index)
    }

    const goToPrevious = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? testimonials.length - 1 : currentImageIndex - 1)
    }

    const goToNext = () => {
        setCurrentImageIndex(currentImageIndex === testimonials.length - 1 ? 0 : currentImageIndex + 1)
    }

    // Show loading state
    if (loading) {
        return (
            <section className='min-h-screen min-w-screen bg-[#fafbfd] flex items-center justify-center'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-[#6bc533] mx-auto mb-4'></div>
                    <p className='text-gray-600'>Loading testimonials...</p>
                </div>
            </section>
        )
    }

    // Show error state
    if (error || testimonials.length === 0) {
        return (
            <section className='min-h-screen min-w-screen bg-[#fafbfd] flex items-center justify-center'>
                <div className='text-center'>
                    <p className='text-red-600 mb-4'>Error loading testimonials: {error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className='px-4 py-2 bg-[#6bc533] text-white rounded-lg hover:bg-[#5ba329] transition-colors'
                    >
                        Try Again
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section 
            className='min-h-screen min-w-screen bg-[#fafbfd]'
            // style={{
            //     backgroundImage: `url("/images/backgrounds/admission-isb.svg")`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat'
            // }}
        >
            <div className='flex flex-col lg:flex-row justify-center gap-12 lg:gap-16 items-center mx-auto px-6 lg:px-8 py-12 lg:py-16'>

                {/* left side div */}
                <motion.div 
                    className='max-w-[700px] w-full lg:w-auto flex flex-col justify-center text-black leading-tight tracking-tighter space-y-6'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                >
                    {/* text headings */}
                    <div className='mb-8 lg:mb-12 text-center lg:text-left space-y-4'>
                        <h4 className='text-base lg:text-lg mb-4'>What our Student Says?</h4>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-figtree font-thin leading-relaxed'>
                            Discover the inspiring Stories
                            <span className='font-semibold text-[#6bc533]'> and gain valuable insights straight from our accomplished graduates</span>
                        </h1>
                    </div>

                    {/* Navigation Controls */}
                    <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8 mt-4'>
                        {/* Navigation Arrows */}
                        <div className='flex gap-4 lg:gap-6'>
                            <button 
                                onClick={goToPrevious}
                                disabled={testimonials.length <= 1}
                                className='bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 lg:p-4 transition-all duration-200 shadow-lg hover:shadow-xl'
                                aria-label="Previous image"
                            >
                                <svg className='w-5 h-5 lg:w-6 lg:h-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                                </svg>
                            </button>
                            
                            <button 
                                onClick={goToNext}
                                disabled={testimonials.length <= 1}
                                className='bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 lg:p-4 transition-all duration-200 shadow-lg hover:shadow-xl'
                                aria-label="Next image"
                            >
                                <svg className='w-5 h-5 lg:w-6 lg:h-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                        </div>

                        {/* Show current slide indicator when there are multiple images */}
                        {testimonials.length > 1 && (
                            <div className='flex space-x-3'>
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-200 ${
                                            index === currentImageIndex 
                                                ? 'bg-[#6bc533] ring-2 ring-white/50 scale-110' 
                                                : 'bg-white/50 hover:bg-white/70'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* right side div - Carousel */}
                <motion.div 
                    className='w-full lg:w-[943px]  flex items-center mt-8 lg:mt-0  justify-center relative'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.4
                    }}
                >
                    <div className='w-full h-[calc(100vh-640px)] sm:h-[500px]   lg:h-[calc(100vh-260px)] shadow-2xl overflow-hidden rounded-2xl lg:rounded-3xl'>
                        {/* Carousel Images */}
                        <div 
                            className='flex transition-transform duration-500 ease-in-out h-full '
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className='min-w-full h-full relative rounded-2xl overflow-hidden'
                                >
                                    <Image 
                                        src={testimonial.src} 
                                        alt={testimonial.alt || `Student testimonial ${index + 1}`}
                                        fill
                                        className='lg:object-cover object-contain object-center rounded-2xl'
                                        // sizes='(min-width: 1024px) 50vw, 100vw'
                                        priority={index === 0}
                                        draggable={false}
                                        onError={(e) => {
                                            console.error('Failed to load image:', testimonial.src);
                                            // Optionally set a fallback image
                                            // e.currentTarget.src = '/images/fallback-testimonial.jpg';
                                        }}
                                    />
                                    {/* Overlay with testimonial info */}
                                    {/* <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white'>
                                        <p className='text-sm mb-2 italic'>"{testimonial.quote}"</p>
                                        <h4 className='font-semibold text-lg'>{testimonial.name}</h4>
                                        <p className='text-sm opacity-90'>{testimonial.course}</p>
                                    </div> */}
                                </div>
                            ))}
                        </div>

                       
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default StudentTestimonials
