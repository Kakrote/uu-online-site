import CommonLayout from '@/components/layouts/CommonLayout'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import HeroSection from '@/components/ui/hero-section'
import React from 'react'
import FAQSection from './faq-section'
import AnimatedSection from '@/components/ui/AnimatedSection'

const FAQ = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageAlt='blue background '
                backgroundImageSrc='/images/backgrouds/blue-2.svg'
                title={
                    <>
                        FAQ
                    </>
                }
                subtitle=''
                highlightedText=''
                description=''
                showButtom={false}
            />
            <AnimatedSection>
                <div className='container mx-auto px-3 py-3'>
                    <BreadcrumbsAuto />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <FAQSection />
            </AnimatedSection>
        </CommonLayout>
    )
}

export default FAQ