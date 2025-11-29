"use client"

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { useHtmlContent } from "@/hooks/use-html-content"
import { createSafeHtml } from "@/lib/html-utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Hourglass, Clock, IndianRupee, BookOpen, GraduationCap, Users } from "lucide-react"
import { div } from "framer-motion/client"
import type { HeroSectionConfig } from "@/lib/course-configs"

// Icon mapping for client-side rendering
const iconMap: Record<string, any> = {
    Clock,
    Hourglass,
    IndianRupee,
    BookOpen,
    GraduationCap,
    Users,
}

interface Announcement {
    id: number
    text: string
    buttonText: string
    link: string
}

interface BannerItem {
    title: string
    time: string
    duration: string
    icon?: string // Icon name (e.g., 'Clock', 'Hourglass', 'IndianRupee')
}

interface EMIBanner {
    title: string
    subtitle: string
    amount: string
    currency?: string
    iconSrc?: string
    iconAlt?: string
}

interface HeroSectionProps {
    // Text content - can be overridden or come from config
    subtitle?: string
    title?: ReactNode | string
    // HTML variants (if you want to pass sanitized HTML strings)
    subtitleHtml?: string
    titleHtml?: string
    highlightedTextHtml?: string
    descriptionHtml?: string
    highlightedText?: string
    description?: string

    // Button - can be overridden or come from config
    buttonText?: string
    buttonUrl?: string
    brochure?: string
    brouchureUrl?: string
    brochureUrl?: string  // Fixed typo

    // Images - can be overridden or come from config
    backgroundImageSrc?: string
    backgroundImageAlt?: string
    overlaySrc?: string
    useOverlayShape?: boolean

    // Styling options
    height?: string
    overlayWidthMobile?: string
    overlayWidthMd?: string
    overlayWidthLg?: string
    contentMaxWidth?: string
    highlightColor?: string
    overlayWidthXl?: string

    // Animation
    animateContent?: boolean
    showButtom?: boolean

    // Gradient overlay
    showGradientOverlay?: boolean
    gradientOverlayClasses?: string

    // Mobile-only slot to render extra content (e.g., a form) inside the hero
    mobileSlot?: ReactNode
    mobileSlotWrapperClasses?: string

    // Banner configuration
    bannerItems?: BannerItem[]
    emiBanner?: EMIBanner
    showBanner?: boolean

    // New: Hero configuration object - provides defaults for all content
    heroConfig?: HeroSectionConfig
}

