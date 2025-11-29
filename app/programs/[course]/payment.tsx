import Image from 'next/image'

export default function EMIPayments() {
  return (
    <div 
      className=" mb-10 relative overflow-hidden bg-white "
      style={{
        backgroundImage: 'url(/images/backgrouds/white_bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center  px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-700 text-xl font-bold tracking-wide">EASY</p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#6bc533]">EMI PAYMENTS</h1>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
          {/* Blue Card - Left */}
          <div className="flex-1 bg-blue-600 rounded-3xl p-8 text-white shadow-lg">
            <div className="flex items-start gap-6">
              {/* Calendar Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Image 
                    src="/images/icons/cal.png" 
                    alt="Calendar Icon" 
                    width={50} 
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold ">EASY EMI OPTIONS</h3>
                <p className="text-sm leading-relaxed">Learn without the stress — with No Cost EMI and easy part-payment options.</p>
              </div>
            </div>
          </div>

          {/* Green Card - Right */}
          <div className="flex-1 bg-[#6bc533] rounded-3xl p-8 text-white shadow-lg">
            <div className="flex items-start gap-6">
              {/* Fee/Money Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Image 
                    src="/images/icons/fee.png" 
                    alt="Fee Icon" 
                    width={52} 
                    height={52}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold ">EMI STARTING AT</h3>
                <p className="text-2xl font-bold mb-1">₹5,513 <span className="text-sm font-normal">/ Per Month</span></p>
                <p className="text-sm leading-relaxed">For more details & support, contact our Program Advisor. <span className="text-xs">*T&C Apply.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
