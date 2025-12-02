import CommonLayout from '@/components/layouts/CommonLayout'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import HeroSection from '@/components/ui/hero-section'
import React from 'react'
import GrievanceRedressal from './grievance-redress'

import Commite from './committeeTable'
import { OurScope } from './our-scope'
import SOPSection from './sop-section'

const Grievance = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageAlt='background image'
                backgroundImageSrc='/images/backgrouds/blue_bg.svg'
                height='h-[500px]'
                title='University Student Grievance Redressal'
                subtitle=''
                description='For Online Learning Programmes'
                highlightedText=''
            />
            <div className='container mx-auto p-3'>
                <BreadcrumbsAuto />
            </div>
            <div className='container mx-auto px-3 py-4'>

                <GrievanceRedressal />
            </div>


            <Commite/>
            <OurScope/>
            <SOPSection />
        </CommonLayout>
    )
}

export default Grievance