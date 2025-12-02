import Link from "next/link"

export default function SOPSection() {
  const steps = [
    {
      id: 1,
      text: "Uttaranchal University took advantage of ICT enhancements and came up with the \"Online Grievance Registering and Monitoring System\". It is a digital platform for Students to identify and apply for grievances/queries. This platform ensures a time-bound mechanism for redressal of the grievance(s)."
    },
    {
      id: 2,
      text: "The complainant needs to register the grievance on the \"STUDENT GRIEVANCE REDRESSAL CELL\" on the university web site onlineuu.in'."
    },
    {
      id: 3,
      text: "On receipt of complaint, the committee shall investigate the case"
    },
    {
      id: 4,
      text: "If required, a hearing with the complainant or clarification from the concerned may be taken."
    },
    {
      id: 5,
      text: "An aggrieved student may appear either in person or authorize a representative to present the case."
    },
    {
      id: 6,
      text: "The USGRC shall submit its report and recommendations to the Registrar of the University."
    },
    {
      id: 7,
      text: "The Registrar would take the decision on the basis of the SGRC recommendations."
    },
    {
      id: 8,
      text: "The decision would be conveyed to the complainant and the respective Dean/Director/Principal relating to the grievance by the Registrar with a copy to SGRC."
    },
    {
      id: 9,
      text: "If the complaint/grievance is found invalid, the complainant and the person against whom the complaint is made, will be informed accordingly and penal action may be taken."
    },
    {
      id: 10,
      text: "The complaint in any case shall be resolved within 15 working days of its receipt."
    },
    {
      id: 11,
      text: "Any student aggrieved by the decision of the SGRC may prefer an appeal (within 15 days from the date of decision) to the Ombudsperson (Email:- ombudsperson@uumail.in) who would precede the case as per UGC regulations."
    }
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="inline-block mb-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#6bc533] leading-none">
              SOP
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            FOR HANDLING GRIEVANCE BY SGRC (FOR ONLINE LEARNING PROGRAMMES)
          </h3>
        </div>

        {/* Steps List */}
        <div className="space-y-4 md:space-y-5">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="flex gap-4 items-start group hover:bg-white hover:shadow-md transition-all duration-300 p-4 rounded-lg"
            >
              {/* Circle Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#6bc533] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 pt-1">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-10 md:mt-12">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#6bc533] font-bold text-lg md:text-xl">
              CLICK HERE
            </span>
            <Link 
              href="https://www.ugc.gov.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-base md:text-lg underline hover:text-[#6bc533] transition-colors duration-300 font-medium"
            >
              To UGC e-Samadhaan Portal Link
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
