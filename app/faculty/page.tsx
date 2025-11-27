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
        // image: "/images/faces/uscs.png",
        // isColorImage: true,
    },
    {
        id: "2",
        name: "Dr. Archana Saxena",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "3",
        name: "Dr. Sameer Dev Sharma",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "4",
        name: "Dr. Shailesh Chamola",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "5",
        name: "Dr. Megha Aggarwal",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "6",
        name: "Dr. Farman Ali",
        designation: "Associate Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "7",
        name: "Dr. Ishteyaaq Ahmad",
        designation: "Associate Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "8",
        name: "Dr. Saurabh Pratap Singh Rathore",
        designation: "Associate Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "9",
        name: "Gurpreet Sharma",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "10",
        name: "Pawan Painuli",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "11",
        name: "Gurpreet Singh",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "12",
        name: "Rashmi Pal",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "13",
        name: "Dr. Bipin Chandra Kandpal",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "14",
        name: "Sanjay Singh Chauhan",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "15",
        name: "Pratibha Pandey",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "16",
        name: "Dr. Deepshi Garg",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "17",
        name: "Dr. Preeti Tyagi",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "18",
        name: "Dr. Jasmeet Kaur",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "19",
        name: "Antriksh Barakoti",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "20",
        name: "Vibhor Sharma",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "21",
        name: "Rachit Rastogi",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "22",
        name: "Shubha Bhattacharya",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "23",
        name: "Dr. Kundan Singh",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "24",
        name: "Dr. Kawerinder Singh Sidhu",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "25",
        name: "Dr. Rakesh Semwal",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "26",
        name: "Ayushi Sharma",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "27",
        name: "Dr Navnit Kumar Shukla",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "28",
        name: "Barkha Rani",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "29",
        name: "Ashutosh Sharma",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "30",
        name: "Mr. Hitendra Singh Chauhan",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "31",
        name: "Mr. Abhishek Negi",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "32",
        name: "Mrs. Sapna Bisht",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
]
const facultyMembers2: FacultyMember[] = [
    {
        id: "1",
        name: "Dr. Kartikey",
        designation: "Director & Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: true,
    },
    {
        id: "2",
        name: "Dr. Anil Singh Chauhan",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "3",
        name: "Dr. Monisha Awasthi",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "4",
        name: "Dr. Reeta Rautela",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "5",
        name: "Dr. Lalita Singh",
        designation: "Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "6",
        name: "Dr. Pinki Chugh",
        designation: "Associate Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "7",
        name: "Abhishek Kumar Pathak",
        designation: "Assistant Professor / Assistant Director",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "8",
        name: "Dr. Saurabh Dhyani",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "9",
        name: "Praveen Kumar Shah",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "10",
        name: "Shubham Bhatt",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "11",
        name: "Abhishek Tiwari",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "12",
        name: "Anurag Rana",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "13",
        name: "Pragya Chaudhary",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "14",
        name: "Ashutosh",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "15",
        name: "Akhilesh Pandey",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
        // isColorImage: false,
    },
    {
        id: "16",
        name: "Noopur Dass",
        designation: "Assistant Professor",
        // image: "/images/faces/uscs.png",
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
            <div className='container mx-auto'>

                <FacultySection departmentName='BA,BCA,BBA' members={facultyMembers2} departmentPrefix="FACULTY OF" />
            </div>

        </CommonLayout>
    )
}

export default Facultys
