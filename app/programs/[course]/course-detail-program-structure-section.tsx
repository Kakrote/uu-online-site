"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface SemesterCourse {
  slNo: number
  code: string
  title: string
  credits: number | null
  isElective?: boolean
}

interface SemesterData {
  number: number
  courses: SemesterCourse[]
  totalCredits: number
}

interface CourseDetailProgramStructureSectionProps {
  programTitle: string
  semesters: SemesterData[]
  applyUrl: string
  imageSrc: string
}

export default function CourseDetailProgramStructureSection({
  programTitle,
  semesters,
  applyUrl,
  imageSrc
}: CourseDetailProgramStructureSectionProps) {
  const [openSemester, setOpenSemester] = useState<number | null>(null)

  const toggleSemester = (semesterNumber: number) => {
    if (openSemester === semesterNumber) {
      setOpenSemester(null)
    } else {
      setOpenSemester(semesterNumber)
    }
  }

  return (
    <section className="py-16 mt-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12">
          <span className="text-gray-800">PROGRAM</span>
          <br />
          <span className="text-[#7AC143] font-black">STRUCTURE</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {semesters.map((semester) => (
              <div key={semester.number} className="mb-4 bg-white rounded-md shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSemester(semester.number)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={openSemester === semester.number}
                  aria-controls={`semester-${semester.number}-content`}
                >
                  <h3 className="text-xl font-medium">Semester {semester.number}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSemester === semester.number ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openSemester === semester.number && (
                  <div id={`semester-${semester.number}-content`} className="px-5 pb-5">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-white bg-[#3048CD]">
                              Sl.No.
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-white bg-[#3048CD]">
                              Course Code
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-white bg-[#3048CD]">
                              Course Name
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-semibold text-white bg-[#3048CD]">
                              Credits
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {semester.courses.map((course, index) => (
                            <tr key={`${course.code}-${index}`} className="border-b last:border-b-0">
                              <td className="py-3 px-4 text-sm">{course.isElective ? "" : course.slNo}</td>
                              <td className="py-3 px-4 text-sm">{course.code}</td>
                              <td className="py-3 px-4 text-sm">{course.title}</td>
                              <td className="py-3 px-4 text-sm text-center">{course.credits}</td>
                            </tr>
                          ))}
                          <tr className="border-t-2 border-gray-300">
                            <td colSpan={3} className="py-3 px-4 text-sm font-semibold text-right">
                              Total Credits in Semester {semester.number}
                            </td>
                            <td className="py-3 px-4 text-sm font-semibold text-center">{semester.totalCredits}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-lg h-[500px]">
            {/* Student image as background */}
            <div className="absolute inset-0">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt="Students in classroom"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* SVG Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-black via-balck/30 to-transparent">
            </div>

            {/* Content overlay */}
            <div className="relative z-20 p-8 h-full flex flex-col justify-start">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">KNOWLEDGE AT YOUR</h3>
                <h2 className="text-white text-5xl font-black mb-6">FINGERTIPS</h2>
                <p className="text-white text-lg mb-8">
                  Apply Today At One Of The Best University In Uttarakhand, India
                </p>

                <Link
                  href={applyUrl}
                  className="inline-flex items-center bg-white text-blue-600 font-medium rounded-full px-6 py-3 transition-colors hover:bg-gray-100"
                >
                  Apply Now <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
