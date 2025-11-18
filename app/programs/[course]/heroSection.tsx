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

function HeroSection({
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
    // Merge heroConfig with props - props take precedence
    const finalSubtitle = subtitle ?? heroConfig?.subtitle ?? "BEST"
    const finalTitle = title ?? heroConfig?.title ?? "STUDENT FRIENDLY"
    const finalHighlightedText = highlightedText ?? heroConfig?.highlightedText ?? "UNIVERSITY!"
    const finalDescription = description ?? heroConfig?.description ?? "We are a multi-cultural, research-oriented, and student-friendly university where knowledge is imparted in a harmonious and friendly environment."
    const finalButtonText = buttonText ?? heroConfig?.buttonText ?? "Apply Now →"
    const finalButtonUrl = buttonUrl ?? heroConfig?.buttonUrl ?? "#"
    const finalBrochure = brochure ?? heroConfig?.brochure ?? "Download Brochure"
    const finalBrochureUrl = brochureUrl ?? brouchureUrl ?? heroConfig?.brochureUrl ?? "#"
    const finalBackgroundImageSrc = backgroundImageSrc ?? heroConfig?.backgroundImageSrc ?? "/images/hero-section/student-with-book-in-uu.png"
    const finalBackgroundImageAlt = backgroundImageAlt ?? heroConfig?.backgroundImageAlt ?? "online course hero section image"
    const finalHighlightColor = highlightColor ?? heroConfig?.highlightColor ?? "#6BC533"
    const finalShowGradientOverlay = showGradientOverlay ?? heroConfig?.showGradientOverlay ?? false

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
    const subtitleCandidate = typeof subtitleHtml === 'string' && subtitleHtml.length > 0 ? subtitleHtml : typeof finalSubtitle === 'string' ? finalSubtitle : null
    const titleCandidate = typeof titleHtml === 'string' && titleHtml.length > 0 ? titleHtml : typeof finalTitle === 'string' ? finalTitle : null
    const highlightedCandidate = typeof highlightedTextHtml === 'string' && highlightedTextHtml.length > 0 ? highlightedTextHtml : typeof finalHighlightedText === 'string' ? finalHighlightedText : null
    const descriptionCandidate = typeof descriptionHtml === 'string' && descriptionHtml.length > 0 ? descriptionHtml : typeof finalDescription === 'string' ? finalDescription : null

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
            <section className={`relative w-full ${height} overflow-hidden flex flex-col`}>
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImageSrc || "/placeholder.svg"}
                        alt={`${backgroundImageAlt}`}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center center" }}
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* SVG overlay - left side with adjustable width - only rendered if overlaySrc is provided */}
                {overlaySrc && useOverlayShape && (
                    <div className="absolute inset-y-0 left-0 z-10" style={{ width: "min(100%, 850px)" }}>
                        <div className="relative w-full h-full">
                            <Image
                                src={overlaySrc || "/placeholder.svg"}
                                alt="Diagonal overlay"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Gradient overlay - default option */}
                {showGradientOverlay && <div className={`absolute inset-0 z-10 ${gradientOverlayClasses}`}></div>}

                {/* Content container */}
                <div className="flex-1 flex items-center   relative z-20">
                    <div className=" min-w-[70%] mx-5 px-5">
                        <div
                            className={`${contentMaxWidth} text-white relative z-30 ${animateContent ? "opacity-0 translate-y-10 animate-[fadeInUp_0.8s_ease-out_forwards]" : ""
                                }`}
                        >
                            {subtitleSource ? (
                                <h2
                                    className="text-2xl  font-bold mb-2 uppercase"
                                    dangerouslySetInnerHTML={subtitleHtmlProcessed.safeHtml}
                                />
                            ) : (
                                subtitle && <h2 className="text-2xl  font-bold mb-2 uppercase">{subtitle}</h2>
                            )}

                            {titleSource ? (
                                <h1
                                    className="text-5xl md:text-7xl font-extrabold mb-4 uppercase"
                                    dangerouslySetInnerHTML={titleHtmlProcessed.safeHtml}
                                />
                            ) : (
                                title && <h1 className="text-5xl  font-extrabold mb-2 uppercase">{title}</h1>
                            )}

                            {highlightedSource ? (
                                <h1
                                    className="text-5xl md:text-7xl font-extrabold mb-6"
                                    style={{ color: highlightColor }}
                                    dangerouslySetInnerHTML={highlightedHtmlProcessed.safeHtml}
                                />
                            ) : (
                                highlightedText && (
                                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6" style={{ color: highlightColor }}>
                                        {highlightedText}
                                    </h1>
                                )
                            )}

                            {descriptionSource ? (
                                <p className="text-lg mb-8" dangerouslySetInnerHTML={descriptionHtmlProcessed.safeHtml} />
                            ) : (
                                description && <p className="text-lg mb-8">{description}</p>
                            )}
                            {showButtom && buttonText && buttonUrl && (
                                <Link
                                    href={buttonUrl}
                                    className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-8 py-3 rounded-full hover:bg-[#5ba428] transition-colors text-lg font-medium"
                                >
                                    {buttonText}
                                </Link>
                            )}
                            {showButtom && brochure && brouchureUrl && (
                                <Link
                                    href={brouchureUrl}
                                    className="inline-flex items-center mt-3 gap-2 border text-white px-8 py-3 lg:mx-5 rounded-full hover:bg-[#5ba428] transition-colors text-lg font-medium"
                                >
                                    {brochure}
                                </Link>
                            )}

                            {/* Render mobile content (e.g., form) inside the hero on small screens */}
                            {mobileSlot && (
                                <div className={`block md:hidden mt-4 ${mobileSlotWrapperClasses ?? ""}`}>
                                    {mobileSlot}
                                </div>
                            )}
                            {/* banners */}
                            {showBanner && (
                                <div className="z-50 text-black mt-6 md:mt-10">
                                    {/* Horizontal scrollable banner container */}
                                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                                        {/* left white banner */}
                                        {bannerItems && bannerItems.length > 0 && (
                                            <div className="flex flex-shrink-0 mb-6 py-2 md:py-3 items-center rounded-2xl bg-white snap-start">
                                                {bannerItems.map((item, index) => (
                                                    <div key={item.title}
                                                        className={`p-2 sm:p-3 md:p-4 flex flex-col items-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] ${index !== 0 ? 'border-l' : ''}`}
                                                    >
                                                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center mb-1">
                                                            {/** Render the icon component using icon mapping */}
                                                            {(() => {
                                                                const IconComponent = item.icon ? iconMap[item.icon] : null
                                                                return IconComponent ? (
                                                                    <span className="bg-black rounded-full text-white p-0.5 sm:p-1 flex items-center justify-center">
                                                                        <IconComponent size={8} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                                                                    </span>
                                                                ) : (
                                                                    <span className=""> </span>
                                                                )
                                                            })()}
                                                            <span className="text-[10px] sm:text-xs md:text-sm text-center whitespace-nowrap px-1">{item.title}</span>
                                                        </div>
                                                        <span className="text-[#6bc533] font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center whitespace-nowrap">{item.time}</span>
                                                        <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-center whitespace-nowrap">{item.duration}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* right green banner (EMI) */}
                                        {emiBanner && (
                                            <div className="flex flex-shrink-0 bg-[#6bc533] text-white w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] p-3 sm:p-4 md:p-5 rounded-2xl h-fit relative overflow-hidden snap-start">
                                                <div className="flex flex-col z-10">
                                                    <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{emiBanner.title}</span>
                                                    <span className="text-[10px] sm:text-xs md:text-sm">{emiBanner.subtitle}</span>
                                                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{emiBanner.amount}</span>
                                                </div>
                                                {emiBanner.iconSrc && (
                                                    <div className="absolute bottom-0 right-0 rounded-2xl ">
                                                        <Image
                                                            src={emiBanner.iconSrc}
                                                            alt={emiBanner.iconAlt || "EMI icon"}
                                                            width={30}
                                                            height={30}
                                                            className="object-cover sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
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
export default HeroSection
export { HeroSection }
export type { BannerItem, EMIBanner }