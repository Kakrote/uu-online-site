export default function GrievanceRedressal() {
  return (
    <section
      className="relative w-full rounded-xl min-h-[400px] md:min-h-[450px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/backgrouds/blue_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-2">
              UNIVERSITY
              <br />
              STUDENT
              <br />
              GRIEVANCE
              <br />
              REDRESSAL
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold mb-6 text-white/90">
              FOR ONLINE LEARNING
              <br />
              PROGRAMMES
            </h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              The University has various bodies for the students' support and their grievance redressal.
              <br />
              The objective of the various committees is to ensure that the students' welfare and interests are
              safeguarded, and their grievances are resolved in a timely and satisfactory manner.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <img
                src="/images/img/griv.png"
                alt="Grievance Redressal Committees - Illustration of committee members at a meeting table"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
