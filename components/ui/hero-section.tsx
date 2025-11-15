"use client"

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { useHtmlContent } from "@/hooks/use-html-content"
import { createSafeHtml } from "@/lib/html-utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Announcement {
  id: number
  text: string
  buttonText: string
  link: string
}

interface HeroSectionProps {
  // Text content
  subtitle?: string
  title?: ReactNode
  // HTML variants (if you want to pass sanitized HTML strings)
  subtitleHtml?: string
  titleHtml?: string
  highlightedTextHtml?: string
  descriptionHtml?: string
  highlightedText?: string
  description?: string

  // Button
  buttonText?: string
  buttonUrl?: string

  // Images
  backgroundImageSrc: string
  backgroundImageAlt: string
  overlaySrc?: string
  useOverlayShape?: boolean // New prop to explicitly request the overlay shape

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
}

function HeroSection({
  // Text content with defaults
  subtitle = "BEST",
  title = (
    <>
      STUDENT
      <br />
      FRIENDLY
    </>
  ),
  highlightedText = "UNIVERSITY!",
  description = "We are a multi-cultural, research-oriented, and student-friendly university where knowledge is imparted in a harmonious and friendly environment.",

  // Button with defaults
  buttonText = "Apply Now →",
  buttonUrl = "#",

  // Images (required)
  backgroundImageSrc,
  backgroundImageAlt,
  overlaySrc,
  useOverlayShape = false, // Default to false to use gradient instead of shape

  // Styling options with defaults
  height = "h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)]",
  overlayWidthMobile = "w-full",
  overlayWidthMd = "md:w-3/5",
  overlayWidthLg = "lg:w-1/2",
  contentMaxWidth = "max-w-3xl",
  highlightColor = "#6BC533",
  overlayWidthXl = "xl:w-3/5",

  // Animation
  animateContent = true,
  showButtom = true,

  // Gradient overlay
  showGradientOverlay = false,
  gradientOverlayClasses = "bg-gradient-to-r from-black/100 via-black/40 to-transparent",
  // Optional HTML props
  subtitleHtml,
  titleHtml,
  highlightedTextHtml,
  descriptionHtml,
  mobileSlot,
  mobileSlotWrapperClasses,
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
      <section className={`relative w-full ${height} overflow-hidden flex flex-col`}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageSrc || "/placeholder.svg"}
            alt={backgroundImageAlt}
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
        <div className="flex-1 flex items-center relative z-20">
          <div className="container mx-auto px-4">
            <div
              className={`${contentMaxWidth} text-white relative z-30 ${
                animateContent ? "opacity-0 translate-y-10 animate-[fadeInUp_0.8s_ease-out_forwards]" : ""
              }`}
            >
              {subtitleSource ? (
                <h2
                  className="text-4xl md:text-5xl font-bold mb-2 uppercase"
                  dangerouslySetInnerHTML={subtitleHtmlProcessed.safeHtml}
                />
              ) : (
                subtitle && <h2 className="text-4xl md:text-5xl font-bold mb-2 uppercase">{subtitle}</h2>
              )}

              {titleSource ? (
                <h1
                  className="text-5xl md:text-7xl font-extrabold mb-4 uppercase"
                  dangerouslySetInnerHTML={titleHtmlProcessed.safeHtml}
                />
              ) : (
                title && <h1 className="text-5xl md:text-7xl font-extrabold mb-4 uppercase">{title}</h1>
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

              {/* Render mobile content (e.g., form) inside the hero on small screens */}
              {mobileSlot && (
                <div className={`block md:hidden mt-4 ${mobileSlotWrapperClasses ?? ""}`}>
                  {mobileSlot}
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
