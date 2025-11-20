import React from 'react'
import Image from 'next/image'
import { url } from 'inspector'

const Quality = () => {
    return (
        <main
            className='flex flex-col justify-center items-center p-5 mb-10 rounded-2xl lg:py-10 max-w-7xl mx-auto'
            style={{
                backgroundImage: "url(/images/backgrouds/green_bg.svg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed'
            }}>
            {/* comma icon */}
            <div className='mb-6'>
                <Image
                    src={"/images/icons/comma.png"}
                    alt='comma image'
                    width={180}
                    height={180}
                    className='object-cover'
                />
            </div>
            {/* Hindi qoute */}
            <h1 className='text-3xl md:text-5xl font-bold text-white mb-2 text-center'>“पदं हि सर्वत्र गुणैर्निधीयते”</h1>
            {/* English traslation */}
            <h1 className='text-3xl md:text-5xl font-bold text-white mt-2 text-center'>“Good qualities put their footprints everywhere”</h1>
        </main>
    )
}

export default Quality
