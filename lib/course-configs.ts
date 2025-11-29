import { Clock, Hourglass, IndianRupee, BookOpen, GraduationCap, Users } from 'lucide-react'

export interface BannerItem {
  title: string
  time: string
  duration: string
  icon?: string // Icon name string (e.g., 'Clock', 'Hourglass')
}

export interface EMIBanner {
  title: string
  subtitle: string
  amount: string
  currency?: string
  iconSrc?: string
  iconAlt?: string
}

export interface Specialization {
  title: string
  icon: string // Icon type for the specialization
}

export interface SpecializationSection {
  title: {
    main: string
    highlighted: string
  }
  description: string
  specializations: Specialization[]
}

export interface EducationFeature {
  number: string
  title: string
  description: string
}

export interface EducationSection {
  imageUrl: string
  imageAlt: string
  backgroundImage: string
  backgroundColor: string
  preTitle: string
  title: string
  subtitle: string
  features: EducationFeature[]
}

export interface SemesterCourse {
  slNo: number
  code: string
  title: string
  credits: number | null
  isElective?: boolean
}

export interface SemesterData {
  number: number
  courses: SemesterCourse[]
  totalCredits: number
}

export interface ProgramStructureSection {
  programTitle: string
  semesters: SemesterData[]
  applyUrl: string
  imageSrc: string
}

export interface CareerProspectsSection {
  label: string
  title: string
  description: string
  industryStatsText: string
  jobProfiles: string[]
  applyButtonText?: string
  applyButtonUrl?: string
  imageUrl: string
  imageAlt: string
  backgroundImage?: string
  backgroundColor?: string
  showVideoButton?: boolean
  videoUrl?: string
}

export interface HeroSectionConfig {
  subtitle: string
  title: string
  highlightedText: string
  highlightColor?: string
  description: string
  buttonText?: string
  buttonUrl?: string
  brochure?: string
  brochureUrl?: string
  backgroundImageSrc: string
  backgroundImageAlt: string
  showGradientOverlay?: boolean
}

export interface SemesterFee {
  semester: string
  fee: string
}

export interface YearFee {
  year: string
  fee: string
}

export interface FeeStructure {
  semesterData: SemesterFee[]
  yearData: YearFee[]
  totalSemesterFee: string
  totalYearFee: string
}

export interface FeeDetails {
  national: FeeStructure
  international: FeeStructure
  nationalEligibility: string[]
  internationalEligibility: string[]
  paymentModes: string[]
}

export interface CourseConfig {
  heroSection: HeroSectionConfig
  bannerItems: BannerItem[]
  emiBanner: EMIBanner
  specializationSection: SpecializationSection
  educationSection: EducationSection
  programStructureSection: ProgramStructureSection
  careerProspectsSection: CareerProspectsSection
  feeDetails: FeeDetails
}

