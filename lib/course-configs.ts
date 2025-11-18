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

export interface CourseConfig {
  heroSection: HeroSectionConfig
  bannerItems: BannerItem[]
  emiBanner: EMIBanner
  specializationSection: SpecializationSection
  educationSection: EducationSection
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
      backgroundImageSrc: "/images/hero-section/mba-hero.png",
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
      backgroundImageSrc: "/images/hero-section/bba-hero.png",
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
      backgroundImageSrc: "/images/hero-section/mca-hero.png",
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
      backgroundImageSrc: "/images/hero-section/btech-hero.png",
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
  customEducationSection?: EducationSection
): CourseConfig {
  return {
    heroSection: customHeroSection || courseConfigs.default.heroSection,
    bannerItems: customBannerItems,
    emiBanner: customEmiBanner,
    specializationSection: customSpecializationSection || courseConfigs.default.specializationSection,
    educationSection: customEducationSection || courseConfigs.default.educationSection
  }
}