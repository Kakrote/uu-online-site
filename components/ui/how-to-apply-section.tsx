"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { FileText, CheckCircle, Sparkles,Laptop } from "lucide-react"

// Define the types for our component props
interface Step {
  id: string
  number: string
  title: string
  description: string
  icon: React.ReactNode
  linkUrl?: string
  linkText?: string
}

interface HowToApplySectionProps {
  title?: string
  subtitle?: string
  steps?: Step[]
  activeStep?: string
  showStepIndicator?: boolean
  className?: string
}

// Default steps data
const defaultSteps: Step[] = [
  {
    id: "registration",
    number: "01",
    title: "REGISTRATION",
    description: "Apply Now and Register",
    icon: <Sparkles size={24} />,
    linkUrl: "/admissions/register",
    linkText: "Register Now",
  },
  {
    id: "application",
    number: "02",
    title: "APPLICATION FORM",
    description: "Fill The Form And Upload Documents",
    icon: <FileText size={24} />,
    linkUrl: "/admissions/application",
    linkText: "Start Application",
  },
  {
    id: "verification",
    number: "03",
    title: "VERIFICATION & ADMISSION",
    description: "Get approved, pay, and start your journey!",
    icon: <CheckCircle size={24} />,
    linkUrl: "/admissions/verification",
    linkText: "Check Status",
  },
  {
    id: "LMS",
    number: "04",
    title: "Get LMS Access",
    description: "Get your LMS credentials over the email and start your journey!",
    icon: <Laptop size={24} />,
    linkUrl: "/admissions/verification",
    linkText: "Vist LMS",
  },
]

export default function HowToApplySection({
  title = "HOW",
  subtitle = "TO APPLY ?",
  steps = defaultSteps,
  activeStep = "02",
  showStepIndicator = true,
  className = "",
}: HowToApplySectionProps) {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)

  return (
    <section className={`py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 font-figtree ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 md:mb-12 gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              {title}
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-[#6BC533]">{subtitle}</span>
            </h2>
          </div>

          {showStepIndicator && (
            <div className="flex items-center overflow-x-auto pb-2 lg:pb-0">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-shrink-0">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${
                      step.number === activeStep ? "bg-[#6BC533] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-gray-300 mx-1"></div>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-lg transition-all duration-300 hover:shadow-lg ${
                step.number === activeStep ? "bg-[#6BC533] text-white" : "bg-gray-100 text-gray-800"
              }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-20 mb-3 sm:mb-4">{step.number}</div>

                <div
                  className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                    step.number === activeStep ? "bg-white text-[#6BC533]" : "bg-[#6BC533] text-white"
                  }`}
                >
                  <div className="scale-90 sm:scale-100">{step.icon}</div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                <p className={`text-sm sm:text-base mb-3 sm:mb-4 ${step.number === activeStep ? "text-white" : "text-gray-600"}`}>
                  {step.description}
                </p>

                {step.linkUrl && (
                  <div className="mt-auto">
                    <Link
                      href={step.linkUrl}
                      className={`inline-flex items-center text-sm sm:text-base font-medium ${
                        step.number === activeStep ? "text-white hover:underline" : "text-[#6BC533] hover:underline"
                      }`}
                    >
                      {step.linkText || "Learn more"} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
