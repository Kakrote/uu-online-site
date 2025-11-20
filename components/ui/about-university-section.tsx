import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
// import type { BreadcrumbItem } from "@/components/ui/breadcrumbs"

interface AboutUniversitySectionProps {
  // breadcrumbs?: BreadcrumbItem[]
  title?: string
  highlightedTitle?: string
  paragraphs?: string[]
  ctaText?: string
  ctaHref?: string
  imageSrc: string
  imageAlt: string
}

export default function AboutUniversitySection({
  title = "ABOUT THE",
  highlightedTitle = "UNIVERSITY",
  paragraphs = [
    'Uttaranchal University is recognized by the UGC under sections 2(f) and 12 (B) of the UGC Act, 1956, and by other statutory bodies of the State and the Nation. The University has been promoted by Sushila Devi Centre for Professional Studies & Research, a society registered under the Societies Registration Act (1860). The University has been accredited with the prestigious "A+ Grade" by the National Assessment and Accreditation Council (NAAC). Uttaranchal University has become the first university in the State of Uttarakhand to receive "NAAC A+" Grade in the first cycle of Accreditation and thus created a history.',
    "This firmly positions the University among the top 5% HEIs of the nation. The University is undeterred in its mission to provide the best experiential learning to all its students whether regional, national or international, through multi-disciplinary teaching-learning, investing in research and innovation, and inculcating the essence of the above Sanskrit Shloka in its students for transforming lives.",
    "Supported by MSME, Uttaranchal University has set up an Intellectual Property Facilitation Centre to assist industries across Uttarakhand and North India. The University is recognized as a distinguished MSME Host Institution and has received prestigious accolades for its commitment to research, innovation, and entrepreneurship.",
    "The University's notable achievements include being listed in the Times Higher Education Impact Rankings 2024 and the WURI Rankings in 2022, 2023 and 2024 consecutively; which underscore its contributions to global research and innovative practices. In 2024, Uttaranchal University was ranked fifth nationally and twenty-fifth internationally under UNSDG Goal 7- Affordable & Clean Energy by the Times Higher Education World Impact Rankings (A United Kingdom based World Ranking Agency).",
    "Various national and international government agencies have awarded over 100 intellectual property rights to the university's students and faculty members. Furthermore, the university is honoured with the Sustainability Award by the International Council of Circular Economy, recognizing its leadership in sustainable practices. Its inclusion in the SDSN South Asia Network further highlights its commitment to advancing sustainability and impactful research in the region.",
  ],
  ctaText = "Apply Now",
  ctaHref = "#",
  imageSrc,
  imageAlt,
}: AboutUniversitySectionProps) {
  return (
    <section className="py-16 bg-white text-[#2A2A2F] font-figtree">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left column - Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2A2A2F]">{title}</h1>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[#6bc533]">{highlightedTitle}</h1>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#2A2A2F] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-8 py-3 rounded-full hover:bg-[#5ba428] transition-colors text-lg font-medium mt-8"
            >
              {ctaText} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right column - Image */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