function Hero({
    // Hero configuration object - provides defaults
    heroConfig,
    
    // Text content with defaults (can override heroConfig)
    subtitle,
    title,
    highlightedText,
    description,

    // Button props (can override heroConfig)
    buttonText,
    buttonUrl,
    brochure,
    brouchureUrl,
    brochureUrl,

    // Images (can override heroConfig)
    backgroundImageSrc,
    backgroundImageAlt,
    overlaySrc,
    useOverlayShape = false,

    // Styling options with defaults
    height = "h-[calc(100vh-0rem)] md:h-[calc(100vh-0rem)]",
    overlayWidthMobile = "w-full",
    overlayWidthMd = "md:w-3/5",
    overlayWidthLg = "lg:w-1/2",
    contentMaxWidth = "max-w-5xl",
    highlightColor,
    overlayWidthXl = "xl:w-3/5",

    // Animation
    animateContent = true,
    showButtom = true,

    // Gradient overlay
    showGradientOverlay,
    gradientOverlayClasses = "bg-gradient-to-r from-black/100 via-black/40 to-transparent",
    // Optional HTML props
    subtitleHtml,
    titleHtml,
    highlightedTextHtml,
    descriptionHtml,
    mobileSlot,
    mobileSlotWrapperClasses,
    
    // Banner props with defaults
    bannerItems = [
        { title: "Duration", time: "2 Years", duration: "4 semesters", icon: "Clock" },
        { title: "Hours Per Week", time: "8-10 Hours", duration: "Per Week", icon: "Hourglass" },
        { title: "Course Fee", time: "INR 35,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner = {
        title: "No Cost EMI",
        subtitle: "EMI starting at",
        amount: "₹5,513 INR",
        iconSrc: "/images/icons/fee.png",
        iconAlt: "hands on rupees"
    },
    showBanner = true,
}: HeroSectionProps) {
    // Process optional HTML fields using the custom hook
    // Helper to detect if a string contains HTML tags
    const containsHtml = (s: unknown) => typeof s === 'string' && /<\/?[a-z][\s\S]*>/i.test(s)

    // Decode HTML entities (handles cases where API returns escaped HTML like '&lt;strong&gt;')
    const decodeHtmlEntities = (input: unknown) => {
        if (typeof input !== 'string') return input
        try {
            // Use DOM when available (client-only component)
            if (typeof document !== 'undefined') {
                const txt = document.createElement('textarea')
                txt.innerHTML = input
                return txt.value
            }
            // Fallback: basic replacements
            return input.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
        } catch {
            return input
        }
    }

    // Prefer explicit Html props, otherwise detect HTML in normal string props
    const subtitleCandidate = typeof subtitleHtml === 'string' && subtitleHtml.length > 0 ? subtitleHtml : typeof subtitle === 'string' ? subtitle : null
    const titleCandidate = typeof titleHtml === 'string' && titleHtml.length > 0 ? titleHtml : typeof title === 'string' ? title : null
    const highlightedCandidate = typeof highlightedTextHtml === 'string' && highlightedTextHtml.length > 0 ? highlightedTextHtml : typeof highlightedText === 'string' ? highlightedText : null
    const descriptionCandidate = typeof descriptionHtml === 'string' && descriptionHtml.length > 0 ? descriptionHtml : typeof description === 'string' ? description : null

    const subtitleSource = subtitleCandidate && containsHtml(decodeHtmlEntities(subtitleCandidate)) ? decodeHtmlEntities(subtitleCandidate) : null
    const titleSource = titleCandidate && containsHtml(decodeHtmlEntities(titleCandidate)) ? decodeHtmlEntities(titleCandidate) : null
    const highlightedSource = highlightedCandidate && containsHtml(decodeHtmlEntities(highlightedCandidate)) ? decodeHtmlEntities(highlightedCandidate) : null
    const descriptionSource = descriptionCandidate && containsHtml(decodeHtmlEntities(descriptionCandidate)) ? decodeHtmlEntities(descriptionCandidate) : null

    // Debug logging
    if (typeof window !== 'undefined') {
        console.log('Hero Section Debug:', {
            descriptionCandidate,
            descriptionSource,
            containsHtml: descriptionCandidate ? containsHtml(decodeHtmlEntities(descriptionCandidate)) : false,
            decoded: descriptionCandidate ? decodeHtmlEntities(descriptionCandidate) : null
        })
    }

    const subtitleHtmlProcessed = useHtmlContent(subtitleSource as string | null)
    const titleHtmlProcessed = useHtmlContent(titleSource as string | null)
    const highlightedHtmlProcessed = useHtmlContent(highlightedSource as string | null)
    const descriptionHtmlProcessed = useHtmlContent(descriptionSource as string | null)

    return (
        <>
            <section className={`relative w-full min-h-screen overflow-hidden flex flex-col`}>
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImageSrc || "/placeholder.svg"}
                        alt={`backgroundImageAlt`}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center center" }}
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Dark overlay on left side */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent lg:to-black/30 z-10"></div>

                {/* Content container */}
                <div className="flex-1 flex items-start lg:items-center relative z-20 py-8 lg:py-12">
                    <div className="container mx-auto px-4 lg:px-8 w-full">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 w-full max-w-[1400px] mx-auto">
                            {/* Left side - Text content and Banner */}
                            <div className="w-full lg:flex-1 relative z-30">
                                <div className="text-white">
                                    {/* Main Heading */}
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 md:mb-4 leading-tight">
                                        <span className="text-[#FFD700]">EARN YOUR</span>
                                        <br />
                                        <span className="text-[#FFD700]">DEGREE</span>
                                    </h1>

                                    {/* Subheading */}
                                    <p className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 leading-relaxed">
                                        FROM A NAAC A+
                                        <br />
                                        ACCREDITATED UNIVERSITY
                                    </p>

                                    {/* Program Pills */}
                                    <div className="bg-[#FFD700] text-black inline-flex flex-wrap items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-lg mb-6 md:mb-8 font-bold text-sm md:text-base lg:text-lg">
                                        <span>MBA</span>
                                        <span className="text-gray-600">|</span>
                                        <span>MCA</span>
                                        <span className="text-gray-600">|</span>
                                        <span>BBA</span>
                                        <span className="text-gray-600">|</span>
                                        <span>BCA</span>
                                        <span className="text-gray-600">|</span>
                                        <span>BA</span>
                                    </div>

                                    {/* Top Rankings Banner */}
                                    <div className="mt-6 md:mt-8">
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 uppercase">
                                            TOP RANKINGS
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                                            {/* Logo 1 */}
                                            <div className="flex items-center justify-center bg-white rounded-lg p-2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                                                <Image
                                                    src="/images/icons/ranking/image.png"
                                                    alt="Certification"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-full w-full"
                                                />
                                            </div>
                                            
                                            {/* Logo 2 */}
                                            <div className="flex items-center justify-center bg-white rounded-lg p-2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                                                <Image
                                                    src="/images/icons/ranking/image-1.png"
                                                    alt="Accreditation"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-full w-full"
                                                />
                                            </div>
                                            
                                            {/* Logo 3 */}
                                            <div className="flex items-center justify-center bg-white rounded-lg p-2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                                                <Image
                                                    src="/images/icons/ranking/image 268.png"
                                                    alt="Recognition"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-full w-full"
                                                />
                                            </div>
                                            
                                            {/* Logo 4 */}
                                            <div className="flex items-center justify-center bg-white rounded-lg p-2 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                                                <Image
                                                    src="/images/icons/ranking/image 360.png"
                                                    alt="Ranking"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain h-full w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Celebrating Section */}
                                    <div className="mt-6 md:mt-8">
                                        <p className="text-sm md:text-base lg:text-lg font-semibold uppercase mb-1 md:mb-2">CELEBRATING</p>
                                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
                                            23+ YEARS
                                        </h2>
                                        <p className="text-sm md:text-base lg:text-lg font-medium uppercase mt-1">OF EXCELLENCE IN EDUCATION</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Registration Form */}
                            <div className="w-full lg:w-[420px] xl:w-[480px] relative z-30 flex-shrink-0 lg:sticky lg:top-8">
                                <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl p-4 md:p-5 lg:p-6 max-h-[90vh] overflow-y-auto">
                                    <h2 className="text-center mb-3 md:mb-4 lg:mb-5">
                                        <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 block">BUILD YOUR CAREER</span>
                                        <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#6BC533] block">REGISTER TODAY!</span>
                                    </h2>

                                    <form className="space-y-2.5 md:space-y-3 lg:space-y-4">
                                        <div>
                                            <label className="block text-gray-700 text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                                                Full Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BC533] focus:border-transparent transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                                                Email ID<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="abcd@example.in"
                                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BC533] focus:border-transparent transition-all"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                            <div>
                                                <label className="block text-gray-700 text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                                                    Phone Number<span className="text-red-500">*</span>
                                                </label>
                                                <div className="flex">
                                                    <div className="flex items-center px-2 md:px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg">
                                                        <span className="text-base md:text-xl mr-1">🇮🇳</span>
                                                        <span className="text-xs md:text-sm text-gray-600">+91</span>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        placeholder="Enter phone number"
                                                        className="flex-1 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#6BC533] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                                                    State<span className="text-red-500">*</span>
                                                </label>
                                                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BC533] focus:border-transparent transition-all text-gray-500">
                                                    <option>Select State</option>
                                                    <option>Delhi</option>
                                                    <option>Maharashtra</option>
                                                    <option>Karnataka</option>
                                                    <option>Tamil Nadu</option>
                                                    <option>Uttar Pradesh</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                                                Program<span className="text-red-500">*</span>
                                            </label>
                                            <select className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BC533] focus:border-transparent transition-all text-gray-500">
                                                <option>Choose Program</option>
                                                <option>MBA</option>
                                                <option>MCA</option>
                                                <option>BBA</option>
                                                <option>BCA</option>
                                                <option>BA</option>
                                                <option>Executive MBA</option>
                                            </select>
                                        </div>

                                        <div className="flex items-start gap-2 md:gap-3 pt-1 md:pt-2">
                                            <input
                                                type="checkbox"
                                                id="consent"
                                                defaultChecked
                                                className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 text-[#6BC533] border-gray-300 rounded focus:ring-[#6BC533] cursor-pointer flex-shrink-0"
                                            />
                                            <label htmlFor="consent" className="text-[10px] md:text-xs text-gray-600 leading-relaxed cursor-pointer">
                                                I authorize Uttaranchal University and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND / NDNC.
                                            </label>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-4">
                                            <button
                                                type="submit"
                                                className="flex-1 bg-[#6BC533] text-white py-2.5 md:py-3 px-4 md:px-6 rounded-full font-semibold text-sm md:text-base hover:bg-[#5ba428] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                Register
                                            </button>
                                            <button
                                                type="button"
                                                className="flex-1 bg-white text-[#6BC533] py-2.5 md:py-3 px-4 md:px-6 rounded-full font-semibold text-sm md:text-base border-2 border-[#6BC533] hover:bg-[#6BC533] hover:text-white transition-all duration-200 whitespace-nowrap"
                                            >
                                                Already Registered ?
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation keyframes */}
                {animateContent && (
                    <style jsx global>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
                )}
            </section>
        </>
    )
}

// NEW – provide both default and named exports
export default Hero
export { Hero as HeroSection }
