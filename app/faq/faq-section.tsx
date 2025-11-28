'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQTopic {
  title: string
  items: FAQItem[]
}

const faqTopics: FAQTopic[] = [
  {
    title: 'About Online UU',
    items: [
      {
        question: 'What does Online UU stand for?',
        answer: 'Online UU stands for Online Uttaranchal University under the control of the Centre for Distance & Online Education department of the University.'
      },
      {
        question: 'What is Online Learning?',
        answer: 'Online Learning, also known as e-Learning, refers to the use of the Internet and Digital technologies to facilitate and enhance the learning process. It provides individuals with the flexibility to access educational materials and pursue in the programs virtually, anywhere at anytime. Online learning encompasses a variety of formats, including video lectures, interactive quizzes, discussion forums, and other multimedia resources.'
      },
      {
        question: 'What are the benefits of Online Learning?',
        answer: 'Online Learning makes lifelong learning possible. Along with enhanced access to educational opportunities; it offers convenience, flexibility and affordability. Out of many benefits, some are listed here:\n\n• Suitable for anyone who wants to pursue higher education from anywhere\n• Self-paced learning which enables the control of personal time\n• No constraint of time and place as the learning is fully online and flexible\n• Multi-tasking opportunity along with pursuing the degree online\n• No Age bar. Learning has no barriers, so the age is not a matter to achieve your UG and PG degree'
      },
      {
        question: 'What are the advantages of Online UU?',
        answer: 'A few of the prominent features of Online UU are as follows:\n\n• Recognised by the Competent authority\n• Equivalence to the Regular mode of degree\n• Live and Recorded Lectures\n• Advanced LMS with e-library\n• Placement Assistance\n• Affordable Program Fee\n• 24x7 Learner Support\n• Online Flexible Examination\n• Globally Accepted Curriculum\n• Additional Free Infosys Certification Course'
      },
      {
        question: 'Where is Uttaranchal University located?',
        answer: 'Uttaranchal University is located in Dehradun, Uttarakhand and is well connected by Road, Rail, and Air; having a reasonable distance from the Bus stand, Railway station, and the Airport in Dehradun.'
      }
    ]
  },
  {
    title: 'Accreditations/Recognitions',
    items: [
      {
        question: 'What accreditations does Uttaranchal University have?',
        answer: 'Uttaranchal University is accredited by NAAC with A+ Grade and approved by UGC. The online programs are approved by UGC-DEB (University Grants Commission - Distance Education Bureau).'
      },
      {
        question: 'Is Uttaranchal University recognized by UGC?',
        answer: 'Yes, Uttaranchal University is recognized by the University Grants Commission (UGC) under Section 2(f) of the UGC Act, 1956.'
      },
      {
        question: 'What is NAAC accreditation?',
        answer: 'NAAC (National Assessment and Accreditation Council) is an autonomous body established by UGC to assess and accredit institutions of higher education. Uttaranchal University has been awarded A+ Grade by NAAC.'
      }
    ]
  },
  {
    title: 'Disciplines/Programmes Offered',
    items: [
      {
        question: 'What programs are offered by Online UU?',
        answer: 'Online UU offers various undergraduate and postgraduate programs including BBA, BCA, B.Com, MBA, MCA, M.Com, MA in various specializations.'
      },
      {
        question: 'Can I pursue specialization in my chosen field?',
        answer: 'Yes, most programs offer multiple specializations. For example, MBA offers specializations in Finance, Marketing, Human Resources, Operations, and more.'
      },
      {
        question: 'Are there any certificate or diploma programs available?',
        answer: 'Yes, Online UU offers various certificate and diploma programs in addition to degree programs. Please check our programs page for detailed information.'
      },
      {
        question: 'What is the duration of the programs?',
        answer: 'Undergraduate programs are typically 3 years, postgraduate programs are 2 years. However, students can complete at their own pace within the maximum allowed duration.'
      }
    ]
  },
  {
    title: 'Equivalence of Online Degree',
    items: [
      {
        question: 'Is an online degree equivalent to a regular degree?',
        answer: 'Yes, as per UGC guidelines and notifications, online degrees from UGC-DEB approved institutions are at par with regular degrees for employment in government and private sectors as well as for pursuing higher education.'
      },
      {
        question: 'Will my online degree be accepted for government jobs?',
        answer: 'Yes, online degrees from UGC-DEB approved universities are valid for all government job applications as per UGC regulations.'
      },
      {
        question: 'Can I pursue higher education after completing an online degree?',
        answer: 'Absolutely! Online degrees are recognized for admission to higher education programs both in India and abroad, subject to the admission criteria of the respective institutions.'
      }
    ]
  },
  {
    title: 'Admissions',
    items: [
      {
        question: 'How do I apply for admission?',
        answer: 'You can apply online through our website by filling the application form, uploading required documents, and completing the fee payment process.'
      },
      {
        question: 'What documents are required for admission?',
        answer: 'Generally required documents include: Previous academic certificates, Mark sheets, Transfer certificate, Migration certificate (if applicable), ID proof (Aadhar card), Passport size photographs, and Category certificate (if applicable).'
      },
      {
        question: 'What is the eligibility criteria for undergraduate programs?',
        answer: 'For undergraduate programs, candidates must have passed 10+2 or equivalent examination from a recognized board. Specific programs may have additional requirements.'
      },
      {
        question: 'What is the eligibility criteria for postgraduate programs?',
        answer: 'For postgraduate programs, candidates must have completed their graduation in the relevant field from a recognized university. Specific percentage requirements may vary by program.'
      },
      {
        question: 'Is there any entrance exam required?',
        answer: 'Admission requirements vary by program. Some programs may require entrance exams while others offer direct admission based on previous academic performance. Please check specific program requirements.'
      },
      {
        question: 'When does the admission process start?',
        answer: 'Admissions are open throughout the year. However, there are specific batches that start at designated times. Please contact our admission office for current batch information.'
      }
    ]
  },
  {
    title: 'Free Payment',
    items: [
      {
        question: 'What are the payment options available?',
        answer: 'We accept online payments through credit/debit cards, net banking, UPI, and digital wallets. EMI options are also available for easy payment.'
      },
      {
        question: 'Is EMI facility available for fee payment?',
        answer: 'Yes, we offer flexible EMI options to make education more affordable. You can choose from various EMI plans during the payment process.'
      },
      {
        question: 'Can I pay the fees in installments?',
        answer: 'Yes, the program fee can be paid in installments as per the university\'s installment policy. Please contact the accounts department for detailed information.'
      },
      {
        question: 'Is the fee refundable?',
        answer: 'Fee refund is subject to the university\'s refund policy. Please refer to the Refund Guidelines section or contact our support team for detailed information.'
      }
    ]
  },
  {
    title: 'Profile Updating /Correction',
    items: [
      {
        question: 'How can I update my profile information?',
        answer: 'You can update your profile by logging into the student portal and navigating to the profile settings section. Make the necessary changes and submit for approval.'
      },
      {
        question: 'What details can I update in my profile?',
        answer: 'You can update contact details, address, email ID, phone number, and upload updated documents. However, changes to name and date of birth require supporting documents and approval.'
      },
      {
        question: 'How do I correct errors in my name or date of birth?',
        answer: 'For corrections in name or date of birth, you need to submit an application along with supporting documents (like Aadhar card, 10th certificate) to the student support team.'
      },
      {
        question: 'How long does it take for profile updates to be approved?',
        answer: 'Profile updates are typically processed within 7-10 working days. You will receive a notification once the changes are approved.'
      }
    ]
  },
  {
    title: 'Learning Management System (LMS)',
    items: [
      {
        question: 'What is the Learning Management System (LMS)?',
        answer: 'LMS is an online platform that provides access to all learning resources including video lectures, study materials, assignments, quizzes, and more. It is the central hub for your online learning experience.'
      },
      {
        question: 'How do I access the LMS?',
        answer: 'After successful enrollment, you will receive login credentials via email and SMS. Use these credentials to access the LMS through the university website.'
      },
      {
        question: 'What features are available in the LMS?',
        answer: 'The LMS offers: Live and recorded video lectures, E-library access, Study materials and e-books, Assignment submission, Online assessments and quizzes, Discussion forums, Progress tracking, Doubt clearing sessions, and Announcements and notifications.'
      },
      {
        question: 'Can I access the LMS on mobile devices?',
        answer: 'Yes, the LMS is mobile-responsive and can be accessed on smartphones and tablets through web browsers. A mobile app may also be available for download.'
      },
      {
        question: 'What if I forget my LMS password?',
        answer: 'You can use the "Forgot Password" option on the login page to reset your password. A reset link will be sent to your registered email or mobile number.'
      }
    ]
  },
  {
    title: 'Refund Guidelines',
    items: [
      {
        question: 'What is the refund policy?',
        answer: 'Refund requests are subject to the university\'s refund policy. The refund amount depends on when the request is made during the academic session. Please refer to the detailed refund policy document.'
      },
      {
        question: 'Within what time period can I request a refund?',
        answer: 'Refund requests must be submitted within the specified period from the date of admission, as per the refund policy. Late requests may not be entertained.'
      },
      {
        question: 'How do I apply for a refund?',
        answer: 'To apply for a refund, submit a written application with supporting documents to the accounts department. The application should clearly state the reason for withdrawal.'
      },
      {
        question: 'What charges are deducted from the refund amount?',
        answer: 'As per the refund policy, certain processing charges and administrative fees may be deducted. The exact amount depends on when the withdrawal request is made.'
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Once approved, refunds are typically processed within 30-45 working days. The amount will be credited to the account from which the payment was made.'
      }
    ]
  },
  {
    title: 'Examination',
    items: [
      {
        question: 'How are examinations conducted?',
        answer: 'Examinations are conducted online through our secure examination portal. Students can appear for exams from anywhere with a stable internet connection.'
      },
      {
        question: 'When are the examinations scheduled?',
        answer: 'Examinations are typically held at the end of each semester. The exact dates are announced well in advance through the LMS and student portal.'
      },
      {
        question: 'What is the examination pattern?',
        answer: 'The examination pattern includes internal assessments (assignments, quizzes) and term-end examinations. The weightage varies by program and subject.'
      },
      {
        question: 'Can I reschedule my examination?',
        answer: 'Rescheduling options may be available under certain circumstances as per university policy. Students need to apply for rescheduling with valid reasons and supporting documents.'
      },
      {
        question: 'What are the technical requirements for online exams?',
        answer: 'You need: A computer/laptop with webcam, Stable internet connection (minimum speed recommended), Updated web browser, and Quiet examination environment. Detailed technical specifications are provided before exams.'
      },
      {
        question: 'When will exam results be declared?',
        answer: 'Results are typically declared within 4-6 weeks after the examination. You will be notified via email and can check results on the student portal.'
      }
    ]
  },
  {
    title: 'Degree',
    items: [
      {
        question: 'When will I receive my degree?',
        answer: 'Degrees are issued after successful completion of the program, clearance of all dues, and completion of verification process. This typically takes 3-6 months after the final results.'
      },
      {
        question: 'Is the degree issued in digital format?',
        answer: 'Yes, digital degrees are issued along with physical degree certificates. The digital degree is blockchain-verified for authenticity.'
      },
      {
        question: 'How do I collect my degree certificate?',
        answer: 'You can either collect your degree certificate in person from the university or have it sent to your registered address via courier. Details will be communicated upon degree processing.'
      },
      {
        question: 'Can I get additional copies of my degree?',
        answer: 'Additional copies or duplicate degrees can be obtained by submitting an application along with the prescribed fee and required documents.'
      },
      {
        question: 'Will my degree mention that it is an online degree?',
        answer: 'As per UGC guidelines, there is no distinction between online and regular degrees. Your degree certificate will be the same as regular degrees issued by the university.'
      }
    ]
  },
  {
    title: 'Placement',
    items: [
      {
        question: 'Does Online UU provide placement assistance?',
        answer: 'Yes, we have a dedicated placement cell that provides placement assistance, career guidance, and connects students with potential employers.'
      },
      {
        question: 'What kind of placement support is provided?',
        answer: 'Our placement support includes: Resume building workshops, Interview preparation sessions, Soft skills training, Industry connect programs, Job postings and opportunities, Campus placement drives, and Career counseling.'
      },
      {
        question: 'Are placements guaranteed?',
        answer: 'While we provide comprehensive placement assistance and opportunities, placements are not guaranteed. Success depends on individual performance, skills, and market conditions.'
      },
      {
        question: 'What companies recruit from Online UU?',
        answer: 'We have tie-ups with various companies across different sectors including IT, Banking, Finance, Marketing, Healthcare, and more. The list of recruiters is updated regularly.'
      },
      {
        question: 'Can working professionals also avail placement services?',
        answer: 'Yes, our placement services are available to all students including working professionals who wish to explore better career opportunities or make a career change.'
      }
    ]
  }
]

