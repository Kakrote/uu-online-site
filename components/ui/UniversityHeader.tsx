"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, ChevronRight, Phone, ArrowRight, Users, User, Search } from "lucide-react"
import Script from "next/script"
import { PhoneCall } from "lucide-react"
import { AnnouncementBanner } from "@/components/ui/announcement-banner"

// Define the menu item interface
interface MenuItem {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: {
    title?: string
    columns: {
      title?: string
      items: {
        name: string
        href: string
        isButton?: boolean
      }[]
    }[]
  }
}

export default function UniversityHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([])
  const [searchOpen, setSearchOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const searchModalRef = useRef<HTMLDivElement>(null)
  const [erpMenuOpen, setErpMenuOpen] = useState(false)
  const erpMenuRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
      // Close ERP menu when clicking outside
      if (erpMenuRef.current && !erpMenuRef.current.contains(event.target as Node)) {
        setErpMenuOpen(false)
      }
      // Close search when clicking outside both search button and search modal
      if (searchRef.current && !searchRef.current.contains(event.target as Node) &&
        searchModalRef.current && !searchModalRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  // Close ERP menu when the mobile drawer closes
  useEffect(() => {
    if (!mobileMenuOpen) setErpMenuOpen(false)
  }, [mobileMenuOpen])

  const topLinks = [
    { name: "Library", href: "#" },
    { name: "Student Corner", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Alumni", href: "#" },
    { name: "News & Events", href: "#" },
    { name: "International", href: "/international" },
    { name: "IQAC", href: "#" },
  ]

  const mainLinks: MenuItem[] = [
    {
      name: "About UU",
      href: "#",
      hasDropdown: false,
      dropdownItems: {
        columns: [
          {
            items: [
              { name: "The University", href: "/about/university" },
              { name: "Leadership", href: "/about/leadership" },
              { name: "Vision & Mission", href: "/about/vision-mission" },
              { name: "Approvals, Accreditation, Memberships & Rankings", href: "/about/accreditations-approvals" },
              { name: "Awards & Rankings", href: "/about/awards-rankings" },
              { name: "Institutional Social Responsibilities", href: "/about/institutional-social-responsibilities" },
              { name: "International Collaborations & Tie-Ups", href: "/about/international-collaborations-tie-ups" },
            ],
          },
          {
            items: [
              { name: "Institutes & Departments", href: "/academics/collage-departments" },
              { name: "Governance", href: "/about/governance" },
              { name: "Admissions", href: "#" },
              { name: "Scholarships", href: "/about/scholarships" },
              { name: "Campus Life", href: "#" },
              { name: "Infrastructure", href: "/about/infrastructure" },
              { name: "How to Reach Us?", href: "/contact" },
            ],
          },
        ],
      },
    },
    {
      name: "Programs",
      href: "/programs",
      hasDropdown: true,
      dropdownItems: {
        columns: [
          {
            items: [
              { name: "B.Sc Computer Science", href: "/programs/bsc-computer-science" },
              { name: "BBA Business Administration", href: "/programs/bba-business-administration" },
              { name: "B.Com Commerce", href: "/programs/bcom-commerce" },
              { name: "Engineering", href: "/programs/engineering" },
              { name: "Law", href: "/programs/law" },
              { name: "Pharmaceutical Sciences", href: "/programs/pharmaceutical-sciences" },
              { name: "Applied & Life Sciences", href: "/programs/applied-life-sciences" },
            ],
          },
          {
            items: [
              { name: "M.Sc Data Science", href: "/programs/msc-data-science" },
              { name: "MBA Marketing", href: "/programs/mba-marketing" },
              { name: "M.Com Finance", href: "/programs/mcom-finance" },
              { name: "Computer Applications", href: "/programs/computer-applications" },
              { name: "Hotel & Hospitality Management", href: "/programs/hotel-hospitality-management" },
              { name: "View All Programs →", href: "/programs", isButton: true },
            ],
          },
        ],
      },
    },

    {
      name: "Campus Tour",
      href: "#",
      hasDropdown: false,
      dropdownItems: {
        columns: [
          {
            items: [
              { name: "Overview", href: "/research" },
              { name: "Research & Development Cell", href: "/research/research-Development-Cell" },
              { name: "Intellectual Property Rights Cell", href: "/research/intellectual-Property-Rights-Cell" },
              { name: "Centre of Excellence", href: "/research/centre-of-excellence" },
              { name: "Student Research Cell", href: "/research/student-research-cell" },
              { name: "Startups, Entrepreneurship, and Innovation Cell", href: "/research/innovation-cell" },
            ],
          },
        ],
      },
    },
    { name: "Disclosure", href: "/placement", hasDropdown: false },
    { name: "LMS Login", href: "https://ulm.onlineuu.in/", hasDropdown: false },
    { name: "Contact US", href: "/contact", hasDropdown: false },
  ]

  const toggleMobileSubmenu = (name: string) => {
    setExpandedMobileMenus((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Custom rendering for Life at UU dropdown
  const renderLifeAtUUDropdown = () => {
    const lifeAtUUData = mainLinks.find((link) => link.name === "Life at UU")?.dropdownItems?.columns[0].items || []

    return (
      <div
        className="absolute top-full  bg-white shadow-lg rounded-b-lg p-6 z-20 w-[90vw] max-w-[400px] mt-5
          invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-[#2A2A2F] mb-6">All Life at UU</h2>
        <div className="space-y-4">
          {lifeAtUUData.map((item, index) => (
            <Link key={index} href={item.href} className="block text-gray-600 hover:text-[#3048CD] text-lg">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>

      <header className="sticky top-0 z-50 w-full font-figtree" data-site-header>
        {/* Announcement Banner */}
        <div className="hidden lg:block">
          <AnnouncementBanner />
        </div>

        {/* Search Modal Backdrop */}
        {searchOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setSearchOpen(false)}
          ></div>
        )}
        {/* Main navigation bar */}
        <div className="bg-white w-full h-20 lg:h-[90px] shadow-nav relative">
          <div className=" mx-auto h-full  flex items-center justify-around">
            {/* Container for mobile logo and menu button */}
            <div className="lg:hidden flex flex-col w-full">
              {/* Top row with toll-free number and apply button - hidden on very small screens */}
              <div className="hidden sm:flex bg-[#3048CD] text-white justify-between items-center px-3 w-full py-1 border-b border-gray-100">
                <div className="flex items-center">
                  <Phone size={14} className="text-[#f2f2f5] mr-1" />
                  <span className="text-xs font-medium">
                    Toll Free:
                    <a href="tel:18002124201" className="ml-1 underline">
                      18002124201
                    </a>
                  </span>
                </div>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="bg-[#dd1717] flex items-center text-white text-xs px-2 py-1 rounded-full hover:bg-[#e01f2f] transition-colors"
                    >
                      <span>
                        Apply Now
                      </span>
                      <span>
                        <ArrowRight size={16} />
                      </span>
                    </Link>

                    {/* ERP Login with dropdown (Student/Staff) */}
                    <div className="relative" ref={erpMenuRef}>
                      <button
                        type="button"
                        onClick={() => setErpMenuOpen((v) => !v)}
                        aria-haspopup="menu"
                        aria-expanded={erpMenuOpen}
                        className="text-white text-xs px-2 py-1 rounded-full transition-colors hover:bg-[#2b3fb6] focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        ERP-Login
                      </button>
                      {/* Dropdown panel */}
                      <div
                        role="menu"
                        aria-label="ERP Login options"
                        className={`absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 z-50 ring-black/5 overflow-hidden transition-all duration-150 ${erpMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                      >
                        {/* TODO: Replace href="#" with actual Student/Staff ERP URLs */}
                        <Link
                          href="#"
                          role="menuitem"
                          className="block px-3 py-2 text-xs text-[#2A2A2F] hover:bg-[#5bc633]/80"
                          onClick={() => setErpMenuOpen(false)}
                        >
                          Student
                        </Link>
                        <Link
                          href="#"
                          role="menuitem"
                          className="block px-3 py-2 text-xs text-[#2A2A2F] hover:bg-[#5bc633]/80"
                          onClick={() => setErpMenuOpen(false)}
                        >
                          Staff
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Simplified header for very small screens */}
              <div className="sm:hidden flex bg-[#3048CD] text-white justify-center items-center px-3 w-full py-1 border-b border-gray-100">
                <Link
                  href="#"
                  className="bg-[#dd1717] flex items-center text-white text-xs px-2 py-1 rounded-full hover:bg-[#e01f2f] transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Bottom row with logo and menu button */}
              <div className="flex justify-between items-center w-full px-3 pt-1 pb-2">
                {/* Logo for mobile (left aligned) */}
                <div className="flex justify-start">
                  <Link href="/">
                    <div className="relative w-[180px] h-7">
                      <Image
                        src="/images/icons/uu-online.png"
                        alt="Uttaranchal University Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
                
                {/* Mobile menu toggle button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-[#2A2A2F] hover:text-[#3048CD] p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>

            {/* Desktop navigation - Left side */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-1 xl:gap-10 pr-32 xl:pr-40">
              <div className="flex items-center gap-2 xl:gap-4 bg-[#E92424] text-white px-2 xl:px-3 py-2 xl:py-3 rounded-full">
                <PhoneCall size={16} className="xl:w-5 xl:h-5" />
                <div>
                  <h3 className="text-xs">Admission helpline</h3>
                  <h2 className="text-sm">18002124454</h2>
                </div>
              </div>
              {mainLinks.slice(0, Math.ceil(mainLinks.length / 2)).map((link) => (
                <div key={link.name} className="relative group" ref={link.name === activeDropdown ? dropdownRef : null}>
                  {link.hasDropdown ? (
                    <div className="flex items-center gap-1 px-1 xl:gap-2 xl:px-2 h-11 cursor-pointer">
                      <span className="text-[#2A2A2F] font-semibold text-xs xl:text-sm">{link.name}</span>
                      <ChevronDown size={16} className={`text-[#2A2A2F] transition-transform group-hover:rotate-180`} />
                    </div>
                  ) : (
                    <Link href={link.href} className="flex items-center gap-1 px-1 xl:gap-2 xl:px-2 h-11">
                      <span className="text-[#2A2A2F] font-semibold text-xs xl:text-sm">{link.name}</span>
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div
                      className={`absolute top-full ${mainLinks.indexOf(link) < Math.ceil(mainLinks.length / 2) ? "left-0" : "right-0"
                        } bg-white shadow-lg rounded-b-lg p-4 lg:p-6 z-20 ${link.name === "Admissions" ? "w-[95vw] max-w-[1000px]" : "w-[90vw] max-w-[600px]"
                        } mt-2 
                        invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    >
                      {link.name !== "Admissions" && (
                        <h2 className="text-2xl font-bold text-[#2A2A2F] mb-6">
                          {link.name === "About UU" ? "About University" : `All ${link.name}`}
                        </h2>
                      )}
                      <div
                        className={`grid ${link.name === "About UU" || link.name === "Programs" || link.name === "Academics" ? "grid-cols-1 md:grid-cols-2" : link.name === "Research" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}
                      >
                        {link.dropdownItems.columns.map((column, colIndex) => (
                          <div key={colIndex} className="space-y-4">
                            {column.title && <h3 className="text-xl font-bold text-[#2A2A2F] mb-2">{column.title}</h3>}
                            {column.items.map((item, itemIndex) =>
                              item.isButton ? (
                                <Link
                                  key={itemIndex}
                                  href={item.href}
                                  className="inline-block bg-[#6bc533] text-white px-6 py-3 rounded-full hover:bg-[#5aa428] transition-colors"
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <Link
                                  key={itemIndex}
                                  href={item.href}
                                  className="block text-gray-600 hover:text-[#3048CD] text-lg"
                                >
                                  {item.name}
                                </Link>
                              ),
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Centered logo for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 z-30">
              <div className="bg-white rounded-b-[40px] w-[200px] xl:w-[220px] border h-[100px] shadow-logo flex items-center justify-center">
                <Link href="/">
                  <div className="relative w-[90px] xl:w-[100px] h-[54px] xl:h-[60px]">
                    <Image
                      src="/images/icons/uu-online.png"
                      alt="Uttaranchal University Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop navigation - Right side */}
            <div className="hidden lg:flex flex-1 justify-start gap-1 xl:gap-10 pl-32 xl:pl-40 items-center">
                {mainLinks.slice(Math.ceil(mainLinks.length / 2)).map((link) => (
                <div key={link.name} className="relative group" ref={link.name === activeDropdown ? dropdownRef : null}>
                  {link.hasDropdown ? (
                    <div className="flex items-center gap-1 px-1 xl:gap-2 xl:px-2 h-11 cursor-pointer">
                      <span className="text-[#2A2A2F] font-semibold text-xs xl:text-sm whitespace-nowrap">{link.name}</span>
                      <ChevronDown size={16} className={`text-[#2A2A2F] transition-transform group-hover:rotate-180`} />
                    </div>
                  ) : (
                    <Link href={link.href} className="flex items-center gap-1 px-1 xl:gap-2 xl:px-2 h-11">
                      <span className="text-[#2A2A2F] font-semibold text-xs xl:text-sm whitespace-nowrap">{link.name}</span>
                    </Link>
                  )}

                  {/* Dropdown menu - special case for Life at UU */}
                  {link.hasDropdown && link.name === "Life at UU"
                    ? renderLifeAtUUDropdown()
                    : link.hasDropdown &&
                    link.dropdownItems && (
                      <div
                        className={`absolute top-full right-0 bg-white shadow-lg rounded-b-lg p-4 lg:p-6 z-20 ${link.name === "Admissions"
                          ? "w-[95vw] max-w-[1000px]"
                          : link.name === "Research"
                            ? "w-[90vw] max-w-[500px]"
                            : "w-[90vw] max-w-[600px]"
                          } mt-2
                          invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      >
                        {link.name !== "Admissions" && (
                          <h2 className="text-2xl font-bold text-[#2A2A2F] mb-6">
                            {link.name === "Research" ? "Research & Innovation" : `All ${link.name}`}
                          </h2>
                        )}
                        <div
                          className={`grid ${link.name === "About UU" || link.name === "Programs" || link.name === "Academics" ? "grid-cols-1 md:grid-cols-2" : link.name === "Research" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}
                        >
                          {link.dropdownItems.columns.map((column, colIndex) => (
                            <div key={colIndex} className="space-y-4">
                              {column.title && (
                                <h3 className="text-xl font-bold text-[#2A2A2F] mb-2">{column.title}</h3>
                              )}
                              {column.items.map((item, itemIndex) =>
                                item.isButton ? (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="inline-block bg-[#6bc533] text-white px-6 py-3 rounded-full hover:bg-[#5aa428] transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                ) : (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="block text-gray-600 hover:text-[#3048CD] text-lg"
                                  >
                                    {item.name}
                                  </Link>
                                ),
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ))}



              <button className="bg-[#6bc533] hover:shadow-[0_0_20px_4px_rgba(107,197,51,1)] text-white p-1 px-2 xl:px-3 rounded-xl flex items-center gap-1 transition duration-300 ease-in-out whitespace-nowrap">
                <span className="text-xs xl:text-sm">
                  Apply Now
                </span>
                <span>
                  <ArrowRight size={18} className="xl:w-5 xl:h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu - Drawer style */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div
            ref={mobileMenuRef}
            className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              } overflow-y-auto`}
          >
            <div className="p-4 lg:p-6">
              {/* Mobile menu header */}
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-[200px] h-12">
                  <Image
                    src="/images/icons/uu-online.png"
                    alt="Uttaranchal University Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#2A2A2F] hover:text-[#3048CD] hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              

              {/* Main links for mobile */}
              <div className="space-y-4">
                {mainLinks.map((link) => (
                  <div key={link.name} className="border-b pb-4 last:border-0">
                    {link.hasDropdown ? (
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleMobileSubmenu(link.name)}
                      >
                        <span className="text-[#2A2A2F] font-semibold text-lg">{link.name}</span>
                        <ChevronDown
                          size={20}
                          className={`text-[#2A2A2F] transition-transform duration-300 ${expandedMobileMenus.includes(link.name) ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                    ) : (
                      <Link href={link.href} className="flex items-center justify-between">
                        <span className="text-[#2A2A2F] font-semibold text-lg">{link.name}</span>
                      </Link>
                    )}

                    {/* Mobile submenu */}
                    {link.hasDropdown && link.dropdownItems && (
                      <div
                        className={`mt-3 pl-4 border-l-2 border-gray-200 overflow-hidden transition-all duration-300 ${expandedMobileMenus.includes(link.name) ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        {link.name === "Life at UU" ? (
                          <div className="space-y-3 py-2">
                            {link.dropdownItems.columns[0].items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                className="flex items-center py-2 text-gray-600 hover:text-[#3048CD]"
                              >
                                <ChevronRight size={16} className="mr-2 text-[#3048CD]" />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          link.dropdownItems.columns.map((column, colIndex) => (
                            <div key={colIndex} className="mb-4">
                              {column.title && <h4 className="font-bold text-[#2A2A2F] mt-3 mb-2">{column.title}</h4>}
                              <div className="space-y-3">
                                {column.items.map((item, itemIndex) =>
                                  item.isButton ? (
                                    <Link
                                      key={itemIndex}
                                      href={item.href}
                                      className="flex items-center py-2 my-2 bg-[#6bc533] text-white px-4 rounded-full"
                                    >
                                      {item.name}
                                    </Link>
                                  ) : (
                                    <Link
                                      key={itemIndex}
                                      href={item.href}
                                      className="flex items-center py-2 text-gray-600 hover:text-[#3048CD]"
                                    >
                                      <ChevronRight size={16} className="mr-2 text-[#3048CD]" />
                                      {item.name}
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
