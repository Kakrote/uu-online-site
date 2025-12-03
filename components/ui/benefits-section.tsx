import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const BenefitIcon = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex flex-col items-center gap-2 sm:gap-3">
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-xl sm:text-2xl md:text-3xl">{icon}</span>
    </div>
    <p className="text-white text-xs sm:text-sm md:text-base font-medium text-center leading-snug">{text}</p>
  </div>
)

export function BenefitsSection() {
  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrouds/black_bg.png"
          alt="Background pattern"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/img/pp_img.png"
              alt="Professional man in business suit"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-[50%] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="text-white space-y-6 sm:space-y-8 max-w-4xl w-full">
            {/* Heading */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-wide text-gray-300">
                WHAT ARE THE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-yellow-400">BENEFITS OF</span>
                <br />
                <span className="text-yellow-400">JOINING US</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              With our UGC Entitled Degree Programs, you get the best of both world's - the comfort & flexibility of online education, with the equivalence that is acquired through an on-campus, conventional Degree
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-2 sm:py-4">
              <BenefitIcon 
                icon="🎓"
                text="Live classes by International faculty"
              />
              <BenefitIcon 
                icon="💼"
                text="Career Assistance & Exclusive Virtual Job Fairs"
              />
              <BenefitIcon 
                icon="⭐"
                text="Exemplary Employer Ratings of Various Programs"
              />
              <BenefitIcon 
                icon="🌍"
                text="International Academia Industry Collaborations"
              />
            </div>

            {/* Button */}
            <div className="pt-2 sm:pt-4">
              <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 text-sm sm:text-base font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 group">
                Apply Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
