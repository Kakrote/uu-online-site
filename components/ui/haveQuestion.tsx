import { main } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

export  const HaveQuestion = () => {
    return (
        <main 
            className='flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 items-center relative mt-6 sm:mt-8 lg:mt-10 mb-10 min-h-[300px]  bg-cover bg-center bg-no-repeat md:w-[700px] lg:w-[1000px] lg:border rounded-full '
            style={{
                backgroundImage: "url('/images/backgrouds/white_bg.svg')"
            }}
        >
            {/* left section */}
            <section className='w-full max-w-lg lg:container lg:w-auto z-10 text-center lg:text-left mb-6 lg:mb-0'>
                <h2 className='text-base sm:text-xl md:text-3xl font-semibold uppercase'>have Questions?</h2>
                <h1 className='text-xl sm:text-2xl md:text-3xl  font-semibold text-[#6bc533] max-w-full lg:max-w-3xl uppercase leading-tight'>
                 Connect with our counsellor.
                </h1>
                <h4 className='text-xs sm:text-sm  mt-2 sm:mt-3 max-w-md mx-auto lg:mx-0'>
                   Fill in your information, and our team will connect with you shortly.
                </h4>
                <button className='mt-3 sm:mt-4 lg:mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#3048CD] text-center flex items-center justify-center gap-2 sm:gap-3 rounded-full text-[#ffffff] text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors mx-auto lg:mx-0'>
                    Apply now <MoveRight className='w-4 h-4 sm:w-5 sm:h-5'/>
                </button>
            </section>
            {/* image section */}
            <section className='relative w-full lg:absolute lg:w-[300px]   lg:-top-[50px]  h-[340px]    lg:right-24  flex-shrink-0'>
                <Image
                    src="/images/faces/call-girl.png"
                    alt='smiling girl'
                    fill
                    className='object-contain lg:object-cover rounded-b-xl'
                    priority
                />
            </section>
        </main>
    )
}


