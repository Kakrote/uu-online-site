"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUniversity() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.88,
        delayChildren: 0.8,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  }

  const innerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.08,
      },
    },
  }

  return (
    <section className="py-3 lg:py-12 bg-white font-figtree">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left Column - 4 columns wide */}
          <motion.div className="md:col-span-4 border rounded-xl p-8 lg:p-12 shadow-lg" variants={item}>
            <div className="">
              <h2 className="text-[2rem] md:text-[40px] font-bold text-[#2A2A2F] leading-3">Welcome To</h2>
              <h2 className="text-[2rem] md:text-[35px] font-extrabold text-[#6bc533]  ">Uttranchal University</h2>
            </div>

            <div className="mt-3 flex items-start gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/icons/24.svg"
                  alt="22+ Glorious Years"
                  width={80}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="space-y-2">
                <p className="text-[#2A2A2F] text-[0.82rem] lg:text-lg font-medium leading-tight">
                  Driven by a Culture of Excellence,
                  <br />
                  Research & Innovation.
                </p>
                <p className="text-[#3048cd] lg:text-xl text-base font-bold">For The Excellence within 'U'</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 8 columns wide */}
          <motion.div
            className="md:col-span-8 flex flex-col gap-6 pl-2 md:pl-8"
            variants={item}
            transition={{ when: "beforeChildren" }}
          >
            <motion.div className="flex flex-col gap-6" variants={innerContainer}>
              <motion.p className="text-[#2A2A2F] text-base leading-relaxed" variants={item}>
              Uttaranchal University is recognized by the UGC under sections 2(f) and 12 (B) of the UGC Act, 1956, and
              by other statutory bodies of the State and the Nation. The University has been promoted by Sushila Devi
              Centre for Professional Studies & Research, a society registered under the Societies Registration Act
              (1860). The University has been accredited with the prestigious "A+ Grade" by the National Assessment and
              Accreditation Council (NAAC). Uttaranchal University has become the first university in the State of
              Uttarakhand to receive "NAAC A+" Grade in the first cycle of Accreditation and thus created a history.
              </motion.p>
              <motion.p className="text-[#2A2A2F] text-base leading-relaxed" variants={item}>
             Uttaranchal University has become the first university in the State of
              Uttarakhand to receive "NAAC A+" Grade in the first cycle of Accreditation and thus created a history.
              </motion.p>

              <motion.div variants={item}>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-6 py-3 rounded-full hover:bg-[#5ba428] transition-colors w-fit"
                >
                  Read More <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
