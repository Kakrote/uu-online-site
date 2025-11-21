import CommonLayout from '@/components/layouts/CommonLayout'
import React from 'react'
import HeroSection from './heroSection'
import { BreadcrumbsAuto } from '@/components/ui/breadcrumbs-auto'
import { getCourseConfig } from '@/lib/course-configs'
import SpecialisationsSection from './specialization-Section'
import EducationSection from './education_section'
import Fun from './fun_Interactive'
import AccreditationsSection from '@/components/ui/accreditations-section'
import CourseDetailProgramStructureSection from './course-detail-program-structure-section'
import CareerProspects from './careerProspect'
import FeeDetails from './fee_info'
import EMIPayments from './payment'
import HowToApplySection from '@/components/ui/how-to-apply-section'
import IndustryTopRecruiters from '@/components/ui/industry-top-recruiters'
import NextStep from '@/components/ui/nextStep'
import { PrestigiousDegreeSection } from '@/components/ui/degree'
import CareerLandscape from '@/components/ui/careerLandscap'
import StudentTestimonials from '@/components/ui/student-testimonials'
import { HaveQuestion } from '@/components/ui/haveQuestion'

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
      
      <div className='container mx-auto px-4 py-4'>
        <BreadcrumbsAuto />
      </div>
      
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

      <div className='max-w-7xl mx-auto mt-10 mb-0'>
        <Fun />
      </div>

      <AccreditationsSection />

      <div className='relative'>

        <CareerProspects
          label={courseConfig.careerProspectsSection.label}
          title={courseConfig.careerProspectsSection.title}
          description={courseConfig.careerProspectsSection.description}
          industryStatsText={courseConfig.careerProspectsSection.industryStatsText}
          jobProfiles={courseConfig.careerProspectsSection.jobProfiles}
          applyButtonText={courseConfig.careerProspectsSection.applyButtonText}
          applyButtonUrl={courseConfig.careerProspectsSection.applyButtonUrl}
          imageUrl={courseConfig.careerProspectsSection.imageUrl}
          imageAlt={courseConfig.careerProspectsSection.imageAlt}
          backgroundImage={courseConfig.careerProspectsSection.backgroundImage}
          backgroundColor={courseConfig.careerProspectsSection.backgroundColor}
          showVideoButton={courseConfig.careerProspectsSection.showVideoButton}
          videoUrl={courseConfig.careerProspectsSection.videoUrl}
        />
      </div>

      <CourseDetailProgramStructureSection
        programTitle={courseConfig.programStructureSection.programTitle}
        semesters={courseConfig.programStructureSection.semesters}
        applyUrl={courseConfig.programStructureSection.applyUrl}
        imageSrc={courseConfig.programStructureSection.imageSrc}
      />

      <FeeDetails feeDetails={courseConfig.feeDetails} />


      <EMIPayments />

      <HowToApplySection />

      <IndustryTopRecruiters />
      <div className='mt-10 py-10'>
        <NextStep />
      </div>

      <PrestigiousDegreeSection />

      <CareerLandscape />

      <StudentTestimonials />
      <div className=' flex justify-center'>

        <HaveQuestion />
      </div>


    </CommonLayout>
  )
}

export default Course