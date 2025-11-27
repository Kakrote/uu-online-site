import CommonLayout from '@/components/layouts/CommonLayout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import FromTheDeskOfDirector from '@/components/ui/disciplines-from-the-desk-of-director'
import HeroSection from '@/components/ui/hero-section'
import React from 'react'
import { FacultySection } from './faculty-section'
import { FacultyMember } from './faculty-card'


const facultyMembers: FacultyMember[] = [
    {
        id: "1",
        name: "Dr. Manish Badoni",
        designation: "Director",
        image: "/images/faces/uscs.png",
        // isColorImage: true,
    },
    {
        id: "2",
        name: "Mr. Hitendra Singh Chauhan",
        designation: "Assistant Professor",
        image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "3",
        name: "Mr. Abhishek Negi",
        designation: "Assistant Professor",
        image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "4",
        name: "Mrs. Sapna Bisht",
        designation: "Assistant Professor",
        image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
]



const Facultys = () => {
    return (
        <CommonLayout>
            <HeroSection
                backgroundImageAlt='background image'
                backgroundImageSrc='/images/backgrouds/blue-2.svg'
                height='h-[450px]'
                title={
                    <>
                        <span className='text-2xl md:text-4xl'>Faculty of</span> <br />Online learning
                    </>
                }
                subtitle=''
                highlightedText=''
                description=''
                showButtom={false}
                showGradientOverlay={true}
            />
            <div className='container mx-auto px-3 py-3'>
                <BreadcrumbsAuto />
            </div>
            <FromTheDeskOfDirector
                directorImage='/images/faces/director.png'
                readMoreContent='Uttaranchal University which is a premier Institute in India to provide best quality education in various disciplines of Science with hands-on training, dissertation, industrial tours, seminar presentation and scientific activities. The Best quality education is provided with the help of well qualified'
                directorMessage='Uttaranchal University which is a premier Institute in India to provide best quality education in various disciplines of Science with hands-on training, dissertation, industrial tours, seminar presentation and scientific activities. The Best quality education is provided with the help of well qualified'
                directorName='Dr. Kartikey'
                directorTitle='Director, Online Uttaranchal University'
                disciplineColor='#6bc533'
                directorQoute='I extend a warm welcome to all the students in Online Uttaranchal University'
            />

            <div className='container mx-auto'>

                <FacultySection departmentName='MCA & MBA' members={facultyMembers} departmentPrefix="FACULTY OF" />
            </div>

        </CommonLayout>
    )
}

export default Facultys
