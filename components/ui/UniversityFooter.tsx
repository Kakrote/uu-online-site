"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube, ChevronUp } from "lucide-react"

export default function UniversityFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer className="font-figtree overflow-hidden">

      {/* Top blue section with contact info */}
      <div className="bg-[#2C83F5] text-white py-6">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center">
            {/* Address */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <MapPin className="h-6 w-6 text-[#6bc533]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">Address</h3>
                <p className="text-sm break-words">
                  Premnagar, Dehradun-248007,
                  <br />
                  Uttarakhand, INDIA
                </p>
              </div>
            </div>

            {/* Admission Helpline */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <Phone className="h-6 w-6 text-[#6bc533]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">Admission Helpline</h3>
                <p className="text-sm break-words">0135-2770300</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <Mail className="h-6 w-6 text-[#6bc533]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">Email</h3>
                <p className="text-sm break-all">admissions@onlineuu.in</p>
              </div>
            </div>

            {/* Get Connected */}
            <div className="flex flex-col">
              <h3 className="font-medium mb-2">Get Connected</h3>
              <div className="flex gap-2">
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#25D366"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                  </svg>
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Facebook className="h-4 w-4 text-[#1877F2]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Instagram className="h-4 w-4 text-[#E4405F]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Youtube className="h-4 w-4 text-[#FF0000]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer section */}
      <div className="bg-[#1E1E1E] text-white py-12">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* University Info */}
            <div className="lg:col-span-1 min-w-0">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/icons/uu-online.png"
                  alt="Uttaranchal University Logo"
                  width={60}
                  height={60}
                  className="object-contain mr-3 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-white">ONLINE</h2>
                  <p className="text-sm text-blue-400 break-words">UTTARANCHAL UNIVERSITY</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed break-words">
                The university came into establishment in 2013, vide Uttaranchal University Act, 2012 (Uttaranchal Act No. 11 of 2013) as a Private University. It's located in Dehradun, the capital city of the Indian state of Uttarakhand. The Uttaranchal University has been recognized by the University Grants Commission, Government of India, under Sections 2(f) and 12(B) of the UGC Act, 1956, and other statutory bodies of the State and the nation. Its lush green campus is situated on NH-72, Dehradun, India.
              </p>
            </div>

            {/* Programs */}
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-4">Programs</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <Link href="/programs/bba" className="hover:text-[#6bc533] transition-colors break-words">
                    Bachelor of Business Administration (BBA)
                  </Link>
                </li>
                <li>
                  <Link href="/programs/mba" className="hover:text-[#6bc533] transition-colors break-words">
                    Master of Business Administration (MBA)
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bca" className="hover:text-[#6bc533] transition-colors break-words">
                    Bachelor of Computer Application (BCA)
                  </Link>
                </li>
                <li>
                  <Link href="/programs/mca" className="hover:text-[#6bc533] transition-colors break-words">
                    Master of Computer Application (MCA)
                  </Link>
                </li>
                <li>
                  <Link href="/programs/ba" className="hover:text-[#6bc533] transition-colors">
                    Bachelor of Arts (BA)
                  </Link>
                </li>
                <li>
                  <Link href="/programs/executive-mba" className="hover:text-[#6bc533] transition-colors break-words">
                    Executive MBA
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/programs" 
                  className="inline-block bg-[#6bc533] text-white px-4 lg:px-6 py-2 rounded-md text-sm font-medium hover:bg-[#5ba82b] transition-colors text-center break-words"
                >
                  For Regular Degree Programs<br />CLICK HERE
                </Link>
              </div>
            </div>

            {/* Others */}
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-4">Others</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-[#6bc533] transition-colors break-words">
                    Equivalence of Online Mode Degree
                  </Link>
                </li>
                <li>
                  <Link href="/apply-now" className="hover:text-[#6bc533] transition-colors break-words">
                    Application submitted to UGC-DEB
                  </Link>
                </li>
                <li>
                  <Link href="/fee-refund" className="hover:text-[#6bc533] transition-colors break-words">
                    Fee Refund & Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#6bc533] transition-colors">
                    Uttaranchal University
                  </Link>
                </li>
                <li>
                  <Link href="/grievance" className="hover:text-[#6bc533] transition-colors">
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link href="/howtoapply" className="hover:text-[#6bc533] transition-colors">
                    How to Apply?
                  </Link>
                </li>
                <li>
                  <Link href="/disclosure" className="hover:text-[#6bc533] transition-colors">
                    Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/deb-id" className="hover:text-[#6bc533] transition-colors">
                    DEB-ID
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="hover:text-[#6bc533] transition-colors">
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#6bc533] transition-colors">
                    CIQA
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#6bc533] transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4 min-w-0">
              <div className="bg-[#6bc533] text-white p-5 w-fit rounded-lg text-center flex space-x-5 items-center ">
                <Phone className="  " />
                <h4 className="font-bold text-sm">ACADEMIC HELPLINE</h4>
                <p className="text-lg font-bold break-all">08071176059</p>
              </div>
              <div className="bg-[#6bc533] text-white p-5 w-fit rounded-lg text-center flex space-x-5 items-center">
                <Mail className="" />
                <h4 className="font-bold text-sm">ACADEMIC EMAIL</h4>
                <p className="text-sm break-all">helpdesk@onlineuu.in</p>
              </div>
            </div>
          </div>
          {/* Bottom section with logo and copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/uu-online.png"
                alt="Uttaranchal University Logo"
                width={100}
                height={50}
                className="object-contain mb-4"
              />
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
                <span>© Uttaranchal University</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
