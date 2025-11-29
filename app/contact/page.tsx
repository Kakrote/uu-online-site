import CommonLayout from '@/components/layouts/CommonLayout'
import HeroSection from '@/components/ui/hero-section'
import { BreadcrumbsAuto } from '@/components/ui/breadcrumbs-auto'
import React from 'react'
import ContactHelpline from './contact-helpline'
import LocateUsMapSection from '@/components/ui/locate-us-map-section'
import AnimatedSection from '@/components/ui/AnimatedSection'

const Contact = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageAlt='backgroud svg'
                backgroundImageSrc='/images/backgrouds/blue_bg.svg'
                height='h-[400px]'
                subtitle="We'd love to hear from you"
                title="Contact US"
                highlightedText=''
                description=''
                showButtom={false}
            />

            <AnimatedSection>
                <div className='container mx-auto px-4 py-4'>
                    <BreadcrumbsAuto />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <div className='container mx-auto px-4 py-4'>
                    <ContactHelpline />
                </div>

            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <LocateUsMapSection />
            </AnimatedSection>
        </CommonLayout>
    )
}

export default Contact