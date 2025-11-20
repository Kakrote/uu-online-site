import type React from "react"
import Image from "next/image"
import { Sparkles, Globe, GraduationCap, Award, Users, Star } from "lucide-react"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  className?: string
}

function BenefitCard({ icon, title, className = "" }: BenefitCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="bg-[#6bc533] rounded-lg w-12 h-12 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-[#2A2A2F] font-bold text-xl leading-tight">{title}</h3>
    </div>
  )
}

export default function LearnWithUsSection() {
  return (
    <section className="relative py-16 overflow-hidden font-figtree">
      {/* Green background with SVG pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrouds/green_bg.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column - Text and Image */}
          <div className="lg:col-span-5">
            <div className="text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">WHEN YOU CHOOSE TO</h2>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">LEARN WITH US</h2>
              <p className="text-lg">
                The distinctiveness and excellence of UU's teaching is recognized worldwide for supporting students
                while challenging them to excel.
              </p>
            </div>

            {/* Image with white border effect */}
            <div className="relative">
              {/* White border effect */}
              <div className="absolute -top-4 -left-4 right-4 bottom-4 z-0"></div>

              {/* Actual image */}
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201321316306-ErJXlkPefvMrjBJLflQPanSBsM1tXn.png"
                  alt="Three female students studying together outdoors with engineering textbooks"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column - Benefits grid */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <BenefitCard
                icon={<Sparkles className="h-6 w-6 text-white" />}
                title="Experience a Vibrant Student Life"
              />
              <BenefitCard icon={<Globe className="h-6 w-6 text-white" />} title="Gain a Global Perspective" />
              <BenefitCard
                icon={<GraduationCap className="h-6 w-6 text-white" />}
                title="Explore a Range of Flexible Academic Opportunities"
              />
              <BenefitCard icon={<Award className="h-6 w-6 text-white" />} title="Catalyse your Career Growth" />
              <BenefitCard
                icon={<Users className="h-6 w-6 text-white" />}
                title="Access World-Class Student Support for a Lifetime"
              />
              <BenefitCard icon={<Star className="h-6 w-6 text-white" />} title="Experience a Vibrant Student Life" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
