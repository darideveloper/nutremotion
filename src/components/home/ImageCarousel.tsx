import { useEffect, useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/images/carousel/image1.jpg",
    alt: "Preparando deliciosa ensalada saludable"
  },
  {
    src: "/images/carousel/image2.jpg",
    alt: "Mujer joven trabajando desde casa en su computadora portátil"
  },
  {
    src: "/images/carousel/image3.jpg",
    alt: "Mujer paseando por la playa"
  },
  {
    src: "/images/carousel/image4.jpg",
    alt: "Comprando frutas y hortalizas frescas en el mercado local"
  },
  {
    src: "/images/carousel/image5.jpg",
    alt: "Mujer trotando en escaleras - ejercicio saludable"
  },
  {
    src: "/images/carousel/image6.jpg",
    alt: "Pasando un día soleado con amigos"
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-nutr-purple-100 shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-nutr-orange-500 scale-110" 
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}