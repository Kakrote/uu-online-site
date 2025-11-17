import { main } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

const NextStep = () => {
    return (
        <main 
            className='flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 items-center relative mt-6 sm:mt-8 lg:mt-10 min-h-[300px] sm:min-h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat '
            style={{
                backgroundImage: "url('/images/backgrouds/green_bg.svg')"
            }}
        >
            {/* left section */}
            <section className='w-full lg:w-auto z-10 text-center lg:text-left mb-6 lg:mb-0'>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold uppercase'>Take the </h3>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white max-w-full lg:max-w-3xl uppercase leading-tight'>
                    Next Step into your Educational{' '}
                    <span className='block sm:inline lg:block'>Journey</span>
                </h1>
                <h4 className='text-xs sm:text-sm text-white mt-2 sm:mt-3 max-w-md mx-auto lg:mx-0'>
                    Explore Courses tailored to your ambitions and interests!
                </h4>
                <button className='mt-3 sm:mt-4 lg:mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-center flex items-center justify-center gap-2 sm:gap-3 rounded-full text-[#3048CD] text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors mx-auto lg:mx-0'>
                    Apply now <MoveRight className='w-4 h-4 sm:w-5 sm:h-5'/>
                </button>
            </section>
            {/* image section */}
            <section className='relative w-full lg:absolute lg:w-[400px] xl:w-[600px] lg:-top-[80px] xl:-top-[100px] h-[200px]  sm:h-[250px] lg:h-[400px] xl:h-[500px] lg:right-4 xl:right-10 flex-shrink-0'>
                <Image
                    src="/images/faces/girl.png"
                    alt='smiling girl'
                    fill
                    className='object-contain lg:object-cover'
                    priority
                />
            </section>
        </main>
    )
}

export default NextStep
