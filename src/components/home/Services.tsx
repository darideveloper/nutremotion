import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programas = [
  {
    title: "Programa de Nutrición",
    description: "Plan dietético personalizado para los 7 días de la semana, adaptado a tus necesidades, objetivos y gustos.",
    features: [
      "Plan dietético personalizado para los 7 días de la semana",
      "Sistema de intercambio de platos a través de nuestra app móvil",
      "Seguimiento continuo por WhatsApp"
    ],
    price: "60 € / mes",
    path: "/programas/nutricion"
  },
  {
    title: "Programa de Psiconutrición",
    description: "Combina un plan dietético personalizado con apoyo psicológico para mejorar tu relación con la comida.",
    features: [
      "Plan dietético personalizado para los 7 días de la semana",
      "Sistema de intercambio de platos a través de nuestra app móvil",
      "Seguimiento continuo por WhatsApp",
      "1 consulta mensual por videollamada"
    ],
    tag: "Popular",
    price: "95 € / mes",
    path: "/programas/psiconutricion"
  },
  {
    title: "Programa Psiconutrición Plus",
    description: "Nuestro programa más completo con mayor apoyo psicológico para una transformación integral.",
    features: [
      "Plan dietético personalizado para los 7 días de la semana",
      "Sistema de intercambio de platos mediante nuestra app móvil",
      "Seguimiento continuo por WhatsApp",
      "2 consultas mensuales por videollamada"
    ],
    price: "130 € / mes",
    path: "/programas/psiconutricion-plus"
  },
  {
    title: "Programa Integral Move",
    description: "Programa completo que integra nutrición, apoyo psicológico y plan de entrenamiento personalizado.",
    features: [
      "Plan dietético personalizado para los 7 días de la semana",
      "Sistema de intercambio de platos con nuestra app móvil",
      "Seguimiento continuo por WhatsApp",
      "1 consulta mensual por videollamada",
      "Plan de entrenamiento personalizado para realizar desde casa"
    ],
    price: "125 € / mes",
    path: "/programas/integral-move"
  },
  {
    title: "Programa Ayuno Intermitente",
    description: "Plan dietético personalizado con estrategias adaptadas para aplicar el ayuno intermitente de forma segura y eficaz.",
    features: [
      "Plan dietético personalizado para los 7 días de la semana con ventanas de alimentación definidas",
      "Sistema de intercambio de platos a través de nuestra app móvil",
      "Seguimiento continuo por WhatsApp"
    ],
    tag: "Nuevo",
    price: "60 € / mes",
    path: "/programas/ayuno-intermitente"
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-nutr-gray-800">Nuestros Programas</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            ✨ Descubre el programa NutreMotion que mejor se adapta a ti. Cada uno de nuestros planes está diseñado para ayudarte a transformar tu relación con la comida, tu cuerpo y tus emociones, acompañándote a tu ritmo y con el apoyo profesional que necesitas para sentirte bien de verdad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programas.map((programa, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-serif text-2xl">{programa.title}</CardTitle>
                  {programa.tag && (
                    <Badge variant="secondary" className="bg-nutr-purple-100 text-nutr-purple-700">
                      {programa.tag}
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-base mt-2">
                  {programa.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {programa.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-nutr-green-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3">
                <div className="text-center w-full">
                  <span className="text-lg font-bold text-nutr-purple-600">{programa.price}</span>
                </div>
                <Button asChild className="w-full bg-nutr-green-500 hover:bg-nutr-green-600">
                  <Link to={programa.path} className="flex items-center justify-center">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-nutr-purple-400 text-nutr-purple-600 hover:bg-nutr-purple-100 hover:text-nutr-purple-700">
            <Link to="/programas">Ver todos los programas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}