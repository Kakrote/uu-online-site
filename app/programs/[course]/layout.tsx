import type { Metadata } from "next"
import { courseConfigs } from "@/lib/course-configs"

type Props = {
  params: Promise<{ course: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course } = await params
  const config = courseConfigs[course]

  if (!config) {
    return {
      title: "Course Not Found | Uttaranchal University Online",
      description: "The requested course page could not be found."
    }
  }

  const courseTitle = config.heroSection.highlightedText || course.toUpperCase()
  const courseDescription = config.heroSection.description

  return {
    title: `${courseTitle} | Uttaranchal University Online`,
    description: courseDescription,
    keywords: [
      courseTitle,
      "online degree",
      "Uttaranchal University",
      "UGC approved",
      "online education",
      "distance learning",
      "flexible learning",
      "career advancement"
    ],
    openGraph: {
      title: `${courseTitle} | Uttaranchal University Online`,
      description: courseDescription,
      type: "website",
      url: `https://www.uuonline.in/programs/${course}`,
      images: [
        {
          url: config.heroSection.backgroundImageSrc,
          width: 1200,
          height: 630,
          alt: config.heroSection.backgroundImageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${courseTitle} | Uttaranchal University Online`,
      description: courseDescription,
      images: [config.heroSection.backgroundImageSrc]
    },
    alternates: {
      canonical: `https://www.uuonline.in/programs/${course}`
    }
  }
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
