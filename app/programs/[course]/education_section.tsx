interface Feature {
  number: string;
  title: string;
  description: string;
}

interface EducationSectionProps {
  imageUrl?: string;
  imageAlt?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  preTitle?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

export default function EducationSection({
  imageUrl = '/images/faces/student_image.jpeg',
  imageAlt = 'Professional students in business attire',
  backgroundImage = '/images/backgrouds/green_bg.svg',
  backgroundColor = '#6BC533',
  preTitle = 'WHY OPT FOR',
  title = 'ONLINE UU?',
  subtitle = 'Our valued degrees stand out from the crowd and prepare you for a job at industry-leading companies.',
  features = [
    {
      number: '01',
      title: 'PRODIGIOUS FACULTY AND WORLD-CLASS CURRICULUM',
      description: 'Our intensive MBA curriculum hones your skills in business including finance, marketing, and Human resource.'
    },
    {
      number: '02',
      title: '1-ON-1 PERSONALISED MENTORSHIP',
      description: 'To provide support at every step, a dedicated mentor is assigned to each student.'
    },
    {
      number: '03',
      title: 'REPUTED DEGREE FROM A TOP RANKED UNIVERSITY',
      description: 'Uttaranchal University, NAAC A+ accredited, ranks among India\'s top universities with degrees valued by leading corporates.'
    },
    {
      number: '04',
      title: 'INTEGRATED LMS & E-LIBRARY',
      description: 'The Integrated Learning Management System offers 24x7 support with access to thousands of e-books.'
    },
    {
      number: '05',
      title: 'JOB ASSISTANCE',
      description: 'We offer full placement support to help you join a reputed organization.'
    }
  ]
}: EducationSectionProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Student Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img 
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Right Side - Green Section with Features */}
      <div 
        className="w-1/2 relative flex flex-col justify-center px-12 py-16"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: backgroundColor
        }}
      >
        {/* Content overlay */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12">
            <p className="text-white text-3xl font-bold tracking-wide">{preTitle}</p>
            <h2 className="text-white text-5xl lg:text-7xl font-bold">{title}</h2>
            <p className="text-white text-base  leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature.number} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex gap-4">
                  <span className="text-gray-300 text-3xl lg:text-6xl font-bold min-w-fit">{feature.number}</span>
                  <div>
                    <h3 className="text-black text-xl font-bold tracking-wide mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
