import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/team-image.jpg" 
                alt="Muchacha reflexionando sobre decisiones alimentarias - NutrEmotion"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-nutr-purple-200 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-nutr-green-200 rounded-full opacity-70 blur-2xl"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-nutr-gray-700">NutrEmotion transforma tu forma de cuidarte</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground italic font-medium">
                  ¿Y si dejar de luchar con la comida fuera posible?<br />
                  ¿Y si cuidarte no significara renunciar, sino reconectar contigo?
                </p>
                <p className="text-muted-foreground">
                  NutrEmotion nace con una misión clara: ayudarte a transformar tu relación con la alimentación, tu cuerpo y tu bienestar desde un enfoque verdaderamente integral.
                  Aquí combinamos la nutrición con la psicología y el movimiento consciente para que por fin dejes atrás las dietas eternas, la culpa y la autoexigencia.
                </p>
                <p className="text-muted-foreground">
                  A través de un acompañamiento cercano, profesional y personalizado, te ayudaremos a construir hábitos reales, sostenibles y en sintonía con tu vida.
                  Sin juicios. Sin extremos. Sin castigos.
                </p>
                <p className="text-muted-foreground font-medium">
                  Tu bienestar no tiene que ser una batalla. Puede ser un reencuentro.<br />
                  Y empieza hoy.
                </p>
              </div>
              <Button asChild variant="outline" className="border-nutr-purple-400 text-nutr-purple-600 hover:bg-nutr-purple-100 hover:text-nutr-purple-700">
                <Link to="/sobre-nosotros">Sobre NutrEmotion</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}