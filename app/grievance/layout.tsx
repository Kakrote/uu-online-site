import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Grievance Redressal | Uttaranchal University Online",
  description: "Student Grievance Redressal System (SGRC) for Online Learning Programmes at Uttaranchal University. Learn about the SOP for handling grievances, committee structure, and complaint resolution process.",
  keywords: [
    "grievance redressal",
    "student grievance",
    "SGRC",
    "complaint system",
    "online grievance",
    "student support",
    "grievance committee",
    "UGC regulations",
    "student welfare",
    "ombudsperson",
    "Uttaranchal University grievance"
  ],
  openGraph: {
    title: "Grievance Redressal | Uttaranchal University Online",
    description: "Digital platform for students to register and resolve grievances. Time-bound mechanism ensuring student welfare and timely resolution of complaints.",
    type: "website",
    url: "https://www.uuonline.in/grievance",
    images: [
      {
        url: "/images/backgrouds/blue_bg.svg",
        width: 1200,
        height: 630,
        alt: "Student Grievance Redressal - Uttaranchal University"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grievance Redressal | Uttaranchal University Online",
    description: "Digital platform for students to register and resolve grievances. Time-bound mechanism ensuring student welfare and timely resolution of complaints.",
    images: ["/images/backgrouds/blue_bg.svg"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/grievance"
  }
}

export default function GrievanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
