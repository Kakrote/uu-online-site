"use client"
import React from 'react'
import Image from 'next/image'

interface IconData {
    src: string
    alt: string
    contact: string
    action?: () => void
}

const Drawer = () => {
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const computeVisibility = () => {
            if (typeof window === 'undefined') return

            const isDesktop = window.matchMedia('(min-width: 1024px)').matches
            const heroEl = document.querySelector('#hero, [data-hero]') as HTMLElement | null

            // Fallback behavior if no hero is found
            if (!heroEl) {
                setIsVisible(window.scrollY > 200)
                return
            }

            const rect = heroEl.getBoundingClientRect()
            const viewportH = window.innerHeight || document.documentElement.clientHeight
            // Check if any part of hero is currently visible in the viewport
            const heroInView = rect.top < viewportH && rect.bottom > 0

            if (isDesktop) {
                // On large screens: hide when hero is in view; show when scrolled past the hero
                setIsVisible(!heroInView)
            } else {
                // On small screens: keep previous UX – show after some scroll
                setIsVisible(window.scrollY > 200)
            }
        }

        // Run on mount
        computeVisibility()
        // Listen to scroll and resize to recompute
        window.addEventListener('scroll', computeVisibility, { passive: true })
        window.addEventListener('resize', computeVisibility)

        return () => {
            window.removeEventListener('scroll', computeVisibility)
            window.removeEventListener('resize', computeVisibility)
        }
    }, [])

    // the icons we have with their corresponding contact info
    const iconData: IconData[] = [
        {
            src: "/images/icons/mobile.png",
            alt: "Call Us",
            contact: "Call: +91 98765 43210",
            action: () => window.open('tel:+919876543210', '_self')
        },
        {
            src: "/images/icons/whatsapp.png",
            alt: "WhatsApp",
            contact: "WhatsApp: +91 98765 43210",
            action: () => window.open('https://wa.me/919876543210', '_blank')
        },
        {
            src: "/images/icons/loaction.svg",
            alt: "360 view",
            contact: "Uttaranchal University 360 view",
            action: () => window.open('https://virtual-tour.uudoon.in/', '_blank')
        }
    ]

    if (!isVisible) return null

    return (
        <div className='flex lg:flex-col gap-4 lg:gap-8 justify-center items-center lg:w-16'>
            <div className='flex lg:flex-col items-center gap-4'>
                {iconData.map((item, index) => (
                    <div key={index}>
                        <button
                            onClick={item.action}
                            className="p-2 lg:p-3 backdrop-blur-sm rounded-full cursor-pointer transition-all duration-300 hover:scale-110 "
                            aria-label={`${item.alt} - ${item.contact}`}
                            title={item.contact}
                            disabled={!item.action}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={30}
                                height={30}
                                className='object-cover transition-transform duration-300'
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Drawer   