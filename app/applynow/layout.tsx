import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply Now | Uttaranchal University Online",
  description: "Start your journey with Uttaranchal University Online. Apply now for UGC approved online degree programs. Simple application process, flexible learning, and career-focused education.",
  keywords: [
    "apply online",
    "university admission",
    "online degree application",
    "Uttaranchal University admission",
    "enroll now",
    "online learning",
    "admission process",
    "career advancement"
  ],
  openGraph: {
    title: "Apply Now | Uttaranchal University Online",
    description: "Start your journey with Uttaranchal University Online. Apply now for UGC approved online degree programs.",
    type: "website",
    url: "https://www.uuonline.in/applynow",
    images: [
      {
        url: "/images/hero-section/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Apply to Uttaranchal University Online"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now | Uttaranchal University Online",
    description: "Start your journey with Uttaranchal University Online. Apply now for UGC approved online degree programs.",
    images: ["/images/hero-section/home-hero.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/applynow"
  }
}

export default function ApplyNowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
