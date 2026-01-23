interface CardProps {
    image: string;
    name: string;
    description: string;
}

export default function CardEntreprise({ image, name, description }: CardProps) {
    return (
        <div className="bg-white rounded-[2rem] p-6 flex flex-col items-center text-center border border-[#FFC107] h-full shadow-[10px_10px_15px_-3px_rgba(252,192,16,0.2)]">
            <img
                src={image}
                alt={name}
                className="h-16 object-contain mb-4"
            />
            <h2 className="text-sm font-bold text-black mb-1">{name}</h2>
            <p className="text-xs text-gray-400">{description}</p>
        </div>
    );
}