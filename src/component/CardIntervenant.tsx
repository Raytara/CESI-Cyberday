interface CardProps {
  image: string;
  title: string;
  message: string;
}

export default function Card({ image, title, message }: CardProps) {
  return (
    <div className="bg-gradient-to-br rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm mb-4"
      />
      <h2 className="text-xl font-semibold text-dark-800 mb-2">{title}</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}
