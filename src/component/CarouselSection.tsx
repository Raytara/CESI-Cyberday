import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface CarouselSectionProps<T> {
  items: T[];
  renderCard: (item: T) => ReactNode;
  itemsPerPage?: number;
  autoPlayInterval?: number;
}

export default function CarouselSection<T>({
  items,
  renderCard,
  itemsPerPage = 3,
  autoPlayInterval = 5000,
}: CarouselSectionProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Obtenir les items de la page actuelle
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  // Passer à la page suivante
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Aller à une page spécifique
  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Auto-rotation toutes les 5 secondes
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const interval = setInterval(() => {
      nextPage();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentPage, isPaused, totalPages, autoPlayInterval]);

  // Pause au survol
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="w-full">
      {/* Grille des cards */}
      <div
        className="mt-8 mb-6 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {getCurrentPageItems().map((item, index) => (
          <div key={index} className="w-full">{renderCard(item)}</div>
        ))}
      </div>

      {/* Indicateurs de pagination (dots) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mb-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-[#FFC107] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
