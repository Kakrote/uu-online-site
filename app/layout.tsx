import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DrawerWrapper from "@/components/ui/DrawerWrapper";
import BackToTopButton from "@/components/ui/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Uttaranchal University Online | UGC Approved Online Degree Programs",
    template: "%s | Uttaranchal University Online"
  },
  description: "Uttaranchal University Online offers 100+ UGC approved online degree programs with 22+ years of excellence. Flexible learning, industry-relevant curriculum, and career-focused education.",
  keywords: [
    "Uttaranchal University",
    "online degree",
    "UGC approved",
    "online education",
    "distance learning",
    "online MBA",
    "online MCA",
    "flexible learning",
    "career advancement"
  ],
  authors: [{ name: "Uttaranchal University" }],
  creator: "Uttaranchal University",
  publisher: "Uttaranchal University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.uuonline.in'),
  openGraph: {
    title: "Uttaranchal University Online | UGC Approved Online Degree Programs",
    description: "22+ years of educational excellence. 100+ multidisciplinary programs. 500+ companies for placement. Join 15K+ alumni network.",
    url: "https://www.uuonline.in",
    siteName: "Uttaranchal University Online",
    images: [
      {
        url: "/images/hero-section/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Uttaranchal University Online"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttaranchal University Online | UGC Approved Online Degree Programs",
    description: "22+ years of educational excellence. 100+ multidisciplinary programs. 500+ companies for placement.",
    images: ["/images/hero-section/home-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <DrawerWrapper/>

        <BackToTopButton/>
      </body>
    </html>
  );
}
