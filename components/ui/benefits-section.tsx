import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const BenefitIcon = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-2xl">{icon}</span>
    </div>
    <p className="text-white text-sm font-medium text-center leading-snug">{text}</p>
  </div>
)

export function BenefitsSection() {
  return (
    <div className="w-full  bg-black relative overflow-hidden">
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
      <div className="relative z-10 flex ">
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div className="relative w-full h-96 lg:h-full">
            <Image
              src="/images/img/pp_img.png"
              alt="Professional man in business suit"
              fill
              className="object-contain object-center relative left-0"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex items-center justify-center px-4 lg:py-9 lg:px-2">
          <div className="text-white space-y-8 max-w-4xl">
            {/* Heading */}
            <div className="space-y-4">
              <p className="text-2xl md:text-5xl font-medium tracking-wide text-gray-300">
                WHAT ARE THE
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                <span className="text-yellow-400">BENEFITS OF</span>
                <br />
                <span className="text-yellow-400">JOINING US</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              With our UGC Entitled Degree Programs, you get the best of both world's - the comfort & flexibility of online education, with the equivalence that is acquired through an on-campus, conventional Degree
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8 py-4">
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
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 group">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
