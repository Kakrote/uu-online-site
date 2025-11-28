import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fee Refund Policy | Uttaranchal University Online",
  description: "Read the complete fee refund and cancellation policy for Uttaranchal University Online programs. Understand our transparent terms and conditions regarding fee refunds.",
  keywords: [
    "fee refund policy",
    "cancellation policy",
    "refund terms",
    "university policy",
    "Uttaranchal University fees",
    "payment terms",
    "admission refund",
    "withdrawal policy"
  ],
  openGraph: {
    title: "Fee Refund Policy | Uttaranchal University Online",
    description: "Read the complete fee refund and cancellation policy for Uttaranchal University Online programs.",
    type: "website",
    url: "https://www.uuonline.in/feeRefund",
    images: [
      {
        url: "/images/hero-section/uu-building.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Fee Refund Policy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fee Refund Policy | Uttaranchal University Online",
    description: "Read the complete fee refund and cancellation policy for Uttaranchal University Online programs.",
    images: ["/images/hero-section/uu-building.png"]
  },
  alternates: {
    canonical: "https://www.uuonline.in/feeRefund"
  }
}

export default function FeeRefundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
