import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faculty | Uttaranchal University Online",
  description: "Meet our distinguished faculty members at Uttaranchal University Online. Learn from experienced educators and industry experts committed to your academic success.",
  keywords: [
    "university faculty",
    "expert educators",
    "online teaching",
    "academic excellence",
    "industry experts",
    "Uttaranchal University faculty",
    "qualified professors",
    "mentors"
  ],
  openGraph: {
    title: "Faculty | Uttaranchal University Online",
    description: "Meet our distinguished faculty members at Uttaranchal University Online. Learn from experienced educators and industry experts.",
    type: "website",
    url: "https://www.uuonline.in/faculty",
    images: [
      {
        url: "/images/hero-section/uu-building.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Faculty"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty | Uttaranchal University Online",
    description: "Meet our distinguished faculty members at Uttaranchal University Online. Learn from experienced educators and industry experts.",
    images: ["/images/hero-section/uu-building.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/faculty"
  }
}

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
