import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Uttaranchal University Online",
  description: "Learn about Uttaranchal University's rich heritage, world-class education, and commitment to excellence. Discover our vision, mission, leadership, and 22+ years of educational experience.",
  keywords: [
    "Uttaranchal University",
    "about university",
    "online education",
    "university leadership",
    "vision mission",
    "accreditations",
    "educational excellence",
    "university history"
  ],
  openGraph: {
    title: "About Us | Uttaranchal University Online",
    description: "Discover Uttaranchal University's commitment to excellence in multidisciplinary education with 22+ years of experience.",
    type: "website",
    url: "https://www.uuonline.in/about",
    images: [
      {
        url: "/images/hero-section/uu-building.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Building"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Uttaranchal University Online",
    description: "Discover Uttaranchal University's commitment to excellence in multidisciplinary education with 22+ years of experience.",
    images: ["/images/hero-section/uu-building.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/about"
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
