import { div, img, main } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

const AcadmicPartners = () => {
    const icons=[
        {name:"IBM",img:"/images/icons/ibm.png"},
        {name:"ACCA",img:"/images/icons/acca.png"},
        {name:"om",img:"/images/icons/om.png"},
        {name:"ICT",img:"/images/icons/ict.png"},
        {name:"Isdc",img:"/images/icons/isdc.png"},
        {name:"artech",img:"/images/icons/artech.png"}
    ]
    return (
        <main className='mt-10 mb-10'>
            <header>
                <h3 className='text-xl text-[#070707] md:text-2xl lg:text-3xl font-semibold text-center uppercase'>Academic</h3>
                <h1 className='text-2xl text-[#6bc533] font-bold md:text-3xl text-center lg:text-5xl uppercase'>Partners</h1>
            </header>
            {/* icons sections */}
            <div className='mt-10 w-full flex flex-col flex-wrap lg:flex-row items-center gap-3  justify-center '>
                {icons.map((image)=>(
                    <div className='p-10 border  relative rounded-xl  w-[200px] h-[100px]'>
                        <Image
                            src={image.img}
                            alt={`${image.name}`}
                            // width={60}
                            // height={60}
                            fill
                            className='object-cover lg:object-contain p-6'
                        />
                    </div>
                ))}
                
            </div>
        </main>
    )
}

export default AcadmicPartners
