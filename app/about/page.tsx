import CommonLayout from '@/components/layouts/CommonLayout'
import AboutUniversity from '@/components/ui/about-university'
import AboutUniversitySection from '@/components/ui/about-university-section'
import HeroSection from '@/components/ui/hero-section'
import { BreadcrumbsAuto } from '@/components/ui/breadcrumbs-auto'
import React from 'react'
import Quality from './Quality'
import IntellectualAssetsSection from '@/components/ui/intellectual-assets-section'
import WhyChooseSection from '@/components/ui/why-choose-section'
import { UniversityShowcase } from './universityShow'
import LearnWithUsSection from '@/components/ui/about-learn-with-us-section'
import NextStep from '@/components/ui/nextStep'
import StudentTestimonials from '@/components/ui/student-testimonials'
import AnimatedSection from '@/components/ui/AnimatedSection'

const page = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageSrc='/images/hero-section/uu-building.png'
                backgroundImageAlt='students image'
                showButtom={true}
                showGradientOverlay={true}
            />

            <AnimatedSection>
                <div className='container mx-auto px-4 py-4'>
                    <BreadcrumbsAuto />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <div className='container px-3 py-3 mx-auto'>
                    <AboutUniversitySection
                        imageSrc='/images/hero-section/uu.png'
                        imageAlt='university building'
                    />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <Quality />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <IntellectualAssetsSection />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <WhyChooseSection />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <UniversityShowcase />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <div className='max-w-7xl px-3 py-3 mx-auto'>
                    <LearnWithUsSection />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <NextStep/>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <StudentTestimonials/>
            </AnimatedSection>

        </CommonLayout>
    )
}

export default page
