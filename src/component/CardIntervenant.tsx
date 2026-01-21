interface CardProps {
  image: string;
  title: string;
  message: string;
}

export default function Card({ image, title, message }: CardProps) {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 h-full">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-xl object-cover mb-4"
      />
      <h2 className="text-sm font-bold text-black mb-1">{title}</h2>
      <p className="text-xs text-gray-500 mb-2 font-semibold">Délégué à la sécurité numérique</p>
      <p className="text-xs text-gray-500">{message}</p>
    </div>
  );
}
