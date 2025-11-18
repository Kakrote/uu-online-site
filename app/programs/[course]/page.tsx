import CommonLayout from '@/components/layouts/CommonLayout'
import React from 'react'
import HeroSection from './heroSection'
import { getCourseConfig } from '@/lib/course-configs'
import SpecialisationsSection from './specialization-Section'
import EducationSection from './education_section'

interface CoursePageProps {
  params: Promise<{
    course: string
  }>
}

const Course = async ({ params }: CoursePageProps) => {
  // Await the params Promise and get course configuration
  const { course } = await params
  const courseConfig = getCourseConfig(course)

  return (
   <CommonLayout>
    <HeroSection 
      heroConfig={courseConfig.heroSection}
      bannerItems={courseConfig.bannerItems}
      emiBanner={courseConfig.emiBanner}
      showBanner={true}
    />
    <SpecialisationsSection specializationData={courseConfig.specializationSection} />
    <EducationSection
      imageUrl={courseConfig.educationSection.imageUrl}
      imageAlt={courseConfig.educationSection.imageAlt}
      backgroundImage={courseConfig.educationSection.backgroundImage}
      backgroundColor={courseConfig.educationSection.backgroundColor}
      preTitle={courseConfig.educationSection.preTitle}
      title={courseConfig.educationSection.title}
      subtitle={courseConfig.educationSection.subtitle}
      features={courseConfig.educationSection.features}
    />
   </CommonLayout>
  )
}

export default Course