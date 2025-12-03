import { Card } from '@/components/ui/card'
import { BookOpen, Video, MessageSquare, Handshake } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function WhyChooce() {
  return (
    <main className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:py-16">
      <div className="container mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">WHY STUDENTS</h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#65c240]">CHOOSE US</h2>
          </div>
        </AnimatedSection>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {/* Card 1 - Education */}
          <AnimatedSection delay={0.1} direction="up" duration={0.6}>
            <Card className="bg-gray-50 border-0 p-4 sm:p-5 md:p-6">
              <div className="mb-4 sm:mb-5 md:mb-6 flex justify-start">
                <div className="bg-[#FFD500] rounded-full p-3 sm:p-4 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-black" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                Degree From Top Ranked University Of India
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Graduate with UGC-entitled & AICTE approved online degrees which are at par with on-campus degree programs.
              </p>
            </Card>
          </AnimatedSection>

          {/* Card 2 - Video Content */}
          <AnimatedSection delay={0.2} direction="up" duration={0.6}>
            <Card className="bg-gray-50 border-0 p-4 sm:p-5 md:p-6">
              <div className="mb-4 sm:mb-5 md:mb-6 flex justify-start">
                <div className="bg-[#1E88E5] rounded-full p-3 sm:p-4 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center">
                  <Video className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                Recorded Video Content From Top-Notch Faculty
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Gain insights from top-notch faculty through high-quality recorded video sessions. Learn at your own pace with expert guidance, anytime and anywhere.
              </p>
            </Card>
          </AnimatedSection>

          {/* Card 3 - Interactive */}
          <AnimatedSection delay={0.3} direction="up" duration={0.6}>
            <Card className="bg-gray-50 border-0 p-4 sm:p-5 md:p-6">
              <div className="mb-4 sm:mb-5 md:mb-6 flex justify-start">
                <div className="bg-[#43A047] rounded-full p-3 sm:p-4 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                Interactive Live Lectures & Discussions
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Engage in real-time learning with interactive live sessions led by expert faculty. Ask questions, join discussions, and stay connected throughout your learning journey.
              </p>
            </Card>
          </AnimatedSection>

          {/* Card 4 - Placement */}
          <AnimatedSection delay={0.4} direction="up" duration={0.6}>
            <Card className="bg-gray-50 border-0 p-4 sm:p-5 md:p-6">
              <div className="mb-4 sm:mb-5 md:mb-6 flex justify-start">
                <div className="bg-[#E84C3D] rounded-full p-3 sm:p-4 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center">
                  <Handshake className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                Placement Assistance For Students
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Get dedicated support for your career journey with expert guidance, resume building, mock interviews, and connections to top recruiters. We're with you every step of the way.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </main>
  )
}
