import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-nutr-gray-700">Sobre NutrEmotion</h1>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-nutr-gray-600">
                NutriMotion es un proyecto dedicado al bienestar integral, donde cuerpo y mente se abordan de forma conjunta a través de la nutrición, la psiconutrición y el movimiento.
              </p>
              
              <p className="text-nutr-gray-600">
                Está liderado por Cristina González, psicóloga y dietista, que aporta una mirada integradora y siempre fundamentada en la evidencia científica.
              </p>
              
              <p className="text-nutr-gray-600">
                En NutriMotion colaboramos con especialistas de distintas áreas, que se suman cuando la situación lo requiere para brindar un acompañamiento integral y ajustado a cada persona.
              </p>
              
              <p className="text-nutr-gray-600">
                Creemos que cada proceso es único y merece una atención personalizada, cercana y rigurosa.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/images/cristina-gonzalez.jpg" 
                alt="Cristina González - Psicóloga y Dietista"
                className="w-full max-w-md h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl border-l-4 border-nutr-green-400 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-nutr-gray-700 mb-4">Nuestra Filosofía</h2>
          <p className="text-nutr-gray-600 mb-4">
            Te acompañamos a tu ritmo, respetando tu historia y tus tiempos.
            Para nosotros, cada persona es única. Por eso trabajamos desde la escucha activa y el respeto,
            diseñando estrategias que se adaptan a ti y no al revés.
          </p>
          <p className="text-nutr-gray-600 italic">
            "Queremos que disfrutes del proceso, que lo sientas tuyo y que cada paso sea un avance hacia el bienestar que mereces."
          </p>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-nutr-purple-500 hover:bg-nutr-purple-600 text-white">
            <Link to="/programas">Conoce Nuestros Programas</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}