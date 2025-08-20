import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Da el primer paso hacia tu bienestar
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Comienza tu camino hacia una relación saludable con la comida y el bienestar emocional. Estamos aquí para acompañarte.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-nutr-green-500 hover:bg-nutr-green-600">
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}