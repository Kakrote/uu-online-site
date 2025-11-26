import CommonLayout from '@/components/layouts/CommonLayout'
import BreadcrumbsAuto from '@/components/ui/breadcrumbs-auto'
import HeroSection from '@/components/ui/hero-section'
import React from 'react'
import Ranking_Affliation from './Ranking_Affliation'

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
      <div className='container mx-auto px-4 py-4'>
        <BreadcrumbsAuto />
      </div>

      <Ranking_Affliation/>
    </CommonLayout>
  )
}

export default Disclosures