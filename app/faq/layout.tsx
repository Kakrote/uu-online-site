import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Uttaranchal University Online",
  description: "Find answers to frequently asked questions about Uttaranchal University Online programs, admission process, fees, eligibility, and online learning experience.",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "online education queries",
    "admission FAQ",
    "university questions",
    "Uttaranchal University help",
    "program information",
    "enrollment queries"
  ],
  openGraph: {
    title: "FAQ | Uttaranchal University Online",
    description: "Find answers to frequently asked questions about Uttaranchal University Online programs, admission process, fees, and eligibility.",
    type: "website",
    url: "https://www.uuonline.in/faq",
    images: [
      {
        url: "/images/hero-section/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University FAQ"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Uttaranchal University Online",
    description: "Find answers to frequently asked questions about Uttaranchal University Online programs, admission process, fees, and eligibility.",
    images: ["/images/hero-section/home-hero.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/faq"
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
