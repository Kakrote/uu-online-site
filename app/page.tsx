


import React from 'react'
import CommonLayout from '@/components/layouts/CommonLayout'
import HeroSection from '@/components/ui/hero-section'
import ExplorePrograms from '@/components/ui/ExplorePrograms'
import NewsNotificationsSection from '@/components/ui/news-notifications-section'
import ExcellenceSection from '../components/ui/excellence-section'
import { BenefitsSection } from '@/components/ui/benefits-section'
import WhyChooce from '@/components/ui/why-choose'
import { ImpactSection } from '@/components/ui/impect-section'
import AccreditationsSection from '@/components/ui/accreditations-section'
import StarAchievers from '@/components/ui/our-star-achiver'
import StudentSuccessSection from '@/components/ui/student-success-section'
import ApproachSection from '@/components/ui/approuch-section'

function Home() {
  return (
    <CommonLayout>
      <HeroSection
        backgroundImageAlt='Hero-image'
        backgroundImageSrc='/images/hero-section/home-hero.png'
        animateContent={false}
        title=""
        subtitle=''
        highlightColor=''
        highlightedText=''
        description=''
        showButtom={false}
      // showAnnouncementBanner={false}

      />

      <ExplorePrograms />
      <div className='bg-white py-5'>

        <NewsNotificationsSection />
      </div>

      <div className='bg-white py-4'>

        <ExcellenceSection
          universityName="uttaranchal university"
          headingTop="FOR THE"
          headingMain="Excellence with in 'U'"
          description="Uttaranchal University has come a long way since its inception providing world-class multidisciplinary education."
          buttonText="Read More"
          buttonLink="#"
          backgroundPattern="/images/backgrouds/blue_bg.svg"
          leftBgImage=""
          rightImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/right-image-o1kDt64ivwm3x4GT0jTMpSTzC9bOMO.png"
          stats={[
            { value: "22+", label: "Years of Educational Experience" },
            { value: "100+", label: "Multidisciplinary Programs" },
            { value: "500+", label: "Companies Visited For Placement" },
            { value: "15K+", label: "Glorious Alumni" },
          ]}
          leftOverlayGradient={true}
        />
      </div>

      <BenefitsSection />

      <WhyChooce />

      <div className='mb-3'>

        <ImpactSection />
      </div>

      <AccreditationsSection/>

      <StarAchievers/>

      <StudentSuccessSection/>
      <ApproachSection/>

    </CommonLayout>
  )
}

export default Home
