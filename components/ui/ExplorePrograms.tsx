import React from 'react'
import CourseCard from '../Course-Card'

export default function ExplorePrograms() {
    // Sample data for undergraduate courses
    const undergraduateCourses = [
        {
            courseName: "B.Sc Computer Science",
            courseSlug: "bsc-computer-science",
            brouchureUrl: "https://example.com/brochure/bsc-cs.pdf",
            courseDuration: "3 Years",
            courseLevel: "Undergraduate",
            courseImage: "/images/cards/tec-1.png"
        },
        {
            courseName: "BBA Business Administration",
            courseSlug: "bba-business-administration",
            brouchureUrl: "https://example.com/brochure/bba.pdf",
            courseDuration: "3 Years",
            courseLevel: "Undergraduate",
            courseImage: "/images/cards/tec.png"
        },
        {
            courseName: "B.Com Commerce",
            courseSlug: "bcom-commerce",
            brouchureUrl: "https://example.com/brochure/bcom.pdf",
            courseDuration: "3 Years",
            courseLevel: "Undergraduate",
            courseImage: "/images/cards/mba-2.png"
        }
    ];

    // Sample data for postgraduate courses
    const postgraduateCourses = [
        {
            courseName: "M.Sc Data Science",
            courseSlug: "msc-data-science",
            brouchureUrl: "https://example.com/brochure/msc-ds.pdf",
            courseDuration: "2 Years",
            courseLevel: "Postgraduate",
            courseImage: "/images/cards/mba-3.png"
        },
        {
            courseName: "MBA Marketing",
            courseSlug: "mba-marketing",
            brouchureUrl: "https://example.com/brochure/mba-marketing.pdf",
            courseDuration: "2 Years",
            courseLevel: "Postgraduate",
            courseImage: "/images/cards/mba.png"
        },
        {
            courseName: "M.Com Finance",
            courseSlug: "mcom-finance",
            brouchureUrl: "https://example.com/brochure/mcom-finance.pdf",
            courseDuration: "2 Years",
            courseLevel: "Postgraduate",
            courseImage: "/images/cards/mba-1.png"
        }
    ];

    return (
        <main className='bg-white text-[#000] container mx-auto p-3 min-h-screen '>
            {/* headers title */}
            <header className='flex flex-col md:flex-row md:justify-between  px-3 mb-8 mt-8'>
                {/* left side text  */}
                <div>
                    <h3 className='text-2xl lg:text-[36px] uppercase font-bold'>Explore the Best</h3>
                    <h1 className='text-4xl lg:text-[72px] uppercase py-3 md:leading-[65px] max-w-xl font-bold text-[#6bc533]'>Online Degree Programs</h1>
                </div>
                {/* right side text */}
                <div className='max-w-xl p-2 flex items-end text-justify '>
                    <p className='text-[20px] '>You will learn UGC Entitled Online Degree Programs from the best at Uttaranchal University, as we impart world-class education in the true sense with our leading international faculty</p>
                </div>
            </header>

            {/* Undergraduate Courses Section */}
            <section className='px-3 mb-12'>
                <h2 className='text-[20px] font-bold text-[#2C83F5] mb-6 uppercase'>Undergraduate <span className='text-black'>Programs</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {undergraduateCourses.map((course, index) => (
                        <CourseCard
                            key={index}
                            courseName={course.courseName}
                            courseSlug={course.courseSlug}
                            brouchureUrl={course.brouchureUrl}
                            courseDuration={course.courseDuration}
                            courseLevel={course.courseLevel}
                            courseImage={course.courseImage}
                        />
                    ))}
                </div>
            </section>

            {/* Postgraduate Courses Section */}
            <section className='px-3 mb-12'>
                 <h2 className='text-[20px] font-bold text-[#2C83F5] mb-6 uppercase'>Postgraduate <span className='text-black'>Programs</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {postgraduateCourses.map((course, index) => (
                        <CourseCard
                            key={index}
                            courseName={course.courseName}
                            courseSlug={course.courseSlug}
                            brouchureUrl={course.brouchureUrl}
                            courseDuration={course.courseDuration}
                            courseLevel={course.courseLevel}
                            courseImage={course.courseImage}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
