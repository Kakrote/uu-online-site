import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedStat } from "./animated-stat";
import { AnimatedText, AnimatedButton } from "./animated-text";

interface StatItem {
  value: React.ReactNode;
  label: string;
}

interface ExcellenceSectionProps {
  universityName: string;
  headingTop: string;
  headingMain: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  stats: StatItem[];
  leftBgImage: string;
  leftOverlayGradient?: boolean;
  rightImage: string;
  backgroundPattern: string;
}

export default function ExcellenceSection({
  universityName,
  headingTop,
  headingMain,
  description,
  buttonText,
  buttonLink,
  stats,
  leftBgImage,
  leftOverlayGradient = true,
  rightImage,
  backgroundPattern,
}: ExcellenceSectionProps) {
  return (
    <section className="relative font-figtree mb-10 ">
      <div className="grid grid-cols-1  md:grid-cols-2 ">
        {/* Left Column - Content */}
  <div className="bg-[#3048cd] relative py-12 lg:py-20 px-6 sm:px-10 md:px-16 min-h-[60vh]">
          {/* Background pattern image */}
          <div className="absolute inset-0 right-0 w-full  z-0">
            <Image src={backgroundPattern} alt="Background Pattern" fill className="object-cover object-right" />
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center text-white space-y-5  mt-5  min-h-[500px] lg:px-12">
            <div className="space-y-3  flex flex-col gap-3 lg:px-24  relative  min-h-full ">
              <AnimatedText
                delay={200}
                className="text-white text-2xl   font-bold uppercase"
              >
                {universityName}
              </AnimatedText>

              <AnimatedText
                delay={400}
                className="text-white text-3xl sm:text-4xl  font-bold uppercase"
              >
                {headingTop}
              </AnimatedText>

              <AnimatedText
                delay={600}
                className="text-white text-5xl sm:text-7xl  leading-none font-extrabold uppercase "
              >
                {headingMain}
              </AnimatedText>

              <AnimatedText
                delay={800}
                as="p"
                className="text-base sm:text-lg  font-medium "
              >
                {description}
              </AnimatedText>
            </div>

            <div className="w-full lg:px-24 ">

              <AnimatedButton
                delay={1000}
                href={buttonLink}
                className="inline-flex items-center gap-2 bg-[#6bc533] text-white px-4 py-2 rounded-full hover:bg-[#5ab22c] transition-colors text-sm mt-6"
              >
                {buttonText} <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-64 sm:h-80 md:h-auto">
          <Image
            src={rightImage}
            alt="Uttaranchal University Students"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative py-3 ">
        <div
          className="absolute -top-8 left-1/2 z-40 transform -translate-x-1/2  w-[100%] sm:w-3/4 md:w-1/2 h-36 bg-[#6bc533]  md:rounded-br-[2rem] md:rounded-tl-[2rem] "
        >
          <div className="grid w-full grid-cols-4 h-full">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                label={stat.label}
                index={index}
                totalStats={stats.length}
              />
            ))}
          </div>
        </div>
        <div className="h-12 sm:h-16" />
      </div>
    </section>
  );
}
