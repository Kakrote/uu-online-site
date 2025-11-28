import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mandatory Disclosure | Uttaranchal University Online",
  description: "View mandatory disclosure information for Uttaranchal University Online including accreditations, affiliations, rankings, and regulatory compliance details as per UGC guidelines.",
  keywords: [
    "mandatory disclosure",
    "university accreditation",
    "UGC compliance",
    "affiliations",
    "rankings",
    "regulatory information",
    "Uttaranchal University",
    "transparency"
  ],
  openGraph: {
    title: "Mandatory Disclosure | Uttaranchal University Online",
    description: "View mandatory disclosure information for Uttaranchal University Online including accreditations, affiliations, and rankings.",
    type: "website",
    url: "https://www.uuonline.in/disclosure",
    images: [
      {
        url: "/images/hero-section/uu-building.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Disclosure"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandatory Disclosure | Uttaranchal University Online",
    description: "View mandatory disclosure information for Uttaranchal University Online including accreditations, affiliations, and rankings.",
    images: ["/images/hero-section/uu-building.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/disclosure"
  }
}

export default function DisclosureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
