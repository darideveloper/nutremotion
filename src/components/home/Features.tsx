import { Brain, Heart, Utensils, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-nutr-purple-500" />,
    title: "Mente y Alimentación",
    description: "Descubre cómo tus pensamientos y emociones influyen en tu relación con la comida y aprende a gestionar estos procesos."
  },
  {
    icon: <Utensils className="h-8 w-8 text-nutr-green-500" />,
    title: "Nutrición Consciente",
    description: "Aprende a comer de forma consciente, conectando con tus sensaciones de hambre y saciedad."
  },
  {
    icon: <Heart className="h-8 w-8 text-nutr-purple-500" />,
    title: "Bienestar Emocional",
    description: "Desarrolla una relación positiva con tu cuerpo y alimentos, mejorando tu autoestima y bienestar general."
  },
  {
    icon: <Users className="h-8 w-8 text-nutr-green-500" />,
    title: "Apoyo Profesional",
    description: "Recibe acompañamiento personalizado con profesionales especializados en nutrición, psicología y ejercicio físico."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-nutr-orange-600">Nuestro Enfoque</h2>
          <div className="bg-nutr-green-50 p-4 border-l-4 border-nutr-green-400 rounded-r-md mt-6 mx-auto max-w-[800px] text-left">
            <p className="text-muted-foreground italic">
              Te acompañamos a tu ritmo, respetando tu historia y tus tiempos.
              Para nosotros, cada persona es única. Por eso trabajamos desde la escucha activa y el respeto, 
              diseñando estrategias que se adaptan a ti y no al revés. Queremos que disfrutes del proceso, 
              que lo sientas tuyo y que cada paso sea un avance hacia el bienestar que mereces.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow group">
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 rounded-lg inline-flex bg-background group-hover:bg-secondary transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}