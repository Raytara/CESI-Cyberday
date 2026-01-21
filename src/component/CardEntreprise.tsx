interface CardProps {
    image: string;
    name: string;
    description: string;
}

export default function CardEntreprise({ image, name, description }: CardProps) {
    return (
        <div className="bg-white rounded-[2rem] shadow-sm p-8 flex flex-col items-center text-center border border-gray-100 h-full justify-center">
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