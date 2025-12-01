export default function FeePaymentOptions() {
  const paymentMethods = [
    {
      title: "CREDIT/ DEBIT CARD",
      image: "/images/icons/card.png",
    },
    {
      title: "NET BANKING",
      image: "/images/icons/net-banking.png",
    },
    {
      title: "UPI/WALLETS",
      image: "/images/icons/upi.png",
    },
  ]

  return (
    <section className="py-12 px-4 bg-white container mx-auto">
      <div className="max-w-5xl ">
        <h2 className="text-5xl md:text-6xl font-bold text-[#6bc533] tracking-tight">FEE PAYMENT</h2>
        <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">OPTIONS</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {paymentMethods.map((method) => (
            <div
              key={method.title}
              className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center min-h-[280px] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center">
                <img src={method.image || "/placeholder.svg"} alt={method.title} className="w-28 h-28 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 text-center">{method.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
