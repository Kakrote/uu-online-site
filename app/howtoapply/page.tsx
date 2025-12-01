import CommonLayout from '@/components/layouts/CommonLayout'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import HeroSection from '@/components/ui/hero-section'
import HowToApplySection from '@/components/ui/how-to-apply-section'
import React from 'react'
import { ImportantInstructions } from './instructions'
import { DocumentsRequired } from './document'
import FeePaymentOptions from './feePayment'



const defaultInstructions = [
    "Before applying, make sure you have read and understood all the contents of the University website (www.onlineuu.in) and Prospectus.",
    "The application form has different sections and is designed to get to know the applicant. You are advised to fill all the sections carefully.",
    "Make sure that you provide your authentic e-mail ID and correct phone number which should be functional during the registration process as all communication will be shared through SMS/ Emails.",
    "Name and other details entered in the application form must be correct and as per your educational qualification documents.",
    "The applicant should attach all mandatory documents to prevent the application form from being considered 'incomplete'. The applicant's photograph, government identification document, and mark-sheets should be clearly visible and not password-protected.",
]

const admissionDocuments = [
    { id: 1, text: "Scanned Passport size Colored Photograph" },
    { id: 2, text: "Scanned Signature" },
    { id: 3, text: "Scanned Copy(ies) of Qualification Documents starting from 10th to highest qualification" },
    { id: 4, text: "Scanned Copy(ies) of Qualification Documents starting from 10th to highest qualification" },
    {
        id: 5,
        text: "Scanned Copy(ies) of Diploma/ Degree of Graduation/ Post Graduation/ PG Diploma or equivalent as applicable.",
    },
    { id: 6, text: "Scanned Copy of Valid ID Proof with Photograph issued by Govt." },
    { id: 7, text: "Scanned Copy of Residence/ Address proof (if different from ID Proof)" },
]


const HowToApply = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageAlt='the image is for backgeound'
                backgroundImageSrc='/images/backgrouds/blue-2.svg'
                height='h-[500px]'
                title=""
                subtitle=''
                description=''
                showButtom={false}
            />
            <div className='mx-auto container px-3 py-3'>
                <BreadcrumbsAuto />
            </div>
            <HowToApplySection />
            <div className=' px-3 py-3'>
                <ImportantInstructions
                    instructions={defaultInstructions}
                />
            </div>

            <DocumentsRequired
                title="DOCUMENTS REQUIRED"
                subtitle="TO COMPLETE YOUR ADMISSION"
                documents={admissionDocuments}
                note={{
                    prefix: "Note:",
                    message: "YOU NEED TO SCAN THE ORIGINAL DOCUMENTS, NOT THE PHOTOCOPIES.",
                }}
            />
            <FeePaymentOptions />
        </CommonLayout>
    )
}

export default HowToApply