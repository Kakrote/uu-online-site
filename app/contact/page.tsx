import CommonLayout from '@/components/layouts/CommonLayout'
import HeroSection from '@/components/ui/hero-section'
import { BreadcrumbsAuto } from '@/components/ui/breadcrumbs-auto'
import React from 'react'
import ContactHelpline from './contact-helpline'
import LocateUsMapSection from '@/components/ui/locate-us-map-section'

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

            <div className='container mx-auto px-4 py-4'>
                <BreadcrumbsAuto />
            </div>

            <ContactHelpline/>

            <LocateUsMapSection/>
        </CommonLayout>
    )
}

export default Contact