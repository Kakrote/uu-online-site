import CounterText from './CounterText';
import AnimatedSection from './AnimatedSection';

export function ImpactSection() {
  const stats = [
    {
      number: '60+',
      description: 'Countries and 2000+ towns & cities- our students span the globe',
    },
    {
      number: '100k+',
      description: 'Learners have been empowered through Online Manipal',
    },
    {
      number: '93%',
      description: 'Of students say their online degree has a positive ROI',
    },
    {
      number: '81%',
      description: 'Of students find online is equal to on-campus learning',
    },
  ]

  return (
    <section 
      className="relative w-full overflow-hidden px-3  py-12"
      style={{
        backgroundImage: 'url(/images/backgrouds/blue_bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
      }}
    >

      <div className="relative z-10 container mx-auto ">
        <AnimatedSection>
          <div className="mb-16 px-3">
            <p className="text-white text-3xl font-semibold mb-2">OUR</p>
            <h2 className="text-6xl md:text-7xl font-bold text-yellow-300">
              IMPACT
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              delay={0.2 + (index * 0.1)}
              direction="up"
              duration={0.6}
            >
              <div className="flex flex-col">
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  <CounterText 
                    value={stat.number}
                    duration={2500}
                    delay={500 + (index * 200)}
                  />
                </h3>
                <p className="text-white text-base leading-relaxed opacity-90">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
