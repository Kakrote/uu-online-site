import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Apply | Uttaranchal University Online",
  description: "Learn the step-by-step process to apply for online programs at Uttaranchal University. Find application instructions, document requirements, fee payment options, and admission guidelines.",
  keywords: [
    "how to apply",
    "admission process",
    "online application",
    "application form",
    "document requirements",
    "fee payment",
    "admission guidelines",
    "enrollment process",
    "Uttaranchal University admission",
    "online education application"
  ],
  openGraph: {
    title: "How to Apply | Uttaranchal University Online",
    description: "Simple step-by-step guide to apply for online programs at Uttaranchal University. Get complete information about admission process and requirements.",
    type: "website",
    url: "https://www.uuonline.in/howtoapply",
    images: [
      {
        url: "/images/backgrouds/blue-2.svg",
        width: 1200,
        height: 630,
        alt: "How to Apply - Uttaranchal University Online"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Apply | Uttaranchal University Online",
    description: "Simple step-by-step guide to apply for online programs at Uttaranchal University. Get complete information about admission process and requirements.",
    images: ["/images/backgrouds/blue-2.svg"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/howtoapply"
  }
}

export default function HowToApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}