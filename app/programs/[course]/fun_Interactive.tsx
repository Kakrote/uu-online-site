import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Fun() {
  const features = [
    {
      icon: '🎓',
      title: 'Live classes by',
      subtitle: 'International faculty'
    },
    {
      icon: '🎓',
      title: 'Career Assistance &',
      subtitle: 'Exclusive Virtual Job Fairs'
    },
    {
      icon: '🎓',
      title: 'Exemplary Employer',
      subtitle: 'Ratings of Various Programs'
    },
    {
      icon: '🎓',
      title: 'International Academia',
      subtitle: 'Industry Collaborations'
    }
  ]

  return (
    <main className="px-3 py-10 flex items-center relative overflow-hidden ">
      <Image
        src="/images/faces/girl-2.png"
        alt="Student with laptop"
        fill
        className="absolute inset-0 object-cover object-right -z-10"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000dc] via-[#251a1a93] to-transparent z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="max-w-2xl">
          {/* Headline */}
          <div className="mb-8">
            <p className="text-white text-base font-medium mb-2">LEARNING SHOULD BE</p>
            <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight">
              FUN & INTERACTIVE
            </h1>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-2xl">{feature.icon}</div>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{feature.title}</p>
                  <p className="text-white/90 text-sm">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#6bc533] hover:bg-[#5ab22c] text-white px-8 py-6 text-base font-semibold rounded-full">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold rounded-full"
            >
              Download Brochure <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
