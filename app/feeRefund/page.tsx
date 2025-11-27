import CommonLayout from '@/components/layouts/CommonLayout'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import HeroSection from '@/components/ui/hero-section'
import React from 'react'
import { PolicySection } from './polacySection'



const refundPolicies = [
    {
        id: 1,
        text: "All applications regarding refund of fee, must be addressed to refund@onlineuu.in",
        highlight: {
            text: "refund@onlineuu.in",
            href: "mailto:refund@onlineuu.in",
        },
    },
    {
        id: 2,
        text: "Candidate must submit the refund application online in the prescribed format within the stipulated date (check Important dates)",
        highlight: {
            text: "Important dates",
            href: "#important-dates",
        },
    },
    {
        id: 3,
        text: "University will follow the UGC Guidelines for Refund of Fee",
    },
    {
        id: 4,
        text: "Refund application will take 30 working days as processing time",
    },
    {
        id: 5,
        text: "Refund requests made verbally or processed on any unauthorized platform will not be entertained",
    },
    {
        id: 6,
        text: "Amount paid for the Application fee, Processing fee, Late fee, Program Transfer fee, and other charges is non-refundable under all circumstances, unless otherwise specifically prescribed as refundable.",
    },
    {
        id: 7,
        text: "Please note that the Fee refund date for the last admission session, i.e., the July 2024 session is over as per UGC guidelines. No fee refund applications will be processed for the July 2024 session.",
    },
]

const FeeRefund = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageAlt='background image'
                backgroundImageSrc='/images/backgrouds/blue-2.svg'
                height='h-[500px]'
                title={
                    <>
                        <span className='text-2xl md:text-4xl'>Fee Refund &</span>
                        <br />
                        Cancellation Policy
                    </>
                }
                subtitle=''
                description=''
                highlightedText=''
                showButtom={false}
            />
            <div className='container mx-auto px-3 py-3'>
                <BreadcrumbsAuto />
            </div>
            <div className='container mx-auto px-3 py-3'>

                <PolicySection policies={refundPolicies} title='Fee refund & cancellation policy' />
            </div >
        </CommonLayout>
    )
}

export default FeeRefund
