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
    <footer className="font-figtree">

      {/* Top blue section with contact info */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <MapPin className="h-6 w-6 text-[#6bc533]" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-sm">
                  Premnagar, Dehradun-248007,
                  <br />
                  Uttarakhand, INDIA
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <Phone className="h-6 w-6 text-[#6bc533]" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm">0135-2770300</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <Mail className="h-6 w-6 text-[#6bc533]" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm">university@uumail.in</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col ">
              <h3 className="font-medium ">Socials</h3>
              <div className="flex gap-2">
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Instagram className="h-5 w-5 text-[#E4405F]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                  <Youtube className="h-5 w-5 text-[#FF0000]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer section with links */}
      <div className="bg-[#1E1E1E] text-white py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2   md:grid-cols-2 lg:grid-cols-6 md:gap-8">
            {/* Column 1: Mandatory Disclosure */}
            <div>
              <h3 className="text-[#6bc533] font-bold mb-4">Mandatory Disclosure</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://www.uudoon.in/allpdfs/UGC_Approval_Uttaranchal_University_Dehradun.pdf" className="hover:text-[#6bc533] transition-colors">
                    UGC Approval
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/anti-ragging-cell.php" className="hover:text-[#6bc533] transition-colors">
                    Anti Ragging Cell
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/complaints.php" className="hover:text-[#6bc533] transition-colors">
                    Internal Complaint Committee
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/caste-based-discrimination.php" className="hover:text-[#6bc533] transition-colors">
                    Complaints - Caste Based Discrimination
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/grievance-redressal-cell.php" className="hover:text-[#6bc533] transition-colors">
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/women-cell.php" className="hover:text-[#6bc533] transition-colors">
                    Women Cell
                  </Link>
                </li>
                <li>
                  <Link href="https://iqac.uudoon.in/" className="hover:text-[#6bc533] transition-colors">
                    IQAC
                  </Link>
                </li>
                <li>
                  <Link href="https://www.digilocker.gov.in/" className="hover:text-[#6bc533] transition-colors">
                    DigiLocker
                  </Link>
                </li>
                <li>
                  <Link href="https://iqac.uudoon.in/sustainability.php" className="hover:text-[#6bc533] transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="https://nad.gov.in/" className="hover:text-[#6bc533] transition-colors">
                    NAD
                  </Link>
                </li>
                <li>
                  <Link href="https://www.abc.gov.in/" className="hover:text-[#6bc533] transition-colors">
                    Register on ABC
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Study Here */}
            <div>
              <h3 className="text-[#6bc533] font-bold mb-4">Study Here</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about/university" className="hover:text-[#6bc533] transition-colors">
                    About UU
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-[#6bc533] transition-colors">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-[#6bc533] transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/about/scholarships" className="hover:text-[#6bc533] transition-colors">
                    Scholarship
                  </Link>
                </li>
                <li>
                  <Link href="/admissions/educational-loan" className="hover:text-[#6bc533] transition-colors">
                    Education Loan
                  </Link>
                </li>
                <li>
                  <Link href="/admissions/fee-payment" className="hover:text-[#6bc533] transition-colors">
                    Fee Payment
                  </Link>
                </li>
                <li>
                  <Link href="/international/admissions" className="hover:text-[#6bc533] transition-colors">
                    International Admissions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Live Here */}
            <div>
              <h3 className="text-[#6bc533] font-bold mb-4">Live Here</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/academics/student-support" className="hover:text-[#6bc533] transition-colors">
                    Student Services
                  </Link>
                </li>
                <li>
                  <Link href="/academics/collage-departments" className="hover:text-[#6bc533] transition-colors">
                    Hostel Facility
                  </Link>
                </li>
                <li>
                  <Link href="/life-at-uu" className="hover:text-[#6bc533] transition-colors">
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link href="https://news.uudoon.in/" className="hover:text-[#6bc533] transition-colors">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link href="/about/infrastructure" className="hover:text-[#6bc533] transition-colors">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="https://virtual-tour.uudoon.in/" className="hover:text-[#6bc533] transition-colors">
                    UU Virtual Tour
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Grow Here */}
            <div>
              <h3 className="text-[#6bc533] font-bold mb-4">Grow Here</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/placement" className="hover:text-[#6bc533] transition-colors">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-[#6bc533] transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/research/innovation-cell" className="hover:text-[#6bc533] transition-colors">
                    Startups
                  </Link>
                </li>
                <li>
                  <Link href="/research/research-Development-Cell" className="hover:text-[#6bc533] transition-colors">
                    Research & Development Center
                  </Link>
                </li>
                <li>
                  <Link href="/centre-of-excellence" className="hover:text-[#6bc533] transition-colors">
                    Center of Excellence
                  </Link>
                </li>
                <li>
                  <Link href="/academics/list-of-holidays" className="hover:text-[#6bc533] transition-colors">
                    List of Holidays
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: EDP in Specializations */}
            <div>
              <h3 className="text-[#6bc533] font-bold mb-4">EDP in Specializations</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://www.uudoon.in/international/assets/brochure/EDP-Price-Cap-Process.pdf" className="hover:text-[#6bc533] transition-colors">
                    Price Cap Process
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/international/assets/brochure/EDP-Data-Analytics.pdf" className="hover:text-[#6bc533] transition-colors">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/international/assets/brochure/General-Management.pdf" className="hover:text-[#6bc533] transition-colors">
                    General Management
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/international/assets/brochure/EDP-Hospitality-Management.pdf" className="hover:text-[#6bc533] transition-colors">
                    Hospitality Management
                  </Link>
                </li>
                <li>
                  <Link href="https://www.uudoon.in/international/iedp.php" className="hover:text-[#6bc533] transition-colors">
                    EDP Connect
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 6: Get in Touch */}
            <div>
              <h3 className="text-[#6bc533] font-bold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-[#6bc533] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#6bc533] transition-colors">
                    Admission Offices
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#6bc533] transition-colors">
                    UU Helpline
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#6bc533] transition-colors">
                    Visit Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#6bc533] transition-colors">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="https://careers.uudoon.in/" className="hover:text-[#6bc533] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Degree Verification Service */}
          <div className="mt-8 text-center">
            <p className="text-white">UU Degree Verification Service</p>
            <Link href="https://degree.uttaranchaluniversity.ac.in/" className="text-[#6bc533] hover:underline">
              Click Here
            </Link>
          </div>
          <div className="w-full flex justify-center">
            {/* University Logo */}
            <div className="flex justify-center mt-8 bg-white p-4 w-fit  rounded-xl ">
              <Image
                src="/images/icons/uu-online.png"
                alt="Uttaranchal University Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Copyright and Policy Links */}
          <div className="flex justify-center pb-10 gap-6 mt-3 lg:mt-8 text-sm text-gray-400">
            <Link href="https://www.uudoon.in/privacy-policy.php" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="https://www.uudoon.in/disclaimer.php" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <span>© Uttaranchal University</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