const FAQSection = () => {
  const [openTopic, setOpenTopic] = useState<number | null>(0)

  const toggleTopic = (index: number) => {
    setOpenTopic(openTopic === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-gray-600">HELP</span>
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-[#6bc533]">TOPICS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - FAQ Topics */}
        <div className="lg:col-span-2 space-y-2">
          {faqTopics.map((topic, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleTopic(index)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-left">{topic.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openTopic === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openTopic === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  {topic.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-6 last:mb-0">
                      <h4 className="font-bold text-red-600 mb-2">{item.question}</h4>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-6 text-center lg:text-left">
            <p className="text-gray-600">
              For any other queries, please write to us at{' '}
              <a
                href="mailto:INFO@ONLINEUU.IN"
                className="text-blue-600 hover:underline font-medium"
              >
                INFO@ONLINEUU.IN
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Contact Director */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h3 className="text-xl font-bold mb-2">CONTACT</h3>
            <h2 className="text-3xl font-bold text-[#6bc533] mb-1">DIRECTOR</h2>
            <p className="text-[#6bc533] font-semibold mb-6">ADMISSIONS & MARKETING</p>

            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">CONTACT DETAILS</h4>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <a href="tel:+917017774491" className="text-blue-600 hover:underline font-medium">
                    +91-7017774491
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <a
                    href="mailto:director.admissions@onlineuu.in"
                    className="text-blue-600 hover:underline text-sm break-all"
                  >
                    director.admissions@onlineuu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3">ADDRESS</h4>
              <p className="text-gray-600 text-sm">
                Uttaranchal University, Dehradun, Uttarakhand, India
              </p>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/hero-section/uu.png"
                alt="Uttaranchal University Campus"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/images/backgrouds/blue-2.svg'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
