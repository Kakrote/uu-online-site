"use client"

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
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useEffect, useState } from 'react'

interface CoursePageProps {
  params: Promise<{
    course: string
  }>
}

const Course = ({ params }: CoursePageProps) => {
  const [courseConfig, setCourseConfig] = useState<any>(null)
  const [course, setCourse] = useState<string>('')

  useEffect(() => {
    const loadCourse = async () => {
      const resolvedParams = await params
      setCourse(resolvedParams.course)
      const config = getCourseConfig(resolvedParams.course)
      setCourseConfig(config)
    }
    loadCourse()
  }, [params])

  if (!courseConfig) {
    return <div>Loading...</div>
  }

  return (
    <CommonLayout>
      <AnimatedSection delay={0.1}>
        <HeroSection
          heroConfig={courseConfig.heroSection}
          bannerItems={courseConfig.bannerItems}
          emiBanner={courseConfig.emiBanner}
          showBanner={true}
        />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2} className='container mx-auto px-4 py-4'>
        <BreadcrumbsAuto />
      </AnimatedSection>
      
      <AnimatedSection delay={0.3}>
        <SpecialisationsSection specializationData={courseConfig.specializationSection} />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
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
      </AnimatedSection>

      <AnimatedSection delay={0.5} className='max-w-7xl mx-auto mt-10 mb-0'>
        <Fun />
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <AccreditationsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.7} className='relative'>
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
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <CourseDetailProgramStructureSection
          programTitle={courseConfig.programStructureSection.programTitle}
          semesters={courseConfig.programStructureSection.semesters}
          applyUrl={courseConfig.programStructureSection.applyUrl}
          imageSrc={courseConfig.programStructureSection.imageSrc}
        />
      </AnimatedSection>

      <AnimatedSection delay={0.9}>
        <FeeDetails feeDetails={courseConfig.feeDetails} />
      </AnimatedSection>

      <AnimatedSection delay={1.0}>
        <EMIPayments />
      </AnimatedSection>

      <AnimatedSection delay={1.1}>
        <HowToApplySection />
      </AnimatedSection>

      <AnimatedSection delay={1.2}>
        <IndustryTopRecruiters />
      </AnimatedSection>

      <AnimatedSection delay={1.3} className='mt-10 py-10'>
        <NextStep />
      </AnimatedSection>

      <AnimatedSection delay={1.4}>
        <PrestigiousDegreeSection />
      </AnimatedSection>

      <AnimatedSection delay={1.5}>
        <CareerLandscape />
      </AnimatedSection>

      <AnimatedSection delay={1.6}>
        <StudentTestimonials />
      </AnimatedSection>

      <AnimatedSection delay={1.7} className='flex justify-center'>
        <HaveQuestion />
      </AnimatedSection>
    </CommonLayout>
  )
}

export default Course