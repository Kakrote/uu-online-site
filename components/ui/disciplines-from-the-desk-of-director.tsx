"use client"
import Image from "next/image"
import type { FC } from "react"
import { useState } from "react"
import { SafeHtml } from "./SafeHtml"

interface FromTheDeskOfDirectorProps {
  directorName: string
  directorTitle: string
  directorImage: string
  directorMessage: string
  readMoreContent?: string
  disciplineColor?: string
  directorQoute:string
}

const FromTheDeskOfDirector: FC<FromTheDeskOfDirectorProps> = ({
  directorName,
  directorTitle,
  directorImage,
  directorMessage,
  readMoreContent,
  directorQoute,
  disciplineColor = "#6bc533",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <section className="py-16 bg-white font-figtree" aria-labelledby="director-message-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column - Director's image */}
          <div className="lg:col-span-5">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={directorImage || "/placeholder.svg"}
                alt={`${directorName}, ${directorTitle}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                // style={{
                //   borderTopRightRadius: "100px",
                //   borderBottomLeftRadius: "100px",
                // }}
              />
            </div>
          </div>

          {/* Right column - Director's message */}
          <div className="lg:col-span-7 space-y-2 pt-2">
            <div>
              <h2 id="director-message-heading" className="text-3xl md:text-4xl font-bold text-[#2A2A2F] mb-2">
                FROM THE DESK OF
              </h2>
              <h3 className="text-5xl md:text-6xl font-extrabold font-figtree text-[#6bc533]">
                DIRECTOR
              </h3>
            </div>

            <div className="relative pl-2">
              {/* Quote icon */}
              <div className="-left-2 top-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quote-Vector-4TCRDd7LKKTL6RwkCMDGX0cesOqsJM.svg"
                  alt=""
                  width={64}
                  height={47}
                  aria-hidden="true"
                />
              </div>

              <div className="text-2xl md:text-4xl text-black mt-5">
                <strong>{directorQoute}</strong>
              </div>

              <div className="space-y-2 pt-8">
                <SafeHtml
                  content={directorMessage}
                  as="div"
                  className="text-base md:text-lg text-gray-700 leading-relaxed"
                />
                {readMoreContent && (
                  <button
                    onClick={openModal}
                    className="text-lg font-medium hover:underline transition-colors duration-200 text-[#6bc533]"
                    // style={{ color: disciplineColor }}
                  >
                    Read More
                  </button>
                )}
              </div>
              {/* Director's name and title */}
              <div className="mt-2 relative">
                <div
                  className="relative rounded-r-full py-4 px-8 text-white p-[2rem] bg-[#6bc533]"
                
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3048CD]"></div>
                  <p className="font-bold">{directorName}</p>
                  <p>{directorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full message */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="director-full-message-title"
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 id="director-full-message-title" className="text-2xl font-bold text-gray-800">
                Message from the Director
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6 mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={directorImage || "/placeholder.svg"}
                    alt={`${directorName}, ${directorTitle}`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900">{directorName}</h3>
                  <p className="text-md text-gray-600">{directorTitle}</p>
                </div>
              </div>
              <div className="prose max-w-none">
                {readMoreContent && <SafeHtml content={readMoreContent} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FromTheDeskOfDirector
