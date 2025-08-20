import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-nutr-beige-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-nutr-orange-500">
              Las reglas han cambiado: perder peso no va de comer menos, sino de transformar tu vida.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              Con <span className="font-medium">NutrEmotion</span> transformarás tu relación con la alimentación, tu cuerpo y tus emociones. Descubre cómo pequeños cambios pueden ayudarte a vivir con más salud, equilibrio y confianza.
            </p>
            {/* Buttons removed as requested */}
          </div>
          <div className="hidden md:flex justify-center relative animate-fade-in delay-300">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
              <ImageCarousel />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-nutr-green-200 rounded-full opacity-70 blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-nutr-purple-200 rounded-full opacity-70 blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 left-0 w-28 h-28 bg-nutr-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-nutr-green-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
}