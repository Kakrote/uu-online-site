import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Online Programs | Uttaranchal University",
  description: "Explore 100+ multidisciplinary online degree programs at Uttaranchal University. From MBA, MCA, BBA, BCA to specialized courses - advance your career with flexible online learning.",
  keywords: [
    "online degree programs",
    "online MBA",
    "online MCA",
    "online BBA",
    "online BCA",
    "distance learning",
    "Uttaranchal University programs",
    "online education",
    "flexible learning",
    "UGC approved programs"
  ],
  openGraph: {
    title: "Online Programs | Uttaranchal University",
    description: "Explore 100+ multidisciplinary online degree programs with industry-relevant curriculum and flexible learning.",
    type: "website",
    url: "https://www.uuonline.in/programs",
    images: [
      {
        url: "/images/hero-section/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Online Programs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Programs | Uttaranchal University",
    description: "Explore 100+ multidisciplinary online degree programs with industry-relevant curriculum and flexible learning.",
    images: ["/images/hero-section/home-hero.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/programs"
  }
}

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
