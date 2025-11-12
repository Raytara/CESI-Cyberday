interface CardProps {
    image: string;
    name: string;
    lien: string;
    description: string;
}

export default function CardEntreprise({ image, name, lien, description }: CardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100">
            <img
                src={image}
                alt={name}
            />
            <h2 className="text-xl font-semibold text-dark-800 mb-2">{name}</h2>
            <a href={lien} className="text-blue-500 mb-4">{lien}</a>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}