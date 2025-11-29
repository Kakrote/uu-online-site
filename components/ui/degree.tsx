import Image from 'next/image'
import { Globe, Building2 } from 'lucide-react'

export function PrestigiousDegreeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 z-0">
        <svg
          width="1920"
          height="903"
          viewBox="0 0 1920 903"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_229_6441)">
            <path
              d="M1042.02 -97C1249.3 -41.4354 1441.33 54.5661 1608.22 183.385C1774.97 312.082 1916.52 473.586 2023 660.279L1935.46 710C1835.72 535.116 1703.05 383.774 1546.71 263.099C1390.52 142.546 1210.53 52.6214 1016 0.478767L1042.02 -96.9907V-97Z"
              fill="#D8D8E1"
              fillOpacity="0.2"
            />
            <path
              d="M541.913 218.002C582.88 208.984 624.726 202.147 667.213 197.539C709.906 192.907 752.27 190.578 794.05 190.578C930.057 190.578 1064.02 214.192 1190.28 259.413C1316.27 304.527 1434.82 371.387 1540.26 457.961L1484.07 526.385C1387.02 446.706 1277.4 384.988 1160.45 343.099C1043.76 301.318 919.893 279.497 794.042 279.497C754.168 279.497 714.934 281.596 676.572 285.759C638.053 289.947 599.337 296.307 560.63 304.831L541.904 218.01L541.913 218.002Z"
              fill="#D8D8E1"
              fillOpacity="0.2"
            />
            <path
              d="M-50.835 956.018C27.9195 794.651 149.063 662.864 295.29 571.468C441.633 479.99 613.069 428.837 792.228 428.837V517.756C629.798 517.756 474.532 564.047 342.099 646.836C209.544 729.683 99.7969 848.997 28.5769 994.919L-50.835 956.026V956.018Z"
              fill="#D8D8E1"
              fillOpacity="0.2"
            />
            <path
              d="M-126 647.992C-57.4503 561.541 22.397 485.614 110.954 422.07C199.272 358.706 296.727 307.364 400.763 270.025L432.167 357.727C337.037 391.906 247.305 439.258 165.322 498.096C83.5846 556.744 10.0065 626.69 -53.0053 706.115L-125.992 647.992H-126Z"
              fill="#D8D8E1"
              fillOpacity="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_229_6441">
              <rect width="1920" height="903" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            {/* Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="block text-gray-900">GET A</span>
                <span className="block text-[#6bc533]">PRESTIGIOUS</span>
                <span className="block text-[#6bc533]">DEGREE</span>
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    GLOBALLY RECOGNISED
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Graduate with UGC-entitled and internationally accepted online degree.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    AT PAR WITH ON-CAMPUS DEGREES
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gain the same academic rigor, recognition, and career advantages of an on-campus degree - all while enjoying the flexibility of online learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Certificate Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-square">
                <Image
                  src="/images/icons/uu-degree.png"
                  alt="University Certificate"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