// Predefined course configurations
export const courseConfigs: Record<string, CourseConfig> = {
  mba: {
    heroSection: {
      subtitle: "ONLINE PG PROGRAM",
      title: "MASTER OF",
      highlightedText: "BUSINESS ADMINISTRATION (MBA)",
      highlightColor: "#FDD900",
      description: "Our Online MBA program will equip you with the expertise and confidence to understand the changing world of business on a national and global scale.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "MBA online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "2 Years", duration: "4 semesters", icon: "Clock" },
      { title: "Study Mode", time: "Online", duration: "Flexible", icon: "BookOpen" },
      { title: "Course Fee", time: "INR 45,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹7,500 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "MBA EMI"
    },
    specializationSection: {
      title: {
        main: "ELECTIVES &",
        highlighted: "SPECIALISATIONS"
      },
      description: "Choose your specialization to tailor your MBA to your career goals. Our diverse range of specializations allows you to focus on areas that align with your interests and industry demands, ensuring you graduate with expertise that sets you apart in the business world.",
      specializations: [
        { title: "MARKETING\nMANAGEMENT", icon: "marketing" },
        { title: "DIGITAL\nMARKETING", icon: "digital" },
        { title: "HUMAN\nRESOURCES", icon: "hr" },
        { title: "BUSINESS\nANALYTICS", icon: "analytics" },
        { title: "FINANCIAL\nMANAGEMENT", icon: "finance" },
        { title: "INTERNATIONAL\nBUSINESS", icon: "international" },
        { title: "INFORMATION\nTECHNOLOGY", icon: "technology" },
        { title: "LOGISTICS &\nSUPPLY CHAIN", icon: "logistics" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'Professional MBA students in business attire',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#6BC533',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE MBA?',
      subtitle: 'Our valued MBA degree stands out from the crowd and prepares you for leadership roles at industry-leading companies.',
      features: [
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
    },
    programStructureSection: {
      programTitle: "Master of Business Administration (MBA)",
      applyUrl: "/admissions",
      imageSrc: "/images/hero-section/student-with-book-in-uu.png",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MBA-101", title: "Management Principles and Practices", credits: 4 },
            { slNo: 2, code: "MBA-102", title: "Organizational Behavior", credits: 4 },
            { slNo: 3, code: "MBA-103", title: "Managerial Economics", credits: 4 },
            { slNo: 4, code: "MBA-104", title: "Business Statistics", credits: 4 },
            { slNo: 5, code: "MBA-105", title: "Financial Accounting", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MBA-201", title: "Marketing Management", credits: 4 },
            { slNo: 2, code: "MBA-202", title: "Human Resource Management", credits: 4 },
            { slNo: 3, code: "MBA-203", title: "Financial Management", credits: 4 },
            { slNo: 4, code: "MBA-204", title: "Operations Management", credits: 4 },
            { slNo: 5, code: "MBA-205", title: "Business Communication", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MBA-301", title: "Strategic Management", credits: 4 },
            { slNo: 2, code: "MBA-302", title: "Business Research Methods", credits: 4 },
            { slNo: 3, code: "MBA-303", title: "Elective I", credits: 4, isElective: true },
            { slNo: 4, code: "MBA-304", title: "Elective II", credits: 4, isElective: true },
            { slNo: 5, code: "MBA-305", title: "Entrepreneurship Development", credits: 4 },
          ],
        },
        {
          number: 4,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MBA-401", title: "Business Ethics and Corporate Governance", credits: 4 },
            { slNo: 2, code: "MBA-402", title: "Elective III", credits: 4, isElective: true },
            { slNo: 3, code: "MBA-403", title: "Elective IV", credits: 4, isElective: true },
            { slNo: 4, code: "MBA-404", title: "Dissertation/Project", credits: 8 },
          ],
        },
      ],
    },
    careerProspectsSection: {
      label: "MBA",
      title: "CAREER PROSPECTS",
      description: "Student with MBA degree is easily absorbed for a managerial role in the field of Finance, marketing, Human Resources, Production, Operation, Advertising, Infrastructure, Energy, Environment sector, IT sector, Health and Hospitality, Retail management, supply chain, public policy and administration and so on.",
      industryStatsText: "As per the industry stats, here are some of the popular job profiles like:",
      jobProfiles: [
        "Human Resource",
        "Production",
        "IT Sector",
        "Advertising",
        "Hospitality",
        "Energy",
        "Infrastructure",
        "Supply Chain",
        "Administration",
        "Public Policy",
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "/admissions",
      imageUrl: "/mba-students-in-classroom-working-together.jpg",
      imageAlt: "MBA students collaborating",
      backgroundImage: "/images/backgrouds/org_bg.svg",
      backgroundColor: "bg-amber-400",
      showVideoButton: true,
      videoUrl: "#",
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: 'Semester 1', fee: 'INR 45,000' },
          { semester: 'Semester 2', fee: 'INR 45,000' },
          { semester: 'Semester 3', fee: 'INR 45,000' },
          { semester: 'Semester 4', fee: 'INR 45,000' },
        ],
        yearData: [
          { year: '1st Year', fee: 'INR 90,000' },
          { year: '2nd Year', fee: 'INR 90,000' },
        ],
        totalSemesterFee: 'INR 1,80,000',
        totalYearFee: 'INR 1,80,000',
      },
      international: {
        semesterData: [
          { semester: 'Semester 1', fee: 'USD 1,000' },
          { semester: 'Semester 2', fee: 'USD 1,000' },
          { semester: 'Semester 3', fee: 'USD 1,000' },
          { semester: 'Semester 4', fee: 'USD 1,000' },
        ],
        yearData: [
          { year: '1st Year', fee: 'USD 2,000' },
          { year: '2nd Year', fee: 'USD 2,000' },
        ],
        totalSemesterFee: 'USD 4,000',
        totalYearFee: 'USD 4,000',
      },
      nationalEligibility: [
        'A Bachelor\'s degree of minimum three years duration with minimum 50% marks for the General and 45% marks in case of Reserved Category in the qualifying examination.',
        'For working professionals with 2 years of experience, please contact the admission department at admissions@onlineuu.in',
      ],
      internationalEligibility: [
        'A Bachelor\'s degree from a recognized international university with minimum 50% marks or equivalent GPA.',
        'International students must have valid visa documentation and meet all immigration requirements.',
        'For working professionals with 2 years of experience, please contact the admission department at admissions@onlineuu.in',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  },
  
  bba: {
    heroSection: {
      subtitle: "UNDERGRADUATE PROGRAM",
      title: "BACHELOR OF",
      highlightedText: "BUSINESS ADMINISTRATION (BBA)",
      highlightColor: "#FF6B35",
      description: "Build a strong foundation in business fundamentals with our comprehensive BBA program. Develop essential management skills and prepare for leadership roles in the dynamic business world.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "BBA online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "3 Years", duration: "6 semesters", icon: "Clock" },
      { title: "Study Hours", time: "8-10 Hours", duration: "Per Week", icon: "Hourglass" },
      { title: "Course Fee", time: "INR 35,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹5,513 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "BBA EMI"
    },
    specializationSection: {
      title: {
        main: "CORE SUBJECTS &",
        highlighted: "CONCENTRATIONS"
      },
      description: "Build a strong foundation in business administration with our comprehensive BBA program. Choose from various concentrations to align your studies with your career aspirations and develop the skills needed for success in the dynamic business environment.",
      specializations: [
        { title: "BUSINESS\nFUNDAMENTALS", icon: "analytics" },
        { title: "MARKETING\nBASICS", icon: "marketing" },
        { title: "FINANCIAL\nACCOUNTING", icon: "finance" },
        { title: "HUMAN RESOURCE\nMANAGEMENT", icon: "hr" },
        { title: "OPERATIONS\nMANAGEMENT", icon: "logistics" },
        { title: "BUSINESS\nCOMMUNICATION", icon: "digital" },
        { title: "ENTREPRENEURSHIP", icon: "international" },
        { title: "BUSINESS\nETHICS", icon: "technology" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'Professional BBA students',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#FF6B35',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE BBA?',
      subtitle: 'Build a strong foundation in business with our comprehensive BBA program that prepares you for successful careers.',
      features: [
        {
          number: '01',
          title: 'EXPERIENCED FACULTY AND COMPREHENSIVE CURRICULUM',
          description: 'Our BBA curriculum covers all essential business fundamentals including management, marketing, and finance.'
        },
        {
          number: '02',
          title: 'FLEXIBLE LEARNING ENVIRONMENT',
          description: 'Study at your own pace with our online platform designed for working professionals and students.'
        },
        {
          number: '03',
          title: 'INDUSTRY-RECOGNIZED DEGREE',
          description: 'Earn a valuable degree from Uttaranchal University, recognized and respected by employers nationwide.'
        },
        {
          number: '04',
          title: 'PRACTICAL LEARNING APPROACH',
          description: 'Gain hands-on experience through case studies, projects, and real-world business scenarios.'
        },
        {
          number: '05',
          title: 'CAREER DEVELOPMENT SUPPORT',
          description: 'Access career counseling, resume building, and interview preparation services.'
        }
      ]
    },
    programStructureSection: {
      programTitle: "Bachelor of Business Administration (BBA)",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BBA-101", title: "Principles of Management", credits: 4 },
            { slNo: 2, code: "BBA-102", title: "Business Economics I", credits: 4 },
            { slNo: 3, code: "BBA-103", title: "Financial Accounting", credits: 4 },
            { slNo: 4, code: "BBA-104", title: "Business Communication", credits: 4 },
            { slNo: 5, code: "BBA-105", title: "Computer Applications in Business", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BBA-201", title: "Organizational Behavior", credits: 4 },
            { slNo: 2, code: "BBA-202", title: "Business Economics II", credits: 4 },
            { slNo: 3, code: "BBA-203", title: "Cost Accounting", credits: 4 },
            { slNo: 4, code: "BBA-204", title: "Business Statistics", credits: 4 },
            { slNo: 5, code: "BBA-205", title: "Business Law", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BBA-301", title: "Marketing Management", credits: 4 },
            { slNo: 2, code: "BBA-302", title: "Human Resource Management", credits: 4 },
            { slNo: 3, code: "BBA-303", title: "Financial Management", credits: 4 },
            { slNo: 4, code: "BBA-304", title: "Research Methodology", credits: 4 },
            { slNo: 5, code: "BBA-305", title: "Entrepreneurship Development", credits: 4 },
          ],
        },
        {
          number: 4,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BBA-401", title: "Production and Operations Management", credits: 4 },
            { slNo: 2, code: "BBA-402", title: "Management Information Systems", credits: 4 },
            { slNo: 3, code: "BBA-403", title: "Business Environment", credits: 4 },
            { slNo: 4, code: "BBA-404", title: "Elective I", credits: 4, isElective: true },
            { slNo: 5, code: "BBA-405", title: "Business Ethics", credits: 4 },
          ],
        },
        {
          number: 5,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BBA-501", title: "Strategic Management", credits: 4 },
            { slNo: 2, code: "BBA-502", title: "International Business", credits: 4 },
            { slNo: 3, code: "BBA-503", title: "Elective II", credits: 4, isElective: true },
            { slNo: 4, code: "BBA-504", title: "Elective III", credits: 4, isElective: true },
            { slNo: 5, code: "BBA-505", title: "Project Work I", credits: 4 },
          ],
        },
        {
          number: 6,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BBA-601", title: "Corporate Governance", credits: 4 },
            { slNo: 2, code: "BBA-602", title: "Elective IV", credits: 4, isElective: true },
            { slNo: 3, code: "BBA-603", title: "Elective V", credits: 4, isElective: true },
            { slNo: 4, code: "BBA-604", title: "Project Work II", credits: 8 },
          ],
        },
      ],
    },
    careerProspectsSection: {
      label: "BBA",
      title: "CAREER PROSPECTS",
      description: "BBA graduates are prepared for diverse roles in business management, from entry-level positions to management trainee programs across various industries including retail, banking, consulting, and corporate sectors.",
      industryStatsText: "Popular career paths for BBA graduates include:",
      jobProfiles: [
        "Business Analyst",
        "Marketing Executive",
        "HR Coordinator",
        "Operations Manager",
        "Sales Manager",
        "Financial Analyst",
        "Business Consultant",
        "Retail Manager",
        "Brand Manager",
        "Entrepreneur",
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "/admissions",
      imageUrl: "/mba-students-in-classroom-working-together.jpg",
      imageAlt: "BBA students in professional setting",
      backgroundImage: "/images/backgrouds/org_bg.svg",
      backgroundColor: "bg-blue-500",
      showVideoButton: true,
      videoUrl: "#",
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: 'Semester 1', fee: 'INR 35,000' },
          { semester: 'Semester 2', fee: 'INR 35,000' },
          { semester: 'Semester 3', fee: 'INR 35,000' },
          { semester: 'Semester 4', fee: 'INR 35,000' },
          { semester: 'Semester 5', fee: 'INR 35,000' },
          { semester: 'Semester 6', fee: 'INR 35,000' },
        ],
        yearData: [
          { year: '1st Year', fee: 'INR 70,000' },
          { year: '2nd Year', fee: 'INR 70,000' },
          { year: '3rd Year', fee: 'INR 70,000' },
        ],
        totalSemesterFee: 'INR 2,10,000',
        totalYearFee: 'INR 2,10,000',
      },
      international: {
        semesterData: [
          { semester: 'Semester 1', fee: 'USD 800' },
          { semester: 'Semester 2', fee: 'USD 800' },
          { semester: 'Semester 3', fee: 'USD 800' },
          { semester: 'Semester 4', fee: 'USD 800' },
          { semester: 'Semester 5', fee: 'USD 800' },
          { semester: 'Semester 6', fee: 'USD 800' },
        ],
        yearData: [
          { year: '1st Year', fee: 'USD 1,600' },
          { year: '2nd Year', fee: 'USD 1,600' },
          { year: '3rd Year', fee: 'USD 1,600' },
        ],
        totalSemesterFee: 'USD 4,800',
        totalYearFee: 'USD 4,800',
      },
      nationalEligibility: [
        'A candidate who has passed Higher Secondary/Intermediate (10+2) or any other examination recognized as equivalent thereto with 50% marks (45% in case of candidates belonging to reserved category).',
        'For working professionals with relevant experience, please contact the admission department at admissions@onlineuu.in',
      ],
      internationalEligibility: [
        'A candidate who has passed Higher Secondary or equivalent from a recognized international institution with minimum 50% marks or equivalent GPA.',
        'International students must have valid visa documentation and meet all immigration requirements.',
        'For working professionals with relevant experience, please contact the admission department at admissions@onlineuu.in',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  },

  mca: {
    heroSection: {
      subtitle: "POSTGRADUATE PROGRAM",
      title: "MASTER OF",
      highlightedText: "COMPUTER APPLICATIONS (MCA)",
      highlightColor: "#00D4FF",
      description: "Master the latest technologies and methodologies in computer applications. Our MCA program prepares you for leadership roles in the rapidly evolving IT industry with hands-on experience and cutting-edge curriculum.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "MCA online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "2 Years", duration: "4 semesters", icon: "Clock" },
      { title: "Batch Size", time: "30-40", duration: "Students", icon: "Users" },
      { title: "Course Fee", time: "INR 50,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹8,333 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "MCA EMI"
    },
    specializationSection: {
      title: {
        main: "TRACKS &",
        highlighted: "SPECIALIZATIONS"
      },
      description: "Master computer applications with our comprehensive MCA program. Choose from specialized tracks that focus on cutting-edge technologies and methodologies, preparing you for leadership roles in the IT industry.",
      specializations: [
        { title: "SOFTWARE\nDEVELOPMENT", icon: "technology" },
        { title: "DATA\nSCIENCE", icon: "analytics" },
        { title: "ARTIFICIAL\nINTELLIGENCE", icon: "technology" },
        { title: "CYBER\nSECURITY", icon: "technology" },
        { title: "MOBILE APP\nDEVELOPMENT", icon: "technology" },
        { title: "CLOUD\nCOMPUTING", icon: "technology" },
        { title: "WEB\nTECHNOLOGIES", icon: "digital" },
        { title: "DATABASE\nMANAGEMENT", icon: "analytics" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'MCA students working with technology',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#00D4FF',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE MCA?',
      subtitle: 'Master cutting-edge technologies with our comprehensive MCA program designed for the modern IT industry.',
      features: [
        {
          number: '01',
          title: 'INDUSTRY-EXPERT FACULTY AND MODERN CURRICULUM',
          description: 'Learn from experienced IT professionals with a curriculum updated to match current industry standards.'
        },
        {
          number: '02',
          title: 'HANDS-ON PROJECT EXPERIENCE',
          description: 'Work on real-world projects and build a strong portfolio that showcases your technical skills.'
        },
        {
          number: '03',
          title: 'ADVANCED TECHNICAL SKILLS',
          description: 'Master the latest programming languages, frameworks, and development tools used in the industry.'
        },
        {
          number: '04',
          title: 'CLOUD-BASED LEARNING PLATFORM',
          description: 'Access state-of-the-art development environments and resources anytime, anywhere.'
        },
        {
          number: '05',
          title: 'IT CAREER PLACEMENT SUPPORT',
          description: 'Receive specialized placement assistance for roles in top IT companies and startups.'
        }
      ]
    },
    programStructureSection: {
      programTitle: "Master of Computer Applications (MCA)",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MCA-101", title: "Programming Fundamentals", credits: 4 },
            { slNo: 2, code: "MCA-102", title: "Data Structures", credits: 4 },
            { slNo: 3, code: "MCA-103", title: "Computer Organization", credits: 4 },
            { slNo: 4, code: "MCA-104", title: "Discrete Mathematics", credits: 4 },
            { slNo: 5, code: "MCA-105", title: "Database Management Systems", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MCA-201", title: "Object-Oriented Programming", credits: 4 },
            { slNo: 2, code: "MCA-202", title: "Operating Systems", credits: 4 },
            { slNo: 3, code: "MCA-203", title: "Software Engineering", credits: 4 },
            { slNo: 4, code: "MCA-204", title: "Computer Networks", credits: 4 },
            { slNo: 5, code: "MCA-205", title: "Web Technologies", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MCA-301", title: "Artificial Intelligence", credits: 4 },
            { slNo: 2, code: "MCA-302", title: "Mobile Application Development", credits: 4 },
            { slNo: 3, code: "MCA-303", title: "Cloud Computing", credits: 4 },
            { slNo: 4, code: "MCA-304", title: "Elective I", credits: 4, isElective: true },
            { slNo: 5, code: "MCA-305", title: "Mini Project", credits: 4 },
          ],
        },
        {
          number: 4,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "MCA-401", title: "Machine Learning", credits: 4 },
            { slNo: 2, code: "MCA-402", title: "Cyber Security", credits: 4 },
            { slNo: 3, code: "MCA-403", title: "Elective II", credits: 4, isElective: true },
            { slNo: 4, code: "MCA-404", title: "Major Project", credits: 8 },
          ],
        },
      ],
    },
    careerProspectsSection: {
      label: "MCA",
      title: "CAREER PROSPECTS",
      description: "MCA graduates are highly sought after in the IT industry for roles in software development, system administration, database management, and emerging fields like AI, machine learning, and cloud computing.",
      industryStatsText: "Top job profiles for MCA graduates include:",
      jobProfiles: [
        "Software Developer",
        "System Analyst",
        "Database Administrator",
        "Cloud Architect",
        "AI/ML Engineer",
        "Web Developer",
        "Cybersecurity Expert",
        "DevOps Engineer",
        "Mobile App Developer",
        "Data Scientist",
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "/admissions",
      imageUrl: "/mba-students-in-classroom-working-together.jpg",
      imageAlt: "MCA students working on technology projects",
      backgroundImage: "/images/backgrouds/org_bg.svg",
      backgroundColor: "bg-purple-600",
      showVideoButton: true,
      videoUrl: "#",
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: 'Semester 1', fee: 'INR 40,000' },
          { semester: 'Semester 2', fee: 'INR 40,000' },
          { semester: 'Semester 3', fee: 'INR 40,000' },
          { semester: 'Semester 4', fee: 'INR 40,000' },
        ],
        yearData: [
          { year: '1st Year', fee: 'INR 80,000' },
          { year: '2nd Year', fee: 'INR 80,000' },
        ],
        totalSemesterFee: 'INR 1,60,000',
        totalYearFee: 'INR 1,60,000',
      },
      international: {
        semesterData: [
          { semester: 'Semester 1', fee: 'USD 900' },
          { semester: 'Semester 2', fee: 'USD 900' },
          { semester: 'Semester 3', fee: 'USD 900' },
          { semester: 'Semester 4', fee: 'USD 900' },
        ],
        yearData: [
          { year: '1st Year', fee: 'USD 1,800' },
          { year: '2nd Year', fee: 'USD 1,800' },
        ],
        totalSemesterFee: 'USD 3,600',
        totalYearFee: 'USD 3,600',
      },
      nationalEligibility: [
        'A Bachelor\'s degree in Computer Science/IT or equivalent with minimum 50% marks (45% in case of reserved category).',
        'For working professionals with 2 years of relevant experience, please contact the admission department at admissions@onlineuu.in',
      ],
      internationalEligibility: [
        'A Bachelor\'s degree in Computer Science/IT or equivalent from a recognized international university with minimum 50% marks or equivalent GPA.',
        'International students must have valid visa documentation and meet all immigration requirements.',
        'For working professionals with 2 years of relevant experience, please contact the admission department at admissions@onlineuu.in',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  },

  bca: {
    heroSection: {
      subtitle: "UNDERGRADUATE PROGRAM",
      title: "BACHELOR OF",
      highlightedText: "COMPUTER APPLICATIONS (BCA)",
      highlightColor: "#00D4FF",
      description: "Launch your career in computer applications with our comprehensive BCA program. Develop strong programming skills and technical expertise to excel in the dynamic IT industry.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "BCA online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "3 Years", duration: "6 semesters", icon: "Clock" },
      { title: "Study Mode", time: "Online", duration: "Flexible", icon: "BookOpen" },
      { title: "Course Fee", time: "INR 35,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹5,800 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "BCA EMI"
    },
    specializationSection: {
      title: {
        main: "COMPUTER APPLICATIONS",
        highlighted: "SPECIALIZATIONS"
      },
      description: "Choose your specialization to build expertise in specific areas of computer applications. Our BCA program offers diverse tracks to match your interests and prepare you for successful careers in IT.",
      specializations: [
        { title: "WEB\nDEVELOPMENT", icon: "technology" },
        { title: "SOFTWARE\nDEVELOPMENT", icon: "technology" },
        { title: "DATABASE\nMANAGEMENT", icon: "analytics" },
        { title: "MOBILE APP\nDEVELOPMENT", icon: "technology" },
        { title: "CYBERSECURITY", icon: "technology" },
        { title: "DATA SCIENCE", icon: "analytics" },
        { title: "CLOUD\nCOMPUTING", icon: "technology" },
        { title: "ARTIFICIAL\nINTELLIGENCE", icon: "technology" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'BCA students learning computer applications',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#00D4FF',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE BCA?',
      subtitle: 'Our computer applications program combines theoretical knowledge with practical programming skills to prepare you for successful careers in technology.',
      features: [
        {
          number: '01',
          title: 'COMPREHENSIVE PROGRAMMING FOUNDATION',
          description: 'Master multiple programming languages and development frameworks used in the industry.'
        },
        {
          number: '02',
          title: 'HANDS-ON PROJECT EXPERIENCE',
          description: 'Work on real-world projects and build a strong portfolio showcasing your technical skills.'
        },
        {
          number: '03',
          title: 'INDUSTRY-RELEVANT CURRICULUM',
          description: 'Learn the latest technologies and methodologies that are in high demand in the IT sector.'
        },
        {
          number: '04',
          title: 'PRACTICAL LAB SESSIONS',
          description: 'Access virtual labs and development environments to gain hands-on experience.'
        },
        {
          number: '05',
          title: 'IT CAREER PLACEMENT SUPPORT',
          description: 'Receive specialized placement assistance for roles in software companies and IT firms.'
        }
      ]
    },
    programStructureSection: {
      programTitle: "Bachelor of Computer Applications (BCA)",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BCA-101", title: "Fundamentals of Computer Science", credits: 4 },
            { slNo: 2, code: "BCA-102", title: "Programming in C", credits: 4 },
            { slNo: 3, code: "BCA-103", title: "Digital Computer Fundamentals", credits: 4 },
            { slNo: 4, code: "BCA-104", title: "Mathematics I", credits: 4 },
            { slNo: 5, code: "BCA-105", title: "Communication Skills", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BCA-201", title: "Data Structures", credits: 4 },
            { slNo: 2, code: "BCA-202", title: "Object Oriented Programming", credits: 4 },
            { slNo: 3, code: "BCA-203", title: "Computer Organization", credits: 4 },
            { slNo: 4, code: "BCA-204", title: "Mathematics II", credits: 4 },
            { slNo: 5, code: "BCA-205", title: "Environmental Studies", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BCA-301", title: "Database Management Systems", credits: 4 },
            { slNo: 2, code: "BCA-302", title: "Web Technologies", credits: 4 },
            { slNo: 3, code: "BCA-303", title: "Operating Systems", credits: 4 },
            { slNo: 4, code: "BCA-304", title: "Software Engineering", credits: 4 },
            { slNo: 5, code: "BCA-305", title: "Computer Networks", credits: 4 },
          ],
        },
        {
          number: 4,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BCA-401", title: "Advanced Java Programming", credits: 4 },
            { slNo: 2, code: "BCA-402", title: "Python Programming", credits: 4 },
            { slNo: 3, code: "BCA-403", title: "Mobile Application Development", credits: 4 },
            { slNo: 4, code: "BCA-404", title: "Elective I", credits: 4, isElective: true },
            { slNo: 5, code: "BCA-405", title: "Project Work I", credits: 4 },
          ],
        },
        {
          number: 5,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BCA-501", title: "Cloud Computing", credits: 4 },
            { slNo: 2, code: "BCA-502", title: "Data Science and Analytics", credits: 4 },
            { slNo: 3, code: "BCA-503", title: "Cybersecurity Fundamentals", credits: 4 },
            { slNo: 4, code: "BCA-504", title: "Elective II", credits: 4, isElective: true },
            { slNo: 5, code: "BCA-505", title: "Internship", credits: 4 },
          ],
        },
        {
          number: 6,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BCA-601", title: "Artificial Intelligence", credits: 4 },
            { slNo: 2, code: "BCA-602", title: "Machine Learning", credits: 4 },
            { slNo: 3, code: "BCA-603", title: "Blockchain Technology", credits: 4 },
            { slNo: 4, code: "BCA-604", title: "Elective III", credits: 4, isElective: true },
            { slNo: 5, code: "BCA-605", title: "Major Project", credits: 4 },
          ],
        }
      ]
    },
    careerProspectsSection: {
      label: "CAREER PROSPECTS",
      title: "Career Opportunities in Computer Applications",
      description: "BCA graduates are in high demand across IT companies, software development firms, startups, and various industries embracing digital transformation.",
      industryStatsText: "Computer application professionals enjoy excellent career prospects with opportunities in software development, web development, mobile app development, and emerging technologies.",
      jobProfiles: [
        "Software Developer",
        "Web Developer",
        "Mobile App Developer",
        "Database Administrator",
        "System Analyst",
        "Software Tester",
        "UI/UX Designer",
        "Technical Support Engineer",
        "Data Analyst",
        "Cybersecurity Analyst"
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "#apply",
      imageUrl: "/images/career-prospects/bca-career.png",
      imageAlt: "BCA Career Prospects",
      backgroundColor: "#00D4FF",
      showVideoButton: false,
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: "Semester 1", fee: "₹35,000" },
          { semester: "Semester 2", fee: "₹35,000" },
          { semester: "Semester 3", fee: "₹35,000" },
          { semester: "Semester 4", fee: "₹35,000" },
          { semester: "Semester 5", fee: "₹35,000" },
          { semester: "Semester 6", fee: "₹35,000" },
        ],
        yearData: [
          { year: "Year 1", fee: "₹70,000" },
          { year: "Year 2", fee: "₹70,000" },
          { year: "Year 3", fee: "₹70,000" },
        ],
        totalSemesterFee: "₹2,10,000",
        totalYearFee: "₹2,10,000"
      },
      international: {
        semesterData: [
          { semester: "Semester 1", fee: "$500" },
          { semester: "Semester 2", fee: "$500" },
          { semester: "Semester 3", fee: "$500" },
          { semester: "Semester 4", fee: "$500" },
          { semester: "Semester 5", fee: "$500" },
          { semester: "Semester 6", fee: "$500" },
        ],
        yearData: [
          { year: "Year 1", fee: "$1,000" },
          { year: "Year 2", fee: "$1,000" },
          { year: "Year 3", fee: "$1,000" },
        ],
        totalSemesterFee: "$3,000",
        totalYearFee: "$3,000"
      },
      nationalEligibility: [
        'Pass in 12th standard from any recognized board',
        'Minimum 50% marks in 12th standard (45% for SC/ST candidates)',
        'Mathematics as a subject in 12th standard',
      ],
      internationalEligibility: [
        'Equivalent to Indian 12th standard',
        'Minimum 50% marks or equivalent grade',
        'English proficiency certificate (if applicable)',
        'Valid passport and student visa',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  },

  ba: {
    heroSection: {
      subtitle: "UNDERGRADUATE PROGRAM",
      title: "BACHELOR OF",
      highlightedText: "ARTS (BA)",
      highlightColor: "#FF6B6B",
      description: "Explore diverse fields of arts and humanities with our comprehensive BA program. Develop critical thinking, communication skills, and cultural understanding for a successful career in various sectors.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "BA online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "3 Years", duration: "6 semesters", icon: "Clock" },
      { title: "Study Mode", time: "Online", duration: "Flexible", icon: "BookOpen" },
      { title: "Course Fee", time: "INR 25,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹4,200 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "BA EMI"
    },
    specializationSection: {
      title: {
        main: "ARTS & HUMANITIES",
        highlighted: "SPECIALIZATIONS"
      },
      description: "Choose your specialization to build expertise in specific areas of arts and humanities. Our BA program offers diverse tracks to develop your intellectual and creative capabilities.",
      specializations: [
        { title: "ENGLISH\nLITERATURE", icon: "marketing" },
        { title: "HISTORY", icon: "marketing" },
        { title: "PSYCHOLOGY", icon: "hr" },
        { title: "SOCIOLOGY", icon: "hr" },
        { title: "POLITICAL\nSCIENCE", icon: "international" },
        { title: "ECONOMICS", icon: "finance" },
        { title: "PHILOSOPHY", icon: "marketing" },
        { title: "JOURNALISM &\nMASS COMM.", icon: "digital" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'BA students in liberal arts education',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#FF6B6B',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE BA?',
      subtitle: 'Our arts program combines classical education with modern perspectives to develop well-rounded individuals with strong analytical and communication skills.',
      features: [
        {
          number: '01',
          title: 'LIBERAL ARTS FOUNDATION',
          description: 'Develop critical thinking, analytical skills, and broad intellectual perspectives across multiple disciplines.'
        },
        {
          number: '02',
          title: 'COMMUNICATION EXCELLENCE',
          description: 'Master written and oral communication skills essential for success in any career path.'
        },
        {
          number: '03',
          title: 'CULTURAL AWARENESS',
          description: 'Gain deep understanding of society, culture, history, and human behavior through diverse coursework.'
        },
        {
          number: '04',
          title: 'RESEARCH METHODOLOGY',
          description: 'Learn systematic research approaches and analytical methods used in social sciences and humanities.'
        },
        {
          number: '05',
          title: 'DIVERSE CAREER PATHWAYS',
          description: 'Prepare for careers in education, media, government, non-profits, and various other sectors.'
        }
      ]
    },
    programStructureSection: {
      programTitle: "Bachelor of Arts (BA)",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BA-101", title: "English Literature I", credits: 4 },
            { slNo: 2, code: "BA-102", title: "History I", credits: 4 },
            { slNo: 3, code: "BA-103", title: "Political Science I", credits: 4 },
            { slNo: 4, code: "BA-104", title: "Economics I", credits: 4 },
            { slNo: 5, code: "BA-105", title: "Communication Skills", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BA-201", title: "English Literature II", credits: 4 },
            { slNo: 2, code: "BA-202", title: "History II", credits: 4 },
            { slNo: 3, code: "BA-203", title: "Political Science II", credits: 4 },
            { slNo: 4, code: "BA-204", title: "Economics II", credits: 4 },
            { slNo: 5, code: "BA-205", title: "Environmental Studies", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BA-301", title: "Psychology I", credits: 4 },
            { slNo: 2, code: "BA-302", title: "Sociology I", credits: 4 },
            { slNo: 3, code: "BA-303", title: "Philosophy I", credits: 4 },
            { slNo: 4, code: "BA-304", title: "Elective I", credits: 4, isElective: true },
            { slNo: 5, code: "BA-305", title: "Research Methodology", credits: 4 },
          ],
        },
        {
          number: 4,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BA-401", title: "Psychology II", credits: 4 },
            { slNo: 2, code: "BA-402", title: "Sociology II", credits: 4 },
            { slNo: 3, code: "BA-403", title: "Philosophy II", credits: 4 },
            { slNo: 4, code: "BA-404", title: "Elective II", credits: 4, isElective: true },
            { slNo: 5, code: "BA-405", title: "Project Work I", credits: 4 },
          ],
        },
        {
          number: 5,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BA-501", title: "Contemporary Issues", credits: 4 },
            { slNo: 2, code: "BA-502", title: "Media and Communication", credits: 4 },
            { slNo: 3, code: "BA-503", title: "Gender Studies", credits: 4 },
            { slNo: 4, code: "BA-504", title: "Elective III", credits: 4, isElective: true },
            { slNo: 5, code: "BA-505", title: "Internship", credits: 4 },
          ],
        },
        {
          number: 6,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BA-601", title: "Global Perspectives", credits: 4 },
            { slNo: 2, code: "BA-602", title: "Cultural Studies", credits: 4 },
            { slNo: 3, code: "BA-603", title: "Human Rights", credits: 4 },
            { slNo: 4, code: "BA-604", title: "Elective IV", credits: 4, isElective: true },
            { slNo: 5, code: "BA-605", title: "Major Project", credits: 4 },
          ],
        }
      ]
    },
    careerProspectsSection: {
      label: "CAREER PROSPECTS",
      title: "Career Opportunities in Arts and Humanities",
      description: "BA graduates have diverse career opportunities in education, media, government, social services, cultural organizations, and many other sectors that value critical thinking and communication skills.",
      industryStatsText: "Arts graduates bring valuable skills to various industries including creative writing, content creation, social work, teaching, civil services, and cultural preservation.",
      jobProfiles: [
        "Teacher/Lecturer",
        "Content Writer",
        "Journalist",
        "Social Worker",
        "Civil Services Officer",
        "Museum Curator",
        "Human Resources Executive",
        "NGO Worker",
        "Research Assistant",
        "Cultural Program Coordinator"
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "#apply",
      imageUrl: "/images/career-prospects/ba-career.png",
      imageAlt: "BA Career Prospects",
      backgroundColor: "#FF6B6B",
      showVideoButton: false,
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: "Semester 1", fee: "₹25,000" },
          { semester: "Semester 2", fee: "₹25,000" },
          { semester: "Semester 3", fee: "₹25,000" },
          { semester: "Semester 4", fee: "₹25,000" },
          { semester: "Semester 5", fee: "₹25,000" },
          { semester: "Semester 6", fee: "₹25,000" },
        ],
        yearData: [
          { year: "Year 1", fee: "₹50,000" },
          { year: "Year 2", fee: "₹50,000" },
          { year: "Year 3", fee: "₹50,000" },
        ],
        totalSemesterFee: "₹1,50,000",
        totalYearFee: "₹1,50,000"
      },
      international: {
        semesterData: [
          { semester: "Semester 1", fee: "$400" },
          { semester: "Semester 2", fee: "$400" },
          { semester: "Semester 3", fee: "$400" },
          { semester: "Semester 4", fee: "$400" },
          { semester: "Semester 5", fee: "$400" },
          { semester: "Semester 6", fee: "$400" },
        ],
        yearData: [
          { year: "Year 1", fee: "$800" },
          { year: "Year 2", fee: "$800" },
          { year: "Year 3", fee: "$800" },
        ],
        totalSemesterFee: "$2,400",
        totalYearFee: "$2,400"
      },
      nationalEligibility: [
        'Pass in 12th standard from any recognized board',
        'Minimum 50% marks in 12th standard (45% for SC/ST candidates)',
        'No specific subject requirements',
      ],
      internationalEligibility: [
        'Equivalent to Indian 12th standard',
        'Minimum 50% marks or equivalent grade',
        'English proficiency certificate (if applicable)',
        'Valid passport and student visa',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  },

  executivemba: {
    heroSection: {
      subtitle: "EXECUTIVE PROGRAM",
      title: "EXECUTIVE",
      highlightedText: "MASTER OF BUSINESS ADMINISTRATION",
      highlightColor: "#8B5A2B",
      description: "Advance your leadership career with our Executive MBA program designed for working professionals. Develop strategic thinking and executive skills while maintaining your professional commitments.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "Executive MBA online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "18 Months", duration: "3 semesters", icon: "Clock" },
      { title: "Study Mode", time: "Online", duration: "Weekend Classes", icon: "BookOpen" },
      { title: "Course Fee", time: "INR 75,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹12,500 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "Executive MBA EMI"
    },
    specializationSection: {
      title: {
        main: "EXECUTIVE",
        highlighted: "SPECIALIZATIONS"
      },
      description: "Choose your specialization to enhance your executive leadership capabilities. Our Executive MBA program offers strategic tracks designed for senior professionals and executives.",
      specializations: [
        { title: "STRATEGIC\nLEADERSHIP", icon: "hr" },
        { title: "DIGITAL\nTRANSFORMATION", icon: "digital" },
        { title: "FINANCIAL\nSTRATEGY", icon: "finance" },
        { title: "OPERATIONS\nEXCELLENCE", icon: "logistics" },
        { title: "INNOVATION\nMANAGEMENT", icon: "technology" },
        { title: "GLOBAL\nBUSINESS", icon: "international" },
        { title: "CHANGE\nMANAGEMENT", icon: "hr" },
        { title: "CORPORATE\nSTRATEGY", icon: "analytics" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'Executive MBA professionals in leadership roles',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#8B5A2B',
      preTitle: 'WHY OPT FOR',
      title: 'EXECUTIVE MBA?',
      subtitle: 'Our Executive MBA program is designed for experienced professionals seeking to advance their careers to senior leadership positions while maintaining their professional commitments.',
      features: [
        {
          number: '01',
          title: 'STRATEGIC LEADERSHIP DEVELOPMENT',
          description: 'Develop advanced leadership skills and strategic thinking capabilities essential for executive roles.'
        },
        {
          number: '02',
          title: 'FLEXIBLE LEARNING FORMAT',
          description: 'Weekend and evening classes designed to accommodate busy professional schedules.'
        },
        {
          number: '03',
          title: 'EXECUTIVE PEER NETWORK',
          description: 'Build valuable connections with senior professionals and executives from diverse industries.'
        },
        {
          number: '04',
          title: 'REAL-WORLD CASE STUDIES',
          description: 'Apply learning through contemporary business cases and real organizational challenges.'
        },
        {
          number: '05',
          title: 'IMMEDIATE APPLICATION',
          description: 'Implement learnings directly in your current role for immediate professional impact.'
        }
      ]
    },
    programStructureSection: {
      programTitle: "Executive Master of Business Administration",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 24,
          courses: [
            { slNo: 1, code: "EMBA-101", title: "Strategic Management", credits: 4 },
            { slNo: 2, code: "EMBA-102", title: "Leadership and Organizational Behavior", credits: 4 },
            { slNo: 3, code: "EMBA-103", title: "Financial Management for Executives", credits: 4 },
            { slNo: 4, code: "EMBA-104", title: "Marketing Strategy", credits: 4 },
            { slNo: 5, code: "EMBA-105", title: "Operations Management", credits: 4 },
            { slNo: 6, code: "EMBA-106", title: "Managerial Economics", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 24,
          courses: [
            { slNo: 1, code: "EMBA-201", title: "Digital Transformation Strategy", credits: 4 },
            { slNo: 2, code: "EMBA-202", title: "Global Business Environment", credits: 4 },
            { slNo: 3, code: "EMBA-203", title: "Corporate Finance", credits: 4 },
            { slNo: 4, code: "EMBA-204", title: "Innovation and Entrepreneurship", credits: 4 },
            { slNo: 5, code: "EMBA-205", title: "Supply Chain Management", credits: 4 },
            { slNo: 6, code: "EMBA-206", title: "Business Ethics and Governance", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 24,
          courses: [
            { slNo: 1, code: "EMBA-301", title: "Executive Specialization I", credits: 6, isElective: true },
            { slNo: 2, code: "EMBA-302", title: "Executive Specialization II", credits: 6, isElective: true },
            { slNo: 3, code: "EMBA-303", title: "Capstone Project", credits: 8 },
            { slNo: 4, code: "EMBA-304", title: "Executive Seminar", credits: 4 },
          ],
        }
      ]
    },
    careerProspectsSection: {
      label: "CAREER PROSPECTS",
      title: "Executive Career Advancement",
      description: "Executive MBA graduates typically advance to senior leadership positions including C-suite roles, board positions, and strategic consulting opportunities.",
      industryStatsText: "Executive MBA professionals experience significant career acceleration with opportunities for leadership roles across industries and enhanced earning potential.",
      jobProfiles: [
        "Chief Executive Officer (CEO)",
        "Chief Operating Officer (COO)",
        "Chief Strategy Officer",
        "Vice President",
        "General Manager",
        "Management Consultant",
        "Board Member",
        "Business Unit Head",
        "Regional Director",
        "Strategic Advisor"
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "#apply",
      imageUrl: "/images/career-prospects/executive-mba-career.png",
      imageAlt: "Executive MBA Career Prospects",
      backgroundColor: "#8B5A2B",
      showVideoButton: false,
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: "Semester 1", fee: "₹75,000" },
          { semester: "Semester 2", fee: "₹75,000" },
          { semester: "Semester 3", fee: "₹75,000" },
        ],
        yearData: [
          { year: "Total Program", fee: "₹2,25,000" },
        ],
        totalSemesterFee: "₹2,25,000",
        totalYearFee: "₹2,25,000"
      },
      international: {
        semesterData: [
          { semester: "Semester 1", fee: "$1,200" },
          { semester: "Semester 2", fee: "$1,200" },
          { semester: "Semester 3", fee: "$1,200" },
        ],
        yearData: [
          { year: "Total Program", fee: "$3,600" },
        ],
        totalSemesterFee: "$3,600",
        totalYearFee: "$3,600"
      },
      nationalEligibility: [
        'Graduate degree from a recognized university',
        'Minimum 5 years of professional work experience',
        'Preference for candidates in managerial/supervisory roles',
        'Valid score in entrance exam or personal interview',
      ],
      internationalEligibility: [
        'Equivalent bachelor\'s degree',
        'Minimum 5 years of professional work experience',
        'English proficiency certificate (IELTS/TOEFL)',
        'Valid passport and student visa',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  },

  // Default configuration
  default: {
    heroSection: {
      subtitle: "BEST",
      title: "STUDENT FRIENDLY",
      highlightedText: "UNIVERSITY!",
      highlightColor: "#6BC533",
      description: "We are a multi-cultural, research-oriented, and student-friendly university where knowledge is imparted in a harmonious and friendly environment.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "2 Years", duration: "4 semesters", icon: "Clock" },
      { title: "Hours Per Week", time: "8-10 Hours", duration: "Per Week", icon: "Hourglass" },
      { title: "Course Fee", time: "INR 35,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹5,513 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "Course EMI"
    },
    specializationSection: {
      title: {
        main: "AREAS OF",
        highlighted: "FOCUS"
      },
      description: "Explore various areas of focus in your chosen field. Our comprehensive program offers diverse specializations to help you build expertise and advance your career in your area of interest.",
      specializations: [
        { title: "CORE\nSUBJECTS", icon: "technology" },
        { title: "APPLIED\nLEARNING", icon: "analytics" },
        { title: "RESEARCH &\nDEVELOPMENT", icon: "technology" },
        { title: "INDUSTRY\nPRACTICE", icon: "international" },
        { title: "PROJECT\nMANAGEMENT", icon: "logistics" },
        { title: "PROFESSIONAL\nSKILLS", icon: "hr" },
        { title: "INNOVATION &\nENTREPRENEURSHIP", icon: "marketing" },
        { title: "LEADERSHIP &\nSTRATEGY", icon: "finance" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'Professional students in business attire',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#6BC533',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE UU?',
      subtitle: 'Our valued degrees stand out from the crowd and prepare you for a job at industry-leading companies.',
      features: [
        {
          number: '01',
          title: 'PRODIGIOUS FACULTY AND WORLD-CLASS CURRICULUM',
          description: 'Our intensive curriculum hones your skills with comprehensive coverage of essential subjects.'
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
    },
    programStructureSection: {
      programTitle: "Academic Program",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "PROG-101", title: "Introduction to Program", credits: 4 },
            { slNo: 2, code: "PROG-102", title: "Core Subject I", credits: 4 },
            { slNo: 3, code: "PROG-103", title: "Core Subject II", credits: 4 },
            { slNo: 4, code: "PROG-104", title: "Foundation Course", credits: 4 },
            { slNo: 5, code: "PROG-105", title: "Practical Training I", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "PROG-201", title: "Advanced Core Subject I", credits: 4 },
            { slNo: 2, code: "PROG-202", title: "Advanced Core Subject II", credits: 4 },
            { slNo: 3, code: "PROG-203", title: "Elective I", credits: 4, isElective: true },
            { slNo: 4, code: "PROG-204", title: "Research Methodology", credits: 4 },
            { slNo: 5, code: "PROG-205", title: "Project Work", credits: 4 },
          ],
        },
      ],
    },
    careerProspectsSection: {
      label: "CAREER",
      title: "CAREER PROSPECTS",
      description: "Our programs prepare students for diverse career opportunities across multiple industries, providing them with the skills and knowledge needed to excel in their chosen fields.",
      industryStatsText: "Explore various career paths:",
      jobProfiles: [
        "Management Professional",
        "Technical Expert",
        "Business Analyst",
        "Project Manager",
        "Consultant",
        "Team Leader",
        "Specialist",
        "Coordinator",
        "Administrator",
        "Executive",
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "/admissions",
      imageUrl: "/mba-students-in-classroom-working-together.jpg",
      imageAlt: "Students in professional setting",
      backgroundImage: "/images/backgrouds/org_bg.svg",
      backgroundColor: "bg-amber-400",
      showVideoButton: true,
      videoUrl: "#",
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: 'Semester 1', fee: 'INR 35,000' },
          { semester: 'Semester 2', fee: 'INR 35,000' },
        ],
        yearData: [
          { year: '1st Year', fee: 'INR 70,000' },
        ],
        totalSemesterFee: 'INR 70,000',
        totalYearFee: 'INR 70,000',
      },
      international: {
        semesterData: [
          { semester: 'Semester 1', fee: 'USD 800' },
          { semester: 'Semester 2', fee: 'USD 800' },
        ],
        yearData: [
          { year: '1st Year', fee: 'USD 1,600' },
        ],
        totalSemesterFee: 'USD 1,600',
        totalYearFee: 'USD 1,600',
      },
      nationalEligibility: [
        'A Bachelor\'s degree of minimum three years duration with minimum 50% marks for the General and 45% marks in case of Reserved Category in the qualifying examination.',
        'For working professionals with 2 years of experience, please contact the admission department at admissions@onlineuu.in',
      ],
      internationalEligibility: [
        'A Bachelor\'s degree from a recognized international university with minimum 50% marks or equivalent GPA.',
        'International students must have valid visa documentation and meet all immigration requirements.',
        'For working professionals with 2 years of experience, please contact the admission department at admissions@onlineuu.in',
      ],
      paymentModes: [
        'Students should pay the prescribed fees on the online portal at the time of admission.',
        'Fees will be accepted online on the admission portal via Debit Card/Credit Card/UPI/Wallets/Net Banking etc.',
        'Care should be taken to ensure that payments are not made to unauthorized persons or on any unauthorized website or link. The university will not be responsible for any lapse in this matter.',
      ],
    }
  }
}

/**
 * Get course configuration by course key
 * @param courseKey - The course identifier (e.g., 'mba', 'bba', 'mca')
 * @returns Course configuration object
 */
export function getCourseConfig(courseKey: string): CourseConfig {
  if (!courseKey || typeof courseKey !== 'string') {
    return courseConfigs.default
  }
  return courseConfigs[courseKey.toLowerCase()] || courseConfigs.default
}

/**
 * Create a custom course configuration
 * @param customBannerItems - Custom banner items
 * @param customEmiBanner - Custom EMI banner
 * @param customHeroSection - Custom hero section
 * @param customSpecializationSection - Custom specialization section
 * @param customEducationSection - Custom education section
 * @returns Course configuration object
 */
export function createCustomCourseConfig(
  customBannerItems: BannerItem[], 
  customEmiBanner: EMIBanner,
  customHeroSection?: HeroSectionConfig,
  customSpecializationSection?: SpecializationSection,
  customEducationSection?: EducationSection,
  customProgramStructureSection?: ProgramStructureSection,
  customCareerProspectsSection?: CareerProspectsSection,
  customFeeDetails?: FeeDetails
): CourseConfig {
  return {
    heroSection: customHeroSection || courseConfigs.default.heroSection,
    bannerItems: customBannerItems,
    emiBanner: customEmiBanner,
    specializationSection: customSpecializationSection || courseConfigs.default.specializationSection,
    educationSection: customEducationSection || courseConfigs.default.educationSection,
    programStructureSection: customProgramStructureSection || courseConfigs.default.programStructureSection,
    careerProspectsSection: customCareerProspectsSection || courseConfigs.default.careerProspectsSection,
    feeDetails: customFeeDetails || courseConfigs.default.feeDetails
  }
}