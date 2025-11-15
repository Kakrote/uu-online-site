import { Card } from '@/components/ui/card'
import { BookOpen, Video, MessageSquare, Handshake } from 'lucide-react'

export default function WhyChooce() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-foreground mb-2">WHY STUDENTS</h1>
          <h2 className="text-5xl font-bold text-[#65c240]">CHOOSE US</h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-4 gap-6">
          {/* Card 1 - Education */}
          <Card className="bg-gray-50 border-0 p-6">
            <div className="mb-6 flex justify-start">
              <div className="bg-[#FFD500] rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-black" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Degree From Top Ranked University Of India
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Graduate with UGC-entitled & AICTE approved online degrees which are at par with on-campus degree programs.
            </p>
          </Card>

          {/* Card 2 - Video Content */}
          <Card className="bg-gray-50 border-0 p-6">
            <div className="mb-6 flex justify-start">
              <div className="bg-[#1E88E5] rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <Video className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Recorded Video Content From Top-Notch Faculty
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gain insights from top-notch faculty through high-quality recorded video sessions. Learn at your own pace with expert guidance, anytime and anywhere.
            </p>
          </Card>

          {/* Card 3 - Interactive */}
          <Card className="bg-gray-50 border-0 p-6">
            <div className="mb-6 flex justify-start">
              <div className="bg-[#43A047] rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Interactive Live Lectures & Discussions
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Engage in real-time learning with interactive live sessions led by expert faculty. Ask questions, join discussions, and stay connected throughout your learning journey.
            </p>
          </Card>

          {/* Card 4 - Placement */}
          <Card className="bg-gray-50 border-0 p-6">
            <div className="mb-6 flex justify-start">
              <div className="bg-[#E84C3D] rounded-full p-4 w-20 h-20 flex items-center justify-center">
                <Handshake className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Placement Assistance For Students
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get dedicated support for your career journey with expert guidance, resume building, mock interviews, and connections to top recruiters. We're with you every step of the way.
            </p>
          </Card>
        </div>
      </div>
    </main>
  )
}
