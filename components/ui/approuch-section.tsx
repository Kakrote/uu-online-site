'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

export default function ApproachSection() {
  const cards = [
    {
      type: 'text',
      title: 'PEDAGOGICAL EFFECTIVENESS',
      description:
        'Led by experienced members of faculty, the Online programs are carefully designed and crafted mixing a wide variety of activities and relevant resources, and hence engage you into a proactive and effective learning journey.',
      iconBg: 'bg-yellow-400',
      icon: '🎓',
    },
    {
      type: 'text',
      title: 'ENGAGEMENT',
      description:
        'Whether through teams of dedicated members of faculty or through regular synchronized events and exchange forums, we provide you with the best support and mentorship.',
      iconBg: 'bg-blue-600',
      icon: '👥',
    },
    {
      type: 'image',
      image: '/images/faces/USCS.png',
    },
    {
      type: 'image',
      image: '/images/faces/libral-arts.png',
    },
    {
      type: 'text',
      title: 'PROBLEM SOLVING',
      description:
        'Online programs at Uttaranchal University nurture you to develop the analytical skills required to be applied to real life problems, add value to your projects and organisation.',
      iconBg: 'bg-green-500',
      icon: '🧩',
    },
    {
      type: 'text',
      title: 'SOCIAL BONDS',
      description:
        'Whether through teams of dedicated members of faculty or through regular synchronized events and exchange forums, we provide you with the best support and mentorship.',
      iconBg: 'bg-pink-500',
      icon: '👍',
    },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1670 1106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_217_7394)">
            <rect width="1670" height="1106" fill="#EE495C" />
            <path
              d="M670.521 -122.002C462.198 -66.405 268.397 29.6526 99.1573 158.546C-69.9399 287.318 -214.428 448.917 -324.285 635.719L-237.623 685.469C-134.715 510.483 0.705053 359.053 159.249 238.307C317.642 117.683 499.281 27.7067 694.787 -24.4663L670.52 -121.993L670.521 -122.002Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M1369.13 125.524C1322.73 115.271 1275.28 107.497 1227.06 102.258C1178.61 96.9912 1130.48 94.3438 1082.97 94.3438C928.309 94.3438 775.49 121.193 630.984 172.608C486.789 223.902 350.614 299.921 228.939 398.354L291.439 476.151C403.424 385.557 529.347 315.384 663.199 267.758C796.74 220.253 938.048 195.444 1081.16 195.444C1126.51 195.444 1171.08 197.829 1214.62 202.563C1258.33 207.324 1302.23 214.556 1346.07 224.248L1369.14 125.533L1369.13 125.524Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M2028.09 964.636C1941.84 781.165 1806.77 631.326 1642.36 527.41C1477.81 423.401 1283.91 365.24 1080.17 365.24L1078.35 466.34C1263.06 466.34 1438.68 518.972 1587.59 613.102C1736.63 707.298 1858.99 842.955 1936.99 1008.87L2028.09 964.645L2028.09 964.636Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M2119.87 614.419C2043.68 516.126 1954.44 429.797 1855.03 357.548C1755.9 285.505 1646.12 227.13 1528.58 184.677L1491.08 284.392C1598.56 323.253 1699.63 377.091 1791.65 443.989C1883.4 510.672 1965.64 590.199 2035.67 680.503L2119.86 614.419H2119.87Z"
              fill="white"
              fillOpacity="0.1"
            />
          </g>
          <defs>
            <clipPath id="clip0_217_7394">
              <rect width="1670" height="1106" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <p className="text-white text-base sm:text-lg font-semibold mb-2">WHAT DRIVES</p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            OUR APPROACH
            <br />
            TO ONLINE LEARNING
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div key={index} className="h-full">
              {card.type === 'text' ? (
                <div className="bg-white rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`${card.iconBg} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-xl sm:text-2xl`}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ) : (
                <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 group">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt="Learning experience"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="bg-green-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
