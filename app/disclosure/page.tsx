import CommonLayout from '@/components/layouts/CommonLayout'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import HeroSection from '@/components/ui/hero-section'
import React from 'react'
import Ranking_Affliation from './Ranking_Affliation'
import AnimatedSection from '@/components/ui/AnimatedSection'

const Disclosures = () => {
  return (
    <CommonLayout>
      <HeroSection
        backgroundImageAlt='blue layout'
        backgroundImageSrc='/images/backgrouds/blue-2.svg'
        height='h-[400px]'
        title={
          <>
            Our <br />Disclosures
          </>
        }
        subtitle=''
        highlightColor=''
        highlightedText=''
        description=''
        showButtom={false}
      />
      <AnimatedSection>
        <div className='container mx-auto px-4 py-4'>
          <BreadcrumbsAuto />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Ranking_Affliation/>
      </AnimatedSection>
    </CommonLayout>
  )
}

export default Disclosures