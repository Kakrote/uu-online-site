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
    <section className={`py-16 px-4 font-figtree ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {title}
              <span className="block text-4xl md:text-5xl font-bold text-[#6BC533]">{subtitle}</span>
            </h2>
          </div>

          {showStepIndicator && (
            <div className="mt-6 md:mt-0 flex items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                      step.number === activeStep ? "bg-[#6BC533] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="w-12 h-[2px] bg-gray-300 mx-1"></div>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative p-8 rounded-lg transition-all duration-300 ${
                step.number === activeStep ? "bg-[#6BC533] text-white" : "bg-gray-100 text-gray-800"
              }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex flex-col h-full">
                <div className="text-6xl font-bold opacity-20 mb-4">{step.number}</div>

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                    step.number === activeStep ? "bg-white text-[#6BC533]" : "bg-[#6BC533] text-white"
                  }`}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className={`mb-4 ${step.number === activeStep ? "text-white" : "text-gray-600"}`}>
                  {step.description}
                </p>

                {step.linkUrl && (
                  <div className="mt-auto">
                    <Link
                      href={step.linkUrl}
                      className={`inline-flex items-center font-medium ${
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
