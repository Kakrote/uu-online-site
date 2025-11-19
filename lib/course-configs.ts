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

  btech: {
    heroSection: {
      subtitle: "ENGINEERING PROGRAM",
      title: "BACHELOR OF",
      highlightedText: "TECHNOLOGY (B.TECH)",
      highlightColor: "#6BC533",
      description: "Engineer your future with our comprehensive B.Tech program. Choose from diverse engineering specializations and build expertise in cutting-edge technologies that shape tomorrow's world.",
      buttonText: "Apply Now →",
      buttonUrl: "#apply",
      brochure: "Download Brochure",
      brochureUrl: "#brochure",
      backgroundImageSrc: "/images/hero-section/student-with-book-in-uu.png",
      backgroundImageAlt: "BTech online course hero section image",
      showGradientOverlay: true
    },
    bannerItems: [
      { title: "Duration", time: "4 Years", duration: "8 semesters", icon: "Clock" },
      { title: "Degree Type", time: "Bachelor's", duration: "Engineering", icon: "GraduationCap" },
      { title: "Course Fee", time: "INR 60,000", duration: "Per Semester", icon: "IndianRupee" },
    ],
    emiBanner: {
      title: "No Cost EMI",
      subtitle: "EMI starting at",
      amount: "₹10,000 INR",
      iconSrc: "/images/icons/fee.png",
      iconAlt: "BTech EMI"
    },
    specializationSection: {
      title: {
        main: "BRANCHES &",
        highlighted: "SPECIALIZATIONS"
      },
      description: "Choose your engineering specialization and build expertise in cutting-edge technologies. Our comprehensive BTech program offers diverse branches to match your interests and prepare you for successful careers in engineering and technology.",
      specializations: [
        { title: "COMPUTER SCIENCE\n& ENGINEERING", icon: "technology" },
        { title: "INFORMATION\nTECHNOLOGY", icon: "technology" },
        { title: "MECHANICAL\nENGINEERING", icon: "technology" },
        { title: "ELECTRICAL\nENGINEERING", icon: "technology" },
        { title: "CIVIL\nENGINEERING", icon: "technology" },
        { title: "ELECTRONICS &\nCOMMUNICATION", icon: "technology" },
        { title: "DATA SCIENCE\n& AI", icon: "analytics" },
        { title: "ROBOTICS &\nAUTOMATION", icon: "technology" },
      ]
    },
    educationSection: {
      imageUrl: '/images/faces/student_image.jpeg',
      imageAlt: 'BTech engineering students',
      backgroundImage: '/images/backgrouds/green_bg.svg',
      backgroundColor: '#6BC533',
      preTitle: 'WHY OPT FOR',
      title: 'ONLINE B.TECH?',
      subtitle: 'Engineer your future with a comprehensive program that combines theoretical knowledge with practical skills.',
      features: [
        {
          number: '01',
          title: 'DISTINGUISHED ENGINEERING FACULTY',
          description: 'Learn from experienced engineers and researchers with expertise across multiple engineering disciplines.'
        },
        {
          number: '02',
          title: 'COMPREHENSIVE LAB ACCESS',
          description: 'Access virtual labs and simulation tools to gain practical experience in engineering concepts.'
        },
        {
          number: '03',
          title: 'INDUSTRY-ALIGNED CURRICULUM',
          description: 'Study a curriculum designed in collaboration with industry experts to meet current market demands.'
        },
        {
          number: '04',
          title: 'RESEARCH OPPORTUNITIES',
          description: 'Participate in research projects and innovation initiatives to develop problem-solving skills.'
        },
        {
          number: '05',
          title: 'ENGINEERING CAREER SUPPORT',
          description: 'Get placement assistance and career guidance for roles in leading engineering companies.'
        }
      ]
    },
    programStructureSection: {
      programTitle: "Bachelor of Technology (B.Tech)",
      applyUrl: "/admissions",
      imageSrc: "/images/programs/course-detail/student_image.jpeg",
      semesters: [
        {
          number: 1,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-101", title: "Engineering Mathematics I", credits: 4 },
            { slNo: 2, code: "BTECH-102", title: "Engineering Physics", credits: 4 },
            { slNo: 3, code: "BTECH-103", title: "Engineering Chemistry", credits: 4 },
            { slNo: 4, code: "BTECH-104", title: "Programming for Problem Solving", credits: 4 },
            { slNo: 5, code: "BTECH-105", title: "Engineering Graphics", credits: 4 },
          ],
        },
        {
          number: 2,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-201", title: "Engineering Mathematics II", credits: 4 },
            { slNo: 2, code: "BTECH-202", title: "Data Structures", credits: 4 },
            { slNo: 3, code: "BTECH-203", title: "Digital Logic Design", credits: 4 },
            { slNo: 4, code: "BTECH-204", title: "Basic Electronics", credits: 4 },
            { slNo: 5, code: "BTECH-205", title: "Environmental Science", credits: 4 },
          ],
        },
        {
          number: 3,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-301", title: "Engineering Mathematics III", credits: 4 },
            { slNo: 2, code: "BTECH-302", title: "Object-Oriented Programming", credits: 4 },
            { slNo: 3, code: "BTECH-303", title: "Computer Organization", credits: 4 },
            { slNo: 4, code: "BTECH-304", title: "Database Management Systems", credits: 4 },
            { slNo: 5, code: "BTECH-305", title: "Discrete Mathematics", credits: 4 },
          ],
        },
        {
          number: 4,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-401", title: "Operating Systems", credits: 4 },
            { slNo: 2, code: "BTECH-402", title: "Computer Networks", credits: 4 },
            { slNo: 3, code: "BTECH-403", title: "Software Engineering", credits: 4 },
            { slNo: 4, code: "BTECH-404", title: "Microprocessors", credits: 4 },
            { slNo: 5, code: "BTECH-405", title: "Theory of Computation", credits: 4 },
          ],
        },
        {
          number: 5,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-501", title: "Artificial Intelligence", credits: 4 },
            { slNo: 2, code: "BTECH-502", title: "Compiler Design", credits: 4 },
            { slNo: 3, code: "BTECH-503", title: "Elective I", credits: 4, isElective: true },
            { slNo: 4, code: "BTECH-504", title: "Elective II", credits: 4, isElective: true },
            { slNo: 5, code: "BTECH-505", title: "Mini Project", credits: 4 },
          ],
        },
        {
          number: 6,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-601", title: "Machine Learning", credits: 4 },
            { slNo: 2, code: "BTECH-602", title: "Elective III", credits: 4, isElective: true },
            { slNo: 3, code: "BTECH-603", title: "Elective IV", credits: 4, isElective: true },
            { slNo: 4, code: "BTECH-604", title: "Minor Project", credits: 4 },
            { slNo: 5, code: "BTECH-605", title: "Seminar", credits: 4 },
          ],
        },
        {
          number: 7,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-701", title: "Cloud Computing", credits: 4 },
            { slNo: 2, code: "BTECH-702", title: "Cyber Security", credits: 4 },
            { slNo: 3, code: "BTECH-703", title: "Elective V", credits: 4, isElective: true },
            { slNo: 4, code: "BTECH-704", title: "Major Project I", credits: 8 },
          ],
        },
        {
          number: 8,
          totalCredits: 20,
          courses: [
            { slNo: 1, code: "BTECH-801", title: "Industrial Training", credits: 4 },
            { slNo: 2, code: "BTECH-802", title: "Elective VI", credits: 4, isElective: true },
            { slNo: 3, code: "BTECH-803", title: "Major Project II", credits: 12 },
          ],
        },
      ],
    },
    careerProspectsSection: {
      label: "B.TECH",
      title: "CAREER PROSPECTS",
      description: "B.Tech graduates have excellent career opportunities in engineering, technology, research and development, and various technical fields across manufacturing, IT, construction, and emerging technology sectors.",
      industryStatsText: "Key career opportunities for B.Tech graduates:",
      jobProfiles: [
        "Software Engineer",
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
        "Project Engineer",
        "Quality Engineer",
        "Design Engineer",
        "Research Engineer",
        "Technical Consultant",
        "System Engineer",
      ],
      applyButtonText: "Apply Now",
      applyButtonUrl: "/admissions",
      imageUrl: "/mba-students-in-classroom-working-together.jpg",
      imageAlt: "B.Tech students in engineering lab",
      backgroundImage: "/images/backgrouds/org_bg.svg",
      backgroundColor: "bg-green-600",
      showVideoButton: true,
      videoUrl: "#",
    },
    feeDetails: {
      national: {
        semesterData: [
          { semester: 'Semester 1', fee: 'INR 38,000' },
          { semester: 'Semester 2', fee: 'INR 38,000' },
          { semester: 'Semester 3', fee: 'INR 38,000' },
          { semester: 'Semester 4', fee: 'INR 38,000' },
          { semester: 'Semester 5', fee: 'INR 38,000' },
          { semester: 'Semester 6', fee: 'INR 38,000' },
          { semester: 'Semester 7', fee: 'INR 38,000' },
          { semester: 'Semester 8', fee: 'INR 38,000' },
        ],
        yearData: [
          { year: '1st Year', fee: 'INR 76,000' },
          { year: '2nd Year', fee: 'INR 76,000' },
          { year: '3rd Year', fee: 'INR 76,000' },
          { year: '4th Year', fee: 'INR 76,000' },
        ],
        totalSemesterFee: 'INR 3,04,000',
        totalYearFee: 'INR 3,04,000',
      },
      international: {
        semesterData: [
          { semester: 'Semester 1', fee: 'USD 850' },
          { semester: 'Semester 2', fee: 'USD 850' },
          { semester: 'Semester 3', fee: 'USD 850' },
          { semester: 'Semester 4', fee: 'USD 850' },
          { semester: 'Semester 5', fee: 'USD 850' },
          { semester: 'Semester 6', fee: 'USD 850' },
          { semester: 'Semester 7', fee: 'USD 850' },
          { semester: 'Semester 8', fee: 'USD 850' },
        ],
        yearData: [
          { year: '1st Year', fee: 'USD 1,700' },
          { year: '2nd Year', fee: 'USD 1,700' },
          { year: '3rd Year', fee: 'USD 1,700' },
          { year: '4th Year', fee: 'USD 1,700' },
        ],
        totalSemesterFee: 'USD 6,800',
        totalYearFee: 'USD 6,800',
      },
      nationalEligibility: [
        'A candidate who has passed Higher Secondary/Intermediate (10+2) with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject with minimum 50% marks (45% in case of reserved category).',
        'For working professionals with relevant experience, please contact the admission department at admissions@onlineuu.in',
      ],
      internationalEligibility: [
        'A candidate who has passed Higher Secondary or equivalent from a recognized international institution with Physics and Mathematics and minimum 50% marks or equivalent GPA.',
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