"use client"

import { useEffect } from "react"
import Image from "next/image"

// Define the company logo interface
interface CompanyLogo {
  id: number
  name: string
  imageUrl: string
}

export default function IndustryTopRecruiters() {
  // Company logos data with both previous and new logos
  const companyLogos: CompanyLogo[] = [
    // Previous logos
    {
      id: 1,
      name: "Google",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-dlhFn27SWcNOABTGN1fLJj3Uxuc4qR.jpeg",
    },
    {
      id: 2,
      name: "Amazon",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-kzxUUYZcVTt2D2IQyeytGjguTexwFT.jpeg",
    },
    {
      id: 3,
      name: "Adobe",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17.jpg-0R7qdqtgLdELF8zVr0yLp9dfqKJPgg.jpeg",
    },
    {
      id: 4,
      name: "Atlassian",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-bGLNmXnu8YXRBsJqvwBEAydWUwZlGo.jpeg",
    },
    {
      id: 5,
      name: "Autodesk",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-YiAJCOIjmZrktR4AppcCUskcGxHjTK.jpeg",
    },
    {
      id: 6,
      name: "Zscaler",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-mPeOaU2Hyd0pB2Q7OLDYLxEm1UeBOm.jpeg",
    },
    {
      id: 7,
      name: "NVIDIA",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08.jpg-Gmztqd17ZepIYGMKKzTGWGtxAaX3c8.jpeg",
    },
    {
      id: 8,
      name: "Deloitte",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-ohNn39IlDtzqQNHNP4tsmwAqLEofUf.jpeg",
    },
    {
      id: 9,
      name: "Ericsson",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.jpg-GpFZYCCIJ3qaj9IKcjFNxsRlmkRUBO.jpeg",
    },
    {
      id: 10,
      name: "Accenture",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29.jpg-toUUHn8gAexivTInNVX8sJUwHGyT3o.jpeg",
    },

    // New logos
    {
      id: 11,
      name: "JUSPAY",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16.jpg-wH7aEK5l69JOcbdcwO32mfoFG5ORC7.jpeg",
    },
    {
      id: 12,
      name: "TCS",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/72.jpg-8TxKGvZFru4LcRIlMfq9Imx8QSSSl3.jpeg",
    },
    {
      id: 13,
      name: "SAP",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43.jpg-HF1xuvG7BIRD8RVsrt09Gcf9dMH8iQ.jpeg",
    },
    {
      id: 14,
      name: "PepsiCo",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-3KHPEn3nnSRdqJgd5gvS6UK2D7w6NF.jpeg",
    },
    {
      id: 15,
      name: "HCLTech",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79.jpg-D0KR4AWmu6AVgEygKngNAVdQNbT9sM.jpeg",
    },
    {
      id: 16,
      name: "Schneider Electric",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15.jpg-9VH1GsasJcDGpnXkXKrhxROb3xQiy2.jpeg",
    },
    {
      id: 17,
      name: "IBM",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-vE0v9trwTHlLnFqZlcfYkTzm9nafgM.jpeg",
    },
    {
      id: 18,
      name: "Citibank",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04.jpg-cZMjx1iueXL0eG7kg1aJcXSkm5TQKO.jpeg",
    },
  ]

  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...companyLogos, ...companyLogos]

  return (
    <section className="py-16 font-figtree relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Back%20Ground%20Industry%20Top%20Recruites-K3TL9GXyOnrsM9pkbTAPCsposTHg4t.png"
          alt="Diagonal striped background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center lg:flex gap-5 justify-center items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2F]">INDUSTRY-TOP</h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#6bc533]">RECRUITERS</h2>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative overflow-hidden border-l-4  bg-white  py-5 border-r-4  px-6 rounded-xl">
          <div 
            className="flex  animate-scroll hover:pause "
            style={{
              width: 'fit-content',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="bg-white border-l-2  p-5  flex items-center justify-center h-24 min-w-[200px] transition-transform flex-shrink-0"
              >
                <div className="relative  h-14 w-full">
                  <Image
                    src={logo.imageUrl || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
