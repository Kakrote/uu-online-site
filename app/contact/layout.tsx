import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Uttaranchal University Online",
  description: "Get in touch with Uttaranchal University Online. Contact our admissions team, find our location, and reach out for any queries about our online programs.",
  keywords: [
    "contact Uttaranchal University",
    "university contact",
    "admissions contact",
    "university location",
    "helpline",
    "customer support",
    "online education support"
  ],
  openGraph: {
    title: "Contact Us | Uttaranchal University Online",
    description: "We'd love to hear from you. Contact Uttaranchal University Online for admissions, support, and general inquiries.",
    type: "website",
    url: "https://www.uuonline.in/contact",
    images: [
      {
        url: "/images/backgrouds/blue_bg.svg",
        width: 1200,
        height: 630,
        alt: "Contact Uttaranchal University"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Uttaranchal University Online",
    description: "We'd love to hear from you. Contact Uttaranchal University Online for admissions, support, and general inquiries.",
    images: ["/images/backgrouds/blue_bg.svg"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/contact"
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
