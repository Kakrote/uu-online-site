import React from 'react'
import CourseCard from '../Course-Card'
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ExplorePrograms() {
    // Sample data for undergraduate courses
    const undergraduateCourses = [
        {
            courseName: "Bachelor of Business Administration (BBA)",
            courseSlug: "bba",
            brouchureUrl: "https://example.com/brochure/bba.pdf",
            courseDuration: "3 Years",
            courseLevel: "Undergraduate",
            courseImage: "/images/cards/tec.png"
        },
        {
            courseName: "Bachelor of Computer Application (BCA)",
            courseSlug: "bca",
            brouchureUrl: "https://example.com/brochure/bca.pdf",
            courseDuration: "3 Years",
            courseLevel: "Undergraduate",
            courseImage: "/images/cards/tec-1.png"
        },
        {
            courseName: "Bachelor of Arts (BA)",
            courseSlug: "ba",
            brouchureUrl: "https://example.com/brochure/ba.pdf",
            courseDuration: "3 Years",
            courseLevel: "Undergraduate",
            courseImage: "/images/cards/mba-2.png"
        }
    ];

    // Sample data for postgraduate courses
    const postgraduateCourses = [
        {
            courseName: "Master of Business Administration (MBA)",
            courseSlug: "mba",
            brouchureUrl: "https://example.com/brochure/mba.pdf",
            courseDuration: "2 Years",
            courseLevel: "Postgraduate",
            courseImage: "/images/cards/mba.png"
        },
        {
            courseName: "Master of Computer Application (MCA)",
            courseSlug: "mca",
            brouchureUrl: "https://example.com/brochure/mca.pdf",
            courseDuration: "2 Years",
            courseLevel: "Postgraduate",
            courseImage: "/images/cards/mba-3.png"
        },
        {
            courseName: "Executive MBA",
            courseSlug: "executivemba",
            brouchureUrl: "https://example.com/brochure/executive-mba.pdf",
            courseDuration: "18 Months",
            courseLevel: "Executive",
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
            <AnimatedSection>
                <section className='px-3 mb-12'>
                    <h2 className='text-[20px] font-bold text-[#2C83F5] mb-6 uppercase'>Undergraduate <span className='text-black'>Programs</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {undergraduateCourses.map((course, index) => (
                            <AnimatedSection 
                                key={index}
                                delay={index * 0.5}
                                direction="up"
                                duration={0.6}
                            >
                                <CourseCard
                                    courseName={course.courseName}
                                    courseSlug={course.courseSlug}
                                    brouchureUrl={course.brouchureUrl}
                                    courseDuration={course.courseDuration}
                                    courseLevel={course.courseLevel}
                                    courseImage={course.courseImage}
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Postgraduate Courses Section */}
            <AnimatedSection delay={0.3}>
                <section className='px-3 mb-12'>
                    <h2 className='text-[20px] font-bold text-[#2C83F5] mb-6 uppercase'>Postgraduate <span className='text-black'>Programs</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {postgraduateCourses.map((course, index) => (
                            <AnimatedSection 
                                key={index}
                                delay={(index + 3) * 0.2} // Start after undergraduate cards
                                direction="up"
                                duration={0.6}
                            >
                                <CourseCard
                                    courseName={course.courseName}
                                    courseSlug={course.courseSlug}
                                    brouchureUrl={course.brouchureUrl}
                                    courseDuration={course.courseDuration}
                                    courseLevel={course.courseLevel}
                                    courseImage={course.courseImage}
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </section>
            </AnimatedSection>
        </main>
    )
}
