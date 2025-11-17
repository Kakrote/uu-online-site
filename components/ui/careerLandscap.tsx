import Image from 'next/image';

const CareerCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <div className="relative w-full h-48">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{description}</p>
      <p className="text-gray-800 text-xs font-medium">
        Courtesy: <span className="font-bold">US BUREAU OF LABOUR STATISTICS</span>
      </p>
    </div>
  </div>
);

export default function CareerLandscape() {
  const cards = [
    {
      title: "8% GROWTH IN THE MANAGEMENT SECTOR",
      description: "The overall employment in the management occupations is projected to grow 8 percent from 2021 to 2031, faster than the average for all occupations.",
      image: "/images/faces/img-1.png"
    },
    {
      title: "4.5 LAKH JOBS IN IT SECTOR",
      description: "The Indian IT industry is expected to grow 15.5% - the highest since 2011 - to reach $227 billion revenue; while adding about 4.5 lakh jobs during the year, according to the National Association of Software & Services Companies (NASSCOM).",
      image: "/images/faces/img-2.png"
    },
    {
      title: "8% GROWTH IN THE MANAGEMENT SECTOR",
      description: "The overall employment in the management occupations is projected to grow 8 percent from 2021 to 2031, faster than the average for all occupations.",
      image: "/images/faces/img-3.png"
    }
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/backgrouds/blue-2.svg)',
      
      }}
    >
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url(/public/blue_bg.svg)',
        backgroundSize: 'cover'
      }} />
      
      <div className="relative z-10 w-full max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-white md:text-4xl text-xl font-semibold tracking-wide mb-2">UNDERSTANDING THE</p>
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold text-balance">GLOBAL CAREER LANDSCAPE</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <CareerCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
