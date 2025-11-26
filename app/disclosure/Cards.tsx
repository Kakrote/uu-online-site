import Image from "next/image";

type LinkProps = {
  title: string;
  url: string;
};

type DataProps = {
  image: string;
  title: string;
  desc: string;
  link: LinkProps[];
  showButton: boolean;
};

const Card = ({ image, title, desc, link, showButton }: DataProps) => {
  return (
    <div className="shadow-lg p-4 rounded-xl relative flex flex-col gap-3 ">
      <div className="flex justify-center">
        <Image src={image} alt={title} width={120} height={120} className="object-contain" />
      </div>

      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-black">{desc}</p>

      <div className="flex flex-col gap-1">
        {link.map((item, index) => (
          <a key={index} href={item.url} className="text-[#6bc533] underline">
            {item.title}
          </a>
        ))}
      </div>

      {showButton && (
        <button className="bg-[#6bc533] absolute bottom-8 text-white px-4 py-2 rounded-full w-fit">
         View Document
        </button>
      )}
    </div>
  );
};

export default Card;
